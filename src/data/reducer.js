const addPlayerToState = (state, playerData) => {
    let newState = { ...state };
    newState = {
        ...newState,
        players: [
            ...newState.players,
            playerData
        ]
    };
    //newState.players.push(playerData);
    return newState;
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'addPlayer':
            return addPlayerToState(state, action.playerData);
        default:
            return state;
    }
};
  
export default reducer;