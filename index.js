let snake = new Snake;
let scl =20;
function setup() {
    // put setup code here
    createCanvas(600, 400);
    frameRate(10);
  }
  
  function draw() {
    // put drawing code here
    background(51);
    snake.update()
    snake.show()

  }

   function keyPressed(){
     if (keyCode === UP_ARROW) {snake.dir(0,-1)}
      else if (keyCode === DOWN_ARROW) {snake.dir(0,1)}
        else if (keyCode === RIGHT_ARROW) {snake.dir(1,0)}
          else if (keyCode === LEFT_ARROW) {snake.dir(-1,0)}
   }