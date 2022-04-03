// const x = function myFunction(x, y) {
//   return x * y;
// };
// function myFunction(x, y) {
//   return x * y;
// }
// let z = myFunction(2, 3);
// const x = (x, y) => {
//   return x * y;
// };
//FindMax
// const x = findMax(1, 50, 2, 3, 300, 10);
// function findMax() {
//   let Max = -Infinity;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > Max) {
//       Max = arguments[i];
//     }
//   }
//   return Max;
// }

// document.getElementById("demo").innerHTML = x;
//Invoking Function
// function myFunction(arg1, arg2) {
//   this.firstName = arg1;
//   this.lastName = arg2;
// }
// const x = new myFunction("sourav", " majumder");
// document.getElementById("demo").innerHTML = x.firstName;
// Function call using call() method
const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + " " + city + " " + country;
  },
};
const person1 = {
  firstName: "Sourav",
  lastName: " Majumder",
};

// document.getElementById("demo").innerHTML = person.fullName.call(
//   person1,
//   "oslo",
//   "bangladesh"
// );
//Using apply
document.getElementById("demo").innerHTML = person.fullName.apply(person1, [
  "Oslo",
  "Norway",
]);
