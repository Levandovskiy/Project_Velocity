// Отримання всіх кнопок через клас
const buttons = document.querySelectorAll(".tabSection__button");
const titleElement = document.querySelector(".tabSection__title");
const textElement = document.querySelector(".tabSection__description");
const imageElement = document.querySelector(".tabSection__imgItem");
const buttonSignUp = document.querySelector(".batton_item");
const registerForm = document.querySelector(".registration-form");

const newElement = [
  {
    title: "Steve McCurry",
    text: "Known for his vibrant and iconic photograph Afghan Girl, Steve McCurry captures human emotion and cultural stories with unmatched depth. His work often highlights the beauty and struggles of life around the world.",
    img: "./img/tabSection/tabSection.png",
  },
  {
    title: "Henri Cartier-Bresson",
    text: "A pioneer of street photography and the concept of the decisive moment, Henri Cartier-Bresson captured fleeting, perfect moments of life. He co-founded Magnum Photos, revolutionizing photojournalism.",
    img: "./img/tabSection/tab2.jpg",
  },
  {
    title: " Sebastião Salgado",
    text: "A Brazilian photographer celebrated for his striking black-and-white images, Sebastião Salgado documents social and environmental issues, showcasing humanity’s resilience and nature’s raw beauty.",
    img: "./img/tabSection/tab3.jpg",
  },
];

//TODO Додаємо обробники кліків
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Знімаємо активний клас з усіх кнопок
    buttons.forEach((button) => {
      button.classList.remove("tabSection__button--active");
    });

    // Додаємо активний клас до натиснутої кнопки
    button.classList.add("tabSection__button--active");

    //оновлюємо заголовок тексту і картинку
    titleElement.textContent = newElement[index].title;
    textElement.textContent = newElement[index].text;
    imageElement.src = newElement[index].img;
    imageElement.alt = newElement[index].title;
  });
});

//TODO Працюємо з формою

function hideRegisterForm() {
  registerForm.style.display = "none";
}

function showRegisterForm() {
  registerForm.style.display = "block"; //TODO Змінюємо  значення з CSS
}

buttonSignUp.addEventListener("click", () => {
  showRegisterForm();
});

window.addEventListener("click", function (event) {
  if (!registerForm.contains(event.target) && event.target !== buttonSignUp) {
    hideRegisterForm();
  }
});
