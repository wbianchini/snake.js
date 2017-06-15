var Snake = function() {
	var speedX = 1;
	var speedY = 0;

	var body   = [];
	var length = 15;

	var newSnake = function(){
		for (var i = length; i>=0; i--) {
			body.push({x:i+10, y:20});
		}
	}

	newSnake();

	this.direction = 'right'

	this.move = function(){
		var snakeX = body[0].x;
		var snakeY = body[0].y;

		var tail = body.pop();
		tail.x = snakeX + speedX;
		tail.y = snakeY + speedY;

		body.unshift(tail);
	}

	this.hitCanvas = function(width, height){
		if(body[0].x == -1 || body[0].y == -1)
			return true;
		if(body[0].x > width / 12 || body[0].y > height / 12)
			return true;

		return false;
	}

	this.hitBody = function() {
		for(var i = 1; i < body.length; i++) {
			if(body[i].x === body[0].x && body[i].y === body[0].y)
			return true;
		} 
		return false;
	}

	this.direction = function(direction){
		if (direction == 'right'){
			speedX = 1;
			speedY = 0;
		}
		if (direction == 'left'){
			speedX = -1;
			speedY = 0;
		}
		if (direction == 'up'){
			speedX = 0;
			speedY = -1;
		}
		if (direction == 'down'){
			speedX = 0;
			speedY = 1;
		}
	}

	this.eat = function(food){
		for(var i = 0; i < body.length; i++) {
			if(body[i].x === food.x && body[i].y === food.y){
				var tail = {
					x: body[i].x,
					y: body[i].y
				};
				body.unshift(tail);
				return true;
			}
		}
		return false;
	}

	this.getBody = function(){
		return body;
	}
}