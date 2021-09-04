var pathImg;
var boyImg;

function preload(){
  pathImg=loadImage("path.png")
  boyImg=loadAnimation("runner-1.png","runner-2.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;
  boy=createSprite(100,50,100,100);
  boy.addAnimation("boy",boyImg);
  boy.scale=0.1;
}

function draw() {
  background(0);

  if(path.y>400){
    path.y=height/2;
    
  edges = createEdgeSprites();
  edges.visible=false;

  boy.x = World.mouseX;

  boy.collide(edges);

  }
  drawSprites()
}

