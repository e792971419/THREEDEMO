/*
 * @Author: your name
 * @LastEditors: xiasong
 * @Date: 2021-01-19 10:31:43
 * @LastEditTime: 2021-01-19 18:01:13
 * @Description: description
 * @FilePath: \THREEDEMO\src\design_pattern\index.js
 */

// function fn1() {
//   var n = 1;

//   plus = () => {
//     console.log(n, "---plus");
//     n += 1;
//   };

//   function fn2() {
//     console.log(n, "---fn2");
//   }

//   return fn2;
// }

// let result = fn1();

// plus();

// result();

// delete result;

// result = null;

// plus();

// result();

/* ------------------- */

// var ame = "the window";

/**
 *  在全局 用 var 声明变量的时候 会提升为全局变量，但是用let 声明的时候为当前的 局部全局变量
 * */
// console.log(window.ame);

// var obj = {
//   ame: "my object",
//   getName: () => {
//     // console.log(this, "---getName");
//     return () => {
//       //   console.log(this, "---getName_inner");
//       return this.ame;
//     };
//   },
//   curGetName() {
//     const _this = this;
//     return () => _this.ame;
//   },
// };

// console.log(obj.getName()());
// console.log(obj.curGetName()());

/* function fun() {
  var i = 0;
  return function () {
    console.log(i++);
  };
}
fun();
fun()(); // 0
fun()(); // 0 这里打印出为 0 是因为 再次被实例了,与之前的 就不是同一个实例对象
var f1 = fun(),
  f2 = fun();
f1();
f1(); // 这里是因为 同一个实例对象 调用的
f2(); */

// function Cat(name, color) {
//   this.name = name;
//   this.color = color;
// }

// let cat1 = new Cat("tom", "pink");
// let cat2 = new Cat("tim", "blue");

// // console.log(cat1.constructor);
// // console.log(cat1.__proto__ === Cat.prototype);
// // console.log(Cat.prototype);

// for (let n in cat1) {
//   console.log(n);
// }
// console.log("name" in cat1 ? "1" : "0");

/* ----------------------------------------------------------------------------- */

const eventEmitter = {};

/* ----------------------------------------------------------------------------- */
