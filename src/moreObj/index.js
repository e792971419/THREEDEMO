/*
 * @Author: your name
 * @LastEditors: xiasong
 * @Date: 2021-01-28 12:51:06
 * @LastEditTime: 2021-01-28 18:45:29
 * @Description: description
 * @FilePath: \THREEDEMO\src\moreObj\index.js
 */

console.log(1);
Promise.race([Promise.resolve(a), Promise.resolve(b)]).then(() => {
  setTimeout(() => {
    console.log(3);
  }, 1500);
});

async function a() {
  setTimeout(() => {
    console.log(1);
  }, 500);
}
async function b() {
  setTimeout(() => {
    console.log(2);
  }, 1000);
}
