const submit = document.querySelector(".btn");
const mainContainer = document.querySelector(".card1");
const secondcont = document.querySelector(".card2");
const rating = document.getElementById("rating");
const prntN = document.querySelectorAll(".prntN");
const rate = document.querySelectorAll(".btn1");

prntN.forEach((ParentEl) => {
  ParentEl.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("btn1") ||
      e.currentTarget.contains(e.target)
    ) {
      /// Reset background colors for all parent elements
      prntN.forEach((el) => {
        el.style.backgroundColor = "";
      });

      // Set the background color of the clicked parent element
      ParentEl.style.backgroundColor = "#fc7614";
    }
  });
});

submit.addEventListener("click", () => {
  mainContainer.style.display = "none";
  secondcont.style.display = "block";
});

prntN.forEach((parent) => {
  parent.addEventListener("click", (e) => {
    if (parent === e.currentTarget) {
      rating.textContent = parent.textContent;
    }
  });
});
