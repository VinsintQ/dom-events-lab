/*-------------------------------- Constants --------------------------------*/
const button = document.querySelectorAll(".button");
const display = document.querySelector(".display");
/*-------------------------------- Variables --------------------------------*/
let a;
/*------------------------ Cached Element References ------------------------*/
/*----------------------------- Event Listeners -----------------------------*/
button.forEach((element) => {
  element.addEventListener("click", print); //adding event listenr
});
/*-------------------------------- Functions --------------------------------*/
function print(event) {
  if (
    display.textContent == "" &&
    (event.target.textContent === "*" ||
      event.target.textContent === "=" ||
      event.target.textContent === "+" ||
      event.target.textContent === "/")
  ) {
  } else {
    if (event.target.textContent !== "C" && event.target.textContent !== "=") {
      a = event.target.textContent;
      display.textContent += a;
    }
    if (event.target.textContent === "C") {
      display.textContent = "";
      a = "";
    }
    if (event.target.textContent === "=") {
      display.textContent = eval(display.textContent);

      a = "";
    }
  }
}
