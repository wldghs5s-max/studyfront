// 익명함수
// const x = function(){
//     console.log("f01 called ~~~");
// };
// x();

//화살표 함수
// const x = ()=>{
//     console.log("zzzzzz");
// }
// x();


// function f01(x,y){
//     console.log(x);
//     console.log(y);    
//     console.log(arguments);
    
// }
// f01(10,20,30,40,50);

// function f01(){
//     x = ()=>{console.log("hello~~~");
//     };
//     x.name = "hong";
//     x.age = 20;
//     return x;
// }
// const result = f01();
// console.log(result);
// result();

//이발함수로 계산기 만들기
// function f01(){
//     const str = document.querySelector("#target").value;
//     const result = eval(str);
//     console.log(result);
    
// }

function f01(){
    const result = isNaN(111/'abc');
    console.log(result);
    
    
}
f01();