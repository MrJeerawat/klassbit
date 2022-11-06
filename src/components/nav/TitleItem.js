import React from 'react'
import './menu.css'
const TitleItem = ({title}) => {
    const styles = {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#FFFFFF',
        display:'flex',

    }
    const point = {
        width: '6.66px',
        height: '6.66px',
        background: '#FFDC31',
        borderRadius:'50%',
        alignItems:'center',
        justifyContent: 'center',
        textAlign:'center',
        margin:'9px 15px 0 0'
    }
    return (
        <div style={styles} className='menu-item'><div style={point}></div> {title}</div>
    )
}

export default TitleItem