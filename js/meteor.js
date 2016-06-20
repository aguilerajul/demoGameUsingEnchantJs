var Meteor = Class.create(Sprite, {
	initialize: function(x,y,speed){
		Sprite.call(this,101,84);
		
		this.speed = speed;
		if(this.speed === undefined)
			this.speed = 100;
		this.image = game.assets["imgMeteorBig"];
		this.x = x - this.width/2;
		this.y = y - this.height/2;
	},
	update: function(deltaTime){
		this.x -= this.speed * deltaTime;		
	}
});