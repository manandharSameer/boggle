import React from 'react';

class Score extends React.Component {

    render() {
        return (
            <div className="score">
                <div>
                    <p> Your score is </p>
                    <p>200</p>

                </div>
                <p><button>New Game</button></p>
            </div>
        );
    }
}

export default Score;
