class Stone {
    constructor(x, y, width, height) {

        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.image = loadImage("stone.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }

    display() {

        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        imageMode(CENTER);
        rect(0, 0, this.width, this.height);
        image(this.image, 0, 0, this.width * 4, this.height * 4);
        pop();
    }
}