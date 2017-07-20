# DiceGame
Design and code a game that uses at least one 4-sided, 6-sided, 8-sided, 10-sided, 12-sided, and 20-sided dice.
-    You come up with the rules and design
-    The game must involve some form of user interaction (user “rolls” the dice perhaps)
-    The rules must be more complicated than the game War. This means the game rules can’t be as simple as the person with the greater dice value wins. That can be part of the rules, but the game needs to be more complex than that.
-    You can either create a console application (console.log) or interact with HTML/CSS elements for your game (.innerHTML)
-    HINT: Make sure you reach the Minimal Viable Product (MVP) before doing anything super fancy. Get it working and then make it better.

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
	//If a player rolls a 6, they move forward but they downgrade one die
//Game ends when/if user moves 60 or more spaces
