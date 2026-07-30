// ------------------------------------------ 3

/**
 * Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
 * - email - пошта, рядок
 * - age - вік, число
 * - numberOfPosts - кількість постів, число
 * - topics - масив тем на яких спеціалізується блогер
 *
 * Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
 *
 * - Додай метод getInfo(), який, повертає рядок: 
 *    User ${email} is ${age} years old and has ${numPosts} posts.
 * 
 * - Додай метод updatePostCount(value), який у параметрі value 
 *    приймає кількість постів, які потрібно додати користувачеві.
 */


// class Blogger {
//     constructor(obj) {
//         this.email = obj.email;
//         this.age = obj.age;
//         this.numberOfPosts = obj.numberOfPosts;
//         this.topics = obj.topics;
//     }

//     getInfo() {
//         return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//     }

//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }
// }

// const alice = new Blogger({
//     email: "Alice@gmail.com",
//     age: 25,
//     numberOfPosts: 30,
//     topics: ["sport", "gaming"]
// });

// alice.updatePostCount(10);
// console.log(alice.getInfo());
// console.log(alice);

// const petya = new Blogger({
//     email: "petya@gmail.com",
//     age: 30,
//     numberOfPosts: 50,
//     topics: ["tech"]
// })

// petya.updatePostCount(20);
// console.log(petya.getInfo());




// ------------------------------------------------- 4

/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */


// class User {
//     #login;
//     #email;

//     constructor(obj) {
//         this.#login = obj.login;
//         this.#email = obj.email;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(newLogin) {
//         this.#login = newLogin;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }


// const alice = new User({ email: "alice@gmail.com", login: "Alice" })

// alice.login = "SuperAlice";

// console.log(alice.login);


// alice.email = "super_alice@gmail.com";
// console.log(alice.email);

// console.log(alice);



