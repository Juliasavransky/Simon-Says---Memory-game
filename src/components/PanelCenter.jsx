import React, { Fragment } from 'react';

const PanelCenter = ({
    startHandle,
    stage,
    level,

}) => {

    return (
        <Fragment>
            <button onClick={startHandle} className="center">
                <div>
                    <h1>{stage}</h1>

                    <h4>{level === 0
                        ? ""
                        : level}</h4>
                </div>
            </button>
        </Fragment>

    );
}

export default PanelCenter;