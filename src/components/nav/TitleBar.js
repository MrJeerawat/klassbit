import React from 'react'

const style = {
    display: 'flex',
    justifyContent: 'space-between',
}
const TitleBar = ({ children }) => {
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default TitleBar