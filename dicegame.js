"use strict"
function diceGameStart() {
	//State where the user is located on mountain at start of game
	//State what Die the user is using
}
function displayGameStatus() {//game satus includes current position of player and die in hand

}
function moveForward() {//Steps to take when user rolls an ever number

}
function rollDie() {//retrieves the value rolled
	//what die has the user rolled
	//what is the users current position on the mountain
}
function moveUser() {//determines how/where to move user. Parameters: number rolled, users current position 
	//what is the users current position
	//what was rolled
	//returns the users new position
}
diceGameStart();//Starts aplication





//Mountain climber
//1 player (FE: use 3 players)
//A mountain is 60 spaces high (FE: allow player to select mountain height)
//player starts with a 6 sided dice
//player starts at position 0, at the bottom of the mountain
//player  rolls a die
	//If player rolls an odd number, and they have not moved forward at all, they do not move at all
	//If player rolls an odd number and have moved forward, they move backward the number of spaces rolled
		//If the number of spaces they are to move backward is greater than the number of spaces they have moved forward, they fall off the mountain and are out of the game
	//If player rolls an even number, they move forward the number of spaces rolled
	//If a player rolls a 1, they move forward 1 and they upgrade to the next die.
		//If player die already has 20 faces, user does not upgrade or downgrade die
//Fame ends when/if user moves 60 or more spaces