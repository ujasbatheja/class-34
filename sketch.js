const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var slingshot;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;
var Ball1;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,395,1200,20);

  block8 = new Block(600,360,100,50);
  block9 = new Block(600,310,100,50);
  block10 = new Block(600,290,100,50);
  block11 = new Block(600,245,100,50);
  block12 = new Block(600,190,100,50);

  Ball1 = new Ball(200,200,51);

  slingshot = new SlingShot(Ball1.body,{x:200, y:50});
}

function draw() {

  background("black");
    Engine.update(engine);
    strokeWeight(4);

    ground.display();
       
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    Ball1.display();

    slingshot.display(); 

  drawSprites();
} 

function mouseDragged(){
  Matter.Body.setPosition(Ball1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}