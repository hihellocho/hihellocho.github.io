gsap.registerPlugin(ScrollTrigger);


let currentScript = ''; //현재 읽고 있는 스크립트를 저장해야 한다

// 창 사이즈 별 js 파일 가져오기***************
const checkDevice = ()=>{
  const device = window.innerWidth <= 768 ? "mobile" : "pc";
  if( currentScript === device ){
    return;
  }
  //이전 스크립트 제거
  const $prev = document.querySelector(`script[data-script]`);
  if( $prev){
    $prev.remove();
    location.reload();
  }
  const script = document.createElement("script");
  script.src = `./script/${device}.js`;
  script.setAttribute("data-scrip", "true");
  document.body.appendChild(script);
  //현재 상태를 업데이트 하는 작업
  currentScript = device;
}

window.addEventListener("load",()=>{
  checkDevice();
});
window.addEventListener("resize",checkDevice);