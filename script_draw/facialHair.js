import { pintPixel, skinkColor } from "../utils.js";
export const FACIAL_HAIR_OPTIONS_LIST = [
  none,
  drawBeard,
  chain,
  goat,
  veryBadPerson,
];

function none() {
  pintPixel(10, 10, skinkColor);
  pintPixel(11, 10, skinkColor);
  for (let i = 10; i <= 20; i++) {
    pintPixel(i, 11, skinkColor);
    pintPixel(i, 12, skinkColor);
  }
  /* CLOTH COLOR */
  for (let i = 12; i <= 18; i++) {
    pintPixel(i, 14, "red");
  }
  for (let i = 13; i <= 17; i++) {
    pintPixel(i, 15, "red");
  }
}

function drawBeard() {
  none();
  pintPixel(10, 10, "black");
  pintPixel(11, 10, "black");
  for (let i = 10; i <= 20; i++) {
    pintPixel(i, 11, "black");
    pintPixel(i, 12, "black");
  }
  for (let i = 12; i <= 18; i++) {
    pintPixel(i, 14, "black");
  }
  for (let i = 13; i <= 17; i++) {
    pintPixel(i, 15, "black");
  }
}

function chain() {
  none();
  pintPixel(15, 11, "black");
  pintPixel(15, 12, "black");
  pintPixel(16, 11, "black");

  pintPixel(17, 11, "black");
  pintPixel(17, 12, "black");
}

function goat() {
  none();
  pintPixel(16, 12, "black");
}

function veryBadPerson() {
  none();
  pintPixel(16, 11, "black");
}
