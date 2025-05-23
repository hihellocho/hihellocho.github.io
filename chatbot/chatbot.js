//객체 가져오기
const $input = document.querySelector("#start-word");
const $startBtn = document.querySelector(".start > button");

const $button = document.querySelector(".ment>i");
const $keyword = document.querySelector("#keyword");
const $ul = document.querySelector("ul.chating");


// 메인화면에서 start버튼 클릭이나, 인풋값 Enter 했을 때 -> section화면으로
// 처음 입력된 단어 -> 채팅창에 보여지게
const wordStartBtn = ()=>{
  const elem = $input.value;
  if (elem !== ""){
    const elemLi = document.createElement("li");
    elemLi.textContent = elem;
    $ul.appendChild(elemLi);
    //
    const $main = document.querySelector("main");
    $main.style.display="none";
    const $section = document.querySelector("section");
    $section.style.display="block";
  } else {
    alert("단어를 입력하세요");
    return;
  }
};


$startBtn.addEventListener("click", wordStartBtn);
$input.addEventListener("keydown",(e)=>{
  if(e.key === 'Enter'){
    $startBtn.click();
  }
});


// 메인화면에서 단어입력 안했을 때 alert창 뜨는
const wordInput = ()=>{
  const keyword = $keyword.value.trim();
  $keyword.value='';
  if(keyword === ''){
    alert("단어를 입력하세요");
    return;
  }
  // 이전문자입력
  const last = $ul.lastElementChild.textContent;
  const lastword = last[last.length - 1];
  const firstword = keyword[0];
   console.log(lastword, firstword);
   //
   if(lastword === firstword){
    const elem = document.createElement("li");
    elem.textContent = keyword;
    $ul.appendChild(elem);
   } else{
    alert("다릅니다");
   }
};

$button.addEventListener("click", wordInput);
$keyword.addEventListener("keydown",(e)=>{
  if(e.key === 'Enter'){
    $button.click();
  }
});