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