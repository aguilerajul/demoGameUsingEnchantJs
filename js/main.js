enchant();
var game;
var gameWidth = window.innerWidth;
var gameHeight = window.innerHeight;
var scorePlayer = 0;
var scorePlayerOld = 0;

window.onload = function(){
	game = new Core(gameWidth,gameHeight);
	game.fps = 30;
	game.keybind(32,"fire");
	game.keybind(27,"menu");

	var assets = {
		"bkgPurple": "img/darkPurple.png",
		"bkgDark": "img/dark.png",
		"btnStart": "img/buttonGreen.png",
		"btnCredits": "img/buttonRed.png",
		"btnScore": "img/buttonBlue.png",				
		"imgPlayer": "img/playerShip3_green.png",
		"imgPlayerLife": "img/playerLife3_green.png",
		"imgMeteorBig": "img/meteorBrown_big1.png",
		"imgMeteorSml": "img/meteorBrown_med1.png",
		"imgMeteorExplotion": "img/explotion.png",
		"imgMeteorTin": "img/meteorBrown_small1.png",
		"imgLaserGreen": "img/laserGreen11.png",
		"sndLaserGreen": "sounds/laser3.ogg",
		"schoolLogo": "img/logoSchool.png",
		"enchantLogo": "img/enchant.png",
		"sndMenu": "sounds/Fanfare for Space.mp3"
	};

	game.preload(assets);
	game.onload = function(){
		var scene = new SceneGameInit(game);
		game.pushScene(scene);
	};

	game.start();
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}