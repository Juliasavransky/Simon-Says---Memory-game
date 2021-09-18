import React from 'react';

const PanelBottomLeft = ({ active, userChoice }) => {

    return (
        <button
            onClick={() => userChoice("yellow")}
            className={`panel bottom-left ${active ? "yellowActive" : ""}`}
        >
        </button>

    )
}

export default PanelBottomLeft
