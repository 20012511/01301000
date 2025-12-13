document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item')
  const container = document.getElementById('scrollContainer')
  const sections = document.querySelectorAll('.service-card')

  // Scroll to section when clicking sidebar item
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.dataset.target
      const targetEl = document.getElementById(targetId)

      container.scrollTo({
        top: targetEl.offsetTop,
        behavior: 'smooth'
      })

      setActive(item.dataset.target)
    })
  })

  // Auto-highlight active section while scrolling
  container.addEventListener('scroll', () => {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect()
      const containerTop = container.getBoundingClientRect().top + 50

      if (rect.top < containerTop + 200 && rect.bottom > containerTop) {
        setActive(sec.id)
      }
    })
  })

  function setActive (id) {
    navItems.forEach(btn => btn.classList.remove('active'))
    document.querySelector(`[data-target="${id}"]`)?.classList.add('active')
  }
})
