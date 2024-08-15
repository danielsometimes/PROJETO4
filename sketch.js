let palavra;
let som;
let imagem;

function setup() {
  createCanvas(600,600);
  palavra = diogo();
  som.loop();
}

function preload(){
  imagem = loadImage("imagem.jfif");
  som = loadSound("som.mp3");
}


function draw() {
  
  
  batata();
  diogo();
 
  let max = width;
  let min = 0;
  let aparecer = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0,aparecer);
  text(inicio, 300,300);
  
}

function batata()  {
  
   background("purple");
  image(imagem,0,0,600,600)
  fill("white");
  textSize(20); 
  textAlign(CENTER,CENTER);
}

function diogo() {
  let palavras = ["alex g","remember","things to do","race",];
  return random(palavras);
  
}