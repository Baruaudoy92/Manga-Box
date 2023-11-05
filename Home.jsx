import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./home.css";
import Banner from './Banner';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

function Home() {
  return (
    <>
    <div className='header'>
       <div className="headerTitles">
        <span className="headerTitleSm">Manga & Chill</span>
        <span className="headerTitleLg">Home</span>
       </div>
       <div> <Banner /> </div>
       <div className='present-1'>
        <h3>
       The best Mangas to READ @MANGAS.FR
        </h3>
        </div>
        <div className='pre-2'>
          <h3>Voici nos mangas les plus populaires : </h3>
        </div>
    </div>
    <div className='all'>
    <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <a href="http://localhost:3000/mangas">VIEW</a></SwiperSlide>
        <SwiperSlide><a href="http://localhost:3000/mangas">VIEW</a> </SwiperSlide>
        <SwiperSlide><a href="http://localhost:3000/mangas">VIEW</a> </SwiperSlide>
        <SwiperSlide><a href="http://localhost:3000/mangas">VIEW</a></SwiperSlide>
        <SwiperSlide><a href="http://localhost:3000/mangas">VIEW</a></SwiperSlide>
        <SwiperSlide><a href="http://localhost:3000/mangas">VIEW</a></SwiperSlide>
        <SwiperSlide><a href="http://localhost:3000/mangas">VIEW</a></SwiperSlide>
        <SwiperSlide><a href="http://localhost:3000/mangas">VIEW</a></SwiperSlide>
        <SwiperSlide><a href="http://localhost:3000/mangas">VIEW</a></SwiperSlide>
      </Swiper>
      <div className='view'>
      <button> <a href="http://localhost:3000/mangas">Mangas</a></button>
      </div>
      </div>
    </>
  )
}

export default Home;