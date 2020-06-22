var car, wall, speed, weight, deform;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,300,60,400);
  wall.shapeColor=color(80,80,80);
  car.shapeColor=color(80,80,80);
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
  deform=weight*speed*speed/45000
}

function draw() {
  background(255,255,255); 
  if(car.isTouching(wall)){
    if(deform<80||deform===80){
      car.shapeColor=color(0,255,0);
    }
    else if(deform<180){
      car.shapeColor=color(230,230,0);
    }
    if(deform>180||deform===180){
      car.shapeColor=color(255,0,0);
    }
  }
  car.collide(wall);
  drawSprites();
}