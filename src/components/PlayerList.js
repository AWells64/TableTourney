import React, { Component } from 'react';

class PlayerList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.players.map((player, i) => {
                        return (
                            <li key={i}>
                                <p>{ player }</p>
                                <button onClick={ () => this.props.deletePlayer(i) }>Delete</button>
                            </li>
                        ) 
                    })
                }
            </ul>
        )
    }
}

export default PlayerList;