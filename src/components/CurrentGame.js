import React, { Component } from 'react';
import '../styles/CurrentGame.css';

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
        let flipTurn = (newPoints + this.state.p2Points) % 5 === 0
        this.setState({ p1Points: newPoints, p1Turn: flipTurn ? !this.state.p1Turn : this.state.p1Turn });
    }

    addP2Point() {
        let newPoints = this.state.p2Points + 1;
        let flipTurn = (this.state.p1Points + newPoints) % 5 === 0
        this.setState({ p2Points: newPoints, p1Turn: flipTurn ? !this.state.p1Turn : this.state.p1Turn });
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
        let { p1Points, p2Points, gameNo } = this.state;
        let winner = "";

        if (p1Points >= 21 && p1Points > (p2Points + 1)) {
            winner = 'p1'    
        } else if (p2Points >= 21 && p2Points > (p1Points + 1)) {
            winner = 'p2'
        }

        const nameStyle = {
            padding: '10px',
            border: '2px solid transparent',
        }
        const turnStyle = {
            backgroundColor: '#302142',
            padding: '10px',
            border: '2px solid white',
            borderRadius: '3px'
        }

        if (winner === 'p1') {
            return (
                <div className="current-game-wrapper">
                    <h2>{ this.props.matches[gameNo].player1 } wins!</h2>
                    <p className="winnerPoints">{p1Points} - {p2Points}</p>
                    {
                        (gameNo === Object.keys(this.props.matches).length) ? null : (
                            <button className="next-game-button" onClick={ () => this.initiateNextGame(this.props.matches[gameNo].player1) }>Next game</button>
                        )
                    }
                </div>
            )
        } else if (winner === 'p2') {
            return (
                <div className="current-game-wrapper">
                    <h2>{ this.props.matches[gameNo].player2 } wins!</h2>
                    <p className="winnerPoints">{p1Points} - {p2Points}</p>
                    {
                        (gameNo === Object.keys(this.props.matches).length) ? null : (
                            <button className="next-game-button" onClick={ () => this.initiateNextGame(this.props.matches[gameNo].player2) }>Next game</button>
                        )
                    }
                </div>
            )
        } else {
            return (
                <div className="current-game-wrapper">
                    <div>
                        <p className="points">{ p1Points }</p>
                        <h2 style={ this.state.p1Turn ? turnStyle : nameStyle}>{ this.props.matches[gameNo] ? this.props.matches[gameNo].player1: null  }</h2>
                        <button className="add-point-button" onClick={ this.addP1Point }>+</button>
                    </div>
                    <p className="hyphen">{ ' - ' }</p>
                    <div>
                        <p className="points">{ p2Points }</p>
                        <h2 style={ this.state.p1Turn ? nameStyle : turnStyle}>{ this.props.matches[gameNo] ? this.props.matches[gameNo].player2: null }</h2>
                        <button className="add-point-button" onClick={ this.addP2Point }>+</button>
                    </div>
                </div>
            )
        }
    }
}

export default CurrentGame;