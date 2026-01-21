const divArr = document.querySelectorAll("main>div");
console.log(divArr);

const boardVoList = JSON.parse(localStorage.getItem("boardVoList"));
const no = localStorage.getItem("selectedBoardNo");
const vo = boardVoList[no];

// const title = vo.title;
// const content = vo.content;
// const createdAt = vo.createdAt;
const {title,content,createdAt} = vo;

divArr[0].innerHTML = title;
divArr[1].innerHTML = content;
divArr[2].innerHTML = createdAt;
//게시글 삭제(로컬스토리지에서 vo제거)
function deleteBoard(){
    const result = confirm("정말로 삭제합니까?");
    if(!result){return;}
    //제거할 vo 번호 얻기
    const delNo = localStorage.getItem("selectedBoardNo");

    //로컬스토리지에서 voList 얻어오기
    const voList = JSON.parse(localStorage.getItem("boardVoList"));
    //voList에서 특정 인덱스의 요소 제거
    voList.splice(delNo,1);
    
    //정리된 voList를 다시 로컬스토리지에 넣기
    localStorage.setItem("boardVoList", JSON.stringify(voList));
    //페이지 이동(목록조회 페이지로 이동)
    location.href = "./board_list.html";
}
