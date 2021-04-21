var canvas;
var form, game,player;
var gameState, playerCount, allPlayers;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  gameState = 0;
  playerCount = 0;
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("pink");
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}