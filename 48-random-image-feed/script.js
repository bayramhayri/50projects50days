const container = document.querySelector('.container');
const url = 'https://source.unsplash.com/random/';
const imgWidths = [300, 400, 500, 600, 640, 1000, 1920, 2000, 2140, 3000];
const rows = 6;

for (let i = 0; i < rows * 3; i++) {
  const image = document.createElement('img');
  image.src = url + randomSize();
  container.appendChild(image);
}

function randomSize() {
  return `${imgWidths[randomNum()]}x${imgWidths[randomNum()]}`;
}

function randomNum() {
  return Math.floor(Math.random() * 10);
}
