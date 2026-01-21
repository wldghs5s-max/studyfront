const btn11 = document.querySelector("#btn1-1");
const btn12 = document.querySelector("#btn1-2");
const btn13 = document.querySelector("#btn1-3");
const btn2 = document.querySelector("#btn2");
const loginBtn = document.querySelector("input[type=submit]");



btn11.onclick = ()=>{
    console.log("고전 ~");
    
};
function f12(){
    console.log("인라인 ~");
    
};
btn13.addEventListener("click" , function(){
    console.log("표준 ~ ");
});
// 이벤트리스너 실행시 아래와같은 함수가발동된다
// function addEventListener(str, callback함수){
//     if(이벤트객체.tyoe === str){
//         callback함수(이벤트객체);
//     }
// }

btn2.addEventListener("click", function( evt ){
    console.log("btn2 클릭 ~~~");
    console.log(evt);
    
    evt.target.style.backgroundColor = "red";

});
// function f2(t){
//     console.log("f2 called ~~~");
//     t.style.backgroundColor = "green";
// }
function f123(){
    const result = confirm("정말로 이동하시겠습니까?");
    return result;
}
function f32(evt){
    const userId = document.querySelector("input[name=userId]").value;
    const userPw = document.querySelector("input[name=userPw]").value;
    
    if(userId.length<4){
        alert("아이디 너무 짧음");
        evt.preventDefault();
        return;
    }
    if(userPw.length<4){
        alert("비밀번호 너무 짧음");
        evt.preventDefault();
        return;
    }
}
loginBtn.addEventListener("click",f32);


const btnr11 = document.querySelector("#btn1_1");
const btnr12 = document.querySelector("#btn1_2");
const btnr13 = document.querySelector("#btn1_3");
const btnr2 = document.querySelector("#btnr2");

btnr11.onclick = ()=>{
    console.log("고전~");
}
function fr12(){
    console.log("인라인 ~");
}
btnr13.addEventListener("click", function(){
    console.log("표준!!");
    
});
btnr2.addEventListener("dblclick", fr2);
function fr2(x){
    console.log("fr2 더블클릭됨");

    x.target.style.backgroundColor = "blue";
}
function fr3(x){
    console.log(x);
    x.style.backgroundColor = "black";
}



    
    
function checkValid(){
    //가져오기
    const rId = document.querySelector("input[name=rId]").value;
    const rPw = document.querySelector("input[name=rPw]").value;
    const rNick = document.querySelector("input[name=rNick]").value;

    const idRegExp = /^[a-z0-9]{4,8}$/;
    const isOk = idRegExp.test(rId);
    const pwRegExp = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{4,12}$/;
    const nickRegExp = /^[가-힣]{2,4}$/;

    !pwRegExp.test(rPw)
    
    !nickRegExp.test(rNick)

    //아이디 검증
    if(!/[a-z0-9]{4,8}/.test(rId)){
        alert("아이디 잘못됨");
        return false;
    }
    //패스워드 검증
    if(!pwRegExp.test(rPw)){
        alert("비밀번호 잘못됨");
        return false;
    }
    if(!nickRegExp.test(rNick)){
        alert("닉네임 잘못됨");
        return false;
    }
}


