import React from 'react';

const PanelTopLeft = ({ active, userChoice }) => {

    return (
            <button
                onClick={() => userChoice("blue")}
                className={`panel top-left ${active ? "blueActive" : ""}`}
            ></button>

    );
}

export default PanelTopLeft;