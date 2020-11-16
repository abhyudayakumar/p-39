var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var runners, runner1, runner2, runner3, runner4;
var runner1_image;
var runner2_image;
var runner3_image;
var runner4_image;
var ground_image;
var track_image;

function preload(){
  runner1_image = loadImage("images/runner1.png");
  runner2_image = loadImage("images/runner2.png");
  runner3_image = loadImage("images/runner3.png");
  runner4_image = loadImage("images/runner4.png");
  ground_image = loadImage("images/ground.png");
  track_image = loadImage("images/track.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

 if(gameState===2){
  game.end();
 }

}
