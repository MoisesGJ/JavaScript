const string = 'Hola koders';

const reverseString = (basestring) => {
  let newstring = '';
  for (let i = basestring.length - 1; i >= 0; i--) {
    newstring += basestring[i];
  }

  return newstring;
};

console.log(reverseString(string));

////////////////////////////

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const reverseArray = (basesarray) => {
  let newarray = [];
  for (let i = basesarray.length - 1; i >= 0; i--) {
    newarray.push(basesarray[i]);
  }

  return newarray;
};

console.log(reverseArray(array));

////////////////////////////

const top = 10;

const pyramid = (n) => {
  let trian = '';
  for (let i = 1; i <= n; i++) {
    for (let y = 1; y <= i; y++) {
      trian += '*';
    }

    trian += '\n';
  }

  return trian;
};

console.log(pyramid(top));

////////////////////////////

const colorarray = ['rojo', 'rojo', 'azul', 'violeta', 'violeta'];

const convertColorsInObject = (array) => {
  return array.reduce((accum, curr) => {
    let sum = array.filter((item) => item === curr);

    return Object.keys(accum).includes(curr)
      ? accum
      : { ...accum, [curr]: sum.length };
  }, {});
};

console.log(convertColorsInObject(colorarray));
