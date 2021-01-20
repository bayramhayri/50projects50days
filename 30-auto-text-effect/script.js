const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const textChangeBtn = document.getElementById('change-text-btn');
const textChangeEl = document.getElementById('change-text');
let text = 'We Love Programming!';
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;
  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

function changeText() {
  text = textChangeEl.value;
}

speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value));
textChangeBtn.addEventListener('click', changeText);
