
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ground;
var player, playerImage;

function setup() {
  createCanvas(1280,600);

  engine = Engine.create();
  world = engine.world;
  
   
  ground = new Ground(200,450,2150,35);
  player = new Player(40,50,60,60)
}


function draw() 
{
  background("yellow");
  Engine.update(engine);
  
  ground.display();

  player.display();

 
}

