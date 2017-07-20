"use strict"
function diceGameStart() {
	var dieArray = [4,6,8,12,20];
	var dieSides = 1;
	var currentPosition = 0;
	var mountainTop = 10;
	
	//display users starting game status
	displayGameStatus(currentPosition, numberRolled, dieArray[dieSides], mountainTop);

	//While the user is in position from 0 to mountainTop. //while(currentPosition > 0 && currentPosition <= mountainTop)
	while(currentPosition >= 0 && currentPosition < mountainTop) {
		//prompt user to roll die
		var rollDie = confirm("Roll your die. Click OK to roll die, Cancel to quit game.");
			//If user clicks OK
				//declare numberRolled = getNumberRolled(dieArray[dieSides])
				//will return the numberRolled
			if (rollDie) {
				var numberRolled = getNumberRolled(dieArray[dieSides]);
			} else {
				//code to run if user clicks cancel button. For now, break app
				break; //testing purposes only
			}

		currentPosition = moveUser(numberRolled, currentPosition);

		var newDieSides = upgradeDie(numberRolled, dieSides);
		dieSides = newDieSides;

		displayGameStatus(currentPosition, numberRolled, dieArray[dieSides], mountainTop); 	
	}
}
function upgradeDie(numberRolled, dieSides) {
	if (numberRolled === 6 && dieSides !== 0) {
		dieSides -= 1;
	} else if (numberRolled === 1 && dieSides !== 4) {
		dieSides += 1;
	}
	return dieSides;
}
function displayGameStatus(currentPosition, numberRolled, dieSides, mountainTop) {
	if (currentPosition >= mountainTop){		
		console.log("You won");		
	} else if (currentPosition === 0 && numberRolled < 0) {//if player currentPosition = 0 and numberRolled < 0		
		//do nothing
	} else if (currentPosition < 0) {//if player numberRolled > currentPosition and currentPosition > 0		
		//player has fallen off the mountain
		//end game
		console.log("You have fallen off the mountain");
	} else {//if none of the above are true, display game status
		console.log("You are at position " + currentPosition + " and you have a " + dieSides + " sided die." );
	}	
}
function getNumberRolled(dieSides) {//parameter is die index in dieArray[dieSides]
	//declare randomNumber as number generated based on what die was rolled. i.e, if die 4 is being rolled, random number between 1 and 4
	var numberRolled = Math.floor((Math.random() * dieSides) + 1);
	return numberRolled;		
	//return random number rolled
}
function moveUser(numberRolled, currentPosition) {//determines how/where to move user. Parameters: numberRolled, currentPosition 
	var newPosition;
	if (numberRolled % 2 !== 0 && currentPosition === 0) {
		//numberRolled is odd
		//If player rolls an odd number, and they have not moved forward at all, they do not move at all
		newPosition = currentPosition;
	} else if (numberRolled % 2 !== 0 && currentPosition > 0) {
		//If player rolls an odd number and have moved forward, they move backward the number of spaces rolled
		newPosition = currentPosition - numberRolled;
	} else if (numberRolled % 2 === 0) {	
	//numberRolled is even
	//If player rolls an even number, they move forward the number of spaces rolled	
		newPosition = numberRolled + currentPosition;
	}
	return newPosition;
}
diceGameStart();//Starts aplication