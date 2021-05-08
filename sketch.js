var  soldier;
//var ground;
var bgImg;
var bg;
var soldier1, enemy1,bomb1

function preload(){
bgImg = loadImage("backImg.jpg");
soldier1 = loadImage("soldier1.png");
enemy1 = loadImage("terr.png");
bomb1 = loadImage("bomb.png");
start1 = loadImage("start.png");
reset1 = loadImage("gameOver")



}

function setup(){
var canvas = createCanvas(windowWidth,windowHeight);
soldier = createSprite(windowWidth/2-400, windowHeight/2);

 //ground = createSprite(width/2,height/2+70,width,10);
//var invisibleGround = createSprite(width/2,height/2+65,width,10);
//invisibleGround.visible = false;
//ground.velocityX = -10;

bg = createSprite(0,0,width,height);
bg.velocityX = -10;
bg.addImage(bgImg);
soldier.addImage(soldier1);
soldier.scale = 0.5;




} 

function draw(){
//background(bgImg);

if (bg.x <bg.width/2-100){
    bg.x =bg.width/2;
  }

  bg.depth = soldier.depth;
  soldier.depth = soldier.depth+1;

  spawnBomb();
  //spawnEnemey();
drawSprites();

}
function spawnBomb(){
  if(frameCount%80===0){
    var bomb = createSprite(windowWidth/2+400, windowHeight/2);
    bomb.addImage(bomb1);
    bomb.lifetime = window.width/2;
    bomb.velocityX = -2;
  }

}

function spawnEnemey(){
  if(frameCount%120===0){
  var  enemy = createSprite(windowWidth/2+400, windowHeight/2);
enemy.addImage(enemy1);
enemy.scale = 0.5;
enemy.lifetime = 300
   }
}

