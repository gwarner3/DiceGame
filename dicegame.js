"use strict"
function diceGameStart() {
	// var dieArray = [4,6,8,12,20];
	// var dieSides = 1;
	// var currentPosition = 0;
	// var mountainTop = 10;

	// alert("Quick Rules:\nYou are free climbing a wall " + mountainTop + " meters high; no harness, no rope.\nRolling even numbers move you forward\nRolling odd numbers moves you backwards.\nRoll a 6 and you'll get a better die.\nRoll a 1 and you'll get a worse die.\nGood luck!");

	var numberOfPlayers = parseInt(prompt("How many players"));

	var players = [];

	for (var i = 0; i < numberOfPlayers; i++) {
		var player = new playerObject();
		players.push(player);
		players[i].playerName = "Player - " + (i + 1); 
	}
	//break;
	//Now i need to run this for each player in the players array.
	//players roll die simultaneuosuly

	//while loop will run at least once for each player but must indicate
	
	for (var i = 0; i < players.length; i++) {
		var x = players[i].playerName;
		console.log(x);
		// while(players[i].currentPosition >= 0 && players[i].currentPosition < players[i].mountainTop) {}
		// 	var x = players[i].playerName;
		// console.log(x);
			
	} 
	// while(currentPosition >= 0 && currentPosition < mountainTop) {

	// 	//roll die for all players
	// 	var rollDie = confirm("You are at " + currentPosition + " meters.\n" + "Roll your die. Click OK to roll die, Cancel to quit game.");

	// 		if (rollDie) {
	// 			var numberRolled = getNumberRolled(dieArray[dieSides]);
	// 		} else {
	// 			break;
	// 		}
	// 	//end for loop

	// 	//for each player in the loop
	// 	currentPosition = moveUser(numberRolled, currentPosition);

	// 	var newDieSides = upgradeDie(numberRolled, dieSides, dieArray);
	// 	dieSides = newDieSides;

	// 	displayGameStatus(currentPosition, numberRolled, dieArray[dieSides], mountainTop); 	
	// }
}
function playerObject() {
		this.playerName =  "";
		this.dieArray = [4,6,8,12,20];
		this.dieSides = 1;
		this.currentPosition = 0;
		this.mountainTop = 10;
		this.isInGame = true;
}
// function upgradeDie(numberRolled, dieSides, dieArray) {
// 	switch(numberRolled) {
// 		case 6:
// 			if (dieSides !== 0) {
// 				dieSides -=1 ;
// 				console.log("You rolled 6 and will downgrade to a " + dieArray[dieSides] + " sided die");
// 			} else {

// 			}
// 			break;			
// 		case 1:
// 			if (dieSides !==4) {
// 				dieSides += 1;
// 				console.log("You rolled 1 and will upgrade to a " + dieArray[dieSides] + " sided die");
// 			} else {

// 			}
// 			break;			
// 		default:
// 			break; 
// 	}

// 	return dieSides;
// }
// function displayGameStatus(currentPosition, numberRolled, dieSides, mountainTop) {
// 	if (currentPosition >= mountainTop){		
// 		console.log("Congratulations, you just rolled a " + numberRolled + " and free climbed a total " + currentPosition + " meters!");		
// 	} else if (currentPosition < 0) {
// 		console.log("Uh-oh, you rolled a " + numberRolled + " and fell right off the wall.");
// 	} else {
// 		console.log("You rolled a " + numberRolled + ". You are now at position " + currentPosition + " holding a " + dieSides + " sided die." );
// 	}	
// }
// function getNumberRolled(dieSides) {
// 	var numberRolled = Math.floor((Math.random() * dieSides) + 1);

// 	return numberRolled;		
// }
// function moveUser(numberRolled, currentPosition) { 
// 	var newPosition;
// 	if (numberRolled % 2 !== 0 && currentPosition === 0) {
// 		newPosition = currentPosition;
// 	} else if (numberRolled % 2 !== 0 && currentPosition > 0) {
// 		newPosition = currentPosition - numberRolled;
// 	} else if (numberRolled % 2 === 0) {	
// 		newPosition = numberRolled + currentPosition;
// 	}

// 	return newPosition;
// }
diceGameStart();