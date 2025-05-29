//객체 가져오기
const $nextBtn = document.querySelector(".next");
const $prevBtn = document.querySelector(".prev");
const $sectionWrap = document.querySelector(".section-wrap");
const $sectionList = document.querySelectorAll(".section-wrap > section");
const $btnMenu = document.querySelectorAll(".btn-menu > button");

//변수
const sectionWidth = 1318;
let current = 1;

//초기위치설정
gsap.set(".section-wrap > section", { x: -sectionWidth * current });


//★ 1번째 이미지 복제 -> 맨 뒤에 추가
const firtstClone = $sectionList[0].cloneNode(true);
$sectionWrap.appendChild(firtstClone);
//★ 3번째 이미지 복제 -> 맨 앞에 추가
const lastClone = $sectionList[$sectionList.length-1].cloneNode(true);
$sectionWrap.insertBefore(lastClone,$sectionWrap.firstChild);




//★다음버튼 클릭
$nextBtn.addEventListener("click", () => {
  current++;
  gsap.to(".section-wrap > section", {
    x: -sectionWidth * current,
    duration: 0.5,
    //마지막에 호출되는 함수
    onComplete: () => {
      if (current === 4) {
        current = 1;
        gsap.set(".section-wrap > section", { x: -sectionWidth * current });
      }
      updateBtnMenu();
    },
  });
});

//★이전버튼 클릭
$prevBtn.addEventListener("click", () => {
  current--;
  gsap.to(".section-wrap > section", {  
    x: -sectionWidth * current,
    duration: 0.5,
    onComplete: () => {
      if (current === 0) {
        current = 3 ;
        gsap.set(".section-wrap > section", { x: -sectionWidth * current });
      }
      updateBtnMenu();
    },
  });
});


//★숫자버튼에 마우스 올려 움직이면 -> 숫자버튼 & 이미지도 같이 이동
$btnMenu.forEach((elem) => {
  elem.addEventListener("mouseenter",()=>{
    $btnMenu[1].click();
    current = Number(elem.dataset.index);
    gsap.to($sectionList,{
      x:-(sectionWidth)*current,
      duration:0.5
    });
    updateBtnMenu();
  })
});  

//★숫자버튼 이미지에 따라 이동
const updateBtnMenu = () => {
  $btnMenu.forEach((elem) => {
    elem.classList.remove("active");
  });
  $btnMenu[current-1].classList.add("active");
};