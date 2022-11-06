import React from 'react'

const Contacts = ({ children }) => {
    const styles ={
        display:'flex',
        justifyContent:'space-between',
        margin:'63px 111px 0 0',
    }
    return (
        <div style={styles}>{children}</div>
    )
}

export default Contacts