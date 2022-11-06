import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Content = () => {
    const styles = {
        marginTop:'50px',
    }
    return (
        <div style={styles}>
            <p className='klass'>Klass</p>
            <p className='bits'>Bits</p>
            <p className="title-th">แพลตฟอร์มจัดการเรียนรู้</p>
            <p className="title-en">Learning <span style={{color:'#492F10'}}>Management</span> System</p>
            <p className='paragraph'>ยกระดับคุณภาพโรงเรียนและบุคคลากรด้านการศึกษา เพื่อการจัดการเรียนการสอนได้อย่างเต็มรูปแบบและมีประสิทธิภาพ</p>
            <button className="btn-dev">xxxx</button>
            <button className="btn-help">help</button>
            <button className="btn-school">school</button>
            <div className="wrapper-getstart">
            </div>
            <button className="btn-getstart">GET STARTED  <FontAwesomeIcon style={{marginLeft:'12px'}} icon={faPlay} color="white" /></button>
        </div>
    )
}


export default Content