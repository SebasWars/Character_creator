import { pintPixel } from "../utils.js";

export function drawHead() {
  /* MANECILLAS DEL RELOJ */
  pintPixel(9, 3, "black");
  for (let i = 10; i < 20; i++) {
    pintPixel(i, 2, "black");
  }
  pintPixel(20, 3, "black");
  for (let i = 4; i < 13; i++) {
    pintPixel(21, i, "black");
  }
  for (let i = 10; i < 21; i++) {
    pintPixel(i, 13, "black");
  }
  pintPixel(9, 12, "black");
  for (let i = 4; i < 8; i++) {
    pintPixel(8, i, "black");
  }
  pintPixel(7, 8, "black");
  pintPixel(7, 9, "black");
  pintPixel(7, 10, "black");
  pintPixel(8, 11, "black");
}

export function drawEyes() {
  pintPixel(13, 8, "black");
  pintPixel(13, 9, "black");
  pintPixel(13, 10, "black");
  pintPixel(14, 8, "black");
  pintPixel(14, 9, "white");
  pintPixel(14, 10, "white");

  pintPixel(18, 8, "black");
  pintPixel(18, 9, "black");
  pintPixel(18, 10, "black");
  pintPixel(19, 8, "black");
  pintPixel(19, 9, "white");
  pintPixel(19, 10, "white");
}

export function drawBody() {
  for (let i = 14; i < 25; i++) {
    pintPixel(20, i, "black");
  }
  pintPixel(19, 25, "black");
  pintPixel(18, 25, "black");
  pintPixel(17, 25, "black");

  pintPixel(16, 24, "black");
  pintPixel(16, 23, "black");
  pintPixel(16, 22, "black");

  pintPixel(16, 22, "black");
  pintPixel(15, 22, "black");
  pintPixel(14, 22, "black");

  pintPixel(14, 23, "black");
  pintPixel(14, 24, "black");

  pintPixel(13, 25, "black");
  pintPixel(12, 25, "black");
  pintPixel(11, 25, "black");

  for (let i = 20; i < 25; i++) {
    pintPixel(10, i, "black");
  }
}

export function drawRigthArm() {
  pintPixel(9, 14, "black");
  pintPixel(8, 15, "black");
  pintPixel(8, 16, "black");
  pintPixel(7, 17, "black");
  pintPixel(7, 18, "black");

  pintPixel(8, 19, "black");
  pintPixel(9, 19, "black");
  pintPixel(10, 19, "black");

  pintPixel(11, 18, "black");
  pintPixel(11, 17, "black");
  pintPixel(12, 16, "black");
}

export function drawLeftArm() {
  pintPixel(21, 14, "black");
  pintPixel(22, 15, "black");
  pintPixel(22, 16, "black");
  pintPixel(22, 17, "black");
  pintPixel(21, 18, "black");
}
