export const addPlayer = playerData => {
    return {
        type: 'addPlayer',
        playerData: playerData
    }
}

export const deletePlayer = player => {
    return {
        type: 'deletePlayer',
        player: player
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