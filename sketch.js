const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var plinko = []
var division = []
var particle = []

function setup() {
  var canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  for(var i = 50; i <= 750; i = i + 50){
    plinko.push(new Plinko(i, 75));
  }

  for(var i = 25; i <= canvas.width; i = i + 50){
    plinko.push(new Plinko(i, 175));
    
  }

  for(var i = 50; i <= 750; i = i + 50){
    plinko.push(new Plinko(i, 275));
    
  }

  for(var i = 25; i <= canvas.width; i = i + 50){
    plinko.push(new Plinko(i, 375));
    
  }

  for(var i = 0; i <= canvas.width; i = i + 100){
    division.push(new Division(i, 650, 10, 300))
  }

  if(frameCount % 90 === 0){
    particle.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10));
  }

  ground = new Ground(400, 790, 800, 10);
}


function keyPressed(){
  if(keyCode === 32){
    particle.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10));
  }
}

function draw() {
  background(0); 
  Engine.update(engine); 
 
  for(var i = 0; i < plinko.length; i = i + 1){
  plinko[i].display();
}

for(var i = 0; i < division.length; i = i + 1){
  division[i].display();
}

for(var i = 0; i < particle.length; i = i + 1){
  
  particle[i].display();
}

ground.display();

}