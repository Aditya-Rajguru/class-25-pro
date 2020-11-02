
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperObject,dustbin,ground;
var paperimg,dustbinimg;

function preload(){
	paperimg=loadImage("paper.png");
	dustbinimg=loadImage("dustbinimg.png");
}


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


	paperObject =new paper(100,height-90,100);
	
ground=createSprite(width/2,height-35,1600,10);
ground.shapeColor=color("red");

dustbin=createSprite(900,height-40,200,20);
dustbin.addImage("dustbinimg");
var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
	}
  });



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);



  
 
  drawSprites();
  paperObject.display();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}



