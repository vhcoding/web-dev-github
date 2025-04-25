// ---- My solution

const inputElement = document.querySelector("input");
const paragraphCount = document.querySelector(".count-paragraph");
const spanHighlight = document.querySelector(".highlight");

function updateCharacterCount() {
  const inputLength = inputElement.value.length;
  const remaing = 60 - inputLength;
  spanHighlight.textContent = remaing;
  if (remaing <= 10) {
    spanHighlight.style.color = "red";
    inputElement.style.backgroundColor = "rgb(202, 157, 245)";
  } else {
    spanHighlight.style.color = "";
    inputElement.style.backgroundColor = "";
  }
}

inputElement.addEventListener("input", updateCharacterCount);
