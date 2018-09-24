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

const saveGroupsToState = (state, groups) => {
    let newState = { ...state };

    // Create initial Matches
    groups.map((group, i) => {
        newState = {
            ...newState,
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
    let count = 1;
    for (let i = (state.players.length / 2) + 1; i < state.players.length; i += 1) {
        newState = {
            ...newState,
                matches: {
                ...newState.matches,
                [i]: {
                    player1: newState.matches[count].winner,
                    player2: newState.matches[count + 1].winner,
                    p1Points: 0,
                    p2Points: 0,
                    winner: ''
                }
            }
        }
        count += 2;
    }

    return newState;
}

const saveMatchToState = (state, matchData) => {
    let newState = {...state};
    
    newState = {
        ...newState,
        matches: {
            ...newState.matches,
            [matchData.gameNo]: {
                ...newState.matches[matchData.gameNo],
                p1Points: matchData.p1Points,
                p2Points: matchData.p2Points,
                winner: matchData.winner
            }
        }
    }
    return newState;
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'addPlayer':
            return addPlayerToState(state, action.playerData);
        case 'saveGroups':
            return saveGroupsToState(state, action.groups);
        case 'saveMatch':
            return saveMatchToState(state, action.matchData);
        default:
            return state;
    }
};
  
export default reducer;