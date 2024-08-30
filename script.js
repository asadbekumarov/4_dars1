//1-MASALA
// const number = 1;
// switch (number) {
//   case 1:
//     console.log(`1-Dushanba`);
//     break;
//   case 2:
//     console.log(`2-Seshanba`);
//     break;
//   case 3:
//     console.log(`3-Chorshanba`);
//     break;
//   case 4:
//     console.log(`4-Payshanba`);
//     break;
//   case 5:
//     console.log(`5-Juma`);
//     break;
//   case 6:
//     console.log(`6-Shanba`);
//     break;
//   case 7:
//     console.log(`7-Yakshanba`);
//     break;
//   default:
//     console.log(`1 dan 7 gacha bolgan butun son kiriting.`);
// }

// 2-MASALA
// let baho = 5;
// switch (baho) {
//   case 1:
//     console.log(`1-yamon`);
//     break;
//   case 2:
//     console.log(`2-qoniqarsiz`);
//     break;
//   case 3:
//     console.log(`3-qoniqarli`);
//     break;
//   case 4:
//     console.log(`4-yaxshi`);
//     break;
//   case 5:
//     console.log(`5-a'lo`);
//     break;
//   default:
//     console.log(`xato`);
// }

// 3-MASALA
// let oy = 23;
// switch (oy) {
//   case 1:
//     console.log(`2-qish`);
//     break;
//   case 2:
//     console.log(`2-qish`);
//     break;
//   case 3:
//     console.log(`2-qish`);
//     break;
//   case 4:
//     console.log(`2-bahor`);
//     break;
//   case 5:
//     console.log(`2-bahor`);
//     break;
//   case 6:
//     console.log(`6-bahor`);
//     break;
//   case 7:
//     console.log(`7-yoz`);
//     break;
//   case 8:
//     console.log(`8-yoz`);
//     break;
//   case 9:
//     console.log(`9-yoz`);
//     break;
//   case 10:
//     console.log(`10-kuz`);
//     break;
//   case 11:
//     console.log(`11-kuz`);
//     break;
//   case 12:
//     console.log(`12-kuz`);
//     break;
//   default:
//     console.log(`${oy}-oy yoq`);
// }

// 4 - MASALA;
// let oy = 15;
// switch (oy) {
//   case 1:
//     console.log(`${oy}-oyda 31 kun bor`);
//     break;
//   case 2:
//     console.log(`${oy}-oyda 29 kun bor`);
//     break;
//   case 3:
//     console.log(`${oy}-oyda 31 kun bor`);
//     break;
//   case 4:
//     console.log(`${oy}-oyda 30 kun bor`);
//     break;
//   case 5:
//     console.log(`${oy}-oyda 31 kun bor`);
//     break;
//   case 6:
//     console.log(`${oy}-oyda 30 kun bor`);
//     break;
//   case 7:
//     console.log(`${oy}-oyda 31 kun bor`);
//     break;
//   case 8:
//     console.log(`${oy}-oyda 31 kun bor`);
//     break;
//   case 9:
//     console.log(`${oy}-oyda 30 kun bor`);
//     break;
//   case 10:
//     console.log(`${oy}-oyda 31 kun bor`);
//     break;
//   case 11:
//     console.log(`${oy}-oyda 30 kun bor`);
//     break;
//   case 12:
//     console.log(`${oy}-oyda 31 kun bor`);
//     break;
//   default:
//     console.log(`${oy}-oy yoq`);
// }

// 5 - MASALA;
// let a = +prompt(`son `);
// let b = +prompt(`son`);
// let c = prompt(``);
// switch (c) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   default:
//     console.log(`xato`);
//     break;
// }

// 6-MASALA
// let birliklari = 5;
// let uzunlik = 50000;
// let c;
// switch (birliklari) {
//   case 1:
//     console.log((c = uzunlik / 10));
//     break;
//   case 2:
//     console.log((c = uzunlik * 1000));
//     break;
//   case 3:
//     console.log((c = uzunlik));
//     break;
//   case 4:
//     console.log((c = uzunlik / 1000));
//     break;
//   case 5:
//     console.log((c = uzunlik / 100));
//     break;
//   default:
//     console.log(`xato`);
// }

// 7-MASALA
// let birliklari = 1;
// let bildiruvchi = 100;
// let c;
// switch (birliklari) {
//   case 1:
//     console.log((c = bildiruvchi));
//     break;
//   case 2:
//     console.log((c = bildiruvchi / 1000000));
//     break;
//   case 3:
//     console.log((c = bildiruvchi / 1000));
//     break;
//   case 4:
//     console.log((c = bildiruvchi * 1000));
//     break;
//   case 5:
//     console.log((c = bildiruvchi * 100));
//     break;
//   default:
//     console.log(`xato`);
// }

// NEW DATE
const now = new Date();
const today = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();
const hour = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
console.log(`Today:`, today);
console.log(`Month:`, month);
console.log(`Year:`, year);
console.log(`Hour ${hour}:${minutes}:${seconds}`);
