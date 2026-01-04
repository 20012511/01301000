// Wrap in window.onload to ensure scrollWidth is calculated after images/styles load
window.onload = () => {
  const testimonials = [
    {
      text: "They're like digital magicians!",
      avatar: 'https://picsum.photos/seed/user1/100/100'
    },
    {
      text: 'A total game-changer for us!',
      avatar: 'https://picsum.photos/seed/user2/100/100'
    },
    {
      text: "I can't stop recommending them.",
      avatar: 'https://picsum.photos/seed/user3/100/100'
    },
    {
      text: 'Professional, creative, and timely.',
      avatar: 'https://picsum.photos/seed/user4/100/100'
    },
    {
      text: 'The best investment we made.',
      avatar: 'https://picsum.photos/seed/user5/100/100'
    }
  ]

  const marqueeTrack10 = document.getElementById('marqueeTrack10')
  if (!marqueeTrack10) return // Safety check

  const repeated = [...testimonials, ...testimonials]

  repeated.forEach(item => {
    const div = document.createElement('div')
    div.className = 'testimonial-item10'
    div.innerHTML = `
        <img src="${item.avatar}" class="testimonial-avatar10" />
        <span class="testimonial-text10">${item.text}</span>
      `
    marqueeTrack10.appendChild(div)
  })

  let x = 0
  const speed = 0.5
  let paused = false

  marqueeTrack10.addEventListener('mouseenter', () => (paused = true))
  marqueeTrack10.addEventListener('mouseleave', () => (paused = false))

  function animate () {
    if (!paused) {
      x -= speed
      // Use setProperty for better performance with smooth scrollers
      marqueeTrack10.style.setProperty('transform', `translateX(${x}px)`)

      // Reset position when half the track has passed
      if (Math.abs(x) >= marqueeTrack10.scrollWidth / 2) {
        x = 0
      }
    }
    requestAnimationFrame(animate)
  }

  animate()
}
