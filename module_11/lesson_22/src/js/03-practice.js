import axios from 'axios';

import '../common.css';

/**
 * https://thecatapi.com/
 *
 * 1) Створити сторінку яка при завантаженні робить запит на бекенд і оримує
 *  всі доступні breeds. https://api.thecatapi.com/v1/breeds
 *
 * 2) В інтерфейсі є форма пошуку з прив'язаним datalist з завантаженими breeds.
 *
 * 3) Користувач в формі вводить або обирає необхідний breed і при сабміті форми
 *  виконується GET запит за зображенням.
 *
 * 4) Після запиту під формою відображається картка з зображенням.
 *
 * 5) Під час запиту під формую відображається loader
 */


const API_KEY = "DEMO-API-KEY";

const form = document.querySelector("#search-form");
const breedInput = document.querySelector("#breed-input");
const breedsList = document.querySelector("#breeds-list");
const loader = document.querySelector("#loader");
const catCard = document.querySelector("#cat-card");

axios.defaults.baseURL = "https://api.thecatapi.com/v1";
axios.defaults.headers.common["x-api-key"] = API_KEY;

form.addEventListener("submit", handleSubmit);

fetchBreeds();

function fetchBreeds() {
    axios("/breeds")
        .then(({ data }) => {
            breedsList.insertAdjacentHTML("beforeend", populateDatalist(data));
        })
        .catch(error => {
            alert(error.message);
            console.log(error.message);
        })
}

function populateDatalist(arr) {
    return arr.map(({ id, name }) => `
        <option value="${name}" data-id="${id}"></option>
    `).join("");
}

function handleSubmit(event) {
    event.preventDefault();

    const myBreed = event.target.elements.input.value.trim();
    const selectedBreed = [...breedsList.children]
        .find(option => option.value.toLowerCase() === myBreed.toLowerCase());

    if(!selectedBreed) {
        alert("Оберіть інсуючу породу");
        event.target.reset();
        return;
    }
    
    const breedId = selectedBreed.dataset.id;
    loader.classList.remove("hidden");
    
    axios(`/images/search`, {
        params: {
            breed_ids: breedId
        }
    })
        .then(({ data }) => {
            if(data.length > 0) {
                const catImg = data[0].url;
                
                catCard.innerHTML = `
                    <div class="card">
                        <img src="${catImg}" alt="${myBreed}" class="cat-image"/>
                        <div class="card-body">
                            <h2 class="card-title">${myBreed}</h2>
                        </div>
                    </div>
                `;
            } else {
                catCard.innerHTML = '<p class="error-text">Зображення не знайдено</p>';
            }
        })
        .catch(error => {
            alert(error.message);
            console.log(error.message);
        })
        .finally(() => {
            event.target.reset();
            loader.classList.add("hidden");
        })
}


    

