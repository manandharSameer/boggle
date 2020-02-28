import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props) {
        super(props);
        const showScoreBoard = props.showScoreBoard
        this.state = {
            minutes: 0,
            seconds: 10,
            showScoreBoard
        };
    }

    startTimer() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state;
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval);
                    this.state.showScoreBoard();
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }

    render() {
        const { minutes, seconds } = this.state;
        return (
            <div>
                { minutes === 0 && seconds === 0
                    ? <span>00:00</span>
                    : <span>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
                }
            </div>
        )
    }
}
