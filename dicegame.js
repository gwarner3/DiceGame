"use strict"
function diceGameStart() {
	var dieArray = [4,6,8,12,20];
	var dieSides = 1;
	var currentPosition = 0;
	var mountainTop = 60;
	
	//While the user is in position from 0 to mountainTop. //while(currentPosition > 0 && currentPosition <= mountainTop)
	while(currentPosition >= 0 && currentPosition <= mountainTop) {

		//display users current game status. Since game is first starting, currentPosition = 0, dieArray[dieSides]
		console.log("You are at position " + currentPosition + " and you have a " + dieSides + " sided die." );
		//test code currentPosition++; 
		
		//prompt user to roll die
		var rollDie = confirm("Roll your die. Click OK to roll die, Cancel to quit game.");
			//If user clicks OK
				//declare numberRolled = getNumberRolled(dieArray[dieSides])
				//will return the numberRolled
			if (rollDie) {
				var numberRolled = getNumberRolled(dieArray[dieSides]);
				;break //testing purposes only			
			} else {
				//code to run if user clicks cancel button. For now, break app
				break; //testing purposes only
			}

		//move user based on number rolled.
		//declare newPosition = moveUser(numberRolled, currentPosition)
	
	}//END WHILE
}
function getNumberRolled(dieSides) {//parameter is die index in dieArray[dieSides]
	//declare randomNumber as number generated based on what die was rolled. i.e, if die 4 is being rolled, random number between 1 and 4
	var x = dieSides;	
	//return random number rolled
}
function moveUser() {//determines how/where to move user. Parameters: numberRolled, currentPosition 
	//In case numberRolled is even
	//If player rolls an odd number, and they have not moved forward at all, they do not move at all
	//If player rolls an odd number and have moved forward, they move backward the number of spaces rolled
		//If the number of spaces they are to move backward is greater than the number of spaces they have moved forward, they fall off the mountain and are out of the game
	//If a player rolls a 1, they move forward 1 and they upgrade to the next die.
		//If player die already has 20 faces, user does not upgrade or downgrade die

	//In case numberRolled is odd
	//If player rolls an even number, they move forward the number of spaces rolled
	//If a player rolls a 6, they downgrade one die	

	//returns the users new position
}
diceGameStart();//Starts aplication