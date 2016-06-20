var Laser = Class.create(Sprite, {
	initialize: function(x, y){
		Sprite.call(this, 54, 9);
		this.speed = 800;
		this.image = game.assets["imgLaserGreen"];
		this.x = x;
		this.y = y - this.height/2;		
	},
	update: function(deltaTime){
		this.x += this.speed * deltaTime;
	}
});