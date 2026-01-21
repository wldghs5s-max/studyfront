function f01(){
    const x = {};
    const y = new Date();
    console.log(y);
    console.log(y.getFullYear());
    console.log(y.getMonth());
    console.log(y.getDate());
    console.log(y.getDay());
    console.log(y.getHours());
    
    const result1 = x instanceof Object;
    const result2 = y instanceof Date;
    console.log(result2);
    
}
f01();

const target = document.querySelector("#target").innerHTML;
console.log(target);
