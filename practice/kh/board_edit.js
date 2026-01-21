function setInitialData(){
    //data가져오기
    const no = localStorage.getItem("selectedBoardNo");
    const voList = JSON.parse(localStorage.getItem("boardVoList"));
    //인풋태그의 value에 게시글제목 넣기
    document.querySelector("input[name=title]").value = voList[no].title;
    //텍스트에리어 태그의 innerHTML에 게시글내용 넣기
    document.querySelector("textarea[name=content]").value = voList[no].content;
}

setInitialData();

function editBoard(){
    //게시글 번호 따오기
    const no = localStorage.getItem("selectedBoardNo");
    //로컬스토리지에서 기존voList갖고오기
    const voList = JSON.parse(localStorage.getItem("boardVoList"));
    //제목부분 인풋 밸류 할당
    const title = document.querySelector("input[name=title]").value;
    //내용부분 텍스트에리어 밸류 컨텐트에 할당
    const content = document.querySelector("textarea[name=content]").value;
    //현재시간체크
    const createdAt = new Date();
    //vo에 넣기 사실 안넣어도됨
    const vo = {title,content,createdAt};
    //voList의 no번째 항목들에 새로 받은 밸류값 재할당
    voList[no].title = vo.title+"(수정됨)";
    voList[no].content = vo.content;
    voList[no].createdAt = vo.createdAt;
    //변경된 voList JSON으로 스트링화 시켜서 로컬스토리지에 저장
    localStorage.setItem("boardVoList", JSON.stringify(voList));
    alert("변경완료!");
    //상세보기 페이지 출력
    location.href = "./board_detail.html";
}