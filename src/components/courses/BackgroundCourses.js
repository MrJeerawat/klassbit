import React from 'react'
import './courses.css'
const BackgroundCourses = ({ children }) => {
    return (
        <div>
            <div className='course-bg1'></div>
            <div className='course-bg2'></div>
            <div className='course-bg3'></div>
            <div className='course-bg4'></div>
            <div className='course-bg5'></div>
            <div className='course-bg6'></div>
            <div className='course-bg7'></div>
            <div className='course-bg8'></div>
            <div className='course-bg9'></div>
            <div className='course-bg10'></div>
            <div className='course-bg11'></div>
            <div className='course-bg12'></div>
            <div className='course-bg13'></div>
            <div className='course-bg14'></div>
            <div className='lab-gb1'>
                <div className="lab-gb2">

                </div>
                <div className="lab-gb3">

                </div>
            </div>
            {children}
        </div>
    )
}

export default BackgroundCourses