// 1번 timer
async function timer(ms) {
  setTimeout(() => {
    return Promise.resolve();
  }, ms);
}

// 2번 timer
const timer = (ms) => new Promise((res) => setTimeout(res, ms));

async function load() {
  for (var i = 0; i < 3; i++) {
    console.log(i);
    await timer(1000);
  }
  console.log("end");
}

load();

// function timer(res) {
//   return Promise.resolve(setTimeout(() => {}, res)).then(() => undefined);
// }

// timer(1000).then((resolve) => {
//   console.log(resolve);
// });

// console.log(timer(1000));

// console.log(load());

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve(1);
//   }, 2000);
// })
//   .then(function (result) {
//     console.log(result); // 1
//     return result + 10;
//   })
//   .then(function (result) {
//     console.log(result); // 11
//     return result + 20;
//   })
//   .then(function (result) {
//     console.log(result); // 31
//   });
