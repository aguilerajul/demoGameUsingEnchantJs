var SceneGameInit = Class.create(Scene,{
	initialize: function(gameObj){
		Scene.apply(this);
		
		this.game = gameObj;
		
		var background = new Sprite(gameWidth, gameHeight);		
		background.image = this.game.assets["bkgDark"];		
		this.addChild(background);		
		this.startMusic();
				
		//Title
		var lblTitle = new Label("Space Ship");		
		lblTitle.font = "60px Orbitron";
		lblTitle.color = "#ffffff";
		lblTitle.top = "20px";
		lblTitle.width = game.width;
		lblTitle.textAlign = "center";
		lblTitle.y = "10";			
		this.addChild(lblTitle);

		//Info
		var lblInfo = new Label();
		lblInfo.text = "To return menu press ESC or make click (Click only works in Credits and Score screens)";
		lblInfo.top = "100px";
		lblInfo.width = game.width;
		lblInfo.textAlign = "center";
		lblInfo.y = game.height - 50;
		lblInfo.color = "#ffffff";
		this.addChild(lblInfo);
		
		this.menu();		
	},
	menu: function(){
		//Start
		this.startButton = new Sprite(222,39);
		this.startButton.image = game.assets["btnStart"];
		this.startButton.x = (game.width / 2) - (this.startButton.width / 2);
		this.startButton.y = (game.height / 2) - 50;
		this.addChild(this.startButton);
		
		this.startButton.addEventListener(Event.TOUCH_END, this.play);
		
		//Score
		this.scoreButton = new Sprite(222,39);
		this.scoreButton.image = game.assets["btnScore"];
		this.scoreButton.x = (game.width / 2) - (this.scoreButton.width / 2);
		this.scoreButton.y = game.height / 2;
		this.addChild(this.scoreButton);
		
		this.scoreButton.addEventListener(Event.TOUCH_END, this.score);
		
		//Credits
		this.creditsButton = new Sprite(222,39);
		this.creditsButton.image = game.assets["btnCredits"];
		this.creditsButton.x = (game.width / 2) - (this.creditsButton.width / 2);
		this.creditsButton.y = (game.height / 2) + 50;
		this.addChild(this.creditsButton);
		
		this.creditsButton.addEventListener(Event.TOUCH_END, this.credits);
		
	},	
	play: function()
	{			
		var sceneGame = new SceneGamePlay(game);
		game.assets["sndMenu"].stop();
		scorePlayer = 0;		
		game.pushScene(sceneGame);		
	},
	score: function()
	{
		var sceneScore = new SceneGameScore(game);
		game.assets["sndMenu"].stop();
		game.pushScene(sceneScore);		
	},
	credits: function(evt){	
		var sceneCredits = new SceneGameCredits(game);
		game.assets["sndMenu"].stop();
		game.pushScene(sceneCredits);
	},
	startMusic: function()
	{
		game.assets["sndMenu"].play();
	},
	stopMusic: function()
	{
		game.assets["sndMenu"].stop();
	}
});