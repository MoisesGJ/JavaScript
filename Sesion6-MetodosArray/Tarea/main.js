/* Trabajo en clase*/

const numbers = [12, 26, 15, 78, 26, 47];
const countries = ['México', 'Canadá', 'Brasil', 'España'];

const people = [
  {
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Axelle',
      last: 'Fleury',
    },
    nat: 'FR',
  },
  {
    gender: 'female',
    name: {
      title: 'Ms',
      first: 'Melati',
      last: 'Oort',
    },
    nat: 'NL',
  },
  {
    gender: 'female',
    name: {
      title: 'Ms',
      first: 'Inés',
      last: 'Vargas',
    },
    nat: 'ES',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Marcus',
      last: 'Garrett',
    },
    nat: 'GB',
  },
  {
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Vasilina',
      last: 'Motrichko',
    },
    nat: 'UA',
  },
  {
    gender: 'female',
    name: {
      title: 'Miss',
      first: 'Leuntje',
      last: 'Van Harmelen',
    },
    nat: 'NL',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Tristan',
      last: 'Gauthier',
    },
    nat: 'FR',
  },
  {
    gender: 'female',
    name: {
      title: 'Madame',
      first: 'Marianne',
      last: 'Charles',
    },
    nat: 'CH',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Maksim',
      last: 'Bunechko',
    },
    nat: 'UA',
  },
  {
    gender: 'female',
    name: {
      title: 'Miss',
      first: 'Coline',
      last: 'Mathieu',
    },
    nat: 'FR',
  },
];

/* 1.- teniendo en cuenta el array numbers, necesito saber el valor de la suma total de cada número en el array */

const addItems = (numbers) => {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }

  console.log(result);
};

addItems(numbers);

/* 2.- teniendo en cuenta el array numbers, necesito obtener un nuevo array que incluya únicamente los números pares * */

const getEvenNumber = (numbers) => {
  const newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] % 2 || newArray.push(numbers[i]);
  }
  console.log(newArray);
};

getEvenNumber(numbers);

/* 3.- necesito obtener un nuevo array que incluya únicamente los números nones * */

const getOddNumber = (numbers) => {
  const newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] % 2 && newArray.push(numbers[i]);
  }
  console.log(newArray);
};

getOddNumber(numbers);

/* 4.- tomando en cuenta el array countries, necesito obtener un string que este formado con la primer letra de cada país incluido en el array

    ["mexico", "Alemania"] => MA 
    
    countries[] => [][0] = primera letra
    */

const getCapitalCountrie = (countries) => {
  let finallyString = '';
  for (let i = 0; i < countries.length; i++) {
    finallyString += countries[i][0];
  }

  console.log(finallyString);
};

getCapitalCountrie(countries);

/* 5.- necesito obtener un array que contenga los mismos nombres de cada país, pero escritos en mayúsculas */

const toUpperCase = (countries) => {
  const newArray = [];
  for (let i = 0; i < countries.length; i++) {
    newArray.push(countries[i].toUpperCase());
  }

  console.log(newArray);
};

toUpperCase(countries);

/* 6.- tomando en cuenta el array people, necesito obtener un nuevo array que contenga los nombres completos de cada persona */

const getFullName = (people) => {
  const newArray = [];
  for (let i = 0; i < people.length; i++) {
    newArray.push(people[i].name.first + ' ' + people[i].name.last);
  }

  console.log(newArray);
};

getFullName(people);

/* 7.- necesito poder determinar una nacionalidad específica y obtener un array que contenga únicamente aquellas personas que tengan la nacionalidad indicada
      FR => [{nat === FR}]
      si uso alguna nacionalidad que no coincida con ninguna persona, devolver un string que diga "no hay personas con esta nacionalidad" */

const validateNationality = (people, nat) => {
  let validate = false;
  const newArray = [];
  for (let i = 0; i < people.length; i++) {
    if (nat.toUpperCase() === people[i].nat) {
      validate = true;
      newArray.push(people[i].name.first + ' ' + people[i].name.last);
    }
  }

  return validate
    ? console.log(newArray)
    : console.log('No hay personas con esa nacionalidad');
};

validateNationality(people, 'ua');
