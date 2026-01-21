// var쓰지말고 let으로 사용
// var가 붙어있으면 호이스팅이 일어난다. 함수바깥에 변수를 만들면 전역변수 취급된다.
//function으로 만든 함수는 자동 호이스팅 된다.
function f01(){
    let x = 20;
    console.log(x);
}
let x=10;
// f01();
// console.log(x);
// 
function tyoeTest(){
    let x;
    console.log(typeof(x));
    
}
// tyoeTest();
function f01(){
console.log("zzz");
}

function plusTest(){
    const x = 3+3+'3';
    console.log(x);
    
}
// plusTest();

function castingTest(){
    const x = parseInt('10');
    console.log(typeof(x));   
}
// castingTest();

function operTest(){
    const x = 10;
    const y = '10';
    console.log(x !== y);
    
}
// operTest();

function forInTest(){
    const arr = [100,200,300];
    // for(i=0;i<arr.length;++i){
    //     console.log(arr[i]);
    // }

    // for(const i in arr){
    //     console.log(arr[i]);
    // }

    for(const x of arr){
        console.log(x);
        
    }
}
forInTest();




























