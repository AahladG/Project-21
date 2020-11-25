var thickness, wall;
var bullet, speed, weight;

function setup() {
  createCanvas(800,400);

  bullet = createSprite(200, 200, 40, 20);
  
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83)

  bullet.shapeColor = "white";
  bullet.velocityX = 50;
  wall = createSprite(700, 200, thickness, height/2);

}

function draw() {
  background("black");

  var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0;

    if(damage < 10){
      wall.shapeColor = "green";
    }
    if(damage >= 10){
      wall.shapeColor = "red";
    }
  }

  drawSprites();
}