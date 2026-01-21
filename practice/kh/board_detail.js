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

