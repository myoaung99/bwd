// const fruits = ["apple", "orange", "mango", "guava", "pieapple"];

// const newArr = fruits.map((fruit, index) => {
//   console.log(index + " " + fruit);
//   return fruit + " - " + fruit.length;
// });

// const marks = [40, 65, 78, 34, 90, 19];
// const result = marks.map((m) => {
//   if (m >= 40) return "အောင်";
//   return "ကျ";
// });

// console.log(result);

// const myObj = {
//   name: "myo myint aung",
//   age: 21,
//   skill: ["python, html, javascript, css, bootstrap, ajax"],
// };

// const myJson = JSON.stringify(myObj);

// console.log(JSON.parse(myJson));

// console.log(myJson);

fetch("http://127.0.0.1:5500/myJson.json")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
