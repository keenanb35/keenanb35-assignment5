const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

if (showHideBtn && commentWrapper) {
  commentWrapper.style.display = 'none';

  showHideBtn.addEventListener('click', () => {
    const isHidden = commentWrapper.style.display === 'none';

    commentWrapper.style.display = isHidden ? 'block' : 'none';
    showHideBtn.textContent = isHidden ? 'Hide comments' : 'Show comments';
  });
}

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameValue = nameField.value.trim();
    const commentValue = commentField.value.trim();

    if (!nameValue || !commentValue) return;

    const listItem = document.createElement('li');
    const namePara = document.createElement('p');
    const commentPara = document.createElement('p');

    namePara.textContent = nameValue;
    commentPara.textContent = commentValue;

    listItem.appendChild(namePara);
    listItem.appendChild(commentPara);
    list.appendChild(listItem);

    nameField.value = '';
    commentField.value = '';
  });
}
