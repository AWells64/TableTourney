import React, { Component } from 'react';
import { shuffle } from '../utility';
import AddPlayer from '../containers/AddPlayer';
import PlayerList from '../containers/PlayerList';

class Setup extends Component {
    constructor(props) {
        super(props);
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
        
        saveGroups(groupedPlayers);
    }

    render() {
        return (
            <div>
                <AddPlayer />
                <PlayerList />
                <button type="button" onClick={ (e) => this.handleGenerateClick(e) }>Generate your bracket!</button>
            </div>
        )
    }

};

export default Setup;