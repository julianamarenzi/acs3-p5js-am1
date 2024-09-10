//ACS N°3

document.oncontextmenu = function(){
    return false;
}

function setup() {
    createCanvas(520, 620);
}

function draw() {
    let b1 = map(mouseX, 0, 520, 241, 102);
    let b2 = map(mouseX, 0, 520, 171, 102);
    let b3 = map(mouseX, 0, 520, 65, 102);

    let s = map(mouseX, 0, 520, 50, 255);

    let b = map(mouseX, 0, 520, 255, 0);
    let n = map(mouseX, 0, 520, 0, 255);

    let a1 = map(mouseX, 0, 520, 255, 126);
    let a2 = map(mouseX, 0, 520, 213, 126);
    let a3 = map(mouseX, 0, 520, 0, 126);

    let r1 = map(mouseX, 0, 520, 223, 130);
    let r2 = map(mouseX, 0, 520, 27, 130);

    let az1 = map(mouseX, 0, 520, 43, 116);
    let az2 = map(mouseX, 0, 520, 94, 116);
    let az3 = map(mouseX, 0, 520, 235, 116);

    background(b1, b2, b3, 50);
    stroke(s);
    strokeWeight(0.6);

    
    if (mouseIsPressed) {
        if (mouseButton == RIGHT){
            background(random(255),random(255),random(255));
        }
    }

    //transparente
    push();
    noFill();
    translate(mouseX, mouseX);
    quad(150, 120, 180, 142, 180, 176, 150, 154);
    quad(150, 120, 180, 142, 185, 142, 155, 120);
    quad(180, 142, 185, 142, 185, 175, 180, 175);

    //blanco
    fill(b);
    quad(70, 90, 180, 170, 180, 280, 70, 200);
    quad(70, 90, 75, 90, 185, 170, 180, 170);
    quad(180, 170, 185, 170, 185, 280, 180, 280);
    line(135, 138, 135, 247);

    //gris y blanco
    fill(221);
    quad(105, 310, 80, 340, 195, 430, 220, 400);
    pop();

    push();
    translate(mouseX, -mouseX);
    fill(b);
    quad(80, 340, 80, 365, 195, 455, 195, 430);
    quad(195, 430, 195, 455, 220, 425, 220, 400);

    //amarillo
    fill(a1, a2, a3, 240);
    quad(135, 190, 200, 240, 120, 330, 55, 280);
    quad(55, 280, 120, 330, 120, 340, 55, 290);
    quad(120, 330, 200, 240, 200, 250, 120, 340);
    pop();

    //rojo
    push();
    translate(mouseX, mouseX);
    fill(r1, r2, r2);
    quad(135, 270, 200, 320, 200, 375, 135, 325);
    quad(135, 270, 140, 270, 205, 320, 200, 320);
    quad(200, 320, 205, 320, 205, 375, 200, 375);
    pop();

    //rojo y blanco
    push();
    translate(-mouseX, -mouseX);
    fill(r1, r2, r2);
    quad(290, 285, 290, 180, 255, 155, 255, 260);
    quad(255, 155, 260, 155, 295, 180, 290, 180);
    quad(290, 180, 295, 180, 295, 285, 290, 285);
    pop();
    push();
    translate(mouseX, mouseX);
    fill(b);
    quad(255, 260, 255, 155, 220, 130, 220, 235);
    quad(220, 130, 225, 130, 260, 155, 255, 155);
    pop();

    //transparente
    push();
    translate(mouseX, -mouseX);
    noFill();
    quad(270, 240, 270, 210, 250, 233, 250, 263);
    quad(245, 233, 250, 233, 250, 263, 245, 263);
    quad(245, 233, 250, 233, 270, 210, 265, 210);

    //blanco
    fill(b, 240);
    quad(200, 320, 270, 240, 270, 280, 200, 360);
    quad(265, 240, 270, 240, 200, 320, 195, 320);
    quad(195, 320, 200, 320, 200, 360, 195, 360);
    pop();

    //negro
    push();
    translate(-mouseX, -mouseX);
    fill(n);
    stroke(b);
    quad(405, 255, 465, 190, 390, 135, 330, 200);
    quad(330, 200, 330, 205, 405, 260, 405, 255);
    quad(405, 255, 405, 260, 465, 195, 465, 190);

    //blanco
    stroke(s);
    fill(b);
    quad(405, 165, 450, 115, 370, 55, 325, 105);
    quad(325, 105, 325, 110, 405, 170, 405, 165);
    quad(405, 170, 405, 165, 450, 115, 450, 120);
    pop();

    //gris
    push();
    translate(-mouseX, mouseX);
    fill(221);
    quad(370, 235, 370, 115, 420, 60, 420, 180);
    quad(365, 115, 370, 115, 370, 235, 365, 235);
    quad(365, 115, 370, 115, 420, 60, 415, 60);

    //blanco
    fill(b, 240);
    quad(310, 285, 310, 200, 380, 120, 380, 205);
    quad(310, 285, 305, 285, 305, 200, 310, 200);
    quad(305, 200, 310, 200, 380, 120, 375, 120);
    pop();

    //azul
    push();
    translate(-mouseX, -mouseX);
    fill(az1, az2, az3);
    quad(180, 370, 180, 510, 210, 535, 210, 395);
    quad(180, 370, 185, 370, 215, 394, 210, 394);
    quad(210, 394, 215, 394, 215, 535, 210, 535);
    pop();

    //negro
    push();
    translate(mouseX, -mouseX);
    fill(n);
    stroke(b);
    quad(175, 505, 200, 525, 180, 545, 155, 525);
    quad(155, 525, 155, 540, 180, 560, 180, 545);
    quad(180, 545, 180, 560, 200, 540, 200, 525);

    //blanco
    stroke(s);
    fill(b, 240);
    quad(175, 480, 195, 495, 180, 510, 160, 495);
    quad(160, 495, 160, 500, 180, 515, 180, 510);
    quad(180, 510, 180, 515, 195, 500, 195, 495);

    //blanco
    fill(b);
    quad(210, 385, 210, 543, 230, 520, 230, 363);
    quad(205, 385, 205, 543, 210, 543, 210, 385);
    quad(205, 385, 210, 385, 230, 363, 225, 363);
    pop();

    //blanco
    push();
    fill(b, 240);
    translate(-mouseX, -mouseX);
    quad(230, 380, 230, 535, 250, 555, 250, 400);
    quad(230, 380, 235, 380, 255, 400, 250, 400);
    quad(250, 400, 255, 400, 255, 555, 250, 555);
    pop();

    //azul
    push();
    translate(-mouseX, mouseX);
    fill(az1, az2, az3);
    quad(350, 315, 410, 250, 470, 295, 410, 360);
    quad(350, 315, 350, 320, 410, 365, 410, 360);
    quad(410, 360, 410, 365, 470, 300, 470, 295);

    //rojo
    fill(r1, r2, r2, 240);
    quad(375, 360, 375, 485, 440, 415, 440, 290);
    quad(440, 290, 435, 290, 370, 360, 375, 360);
    quad(370, 360, 375, 360, 375, 485, 370, 485);
    pop();

    //blanco
    push();
    translate(-mouseX, -mouseX);
    fill(b, 240);
    quad(335, 330, 335, 460, 380, 495, 380, 365);
    quad(335, 330, 340, 330, 385, 365, 380, 365);
    quad(380, 365, 380, 495, 385, 495, 385, 365);
    pop();

    //azul
    push();
    translate(mouseX, -mouseX);
    fill(az1, az2, az3, 240);
    quad(260, 425, 260, 545, 340, 460, 340, 340);
    quad(260, 545, 255, 545, 255, 425, 260, 425);
    quad(255, 425, 260, 425, 340, 340, 335, 340);
    pop();

    //amarillo
    push();
    translate(-mouseX, mouseX);
    fill(a1, a2, a3, 240);
    quad(325, 420, 365, 450, 320, 500, 280, 470);
    quad(280, 470, 280, 475, 320, 505, 320, 500);
    quad(320, 500, 320, 505, 365, 455, 365, 450);
    pop();
}
