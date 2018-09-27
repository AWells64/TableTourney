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
        return (
            <Fragment>
                <h1 className="title">TableTourney Bracket Generator</h1>
                <div className="setup-wrapper">
                    <div className="setup-left-column">
                        <AddPlayer />
                        <Link to="/bracket/">
                            <button
                                className="generate-button" 
                                type="button" 
                                onClick={ (e) => this.handleGenerateClick(e) } 
                            >
                                GENERATE BRACKET
                            </button>
                        </Link>
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