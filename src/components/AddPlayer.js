import React, { Component } from 'react';
import '../styles/AddPlayer.css';

class AddPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ""
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.inputValue);
        this.setState({ inputValue: "" })
    }

    handleChange(e) {
        this.setState({ inputValue: e.target.value })
    }

    render() {
        let canSubmit = this.state.inputValue !== '' ? ((e) => this.handleSubmit(e)) : ((e) => e.preventDefault());
        return (
            <form className="add-player-form" onSubmit={ canSubmit }>
                <label className="input-label">Add a player to your tourney:</label>
                <input 
                    className="player-input"
                    type="text" 
                    onChange={ (e) => this.handleChange(e) } 
                    value={ this.state.inputValue }
                />
                <button className="add-player-button">+</button>
            </form>

        )
    }
}

export default AddPlayer;