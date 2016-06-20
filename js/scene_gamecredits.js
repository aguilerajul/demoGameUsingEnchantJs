var SceneGameCredits = Class.create(Scene,{
	initialize: function(gameObj){
		Scene.apply(this);
		
		this.game = gameObj;
		
		//BackGround
		var background = new Sprite(gameWidth, gameHeight);	
		background.image = gameObj.assets["bkgDark"];
		this.addChild(background);
		
		//Text
		this.creditsText = new Label();	
		
		this.init();
		
		this.addEventListener(Event.ENTER_FRAME, this.update);
		this.addEventListener(Event.TOUCH_END, this.returnMenuClick);
	},
	init: function()
	{		
		this.creditsText.text = "School:  EscuelaWeb <br /><br /><br />";
		this.creditsText.text += "Developer:   Julio Cesar Aguilera <br /><br /><br />";
		this.creditsText.text += "Sprites:   Kenney <br /><br /><br />";
		this.creditsText.text += "Acknowledgement:   Jorge Palacios<br /><br /><br />"
		this.creditsText.text += "Player:   You =D <br /><br /><br /> ";
		this.creditsText.textAlign = "center";
		this.creditsText.y = 100;
		this.creditsText.font = "30px Orbitron";
		this.creditsText.width = gameWidth;
		this.creditsText.color = "#ffffff";
		this.addChild(this.creditsText);
		
		
		var logoEnchantImage = new Sprite(250,250);
		logoEnchantImage.image = this.game.assets["enchantLogo"];
		logoEnchantImage.x = gameWidth / 2 - 150;	
		logoEnchantImage.y = this.creditsText.y + 300;
		this.addChild(logoEnchantImage);
		
		//this.creditsText.addEventListener(Event.ENTER_FRAME, this.creditText);
	},
	update: function ()
	{
		this.returnMenu();
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