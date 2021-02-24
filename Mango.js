class Mango{
    constructor(x,y){
    var options = {
        isStatic:true,
        restitution:0,
        friction:1
 }
    this.body = Bodies.rectangle(x,y,40,43,options);
    this.width= 40;
    this.height = 43;
    this.image = loadImage("Plucking mangoes/mango.png");

    World.add(world, this.body);
    }
display(){
    
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0,0, this.width, this.height);
    pop();

}

}