
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(400,680,800,20)

	k= new Dustbin(650,650,90,20)
	l= new Dustbin(700,650,20,90)
	m= new Dustbin(600,650,20,90)

	ball= new Paper(100,650)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  ground.display()
  k.display()
  l.display()
  m.display()
  ball.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:27,y:-27})
		
	}
}



