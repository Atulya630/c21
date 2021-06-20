var canvas;
var music;
var block1 , block2, block3, block4 ;
var ball, edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

block1 = createSprite(0,580,360,30);
block2 = createSprite(295,580,360,30);
block3 = createSprite(515,580,360,30);
block4 = createSprite(740,580,360,30);

ball = createSprite(random(20,750),100,40,40);
ball.shapeColor = "white";
ball.velocityX = 4;
ball.velocityY = 9;




    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites();
ball.bouceOff(edges);

if(block1.isTouching(ball)&& ball.bouceOff(block1)){
    ball.shapeColor = "red";
    music.play();
}

if(block2.isTouching(ball)){
    ball.shapeColor = "white";
    ball.velocityX = 0;
    ball.velocityY  = 0;
    music.stop();
}

if(block3.isTouching(ball)&& ball.bouceOff(block3)){
    ball.shapeColor = "red";
    music.play();
}

if(block4.isTouching(ball) && ball.bouceOff(block4)){
    ball.shapeColor = "red";
    music.play();
}

    //add condition to check if box touching surface and make it box
}
