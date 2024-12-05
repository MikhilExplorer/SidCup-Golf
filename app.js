let cursor = document.querySelector(".cursor")
let main=document.querySelector(".main")
let blur=document.querySelector(".cursor-blur")
document.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
        x:dets.x,
        y:dets.y,
    })
    gsap.to(".cursor-blur",{
        x:dets.x-250,
        y:dets.y-250,
    })
})
gsap.to(".nav",{
    backgroundColor:"black",
    height:"15vh",
    padding: "3.75vw 5vw",
    duration:0.5,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -7%",
        end:"bottom 12%",
        scrub:2
    }
})
gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -7%",
        end:"top -70%",
        scrub:2
    }
})
gsap.from(".aboutus",{
    y:"50",
    opacity:"0",
    duration:"0.75",
    scrollTrigger:{
        trigger:".aboutus",
        scroller:"body",
        // markers:true,
        start:"top 95%",
  
    }
})
gsap.from(".cards",{
    y:"50",
    opacity:"0",
    duration:"0.75",
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        // markers:true,
        start:"top 97%",
  
    }
})