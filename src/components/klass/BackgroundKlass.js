import React from 'react'
// import Book from '../nav/Book'
import './klass.css'
const BackgroundKlass = ({children}) => {
  return (
    <div>
        {/* <img className="" src={Book} alt="Book"/> */}
        <div className='book1'></div>
        <div className='book2'></div>
        <div className='laptop1'></div>
        <div className='laptop2'></div>
        <div className='laptop3'></div>
        <div className='pencil1'></div>
        <div className='pencil2'></div>
        <div className='pencil3'></div>
        <div className='lion1'></div>
        {children}
    </div>
  )
}

export default BackgroundKlass