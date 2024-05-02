const accordion = document.querySelectorAll(".accordion");

accordion.forEach((accord) => {
  const answer = accord.querySelector(".answer");
  const img = accord.querySelector(".question img");

  if (answer.classList.contains("active")) {
    img.src = "./assets/images/icon-minus.svg";
  } else {
    img.src = "./assets/images/icon-plus.svg";
  }

  accord.addEventListener("click", () => {
    answer.classList.toggle("active");
    if (answer.classList.contains("active")) {
      img.src = "./assets/images/icon-minus.svg";
    } else {
      img.src = "./assets/images/icon-plus.svg";
    }
  });
});
