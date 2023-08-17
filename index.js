
 
function distanceFromHqInBlocks(blockNum){

let blocksDis = 0;

if (blockNum >= 42) {
blocksDis = blockNum - 42;
}
else {
blocksDis = 42 - blockNum;
}

return blocksDis;
}


function distanceFromHqInFeet(blockNum){
    return distanceFromHqInBlocks(blockNum) * 264;

    
}


function distanceTravelledInFeet(start, destination) {
      return Math.abs((start - destination) * 264);
}



  //The first four hundred feet are free


  
  //For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!)


  
  
  //Then Scuber charges a flat fare of $25 for a distance over 2000 feet and under 2500 feet




  /*Finally, Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far'

  
  
  if a ride over 2500 feet is requested.*/

  
  
  //returns the fare for the customer




/*function calculatesFarePrice(start, end) {
  function distanceTravelledInFeet(start, end);

  let distanceInFeet =  Math.abs((start - end) * 264);

  if (distanceInFeet < 400) {
    return 0;

  } else if (distanceInFeet >= 400 && distanceInFeet < 2000) {
    return (distanceInFeet * .02);

  }
  else if ((distanceInFeet >= 2000) && (distanceInFeet <= 2500)) {
    return 25;

  }
  else {
    return 'cannot travel that far';
  }*/

  function distanceTravelledInFeet(start, end) {
    return Math.abs((start - end) * 264);
  }
  
  function calculatesFarePrice(start, end) {
  
    const distanceTravelled = distanceTravelledInFeet(start, end);
  
    if (distanceTravelled < 400) {
      return 0;
  
    } else if (distanceTravelled >= 400 && distanceTravelled < 2000) {
      return (distanceTravelled - 400) * .02;

  
    } else if ((distanceTravelled >= 2000) && (distanceTravelled <= 2500)) {
      return 25;
      
    }
    else {
      return 'cannot travel that far';
    }
  }


    