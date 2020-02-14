let marsRover = {
  direction: "W",
  x: 1,
  y: 10,
  travelLog: [{x: 0, y: 0}]
}

function turnLeft (rover, command){
if (command === "l") {  
  switch (rover.direction){
  case "N":
      rover.direction = 'W';
      console.log(`Rover moves to ${rover.direction}`);
  break;
  case "W":
      rover.direction = 'S';
      console.log(`Rover moves to ${rover.direction}`);
    break;
    case "S":
        rover.direction = 'E';
        console.log(`Rover moves to ${rover.direction}`);
        break;
      case "E":
          rover.direction = 'N';
          console.log(`Rover moves to ${rover.direction}`);
          break;
}
}
return rover.direction;
}
turnLeft (marsRover)

function turnRight (rover, command){
if (command === "r") {  
    switch (rover.direction){
    case "N":
      rover.direction = 'E';
    console.log(`Rover moves to ${rover.direction}`);
    break;
    case "E":
        rover.direction = 'S';
        console.log(`Rover moves to ${rover.direction}`);
      break;
      case "S":
          rover.direction = 'W';
          console.log(`Rover moves to ${rover.direction}`);
          break;
        case "W":
            rover.direction = 'N';
            console.log(`Rover moves to ${rover.direction}`);
            break;
  }
}
return rover.direction;
  }
//   function turnDirection(rover, command){
//     for (let i = 0; i < command.length; i++){
//       switch (command[i]){
//         case "l":
//           turnLeft(rover);
//           break;
//           case "r":
//             turnRight(rover);
//             break;
//       }
//     }
//   }
// turnDirection(marsRover, "rrr")
function moveForward(rover, command){
if (command === "f"){
if ((rover.x >= 0 && rover.x <= 9) && (rover.y >= 0 && rover.y <= 9)){
switch (rover.direction){
  case "N":
    if (rover.x <= 9 && rover.y === 0){
      console.log("out!")
    } else {
      rover.y--;
    }
    break;
    case "S":
        if (rover.x <= 9 && rover.y === 9){
          console.log("out!")
        } else {
          rover.y++;
        }
        break;
        case "E":
            if (rover.x === 9 && rover.y <= 9){
              console.log("out!")
            } else {
              rover.x++;
            }
            break;
            case "W":
                if (rover.x === 0 && rover.y <= 9){
                  console.log("out!")
                } else {
                  rover.x--;
                }
                break;
}
console.log(`The current position is x:${rover.x} and y: ${rover.y}`);
} else{
  console.log("Enter a valid coordinate!");
}
}
let newPosition = {x: rover.x, y: rover.y};
rover.travelLog.push(newPosition);  

}
moveForward(marsRover, 'f')

function moveBackward(rover, command){
  if (command === "b"){
    if ((rover.x >= 0 && rover.x <= 9) && (rover.y >= 0 && rover.y <= 9)){
    switch (rover.direction){
      case "N":
        if (rover.x <= 9 && rover.y === 0){
          console.log("out!")
        } else {
          rover.y++;
        }
        break;
        case "S":
            if (rover.x <= 9 && rover.y === 9){
              console.log("out!")
            } else {
              rover.y--;
            }
            break;
            case "E":
                if (rover.x === 9 && rover.y <= 9){
                  console.log("out!")
                } else {
                  rover.x--;
                }
                break;
                case "W":
                    if (rover.x === 0 && rover.y <= 9){
                      console.log("out!")
                    } else {
                      rover.x++;
                    }
                    break;
    }
    console.log(`The current position is x:${rover.x} and y: ${rover.y}`);
    } else{
      console.log("Enter a valid coordinate!");
    } 
    }
let newPosition = {x: rover.x, y: rover.y};
rover.travelLog.push(newPosition);
}
function allDirections (rover, commandSet){
for (let i = 0; i < commandSet.length; i++){
  let eachCommand = commandSet[i];
  switch (eachCommand){
    case "f":
      moveForward(rover, eachCommand);
      break;
      case "b":
        moveBackward(rover, eachCommand);
        break;
        case "r":
          turnRight(rover, eachCommand);
          break;
          case "l":
            turnLeft(rover, eachCommand);
            break;
  }
}
}
// allDirections(marsRover, "f");
// for (let i = 0; i < marsRover.travelLog.length; i++){
//   console.log(`Path ${i}: x= ${marsRover.travelLog[i].x}, y= ${marsRover.travelLog[i].y}`)
// }