var fixedRect, movingRect,ob1,ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  ob1=createSprite(100,100,30,30);
  ob1.shapeColor="blue";

  ob2=createSprite(100,400,40,90);
  ob2.shapeColor="blue";
  
}

function draw() {
  background(0,0,0);  

  ob1.x=mouseX;
  ob1.y=mouseY ;

 bounceOff(fixedRect,movingRect);

 if(isTouching(ob1,ob2)) {
   ob1.debug=true;
   ob2.debug=true;
 }
 else{
   ob1.debug=false;
   ob2.debug=false;
 }
  drawSprites();
}

