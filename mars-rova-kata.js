let marsRover = {
    direction: "N",
    x: 0,
    y: 0
  }
  
  function turnLeft (rover){
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
        case "E":
            rover.direction = 'N';
            console.log(`Rover moves to ${rover.direction}`);
  }
  }
  
  function turnRight (rover){
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
          case "W":
              rover.direction = 'N';
              console.log(`Rover moves to ${rover.direction}`);
    }
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
  function moveForward(rover, turning){
    turning(rover);
    if (rover.direction == "E"){
        rover.x++;
    }
    console.log(`The current position is x:${rover.x} and y: ${rover.y}`);
  }
  moveForward(marsRover, turnLeft);
  