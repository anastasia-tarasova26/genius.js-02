//String//

// value = false;
// console.log(typeof value);

// const newValue = String(value);
// console.log(typeof newValue);

//Number//

// value = "123";
// console.log(typeof value);

// const newValue = Number(value);
// console.log(typeof newValue);

//Якщо замість цифр вводити букви і тд. відповідь буде NaN

// const test = Number("sdfghj");
// console.log(test);

//Boolean//

// Правила перетворення:

// Значення, які інтуїтивно порожні, такі як 0,
// порожній рядок, null, undefined та NaN, стають false.
// Інші значення стають true.

// console.log(Boolean(1)); // true
// console.log(Boolean(0)); //false

// console.log(Boolean("вітаємо")); // true
// console.log(Boolean("")); //false

// console.log(Boolean(NaN)); //false
// console.log(Boolean("null")); // false

//---------------------------------------------------Оператори---------------------------------------------------------//

//Операнд - це те, до чого застосовуються оператори.
//Наприклад, у множенні 5 * 2 є два операнди: лівий операнд 5 і правий операнд 2.
//Іноді їх називають аргументами

//Оператор є унарним, якщо він має один операнд
//let x = 1;

//x = -x;

//Оператор є бінарним, якщо він має два операнди

// let x = 1, y = 3;
// alert( y - x );

//JavaScript підтримує такі математичні операції:

// // Додавання +,

// console.log(2 + 2);

// // Віднімання -,

// console.log(3 - 5);

// // Множення *,

// console.log(7 * 8);

// // Ділення /,

// console.log(10 / 2);

// // Остача від ділення %,
// console.log(7 % 89);
// console.log(10 % 234);
// console.log(5 % 65);
// // Піднесення до степеня **.

// console.log(5 ** 10);
// console.log(2 ** 4);

// // // Додавання
// console.log(2 + 2);

// // // Віднімання
// console.log(10 - 4);

// // // Множення
// console.log(5 * 5);

// // // Ділення
// console.log(6 / 2);

//Остача від ділення %

// console.log(8 % 3);
// console.log(10 % 3);
// console.log(10 % 2);

//Піднесення до степеня **

// console.log(5 ** 2);
// console.log(4 ** 4);

// -------Оператори порівняння------//

// результатом вертають буль

// a > b и a < b //- більше/меньше
// a >= b и a <= b  //- більше/меньше або дорівнює
// a == b //- дорівнює
// a != b //- не дорівнює
// a === b //- строго дорівнює
// a !== b //- строго не дорівнює

// console.log(5 > 3); //true (boolean)
// console.log(2 > 4); //false
// console.log(5 >= 5); // true
// console.log(7 <= 3); //false

// одне = - це оператор присвоєння, а == - це оператор порівняння, === - строге порівнювання

// == приведення до типу

// console.log(5 === 5); //true
// console.log(5 !== 5);//false

// --------------------------------------------Оператори and, or, not ---------------------------------------------//

//   -----and (&&)------  //Необхідно щоб було виконано обидві умови

// console.log(5 === 5 && 6 > 3); //true
// console.log(5 === 6 && 6 > 3); //false
// console.log(6 + 3 >= 9 && 8 + 1 === 9);//true

//   -----or (||)------ //Необхідно щоб одна з умов була виконана

// console.log(5 + 5 === 25 || 2 * 2 === 6);//false
// console.log(5 * 5 === 25 || 2 * 2 === 6);//true

//   -----not (!) ------ //
//console.log(5 !== 4);//true
//console.log(!true);//false
//console.log(!false);//true

// ----------------------------------Умови if/else----------------------------------//

//--- одинарні

// if (5 + 5 === 10) {
//   console.log("hello");
// }
// if (5 + 5 === 2) {
//   console.log("1");
// } else {
//   console.log(2);
// }

// if (2 + 2 === 6) {
//   console.log("Hello");
// } else {
//   console.log("No Hello");
// } //No Hello

/// ------Тернарний оператор------///

// 2 + 2 === 4 ? console.log("1") : console.log("2");
// 5 * 5 === 24 ? console.log(true) : console.log(false);

// if (5 + 5 === 10) {
//   console.log("5+5 ===10");
// } else if (2 + 2 === 4) {
//   console.log("2+2 ===4");
// } else {
//   console.log("no");
// }

// let leng = "ua";

// if (leng === "ua") {
//   console.log("Понеділок");
// } else if (leng === "en") {
//   console.log("Monday");
// } else {
//   console.log("Reset");
// }

// ----------------------------------switch/case----------------------------------//

// let cost = null;
// const sub = "premium";

// switch (sub) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
// }

// console.log(cost);

// ----------------------------------Вирішення логічних задач та побудова алгоритмів----------------------------------//
