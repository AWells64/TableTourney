import React, { Component } from 'react';

class AddPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ""
        }
    }

    handleChange(e) {
        this.setState({ inputValue: e.target.value })
    }

    render() {
        return (
            <input 
                type="text" 
                onChange={ (e) => this.handleChange(e) } 
                value={ this.state.inputValue }
            />
        )
    }
}

export default AddPlayer;