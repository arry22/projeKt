var bullet,bulletRightedge,wall, walllLeftedge;
var speed,weight,thickness;




function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  bullet=createSprite(50,200,50,50);
  bullet.shapeColor="red";
wall=createSprite(1500,200,thickness,weight/2);
wall.shapeColor=(80,80,80);
wallLeftedge=createSprite();
bulletLeftedge=createSprite();
thickness=random(22,83)

speed=random(223,381);
weight=random(30,52);
bullet.velocityX=speed;



}

function draw() {
  background(255,255,255);  

if(wall.x-car.x<(car.width+wall.width)/2){
  bullet.velocityX=0;
var deformation=0.5 *weight*speed*speed/22509;
if(deformation>180 && deformation>100)
{
  bullet.shapeColor=color(230,230,0);
}

if(deformation<100)
{

  bullet.shapeColor=color(0,250,0);

}

function hasCollided(bullet,wall){

  bulletRightedge+bullet.x + bullet.width;
wallLeftedgex+wall.x;
if(hasCollided(bullet,wall)){


bullet.velocityX=0;
var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);

if(damage=10){
wall.shapeColor=color(255,0,0);

}

if(damage = 10){

wall.shapeColor=color(0,255,0);


}
}









}







  
}













  drawSprites();
}