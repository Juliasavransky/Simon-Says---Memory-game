import React from 'react'

const PanelTpoRight = ({ active, userChoice }) => {

    return (
        
        <button
            onClick={() => userChoice("red")}
            className={`panel top-right ${active ? "redActive" : ""}`}>
        </button>
    )
}

export default PanelTpoRight
