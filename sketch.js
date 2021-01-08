var baby,babyImage;
var ladderImg,babyBottleImg,babyMilkImg,toyImg,babyToyImg;
var milkGroup;
var gameState = "toddler";
var childImg ;
var milkFlag = 0;
function preload(){
  babyImage = loadImage("Images/baby1.png");
  ladderImg = loadImage("Images/ladder.png");
  babyBottleImg = loadImage("Images/bottle.png");
  babyMilkImg = loadImage("Images/babyDrinkMilk.png");
 toyImg = loadImage("Images/toys.png");
 babyToyImg = loadImage("Images/happyToy.png");
 childImg = loadImage("Images/babySleeping.png");
} 
function setup(){
  createCanvas(600,600);
  baby = createSprite(20,height-50,30,10);
  baby.addImage(babyImage);
  milkGroup = new Group();
  toyGroup = new Group();
  ladderGroup = new Group();
}
function draw(){
  background("LightBlue");
  if(keyDown(RIGHT_ARROW)){
    baby.x = baby.x+2;
  }
  //if(keyDown(L))
  if(gameState === "toddler"){
  milks();
  if(milkGroup.isTouching(baby)){
    milkFlag = 1;
    baby.addImage(babyMilkImg);
    milkGroup.destroyEach();
    milkGroup.setVelocityXEach(0);
    }
  toys();
    if(toyGroup.isTouching(baby)){
      baby.addImage(babyToyImg);
      }
  ladders();
  if(ladderGroup.isTouching(baby)){
    baby.addImage(childImg);
    gameState = "child";
  }
    }
  drawSprites();
}

function toys (){
  if(frameCount% 200 === 0){
var obstacle = createSprite(600,height-50,10,10);
obstacle.velocityX = -3;
 obstacle.addImage(toyImg);
 obstacle.scale =0.5;
 toyGroup.add(obstacle);
  
}
  }
  function ladders (){
    if(frameCount% 350 === 0){
  var obstacle = createSprite(600,height-50,10,10);
  obstacle.velocityX = -3;
   obstacle.addImage(ladderImg);
   obstacle.scale =0.5;
   ladderGroup.add(obstacle);
    
  }
    }
function milks (){
  if(frameCount% 120 === 0 && milkFlag === 0){
var obstacle = createSprite(600,height-50,10,10);
obstacle.velocityX = -3;
 obstacle.addImage(babyBottleImg);
 milkGroup.add(obstacle);
  
}

  }


