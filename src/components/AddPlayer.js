import React, { Component } from 'react';

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
            <form onSubmit={ canSubmit }>
                <input 
                    type="text" 
                    onChange={ (e) => this.handleChange(e) } 
                    value={ this.state.inputValue }
                />
                <button>Add Player</button>
            </form>

        )
    }
}

export default AddPlayer;