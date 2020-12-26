const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground
var divisions = []
var plinkos = []
var particles = []


function setup() {
  createCanvas(490,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,795,480,20)
  for(var i = 5 ; i < 490 ; i = i+80){
    divisions.push(new Division(i,650,10,300))
  }

  for(var i = 50 ; i < 490 ; i = i+75){
    plinkos.push(new Plinko(i,75,10))
  }

  for(var i = 75 ; i < 490 ; i = i+75){
    plinkos.push(new Plinko(i,175,10))
  }

  for(var i = 50 ; i < 490 ; i = i+75){
    plinkos.push(new Plinko(i,275,10))
  }

  for(var i = 75 ; i < 490 ; i = i+75){
    plinkos.push(new Plinko(i,375,10))
  }



}

function draw() {
  background("lightblue");
  Engine.update(engine);
  ground.display()
  for(var i = 0 ; i < divisions.length ; i++){
    divisions[i].display()
  }
  for(var i = 0 ; i < plinkos.length ; i++){
    plinkos[i].display()
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    
  }
 
  for (var i = 0; i < particles.length; i++) {
   
     particles[i].display();
   }
 }
 
  drawSprites();
