var paperObject, dustBin;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paperObject = new Paper(80, 360, 25);

	dustBinR = new Dustbin(650, 460, 20, 100);
	dustBinL = new Dustbin(480, 460, 20, 100);
	dustBinB = new Dustbin(565, 500, 150, 20);

	ground = new Ground(400, 520, 800, 20);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background(0);

  paperObject.display();

  dustBinR.display();
  dustBinL.display();
  dustBinB.display();
  
  ground.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



