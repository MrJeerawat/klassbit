import React from 'react'

const CardCourse = ({ title, desc, img, ...others }) => {
    let stylesCard = {
        position: 'absolute',
        width: '399.38px',
        height: '165.08px',
        left: '862.59px',
        top: '610.98px',
        background: '#FFFFFF',
        boxShadow: '0px 4px 10px #DCE1FF',
        borderRadius: '10px',
    }
    stylesCard = { ...stylesCard, ...others }
    return (
        <div style={stylesCard}>
            <div>
                <p style={styles.title}>{title}</p>
                <p style={styles.desc}>{desc}</p>
            </div>
            <img style={styles.img} src={img} alt={img} />
        </div>
    )
}
const styles={
    img:{
        position:'absolute',
        bottom:'60px',
        right:'0px',
    },
    title:{
        position: 'absolute',
        width: '149.1px',
        height: '31.95px',
        left: '26.21px',
        top: '0.61px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '24px',
        color: '#F34C2C',
        letterSpacing:'2px',
    },
    desc:{
        position: 'absolute',
        width: '300.26px',
        height: '35.94px',
        left: '26.21px',
        top: '70.49px',
        fontFamily: '"Noto Sans Thai", sans-serif',
        letterSpacing:'2px',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '32px',
        lineHeight: '27px',
        color: '#492F10',
    }
}

export default CardCourse