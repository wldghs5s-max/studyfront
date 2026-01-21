function insertBoard(){

    //유저 인풋을 통해 입력받은 데이터들로, vo만들기
    const title = document.querySelector("input[name=title]").value;
    const content = document.querySelector("textarea[name=content]").value;
    const createdAt = new Date();

    const vo = {title, content, createdAt};

    //배열 준비하기 (기존 배열 가져올 것, 혹시 기존 배열이 없다면 새로만들기)
    let arr = JSON.parse(localStorage.getItem("boardVoList"));
    if(!arr){arr = [];}
    //배열에 vo추가하기
    arr.push(vo);

    //로컬스토리지에 데이터 채우기
    localStorage.setItem("boardVoList",JSON.stringify(arr));
    alert("게시글 등록 성공");

    document.querySelector("input[name=title]").value = "";
    document.querySelector("textarea[name=content]").value = "";
}
