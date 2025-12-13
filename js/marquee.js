const MARQUEE_ITEMS = [
  'Fast Delivery',
  'Creative Design',
  'Digital Marketing',
  'Brand Strategy',
  'Web Development'
]

const track = document.getElementById('marqueeTrack1')

// Duplicate array 4 times for smooth infinite loop
const repeated1 = [
  ...MARQUEE_ITEMS,
  ...MARQUEE_ITEMS,
  ...MARQUEE_ITEMS,
  ...MARQUEE_ITEMS
]

repeated1.forEach(item => {
  const div = document.createElement('div')
  div.className = 'marquee-item1'

  div.innerHTML = `
      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l2.39 6.91H21l-5.46 3.97 2.09 6.87L12 15.82 6.36 19.75l2.09-6.87L3 8.91h6.61L12 2z"/>
      </svg>
      <span>${item}</span>
    `

  track.appendChild(div)
})
