const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;

var ground
var particle=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  var canvas=createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(400,700,800,10);

  for(var k=0; k<=width; k=k+80){
    divisions.push(new Division(k,height-divisionHeight+50,10,divisionHeight));
  }
  for(var j=75; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j=75; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();

  for(var i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  if(frameCount%60 === 0){
    particle.push(new Particle(random(width/2-30,width/2+30),10,10));
  }

  for(var j=0; j<particle.length; j++){
    particle[j].display();
  }

  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
  }
}