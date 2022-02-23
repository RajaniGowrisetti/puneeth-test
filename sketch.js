var PLAY = 1;
var END = 0;
var gameState = PLAY;


var bg,bgImg;
var player,playerImg
var Zombie,ZombieImg,zombieGroup
var laser,laserImg,laserGroup
var shoot = 0;
var score = 0;
function preload(){
    bgImg =loadImage("background.jpg");

 playerImg = loadImage("player.png");
 ZombieImg =loadImage("zombie1.png");
  laserImg =loadImage("bullet.png")
}


function setup(){
    createCanvas(1000,500)

 bg = createSprite(500,250);
    bg.addImage(bgImg);
    bg.scale =1.0;



player =createSprite(50,450);
player.addImage(playerImg);
player.scale =1.0;

ZombieGroup = new Group;
laserGroup =new Group;

score  = 0  ;
stroke("red");
fill("red");
textSize(25);
    

}

function draw(){
    background(0);
if(gameState ===PLAY){
  if(keyDown("UP_ARROW")){
    player.y = player.y - 4;
  
  }
  if(keyDown("DOWN_ARROW")){
    player.y = player.y + 4;
  
  }
  
    
  if(keyDown("LEFT_ARROW")){
    player.x = player.x - 4;
   
  }
  if(keyDown("RIGHT_ARROW")){
    player.x = player.x + 4;
  
  }


 
 

  
  shoot = shoot-1
  if(keyDown("space") && shoot <0){
  laser = createSprite(player.x,player.y);
  laser.addImage(laserImg);
  laser.velocityX = 5 ;
  laserGroup.add(laser);
  shoot = laser.x;
  laser.scale = 0.25;
 
  }

if(laserGroup.isTouching(ZombieGroup)){
  score = score+10;
  ZombieGroup.destoryEach();
}
  
if(ZombieGroup.isTouching(player)){
  gameState =END 
}

}

else if(gameState === END){
bg.velocityX =0 
ZombieGroup.setVelocityXEach(0);
ZombieGroup.setVisibleEach(false);

}
   


  

 

  
spawnZombies();
    drawSprites();
    text("Score:"+score,300,50);
}



function spawnZombies(){
    if(World.frameCount % 150 === 0){
        Zombie =createSprite(1100,500);
        Zombie.addImage( ZombieImg);
        Zombie.velocityX =-2;
      
        ZombieGroup.add(Zombie);
        Zombie.scale = 1.5
    }
}

