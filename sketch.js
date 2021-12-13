var box;
function setup() {
  createCanvas(800,800);
  box=createSprite(400,400,30,30);
  box.shapeColor="red";
}

function draw() 
{
  background("blue");
  if (keyDown("left")) {

  box.x-=3;
    
  }
  if (keyDown("right")) {
  box.x+=3;
    
  }
  if (keyDown("up")) {
    box.y-=3;
      
    }
    if (keyDown("down")) {
      box.y+=3;
        
      }
    
  drawSprites();

}




