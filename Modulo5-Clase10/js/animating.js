const rootEl = document.querySelector("#root");
const ctrlsForm = document.querySelector(".controls-form");

const boxesFragment = makeBoxesFragment(3000);
const boxes = [...boxesFragment.children];

rootEl.appendChild(boxesFragment);

ctrlsForm.addEventListener("submit", e => {
  e.preventDefault();
  const { submit: submitBtn, option } = e.currentTarget.elements;

  boxes.forEach(box => {
    box.style.animationName = option.value;
    box.classList.toggle("is-animated");
  });

  const isAnimated = boxes[0].classList.contains("is-animated");
  option.forEach(el => el.disabled = isAnimated);
  submitBtn.textContent = isAnimated ? "Stop" : "Start";
});

function makeBoxesFragment(quantity) {
  const fragment = document.createDocumentFragment();
  const box = document.createElement("div");
  box.classList.add("box");

  for (let i = 0; i < quantity; i += 1) {if (window.CP.shouldStopExecution(0)) break;
    const clone = box.cloneNode();
    clone.style.backgroundColor = getRandomColor();
    fragment.appendChild(clone);
  }window.CP.exitedLoop(0);

  return fragment;
}

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}