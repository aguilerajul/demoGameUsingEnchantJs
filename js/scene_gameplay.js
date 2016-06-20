var SceneGamePlay = Class.create(Scene,{
	initialize: function(gameObj){
		Scene.apply(this);
		
		this.game = gameObj;		
		var background = new Sprite(gameWidth, gameHeight);	
		background.image = gameObj.assets["bkgPurple"];
		this.addChild(background);
		this.laserList = [];
		this.meteorList = [];
		this.player = new Player();
		this.addChild(this.player);		
		this.isPause = false;		
		//Player Life Array	
		this.playerLifeList = [];
		//----------------------------------------		
		
		//New Score class3		
		this.scoreLabel = new Label();		
		this.scoreLabel.color = "#ffffff";
		this.scoreLabel.font = "30px Orbitron";
		this.scoreLabel.text = "Score: ";		
		this.addChild(this.scoreLabel);
		//----------------------------------------
		
		this.init();
		
	},
	returnMenu: function()
	{
		if(this.game.input.menu)
		{
			scorePlayer = 0;
			this.game.pushScene(new SceneGameInit(game));
		}
	},
	createLaser: function(x, y){
		var laser = new Laser(x, y);
		this.addChild(laser);
		this.laserList.push(laser);
	},
	pause: function(evt){

	},	
	init: function()
	{	
		//Player Score		
		this.scoreLabel.text = "Score: " + scorePlayer;	
		
		//Upload Player Life
		this.playerLife();
		
		//Player Position
		this.player.x = 0;
		this.player.y = gameHeight/2;
		this.player.y -= this.player.height/2;

		//Frame Event
		this.addEventListener(Event.ENTER_FRAME, this.update);
		
		this.tl.then(function() {
			//this.meteorTime += deltaTime;
			this.createMeteor();
		}).delay(40).loop();
	},
	playerLife: function()
	{
		var previousLifePosition = (this.width / 2) - 150;
		for(i = 1; i <= 5; i++)
		{	
			var playerLife = new Sprite(32, 26);	
			playerLife.image = this.game.assets["imgPlayerLife"];			
			playerLife.x = previousLifePosition + 40;
			previousLifePosition =  playerLife.x;
			this.playerLifeList.push(playerLife);
			this.addChild(playerLife);
		}
	},	
	update: function(evt){		
		var deltaTime = evt.elapsed / 1000.0;
		this.player.update(deltaTime);
		this.returnMenu();
		if(this.playerLifeList.length <= 0)
		{
			this.removeEventListener(Event.ENTER_FRAME, this.update);			
			this.game.pushScene(new SceneGameOver(game));
		}

		for(i = 0; i < this.laserList.length; i++)
		{
			var laser = this.laserList[i];
			laser.update(deltaTime);
						
			if(laser.x > gameWidth)
			{
				this.removeChild(laser);
				this.laserList.splice(i,1);
			}
			
			for(j = 0; j < this.meteorList.length; j++)
			{
				var meteor = this.meteorList[j];				
				meteor.update(deltaTime);
				
				if(laser.intersect(meteor))
				{
					this.removeChild(laser);
					this.laserList.splice(i,1);					
					this.destroyMeteor(meteor,j);
					
					this.updateScore();
				}
			}
		}

		for(j = 0; j < this.meteorList.length; j++)
		{
			var meteor = this.meteorList[j];			
			meteor.update(deltaTime);
			
			if(meteor.x < -meteor.width)
			{
				this.destroyMeteor(meteor,j);
			}
			else if(meteor.intersect(this.player)){			
				this.playerEnergy_IntersectByMeteor();
				this.destroyMeteor(meteor,j);
			}
			
		}		
	},
	createMeteor:function(){
		var meteor = new Meteor(this.game.width, this.game.height);
		
		var moveFromInitialUfoPosition = this.game.width - this.width;
		var movToFinalUfoPosition = this.game.width + this.width;			

		meteor.moveTo(this.game.width, Math.floor(Math.random() * (this.height)));// set position		
		meteor.tl.moveBy(-movToFinalUfoPosition, 0, getRandomInt(80,150)); // set movement
		
		this.meteorList.push(meteor);
		this.addChild(meteor);
	},
	destroyMeteor: function(meteor, index)
	{	
		var explotion = new Sprite(95, 95);	
		explotion.image = this.game.assets["imgMeteorExplotion"];
		explotion.frame = 1;				
		explotion.x = this.meteorList[j].x;
		explotion.y = this.meteorList[j].y;	
		
		this.removeChild(meteor);
		this.meteorList.splice(index,1);
		
		explotion.addEventListener(Event.ENTER_FRAME,function(evt){			
			if(explotion)
			{				
				if(explotion.frame >= 17)
				{					
					explotion.frame = 0;					
					this.scene.removeChild(explotion);
					explotion = null;
				}
				else
					explotion.frame += 1;
			}
		});
		
		this.scene.addChild(explotion);
	},
	playerEnergy_IntersectByMeteor: function()
	{			
		this.energyPlayer -= 10;	
		this.playerExplotion();
		this.setInitialPosition();
		this.removePlayerLife();
	},
	playerExplotion: function()
	{
	},
	setInitialPosition: function()
	{
		this.player.x = 0;
		this.player.y = gameHeight/2;
		this.player.y -= this.player.height/2;
	},
	removePlayerLife: function()
	{
		this.removeChild(this.playerLifeList[this.playerLifeList.length - 1]);
		this.playerLifeList.splice(this.playerLifeList.length - 1, 1);
	},
	updateScore: function()
	{
		scorePlayer += 5;
		this.scoreLabel.text = "Score: " + scorePlayer;
		scorePlayerOld = scorePlayer;
	}
});
