const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var sling1, sling2, sling3, sling4, sling5;

function setup() {
	canvas = createCanvas(1000,800);
  	engine = Engine.create();
	world = engine.world;

	bob1 = new Pendulum(500,600)
	bob2 = new Pendulum(440,600);
	bob3 = new Pendulum(380,600)
	bob4 = new Pendulum(560,600);
	bob5 = new Pendulum(620,600);
	sling1 = new Sling(bob1.body,{x:500,y:400});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  drawSprites();

  bob1.display();
  bob2.display(); 
  bob3.display();
  bob4.display();
  bob5.display();
  sling1.display();
}




