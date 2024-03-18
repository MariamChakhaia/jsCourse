"use strict";

// 1. ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: არგუმენტად გადაეცით ეს მასივი: 10, 50, 6, 7, 8, 11, 6, 3, 9

function getSum1(...numbers) {
  let subElement = 0;
  for (let item of numbers) {
    subElement += item;
  }
  return subElement;
}

let result1 = getSum1(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result1);

let getSum2 = function (...numbers) {
  let subElement = 0;
  for (let item of numbers) {
    subElement += item;
  }
  return subElement;
};

let result2 = getSum2(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result2);

let getSum3 = (...numbers) => {
  let subElement = 0;
  for (let item of numbers) {
    subElement += item;
  }
  return subElement;
};

let result3 = getSum3(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result3);

//2. ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};

function getName1(logInfo) {
  if (user.isloggedin) {
    return user.firstname + " " + user.lastname;
  }
  return false;
}

let result4 = getName1(user.isloggedin);
console.log(result4);

let getName2 = function (logInfo) {
  return user.isloggedin ? user.firstname + " " + user.lastname : false;
};

let result5 = getName2(user.isloggedin);
console.log(result5);

//3. შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

function getMax(...numbers) {
  return Math.max(...numbers);
}
let maxResult = getMax(200, 5, 17, 35, 40, 1020);
console.log(maxResult);

let getMax2 = function (...numbers) {
  return Math.max(...numbers);
};
let maxResult2 = getMax2(200, 5, 17, 35, 40, 1020);
console.log(maxResult2);

let getMax3 = (...numbers) => {
  return Math.max(...numbers);
};
let maxResult3 = getMax3(200, 5, 17, 35, 40, 1020);
console.log(maxResult3);

//მე-2 გზა:
let array1 = [150, -2, 800, 34, 1500];

function sort(...numbers) {
  for (let item of numbers) {
    return item.sort((a, b) => b - a);
  }
}
let getMax4 = sort(array1);
console.log(getMax4[0]);

//4. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - this number is even‘; თუ კენტია დააბრუნოს - this number is odd;

function getEven(x) {
  if (x % 2 == 0) {
    return "this number is even";
  }
  return "this number is odd";
}
let result6 = getEven(15);
console.log(result6);

let getEven2 = (x) => {
  return x % 2 == 0 ? "this number is even" : "this number is odd";
};

let result7 = getEven(28);
console.log(result7);

//5. for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1

let array = [1, 2, 3, 4, 5];

function getReverse(...numbers) {
  for (let item of numbers) {
    return item.reverse();
  }
}
let result8 = getReverse(array);
console.log(result8);

//6. ფუნქციის საშუალებით გამოთვალეთ იუსერის ასაკი ( არგუმენტად გადაეცით ნებისმიერი რიცხვი) და დაამატეთ შემდეგი პირობა, თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი. ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;

let checkAge = (age) => {
  return age > 18 ? "სრულწლოვანია" : "არასრულწლოვანია";
};

let result9 = checkAge(20);
let result10 = checkAge(15);
console.log(result9);
console.log(result10);
