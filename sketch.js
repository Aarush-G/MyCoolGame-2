var background1;
var Drake, Drakeimg;
var Helicopter, Helicopterimg
var Edge;
var Enemy, EnemyImg;
var Bomb, BombImg;
var BombsGroup;
function preload(){
  backgroundimg = loadImage("Images/Background1.jpg")
  Drakeimg = loadAnimation("Images/ND1.png","Images/ND2.png","Images/ND3.png")
  EnemyImg = loadImage("Images/Enemy.png")
  Helicopterimg = loadImage("Images/Helicopter.png")
  BombImg = loadImage("Images/Bombs.png")
}
function setup() {
  createCanvas(1920,1080);
  //createSprite(400, 200, 50, 50);
  background1 = createSprite(960,540,1000,1000)
  background1.addImage(backgroundimg)
  background1.scale = 2

  background1.x = background1.width/2
  Drake = createSprite(500,900,50,50)
  Drake.addAnimation("motion",Drakeimg)
  Drake.scale = 0.65
  invisibleGround = createSprite(960,1000,1920,20)
  invisibleGround.visible = false
  Helicopter = createSprite(960,100,20,20)
  Helicopter.addImage(Helicopterimg)
  Helicopter.scale = 0.5
  Helicopter.velocityX = -15
  Edge = createEdgeSprites();
  BombsGroup = createGroup()
}

function draw() {
  background(255,255,255);  
  background1.velocityX = -5
  if(background1.x<0){
    background1.x = background1.width/2
  }
  if(keyDown("space")&&Drake.y>= 575){
    Drake.velocityY = -15

  }
  Drake.velocityY = Drake.velocityY + 2
  Drake.collide(invisibleGround)

  if(keyDown("A")&& Drake.x>100){
    Drake.x+= -6
  }

  if(keyDown("D")&& Drake.x<1700){
    Drake.x+= 6
  }
  Helicopter.bounceOff(Edge)
  spawnEnemy()
  spawnBombs()
  drawSprites();

}

function spawnEnemy(){
  if(frameCount % 400 === 0){
    Enemy = createSprite(1700,785,20,20)
    Enemy.scale = 0.75
    Enemy.addImage(EnemyImg)
    Enemy.velocityX = -2
  }
}

function spawnBombs(){
  if(frameCount % 40 === 0){
    Bomb = createSprite(Helicopter.x,120,10,10)
    Bomb.addImage(BombImg)
    Bomb.velocityY = 3
    BombsGroup.add(Bomb)
    //Bomb.lifetime = 600
    //BombsGroup.destroyEach()
    if(Bomb.y > 400){
      BombsGroup.destroyEach()
    }
   
  }
}


