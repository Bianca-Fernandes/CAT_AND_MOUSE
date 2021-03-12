var cat, mouse, catImg, mouseImg, catMoving, mouseTeasing, catLImg, mouseLImg;
var garden, gardenImg, songB;

function preload() {
  
    gardenImg = loadImage("garden.png");
    catImg = loadImage("cat1.png");
    mouseImg = loadImage("mouse1.png");
    catImg2 = loadAnimation("cat2.png", "cat3.png");
    mouseImg2 = loadAnimation("mouse2.png", "mouse3.png");
    catImg3 = loadImage("cat4.png");
    mouseImg3 = loadImage("mouse4.png");
    songB = loadSound("song.mp3");
}

function setup(){
    createCanvas(900,640);

garden = createSprite(450, 320);
garden.addImage(gardenImg);

cat = createSprite(700, 500);
cat.addImage(catImg);
cat.scale = 0.15;

mouse = createSprite(200, 500);
mouse.addImage(mouseImg);
mouse.scale = 0.1;

songB.play();
keyPressed();
}

function draw() {
background(0);

    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width + mouse.width)/2 && 
      mouse.x - cat.x < (cat.width + mouse.width)/2){
        cat.addAnimation("running", catImg3);
        cat.changeAnimation("running");
        cat.velocityX = 0;
          
        mouse.addAnimation("teasing",mouseImg3);
        mouse.changeAnimation("teasing");
      }else{
        cat.addImage(catImg);
        mouse.addImage(mouseImg);
      }
  
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("running", catImg2);
      cat.changeAnimation("running");

      mouse.addAnimation("teasing", mouseImg2);
      mouse.changeAnimation("teasing");
    }
}