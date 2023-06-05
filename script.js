"use strict";
 
// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
 
// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
 
 
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
 
  orderDelivery: function({starterIndex = NULL, mainIndex = NULL, time ='22:00', address}) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]}
       and ${this.mainMenu[mainIndex]} will be delivered to ${address} 
       at ${time}`);
  },
 
  calc: function (a,b) {
    return a+b
  },
 
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function(ing1,ing2,ing3){
    console.log(`Itt a te finom tésztád az alábbi összetevőkkel: ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function(mainIngredient,... otherIngredient){
    console.log(mainIngredient);
    console.log(otherIngredient);
  }

};
//adat átstrukturálás

const arr = [1,2, ...[3,4]];
console.log(arr);
const [a,b,...others] = [1,2,3,4,5];
console.log(a,b,others);

//funkciók

const add = function(...numbers){
  let sum = 0
  for (let index = 0; index < numbers.length; index++) {
    sum = sum+numbers[index];
  }
console.log(numbers);
console.log(sum);
};
add(2,3)
add(3,7,8)
add(3,5,1,8,9,3,45,16)

const x = [27,5,7]
add(...x);

restaurant.orderPizza('gomba','sonka','szalmonella','oliva')
restaurant.orderPizza('pepperoni')

// const [pizza, ,risotto, ... otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// const {sat,...weekdays} = restaurant.openingHours;

// console.log(weekdays);

// let k= 1;
// const arr = [7,8,9];
// const badNewArr =[1,2,arr[0], arr[1], arr[2]];

// console.log(badNewArr);

// const newArr = [1,2,...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

// const mainMenuCopy = [
//   ...restaurant.mainMenu
// ];

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(...menu);

// //array, string, maps, sets --> NOT Objects

// const str = 'János';
// const letters = [...str];
// console.log(letters); 

// const ingredients = [
//   prompt('Add meg a tészta fő összetevőit 1'),
//   prompt('Add meg a tészta fő összetevőit 2'),
//   prompt('Add meg a tészta fő összetevőit 3'),
// ];

// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// restaurant.orderPasta(...ingredients);

const newRestaurant = { alapítva: 1998,
  ...restaurant, alapító: 'Giuseppe'}

console.log(newRestaurant);

const restaurantCopy = {
  ...restaurant};
  restaurantCopy.name = "Ristorante Roma";
  console.log(restaurantCopy.name);
  console.log(restaurant.name);
// restaurant.orderDelivery({
//   time:'22:30',
//   address: 'Via del sole, 21',
//   mainIndex: 2,
//   starterIndex:2
// });
 
// restaurant.orderDelivery({
//   address: 'Via del sole, 21',
// });
 
// restaurant.orderDelivery({
//   address: 'Via del sole, 21',
//   mainIndex: 0,
//   starterIndex: 0
// });
 
 
 
 
 
// const {name, openingHours, categories} = restaurant
// console.log(name, openingHours,categories);
 
// const {
//   name: restaurantName, //
//   openingHours: hours,  //
//   categories:tags       //   ua mint a 35. sor csak
// } = restaurant;         //  a név más
// console.log(restaurantName, hours, tags);
 
// const { menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);
 
// // Mutácio a változókban
 
// let a = 111;
// let b = 999;
 
// const obj = { a: 23, b: 7, c: 14};
// ({a, b} = obj);
// console.log(a,b);
 
// // Beágyazott objektum
 
// const { fri: {open: o, close: c} } = openingHours;
// console.log(o, c);
 
// ////////////////////
// //szamológép
// console.log(restaurant.calc(2,3));
 
// ///// challenge 0.1
// console.log(restaurant.order(3,2));
 
// //////////////////////////////////////////////
// ///////// Újrastruktúrálás
// // let sum = 0;
// // const arr = [1,2,3,4,5];
 
// // arr.forEach(fuggv);
// // console.log(sum);
 
// // function fuggv(item) {
// //   sum += item
// // }
 
// // arr.push(2)
// // console.log(arr);
 
// // const arr01 = [
// //   ["nev","szulido","pontszam" ],
// //   ["gizi", 1991, 23456],
// //   ["zoli", 1997, 212312]
// // ]
// // console.log(arr01[0]);
// // console.log(arr01[1]);
// // console.log(arr01[2]);
// // console.log(typeof arr01);
// // console.log(typeof arr01[0]);
// // console.log(typeof arr01[0][0]);
 
// // const arr = [2, 3, 4];
// // console.log(arr);
 
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];
 
// // console.log(a, b, c);
 
// // const [x, y, z] = arr;
// // console.log(x, y, z);
 
// // let [fo, , masodik] = restaurant.categories;
 
// // console.log(fo, masodik);
 
// // // átváltani változókat (switching)
// // // const temp = fo;
// // // fo = masodik;
// // // masodik = temp;
// // // console.log(fo, masodik);
 
// // [fo, masodik] = [masodik, fo];
// // console.log(fo, masodik);
 
// // // két változóval tér vissza
// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, ", ", mainCourse);
// // console.log(typeof starter);
 
// // // A beágyazott átstrukturálása
// // const nested = [
// //   2, // 0
// //   4, // 1     index
// //   [5, 6], // 2
// // ];
// // // const [i, ,j] = nested;
// // // console.log(i,j);
// // const [i, , [j, k]] = nested;
// // console.log(i, j, k);
 
// // // alap változó
// // const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p,q,r);
 