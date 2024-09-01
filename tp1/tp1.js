//Anaisabela Guerrero Bello
//Comi 2
//leg 94713/3

let referencia;
let invertirCuadros = false;
let mostrarIlu = true;
const numCuadrados = 28;

function preload() {
  referencia = loadImage("data/ilu.jpg"); 
}

function setup() {
  createCanvas(800, 400);
  textSize(30);
}

function draw() {
  background(255);

  if (!mostrarIlu) { 
    fill(0);
    text("Ahora no", 20, 40);
  } else {
    dibujarIlu();
    dibujarFranjaVerticaldeAbajo();
    dibujarFranjaVerticaldeArriba();
    dibujarFranjaHorizontalIzq();
    dibujarFranjaHorizontalDer();
    fill(255, 0, 0);
    text("Ahora me ves", 20, 40);
  }

  // Dibuja la imagen de referencia
  image(referencia, 400, 0, width / 2, height);

  // Botón de reiniciar
  noStroke();
  fill(255, 0, 0);
  rect(width / 3, height - 60, 100, 50);
  fill(255);
  text("reiniciar", width / 4 + 15, height - 50);
}

function dibujarIlu() {
  const x = width / 4;
  const y = height / 2;
  const tam = width;

  for (let i = 0; i < numCuadrados; i++) {
    const size = tam * (numCuadrados - i) / numCuadrados;

    // Decide cuándo invertir los cuadros
    if (i % 2 === 0) {
      fill(invertirCuadros ? 255 : 0);
    } else {
      fill(invertirCuadros ? 0 : 255);
    }

    // Centrar la ilusión
    rectMode(CENTER);
    rect(x, y, size, size);
  }
}

function dibujarFranjaVerticaldeAbajo() {
  let x = width / 4;
  let y = (height / 2) + 20;

  for (let i = 0; i < height / 20; i++) {
    if (i % 2 === 0) {
      fill(invertirCuadros ? 0 : 255);
    } else {
      fill(invertirCuadros ? 255 : 0);
    }
    rect(x, y, 55, 14);
    y += 14;
  }
}

function dibujarFranjaVerticaldeArriba() {
  let x = width / 4;
  let y = (-height / 2) + 110;

  for (let i = 0; i < height / 20; i++) {
    if (i % 2 === 0) {
      fill(invertirCuadros ? 255 : 0);
    } else {
      fill(invertirCuadros ? 0 : 255);
    }
    rect(x, y, 55, 14);
    y += 14;
  }
}

function dibujarFranjaHorizontalIzq() {
  let x = width / 4 - 40;
  let y = height / 2;

  for (let i = 0; i < height / 20; i++) {
    if (i % 2 === 0) {
      fill(invertirCuadros ? 255 : 0);
    } else {
      fill(invertirCuadros ? 0 : 255);
    }
    rect(x, y, 14, 55);
    x -= 14;
  }
}

function dibujarFranjaHorizontalDer() {
  let x = (width / 4) + 40;
  let y = height / 2;

  for (let i = 0; i < height / 20; i++) {
    if (i % 2 === 0) {
      fill(invertirCuadros ? 255 : 0);
    } else {
      fill(invertirCuadros ? 0 : 255);
    }
    rect(x, y, 14, 55);
    x += 14;
  }
}

// Al tocar Space Bar se intercambian los cuadros (de negro a blanco y de blanco a negro)
function keyPressed() {
  if (key === 'x') {
    mostrarIlu = !mostrarIlu;
  } else if (key === ' ') {
    invertirCuadros = !invertirCuadros;
  }
}

function mousePressed() {
  if (mouseX > width / 3 - 50 && mouseX < width / 3 + 50 && mouseY > height - 85 && mouseY < height - 35) { // Botón
    mostrarIlu = true;
    invertirCuadros = false;
  }
}
