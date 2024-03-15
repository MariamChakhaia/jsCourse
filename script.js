"use strict";

// 1. ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე

for (let i = 5; i < 101; i++) {
  console.log(i);
}

// 2. მოცემულია მასივი: let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let it = 0; it < array1.length; it++) {
  let result = array1[it];
  if (result > 0 && result < 10) {
    console.log(result);
  }
}

for (let it of array1) {
  if (it > 0 && it < 10) {
    console.log(it);
  }
}

// ეს ფორმაც დავწერე, თუმცა ამ შემთხვევაში სწორ პასუხებს ერთმანეთის მიყოლებით არ აჩვენებს ""-ის გამო.

for (let it of array1) {
  let result1 = it > 0 && it < 10 ? it : "";
  console.log(result1);
}

//3. მოცემულია მასივი let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let item of array2) {
  if (item === 5) {
    console.log("არის");
    break;
  }
  console.log(item);
}

for (let item1 = 0; item1 < array2.length; item1++) {
  let result2 = array2[item1];
  if (result2 === 5) {
    console.log("არის");
    break;
  }
  console.log(result2);
}

//4. მოცემულია მასივი: let array3= [1, 2, 3, 4, 5]; ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი;

let array3 = [1, 2, 3, 4, 5];
let sum = 0;
let sum2 = 0;

for (let item2 of array3) {
  sum = sum + item2;
}
console.log(sum);

for (let item2 = 0; item2 < array3.length; item2++) {
  sum2 = sum2 + array3[item2];
}
console.log(sum2);

//5. მოცემულია მასივი: let array4= [1, 2, 3, 4, 5]; ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)

let array4 = [1, 2, 3, 4, 5];
let sum3 = 0;
let sum4 = 0;

for (let item3 of array4) {
  sum3 = sum3 + item3;
}
let average = sum3 / array4.length;
console.log(average);

for (let item4 = 0; item4 < array4.length; item4++) {
  sum4 = sum4 + array4[item4];
}
let average2 = sum4 / array4.length;
console.log(average2);

//6. მოცემულია მასივი. გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue) let array5 = [1, 2, 3, 7, 6, 9];

let array5 = [1, 2, 3, 7, 6, 9];

for (let item5 of array5) {
  if (item5 === 7) {
    continue;
  }
  console.log(item5);
}

for (let item5 = 0; item5 < array5.length; item5++) {
  if (array5[item5] === 7) {
    continue;
  }
  console.log(array5[item5]);
}

//7. ამოიღეთ user ცვლადის სტუდენტის სტატუსი;
let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};

console.log(user["studentstatus"]);
console.log(user.studentstatus);

//8. თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  hello user;
// თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello anna;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;
// ეს ამოცანა უდნა შეასრულოთ ორივე if- ის ჩანაწერით;

let user2 = {
  name: "anna",
  age: 20,
  studentstatus: "active",
};

if (
  typeof user2["age"] == "number" &&
  user2["age"] < 18 &&
  user2["studentstatus"] === "active"
) {
  console.log("hello user");
} else if (user2["name"] === "levan") {
  console.log("hello levani");
} else if (
  user2["studentstatus"] === "active" ||
  (typeof user2["age"] === "number" && user2["age"] < 25)
) {
  console.log("hello anna");
} else {
  console.log("error");
}

let result3 =
  typeof user2["age"] == "number" &&
  user2["age"] < 18 &&
  user2["studentstatus"] === "active"
    ? "hello user"
    : user2["name"] === "levan"
    ? "hello levani"
    : user2["studentstatus"] === "active" ||
      (typeof user2["age"] === "number" && user2["age"] < 25)
    ? "hello anna"
    : "error";

console.log(result3);

//9. მოცემულია მასივი: let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]ამოიღეთ მხოლოდ ლუწი რიცხვები

let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for (let item6 of array6) {
  if (typeof item6 == "number" && item6 % 2 == 0) {
    console.log(item6);
  }
}

for (let item6 = 0; item6 < array6.length; item6++) {
  let result4 = array6[item6];
  if (typeof result4 == "number" && result4 % 2 == 0) {
    console.log(result4);
  }
}

//10. კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;
let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];

for (let result5 of users) {
  //   console.log(result5);
  if (result5["status"] === true) {
    console.log(result5);
  }
}

//11. Მოცემული მასივიდან ამოიღეთ მხოლოდ ციფრები, რომლებიც 5-ის ჯერადია: Let array7 = [32, 14, null, ‘40’, 50];
let array7 = [32, 14, null, "40", 50];

for (let result6 of array7) {
  if (typeof result6 == "number" && result6 % 5 == 0) {
    console.log(result6);
  }
}

for (let item8 = 0; item8 < array7.length; item8++) {
  let result7 = array7[item8];
  if (typeof result7 == "number" && result7 % 5 == 0) {
    console.log(result7);
  }
}

//12. Მოცემული მასივიდან კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები: Let array8 = [ [2, -3, 5, 11], [1, -35, –11], [12, -36, -24] ];
let array8 = [
  [2, -3, 5, 11],
  [1, -35, -11],
  [12, -36, -24],
];

for (let item9 of array8) {
  //   console.log(item9);
  for (let item10 of item9) {
    if (typeof item10 == "number" && item10 > 0) {
      console.log(item10);
    }
  }
}
