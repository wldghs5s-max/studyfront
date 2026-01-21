// localStorage.setItem("menu", "chicken");
// localStorage.setItem("price", 23000);

// const x = localStorage.getItem("menu");
// const y = localStorage.getItem("price");

// console.log(x);
// console.log(y);

// localStorage.clear();

// const str = `{ "num" : 123 }`;
// const obj = { num : 123 };
// const obj2 = JSON.parse(str);  //문자열 > 객체

// console.log(str);
// console.log(obj);
// console.log(obj2);

// //객체 -> 문자열

// const x = JSON.stringify(obj);
// console.log(x);

const title = "해리포터";
const price = 3000;

const obj = {
  title ,
  price ,
};
console.log(obj);

localStorage.setItem("book", JSON.stringify(obj));

const voStr = localStorage.getItem("book");
const vo = JSON.parse(voStr);
console.log(vo.title);

const bookVo = {};
const voArr = [bookVo, bookVo, bookVo, bookVo, bookVo, bookVo,];
localStorage.setItem("bookVoArr" , JSON.stringify(voArr));

