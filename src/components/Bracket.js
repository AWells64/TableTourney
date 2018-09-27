import React, { Component } from 'react';
import { roundFinder, rowFinder } from '../utility';
import '../App.css';

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
                            border: '1px solid black',
                            margin: '20px'
                        }

                        return (
                            <div key={ i } style={matchGroupStyle}>
                                <p className="matchPlayerText">{ match.player1 }</p>
                                <p className="matchPlayerText">{ match.player2 }</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Bracket;