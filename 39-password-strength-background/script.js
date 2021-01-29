const bg = document.getElementById('background');
const password = document.getElementById('password');

password.addEventListener('input', (e) => {
  const pw = e.target.value;
  bg.style.filter = `blur(${20 - pw.length * 2}px)`;
});
