import React from 'react'
import CoppyRight from './contents/CoppyRight'
import LinkGroup from './contents/LinkGroup'
import Social from './contents/Social'

const style = {
    position: 'absolute',
    width: '1917.02px',
    height: '133.13px',
    left: '2.4px',
    top: '5878.88px',
    background: '#C3351A',
    zIndex: '-10'
}
const Footer = () => {
    return (
        <div style={style}>
            <CoppyRight/>
            <LinkGroup/>
            <Social/>
        </div>
    )
}

export default Footer