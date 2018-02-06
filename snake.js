class Snake{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.xSpeed = 1;
        this.ySpeed = 0;
        console.log("hi")
    }
    update(){
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
    }
    show(){
        fill(255);
        react(this.x,this.y,10,10);
    }
}