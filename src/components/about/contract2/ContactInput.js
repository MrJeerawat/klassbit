import React from 'react'
import LogoKlassbits1 from '../../../assets/LogoKlassbits1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import '../about.css'
const ContactInput = () => {
    const style = {
        logo: {
            position: 'absolute',
            width: '266.25px',
            height: '109.19px',
            left: '303.92px',
            top: '119.87px',
        },
        wrapperInput:{
            position: 'absolute',
            width: '800.09px',
            height: '89.19px',
            left: '611.45px',
            top: '119.87px',
            background: '#C3351A',
            boxShadow: 'inset 0px 0px 10px rgba(0, 0, 0, 0.25)',
            borderRadius: '50px',
        },
        label:{
            position: 'absolute',
            width: '238.3px',
            height: '63.9px',
            left: '39.39px',
            top: '-10px',
            fontFamily: "'Noto Sans Thai', sans-serif",
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '32px',
            lineHeight: '48px',
            color: '#FFFFFF',
            textShadow: '0px 2px 1px rgba(0, 0, 0, 0.25)',
        },
        input:{
            position: 'absolute',
            width: '481.92px',
            height: '62.57px',
            background: '#FFFFFF',
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
            borderRadius: '33.5px',
            right: '10.31px',
            top: '10px',
            border:'none',
            fontFamily: "'Noto Sans Thai', sans-serif",
            fontSize:'24px',

        },
        wrapperButton:{
            position: 'absolute',
            width: '187.71px',
            height: '89.19px',
            left: '1474.85px',
            top: '119.87px',
            background: '#FFFFFF',
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
            borderRadius: '33.5px',
        },
        button:{
            position: 'absolute',
            width: '161.08px',
            height: '66.56px',
            left: '10.16px',
            top: '10.19px',
            background: '#FFB146',
            boxShadow: '0px 3px 0px #DF621F',
            borderRadius: '25px',
            border:'none',
            color: '#FFFFFF',
            fontFamily: "'Noto Sans Thai', sans-serif",
            fontSize:'24px',
        }
    }
    return (
        <>
            <img style={style.logo} src={LogoKlassbits1} alt='logo' />
            <div style={style.wrapperInput} >
                <p style={style.label} >Contact us</p>
                <input style={style.input} className='focus'/>
            </div>
            <div style={style.wrapperButton} >
                <button style={style.button} >SEND <FontAwesomeIcon style={{ marginLeft: '12px' }} icon={faPlay} color="white" /></button>
            </div>

        </>
    )
}

export default ContactInput