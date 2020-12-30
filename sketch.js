//global var
var speed;
var weight;
var wall;
var car;

function setup() {
  //creating canvas
  createCanvas(1600,400);

  //value for speed and weight
  speed = random(55,90);
  weight = random(400,1500);

  //car
  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = "white";

  //wall
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  //creating background
  background(0,0,0);

  if(wall.x - car.x < car.width/2 + wall.width/2) {
    car.velocityX = 0;
    var deformation = 0.5*speed*speed*weight/22500;

    if(deformation>180) {
      car.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100) {
      car.shapeColor = color(230,230,0);
    }

    if(deformation<100) {
      car.shapeColor = color(0,255,0);
    }
  }

  text("DEFORMATION: "+deformation, 200, 100);
  console.log(deformation);
  
  //displaying sprites
  drawSprites();
}