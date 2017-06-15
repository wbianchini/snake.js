var gameModule = (function(document){
	var canvas  = document.getElementById('canvas');
	var context = canvas.getContext('2d');

	let width  	= parseInt(document.getElementById("canvas").getAttribute("width"));
	let height  = parseInt(document.getElementById("canvas").getAttribute("height"));

	var score;
	var food;
	var snake;

	var draw;

	var checkKeyDirection = function(keyCode){
		switch (keyCode) {
			case 37:
				if (direction != 'right') direction = 'left';
				break;
			case 39:
				if (direction != 'left') direction = 'right';
				break;
			case 38:
				if (direction != 'down') direction = 'up';
			break;
			case 40:
				if (direction != 'up') direction = 'down';
			break;
		}
		snake.direction(direction);
	}

	var init = function () {
		score 	  = 0

		draw = new DrawModule(context);

		snake = new Snake();
		food  = new Food();
		food.createNewFood(snake.getBody());

		setInterval(update, 80);
	}

	var update = function(){
		snake.move();

		if(snake.hitCanvas(width, height) || snake.hitBody()){
			snake = new Snake();
			direction = 'right';
		}

		if(snake.eat(food)){
			food.createNewFood(snake.getBody());
		}
		
		draw.background(width, height);
		draw.paint(snake);
		draw.paint(food);
	}

	return {
		init: init,
		checkKeyDirection: checkKeyDirection
	};
}(document));