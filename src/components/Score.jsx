import React, { Fragment } from 'react';

const Score = ({ lastScore, highest, currentScore }) => {

    return (
        <Fragment>
            <div className="scoreContainer">

                <div className="score">Current Score
                    <div>{currentScore}</div>
                </div>

                <div className="score">Last Score
                    <div>{lastScore}</div>
                </div>

                <div className="score">Highest Score
                    <div>{highest}</div>
                </div>


            </div>
        </Fragment>
    );
};

export default Score;