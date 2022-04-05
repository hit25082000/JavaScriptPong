//Variaveis Bolinha
let xBol = 300;
let yBol = 200;
let dBol = 13;
let raioBol = dBol / 2;

let VelXBol = 6;
let VelYBol = 6;

//Variaveis minha raquete
let xRaq = 5
let yRaq = 150

//Variaveis raeuete oponente
let xRaqOpo = 585;
let yRaqOpo = 150;
let VelYOpo;

//Medida padrão de raquetes
let cRaq = 10
let aRaq = 90

//Placar
let MeusPontos = 0;
let PontosOponente = 0;

//Sons
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3")  
  raquetada = loadSound("raquetada.mp3")  
  ponto = loadSound("ponto.mp3")  
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

let coli50false

function draw() {
  background(0);
  MostrarBolinha();
  MovimentarBolinha();
  VerificarColisaoBorda(); 
  MostrarRaquete(xRaq,yRaq);
  MovimentarRaquete();
  //VerificarColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca(xRaq,yRaq);
  colisaoMinhaRaqueteBiblioteca(xRaqOpo,yRaqOpo);
  MostrarRaquete(xRaqOpo,yRaqOpo);
  MovimentarRaqueteOponente();
  incluirPlacar();
  MarcaPonto();
}

function MostrarRaquete(x,y){
    rect(x,y,cRaq,aRaq)
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

function colisaoMinhaRaqueteBiblioteca(x,y) {
  colidiu = collideRectCircle(x, y, cRaq, aRaq, xBol, yBol, raioBol);
  if(colidiu){
    VelXBol *= -1;
    raquetada.play();
  }
}

function MovimentarRaqueteOponente(){
  VelYOpo = yBol - yRaqOpo - cRaq/2 - 30;
  yRaqOpo += VelYOpo
}

function incluirPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(MeusPontos,170,26);
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(PontosOponente,470,26);
}

function MarcaPonto(){
  if(xBol>590){
    MeusPontos += 1;
    ponto.play();
  }
  if(xBol<10){
    PontosOponente += 1;
    ponto.play();
  }
}