// Script For Theme
const themeEl = document.querySelectorAll(".circle");
const bodyEl = document.querySelector("body");
themeEl.forEach((themeNo, index) => {
  themeNo.addEventListener("click", () => {
    themeEl.forEach((value, idx) => {
      themeEl[idx].classList.remove("active");
      themeNo.classList.add("active");
    });
    if (index === 0) {
      bodyEl.classList.remove("theme1");
      bodyEl.classList.remove("theme2");
    } else if (index === 1) {
      bodyEl.classList.add("theme1");
      bodyEl.classList.remove("theme2");
    } else {
      bodyEl.classList.remove("theme1");
      bodyEl.classList.add("theme2");
    }
  });
});

// Script for Calculation

const inputEl = document.getElementById("input");
const btnEl = document.querySelectorAll("span.front");
const answerEl = document.querySelector(".answer");
for (let i = 0; i < btnEl.length; i++) {
  btnEl[i].addEventListener("click", () => {
    const buttonValue = btnEl[i].textContent;
    if (buttonValue === "=") {
      calculateResult();
    } else if (buttonValue === "Reset") {
      clearResult();
    } else if (buttonValue === "Del") {
      deleteInput();
    } else {
      appendValue(buttonValue);
    }
  });
}

function calculateResult() {
  inputEl.value = Math.round(eval(inputEl.value) * 100) / 100;
}

function clearResult() {
  inputEl.value = "";
}

function deleteInput() {
  inputEl.value = inputEl.value.toString().slice(0, -1);
}

function appendValue(buttonValue) {
  inputEl.value += buttonValue;
}
