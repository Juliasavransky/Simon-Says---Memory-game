import React, { Fragment } from 'react';

const Score = ({ score, lastScore }) => {

    return (
        <Fragment>
            <div className="scoreContainer">
                <div className="new-score">New Score 
                   <div>{score}</div>
                </div>
                <div className="last-score">Last Score
                    <div>{lastScore}</div>
                </div>
            </div>
        </Fragment>
    );
};

export default Score;