/**
 * Реалізуй пошук автомобілів по сайту
 * Користувач потрапляє на сайт і одразу бачить форму для пошуку 
 * і картки всіх автомобілів (масив cars)
 * Користувач може ввести в форму назву Марки або Моделі авто і в 
 * тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
 * Після натискання кнопки пошуку (сабміт форми) відмалюй авто 
 * які збігаються з критеріями пошуку
 */

const cars = [
    {
      id: 1,
      car: "Audi",
      type: "A6",
      price: 30000,
      img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
    },
    {
      id: 2,
      car: "Honda",
      type: "Civic",
      price: 12000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
    },
    {
      id: 3,
      car: "Audi",
      type: "Q7",
      price: 40000,
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
    },
    {
      id: 4,
      car: "BMW",
      type: "5 siries",
      price: 9000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
    },
    {
      id: 5,
      car: "Honda",
      type: "Accord",
      price: 20000,
      img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
    },
    {
      id: 6,
      car: "Volvo",
      type: "XC60",
      price: 7000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlOdlu71ZZ2i5xS2vHNFt2tLXBSMDR_Jz5rIzFX7y0TQ&s=10",
    },
];


const form = document.querySelector(".js-form");
const container = document.querySelector(".js-list");

form.addEventListener("submit", handlerSubmit);

function createMarkup(arr) {
  return arr.map((item) => `
    <li class="car-card" data-id="${item.id}">
      <img class="car-image" src="${item.img}" alt="${item.type}"/>
      <h2 class="car-title">${item.car}</h2>
      <h3 class="car-type">${item.type}</h3>
      <span class="car-price">${item.price}$</span>
    </li>
  `).join("");
}

container.style.display= "flex";
container.style.flexWrap= "wrap";
container.style.gap= "25px";
container.insertAdjacentHTML("beforeend", createMarkup(cars));

function handlerSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;
  const queryValue = elements.query.value.trim();
  const optionValue = elements.options.value;

  const result = cars.filter((item) => 
    item[optionValue].toLowerCase().includes(queryValue.toLowerCase()));
  console.log(result);

  container.innerHTML = createMarkup(result);
}





