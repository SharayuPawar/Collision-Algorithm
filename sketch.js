var fixedRect,movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 30, 60);
  fixedRect.shapeColor="blue";
  fixedRect.debug='true';
  movingRect=createSprite(600,200,35,50);
movingRect.shapeColor='blue';
movingRect.debug='true';
  
}

function draw() {
 
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
   && fixedRect.x- movingRect.x < fixedRect.width/2 + movingRect.width/2
   && movingRect.y- fixedRect.y< fixedRect.height/2 + movingRect.height/2 
   && fixedRect.y- movingRect.y<fixedRect.height/2 + movingRect.height/2 ){
    movingRect.shapeColor='yellow';
    fixedRect.shapeColor='yellow';
  }
  else{
    movingRect.shapeColor='blue';
    fixedRect.shapeColor='blue';
  }
  drawSprites();
}