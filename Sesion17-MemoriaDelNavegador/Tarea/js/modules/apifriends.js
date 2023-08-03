const BASE_URL = 'https://javascript-27g-mgj-default-rtdb.firebaseio.com';

const createImage = () => {
  const ran = Math.floor(Math.random() * 50);
  let gender = 'male';

  ran % 2 === 0 && (gender = 'female');

  return `https://xsgames.co/randomusers/assets/avatars/${gender}/${ran}.jpg`;
};

const getFriends = async () => {
  const res = fetch(`${BASE_URL}/friends/.json`);

  return (await res).json();
};

const postFriend = async (data) => {
  const pet = await fetch(`${BASE_URL}/friends/.json`, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  const response = (await pet).json();

  return response.data;
};

const getCurrentFriend = async (id) => {
  const res = fetch(`${BASE_URL}/friends/${id}/.json`);

  return (await res).json();
};

export { getFriends, postFriend, createImage, getCurrentFriend };
