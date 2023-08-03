import { postFriend, createImage } from './modules/apifriends.js';

let auxobj = {};
const btnsub = document.getElementById('submit-data-friend');

document
  .getElementById('form-control-friends')
  .addEventListener('keyup', ({ target }) => {
    const { value, name } = target;

    auxobj[name] = value;

    /* name === 'fullname' && value.length > 3
      ? (btnsub.disabled = false)
      : (btnsub.disabled = true);
    name === 'age' && value.length > 1
      ? (btnsub.disabled = false)
      : (btnsub.disabled = true); */
  });

btnsub.addEventListener('click', async () => {
  await postFriend({ ...auxobj, image: createImage() });
  window.close();
});
