import React from 'react'

const LinkGroup = () => {
    const items = ['Home','About Us','Courses','Testimonial','Contact Us']
    const style = {
        position: 'absolute',
        left: '633.02px',
        top: '55.82px',
        display:'flex',
        
    }
    
  return (
    <div style={style}>
        {items.map((item,index)=>{
            return (
                <Item key={index} title={item}/>
            )
        })}
    </div>
  )
}
const Item = ({title}) =>{
    const styles = {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#FFFFFF',
        display:'flex',
        marginRight:'40px',
        cursor:'pointer'
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
        <div style={styles}><div style={point}></div>{title}</div>
    )
}

export default LinkGroup