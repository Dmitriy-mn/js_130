// -------------------------------- 5

/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

// const user = {
//   name: "Alice",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// const petya = {
//   name: "Petya",
//   age: 30,
//   hobby: "html",
//   premium: true,
// };


// function foo(obj) {
//     obj.mood = "happy";
//     obj.hobby = "skydiving";
//     obj.premium = false;

//     const keys = Object.keys(obj);

//     for(const key of keys) {
//         console.log(`${key}: ${obj[key]}`);
//     }
// }

// foo(user);
// foo(petya);


// console.log(petya);





/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

// const salaries = {
//     alice: 130,
//     petya: 100,
//     yura: 160
// }


// function sum(obj) { // const obj = salaries
//     let total = 0;    

//     const values = Object.values(obj);
    
//     for(const item of values) {
//         total += item;
//     }
//     return total;
// }

// console.log(sum(salaries));













