let jorgeTimestamp = new Date('1985-09-20').getTime();
//console.log(jorgeTimestamp);

let sergioTimestamp = new Date('1993-10-17').getTime();
//console.log(sergioTimestamp);

let difference = Math.abs(jorgeTimestamp - sergioTimestamp);

let differenceInSeconds = difference / 1000;
let differenceInMinutes = differenceInSeconds / 60;
let diffInHours = differenceInMinutes / 60;
let diffInDays = diffInHours / 24;

const anios = difference / 1000 / 60 / 60 / 24 / 365;

const prueba = differenceInSeconds / (12 * 30 * 24 * 60 * 60 * 1000);

console.log(prueba);

const average = 8;

switch (true) {
  case average === 10:
    console.log('10');
    break;
  case average < 10 && average > 7:
    console.log('7-10');
    break;
  case average < 7:
    console.log('-7');
    break;
}
