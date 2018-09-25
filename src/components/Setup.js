import React, { Component } from 'react';
import { shuffle } from '../utility';
import AddPlayer from '../containers/AddPlayer';
import PlayerList from '../containers/PlayerList';

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
        const disabledStyle = {
            backgroundColor: 'grey'
        }

        const buttonStyle = {
            backgroundColor: 'white'
        }

        return (
            <div>
                <AddPlayer />
                <PlayerList />
                <button 
                    type="button" 
                    onClick={ (e) => this.handleGenerateClick(e) } 
                    style={(this.props.players % 2 === 0) ? buttonStyle : disabledStyle}
                >
                    Generate your bracket!
                </button>
            </div>
        )
    }

};

export default Setup;