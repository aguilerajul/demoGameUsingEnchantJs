var SceneGameOver = Class.create(Scene,{
	initialize: function(gameObj)
	{
		Scene.apply(this);
		this.game = gameObj;
		var background = new Sprite(gameWidth, gameHeight);
		background.image = game.assets["bkgPurple"];
		this.addChild(background);
		var lblGameOver = new Label("Game Over");
		lblGameOver.color = "#FFFFFF";
		lblGameOver.font = "100px Orbitron";
		lblGameOver.y = gameHeight / 2 - lblGameOver.height/2;
		lblGameOver.width = gameWidth;
		lblGameOver.textAlign = "center";

		this.addChild(lblGameOver);
		this.addEventListener(Event.TOUCH_START, this.restart);
	},
	restart: function(evt)
	{
		this.game.popScene();
		scorePlayer = 0;
		this.game.currentScene.init();
	}
});