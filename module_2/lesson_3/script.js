// -------------------------------------- 6

/*
 * Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = "vip";
// let canConnect;

//      false  ||  false
// if(sub === "pro" || sub === "vip") {
//     canConnect = true;
// } else {
//     canConnect = false;
// }

//                     false || true => true
// canConnect = sub === "pro" || sub === "vip";

// console.log(canConnect);








/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */

const isOnline = true;
const isFriend = true;
const isDnD = true;

//                      true && true && true
const canOpenChat = isOnline && isFriend && !isDnD;

console.log("canOpenChat", canOpenChat);




