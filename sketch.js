
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var sling1, sling2, sling3, sling4, sling5;
function preload()
{
	
}

function setup() {
	canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
  	engine = Engine.create();
	world = engine.world;

	bob1 = new Pendulum(585,600)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bob1.display();
 
}



