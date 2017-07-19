"use strict"
function diceGameStart() {
	//declare dieArray[4,6,8,12,20]
	//declare currentDie = dieArray[1]
	//declare currentPosition = 0
	//declare mountainTop = 60
	
	//While the user is in position from 0 to mountainTop. //while(currentPosition > 0 && currentPosition <= mountainTop)

		//display users current game status. Since game is first starting, currentPosition = 0, dieArray[currentDie] 
		
		//prompt user to roll die
			//declare numberRolled = getNumberRolled(dieArray[currentDie])
			//will return the numberRolled

		//move user based on number rolled.
		//declare newPosition = moveUser(numberRolled, currentPosition)
	
	//END WHILE
}
function getNumberRolled() {//parameter is dieArray[currentDie]
	//declare randomNumber as number generated based on what die was rolled. i.e, if die 4 is being rolled, random number between 1 and 4
	
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



function displayGameStatus() {
	//if this is the users first load of game
		//statusArray[die 6, position 0]
	//Or else
		//What is current location on mountain. statusArray[1]
		//what is die user is using. statusArray[0]

	//return statusArray[die, newPosition] 
}
function moveForward() {//Steps to take when user rolls an ever number

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
	//If a player rolls a 6, they downgrade one die
//Fame ends when/if user moves 60 or more spaces

// Design and code a game that uses at least one 4-sided, 6-sided, 8-sided, 10-sided, 12-sided, and 20-sided dice.
// -    You come up with the rules and design
// -    The game must involve some form of user interaction (user “rolls” the dice perhaps)
// -    The rules must be more complicated than the game War. This means the game rules can’t be as simple as the person with the greater dice value wins. That can be part of the rules, but the game needs to be more complex than that.
// -    You can either create a console application (console.log) or interact with HTML/CSS elements for your game (.innerHTML)
// -    HINT: Make sure you reach the Minimal Viable Product (MVP) before doing anything super fancy. Get it working and then make it better.