var frect,mrect;

function setup() {
  createCanvas(1200,800);
  frect = createSprite(400,100,50,30);
  frect.shapeColor = "green";
  mrect = createSprite(400,800,40,20);
  mrect.shapeColor = "orange";
  mrect.velocityY = -4;
  frect.velocityY  = 4;
}

function draw() {
    background("blue"); 
  
    if(mrect.x-frect.x<frect.width/2+mrect.width/2 
      && frect.x-mrect.x<frect.width/2+mrect.width/2){
       mrect.velocityX = mrect.velocityX * (-1);
       frect.velocityX = frect.velocityX * (-1); 
      }
      if(mrect.y-frect.y<frect.height/2+mrect.height/2
      && frect.y-mrect.y<frect.height/2+mrect.height/2){
       mrect.velocityY = mrect.velocityY * (-1);
       frect.velocityY = frect.velocityY * (-1);    
      }
      drawSprites();
    } 