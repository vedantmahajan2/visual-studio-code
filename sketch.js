var fr,mr
  



function setup() {
  createCanvas(800,400);
  
fr=createSprite(200,300,70,20);
mr=createSprite(300,350,20,70);

fr.shapeColor("red");
mr.shapeColor("blue");

}

function draw() {
  background("lightblue");
  
  mr.x=World.mouseX;
  mr.y=World.mouseY;

  if (mr.x-fr.x<mr.width/2+fr.width/2){
  fr.shapeColor("red");
mr.shapeColor("red");
  }
  else{
    fr.shapeColor("green");
    mr.shapeColor("green");
  }

  drawSprites();
}