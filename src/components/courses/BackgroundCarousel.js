import React from 'react'
import './courses.css'
const BackgroundCarousel = ({children}) => {
  return (
    <div>
        <div className="carousel-bg1"></div>
        <div className="carousel-bg2"></div>
        <div className="carousel-bg3"></div>
        <div className="carousel-bg4"></div>
        <div className="carousel-bg5"></div>
        <div className="carousel-bg6"></div>
        <div className="carousel-bg7"></div>
        <div className="carousel-bg8"></div>
        <div className="carousel-bg9"></div>
        <div className="carousel-bg10"></div>
        <div className="carousel-bg11"></div>
        <div className="carousel-bg12"></div>
        <div className="carousel-bg13"></div>
        {children}
    </div>
  )
}

export default BackgroundCarousel