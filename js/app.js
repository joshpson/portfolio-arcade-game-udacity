//Enemy Class
//Stores the image, location, and speed.
var Enemy = function(x,y,speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

//Enemy Update Method
//This function updates the enemy locations, and once they reach the end of
//the screen it resets their locations and randomizes their new speed.
Enemy.prototype.update = function(dt) {
    if(this.x < 550) {
        this.x = (dt * this.speed) + this.x;
    } else {
        this.x = -200;
        this.speed = Math.floor((Math.random() * 501) + 100);
        return;
    };
    if (((Math.ceil(this.x/10) *10) == (Math.ceil(player.x/10) *10)) &&
        ((Math.ceil(this.y/10) *10) == (Math.ceil(player.y/10) *10))) {
        location.reload();
    };
};

//Enemy Render Method
//This renders the enemy images.
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Enemies
//The enemies are staggered to start. Add as many enemies as you like.
//Adjust the x values as you like, do not edit the y values.
var bugOne = new Enemy(-100, 230, 100);
var bugTwo = new Enemy(-100, 145, 200);
var bugThree = new Enemy(-100, 60, 300);
var bugFour = new Enemy(-800, 230, 500);
var bugFive = new Enemy(-500, 145, 150);
var bugSix = new Enemy(-300, 60, 300);

//Enemies Array
//This array stores all the enemies.
var allEnemies = [bugOne, bugTwo, bugThree, bugFour, bugFive, bugSix];

//Player Class
//Stores the image, location, key input, and the victory image.
var Player = function(x, y, k) {
    this.sprite = 'images/char-horn-girl.png';
    this.win = 'images/Star.png';
    this.x = x;
    this.y = y;
    this.key = k;
};

//Player Render Method
//This function renders the player image on the screen, and
//checks if the victory criteria is met to render the victory image.
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    if (this.y < 60) {
        ctx.drawImage(Resources.get(this.win), 200, 200);
    };
};

//Player Handle Input Method
//This function takes the key input and moves the player accordingly.
//It also checks for the victory criteria and reloads the page
//if the user presses a key after winning.
Player.prototype.handleInput = function(k) {
    this.key = k;
    if (this.key == "left") {
        if (this.y < 60) {
            location.reload();
        };
        this.x = this.x - 100;
    };
    if (this.key == "right") {
        if (this.y < 60) {
            location.reload();
        };
        this.x = this.x + 100;
    };
    if (this.key == "up") {
        if (this.y < 60) {
            location.reload();
        };
        this.y = this.y - 85;
    };
    if (this.key == "down") {
        if (this.y < 60) {
            location.reload();
        };
        this.y = this.y + 85;
    };
};

//Player Reset Method
//This function resets the players location to ensure they cannot
//leave the screen.
Player.prototype.reset = function() {
    if (this.x > 400) {
        this.x = 400;
    };
    if (this.x < 0) {
        this.x = 0;
    };
    if (this.y > 400) {
        this.y = 400;
    };
};

//Player
//As a single player game their is only one player.
var player = new Player(200, 400);

//Key Input
//The function takes in the key input and transaltes it into a
//directional string.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});