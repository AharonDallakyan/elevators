const elevators = [{
    id: 1,
    currentFloor: 1
  },
  {
    id: 2,
    currentFloor: 2
  },
  {
    id: 3,
    currentFloor: 3
  }
];


function orderElevator(floor) {
  let closestElevator = elevators[0];
  let closestDifference = Math.abs(closestElevator.currentFloor - floor);
  for (let i = 1; i < elevators.length; i++) {
    const currentDifference = Math.abs(elevators[i].currentFloor - floor);
    if (currentDifference < closestDifference) {
      closestElevator = elevators[i];
      closestDifference = currentDifference;
    }
  }
  console.log(`Elevator ${closestElevator.id} is moving from Floor ${closestElevator.currentFloor} to Floor ${floor}`);

  setTimeout(() => {
    closestElevator.currentFloor = floor;
    console.log(`Elevator ${closestElevator.id} has arrived at Floor ${floor}`);
  }, 1000);
  console.log(floor)

  if (floor >= 1 && floor <= 7) {
    let box1 = document.getElementById(floor)
    let box2 = document.getElementById("elevator1");
    box1.appendChild(box2);
  } 
  if (floor >= 8 && floor <= 15) {
    let box3 = document.getElementById(floor)
    let box4 = document.getElementById("elevator2");
  
    box3.appendChild(box4);
  }  
  if (floor >= 16 && floor <= 20) {
    let box5 = document.getElementById(floor)
    let box6 = document.getElementById("elevator3");
  
    box5.appendChild(box6);
  }
   


}