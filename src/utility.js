export const shuffle = (array) => {
      let currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
    
      return array;
}

export const roundFinder = (gameNo, initialPlayers) => {
  let roundNo = 0

  if (gameNo <= initialPlayers / 2) {
      roundNo = 1;
  } else if (gameNo > initialPlayers / 2 && gameNo <= (3 * initialPlayers) / 4) {
      roundNo = 2;
  } else if (gameNo > (3 * initialPlayers) / 4 && gameNo <= (7 * initialPlayers) / 8) {
      roundNo = 3;
  } else if (gameNo > (7 * initialPlayers) / 8 && gameNo <= (15 * initialPlayers) / 16) {
      roundNo = 4;
  } else if (gameNo > (15 * initialPlayers) / 16 && gameNo <= (31 * initialPlayers) / 32) {
      roundNo = 5;
  } else if (gameNo > (31 * initialPlayers) / 32 && gameNo <= (63 * initialPlayers) / 64) {
      roundNo = 6;
  }

  return roundNo;
}

export const rowFinder = (startingPlayers, currentRound, matchNo) => {
  let startingRow = (startingPlayers / 4) * (1 - (Math.pow(0.5, (currentRound - 1)))) + 1;
  
  //let firstMatchInRound = 0 // round 2 = (startingPlayers / 2) + 1
                            // round 3 = (startingPlayers / 2) + (startingPlayers / 4) + 1
                            // round 4 = (startingPlayers / 2) + (startingPlayers / 4) + (startingPlayers / 8) + 1


  let firstMatchInRound = 0
  for (let i = 0; i < (currentRound - 1); i += 1) {
    firstMatchInRound += (startingPlayers / (2 * (Math.pow(2, i))))
    //console.log(firstMatchInRound);
  }
  firstMatchInRound += 1

  let rowNumber = Math.floor((matchNo - firstMatchInRound) + startingRow);
  return rowNumber;
}