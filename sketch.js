
var canvas;
var music;
var box;
var hi
var bye;
var cya;
var hello;
var edges;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
  
    
           
           
           
    //create 4 different surfaces
     hi = createSprite(100,600,100,40)
    hi.shapeColor = "green"
     hello = createSprite(250,600,100,40)
    hello.shapeColor = "red"
    cya = createSprite(410,600,100,40)
    cya.shapeColor = "yellow"
     bye = createSprite(570,600,100,40)
    bye.shapeColor = "pink"

    //create box sprite and give velocity
    box = createSprite(random(70,750),300,20,20)
    box.shapeColor = "white"
    box.velocityX = 5 ;
    box.velocityY = 7;
   
     
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges = createEdgeSprites();
    box.bounceOff(edges)

    if (bye.isTouching(box) && box.bounceOff(bye)){
        box.shapeColor = "pink"}

    if (hello.isTouching(box) && box.bounceOff(hello)){
        box.shapeColor = "red" }

    if (hi.isTouching(box) && box.bounceOff(hi)){
        box.shapeColor = "green" 
    box.velocityX = 0
    box.velocityY = 0
    music.stop()
    }

    if (cya.isTouching(box) && box.bounceOff(cya)){
        box.shapeColor = "yellow"
    music.play()
    }
    
 

drawSprites();


    //add condition to check if box touching surface and make it box
}
