class Food {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    locatoin() {
        this.x = floor(random(floor(width / scl))) * scl;
        this.y = floor(random(floor(height / scl))) * scl;
    }
    show() {
        fill(255, 0, 100);
        rect(this.x, this.y, scl, scl);
    }
}