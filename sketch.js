var monkey, monkey_running
var ground;
var FoodGroup, obstacleGroup
var score
var bananaImage, bananaGroup;
var obstacleImage, obstacleGroup;
var survivalTime;
var score;


function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  ground = createSprite(400, 350, 1500, 15);
  ground.velocityX = -4;
  ground.x = ground.width / 2;


  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1;

  survivalTime = 0;
  score = 0;
  
  // monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  
  
  bananaGroup = new Group();

  
  
  obstacleGroup = new Group();
}

function draw() {
  createCanvas(800, 400)
  background("lightBlue");

food();
obstacles();


  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500, 50);


  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount / 35)
  text("Survival Time: " + survivalTime, 100, 50);

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  monkey.collide(ground);
  if (keyDown("space") && monkey.y >= 200) {
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 0.4;




  

  if (monkey.isTouching(bananaGroup)) {
    bananaGroup.destroyEach();
    score = score + 1
  }
  


   
  drawSprites();

}



function food() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(400, 170, 10, 40);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage); 
    banana.scale = 0.1
    banana.velocityX = -3;
    bananaGroup.add(banana);
  }


}

function obstacles() {
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(420, 290, 120, 40);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.3
    obstacle.velocityX = -6;
    obstacleGroup.add(obstacle);
  }




}