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

/* const createListItem = (koderObject) => {
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
 */
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

/*
    Crear una nueva lista que contenga el nombre completo del koder y su promedio
    si el promedio del koder es menor que 9.5, ese texto (el del promedio) debe ser color amarillo
    si es mayor o igual, debe ser verde
*/

/* const averageKoders = (arraykoders) =>
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
 */

// Todo: Simple

const createListSpanItem = (arrayproperties, listtag) => {
  arrayproperties.forEach((property) => {
    const spantag = document.createElement('span');
    spantag.innerHTML = ` ${property}`;
    listtag.appendChild(spantag);
  });

  return listtag;
};

const createListItemKoder = (arraykoder) => {
  const litag = document.createElement('li');
  litag.innerText = `${arraykoder[0]} ${arraykoder[1]}`;

  if (arraykoder.length > 2) {
    const extra = arraykoder.splice(2, arraykoder.length);
    createListSpanItem(extra, litag);
  }

  return litag;
};

const printListKodersAll = (arraykoders, properties, idtag) => {
  const list = document.getElementById(idtag);
  arraykoders.forEach((koder) => {
    const error = false;
    const scores = koder.scores;
    let send = [koder.name, koder.lastname];

    if (properties.length > 2) {
      const aux = { ...koder };
      aux.delete.name;
      const extras = properties.map((property) => {
        console.log(property);
        scores[property];
      });

      send = send.concat(extras);
    }

    console.log(send);
    const koderElement = createListItemKoder(send);
    list.appendChild(koderElement);
  });
};

printListKodersAll(koders, ['name', 'lastname', 'scores'], 'koders-list');

/*const printKodersList = (kodersList) => {
  const list = document.getElementById('koders-list');
  kodersList.forEach((koder) => {
    const koderElement = createListItem(koder);
    list.appendChild(koderElement);
  });
};
printKodersList(koders);

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

changeColorToEvenOrOdd();
 */
