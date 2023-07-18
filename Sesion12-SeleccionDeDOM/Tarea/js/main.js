const koders = [
  {
    /*item*/ name: 'Jonhatan',
    lastname: 'Sanabria',
    scores: {
      html: 10,
      css: 9,
      js: 7,
    },
    generation: 27,
  },
  {
    name: 'Naomi',
    lastname: 'Lopez',
    scores: {
      html: 10,
      css: 10,
      js: 10,
    },
    generation: 9,
  },
  {
    name: 'Rurick',
    lastname: 'Maqueo',
    scores: {
      html: 9.6,
      css: 9.6,
      js: 9.6,
    },
    generation: 4,
  },
  {
    name: 'Brenda',
    lastname: 'González',
    scores: {
      html: 8,
      css: 9,
      js: 10,
    },
    generation: 4,
  },
  {
    name: 'Verónica',
    lastname: 'Corona',
    scores: {
      html: 8,
      css: 8,
      js: 10,
    },
    generation: 10,
  },
  {
    name: 'Karen',
    lastname: 'Corona',
    scores: {
      html: 9,
      css: 9,
      js: 9,
    },
    generation: 10,
  },
];

const createListItem = (koderObject) => {
  const { name, lastname } = koderObject;
  const fullName = `${name} ${lastname}`;
  const listItem = document.createElement('li');
  listItem.innerText = fullName;
  return listItem;
};

const printKodersList = (kodersList) => {
  const list = document.getElementById('koders-list');
  kodersList.forEach((koder) => {
    const koderElement = createListItem(koder);
    list.appendChild(koderElement);
  });
};
printKodersList(koders);

/*
    ya que este impresa la lista, hacer que los li pares tengan un color de fondo, y los nones otro color diferente
*/

const changeColorToEvenOrOdd = () => {
  const listitem = document.querySelectorAll('li');
  let counter = 1;

  listitem.forEach((koder) => {
    counter % 2 == 0 ? koder.classList.add('even') : koder.classList.add('odd');

    counter++;
  });
};

changeColorToEvenOrOdd();

/*
    Crear una nueva lista que contenga el nombre completo del koder y su promedio
    si el promedio del koder es menor que 9.5, ese texto (el del promedio) debe ser color amarillo
    si es mayor o igual, debe ser verde
*/

const averageKoders = (arraykoders) =>
  arraykoders.reduce((accum, { name, lastname, scores }) => {
    const { html, css, js } = scores;
    const average = parseFloat((html + css + js) / 3).toFixed(2);

    return [...accum, { fullname: `${name} ${lastname}`, average }];
  }, []);

const createKodersListAverage = (koderObject) => {
  const { fullname, average } = koderObject;
  const listItem = document.createElement('li');
  listItem.innerText = fullname + ' ';
  const spanaverage = document.createElement('span');
  spanaverage.innerText = average;

  average < 9.5
    ? spanaverage.classList.add('yellow')
    : spanaverage.classList.add('green');

  listItem.appendChild(spanaverage);

  return listItem;
};

const printKodersListAverage = (arraykoders) => {
  const list = document.getElementById('koders-list-average');
  arraykoders.forEach((koder) => {
    const koderElement = createKodersListAverage(koder);
    list.appendChild(koderElement);
  });
};

printKodersListAverage(averageKoders(koders));
