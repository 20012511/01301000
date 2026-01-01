const portfolioItems = [
  {
    id: 'p1',
    title: 'HEED',
    category: 'UI UX Case Study',
    imageUrl: 'images/portfolio images/p1.png',
    videoUrl: 'https://www.dropbox.com/scl/fi/yq7vdhg1pzj8lqgbp4zr2/p1.mp4?rlkey=k9vv74s9jjm9gao7ntlkqawph&st=d3i8gy6q&raw=1', // Example video
    tags: ['Figma', 'Photoshop', 'Illustrator']
  },
  ,
  {
    id: 'p2',
    title: 'Fly way',
    category: 'Travel Agency Website Design',
    imageUrl: 'images/portfolio images/p2.png',
    videoUrl: 'https://www.dropbox.com/scl/fi/ieb7rvuv77rsmots5azwg/p2.mp4?rlkey=3477dgxypywyba9zhuxoe4ass&st=q2409ibj&raw=1',
    tags: ['Figma']
  },
  {
    id: 'p3',
    title: 'HEED',
    category: 'UI UX Case Study',
    imageUrl: 'images/portfolio images/p3.png',
    videoUrl: 'https://www.dropbox.com/scl/fi/piwrv76e2mr5kvweqjwht/p3.mp4?rlkey=ea2koggh9h8co0i0bs6dpenev&st=hhjubd8l&raw=1',
    tags: ['Figma', 'Photoshop', 'Illustrator']
  },
  {
    id: 'p4',
    title: 'Fly way',
    category: 'Travel Agency Website Design',
    imageUrl: 'images/portfolio images/p4.png',
    videoUrl: 'https://www.dropbox.com/scl/fi/9kam2njsr7967cl4wn066/p4.mp4?rlkey=9zgm9va75qfiv3oo33h8pxsjv&st=fg9drl75&raw=1',
    tags: ['Figma']
  },
  {
    id: 'p5',
    title: 'HEED',
    category: 'UI UX Case Study',
    imageUrl: 'images/portfolio images/p5.png',
    videoUrl: 'https://www.dropbox.com/scl/fi/32zgt0wwc51b6b4qacn16/p5.mp4?rlkey=2c12xt35ojudpne019akiktf9&st=t3d7f0xd&raw=1',
    tags: ['Figma', 'Photoshop', 'Illustrator']
  },
  {
    id: 'p6',
    title: 'Fly way',
    category: 'Travel Agency Website Design',
    imageUrl: 'images/portfolio images/p6.png',
    videoUrl: 'https://www.dropbox.com/scl/fi/etjzbv4ny9vp6662hg5zr/p6.mp4?rlkey=l11ywq8nlwvelzourr4ml0hl0&st=4q0a00ii&raw=1',
    tags: ['Figma']
  },
  // {
  //   id: 'p7',
  //   title: 'HEED',
  //   category: 'UI UX Case Study',
  //   imageUrl: 'https://picsum.photos/seed/food/800/600',
  //   videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  //   tags: ['Figma', 'Photoshop', 'Illustrator']
  // },
  // {
  //   id: 'p8',
  //   title: 'Fly way',
  //   category: 'Travel Agency Website Design',
  //   imageUrl: 'https://picsum.photos/seed/3dchar/800/600',
  //   videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  //   tags: ['Figma']
  // }
  // Add videoUrl to other items...
]

const grid = document.getElementById('portfolioGrid');

portfolioItems.forEach(item => {
  const div = document.createElement('div');
  div.className = 'portfolio-item';

  div.innerHTML = `
      <div class="portfolio-image-box">
        <button class="sound-toggle" aria-label="Toggle Sound">
          <svg class="speaker-on" fill="currentColor" viewBox="0 0 24 24" style="display: none;"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
          <svg class="speaker-off" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.41.32-.85.59-1.32.82v2.05c1.02-.27 1.97-.74 2.8-1.39L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
        </button>

        <video class="portfolio-video" 
               src="${item.videoUrl}" 
               loop 
               playsinline 
               preload="auto" 
               muted>
        </video>
        
        <img src="${item.imageUrl}" alt="${item.title}" class="portfolio-img" />

        <div class="tag-container">
          ${item.tags.map(tag => `<span class="badge2">${tag}</span>`).join('')}
        </div>
      </div>

      <div class="portfolio-info">
        <div>
          <h3 class="item-title">${item.title}</h3>
          <p class="item-category">${item.category}</p>
        </div>
        <div class="arrow-btn">
          <svg class="arrow-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    `;

  const video = div.querySelector('.portfolio-video');
  const soundBtn = div.querySelector('.sound-toggle');
  const onIcon = soundBtn.querySelector('.speaker-on');
  const offIcon = soundBtn.querySelector('.speaker-off');

  // Hover logic
  div.addEventListener('mouseenter', () => {
    video.play().catch(() => { /* Handle auto-play restrictions */ });
  });

  div.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });

  // Sound toggle logic
  soundBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents triggers on parent elements
    video.muted = !video.muted;
    
    // Toggle icon visibility
    onIcon.style.display = video.muted ? 'none' : 'block';
    offIcon.style.display = video.muted ? 'block' : 'none';
  });

  grid.appendChild(div);
});