var groundBody,trashcanBody,paperBody; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	trashcanBody = new trashcan(1200, 650);
	groundBody = new ground(width/2, 670, width,20);
	paperBody = new paper(200,450,40);

	Engine.run(engine);
}
function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);

  groundBody.display();
  trashcanBody.display();
  paperBody.display();

  drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paperBody.body,paperBody.body.position,{x:85,y:-85});
	}
}