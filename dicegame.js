"use strict"
function diceGameStart() {
	var dieArray = [4,6,8,12,20];
	var dieSides = 1;
	var currentPosition = 0;
	var mountainTop = 10;

	alert("Quick Rules: You are free climbing a wall " + mountainTop + " meters high; no harness, no rope. Roll an even number and move forward; roll odd, move backwards. Roll a 6 and you'll get a better die, roll a 1 and you'll get a worse die. Good luck!");

	while(currentPosition >= 0 && currentPosition < mountainTop) {
		var rollDie = confirm("You are at " + currentPosition + " meters.\n" + "Roll your die. Click OK to roll die, Cancel to quit game.");

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
		console.log("Congratulations, you just rolled a " + numberRolled + " and free climbed a total " + currentPosition + " meters!");		
	} else if (currentPosition < 0) {
		console.log("Uh-oh, you rolled a " + numberRolled + " and fell right off the wall.");
	} else {
		console.log("You rolled a " + numberRolled + ". You are now at position " + currentPosition + " holding a " + dieSides + " sided die." );
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