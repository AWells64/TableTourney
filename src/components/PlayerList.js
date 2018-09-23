import React, { Component } from 'react';

class PlayerList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.players.map((player, i) => {
                        return <li key={ i }>{ player }</li>
                    })
                }
            </ul>
        )
    }
}

export default PlayerList;