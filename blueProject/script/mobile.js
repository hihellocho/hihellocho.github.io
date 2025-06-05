(function(){

// header
gsap.from(".title>li",{
  y:-100,
  opacity:0,
  stagger:0.2,
  duration:1,
  delay:1
});

// arrow 화살표가 위에서 아래로 이동 후-> 1번 화살표 실행 되면서 2번 화살표 실행
const tl3 = gsap.timeline({repeat: -1});
tl3.to(".arrow > p",{
  y:10,
  opacity: 1,
  stagger:0.2,
  duration:0.5,
  ease: "power2.out"
})
.to(
  ".arrow > p",{
  y:10,
  opacity: 0,
  stagger:0.2,
  duration:0.5,
  ease: "power2.out"
},"-=0.2");

// about me 에 들어가는 텍스트들
// 사이즈가 작아지고 안보였다가 해당 항목이 보이면 커지면서 보이도록
const $aboutMsg = document.querySelectorAll(".about-wrap .info > p");
$aboutMsg.forEach((msg)=>{
  gsap.from(msg,{
  opacity: 0,
  scale:0.4,
  duration:1,
  scrollTrigger:{
  trigger: msg,
  start:"top 80%",
  toggleActions: "play reverse play reverse"
    }
  });
});

// // keyword 부분이 가로로 왔다가 갔다가 실행(1,3번째는 왼->오. 2번째는 오->왼)
const $keywordList = document.querySelectorAll(".keyword > li");
// $keywordList.forEach((elem, idx)=>{
//   const posX = (idx === 1) ? 50 : -50;
//   gsap.fromTo(elem, {
//     x: posX,
//   }, {
//     x: -posX,
//     duration: 1.5,
//     delay: idx*0.2,   // 인덱스 값에 0.2초정도 딜레이 주기
//     repeat:-1,
//     yoyo: true,  // 왔다갔다
//     ease: "none" // 일정속도
//   });
// });
// 타임라인으로 써보는 방식
const tl2 = gsap.timeline({repeat:-1, yoyo:true});
tl2.to($keywordList,{
  x:(i)=>(i === 1 ? -50 : 50),
  duration: 0.5,
  ease: "sine.inOut",
  stagger: {
    each:0.2
  }
});

// project 영역의 .item 들은 아래에서 올리면서 보이도록
const $projects = document.querySelectorAll("#projects >.project-wrap");
$projects.forEach((article)=>{
  const $item = article.querySelectorAll(".item");
  $item.forEach((item)=>{
    gsap.from(item, {
      y:100,
      opacity:0,
      duration: 1,
      ease:"power3.out",
      scrollTrigger:{
        trigger:item,
        start:"top 80%",
        end:"top 40%",
        scrub: true
      }
    });
  });
});

// skills li 작은상태에서 하나씩 올라오게
const $shapes =document.querySelectorAll(".skill-item > li")
gsap.from($shapes,{
  scale:0.5,
  opacity:0,
  duration:0.5,
  stagger:0.2,
  ease:"bounce.out",
  scrollTrigger:{
    trigger:"#skills",
    start:"top 80%",
    toggleActions: "play reverse play reverse"
  }
});

//footer
gsap.fromTo("footer",{
  backgroundColor:"#2957E2"
}, {
  backgroundColor:"#eeeeee",
  duration:0.5,
  ease:"power2.out",
  scrollTrigger:{
    trigger:"footer",
    start:"top 70%",
    end:"bottom bottom",
    scrub:true,
    toggleActions:"play none none none"
  }
});

// 첫번째 링크 버튼 애니
gsap.to(".links > li",{
  backgroundColor:(i)=>(i=== 0 ? "#2957E2" : "#eeeeee"),
  color:(i)=>(i=== 0 ? "#eeeeee" : "#2957E2"),
  borderColor:(i)=>(i=== 0 ? "#eeeeee" : "#2957E2"),
  duration:2,
  repeat:-1,
  yoyo:true,
  ease:"power1.inOut",
  scrollTrigger:{
    trigger:"footer",
    start:"top 50%",
    toggleActions:"play none none none"
  }
});

})();

// 링크버튼 애니랑 같은데 중복되는 것 때문에 위에 콜백함수로
// gsap.to(".links > li:nth-child(1)",{
//   backgroundColor:"#2957E2",
//   color:"#eeeeee",
//   borderColor:"#2957E2",
//   duration:1,
//   repeat:-1,
//   yoyo:true,
//   ease:"power1.inOut",
//   scrollTrigger:{
//     trigger:"footer",
//     start:"top 50%",
//     toggleActions:"play none none none"
//   }
// });
// gsap.to(".links > li:nth-child(2)",{
//   backgroundColor:"#eeeeee",
//   color:"#2957E2",
//   borderColor:"#2957E2",
//   duration:1,
//   repeat:-1,
//   yoyo:true,
//   ease:"power1.inOut",
//   scrollTrigger:{
//     trigger:"footer",
//     start:"top 50%",
//     toggleActions:"play none none none"
//   }
// });