/*
 * @Author: your name
 * @LastEditors: xiasong
 * @Date: 2021-01-28 12:51:06
 * @LastEditTime: 2021-01-29 11:29:16
 * @Description: description
 * @FilePath: \THREEDEMO\src\moreObj\index.js
 */

const fetchRequest = {
  getOne: () => axios("./index.json"),
  getTwo: () => axios("./index2.json"),
};

// function num() {
//   return new Promise((resolve, reject) => {
//     axios("./index.json").then((res) => {
//       resolve(res);
//     });
//   });
// }

// num().then((res) => {
//   console.log(res);
// });

// axios.all([fetchRequest.getOne(), fetchRequest.getTwo()]).then((res) => {
//   console.log(res, "axios");
// });

// Promise.all([fetchRequest.getOne(), fetchRequest.getTwo()]).then((res) => {
//   console.log(res);
// });
// Promise.race([fetchRequest.getOne(), fetchRequest.getTwo()]).then((res) => {
//   // 这里返回的是最快的那一个请求的数据，慢的请求还是会触发，但是目前没有找到 怎么拿数据
//   console.log(res);
// });

// function getBothData() {
//   return new Promise((resolve, reject) => {
//     axios.all([fetchRequest.getOne(), fetchRequest.getTwo()]).then((res) => {
//       resolve(res);
//     });
//   });
// }

// getBothData().then((res) => {
//   console.log(res);
//   data = res;
// });

// 将数据分开
// getBothData().then(
//   axios.spread((res1, res2) => {
//     console.log(res1);
//     console.log(res2);
//   })
// );

const read = function (link) {
  return new Promise((resolve, reject) => {
    axios(link).then((res) => {
      resolve(res);
    });
  });
};

const asyncRead = async function () {
  const one = await read("./index.json");
  const two = await read("./index2.json");
  // console.log(one);
  // console.log(two);
  return [one, two];
};
