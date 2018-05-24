/*
Age Converter - Human Years to Dog Years
@scarfino 2018
*/

//set age of user in human years
const myAge = 52;

//The first two human years of a dog's life count as 10.5 dog years each. calling these earlyYears
let earlyYears = 2;

//changes the value of earlyYears after multiplying 2 by 10.5
earlyYears *= 10.5;

//subtracting early years from current age
let laterYears = myAge -2;

//calculating later years age in dog years. 1 human year is equal to 4 dog years
laterYears *= 4;

//adding earlyYears and laterYears to get the final age in dog years
let myAgeinDogYears = (earlyYears+laterYears);

//converting name into lowercase
let myName = 'Bob Smith'.toLowerCase();

//printing results as a readable sentence
console.log (`My name is ${myName}. I am ${myAgeinDogYears} years old in dog years.`);
