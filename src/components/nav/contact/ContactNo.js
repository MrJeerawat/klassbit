import React from 'react'
import '../menu.css'
const ContactNo = () => {
  const styles ={
    width: '197.03px',
    height: '61.24px',
    background: '#C2351A',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',
    borderRadius: '23px',
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    margin:'6px 0 0 12px'
  }
  return (
    <div style={styles}>
      <p className='contact-no'>
        081-234-5678
      </p>
    </div>
  )
}

export default ContactNo