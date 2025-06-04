const tl = gsap.timeline();
gsap.set(".letter-P",{
  rotateX:-180,
  opacity:0,
  scale:0.9
});
gsap.set(".letter-r",{
  opacity:0,
  scale:0.7,
  y:100
});

tl.to(".letter-P",{
  opacity:1,
  rotateX:0,
  scale:1,
  duration:0.8
})
.to(".letter-r",{
  y:0,
  opacity:1,
  rotation:360,
  scale:1,
  duration:1,
  onComplete:()=>{
    const letter = document.querySelector(".letter-r");
    letter.textContent = "r";
  }
})
.to(".letter-r",{
  x:0,
  rotateY:360,
  duration:1,
  color:"#258532"
})
.from(".letter-o,.letter-j,.letter-c,.letter-e,.letter-t",{
  y:-300,
  opacity:0,
  duration:0.5,
  stagger:0.2,
  ease:"bounce.out"
});