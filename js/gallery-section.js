gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add("(min-width: 769px)", () => {
  const galleryTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.gallery-section',
      start: 'top 15%',
      scrub: 1,
      endTrigger: '.gallery-section',
      end: '+=80%',
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      // markers: true
    }
  });

  // 1️⃣ Animate expansion
  galleryTL.to('.img-center', {
    width: '90vw',
    ease: 'none'
  }, 0);

  // 2️⃣ HOLD STATE
  galleryTL.to({}, {
    duration: 0.4
  });
});

mm.add("(max-width: 768px)", () => {
  gsap.set('.img-center', { width: '100%' });
});

// window.addEventListener('load', () => {
//   const video = document.querySelector('.img-center video');
  
//   // Attempt to play
//   const playPromise = video.play();

//   if (playPromise !== undefined) {
//     playPromise.catch(error => {
//       // Auto-play was prevented
//       console.log("Autoplay prevented. Showing play button or handling logic.");
//     });
//   }
// });