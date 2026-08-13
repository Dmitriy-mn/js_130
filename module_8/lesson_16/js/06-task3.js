/**
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
 */

// function calculateHousePerimeter({ sideA, sideB, sideC, sideD }) {
//     const perimeter = sideA + sideB + sideC + sideD;
//     return perimeter;
// }

// const house = {
//     sideA: 10,
//     sideB: 15,
//     sideC: 10,
//     sideD: 15
// }

// const perimeter = calculateHousePerimeter(house);
// console.log(`Периметр будинку: ${perimeter}`);






function calculateHousePerimeter({ sideC, sideA, sideB, sideD }) {
    const perimeter = sideA * sideB - sideC / sideD;
    return perimeter;
}

const house = {
    sideB: 15,
    sideD: 15,
    sideC: 10,
    sideA: 10,
}

const perimeter = calculateHousePerimeter(house);
console.log(`Периметр будинку: ${perimeter}`);