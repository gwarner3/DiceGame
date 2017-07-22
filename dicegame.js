"use strict"
function diceGameStart() {

	var players = createPlayers();

	alert("Quick Rules:\nYou 3 are free climbing a wall; no harness, no rope.\nRolling even numbers move you forward\nRolling odd numbers moves you backwards.\nRoll a 6 and you'll get a better die.\nRoll a 1 and you'll get a worse die.\nGood luck!");

	while (players[0].isInGame && players[1].isInGame  && players[2].isInGame) {
		var rollDie = confirm("Roll the dice.");

		 if (rollDie) {
		 	var numberRolled = getNumberRolled(players)
		 } else {
		 	break;
		 }
		//control tool to break out of while loop during tests 
		players[1].isInGame = false;
	}
}
function getNumberRolled(players) {	
	for (var i = 0; i < players.length; i++) {
		var numberRolled = Math.floor((Math.random() * players[i].dieArray[players[i].dieSides]) + 1);
		players[i].numberRolled = numberRolled;
	}
}
function createPlayers() {
	var playersArray = [
		{
			playerName: "Player 1",
			dieArray: [4,6,8,12,20],
			dieSides: 1,
			currentPosition: 0,
			mountainTop: 10,
			isInGame: true,
			numberRolled: 0,
		},
		{
			playerName: "Player 2",
			dieArray: [4,6,8,12,20],
			dieSides: 1,
			currentPosition: 0,
			mountainTop: 10,
			isInGame: true,
			numberRolled: 0,
		},
		{
			playerName: "Player 3",
			dieArray: [4,6,8,12,20],
			dieSides: 1,
			currentPosition: 0,
			mountainTop: 10,
			isInGame: true,
			numberRolled: 0,
		}
	];
	return playersArray;
}
diceGameStart();