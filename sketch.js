const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var raindrops;
var engine,world;

function setup() {
  createCanvas(800,400);
  engine= Engine.create();
  world = engine.world;

      var x = randomNumber(0,800);
      for(x=x+50; x < 390; x=x+50) { 

  }



  
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

 


  raindrops.display();

  drawSprites();
}