// FAQ Data (converted from your constants)
const FAQ_DATA = [
  {
    question: 'WHAT INDUSTRIES DO YOU SPECIALIZE IN?',
    answer:
      'I have experience working across various industries including but not limited to technology, healthcare, fashion, hospitality, and non-profit organizations.'
  },
  {
    question: 'WHAT INDUSTRIES DO YOU SPECIALIZE IN?',
    answer:
      'Wait, this seems to be a duplicate in the design mockup, but typically I also specialize in FinTech and E-commerce solutions tailored for high conversion.'
  },
  {
    question: 'WHAT SERVICES DO YOU OFFER AS A DESIGNER?',
    answer:
      'I offer end-to-end product design, UI/UX audits, design systems, branding, and high-fidelity prototyping.'
  },
  {
    question: 'CAN YOU PROVIDE EXAMPLES OF YOUR PREVIOUS WORK?',
    answer:
      'Absolutely. You can view selected case studies in the portfolio section below or request a specific PDF deck via email.'
  },
  {
    question: 'How do you approach branding projects?',
    answer:
      'We start with deep discovery workshops to understand your core values, followed by visual exploration, and finally, a comprehensive brand guideline delivery.'
  }
]

// DOM container
const faqContainer = document.getElementById('faq-container')

// Render FAQ items
FAQ_DATA.forEach((faq, index) => {
  const item = document.createElement('div')
  item.className = 'faq-item'
  if (index === 0) item.classList.add('open')

  item.innerHTML = `
    <button class="faq-button">
      <span class="faq-question">${faq.question}</span>
      <span class="faq-icon">
        <svg class="icon plus-icon" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12h14" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <svg class="icon minus-icon" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </span>
    </button>

    <div class="faq-answer-wrapper">
      <div class="faq-answer">${faq.answer}</div>
    </div>
  `

  faqContainer.appendChild(item)
})

// Accordion Logic
const faqItems = document.querySelectorAll('.faq-item')

faqItems.forEach(item => {
  const button = item.querySelector('.faq-button')

  button.addEventListener('click', () => {
    const isOpen = item.classList.contains('open')

    // Close all
    faqItems.forEach(i => i.classList.remove('open'))

    // Open the clicked one if it was not already open
    if (!isOpen) item.classList.add('open')
  })
})
