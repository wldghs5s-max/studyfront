function f01(){
    //테이블태그 내부에, 데이터 채워넣기

    //td 내용은 데이터로 채우기
    const boardVoList = JSON.parse(localStorage.getItem("boardVoList"));
    if(!boardVoList){
        return;
    }

    //tr > td*3 태그 채우기
    let str = "";
    for(let i = boardVoList.length-1 ; i>=0; i--){
        const vo = boardVoList[i];
        str += `
            <tr>
                <th><a href="./board_detail.html" onclick="setSelectedBoardNo(${i});">${i}</a></th>
                <td>${vo.title}</td>
                <td></td>
            </tr>
        `;
    }


    //main table tbody 가져오기
    const tbodyTag = document.querySelector("main table tbody");
    tbodyTag.innerHTML = str;

}
f01();

//상세조회 하려는 게시글 번호 기록하기
function setSelectedBoardNo(no){
    localStorage.setItem("selectedBoardNo", no);
    
}

