import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Full from '../../../assets/Full.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
const CarouselItem = () => {
    const wrapper = {
        position: 'absolute',
        width: '1196.81px',
        height: '532.51px',
        left: '297.49px',
        top: '426.69px',
    }
    return (
        <div style={wrapper}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>

            </Swiper>
        </div>
    )
}
const Card = () => {
    return (
        <div style={{ width: '100%', height: '500px' }}>
            <img src={Full} alt="Full" />
        </div>
    )
}
export default CarouselItem