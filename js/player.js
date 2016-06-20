var Player = Class.create(Sprite,{
	initialize: function(){
		Sprite.call(this,75, 98);
		this.image = game.assets["imgPlayer"];
		this.addEventListener(Event.TOUCH_MOVE, this.drag);
		this.addEventListener(Event.TOUCH_START, this.touch);
		this.fireOld = false;
		this.fireNew = false;
		this.speed = 500
	},
	update: function(deltaTime){
		if(game.input.up && !game.input.down)
			this.y -= this.speed * deltaTime;
		else if(game.input.down && !game.input.up)
			this.y += this.speed * deltaTime

		if(game.input.left && !game.input.right)		
			this.x -= this.speed * deltaTime;
		else if(game.input.right && !game.input.left)
			this.x += this.speed * deltaTime;

		if(this.x < 0)
			this.x = 0;
		if(this.x + this.width > gameWidth/2)
			this.x = gameWidth/2 - this.width;

		if(this.y < 0)
			this.y = 0;
		if(this.y + this.height > gameHeight)
			this.y = gameHeight - this.height;

		this.fireOld = this.fireNew;
		this.fireNew = game.input.fire;
		if(this.fireNew && !this.fireOld)
		{
			this.touch();
		}
	},
	drag: function(evt){
		this.x = evt.x - this.width/2;
		this.y = evt.y - this.height/2;
	},
	touch: function(evt){
		var x = this.x + this.width;
		var y = this.y + this.height/2;

		this.shoot(x, y);
	},
	shoot: function(x, y){
		this.parentNode.createLaser(x,y);
		game.assets["sndLaserGreen"].play();
	}
});