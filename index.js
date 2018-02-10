let scl = 20;
let snake = new Snake;
let foods= [];
function setup() {
  // put setup code here
  createCanvas(600, 400);
  frameRate(10);
  for (let i = 0; i < 10; i++) {
    foods[i] = new Food;
    foods[i].locatoin();
  }
}

function draw() {
  // put drawing code here
  background(51);
  snake.update();
  snake.show();
  for(let food of foods){
    food.show();
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) { snake.dir(0, -1) }
  else if (keyCode === DOWN_ARROW) { snake.dir(0, 1) }
  else if (keyCode === RIGHT_ARROW) { snake.dir(1, 0) }
  else if (keyCode === LEFT_ARROW) { snake.dir(-1, 0) }
}