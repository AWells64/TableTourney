import React, { Component, Fragment } from 'react';
import { shuffle } from '../utility';
import { Link } from 'react-router-dom';
import AddPlayer from '../containers/AddPlayer';
import PlayerList from '../containers/PlayerList';
import '../styles/Setup.css';

class Setup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tourneyNameValue: ""
        }
    }
    handleGenerateClick(e) {
        e.preventDefault();

        let { players, saveGroups } = this.props;
        let shuffledPlayers = shuffle([...players]);
            
        let groupedPlayers = []
        let groupSize = 2;

        while (shuffledPlayers.length > 0) {
            groupedPlayers.push(shuffledPlayers.splice(0, groupSize));
        }

        const tourneyName = this.state.tourneyNameValue;
        
        saveGroups(groupedPlayers, tourneyName);

        this.props.history.push('/bracket');
    }

    handleChange(e) {
        this.setState({ tourneyNameValue: e.target.value })
    }

    render() {
        const { players } = this.props;
        const len = players.length;
        const disabled = (len < 2) || (len > 2 && len < 4) || (len > 4 && len < 8) || (len > 8 && len < 16) || (len > 16 && len < 32) || (len > 32 && len < 64);
        const disabledStyle = {
            fontSize: '1.6em',
            marginLeft: '25px',
            marginTop: '30px',
            padding: '20px',
            backgroundColor: '#aaa',
            color: 'white',
            border: '2px solid white',
            borderRadius: '3px'
        }

        return (
            <Fragment>
                <h1 className="title">TableTennis Bracket Generator</h1>
                <div className="setup-wrapper">
                    <div className="setup-left-column">
                        <div>
                            <label className="input-label">Enter a name for your tournament:</label>
                            <input className="tourney-name-input" value={this.state.tourneyNameValue} type="text" onChange={ (e) => this.handleChange(e)} />
                        </div>
                        <AddPlayer />
                        <p>Add a tournament legal number of players, (2, 4, 8, 16, 32...)</p>
                        <button
                            style={ disabled ? disabledStyle : null }
                            className="generate-button" 
                            type="button" 
                            onClick={ disabled ? null : (e) => this.handleGenerateClick(e) }
                            disabled={ disabled }
                        >
                            <span className="generate-button-text">GENERATE BRACKET</span>
                        </button>
                    </div>
                    <div className="setup-right-column">
                        <PlayerList />
                    </div>
                </div>
            </Fragment>
        )
    }

};

export default Setup;