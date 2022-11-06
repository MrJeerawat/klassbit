import React from 'react'
import Carousel from './Carousel'
import Contents from './Contents'
import './courses.css'

const Courses = () => {
  return (
    <>
      <div className='container-courses'>
        <Contents/>
      </div>
      <div className='container-courses-sec'>
        <Carousel/>
      </div>
    </>
  )
}

export default Courses