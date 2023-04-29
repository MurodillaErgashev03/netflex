import React, { useContext, useState } from 'react'
import logo from '../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")


    const navigate = useNavigate();

    const { setIsLogin } = useContext(LoginContext);

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {



            const res = await fetch('https://reqres.in/api/login', {
                method: "post",
                body: JSON.stringify({
                    email,
                    password,
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            if (res.status === 400) {
                throw new Error("Email yoki parol xato")
            }
            const data = await res.json();
            localStorage.setItem('token', data.token);
            setIsLogin(true)
            navigate("/")
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='container'>
            <header className='pl-[60px] pr-[38px] py-[25px]'>
                <img src={logo} alt="img" />
            </header>
            <div className='w-[400px] mx-auto mt-[50px]'>
                <h2 className='font-normal text-[32px] leading-[24px] text-white flex justify-center'>
                    Log in to   <img className='ml-[15px]' src={logo} alt="img" />

                </h2>
                <form onSubmit={handleSubmit} className='mt-[30px]' >
                    <input value={email} onChange={(evt) => setEmail(evt.target.value)} className='w-[100%] px-[25px] py-[15px]' placeholder='Phone number, email address' />
                    <input value={password} onChange={(evt) => setPassword(evt.target.value)} className='mt-[30px] w-[100%] px-[25px] py-[15px]' type="password" placeholder='Password' />
                    <button type='submit' className='w-[100%] font-normal text-[16px] leading-[22px] text-[#808080] border-[2px] border-[#808080] mt-[20px] p-[15px]'>
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login