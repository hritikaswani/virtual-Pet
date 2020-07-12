//Create variables here
var dog,happyDog,foodStock

function preload()
{
  //load images here
  var dog = loadImage ("sprites/Dog.png")
  var happyDog = loadImage ("sprites/happyDog.png")
}

function setup() {
  createCanvas(500, 500);
  
  food = database.ref('food')
  foodStock.on("value",readStock)
  
}


function draw() {  
  background(46,139,87)

if (keyWentDown(UP_ARROW)){
  writeStock(food);
  dog.image = loadImage("sprites/happyDog");
}

  drawSprites();
  //add styles here

}



