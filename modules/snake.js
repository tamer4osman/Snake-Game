class Snake{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
    }
    update(){
        this.x = this.x + this.xSpeed*scl;
        this.y = this.y + this.ySpeed*scl;
        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
    }
    show(){
        fill(255);
        rect(this.x,this.y,scl,scl);
    }
    dir(x,y){
        this.xSpeed = x;
        this.ySpeed = y;
    }
};