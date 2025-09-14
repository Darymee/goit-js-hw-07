function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('#controls input[type="number"]'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', () => {
  const amount = Number(refs.input.value);

  // Валідація: лише 1..100
  if (!Number.isInteger(amount) || amount < 1 || amount > 100) {
    return; // поза діапазоном — нічого не робимо
  }

  createBoxes(amount);
  refs.input.value = ''; // очищаємо інпут лише після успішного створення
});

refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const baseSize = 30;
  const step = 10;

  refs.boxes.innerHTML = '';

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const size = baseSize + i * step;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  refs.boxes.appendChild(fragment);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}
