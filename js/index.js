export default function func1() {
  console.log("This is func1 from js/index.js");
}

// const fun2  = function  (){
//     console.log("This is func2 from js/index.js");
// }

// fun2();

// const fun3 = () => {
//     console.log("This is func3 from js/index.js");
// }

// fun3();

// setTimeout(() => {
//     console.log("This is a timeout from js/index.js");
// }, 2000);

const arr = [1, 2, 3, 4, 5];

arr.map((n) => {
  console.log(n);
});
const arr2 = arr.filter((n) => {
  return n % 2 != 0;
});
console.log(arr2);
