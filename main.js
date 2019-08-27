// var myArray = [];

// var i = 0;
// while(i < 5 ){
//     myArray.push(i);

//     i++;
// }

// console.log(myArray)

// -------------------------


// var ourArray = [];

// for (var i = 0; i <5; i++)  {
// ourArray.push(i);
// }
// --------------------


// var myArray = [];

// for (var i = 1; i < 10; i += 2) {
//     myArray.push(i);
// } 

// console.log(myArray)

// ----------------------

// for (var i = 10; i > 0; i -=2){
//     myArray.push(i);
// }

// console.log(myArray)
// -------------------------

// for (var i= 9; i>0; i-=2) {
//     myArray.push(i);

// }console.log(myArray)

//------------

// iterar arrays con for

// var ourArr = [2,3,4,5,6];
// var total = 0;

// for(var i =0; i < ourArr.length; i++) {
//     total +=  ourArr[i];
// }

// console.log(total) //total es 20, la sumatoria de todos los numeros del array

// function multiplyAll(arr) {
//     var product = 1;

// for (var i=0; i < arr.length; i++) {
//     for (var j=0; j <arr[i].length; j++) {
//         product *= arr[i][j];


//     }
// }
// return product;
// }

// var product=multiplyAll([[1,2], [3,4],[5,6,7]]);

// console.log(product) //se multiplico todo, resultado 5040


// ----------------------------------------------------------

// FUNCTION - ARRAYS WITH OBJETS - return the selected object
// var contacts = [
//   {
//         "firstName": "Harry",
//         "likes": ["Candies", "Magic", "Hagrid"]

//   },
//   {
//         "firstName": "Sherlock",
//         "likes": [  "Investigate", "Think"]
//   },

// ]

// function lookUpProfile(name, prop) {
//     for (var i =0; i < contacts.length; i++) {
//         if (contacts[i].firstName === name) {
//             return contacts[i][prop]   || "this property doesnt exist"
//         }
//     } return "this contact doesnt exist"
// }

// var data = lookUpProfile("Harry", "likes");

// console.log(data)  // devuelve las propiedades del name
// -------------------------------------------------------------

//ARROW FUNCTIONS

// const myConcat = (arr1, arr2) => arr1.concat(arr2);

// console.log(myConcat([1,2], [3,4,5]));
// -------------------------------------------------------------
// INCREMENT 

// const increment = (function() {
//     return function increment (number, value = 1) {
//         return number + value;
//     };
// }) ();

// console.log(increment(5,2)); // it will provide 7 because second param is two
// console.log(increment(5)); // it will provide 5 because takes value = 1


// SPREAD OPERATOR

// let array1 = [1];
// let array2 = [2];
// let array3 = [...array1, ...array2, 3,4];
// let array4 = [5];

// function myFunction(a, b, c, d, e){
//     return a+b+c+d+e;

// }

// let result= myFunction(...array3, ...array4)

// console.log(result)
//---------------


//  REST OPERATOR  
// const sum = (function() {
//     return function sum(...args) {
//         return args.reduce((a,b) =>a + b, 0);
//     };
// })();


// console.log(sum(1,2,3));

