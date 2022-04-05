let xBol = 300;
let yBol = 200;
let dBol = 15;
let raioBol = dBol / 2;

let VelXBol = 2;
let VelYBol = 2;

let xRaq = 5
let yRaq = 150
let cRaq = 10
let aRaq = 90


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  MostrarBolinha();
  MovimentarBolinha();
  VerificarColisaoBorda(); 
  MostrarRaquete();
  MovimentarRaquete();
  VerificarColisaoRaquete();
}

function MostrarRaquete(){
    rect(xRaq,yRaq,cRaq,aRaq)
}
function MostrarBolinha(){
    circle(xBol,yBol,dBol)
}

function MovimentarBolinha(){
  xBol += VelXBol
  yBol += VelYBol
}

function MovimentarRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaq -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaq += 10;
  }
}

function VerificarColisaoBorda(){
  if(xBol + raioBol > width || xBol - raioBol < 0){
    VelXBol *= -1;
  }
  
  if(yBol + raioBol > height || yBol - raioBol < 0){
    VelYBol *= -1;
  }
}

function VerificarColisaoRaquete(){
  if(xBol - raioBol < xRaq + cRaq && yBol- raioBol < yRaq + aRaq && yBol + raioBol + yRaq){
    VelXBol *= -1;
  }
}