document.addEventListener('DOMContentLoaded', () => {
    const levels = document.querySelectorAll('.ocean-level');
    const twinkleCount = 100;

    levels.forEach(level => {
        for (let i = 0; i < twinkleCount; i++) {
            const twinkle = document.createElement('div');
            twinkle.classList.add('twinkle');
            twinkle.style.top = `${Math.random() * 100}%`;
            twinkle.style.left = `${Math.random() * 100}%`;
            twinkle.style.animationDelay = `${Math.random() * 2}s`;
            level.appendChild(twinkle);
        }
    });
});

gsap.from("#image1",{
    y:100,
    duration:2,
    opacity:0,
    scrollTrigger:{
      trigger : "#abyss-desc-img",
      scroller : "body",
      // markers : true,
      start : "top 30%",
      end : "top 10%",
      scrub : 2,
    }
  })
  
  gsap.from(".creature-img-para-div-img",{
    y:-50,
    duration:2,
    opacity:0,
    stagger : 1,
    scrollTrigger:{
      trigger : "#creature-img-para",
      scroller : "body",
      // markers : true,
      start : "top 50%",
      end : "top 30%",
      scrub : 2,
    }
  })
  
  gsap.to("#shop-tshirt",{
    transform : "translateX(-65%)",
    duration:2,
    scrollTrigger:{
      trigger : "#shop-tshirt",
      scroller : "body",
      // markers : true,
      start : "top 40%",
      end : "top 10%",
      scrub : 2,
    }
  })
