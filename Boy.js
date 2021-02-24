class Boy{
    constructor(x,y){
        var options = {
            isStatic : true
        }
   this.body = Bodies.rectangle(x,y, 150, 400, options);
   this.width = 150;
   this.height = 400;
   this.image = loadImage("Plucking mangoes/boy.png");

   World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}