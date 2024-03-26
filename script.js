"use strict";

// 1.მოცემულია მასიცი:
// let array2 = [14, 150, 'css', null, 'javascript', 25];

// შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი, ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.

let array2 = [14, 150, "css", null, "javascript", 25];

let newArray2 = array2.map(function (item) {
  if (typeof item === "number") {
    return Math.pow(item, 2);
  } else if (typeof item === "string") {
    return item.toUpperCase();
  } else {
    return item;
  }
});

console.log(newArray2);

// 2.მოცემულია სტრინგი: let info= ‘good day”, ამოიღეთ სიტყვა day და ჩასვით ახალ ცვლადში slice მეთოდის საშუალებით.

let info = "good day";
let splitedInfo = info.split(" ");
let newInfo = splitedInfo.slice(1, 2);
console.log(newInfo);

//3.დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს სტრინგს, და დააბრუნებს ჩაწერილი სტრინგის სიგრძეს.

function stringLength(string) {
  return string.length;
}

let example = "string";

let getStringLength = stringLength(example);
console.log(getStringLength);

//4.prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: საქართველოს დედაქალაქი? სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და  შეინახეთ ცვლადში. როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს. თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.

let answer = prompt("Capital of Georgia");
let correctAns = "tbilisi";
if (answer ===correctAns  || answer.toLowerCase() === correctAns) {
  alert("Correct!");
} else {
  alert("Incorrect");
};

//5.მოცემულია მასივი, რომელშიც არის ერთზე მეტი მნიშვნელობა, მაგრამ კონკრეტულად რამდენი არ ვიცით, შეიძლება 100 ან 200 ან 10. მაგ: let fruits = [“apple”, “mango”, “avocado”,”kiwi”]  splice მეთოდის საშუალებით წაშალეთ ბოლოს წინა მნიშვნელობა და მაგის მაგივრად ჩასვით “strawberry”.

let fruits = ["apple", "mango", "avocado", "kiwi"];
fruits.splice(-2, 1, "strawuberry");
console.log(fruits);

//6.შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

// მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
// მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
// გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;

let array3 = [5, 25, 89, 120, 36];
array3.push("javascript", "python");
array3.unshift("html", "css");
console.log(array3.length);
array3.pop();
array3.shift();
console.log(array3);

//7.შექმენით მასივი, შემდეგი ელემენტებით:ფორთოხალი,ბანანი,კივი;

// გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
// მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
// მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
// გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
// მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
// წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
// გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

let fruits2 = ["orange", "banana", "kiwi"];
console.log(fruits2.length);
fruits2.push("apple", "pineapple");
fruits2.unshift("watermelon");
console.log(fruits2.length);
fruits2.splice(2, 0, "mango");
fruits2.pop();
fruits2.shift();
console.log(fruits2.length);

// 8.მოცემულია მასივი let array4 =[1, 2, 3, 4, 5]. splice მეთოდის საშუალებით მიიღეთ: [1, 2, 3, 'a', 'b', 'c', 4, 5].

let array4 = [1, 2, 3, 4, 5];
array4.splice(3, 0, "a", "b", "c");
console.log(array4);

// 9.მოცემულია მასივი:
// let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;

let array5 = [12, 25, 3, 6, 8, 14, 7, 23];

let newArray5 = array5.map(function (item) {
  let result = item / 3;
  return result;
});

console.log(newArray5);

// 10.მოცემულია მასივი: let array7 =  [15, 100, 25, 10, 36]
//   წაშალეთ ამ მასივიდან რიცხვი 10;

let array7 = [15, 100, 25, 10, 36];
array7.splice(3, 1);
console.log(array7);

//11.მოცემულია მასივი:
// მეთოდის საშალებით 3-ის მაგივრად ჩასვით სიტყვა three;

let array8 = [15, 100, 3, 10, 36];
array8.splice(2, 1, "three");
console.log(array8);

//12.მოცემულია მასივი, შემდეგი მნიშვნელობებით - let array1 =[“hello1”, 14,24, “hello2”] გამოიტანეთ მარტო ციფრები მეთოდის საშუალებით;

let array1 = ["hello1", 14, 24, "hello2"];

let numbersArray1 = array1.filter(function (item) {
  return typeof item === "number";
});
console.log(numbersArray1);

let numbersArray2 = array1.filter((item) => typeof item === "number");
console.log(numbersArray2);

// //13.მოცემულია მასივი:
// let array4 = [1, 2, 3, 4, 5];
// foreach საშუალებით გამოთვალეთ რიცხვების ჯამი

let array9 = [1, 2, 3, 4, 5];

function sum(array) {
  let el = 0;
  array.forEach((item) => (el += item));
  return el;
}

let sumResult = sum(array9);
console.log(sumResult);

//14.მოცემულია მასივი:
// let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვა რომლის სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

let languages = ["html", "css", "javascript", "python", "php"];

let newLang = languages.filter((lan) => lan.length > 3);

console.log(newLang);

//15.მოცემულია მასივი:
// let words = ['Madrid', 'rome', 'Milan', 'berlin'];
// filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;

let words = ["Madrid", "rome", "Milan", "berlin"];

let newList = words.filter((el) => el.includes("m") || el.includes("M"));

console.log(newList);

//16.მოცემულია: let link = “https://google.com”. დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს ამ ცვლადს, და შეამოწმეთ indexof მეთოდის საშუალებით არის თუ არა ამ ცვლადში “https://“. თუ კი გამოიტანეთ - კი მოიცავს, თუ არა - არა, არ მოიცავს

let link = "https://google.com";

function checkLink(item) {
  return item.includes("https://");
}
let result3 = checkLink(link);
console.log(result3);

// 17.შეამოწმეთ მოცემულ მასივში let array6 = [-1, -2, -3, 4]; არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთოდით.

let array10 = [-1, -2, -3, 4];

let checkInfo = array10.some((item) => item > 0);
console.log(checkInfo);

//18.მოცემულია სტრინგი - ‘12345’, გაიგეთ ამ რიცხვებსის ჯამი. ( უნდა გადაიყავნოთ მასივში, გათვალოთ ჯამი, და შემდგ თითოეული სტრინგი გადაიყავნოთ რიცხვში);

let string = "12345";
let splitedString = string.split("");
let number = splitedString.map((item) => Number(item));
let numberReduce = number.reduce((a, b) => a + b);

console.log(numberReduce);

//19.Გამოთვალეთ ნებისმიერი რიცხვებს ჯამი reduce მეთოდით

let array11 = [5, 17, -20, -40, 100].reduce((a, b) => a + b);
console.log(array11);

//20. let array= [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]]
// მასივიდან მეთოდების საშუალებით ამოიღეთ მხოლოდ დადებითი რიცხვები

let array12 = [
  [2, -3, 5, 11],
  [1, -30, -11, 100],
  [-1, -3, -4],
];

let reducedArray = array12.reduce((a, b) => a.concat(b));
let positiveArray = reducedArray.filter((item) => item > 0);

console.log(positiveArray);
