const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, ballObject,groundObject,engine;
var world;


function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);
    

	engine = Engine.create();
	world = engine.world;
	ballObject=new Ball(40,40,20);
	dustbinObj=new Dustbin(1000,450);
	groundObject=new Ground(600,400);
	//Create a Ground
	

	

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
 
  
  ballObject.display();
  dustbinObj.display();
  groundObject.display();
  
  
 
  
  
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:85,y:-85});
	}
}
