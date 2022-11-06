import React from 'react'
import Line from '../../../assets/Line.png'
import Facebook from '../../../assets/Facebook.png'
const Social = () => {
    const style = {
        position: 'absolute',
        left: '1533.02px',
        top: '39.82px',
    }
  return (
    <div style={style}>
        <img src={Line} alt='Line'/>
        <img src={Facebook} alt='Facebook'/>
    </div>
  )
}

export default Social