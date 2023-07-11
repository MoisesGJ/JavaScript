// ! TRABAJO EN CLASE

const people = [
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Valentin',
      last: 'Centeno',
    },
    dob: {
      date: '1956-09-17T13:38:41.475Z',
      age: 66,
    },
    nat: 'MX',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Juan',
      last: 'Watkins',
    },
    dob: {
      date: '1956-08-17T08:44:24.512Z',
      age: 66,
    },
    nat: 'MX',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Bertram',
      last: 'Hertel',
    },
    dob: {
      date: '1963-10-18T20:29:48.819Z',
      age: 59,
    },
    nat: 'DE',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Olelko',
      last: 'Ovdiienko',
    },
    dob: {
      date: '1993-12-20T00:38:16.473Z',
      age: 29,
    },
    nat: 'UA',
  },
  {
    gender: 'female',
    name: {
      title: 'Ms',
      first: 'Becky',
      last: 'Ward',
    },
    dob: {
      date: '1986-12-22T14:12:54.641Z',
      age: 36,
    },
    nat: 'GB',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Harold',
      last: 'Edwards',
    },
    dob: {
      date: '1969-06-07T04:31:39.777Z',
      age: 54,
    },
    nat: 'AU',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Aaron',
      last: 'Feragen',
    },
    dob: {
      date: '1951-07-14T08:17:03.136Z',
      age: 71,
    },
    nat: 'NO',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Ted',
      last: 'Kelly',
    },
    dob: {
      date: '1964-01-27T00:10:59.218Z',
      age: 59,
    },
    nat: 'AU',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Jerry',
      last: 'Johnston',
    },
    dob: {
      date: '1992-12-05T03:07:17.041Z',
      age: 30,
    },
    nat: 'IE',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: '1234567890123456789',
      last: '012345',
    },
    dob: {
      date: '1994-10-08T06:03:13.198Z',
      age: 28,
    },
    nat: 'FR',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Alexis',
      last: 'Nguyen',
    },
    dob: {
      date: '1994-10-08T06:03:13.198Z',
      age: 28,
    },
    nat: 'FR',
  },
];
/*
  1.- necesito obtener una nueva lista que incluya el nombre completo de cada persona y su edad
  ["Hola, soy {nombre_completo} y tengo {edad} años"] */

const getAgeAndFullName = (array) =>
  array.map(
    ({ name, dob }) =>
      `Hola, soy ${name.first} ${name.last} y tengo ${dob.age} años`
  );

console.log(getAgeAndFullName(people));

/* 2.- Necesito obtener una lista con las nacionalidades que se encuentran actualmente en la lista original
  ["MX","IE"...] */

const getNationalities = (array) => array.map((people) => people.nat);

console.log(getNationalities(people));

const nationalities = [
  'mx',
  'mx',
  'mx',
  'mx',
  'mx',
  'ar',
  'mx',
  'mx',
  'mx',
  'fr',
];
console.log('indeice', nationalities.indexOf('ar'));

console.log(
  ',a',
  nationalities.filter((item, index) => nationalities.indexOf(item) === index)
);

/* 3.- Necesito una lista con las nacionalidades pero sin repetidos */

const getNationalitiesNoDuplicates = (array) => {
  const newArray = [];
  array.forEach(
    (person) => !newArray.includes(person.nat) && newArray.push(person.nat)
  );

  return newArray;
};

//console.log(getNationalitiesNoDuplicates(people));

/* 4.- Necesito saber la edad promedio de las personas en la lista */

const getAverageAge = (array) => {
  let finaladd = 0;
  array.forEach((person) => {
    finaladd += person.dob.age;
  });

  return finaladd / array.length;
};

console.log(getAverageAge(people));

/* 5.- Necesito una lista con aquellas personas cuyo nombre completo tenga menos de 25 caracteres */

const getShortFullNames = (array) => {
  const newArray = [];
  array.forEach(
    (person) =>
      `${person.name.first} ${person.name.last}`.length < 25 &&
      newArray.push(`${person.name.first} ${person.name.last}`)
  );

  return newArray;
};

console.log(getShortFullNames(people));
