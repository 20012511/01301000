window.addEventListener('load', () => {
  const MARQUEE_ITEMS = [
    'Fast Delivery',
    'Creative Design',
    'Digital Marketing',
    'Brand Strategy',
    'Web Development'
  ];

  const track1 = document.getElementById('marqueeTrack1');

  if (track1) {
    // Duplicate array for a seamless loop
    const repeated1 = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

    repeated1.forEach(item => {
      const div = document.createElement('div');
      div.className = 'marquee-item1';
      div.innerHTML = `
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2l2.39 6.91H21l-5.46 3.97 2.09 6.87L12 15.82 6.36 19.75l2.09-6.87L3 8.91h6.61L12 2z"/>
          </svg>
          <span>${item}</span>
        `;
      track1.appendChild(div);
    });

    // --- Animation Logic ---
    let x1 = 0;
    const speed1 = 0.8; // Adjust speed here
    let paused1 = false;

    track1.addEventListener('mouseenter', () => (paused1 = true));
    track1.addEventListener('mouseleave', () => (paused1 = false));

    function animateMarquee1() {
      if (!paused1) {
        x1 -= speed1;
        track1.style.transform = `translateX(${x1}px)`;

        // Reset when half the track has passed for infinite loop
        if (Math.abs(x1) >= track1.scrollWidth / 2) {
          x1 = 0;
        }
      }
      requestAnimationFrame(animateMarquee1);
    }

    animateMarquee1();
  }
});