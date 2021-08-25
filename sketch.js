var bathi
var sleepi
var as
var brushi
var eati
var gymi

function setup() {
  createCanvas(800,400);
  as = createSprite(400, 200, 50, 50);
  as.addAnimation("sleep",sleepi)
  as.scale=0.1
}

function draw() {
  background("black");  
  if (keyDown(RIGHT_ARROW)){
    as.addAnimation("bath",bathi)
    as.changeAnimation("bath")
  }  
  if (keyDown(LEFT_ARROW)){
    as.addAnimation("brush",brushi)
    as.changeAnimation("brush")
  } 
  if (keyDown(UP_ARROW)){
    as.addAnimation("eat",eati)
    as.changeAnimation("eat")
  }
  if (keyDown(DOWN_ARROW)){
    as.addAnimation("gym",gymi)
    as.changeAnimation("gym")
  }

  drawSprites();
}

function preload(){
bathi = loadAnimation("Images/bath1.png","Images/bath2.png")
sleepi = loadImage("Images/sleep.png")
brushi = loadAnimation("Images/brush.png")
eati = loadAnimation("Images/eat1.png","Images/eat2.png")
gymi = loadAnimation("Images/gym1.png","Images/gym2.png","Images/gym11.png","Images/gym12.png")
}