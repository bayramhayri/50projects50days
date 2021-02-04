const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

openBtn.addEventListener('click', () => {
  for (let el of nav) {
  el.classList.add('visible')}
})

closeBtn.addEventListener('click', () => {
  for (let el of nav) {
  el.classList.remove('visible')}
})