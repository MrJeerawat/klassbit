import React from 'react'
import './about.css'
import Contract1 from './Contract1'
import Contract2 from './Contract2'
const About = () => {
  return (
    <>
      <div className='container-about'>
        <Contract1/>
      </div>
      <div className='container-about-sec'>
        <Contract2/>
      </div>
    </>
  )
}

export default About