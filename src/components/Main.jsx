import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import top10 from '../assets/images/top10.svg';
import NewSwiper from './NewSwiper';
import BigSwipwr from './BigSwipeer';


function Main() {

    const [movies, setMovies] = useState([]);
    const [NewMovies, setNewMovies] = useState([]);
    const [BigMovies, setBigMovies] = useState([])
    const [NewMovies1, setNewMovies1] = useState([])
    const [movieTv, setMovieTv] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(' https://api.themoviedb.org/3/tv/popular?api_key=17e1c204e79a2124ba314092d8d3bbbd');
            const data = await response.json();

            setMovies(data.results)
        }
        fetchData();
    }, []);

   
    

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=17e1c204e79a2124ba314092d8d3bbbd');
            const data = await response.json();
             
            setNewMovies(data.results)
        }
        fetchData();
    }, []);

    

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=17e1c204e79a2124ba314092d8d3bbbd');
            const data = await response.json();
            setBigMovies(data.results)
           
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=17e1c204e79a2124ba314092d8d3bbbd');
            const data = await response.json();
              setNewMovies1(data.results)
           
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=17e1c204e79a2124ba314092d8d3bbbd');
            const data = await response.json();
              setMovieTv(data.results)
           
        }
        fetchData();
    }, []);


    return (
        <div className='container'>

            <section className='hero'>
                <div className='pl-[60px] pt-[160px] w-[635px]'>
                    <h2 className=' w-[410px] text-center text-white font-bold text-[90px] leading-[70px]'>
                        Yanimda
                        Kal
                    </h2>
                    <h4 className='text-white flex items-center gap-[15px] font-medium	text-[30px] leading-[38px] mt-[15px] mb-[15px]'>
                        <img src={top10} alt="" />
                        Türkiye’de Bugün 4 Numara
                    </h4>
                    <p className='text-white font-normal text-[26px] leading-[33px] mb-[15px]'>
                        Küçük yaşta başının çaresine bakmayı öğrenen ve çok çalışarak iş dünyasında önemli bir konuma gelen Emir, bir gün sokak şarkıcısı bir kızla karşılaşır ve hayatı değişir.
                    </p>
                    <div className=' relative'>
                        <button className='text-[22px] leading-[28px] font-medium hero-l-btn bg-[white] py-[18px] pl-[80px] pr-[30px] rounded-[4px]'>
                            Oynat
                        </button>
                        <button className=' ml-[15px] hero-r-btn text-[22px] leading-[28px] font-medium text-white bg-[#ffffff4d]  py-[18px] pl-[82px] pr-[30px] rounded-[4px]'>
                            Daha Fazla Bilgi
                        </button>
                    </div>
                </div>

                <div className='mt-[15px] ml-[60px]'>
                    <h3 className='ml-[20px] font-medium text-[26px] leading-[33px] text-[#E5E5E5] mb-[10px]'>
                        Netflix'te Popüler
                    </h3>
                    <div className='swiperBlock flex gap-[15px]'>
                    <NewSwiper props={NewMovies1} />
                    </div>
                </div>

            </section >
            <section className='pl-[60px]'>
                <div className='mt-[40px]'>
                    <h3 className='font-medium ml-[20px] text-[26px] leading-[33px] text-[#E5E5E5] mb-[10px]'>
                        Kemal, İzlemeye Devam Et
                    </h3>
                    <NewSwiper  props={NewMovies}/>
                </div>
            </section>
            <section className='pl-[60px]'>
                <div className='mt-[40px]'>
                    <h3 className='font-medium ml-[20px] text-[26px] leading-[33px] text-[#E5E5E5] mb-[10px]'>
                        Gündemdekiler
                    </h3>
                    <NewSwiper props={movieTv} />
                   
                </div>
            </section>

            <section className='pl-[60px]'>
                <div className='mt-[45px]'>
                    <h3 className='font-medium ml-[20px] text-[26px] leading-[33px] text-[#E5E5E5] mb-[10px]'>
                    Netflix Orijinal İçerikleri
                    </h3>
                    <BigSwipwr props={BigMovies}/>
                   
                </div>
            </section>
            
            <section className='pl-[60px]'>
                <div className='mt-[45px]'>
                    <h3 className='font-medium ml-[20px] text-[26px] leading-[33px] text-[#E5E5E5] mb-[10px]'>
                    Türkiye'de Bugünün Top 10 Listesi
                    </h3>
                    <NewSwiper props={movieTv} />
                </div>
            </section>
            <section className='mt-[40px] ml-[60px]'>
                    <h3 className='ml-[20px]  font-medium text-[26px] leading-[33px] text-[#E5E5E5] mb-[10px]'>
                    Yeniden İzle
                    </h3>
                    <div className='swiperBlock flex gap-[15px]'>
                        <NewSwiper props={BigMovies} />
                    </div>
                </section>
        </div >
    )
}

export default Main