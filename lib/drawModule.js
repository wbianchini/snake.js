var DrawModule = function(context){

	var scale = 10;

	this.paint = function(object){
		if(object instanceof Snake)
			fillSnakeBody(object);
		if(object instanceof Food)
			fillFood(object);
	}

	this.background = function(width, height){
		context.fillStyle ='#2c3e50';
		context.fillRect(0,0, width,height)
	}

	var fill = function(square, fillStyle, strokeStyle){
		size = scale;
		context.fillStyle = fillStyle;

		context.fillRect(square.x * size,square.y * size, size, size);

		context.strokeStyle = strokeStyle;
		context.strokeRect(square.x * size,square.y * size, size, size);
	}

	var fillFood = function(food) {
		fill(food, '#e74c3c', '#e74c3c');
	}

	var fillSnakeBody = function(Snake){
		var snake_body = Snake.getBody();
		for (var i = snake_body.length - 1; i >= 0; i--) {
			fill(snake_body[i], '#8e44ad', '#3498db');
		}
	}

	/*this.scoreText = function(){
		var score_text    = "Score: " + score;
		context.fillStyle = '#3498db';
		context.fillText(score_text);
	}*/
}