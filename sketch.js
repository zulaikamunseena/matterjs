const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var rock;

function setup() {
  var canvas= createCanvas(400,400);
  myengine = Engine.create();
  myworld= myengine.world;
  var rock_options={
   isStatic: true
   }
  rock = Bodies.rectangle(200,390,50,50,rock_options);
  World.add(myworld,rock);

}

function draw() {
  background(0);  
  rectMode(CENTER);
  Engine.update(myengine);
  rect(rock.position.x,rock.position.y,50,50);

  
  
}