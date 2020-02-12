//the default position of the player, and its path
const thePlayer = {
  x: 1,
  y: 1,
  path: [{x: 1, y: 1}] 
}
//define horizontal movement function
function horizontalMovement(player, command){
  //player coordinates must be greater than zero and less than 1
  if (player.y >= 0 && player.y < 2){
    //movements in left and right
      if (command === "l"){
    player.y--;
  } else {
    player.y++;
  }
     //new player paths defined
     let newPosition = {x: player.x, y: player.y};
    player.path.push(newPosition);
  } else {
    console.log(`You cannot place player outside the board`)
  }
console.log(`The current position is: x = ${player.x}, y = ${player.y}`);

}
//define vertical movement functions
function verticalMovement(player, command){
   //player coordinates must be greater than zero and less than 1
  if (player.x >= 0 && player.x < 2){
    //movements in up and down directions
      if (command === 'u'){
    player.x--;
  } else {
    player.x++;
  }
  //new player paths defined
    let newPosition = {x: player.x, y: player.y};
    player.path.push(newPosition);
  } else {
    console.log(`You cannot place player outside the board`)
  }
console.log(`The current position is: x = ${player.x}, y = ${player.y}`);
  
}


//horizontal and vertical movements brought together
function allMovements(player, orderSet){
  //iteration of the different directions possible
  for (let i = 0; i < orderSet.length; i++){
    let order = orderSet[i];
      switch (order){
    case "l":
      horizontalMovement(player, order);
      break;
          case "r":
      horizontalMovement(player, order);
      break;
          case "d":
      verticalMovement(player, order);
      break;
          case "u":
      verticalMovement(player, order);
      break;
  }
  }
}
//RunCode: example!
allMovements(thePlayer, "ld");

console.log(thePlayer.path);
