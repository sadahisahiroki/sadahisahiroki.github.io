/**
* setTimeoutAsync
*
* @param {function} func 実行したい関数
* @param {number} delay 何秒実行を遅らせたいか
*
*/

//
// 使い方
//
// setTimeoutAsync(seq.sequence00, 0)
//   .then(()=>{
//     return seq.setTimeoutAsync(seq.sequence01, 5000);
//   })
//   .then(()=>{
//     return seq.setTimeoutAsync(seq.sequence02, 3000);
//   });
//

export function setTimeoutAsync(func, delay) {
  return new Promise((resolve) => { // (resolve, reject)
    setTimeout(() => {
      func();
      resolve();
    }, delay);
  });
}
