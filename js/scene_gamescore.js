var SceneGameScore = Class.create(Scene,{
	initialize: function(gameObj){
		Scene.apply(this);
		
		this.game = gameObj;
		
		//BackGround
		var background = new Sprite(gameWidth, gameHeight);	
		background.image = gameObj.assets["bkgDark"];
		this.addChild(background);
		
		//Title
		var lblTitle = new Label("Score");		
		lblTitle.font = "60px Orbitron";
		lblTitle.color = "#ffffff";
		lblTitle.top = "20px";
		lblTitle.width = game.width;
		lblTitle.textAlign = "center";
		lblTitle.y = "10";			
		this.addChild(lblTitle);
		
		//Score Result
		this.lblResult = new Label("Last Score: " + scorePlayerOld);		
		this.lblResult.font = "15px Orbitron";
		this.lblResult.color = "#ffffff";
		this.lblResult.top = "50px";
		this.lblResult.width = game.width;
		this.lblResult.textAlign = "center";
		this.lblResult.y = "30";			
		this.addChild(this.lblResult);
				
		//Frame Event
		this.addEventListener(Event.ENTER_FRAME, this.returnMenu);
		this.addEventListener(Event.TOUCH_END, this.returnMenuClick);
	},
	returnMenu: function()
	{
		if(this.game.input.menu)
		{
			this.game.pushScene(new SceneGameInit(game));
		}
	},
	returnMenuClick: function()
	{
		this.game.pushScene(new SceneGameInit(game));		
	}
});