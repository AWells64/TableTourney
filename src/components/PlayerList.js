import React, { Component, Fragment } from 'react';
import '../styles/PlayerList.css';

class PlayerList extends Component {
    render() {
        return (
            this.props.players.length > 0 ? (
                <Fragment>
                    <p>Number of players: {this.props.players.length}</p>
                    <ul className="player-list">
                        {
                            this.props.players.map((player, i) => {
                                return (
                                    <li key={i} className="player-list-item">
                                        <p className="player-name">{ player }</p>
                                        <button className="delete-button" onClick={ () => this.props.deletePlayer(player) }>X</button>
                                    </li>

                                ) 
                            })
                        }
                    </ul>
                </Fragment>
            ) : null
        )
    }
}

export default PlayerList;