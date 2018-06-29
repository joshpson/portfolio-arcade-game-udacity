#**Nanodegree Arcade Game**
This is a simple frogger style arcade game built for udacity's front-end nanodegree program that can be played in a browser. The user moves their character using directional keys and attempts to avoid deadly bugs while trying to make it to the water.

##**Gameplay**
The left, right, up, and down keys move the player’s character throughout a 5 x 6 grid where that player must avoid deadly bugs, known as enemies, which fly from left to right on the three stone-path rows. When the bugs collide with the player the player dies and the game is restarted.

Victory is achieved when the player reaches any of the six water tiles in the grid. A yellow star will appear in the center of the screen to indicate victory. Upon winning the game the user can press any directional key to restart the game.

##**Files**
**[index.html](index.html)**
Loads the javascript for the game.
**[style.css](css/style.css)**
Centered the game. There is currently no other css, though a background could be added.
**[app.js](js/app.js)**
The formulas for the enemies and player live here, as well as the key input function.
**[engine.js](js/engine.js)**
The game loop functionality. Any new formulas that need to be added to the game loop should be called here, and any images that need to be loaded should be added to the rowImages variable in the render function.
**[resources.js](js/resources.js)**
An image loading utility written by the udacity team to ease the process of loading images. This does not need to be edited.
**images**
Repository for all the images needed in the game, as well as a few images that could be added later.

##**Functionality**

###**Enemies**
The bugs, otherwise known as enemies, are created in the app.js file. There are currently six enemies, but any number can be added or subtracted and the game will still function as long as one remains. If any enemy is added or subtracted they should also be added or subtracted from the allEnemies array.

The enemies are rendered on the screen through the **Enemy.prototype.render** method, and updated through the **Enemy.prototype.update** method.

The canvas has a width *x* of 505, and a height *y* of 606. Enemies start with initial *x*, *y*, and *speed* values.

**Enemy Setup**
*(x)* - The x values can be zero or less, anything greater than zero will result with the enemies appearing on the screen out of nowhere.

*(y)* - To align with the tiled sections, enemies should have an initial *y* value of 60, 145, or 230. Any deviation from these values may results in the player and enemies failing to collide.

*(speed)* - Speed values must be greater than zero or the enemies won’t move, and to ensure proper gameplay a speed in the 100 to 600 range is advised.

**Enemy Movement & Regeneration**
Enemies are moved by multiplying their speed by *dt* and adding that value to their current *x* location. (*dt* is a time function designed for smooth animation that lives in the **enginge.js** file).

Once enemies exit the screen completely, *x* > 550, they are reset in the **Enemy.prototype.update** method to a starting point of *x* = -200, and given a random speed between 100 and 600. This randomness ensures that the game is never exactly the same. The random range can be adjusted in the update function where `this.speed = Math.floor((math.random()*501)+100)`.

**Collisions**
The **Enemy.prototype.update** method handles all collisions. If at any point both the *x* and *y* values of any enemy equal the player’s *x* and *y* values the game is reset. Values are rounded up to the nearest 10 to calculate this collision.

###**Player**
The player is created in the **app.js** file and starts with an initial image *x* and *y* value. The players are rendered on the screen through the **Player.prototype.render** method, and updated through the **Player.prototype.handleInput** method.

An initial starting value of (200,400) is advised to ensure proper movement and enemy collisions.

**Player Movement**
Directional keys move the player left, right, up, and down. The player cannot move diagonally, and no other keys other than the directional keys will work. The **Player.prototype.reset** method keeps the player from moving off the screen.

The **document.addEventListener** function takes in key inputs and passes them to the **Player.prototype.handleInput** method as strings (*“left”, “right”, “up”, “down”*). The up and down keys subsequently move the player up or down the canvas by 85, and the left and right strings move the player left and right by 100. The **Player.prototype.handleInput** method also reloads the page if any directional key is pressed after the user has won the game (*this.y < 60*).