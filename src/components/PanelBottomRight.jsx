import React from 'react'

const PanelBottomRight = ({ active, userChoice }) => {

    return (
            <button
                onClick={() => userChoice("green")}
                className={`panel bottom-right ${active ? "greenActive" : ""}`}>
            </button>
    )
}

export default PanelBottomRight

