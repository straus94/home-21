//first step

let name = prompt("your name?");
alert(`Hello, ${name}`);

//second step
const currentYear = 2019;
birthYear = +prompt('please, write year of birth');
alert(`ouuu.. you are ${currentYear - birthYear} years old`);

//third step
let sideLength = +prompt('write the length of the side of the square');
alert(`the perimeter = ${sideLength * sideLength}`);

//fourth step
const PI = 3.14;
let radiusLength = +prompt('write the radius of the circle');
alert(`the area = ${PI * (radiusLength * radiusLength)}`);

//fiveth step
const HOUR = 60;
let currentDistance = +prompt('please, write distance beetwen two cities (in km');
let currentHours = +prompt('please, write how long do you want to get there? (in minutes');
let coeficientTime = HOUR / currentHours;
alert(`you must ride at speed - ${coeficientTime * currentDistance} km/h`);

//sixth step
const EXTENDET = 0.8;
let currentDollars = +prompt('how many dollars do you have?');
alert(`hmmm its a ${EXTENDET * currentDollars} euro`);

//seventh step
const checkSize = 820;
let currentFleshSizeGB = +prompt(`write, how big flesh card do you have (in gb)?`);
let currentFleshSizeMB = currentFleshSizeGB * 1024;
alert(`in your flesh card can fit ${Math.trunc(currentFleshSizeMB / checkSize)} file weigth ${checkSize}MB`);

//eighth
let priceCandy = +prompt('how much does a candy cost?');
let currentMoney = +prompt('how many money do you have?');
let truthCandy = Math.trunc(currentMoney / priceCandy);
alert(`you can buy ${truthCandy} candies, and you will have ${currentMoney % priceCandy}`);


//nineth step
let threeDigitNumber = +prompt('please, write three-digit number');
let firstStep = threeDigitNumber % 10;
let secondStep = Math.trunc(threeDigitNumber / 100)
let thridStep = Math.trunc((threeDigitNumber % 100) / 10);
alert(`${firstStep}${thridStep}${secondStep}`);

//tenth step 
const percentOfYear = 5;
let deposit = +prompt('write amount of your deposit');
let percentOfTwoMonth = percentOfYear / 6;
alert(`fot 2 month you have a ${deposit * percentOfTwoMonth / 100} profit`);
