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

    // Create Future Matches
    if (state.players.length === 4) {
        newState = {
            ...newState,
            matches: {
                ...newState.matches,
                3: {
                    player1: newState.matches[1].winner,
                    player2: newState.matches[2].winner,
                    p1Points: 0,
                    p2Points: 0,
                    winner: ''
                }
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