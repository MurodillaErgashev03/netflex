
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Link } from 'react-router-dom';

function NewSwiper({props}) {

    return (
       

        <div className='container'>
            <Swiper
                className='SwiperTop'

                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                speed={5000}
                autoplay={{
                    delay: 10,
                    disableOnInteraction: false,
                }}
                navigation
                spaceBetween={50}
                slidesPerView={5}



            >
                {props.map((movie, i) => {
                    return (<SwiperSlide className='SwiperSlide' key={i}>
                      <Link to={'./single/' + movie.id }>
                      <img src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path} alt="" />
                      </Link>

                    </SwiperSlide>)
                })}


            </Swiper>
        </div>
    )
}

export default NewSwiper