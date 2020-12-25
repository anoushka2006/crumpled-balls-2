
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var dustbin, boxSide1, boxSide2;
var paper;
var ground;



function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	boxSide1 = new Dustbin (width-150, height-60, 20, 150);
	boxSide2 = new Dustbin (width-300, height-60, 20, 150);
	dustbin = new Dustbin(width-200, height-85, 150, 150);

	ground = new Ground(400,500,800,20);
	paper = new Paper(width-600, height-10, 30, 30);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("grey");

	dustbin.depth = paper.depth;
	paper.depth = + 1;

  ground.display();
  paper.display();
  boxSide1.display();
  boxSide2.display();
  dustbin.display();

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:120,y:-130});
	}
}