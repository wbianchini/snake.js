var gameModule = (function(document){
	var canvas  = document.getElementById('canvas');
	var context = canvas.getContext('2d');

	let width  	= parseInt(document.getElementById("canvas").getAttribute("width"));
	let height  = parseInt(document.getElementById("canvas").getAttribute("height"));

	var score;
	var food;
	var snake;

	var bordersEnabled = true;

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

		draw  = new DrawModule(context);
		food  = new Food();
		snake = new Snake();

		food.createNewFood(snake.getBody());

		direction = 'right';
		setInterval(update, 80);
	}

	var update = function(){
		snake.setBorders(bordersEnabled);
		snake.move();

		if(snake.hitBody() || snake.hitCanvas(width, height)){
			resetGame();
		}

		if(snake.eat(food)){
			food.createNewFood(snake.getBody());
		}
		
		draw.background(width, height);
		draw.paint(snake);
		draw.paint(food);
	}

	var resetGame = function(){
		snake = new Snake();
		food.createNewFood(snake.getBody());
		direction = 'right';
	}

	var setBorders = function(bool){
		bordersEnabled = bool;
	}

	return {
		init: init,
		setBorders: setBorders,
		checkKeyDirection: checkKeyDirection
	};
}(document));