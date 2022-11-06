import React from 'react'
import BackgroundCourses from './BackgroundCourses'
import CardCourse from './contents/CardCourse'
import Courses1 from '../../assets/Courses1.png'
import Courses2 from '../../assets/Courses2.png'
import './courses.css'
const Contents = () => {

    const cardCourseProps = [
        {title:'Mathematics', desc:'วิชาคณิตศาสตร์' ,left:'862px'  ,img:Courses1},
        {title:'Science', desc:'วิชาวิทยาศาสตร์', left:'1341px', img:Courses2}
    ]
    return (
        <BackgroundCourses>
            <p className="course-title">Courses</p>
            <p className="course-title2">หลักสูตรเนื้อหาวิชาที่เปิดสอน</p>
            <p className='paragraph-courses1'>เนื้อหาวิชา สื่อประกอบการสอน และชุดข้อสอบเพื่อวัดผลการเรียนรู้ในแต่ละระดับ
                ชั้นโดยใช้มาตรฐานกลางสำหรับสถาบันการศึกษา เพื่อยกระดับคุณภาพ บุคคลากรและเกิดประโยชน์สูงสุดของผู้เรียน
            </p>
            {cardCourseProps.map(({title,desc,left,img},index)=>{
                return (
                    <CardCourse key={index} title={title} desc={desc} left={left}  img={img}/>
                 )
            })}
        </BackgroundCourses>
    )
}


export default Contents