function f01(){
    const arr = ["java","html","css"];
    arr[0] = 'one';
    console.log(arr);
    
}
// f01();

function f02(){
    const arr = ['카리나','윈터','차은우','강동원'];
    //indexOf 위치찾기
    const result = arr.indexOf("차은우");
    console.log(result);
    
}
// f02();
function f03(){
    const arr = ['카리나','윈터','차은우','강동원'];
    const arr2 = ['고준희','한예슬','장원영'];
    const arr3 = ['심원용','심투용'];
    //concat 배열합치기
    const result = arr.concat(arr2,arr3);
    console.log(result);
    console.log(typeof(result));
    
}
// f03();

function f04(){
    const arr = ['카리나','윈터','차은우','강동원'];
    const arr2 = ['고준희','한예슬','장원영'];
    //join 문자열로 합치기
    const result = arr.join("");
    console.log(result);
    
}
// f04();

function f05(){
    const arr = ['카리나','윈터','차은우','강동원'];
    const arr2 = ['고준희','한예슬','장원영'];  
    //revers 배열순서 뒤집기 , 원본까지 뒤집어버림
    const result = arr.reverse();
    console.log(result);
    
}
// f05();

function f06(){
    const arr = ['카리나','윈터','차은우','강동원'];
    const arr2 = ['고준희','한예슬','장원영'];  
    //sort 가나다순으로 출력, 원본도 바뀜
    const result = arr.sort();
    console.log(result);
}
// f06();

function f07(){
    const arr = ['카리나','윈터','차은우','강동원'];
    const arr2 = ['고준희','한예슬','장원영'];  
    //push(), pop() 배열에 추가하기 , 배열에서 후열 빼서 반환하기 둘다 원본건드림
    arr.push("김태희");
    arr.push("전지현");
    arr.push("한예슬");
    console.log(arr);

    const result = arr.pop();
    console.log(result);
    console.log(arr);
    
}
// f07();

function f08(){
    const arr = ['카리나','윈터','차은우','강동원'];
    const arr2 = ['고준희','한예슬','장원영'];  
}
// f08();

function f09(){
    const arr = ['카리나','윈터','차은우','강동원'];
    const arr2 = ['고준희','한예슬','장원영'];    
    //shift(), unshift() 왼쪽 밀면서 0번칸 빼내서 반환, 0번칸에 추가하면서 오른쪽으로 밈 
    const result = arr.shift();
    console.log(result);
    console.log(arr);
    arr.unshift("심원용");
    console.log(arr);
    
}
// f09();
function f10(){
    const arr = ['카리나','윈터','차은우','강동원'];
    const arr2 = ['고준희','한예슬','장원영'];    
    //slice()  n번부터n번까지 잘라내기 원본에는 영향없음
    const result = arr.slice(1,3);
    console.log(result);
    console.log(arr);
    
    
}
// f10();
function f11(){
    const arr = ['카리나','윈터','차은우','강동원'];
    const arr2 = ['고준희','한예슬','장원영'];   
    //splice() n번부터 n개 잘라내기 원본에는 잘라낸 나머지만 남게됨, 3번째 이후 인자값 넣을경우 원본에추가
    //const result = arr.splice(0,3);
    const result = arr.splice(1,1);
    console.log(result);
    console.log(arr);
    
}
f11();
function f12(){
    const arr = ['카리나','윈터','차은우','강동원'];
    const arr2 = ['고준희','한예슬','장원영'];    
}
//f12();