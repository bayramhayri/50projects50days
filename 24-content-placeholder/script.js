const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const profile_name = document.getElementById('profile_name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
  title.innerHTML = 'Officia suscipit eos culpa minima.';
  excerpt.innerHTML =
    'Ullam et qui soluta omnis dolore in. Atque ducimus rem quia adipisci et.';
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  profile_name.innerHTML = 'John Doe';
  date.innerHTML = 'Jan 14, 2021';

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bgs_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
