const createCard = async (id, namefriend, age, image) => {
  const col = document.createElement('div');
  col.classList.add('col-sm-6', 'col-md-4', 'mb-3');

  const card = document.createElement('div');
  card.classList.add('card');

  const cardimage = document.createElement('img');
  cardimage.classList.add('card-img-top');
  cardimage.src = image;

  const cardbody = document.createElement('div');
  cardbody.classList.add('card-body');

  const cardtitle = document.createElement('h5');
  cardtitle.classList.add('card-title', 'text-bg-dark', 'fw-bold');
  cardtitle.innerText = namefriend;

  const cardage = document.createElement('p');
  cardage.classList.add('card-text');
  cardage.innerText = `Tengo ${age} años.`;

  const btnview = document.createElement('button');
  btnview.classList.add('btn', 'btn-dark', 'w-100', 'mt-2', 'mx-auto');
  btnview.innerText = 'Ver';

  cardbody.append(cardtitle, cardage);

  card.append(cardimage, cardbody);

  col.append(card, btnview);

  btnview.addEventListener('click', () => {
    window.open(`views/detail.html?card=${id}`);
  });

  return col;
};

export { createCard };
