import React from 'react';
import {Button} from "react-bootstrap";

class Default extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            submitted: false
        };
        this.handleUserChange = this.handleUserChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleUserChange(input) {
        this.state.username = input;
    }

    submit() {
        console.log(this.state.username);
        localStorage.setItem('user', this.state.username);
        this.props.history.push('/play')
    }

    render() {
        return (
            <div className="default">
                <div>
                    Lets play Boggle
                </div>
                <div>
                    <input
                        type="text"
                        name="userName"
                        className="form-control input-element"
                        placeholder="Enter a User name"
                        aria-label="userName"
                        aria-describedby="basic-addon1"
                        onChange={e => this.handleUserChange(e.target.value)}
                    />
                </div>
                <div>
                    <Button onClick={this.submit}>Submit</Button>
                </div>
            </div>

        );
    }
}

export default Default;
