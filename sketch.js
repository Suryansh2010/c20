var frect,mrect;

function setup() {
  createCanvas(800,400);
  frect = createSprite(200,200,50,30);
  frect.shapeColor = "green";
  mrect = createSprite(400,300,40,20);
  mrect.shapeColor = "orange";
}

function draw() {
  background("blue"); 
  console.log(frect.x-mrect.x);
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;

  if(mrect.x-frect.x<frect.width/2+mrect.width/2 
    && frect.x-mrect.x<frect.width/2+mrect.width/2
    && mrect.y-frect.y<frect.height/2+mrect.height/2
    && frect.y-mrect.y<frect.height/2+mrect.height/2){
    frect.shapeColor = "yellow";
    mrect.shapeColor = "red";
  }
  else{
    frect.shapeColor = "green";
    mrect.shapeColor = "orange";
  }

  drawSprites();
}