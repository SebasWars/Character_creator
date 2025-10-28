import { pintPixel } from "../utils.js";

export function drawTshirt() {
  for (let i = 10; i <= 19; i++) {
    pintPixel(i, 14, "red");
    pintPixel(i, 15, "red");
    pintPixel(i, 19, "red");
  }
  for (let i = 13; i <= 19; i++) {
    pintPixel(i, 16, "red");
  }
  for (let i = 12; i <= 19; i++) {
    pintPixel(i, 17, "red");
    pintPixel(i, 18, "red");
  }
  pintPixel(9, 15, "red");
  pintPixel(21, 15, "red");
  pintPixel(21, 16, "red");
  pintPixel(9, 16, "red");
  pintPixel(10, 15, "red");
  pintPixel(10, 16, "red");
  pintPixel(11, 16, "red");
}

export function drawPants() {
  for (let i = 11; i <= 19; i++) {
    pintPixel(i, 20, "blue");
    pintPixel(i, 21, "blue");
  }
  for (let i = 11; i <= 13; i++) {
    pintPixel(i, 22, "blue");
    pintPixel(i, 23, "blue");
  }

  for (let i = 17; i <= 19; i++) {
    pintPixel(i, 22, "blue");
    pintPixel(i, 23, "blue");
  }
}
