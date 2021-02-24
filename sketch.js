
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, ground;
var mango1, mango2, mango3, mango4, mango5, mango6;
var boy;
var stone, chain;



function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   tree = new Tree(700,400);
   ground = new Ground(500, 680, 1000, 20);
   mango1 = new Mango(710,260);
   mango2 = new Mango(750,320);
   mango3 = new Mango(600,300);
   mango4 = new Mango(650,220);
   mango5 = new Mango(800,220);
   mango6 = new Mango(830,300);
   boy = new Boy(150, 560);
   stone = new Stone(110,465);
   chain = new Chain(stone.body, {x:110, y:465}  );

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  boy.display();
  stone.display();
  chain.display();
  //Detectollision();

  //detectollision(stone, mango1);
  //detectollision(stone, mango2);
  //detectollision(stone, mango3);
  //detectollision(stone, mango4);
  //detectollision(stone, mango5);
  //detectollision(stone, mango6);

}



function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}

//function Detectollision(Lstone, Lmango){
  //mangoBodyposition = lmango.body.position;
  //stoneBodyposition = lstone.body.position;

   //var distance = dis(stoneBodyposition.x, stoneBodyposition.y, mangoBodyposition.x, mangoBodyposition.y);
   //if(distance<-lmango.r+lstone.r){
   //  Matter.Body.setStatic(lmango.body, false);
   //}
//}


