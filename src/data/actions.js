export const addPlayer = playerData => {
    return {
        type: 'addPlayer',
        playerData: playerData
    }
}

export const deletePlayer = playerIndex => {
    return {
        type: 'deletePlayer',
        playerIndex: playerIndex
    }
}

export const saveGroups = groups => {
    return {
        type: 'saveGroups',
        groups: groups
    }
}

export const saveMatch = matchData => {
    return {
        type: 'saveMatch',
        matchData: matchData
    }
}