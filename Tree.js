class Tree{
    constructor(x,y){
    
     var options = {
         isStatic:true
     }
   this.body = Bodies.rectangle(x,y,550,550,options);
   this.height = 550;
   this.width= 550;
   
    
    this.image = loadImage("Plucking mangoes/tree.png");
   World.add(world, this.body);

    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}