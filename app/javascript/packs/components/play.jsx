import React from 'react';

class Play extends React.Component {

    render() {
        return (
            <div>
                <div className="main-container">
                    {
                        !this.state.hasGameStarted && <div>
                            <Default />
                        </div>
                    }
                    {
                        this.state.isGameComplete && <Score></Score>
                    }
                    <div  className={(!this.state.isGameComplete && this.state.hasGameStarted) ? 'timer-container': 'timer-container inactive'}>
                        <Timer showScoreBoard={this.showScoreBoard.bind(this)}/>
                    </div>
                    <div className={(!this.state.isGameComplete && this.state.hasGameStarted) ? 'board-area': 'board-area inactive'}>
                        <div className="play">
                            <div className="game-area">
                                <Board
                                    board={this.state.board}
                                />
                            </div>

                            <div className="control-container">
                                <div>
                                    <Input type="text" id="firstname" name="firstname"
                                           placeholder="Word"
                                           onChange={(e) => this.handleWordChangeChange(e.target.value)}/>
                                </div>
                                <div>
                                    <Button onClick={this.submit}> Submit</Button>
                                </div>
                            </div>

                        </div>
                        <div className="sidebar">
                            <div className="found-words-container">
                                <div className="word">ABC</div>
                                <div className="word">ABC</div>
                                <div className="word">ABC</div>
                                <div className="word">ABC</div>
                                <div className="word">ABC</div>
                                <div className="word">ABC</div>
                                <div className="word">ABC</div>
                                <div className="word">ABC</div>
                                <div className="word">ABC</div>
                                <div className="word">ABC</div>
                                <div className="word">ABC</div>
                                <div className="word">ABC</div>
                                <div className="word">ABC</div>
                                <div className="word">ABC</div>
                                <div className="word">ABC</div>
                                <div className="word">ABC</div>
                                <div className="word">ABC</div>
                                <div className="word">ABC</div>
                                <div className="word">ABC</div>
                                <div className="word">ABC</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Play;

