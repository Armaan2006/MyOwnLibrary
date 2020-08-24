var fixedRect, movingRect;

var movingObject1, movingObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  movingObject1 = createSprite(300,200,50,50);
  movingObject1.shapeColor = "blue";
  movingObject1.velocityY = 5;

  movingObject2 = createSprite(300,400,50,50);
  movingObject2.shapeColor = "blue";
  movingObject2.velocityY = -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,fixedRect)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  bounceOff(movingObject1, movingObject2);

  drawSprites();
}
