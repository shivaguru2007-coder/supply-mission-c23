var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	w1 = new wall(380,650,200,20);
	w2 = new wall(480,600,20,100);
	w3  = new wall (280,600,20,100) 

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2,200,10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world,packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width/2,650,width,10,{isStatic:true} );
 	World.add(world, ground);
console.log(ground.x)
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 // keyPressed();
 w1.display();
 w2.display();
 w3.display();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  console.log(groundSprite.x)
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody,false);
    
  }
}



