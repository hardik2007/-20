var car,car1,car2;
var wall;
var speed;
var weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 250, 50, 20);
  car1=createSprite(50, 200, 50, 20);
  car2=createSprite(50,150,50, 20);
 
  wall=createSprite(1300,200,50,300);

  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
}

function draw() {
  background(255,255,255); 
  car.velocityX=speed; 
  car1.velocityX=speed; 
  car2.velocityX=speed;

  if(car.isTouching(wall)){
car.velocityX = 0;
var deformation=0.5*weight*speed*speed/22509
if(deformation>180){
car.shapeColor = color(255,0,0)
}
if(deformation<180 && deformation>100){
car.shapeColor = color(230,230,0)
}
if(deformation<100){
car.shapeColor = color(0,255,0)
}
  }

  
  if(car1.isTouching(wall)){
    car1.velocityX = 0;
    var deformation=0.5*weight*speed*speed/22509
    if(deformation>180){
    car1.shapeColor = color(255,0,0)
    }
    if(deformation<180 && deformation>100){
    car1.shapeColor = color(230,230,0)
    }
    if(deformation<100){
    car1.shapeColor = color(0,255,0)
    }
      }

      
  if(car2.isTouching(wall)){
    car2.velocityX = 0;
    var deformation=0.5*weight*speed*speed/22509
    if(deformation>180){
    car2.shapeColor = color(255,0,0)
    }
    if(deformation<180 && deformation>100){
    car2.shapeColor = color(230,230,0)
    }
    if(deformation<100){
    car2.shapeColor = color(0,255,0)
    }
      }
  drawSprites();
}