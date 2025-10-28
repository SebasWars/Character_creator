import { drawBodyBase } from "./script_draw/printBody.js";
import { EYE_BROW } from "./script_draw/eyeBronw.js";
import { FACIAL_HAIR_OPTIONS_LIST } from "./script_draw/facialHair.js";
import { HAIR_OPTIONS_LIST } from "./script_draw/hair.js";

drawBodyBase();

const EYE_BROW_OPT = document.querySelector(".eye_brow");
const HAIR_OPT = document.querySelector(".hair_style");
const BEARD_OPT = document.querySelector(".beard_style");

const BUTTONS = document.querySelectorAll("button");

const hide = () => {
  [EYE_BROW_OPT, HAIR_OPT, BEARD_OPT].forEach((section) => {
    section.style.display = "none";
  });
};
const changeSection = (section) => {
  hide();
  section.style.display = "grid";
};

BUTTONS.forEach((BUTTON) => {
  BUTTON.addEventListener("click", () => {
    if (BUTTON.id.includes("eye_brow")) {
      changeSection(EYE_BROW_OPT);
    }
    if (BUTTON.id.includes("hair_style")) {
      changeSection(HAIR_OPT);
    }
    if (BUTTON.id.includes("beard")) {
      changeSection(BEARD_OPT);
    }
  });
});

const imagesEyes = EYE_BROW_OPT.querySelectorAll("img");
imagesEyes.forEach((image, index) => {
  image.addEventListener("click", () => {
    EYE_BROW[index]();
  });
});

const imgagesHair = HAIR_OPT.querySelectorAll("img");
imgagesHair.forEach((image, index) => {
  image.addEventListener("click", () => {
    HAIR_OPTIONS_LIST[index]();
  });
});

const imagesBeard = BEARD_OPT.querySelectorAll("img");
imagesBeard.forEach((image, index) => {
  image.addEventListener("click", () => {
    FACIAL_HAIR_OPTIONS_LIST[index]();
  });
});
