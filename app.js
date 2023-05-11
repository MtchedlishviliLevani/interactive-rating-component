const button = document.querySelector(".btn");
const mainContainer = document.querySelector(".card1");
const secondcont = document.querySelector(".card2");
const rating = document.getElementById("rating");
const prntN = document.querySelectorAll(".prntN");
const rate = document.querySelectorAll(".btn1");

for (let i = 0; i < prntN.length; i++) {
  prntN[i].addEventListener("click", function () {
    for (let j = 0; j < prntN.length; j++) {
      prntN[j].style.backgroundColor = "";
    }
    prntN[i].style.backgroundColor = "#fc7614";
  });
}

button.addEventListener("click", () => {
  mainContainer.style.display = "none";
  secondcont.style.display = "block";
});

for (let i = 0; i < rate.length; i++) {
  rate[i].addEventListener("click", function () {
    rating.innerHTML = this.innerHTML;
  });
}
