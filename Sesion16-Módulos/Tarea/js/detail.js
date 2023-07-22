import { getCurrentFriend } from './modules/apifriends.js';

const urlparams = new URLSearchParams(location.search);

const currentid = urlparams.get('card');

const renderData = async () => {
  const data = await getCurrentFriend(currentid);

  const { fullname, age, image, desc } = data;

  const viewimage = document.getElementById('image');
  viewimage.src = image;

  const viewname = document.getElementById('name');
  viewname.innerText = fullname;

  const viewage = document.getElementById('age');
  viewage.innerText = `¡Tengo ${age} años!`;

  const viewdesc = document.getElementById('description');

  desc == undefined || (viewdesc.innerText = desc);
};

renderData();
