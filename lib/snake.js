var Snake = function() {
	var speedX = 0;
	var speedY = 0;

	var body   = [];
	var length = 4;

	var borders_enabled = true;

	var scale = 10;

	var newSnake = function(){
		for (var i = length; i>=0; i--) {
			body.push({x:i+18, y:20});
		}
	}

	newSnake();

	this.direction = 'right'

	this.move = function(){
		if(isPaused()) return;

		var snakeX = body[0].x;
		var snakeY = body[0].y;

		var tail = body.pop();
		tail.x = snakeX + speedX;
		tail.y = snakeY + speedY;

		body.unshift(tail);
	}

	this.hitBody = function() {
		if(isPaused()) return false;

		for(var i = 1; i < body.length; i++) {
			if(body[i].x === body[0].x && body[i].y === body[0].y)
			return true;
		} 
		return false;
	}

	this.hitCanvas = function(width, height){
		if(!borders_enabled){
			passCanvasBorder(width, height);
			return false;
		}

		return hitCanvasLeft() || hitCanvasRight(width) || hitCanvasTop() || hitCanvasBottom(height);
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

	this.setBorders = function(bool){
		borders_enabled = bool;
	}

	var passCanvasBorder = function(width, height){
		if(hitCanvasLeft()){
			body[0].x = parseInt(width / scale);
		}
		if(hitCanvasRight(width)){
			body[0].x = 0;
		}
		if(hitCanvasTop()){
			body[0].y = parseInt(height / scale);
		}
		if(hitCanvasBottom(height)){
			body[0].y = 0;
		}
	}

	var isPaused = function(){
		return speedX==0 && speedY==0;
	}

	var hitCanvasLeft = function(){
		return body[0].x == -1;
	}
	var hitCanvasRight = function(width){
		return body[0].x > width / scale;
	}

	var hitCanvasTop = function(){
		return body[0].y == -1;
	}
	var hitCanvasBottom = function(height){
		return body[0].y > height / scale;
	}
}