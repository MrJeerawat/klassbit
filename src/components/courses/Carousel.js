import React from 'react'
import BackgroundCarousel from './BackgroundCarousel'
import CarouselItem from './contents/CarouselItem'
import './courses.css'
const Carousel = () => {
  return (
    <BackgroundCarousel>
        <p className='carousel-title1'>Klass Bits Application</p>
        <p className='carousel-title2'>แอพพลิเคชั่นจัดการเรียนการสอนสำหรับนักเรียน</p>
        <CarouselItem/>
    </BackgroundCarousel>
  )
}

export default Carousel