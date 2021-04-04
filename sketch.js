
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImage 
var boy

function preload(){
	boyImage = loadImage("Plucking mangoes/boy.png")
}


function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneObj = new Stone(80,520,50,50);

    boy = createSprite(140,580,40,40);
	boy.addImage(boyImage);
	boy.scale=0.12;

    ground = new Ground(450,690,900,30);
	tree   = new Tree(640,440,500,500);
	
	mango1 = new Mango(600,280,60);
	mango2 = new Mango(550,370,60);
	mango3 = new Mango(680,370,40);
	mango4 = new Mango(830,420,40);
	mango5 = new Mango(480,410,40);
	mango6 = new Mango(690,250,50);
	mango7 = new Mango(720,320,50);
	mango8 = new Mango(760,380,50);
	mango9 = new Mango(540,270,50);
	mango10 = new Mango(640,420,50);
	mango11 = new Mango(820,370,50);
	mango12 = new Mango(450,360,50);

	

	launcherObject= new Launcher(stoneObj.body,{x:80,y:520});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stoneObj.display();

   detectCollision(stoneObj,mango1);
   detectCollision(stoneObj,mango2);
   detectCollision(stoneObj,mango3);
   detectCollision(stoneObj,mango4);
   detectCollision(stoneObj,mango5);
   detectCollision(stoneObj,mango6);
   detectCollision(stoneObj,mango7);
   detectCollision(stoneObj,mango8);
   detectCollision(stoneObj,mango9);
   detectCollision(stoneObj,mango10);
   detectCollision(stoneObj,mango11);
   detectCollision(stoneObj,mango12);
  

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    launcherObject.fly()
}

function keyPressed(){
	if (keyCode===32){
		Matter.body.setPosition(stoneObj.Body, {x:80, y:580});
		launcherObject.attach(stoneObj.body)
	}
}

function detectCollision(lstone,lmango){
   mangoBodyPosition=lmango.body.position;
   stoneBodyPosition=lstone.body.position;

   var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r){
	   Matter.Body.setStatic(lmango.body,false);
   }
}