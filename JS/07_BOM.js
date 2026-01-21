
const btn01 = document.querySelector("#btn01");
btn01.addEventListener("click" , f01);

function f01(){
    //open();
    //window.open("https://www.naver.com","abc");
    window.open("http://192.168.20.157:5500/JS/07_BOM.html","abc",'width=900, height=500');
}

function testTimeOut(){
    const temp = window.open("http://192.168.20.157:5500/JS/07_BOM.html","abc",'width=900, height=500');
    setTimeout(()=>{
        console.log("팝업창 닫기");
        temp.close();
    }, 3000);
}

let x;
function testInterval(){
    x = setInterval(()=>{
        console.log("헬로");
    },3000);
}
function testClearInterval(){
    console.log("클리어 인터벌 호출 !");
    clearInterval(x);
    
}
function testLocation(){
    console.log("location : ", location);
    location.href = "https://naver.com";
}
function testHistory(){
    history.go(1);
    // history.back();
    // history.forward();
    
}
function testNavigator(){
    console.log(navigator);
    
}
function testScreen(){
    console.log(screen);
    
}