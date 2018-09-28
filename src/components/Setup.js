import React, { Component, Fragment } from 'react';
import { shuffle } from '../utility';
import { Link } from 'react-router-dom';
import AddPlayer from '../containers/AddPlayer';
import PlayerList from '../containers/PlayerList';
import '../styles/Setup.css';

class Setup extends Component {
    handleGenerateClick(e) {
        e.preventDefault();

        let { players, saveGroups } = this.props;
        let shuffledPlayers = shuffle([...players]);
            
        let groupedPlayers = []
        let groupSize = 2;

        while (shuffledPlayers.length > 0) {
            groupedPlayers.push(shuffledPlayers.splice(0, groupSize));
        }
        
        saveGroups(groupedPlayers);
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
                        <AddPlayer />
                        <p>Add a tournament legal number of players, (2, 4, 8, 16, 32...)</p>
                        <button
                            style={ disabled ? disabledStyle : null }
                            className="generate-button" 
                            type="button" 
                            onClick={ (e) => this.handleGenerateClick(e) }
                            disabled={ disabled }
                        >
                            {
                                !disabled ? (<Link to="/bracket"><span className="generate-button-text">GENERATE BRACKET</span></Link>) :
                                (<span className="generate-button-text">GENERATE BRACKET</span>)
                            }
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