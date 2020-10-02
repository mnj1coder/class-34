var hypnoticBall, database;
var position;

var gameState;
var PlayerCount = 0;
var player;
var game;
var form;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game = new GameClass ();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  
    
  
}
