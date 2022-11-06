import React from 'react'
import './card.css'
const CardBackground = ({children}) => {
  return (
    <div className="card-background ">
        <div className='book-set1'></div>
        <div className='children1'></div>
        <div className='books1'></div>
        <div className='lamp1'></div>
        <div className='book-card-bg1'></div>
        <div className='book-card-bg2'></div>
        <div className='laptop-card-bg2'></div>
        <div className='pencil-card-bg1'></div>
        <div className='pencil-card-bg2'></div>
        <div className='star-card-bg1'></div>
        <div className='star-card-bg2'></div>
        {children}
    </div>
  )
}

export default CardBackground