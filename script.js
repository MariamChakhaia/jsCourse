// შექმენით htmlში დივი, მიანიჭეთ id და ჯსდან ამ დივში დაამატეთ შემდეგი html სტრუქტურა:
// <div class=“wraper”>
//  <img src=“რაღაცა სურათის მისამართი დაამატეთ” alt=“image”>
// <h2 class=“title”> image title </h2>
// </div>
// h2 ჯს დან დაუმატეთ წითელი ფონტის ფერი და ფროტის ზომა 30px

let div1 = document.getElementById("task1");
let div2 = document.createElement("div");
div2.classList.add("wraper");
div1.appendChild(div2);

let img = document.createElement("img");
img.setAttribute("src", "img.jpeg");
img.setAttribute("alt", "image");
div2.appendChild(img);

let imgTitle = document.createElement("h2");
imgTitle.classList.add("title");
imgTitle.innerText = "image title";
imgTitle.style.color = "red";
imgTitle.style.fontSize = "30px";
div2.appendChild(imgTitle);

// შექმენით სამი დივი htmlში, მიანიჭეთ ერთიდაიგივე კლასის სახელი და ყველა დივში დაამატეთ ჯს-დან შემდეგი კოდი:
// <p class=“text”> hello </p>

let divArray = document.querySelectorAll(".task2");

divArray.forEach(function (item) {
  let pTag = document.createElement("p");
  pTag.classList.add("text");
  pTag.textContent = "hello";

  item.appendChild(pTag);
});
