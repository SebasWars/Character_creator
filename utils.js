export const GRID_SIZE = 30; // 10x10
export const PIXELS = [];
export let skinkColor = "#fdddca";
const canvas = document.querySelector(".canvas");

for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
  const div = document.createElement("div");
  div.classList.add("pixel");
  canvas.appendChild(div);
  PIXELS.push(div);
}


export function pintPixel(x, y, color) {
  const index = y * GRID_SIZE + x;
  PIXELS[index].style.backgroundColor = color;
}
