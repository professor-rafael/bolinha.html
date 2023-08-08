
let cor;

let circuloX;

let circuloY;

function setup() {

createCanvas(1000, 1000);

background("green");

cor = ["blue", "yellow", "orange"];

circuloX = [100, 200, 300];

circuloY = [100, 200, 300];

}

function draw() {

for(let contador in circuloX){

fill(cor[contador]);

circle(circuloX[contador], circuloY[contador], 50);

}

}
