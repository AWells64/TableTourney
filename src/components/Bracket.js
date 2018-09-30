import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { roundFinder, rowFinder } from '../utility';
import CurrentGame from '../containers/CurrentGame';
import '../styles/Bracket.css';

class Bracket extends Component {
    render() {
        let { matches, players } = this.props;

        const NoOfRounds = Math.ceil((Math.log(players.length)) / (Math.log(2)));
        const bracketWrapperStyle = {
            display: 'grid',
            gridTemplateColumns: `repeat(${NoOfRounds}, 1fr)`,
            gridTemplateRows: `repeat(${players.length / 2}, 1fr)`,
            height: `${players.length / 2 * 200}px`,
            overflow: 'scroll',
            minWidth: '800px',
        }

        return(
            players.length <= 0 ? <Link to="/"><h2 className="player-warning">Click here to add some players to your tournament</h2></Link> : (
                <Fragment>
                    <h1 className="tourney-name">{ this.props.tourneyName }</h1>
                    <div style={bracketWrapperStyle}>
                        {
                            Object.values(matches).map((match, i) => {
                                const gameNo = i + 1; 
                                const initialPlayers = players.length;
                                const currentMatchRound = roundFinder(gameNo, initialPlayers);
                                const currentMatchRow = rowFinder(initialPlayers, currentMatchRound, gameNo);
                                const matchGroupStyle = {
                                    gridColumn: `${currentMatchRound}`,
                                    gridRow: `${currentMatchRow}`,
                                }

                                return (
                                        <div className="match" key={ i } style={matchGroupStyle}>
                                            <p className="game-number">Game {gameNo}</p>
                                            <p className="match-player-text-1">{ match.player1 }</p>
                                            <p className="match-player-text-2">{ match.player2 }</p>
                                        </div>
                                )
                            })
                        }
                    </div>
                    <CurrentGame />
                </Fragment>
            )
        )
    }
}

export default Bracket;