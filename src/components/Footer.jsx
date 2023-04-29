import React from 'react'
import meta from '../assets/images/facebook.svg';
import insta from '../assets/images/instagram.svg';
import twitter from '../assets/images/twitter.svg';
import youtube from '../assets/images/youtube.svg';

function Footer() {
  return (
    <div className="container">
            <footer className='py-[20px] px-[275px] mt-[40px]'>
      <div className='flex items-center gap-[20px]'>
        <img src={meta} alt="" />
        <img src={insta} alt="" />
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />
      </div>
      <div className='mt-[20px] flex justify-between'>
        <ul >
            <li className='font-normal text-[13px] leading-[17px] text-[#808080]'>
            Seslendirme ve Alt Yazı
            </li>
            <li className='mt-[15px] font-normal text-[13px] leading-[17px] text-[#808080]'>
            Medya Merkezi
            </li>
            <li className='mt-[15px] font-normal text-[13px] leading-[17px] text-[#808080]'>
            Gizlilik
            </li>
            <li className='mt-[15px] font-normal text-[13px] leading-[17px] text-[#808080]'>
            Bize Ulaşın
            </li>
        </ul>
        <ul >
            <li className='font-normal text-[13px] leading-[17px] text-[#808080]'>
            Sesli Betimleme
            </li>
            <li className='mt-[15px] font-normal text-[13px] leading-[17px] text-[#808080]'>
            Yatırımcı İlişkileri
            </li>
            <li className='mt-[15px] font-normal text-[13px] leading-[17px] text-[#808080]'>
            Yasal Hükümler
            </li>
          
        </ul>
        <ul >
            <li className='font-normal text-[13px] leading-[17px] text-[#808080]'>
            Yardım Merkezi
            </li>
            <li className='mt-[15px] font-normal text-[13px] leading-[17px] text-[#808080]'>
            İş İmkanları
            </li>
            <li className='mt-[15px] font-normal text-[13px] leading-[17px] text-[#808080]'>
            Çerez Tercihleri
            </li>
          
        </ul>
        <ul >
            <li className='font-normal text-[13px] leading-[17px] text-[#808080]'>
            Hediye Kartları
            </li>
            <li className='mt-[15px] font-normal text-[13px] leading-[17px] text-[#808080]'>
            Kullanım Koşulları
            </li>
            <li className='mt-[15px] font-normal text-[13px] leading-[17px] text-[#808080]'>
            Kurumsal Bilgiler
            </li>
          
        </ul>
      </div>
      <button className='font-normal text-[13px] leading-[17px] text-[#808080] border-[2px] border-[#808080] mt-[20px] p-[10px]'>
      Hizmet Kodu
      </button>
      <p className='font-normal text-[11px] leading-[14px] text-[#808080] mt-[20px]'>
      © 1997-2021 Netflix, Inc.  (  i-062d573a0ee099242)
      </p>
    </footer>
    </div>
  )
}

export default Footer