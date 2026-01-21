function handleEnroll(){
    const person = handleInput();

    createCard(person);
}   

function handleInput(){
    const nick = document.querySelector("input[name=nick]").value.trim();    
    const phone = document.querySelector("input[name=phone]").value.trim();    
    
    if(nick === undefined|| phone===undefined|| nick===null|| phone===null || nick.length<=0 || phone.length<=0){
        alert("입력값을 확인하세요.")
        return;    
    }
    const person = {nick,phone};
    return person;
}


function createCard(person){
    //구조분해 할당
    const{nick,phone} = person;

    const card = document.createElement("div");
    card.classList.add("card");
    //리무브,토글처리 해볼것 클래스리스트
    const nickDiv = document.createElement("div");
    const phoneDiv = document.createElement("div");

    const nickNode = document.createTextNode(nick);
    const phoneNode = document.createTextNode(phone);

    nickDiv.appendChild(nickNode);
    phoneDiv.appendChild(phoneNode);

    card.appendChild(nickDiv);
    card.appendChild(phoneDiv);

    const cardArea = document.querySelector("#card-area");
    cardArea.appendChild(card);
}