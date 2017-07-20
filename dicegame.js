"use strict"
function diceGameStart() {
	var dieArray = [4,6,8,12,20];
	var dieSides = 1;
	var currentPosition = 0;
	var mountainTop = 10;
	
	displayGameStatus(currentPosition, numberRolled, dieArray[dieSides], mountainTop);

	while(currentPosition >= 0 && currentPosition < mountainTop) {
		var rollDie = confirm("Roll your die. Click OK to roll die, Cancel to quit game.");

			if (rollDie) {
				var numberRolled = getNumberRolled(dieArray[dieSides]);
			} else {
				break;
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
	} else if (currentPosition === 0 && numberRolled < 0) {
		//do nothing
	} else if (currentPosition < 0) {//if player numberRolled > currentPosition and currentPosition > 0		
		//player has fallen off the mountain
		//end game
		console.log("You have fallen off the mountain");
	} else {//if none of the above are true, display game status
		console.log("You are at position " + currentPosition + " and you have a " + dieSides + " sided die." );
	}	
}
function getNumberRolled(dieSides) {
	var numberRolled = Math.floor((Math.random() * dieSides) + 1);
	return numberRolled;		
}
function moveUser(numberRolled, currentPosition) { 
	var newPosition;
	if (numberRolled % 2 !== 0 && currentPosition === 0) {
		newPosition = currentPosition;
	} else if (numberRolled % 2 !== 0 && currentPosition > 0) {
		newPosition = currentPosition - numberRolled;
	} else if (numberRolled % 2 === 0) {	
		newPosition = numberRolled + currentPosition;
	}
	return newPosition;
}
diceGameStart();