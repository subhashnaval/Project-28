class Stone{
    constructor(x,y){
     var options = {
         isStatic:false,
         restitution:0.8,
         friction:1,
         density:1.2
     }
     this.body = Bodies.circle(x, y, 10, options);
     this.radius = 10;
     this.image = loadImage("Plucking mangoes/stone.png");

     World.add(world, this.body);
    }
  display(){
    
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(RADIUS);
    image(this.image, 0,0, this.width, this.height);
    pop();
    }
}