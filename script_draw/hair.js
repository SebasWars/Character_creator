import { pintPixel, skinkColor } from "../utils.js";

let hairColor = "black";
export const HAIR_OPTIONS_LIST = [regularHair, blad, crest, longHair, ponyTail];

function regularHair() {
  blad();
  for (let i = 10; i <= 19; i++) {
    pintPixel(i, 3, hairColor);
  }
  for (let i = 9; i <= 20; i++) {
    pintPixel(i, 4, hairColor);
  }
  pintPixel(9, 5, hairColor);
  pintPixel(10, 5, hairColor);
  pintPixel(11, 5, hairColor);

  pintPixel(15, 5, hairColor);
  pintPixel(16, 5, hairColor);
  pintPixel(17, 5, hairColor);
  pintPixel(20, 5, hairColor);

  pintPixel(9, 6, hairColor);
  pintPixel(10, 6, hairColor);
  pintPixel(9, 7, hairColor);
  pintPixel(10, 7, hairColor);
  pintPixel(10, 8, hairColor);
  pintPixel(10, 9, hairColor);
}

function blad() {
  for (let i = 10; i <= 19; i++) {
    pintPixel(i, 3, skinkColor);
  }
  for (let i = 9; i <= 20; i++) {
    pintPixel(i, 4, skinkColor);
  }
  pintPixel(9, 5, skinkColor);
  pintPixel(10, 5, skinkColor);
  pintPixel(11, 5, skinkColor);

  pintPixel(15, 5, skinkColor);
  pintPixel(16, 5, skinkColor);
  pintPixel(17, 5, skinkColor);
  pintPixel(20, 5, skinkColor);

  pintPixel(9, 6, skinkColor);
  pintPixel(10, 6, skinkColor);
  pintPixel(9, 7, skinkColor);
  pintPixel(10, 7, skinkColor);
  pintPixel(10, 8, skinkColor);
  pintPixel(10, 9, skinkColor);

  pintPixel(12, 1, "");
  pintPixel(13, 1, "");
  pintPixel(14, 1, "");
  pintPixel(15, 1, "");
  pintPixel(16, 1, "");
  pintPixel(17, 1, "");
  pintPixel(13, 0, "");
  pintPixel(14, 0, "");
  pintPixel(15, 0, "");
  pintPixel(16, 0, "");

  for (let i = 6; i < 12; i++) {
    pintPixel(9, i, skinkColor);
    pintPixel(10, i, skinkColor);
    pintPixel(11, i, skinkColor);
  }
  pintPixel(11, 12, skinkColor);
  pintPixel(12, 12, skinkColor);


  /* CLOTH COLOR */
  pintPixel(9, 13, "");
  pintPixel(11, 14, "red");
  pintPixel(10, 14, "red");

  pintPixel(8, 2, "");
  pintPixel(7, 2, "");
  pintPixel(6, 2, "");
  pintPixel(8, 3, "");
  pintPixel(7, 3, "");
  pintPixel(6, 3, "");
  pintPixel(5, 3, "");
  pintPixel(4, 4, "");
  pintPixel(4, 5, "");
  pintPixel(4, 6, "");
  pintPixel(4, 7, "");
  pintPixel(4, 8, "");
  pintPixel(4, 9, "");
  pintPixel(4, 6, "");
  pintPixel(3, 6, "");
  pintPixel(3, 7, "");
  pintPixel(3, 8, "");
  pintPixel(5, 4, "");
  pintPixel(6, 4, "");
  pintPixel(5, 5, "");
  pintPixel(5, 6, "");
}

function crest() {
  blad();
  pintPixel(12, 1, hairColor);
  pintPixel(13, 1, hairColor);
  pintPixel(14, 1, hairColor);
  pintPixel(15, 1, hairColor);
  pintPixel(16, 1, hairColor);
  pintPixel(17, 1, hairColor);

  pintPixel(13, 0, hairColor);
  pintPixel(14, 0, hairColor);
  pintPixel(15, 0, hairColor);
  pintPixel(16, 0, hairColor);

  pintPixel(14, 3, hairColor);
  pintPixel(15, 3, hairColor);
  pintPixel(16, 3, hairColor);
  pintPixel(17, 3, hairColor);

  pintPixel(15, 4, hairColor);
  pintPixel(16, 4, hairColor);
  pintPixel(17, 4, hairColor);

  pintPixel(16, 5, hairColor);
  pintPixel(17, 5, hairColor);
}

function longHair() {
  blad();
  for (let i = 10; i <= 19; i++) {
    pintPixel(i, 3, hairColor);
  }
  for (let i = 9; i <= 20; i++) {
    pintPixel(i, 4, hairColor);
  }
  pintPixel(9, 5, hairColor);
  pintPixel(10, 5, hairColor);
  pintPixel(11, 5, hairColor);

  pintPixel(15, 5, hairColor);
  pintPixel(16, 5, hairColor);
  pintPixel(17, 5, hairColor);
  pintPixel(20, 5, hairColor);

  for (let i = 6; i < 15; i++) {
    pintPixel(9, i, hairColor);
    pintPixel(10, i, hairColor);
    pintPixel(11, i, hairColor);
  }

  pintPixel(11, 6, hairColor);
  pintPixel(11, 7, hairColor);
  pintPixel(11, 8, hairColor);
  pintPixel(11, 9, hairColor);
  pintPixel(11, 10, hairColor);
  pintPixel(11, 11, hairColor);
  pintPixel(11, 12, hairColor);
  pintPixel(11, 13, hairColor);
}

function ponyTail() {
  blad();
  for (let i = 10; i <= 19; i++) {
    pintPixel(i, 3, hairColor);
  }
  for (let i = 9; i <= 20; i++) {
    pintPixel(i, 4, hairColor);
  }

  pintPixel(8, 2, hairColor);
  pintPixel(7, 2, hairColor);
  pintPixel(6, 2, hairColor);

  pintPixel(8, 3, hairColor);
  pintPixel(7, 3, hairColor);
  pintPixel(6, 3, hairColor);
  pintPixel(5, 3, hairColor);
  pintPixel(4, 4, hairColor);
  pintPixel(4, 5, hairColor);
  pintPixel(4, 6, hairColor);
  pintPixel(4, 7, hairColor);
  pintPixel(4, 8, hairColor);
  pintPixel(4, 9, hairColor);
  pintPixel(4, 6, hairColor);
  pintPixel(3, 6, hairColor);
  pintPixel(3, 7, hairColor);
  pintPixel(3, 8, hairColor);
  pintPixel(5, 4, hairColor);
  pintPixel(6, 4, hairColor);

  pintPixel(5, 5, hairColor);
  pintPixel(5, 6, hairColor);

  pintPixel(9, 5, hairColor);
  pintPixel(10, 5, hairColor);
  pintPixel(11, 5, hairColor);

  pintPixel(15, 5, hairColor);
  pintPixel(16, 5, hairColor);
  pintPixel(17, 5, hairColor);
  pintPixel(20, 5, hairColor);

  pintPixel(9, 6, hairColor);
  pintPixel(10, 6, hairColor);
  pintPixel(9, 7, hairColor);
  pintPixel(10, 7, hairColor);
  pintPixel(10, 8, hairColor);
  pintPixel(10, 9, hairColor);
}
