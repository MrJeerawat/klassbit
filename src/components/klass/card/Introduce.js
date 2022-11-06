import React, { useState, useEffect } from 'react'
import './card.css'
import CardContent from './CardContent'
import { ApiCourse } from '../../../http/apiClient'
import Management from '../../../assets/Management.png'
import Management2 from '../../../assets/Management2.png'
import Management3 from '../../../assets/Management3.png'
import Management4 from '../../../assets/Management4.png'
import Management5 from '../../../assets/Management5.png'
import Management6 from '../../../assets/Management6.png'
const Introduce = () => {
    const [cardItems, setCardItems] = useState([])
    const buttonProps = [
        { id: 0, title: 'School', width: '113px', top: '578px', left: '787px' },
        { id: 1, title: 'Teacher', width: '125px', top: '577px', left: '913px' },
        { id: 2, title: 'Classroom', width: '149px', top: '577px', left: '1052px' },
        { id: 3, title: 'Student', width: '122px', top: '577px', left: '1214px' },
        { id: 4, title: 'Parent', width: '110px', top: '651px', left: '787px' },
        { id: 5, title: 'Lesson', width: '113px', top: '651px', left: '910px' },
        { id: 6, title: 'Teaching', width: '135px', top: '651px', left: '1037px' },
        { id: 7, title: 'Track Score', width: '155px', top: '651px', left: '1186px' }
    ]
    const imageProps = [
        { img: Management, left: '81px', top: '839px', },
        { img: Management2, left: '534px', top: '839px', },
        { img: Management3, left: '986px', top: '839px', },
        { img: Management4, left: '81px', top: '1126px', },
        { img: Management5, left: '534px', top: '1126px', },
        { img: Management6, left: '986px', top: '1126px', },
    ]

    const getCardItems = async () => {
        try {
            const response = await ApiCourse.get()
            if (response.data) {
                const data = response.data.map((item, index) => {
                    return { ...item, ...imageProps[index] }
                })
                console.log(data);
                setCardItems(data)
            }
        } catch (error) {
            console.error(error);
        } finally {
            // serCardItems([])
        }
    }
    useEffect(() => {
        if(cardItems.length===0)getCardItems()
    })
    return (
        <>
            <p className="klass-bit-card">Klass Bits</p>
            <p className="title-orange">แพลตฟอร์มจัดการเรียนรู้ (LMS)</p>
            <p className="paragraph-card1 ">Klass Bits แพลตฟอร์มจัดการเรียนรู้ Learning Management
                System (LMS) เพื่อสร้างความสำเร็จในการสอนและการเรียนรู้
                เพื่อสร้างความเหมาะสมสำหรับการจัดการเรียนการสอนในโรงเรียน
                ออนไลน์หรือรูปแบบแบบผสมในระดับชั้นปฐมวัย

            </p>
            <p className="paragraph-card2 ">

                มีระบบเครื่องมือ และฟังก์ชั่นการใช้งานผ่านแอปพลิเคชั่นอย่าง
                ครบถ้วนสำหรับการจัดการเรียนการสอน เพื่อให้นักเรียนได้รับการเรียน
                รู้ในบทเรียนได้อย่างครบถ้วน และเหมาะสมในแต่ละระดับชั้นเรียน
            </p>


            {buttonProps.map(({ title, width, top, left, id }) => {
                return (
                    <ButtonGroup key={id} title={title} width={width} top={top} left={left} />
                )
            })}
            {cardItems.map(({ title, desc, left, top, img }, index) => {
                return (
                    <CardContent key={index} title={title} desc={desc} left={left} top={top} img={img} />
                )
            })}

        </>
    )
}

const ButtonGroup = ({ title, width, top, left }) => {
    let styles = {
        position: 'absolute',
        width: '113.16px',
        height: '46.59px',
        left: '1014.16px',
        top: '0.05px',
        background: '#F4674C',
        boxShadow: '0px 8px 10px -7px #CC3F24',
        borderRadius: '30px',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
    }
    styles = { ...styles, width, top, left }
    return (
        <button style={styles}>{title}</button>
    )
}
export default Introduce