var Food = function(){
	var food;

	this.x;
	this.y;

	var snakeBody = [];

	var new_food_x,
		new_food_y;

	this.createNewFood = function(snake_body) {
		snakeBody = snake_body;
		newFoodCoordenates();
		
		this.x = new_food_x;
		this.y = new_food_y;
	}

	var newFoodCoordenates = function(){
		new_food_x = Math.floor((Math.random() * 30) + 1);
		new_food_y = Math.floor((Math.random() * 30) + 1);

		if(colideWithSnakeBody()){
			newFoodCoordenates();
		}
	}

	var colideWithSnakeBody = function(){
		for (var i=0; i<snakeBody.length; i++) {
			var snakeX = snakeBody[i].x;
			var snakeY = snakeBody[i].y;
			if (new_food_x===snakeX || new_food_y === snakeY || new_food_y === snakeY && new_food_x===snakeX) {
				return true;
			}
		}
		return false;
	}
}
