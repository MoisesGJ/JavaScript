import { getFriends } from './modules/apifriends.js';
import { createCard } from './modules/card.js';

const renderData = async () => {
  const data = await getFriends();

  const keys = Object.keys(data);

  keys.forEach(async (key) => {
    const { fullname, age, image } = data[key];
    const cardview = document.getElementById('cards');
    const card = await createCard(key, fullname, age, image);

    cardview.appendChild(card);
  });
};

renderData();

document
  .getElementById('new-friend')
  .addEventListener('click', () => window.open('views/newfriend.html'));
