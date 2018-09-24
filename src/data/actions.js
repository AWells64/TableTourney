export const addPlayer = playerData => {
    return {
        type: 'addPlayer',
        playerData: playerData
    }
}

export const saveGroups = groups => {
    console.log(groups);
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