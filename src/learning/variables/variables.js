//variables.js
let firstName = "Petr";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
firstName = "Alžběta";
console.log(firstName);
firstName = "Pepa";
console.log(firstName);
let FirstName = "Martin";
console.log(FirstName); // JS je case-sensitive! FirstName je jina promenna, nez firstName
console.log(firstName);
let lastName; // Deklarace proměnné
lastName = "Fifka"; // Definice proměnné

// Vlastnosti var proměnné
var city = "Beroun"; // vytvoření proměnné
{
  // Toto je blok kódu
  var country = "Česko";
}
console.log(country); // je možné použít var mimo blok
var country = "Německo"; //redeklarace
country = "Rakousko";

// Vlastnosti let proměnné
{
  let mountains = "Krkonoše";
  console.log(mountains);
}
// console.log(mountains); // Nelze, mountains existuje jen v bloku kódu

// Definici proměnné a použití v bloku
let river = "Vltava";
{
  console.log(river); // Proměnné mimo blok vstupují do bloku
}
// let river; // Není možné redeklarovat

// const proměnná
const continent = "Evropa";
//continent = "Amerika"; // Konstantu nemůžu měnit
console.log(continent);
//const password;
//password = "123456" // Nelze! Konstantu musím ihned inicializovat

// Víceřádková poznámka:
/*
Více
řádková
poznám-
ka
*/
// ! formátování pomocí pluginu Better Comments
// ?
// TODO
// *
