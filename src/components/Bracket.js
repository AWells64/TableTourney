import React, { Component, Fragment } from 'react';
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
            height: `${players.length / 2 * 150}px`
        }

        return(
            <Fragment>
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
    }
}

export default Bracket;