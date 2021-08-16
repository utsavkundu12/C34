const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var boggie4,boggie5,boggie6;
var rock1;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  
  boggie1 = new boggie(50,170,50,50)
  boggie2 = new boggie(150,170,50,50)
  boggie3= new boggie(250,170,50,50)
  boggie4 = new boggie(350,170,50,50)
  boggie5 = new boggie(450,170,50,50)
  boggie6 = new boggie(550,170,50,50)
  
rock1 = new Rock (1100,200,100,100)
chain1 = new Chain(boggie1.body,boggie2.body)
chain2 = new Chain(boggie2.body,boggie3.body)
chain3 = new Chain(boggie3.body,boggie4.body)
chain4 = new Chain(boggie4.body,boggie5.body)
chain5 = new Chain(boggie5.body,boggie6.body)
chain6 = new Chain(boggie6.body,boggie6.body)
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
ground.show();
 boggie1.show();
boggie3.show();
boggie4.show();
boggie5.show();
boggie6.show();

rock1.show();
 
chain1.show();
chain2.show();
chain3.show();
chain4.show();
chain5.show();

var collision = Matter.SAT.collides(boggie6.body,rock1.body);

if(collision.collided){
  flag = 1
}
if (flag === 1){
  textSize(30)
   stroke(3)
   FileList('red')
   text("crash",500,200);
   crashSound.play()
}
  }
function keyPressed (){
if(keycode===RIGHT_ARROW){

Matter.Body.applyForce(boggie6.body,{x:boggie6.body.position.x,y:boggie6.body.position.y},{x:0.5,y:0});
trainSound.play();
}
}