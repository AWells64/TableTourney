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

    groups.map((group, i) => {
        newState = {
            ...newState,
            matches: {
                ...newState.matches,
                [i + 1]: {
                    player1: group[0],
                    player2: group[1],
                    p1Points: 0,
                    p2Points: 0
                }
            }
        } 
    })

    return newState;
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'addPlayer':
            return addPlayerToState(state, action.playerData);
        case 'saveGroups':
            return saveGroupsToState(state, action.groups);
        default:
            return state;
    }
};
  
export default reducer;