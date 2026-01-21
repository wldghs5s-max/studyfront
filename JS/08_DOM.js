
//<h1>안녕</h1>          --->result01
function createNode01(){
    //h1 노드 만들기
    const elemNode = document.createElement("h1");
    const markNode = document.createElement("mark");
    //안녕 노드 만들기
    const textNode = document.createTextNode("안녕");
    //안녕 노드를 h1노드의 자식으로 넣기
    elemNode.appendChild(markNode);
    markNode.appendChild(textNode);
    //result01 노드의 자식으로 h1노드 넣기
    const result01 = document.querySelector("#result01");
    result01.appendChild(elemNode);
}

//<img src="~~~" alt="~~~"/>    --->result02
function createNode02(){    
    const imgTag = document.createElement("img");
//    imgTag.setAttribute("src","https://img.hankyung.com/photo/202508/03.39959431.1.jpg");
    imgTag.src = "https://img.hankyung.com/photo/202508/03.39959431.1.jpg";
    imgTag.setAttribute("width" ,200);
    imgTag.height = "200";
    console.log(imgTag.getAttribute);
    
    const result02 = document.querySelector("#result02");
    result02.appendChild(imgTag);
}

function removeNode01(){
    //칠드런은 배열타입
    const result01 = document.querySelector("#result01");
    result01.innerHTML = "";
    // const x = document.querySelector("#result01").children;
    // console.log(x);
    // for(let i in x){
    //     x[0].remove();
    // }
    ;
}
function removeNode02(){

    const x  = document.querySelector("#result02").children;
    x[0].remove();

 //   const x  = document.querySelector("#result02")
 //   x.innerHTML = "";
}