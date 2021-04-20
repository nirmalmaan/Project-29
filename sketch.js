const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hold,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var stone;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(400,300,250,10);
  stand2 = new Stand(710,200,200,10);
  stone = new Stone(80,250,30,30);
  //level one
  block1 = new Block(310,275,30,40);
  console.log(block1);
  block2 = new Block(340,275,30,40);
  block3 = new Block(370,275,30,40);
  block4 = new Block(400,275,30,40);
  block5 = new Block(430,275,30,40);
  block6 = new Block(460,275,30,40);
  block7 = new Block(490,275,30,40);
  //level two
  block8 = new Block(340,235,30,40);
  block9 = new Block(370,235,30,40);
  block10 = new Block(400,235,30,40);
  block11 = new Block(430,235,30,40);
  block12 = new Block(460,235,30,40);
  //level three
  block13 = new Block(370,195,30,40);
  block14 = new Block(400,195,30,40);
  block15 = new Block(430,195,30,40);
  //top
  block16 = new Block(400,155,30,40);
  hold = new SlingShot(stone.body, {x:80 , y:250});


  

}
function draw() {
  background("white"); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("black");
  block16.display();
  stone.display();
  hold.display();

  detectCollision(stone,block1);
  detectCollision(stone,block2);
  detectCollision(stone,block3);
  detectCollision(stone,block4);
  detectCollision(stone,block5);
  detectCollision(stone,block6);
  detectCollision(stone,block7);
  detectCollision(stone,block8);
  detectCollision(stone,block9);
  detectCollision(stone,block10);
  detectCollision(stone,block11);
  detectCollision(stone,block12);
  detectCollision(stone,block13);
  detectCollision(stone,block14);
  detectCollision(stone,block15);
  detectCollision(stone,block16);


}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}
function mouseReleased(){
  hold.fly();
}

function detectCollision(lstone, lmango)
{
 mangoBodyPosition = lmango.body.position
 stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  
  if(distance<=lmango.r+lstone.r)
  {
	  Matter.Body.setStatic(lmango.body, false);
  }

}
