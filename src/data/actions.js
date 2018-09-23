export const addPlayer = playerData => {
    return {
        type: 'addPlayer',
        playerData: playerData
    }
}