import React, { Component } from 'react';

class CurrentGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gameNo: 1,
            p1Points: 0,
            p2Points: 0,
            p1Turn: true
        };

        this.addP1Point = this.addP1Point.bind(this);
        this.addP2Point = this.addP2Point.bind(this);
    }

    addP1Point() {
        let newPoints = this.state.p1Points + 1;
        this.setState({ p1Points: newPoints });
    }

    addP2Point() {
        let newPoints = this.state.p2Points + 1;
        this.setState({ p2Points: newPoints });
    }

    initiateNextGame(winner) {
        let matchData = {
            gameNo: this.state.gameNo,
            p1Points: this.state.p1Points,
            p2Points: this.state.p2Points,
            winner: winner
        }
        this.props.saveMatch(matchData)

        let newGameNo = this.state.gameNo + 1;
        this.setState({ p1Points: 0, p2Points: 0, gameNo: newGameNo })
    }

    render() {
        let { p1Points, p2Points, groupedPlayers } = this.state;
        let winner = "";

        if (p1Points >= 21) {
            winner = 'p1'    
        } else if (p2Points >= 21) {
            winner = 'p2'
        }

        if (winner === 'p1') {
            return (
                <div>
                    <h2>player 1 name wins!</h2>
                    <p>{p1Points} - {p2Points}</p>
                    <button onClick={ () => this.initiateNextGame(winner) }>Next game</button>
                </div>
            )
        } else if (winner === 'p2') {
            return (
                <div>
                    <h2>player 2 name wins!</h2>
                    <p>{p1Points} - {p2Points}</p>
                    <button onClick={ () => this.initiateNextGame(winner) }>Next game</button>
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        <h2>Name 1</h2>
                        <p>{ p1Points }</p>
                        <button onClick={ this.addP1Point }>Add Point</button>
                    </div>
                    <p>{ ' - ' }</p>
                    <div>
                        <p>{ p2Points }</p>
                        <h2>Name 2</h2>
                        <button onClick={ this.addP2Point }>Add Point</button>
                    </div>
                </div>
            )
        }
    }
}

export default CurrentGame;