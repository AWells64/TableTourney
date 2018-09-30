const addPlayerToState = (state, playerData) => {
    let newState = { ...state };
    newState = {
        ...newState,
        players: [
            ...newState.players,
            playerData
        ]
    };
    return newState;
}

const deletePlayerFromState = (state, player) => {
    let newState = { ...state };

    let findName = (element) => {
        return element === player;
    }
    newState.players.splice(newState.players.findIndex(findName), 1);

    newState = {
        ...newState,
        players: [...newState.players ]
    };
    
    return newState;
}

const saveGroupsToState = (state, groups, tourneyName) => {
    let newState = { ...state };

    // Create initial Matches
    groups.map((group, i) => {
        newState = {
            ...newState,
            tourneyName: tourneyName,
            matches: {
                ...newState.matches,
                [i + 1]: {
                    player1: group[0],
                    player2: group[1],
                    p1Points: 0,
                    p2Points: 0,
                    winner: ''
                }
            }
        } 
    })

    // Create Future Matches
    let count = 0;
    for (let i = (state.players.length / 2) + 1; i < state.players.length; i += 1) {
        newState = {
            ...newState,
                matches: {
                ...newState.matches,
                [i]: {
                    player1: `Game ${(i - state.players.length / 2) + count} winner`,
                    player2: `Game ${((i - state.players.length / 2) + 1) + count} winner`,
                    p1Points: 0,
                    p2Points: 0,
                    winner: ''
                }
            }
        }

        count += 1;
    }

    return newState;
}

const saveMatchToState = (state, matchData) => {
    let newState = {...state};
    let nextMatchForWinner = (state.players.length / 2) + (Math.ceil(matchData.gameNo / 2));
    let nextMatchForWinnerPlayerNumber = (matchData.gameNo % 2 !== 0) ? 'player1' : 'player2';
    newState = {
        ...newState,
        matches: {
            ...newState.matches,
            [matchData.gameNo]: {
                ...newState.matches[matchData.gameNo],
                p1Points: matchData.p1Points,
                p2Points: matchData.p2Points,
                winner: matchData.winner
            },
            [nextMatchForWinner]: {
                ...newState.matches[nextMatchForWinner],
                [nextMatchForWinnerPlayerNumber]: matchData.winner
            }
        }
    }
    return newState;
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'addPlayer':
            return addPlayerToState(state, action.playerData);
        case 'deletePlayer':
            return deletePlayerFromState(state, action.player);
        case 'saveGroups':
            return saveGroupsToState(state, action.groups, action.tourneyName);
        case 'saveMatch':
            return saveMatchToState(state, action.matchData);
        default:
            return state;
    }
};
  
export default reducer;