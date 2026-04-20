const btn = document.querySelector('.show-hide');
const wrapper = document.querySelector('.comment-wrapper');

wrapper.style.display = 'none';

function toggle() {
  const hidden = wrapper.style.display === 'none';

  wrapper.style.display = hidden ? 'block' : 'none';
  btn.textContent = hidden ? 'Hide comments' : 'Show comments';
  btn.setAttribute('aria-expanded', hidden);
}

btn.addEventListener('click', toggle);

btn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    toggle();
  }
});

const form = document.querySelector('.comment-form');
const list = document.querySelector('.comment-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const li = document.createElement('li');

  const name = document.createElement('p');
  const comment = document.createElement('p');

  name.textContent = document.querySelector('#name').value;
  comment.textContent = document.querySelector('#comment').value;

  li.appendChild(name);
  li.appendChild(comment);
  list.appendChild(li);

  form.reset();
});
