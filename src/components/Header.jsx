import React, { useContext } from 'react';
import logo from '../assets/images/logo.svg';
import lupa from '../assets/images/lupa.svg';
import gift from '../assets/images/gift.svg';
import arama from '../assets/images/arama.svg';
import bird from '../assets/images/bird.svg';
import icon from '../assets/images/icon.svg'; 
import { Link } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

function Header() {

  const {isLogin,setIsLogin} = useContext(LoginContext);

  const logoutHandler = ()=>{
       setIsLogin(false);
       localStorage.removeItem('token');
  }
  return (
   <div className='container'>
     <header className='pl-[60px] pr-[38px] py-[25px] flex items-center justify-between'>
        <div className='flex' >
        <Link to={'/'}>
          <img src={logo}  alt="img" />
            
            </Link>
          <ul className='header-list'>
            <li className='header-item-list'>
            <Link to={'/'}>
            Ana Sayfa
            </Link>
            </li>
            <li className='header-item-list'>
            Diziler
            </li>
            <li className='header-item-list'>
            Filmler
            </li>
            <li className='header-item-list'>
            Yeni ve Popüler
            </li>
            <li className='header-item-list'>
            Listem
            </li>
            <li className='header-item-list'>
             {!isLogin ?(
              <Link to='./login' > Log in</Link>
             ):(
              <button onClick={logoutHandler} className='header-item-list'>
                Log out
              </button>
             )}
            </li>
          </ul>
        </div>
        <div className='flex gap-[20px] items-center'>
          <img src={lupa} alt="" />
          <h3 className='text-[14px] leading-[18px] font-medium text-[white]'> 
          ÇOCUK
          </h3>
          <img src={gift} alt="" />
          <img src={arama} alt="" />
          <img src={bird} alt="" />
          <img src={icon} alt="" />
        </div>
    </header>
   </div>
  )
}

export default Header