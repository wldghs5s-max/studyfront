function f01(){
    const x = {
        "my name" : "김철수",
        age : 30 ,
        hobby : ["코딩","프로그래밍","개발"],
        hello : function(){
            console.log("안녕하세요~");
            
        }
    };
    console.log(x["my name"]);
    console.log(x.age);
    console.log(x['age']);   
    console.log(x.hobby[1]);
    console.log(x["hobby"][1]);
    console.log(x.hello);
    x.hello();
    //객체에 속성추가
    x.height = 183.2;
    x.weight = 79.3;
    //객체에 속성제거
    delete(x.height);
    delete(x.weight);
    x["this.hi"]="hi";
    console.log(x["this.hi"]);
    
}
// f01();

function f02(){
    const p1 = {
        name : "카리나",
        age : 20
    };
    const p2 = {
        name : "윈터",
        age : 23
    };
    const p3 = {
        name : "지젤",
        age : 20
    };
    const p4 = {
        name : "닝닝",
        age : 21
    };
    //배열안에 객체넣기
    const aesap = [p1,p2,p3,p4];
    console.log(aesap);
    
 }
 //f02();

 function f03(){
    p1 = new Member("카리나",20);
    p2 = new Member("윈터",21);
    p3 = new Member("닝닝",22);
    p4 = new Member("지젤",23);

    p1.sing();
    p2.sing();
    p3.sing();
    p4.sing();

    //생성자객체로 만든 객체는 프로토타입을 공유한다
    Member.prototype.dance = function(){
        console.log(`${this.name}의 춤추기 ~~~`);
    }
    p1.dance();
    p2.dance();
    p3.dance();
    p4.dance();

    console.log(Member.prototype);

 }
// f03();
//생성자 객체 클래스라고 생각할것
 function Member(name,age){
    this.name = name;
    this.age = age;
    this.sing = function(){
        console.log(`${name}의 노래하기 ~~~`);
    }
 }

 //캡슐화 예시
 function f04(){
    const x = new IdolGroup("아이유");
    console.log(x.getName());
    x.setName("소녀시대");
    console.log(x.getName());
    
 }
// f04();
//게터세터 캡슐화 작업
 function IdolGroup(a){
    let name = a;
    this.getName = function(){
        return name;
    };
    this.setName = function(n){
        name = n;
    }
 }

 function Hello(){}

 const a = new Hello();
 const b = new Hello();
 const c = new Hello();
 
 a.__proto__.nick = "김프로";
//  a.__proto__.hi=function(){
//     console.log(`반가워 나는 ${this.nick}야`);
//  }
  a.__proto__.hi=()=>{ //화살표 함수의 this는 윈도우와 바인딩된다.
    console.log(`반가워 나는 ${this.nick}이야`);
 }
 //this는 호출당시의 객체와 바인딩된다.
 a.nick = "김에이";
 b.nick = "김비";
 c.nick = "김씨";
//  Hello.prototype.hi();
//  c.hi();
//  b.hi();
//  a.hi();

// const dargon = {};
// dargon.age = 20;
// dargon.hi = a.hi;
// dargon.nick = "바보";
// dargon.hi();

  const temp = a.hi;
// 바인딩을 잃은 this는 window와 바인딩된다.
  window.nick = "김창문";
//  temp();
 

//  const o = new hello();
//  console.log(o.__proto__ === hello.prototype);
 
 
//  console.log(hello.prototype);
//  console.log(hello.prototype.constructor);
//  console.log(hello);
//  console.log(hello.prototype.constructor === hello);
 
