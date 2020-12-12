const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 const Constraint = Matter.Constraint;

 var engine, world;

 var bob1,bob2,bob3,bob4,bob5;
 var rope1,rope2,rope3,rope4,rope5;

 function preload(){

 }

 function setup(){
     createCanvas(800,700);

  
    engine = Engine.create();

    
    world = engine.world;

   
    Engine.run(engine);

   
   
   
    bob1 = new Pendulum(300,300);
    bob2 = new Pendulum(350,300);
    bob3 = new Pendulum(400,300);
    bob4 = new Pendulum(450,300);
    bob5 = new Pendulum(500,300);

   
    rope1 = new Sling(bob1.body,300,150);    
    rope2 = new Sling(bob2.body,350,150);      
    rope3 = new Sling(bob3.body,400,150);       
    rope4 = new Sling(bob4.body,450,150);
    rope5 = new Sling(bob5.body,500,150);
    
 }

 function draw(){
     background("yellow");

     bob1.display();
     bob2.display();
     bob3.display();
     bob4.display();
     bob5.display();

     rope1.display();
     rope2.display();
     rope3.display();
     rope4.display();
     rope5.display();
 }

 function keyPressed(){
     if(keyCode === UP_ARROW){
         Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
     }
 }
