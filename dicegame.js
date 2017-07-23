"use strict"
function diceGameStart() {

	var players = createPlayers();

	alert("Quick Rules:\nYou 3 are free climbing a wall; no harness, no rope.\nRolling even numbers move you forward\nRolling odd numbers moves you backwards.\nRoll a 6 and you'll get a better die.\nRoll a 1 and you'll get a worse die.\nGood luck!");

	while (players[0].isInGame && players[1].isInGame && players[2].isInGame) {
		var rollDie = confirm("Roll the dice.");

		 if (rollDie) {
		 	var numberRolled = getNumberRolled(players)
		 } else {
		 	break;
		 }

		moveUser(players);

		upgradeDie(players);

		displayGameStatus(players);
	}
}
function displayGameStatus(players) {
	for (var i = 0; i < players.length; i++) {
		if (players[i].currentPosition >= players[i].mountainTop) {		
			console.log("Congratulations " + players[i].playerName + ", you just rolled a " + players[i].numberRolled + " and free climbed a total " + players[i].currentPosition + " meters!");
			players[i].isInGame	= false;
		} else if (players[i].currentPosition < 0 && players[i].isOnWall === true) {
			console.log("Uh-oh, " + players[i].playerName + " rolled a " + players[i].numberRolled + " and fell right off the wall.");
			players[i].isOnWall = false;
			players.splice[i];

		} else {
			console.log(players[i].playerName + " rolled a " + players[i].numberRolled + " and is at position " + players[i].currentPosition + " holding a " + players[i].dieArray[players[i].dieSides] + " sided die." );
		}
	}	
}
function upgradeDie(players) {
	for (var i = 0; i < players.length; i++) {
		switch(players[i].numberRolled) {
			case 6:
				if (players[i].dieSides !== 0 && players[i].isOnWall === true) {
					players[i].dieSides -=1 ;
					console.log(players[i].playerName + " rolled 6 and will downgrade to a " + players[i].dieArray[players[i].dieSides] + " sided die");
				}
				break;			
			case 1:
				if (players[i].dieSides !==4 && players[i].isOnWall === true) {
					players[i].dieSides += 1;
					console.log(players[i].playerName + " rolled 1 and will upgrade to a " + players[i].dieArray[players[i].dieSides] + " sided die");
				}
				break;			
			default:
				break; 
		}
	}
}
function moveUser(players) {
	for (var i = 0; i < players.length; i++) {
		if (players[i].numberRolled % 2 !== 0 && players[i].currentPosition === 0) {
			players[i].currentPosition = players[i].currentPosition;
		} else if (players[i].numberRolled % 2 !== 0 && players[i].currentPosition > 0) {
			players[i].currentPosition -= players[i].numberRolled;
		} else if (players[i].numberRolled % 2 === 0 && players[i].isOnWall === true) {	
			players[i].currentPosition += players[i].numberRolled;
		}
	}
}
function getNumberRolled(players) {
	if (players[i].isOnWall) {
		for (var i = 0; i < players.length; i++) {
			var numberRolled = Math.floor((Math.random() * players[i].dieArray[players[i].dieSides]) + 1);
			players[i].numberRolled = numberRolled;
		}
	}
}
function createPlayers() {
	var playersArray = [
		{
			playerName: "Player 1",
			dieArray: [4,6,8,12,20],
			dieSides: 1,
			currentPosition: 0,
			mountainTop: 60,
			isInGame: true,
			isOnWall: true,
			numberRolled: 0,
		},
		{
			playerName: "Player 2",
			dieArray: [4,6,8,12,20],
			dieSides: 1,
			currentPosition: 0,
			mountainTop: 60,
			isInGame: true,
			isOnWall: true,
			numberRolled: 0,
		},
		{
			playerName: "Player 3",
			dieArray: [4,6,8,12,20],
			dieSides: 1,
			currentPosition: 0,
			mountainTop: 60,
			isInGame: true,
			isOnWall: true,
			numberRolled: 0,
		}
	];
	return playersArray;
}
diceGameStart();