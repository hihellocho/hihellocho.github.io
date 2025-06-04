gsap.registerPlugin(ScrollTrigger);

// 상단 .top은 실행이 되면 자연스럽게 위로 올라가도록
gsap.to("header > .top", {
  y:-100,
  opacity: 0,
  duration: 5,
  ease: "power2.out"
});
// ul > li 하단 문구 하나씩 나타나게 하기
const $bottom = document.querySelector("ul>li:nth-child(2)");
const bottomText = $bottom.textContent;
const textArr = bottomText.split("");  // 문자열을 각각 빈값으로 잘라서 만들어지게 하는
let createHTML = ''; 
textArr.forEach((chat)=>{
   // <span>C</span> <span>r</span> <span>e</span>...
  createHTML += `<span>${chat}</span>`;
});
$bottom.innerHTML = createHTML;
// 글자가 하나씩 나타나게 하기 2)
gsap.from("ul>li:nth-child(2)>span", {
  opacity:0,
  x:-100,
  stagger: 0.1,
  duration: 0.6,
  ease: "power2.out"
});

//span3~ span 끝까지. class를 동일하게 down이라는 클래스 추가
const $span = document.querySelectorAll("h1>span");
for(let i=2; i < $span.length; i++){
  $span[i].classList.add("down");
}

//h1태그에서 글씨들이 애니메이션 처리
const tl = gsap.timeline();
tl.from("h1>span:nth-child(1)",{
    rotateX: -180,
    opacity: 0,
    duration: 1,
    backgroundColor: "#fffaf0",
    ease: "power4.out"
})
.from("h1>span:nth-child(2)",{
  y:200,
  scale:0.7,
  rotation:360,
  opacity:0,
  duration: 1,
  onComplete:()=>{
    const elem = document.querySelector("h1>span:nth-child(2)");
    elem.textContent = 'e';
  }
})
.from(".down",{
  y:-100,
  opacity:0,
  duration:0.5,
  stagger:0.2
})
.from(".change",{
  scale:0.5,
  opacity:0,
  duration:0.3,
  ease:"power4.in"
})
.from(".change",{
  rotation:360,
  duration:2,
  repeat:-1,
  ease:"power4.out"
});

//하단 p태그들은 오른쪽-> 왼쪽으로 이동
gsap.from("p>span",{
  x: 600,
  opacity:0.5,
  duration:3,
  stagger:0.1,
  ease:"bounce.in"
});

gsap.to(".zigzag",{
  x:-30,
  y:-30,
  duration:2,
  repeat:-1,
  yoyo: true,
  ease:"power1.out"
});

// scrollTrigger 발생 :  timeline과 같이 발생 main > p 애니메이션
const tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:"main",
    start:"top 30%",
    markers: true
  }
});
tl2.from("main > p:nth-child(1)",{
  x:300,
  duration:1
})
.from("main > p:nth-child(3)",{
  x:-300,
  duration:1
})
.from("main > p:nth-child(4)", {
  y:-200,
  opacity:0,
  duration:1
})
.from("main > p:nth-child(2)",{
  scale:0.2,
  opacity:0,
  duration:1
});