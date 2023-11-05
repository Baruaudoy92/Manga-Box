import React from 'react';
import './bannercard.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

function BannerCard() {
  return (
    <>
    <div className='banner'> 
    <div className='right'>
        <h3>ICHIBAN France</h3>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide> One Piece</SwiperSlide>
        <SwiperSlide>jujutsu kaisen</SwiperSlide>
        <SwiperSlide>Hunter x Hunter</SwiperSlide>
        <SwiperSlide>Detective-conan</SwiperSlide>
        <SwiperSlide>Doreamon</SwiperSlide>
        <SwiperSlide>Naruto</SwiperSlide>
        <SwiperSlide>Demon Slayer</SwiperSlide>
        <SwiperSlide>Bleach</SwiperSlide>
        <SwiperSlide>JoJo's Bizarre Adventure</SwiperSlide>
      </Swiper>
    
    </div>
    </div>
  </>
  )
}

export default BannerCard;