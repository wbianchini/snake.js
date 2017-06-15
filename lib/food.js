var Food = function(){
	var food;

	this.x;
	this.y;

	this.createNewFood = function(snake_body) {
		var new_food_x = Math.floor((Math.random() * 30) + 1),
			new_food_y = Math.floor((Math.random() * 30) + 1)
		
		for (var i=0; i>snake_body.length; i++) {
			var snakeX = snake_body[i].x;
			var snakeY = snake_body[i].y;
			
			 if (new_food_x===snakeX || new_food_y === snakeY || new_food_y === snakeY && new_food_x===snakeX) {
				new_food_x = Math.floor((Math.random() * 30) + 1);
				new_food_y = Math.floor((Math.random() * 30) + 1);
			}
		}

		this.x = new_food_x;
		this.y = new_food_y;
	}
}
