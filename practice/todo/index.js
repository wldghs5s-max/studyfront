function insertTodo(){
    const title = document.querySelector("input[name=title]").value;
    const vo = {
        "title" : title,
        "done" : true,
        "created_at" : new Date(),
    };

    let arr = JSON.parse(localStorage.getItem("todoVoList"));
    if(!arr){arr = [];}
    arr.push(vo);

    localStorage.setItem("todoVoList",JSON.stringify(arr));

    alert("등록 완료 !");
    document.querySelector("input[name=title]").value = "";
}

function displayVoList(){
    const voListTable = document.querySelector("#voListTable");
    const tbody = voListTable.children[1];
    const voList = JSON.parse(localStorage.getItem("todoVoList"));

    let str = "";
    for(let i = 0; i<voList.length; ++i){
         str += `
        <tr onclick="displayVoDetail(${i});">
            <td>${i+1}번</td>
            <td>${voList[i].title}</td>
            <td><input type="checkbox" value="${i+1}" onclick="f01(event);"></td>
        </tr>
      `;
    }
    
    tbody.innerHTML = str;
}

// innerHTML에서 변수 받아올때 아규먼츠에는 voList는 받기 어렵다.
function displayVoDetail(no){
    const voList = JSON.parse(localStorage.getItem("todoVoList"));
    const vo = voList[no];

    document.querySelector("#todoDetailNo").innerHTML = no+1;
    document.querySelector("#todoDetailTitle").innerHTML = vo.title;
    // 3항연산자 활용 vo.done이 true면 체크드 활성화 false면 빈칸활성화
    document.querySelector("#todoDetailDone").innerHTML = `<input type="checkbox" ${vo.done ? "checked":""} onchange="saveDone();">`;
    document.querySelector("#todoDetailCreatedAt").innerHTML = vo.created_at;

    document.querySelector("#modal").classList.add("active");

}

window.onload = function(){
    displayVoList();
}
function closeModal(){
    document.querySelector("#modal").classList.remove("active");
    
}
function f01(evt){
    evt.stopPropagation();
}

function saveDone(){
    const no = document.querySelector("#todoDetailNo").innerHTML-1;
    const done = document.querySelector("#todoDetailDone").children[0].checked;
    
    const voList = JSON.parse(localStorage.getItem("todoVoList"));
    voList[no].done = done;
    localStorage.setItem("todoVoList" ,JSON.stringify(voList));
}

//단일 삭제
function deleteTodo(no, event){
    event.stopPropagation();
    const voList = JSON.parse(localStorage.getItem("todoVoList"));
    voList.splice(no,1);
    
    localStorage.setItem("todoVoList",JSON.stringify(voList));
    alert("삭제 완료!");
    displayVoList();
}

//다중삭제
function deleteTodos(){
    const trTagList = document.querySelector("#voListTable").children[1].children;
    const targetNoArr = [];

    for(const trTag of trTagList){
        const inputTag = trTag.children[2].children[0];
        if(inputTag.checked){
            targetNoArr.push(inputTag.value);
        }
    }
    console.log(targetNoArr);
    targetNoArr.reverse();
    
    const todoVoList = JSON.parse(localStorage.getItem("todoVoList"));
    for(no of targetNoArr){
        todoVoList.splice(no-1,1);
    }

    localStorage.setItem("todoVoList", JSON.stringify(todoVoList));
    displayVoList();
}













