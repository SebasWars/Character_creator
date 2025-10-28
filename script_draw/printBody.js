import { pintPixel } from "../utils.js";
import { skinkColor } from "../utils.js";
import { drawTshirt, drawPants } from "./cloth.js";
import {
  drawHead,
  drawEyes,
  drawBody,
  drawLeftArm,
  drawRigthArm,
} from "./body.js";

export function pintBody() {
  /* HEAD */
  for (let i = 10; i < 20; i++) {
    pintPixel(i, 3, skinkColor);
    pintPixel(i, 12, skinkColor);
  }
  pintPixel(20, 12, skinkColor);
  for (let i = 8; i < 21; i++) {
    pintPixel(i, 8, skinkColor);
    pintPixel(i, 9, skinkColor);
    pintPixel(i, 10, skinkColor);
  }
  for (let i = 9; i < 21; i++) {
    pintPixel(i, 4, skinkColor);
    pintPixel(i, 5, skinkColor);
    pintPixel(i, 6, skinkColor);
    pintPixel(i, 7, skinkColor);
    pintPixel(i, 11, skinkColor);
  }
  /* BODY */
  for (let i = 10; i <= 19; i++) {
    pintPixel(i, 14, skinkColor);
    pintPixel(i, 15, skinkColor);
  }
  for (let i = 13; i <= 19; i++) {
    pintPixel(i, 16, skinkColor);
  }
  for (let i = 8; i < 11; i++) {
    pintPixel(i, 17, skinkColor);
    pintPixel(i, 18, skinkColor);
  }

  for (let i = 12; i <= 19; i++) {
    pintPixel(i, 17, skinkColor);
    pintPixel(i, 18, skinkColor);
    pintPixel(i, 19, skinkColor);
  }
  pintPixel(11, 19, skinkColor);
  pintPixel(9, 15, skinkColor);
  pintPixel(9, 16, skinkColor);
  pintPixel(10, 15, skinkColor);
  pintPixel(10, 16, skinkColor);
  pintPixel(11, 16, skinkColor);

  pintPixel(21, 15, skinkColor);
  pintPixel(21, 16, skinkColor);
  pintPixel(21, 17, skinkColor);

  /* PANTS */

  for (let i = 11; i <= 19; i++) {
    pintPixel(i, 20, skinkColor);
    pintPixel(i, 21, skinkColor);
  }
  for (let i = 11; i <= 13; i++) {
    pintPixel(i, 22, skinkColor);
    pintPixel(i, 23, skinkColor);
    pintPixel(i, 24, skinkColor);
  }

  for (let i = 17; i <= 19; i++) {
    pintPixel(i, 22, skinkColor);
    pintPixel(i, 23, skinkColor);
    pintPixel(i, 24, skinkColor);
  }
}

export const drawBodyBase = () => {
  drawHead();
  drawBody();
  drawRigthArm();
  drawLeftArm();
};

pintBody();
drawEyes();
drawTshirt();
drawPants();
