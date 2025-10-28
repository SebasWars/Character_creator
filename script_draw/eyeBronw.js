import { pintPixel, skinkColor } from "../utils.js";

export const EYE_BROW = [
  angryExpression,
  normalExpression,
  concernedExpression,
  oneEyeBrowUp,
  oneEyeBrow,
  clear,
];

function clear() {
  clearEyeBrowArea()
}

function angryExpression() {
  clearEyeBrowArea();
  pintPixel(13, 6, "black");
  pintPixel(14, 7, "black");
  pintPixel(15, 8, "black");

  pintPixel(17, 8, "black");
  pintPixel(18, 7, "black");
  pintPixel(19, 6, "black");
}

function normalExpression() {
  clearEyeBrowArea();
  pintPixel(13, 7, "black");
  pintPixel(14, 7, "black");
  pintPixel(15, 7, "black");

  pintPixel(17, 7, "black");
  pintPixel(18, 7, "black");
  pintPixel(19, 7, "black");
}

function concernedExpression() {
  clearEyeBrowArea();
  pintPixel(12, 8, "black");
  pintPixel(13, 7, "black");
  pintPixel(14, 6, "black");

  pintPixel(18, 6, "black");
  pintPixel(19, 7, "black");
  pintPixel(20, 8, "black");
}

function oneEyeBrowUp() {
  clearEyeBrowArea();
  pintPixel(13, 6, "black");
  pintPixel(12, 6, "black");
  pintPixel(12, 7, "black");
  pintPixel(12, 8, "black");

  pintPixel(17, 7, "black");
  pintPixel(18, 7, "black");
  pintPixel(19, 7, "black");
}

function oneEyeBrow() {
  clearEyeBrowArea();
  pintPixel(13, 7, "black");
  pintPixel(14, 7, "black");
  pintPixel(15, 7, "black");
  pintPixel(16, 7, "black");
  pintPixel(17, 7, "black");
  pintPixel(18, 7, "black");
  pintPixel(19, 7, "black");
}

function clearEyeBrowArea() {
  for (let x = 12; x <= 20; x++) {
    for (let y = 6; y < 8; y++) {
      pintPixel(x, y, skinkColor);
      pintPixel(12, 8, skinkColor);
      pintPixel(15, 8, skinkColor);
      pintPixel(17, 8, skinkColor);
      pintPixel(20, 8, skinkColor);
    }
  }
}
