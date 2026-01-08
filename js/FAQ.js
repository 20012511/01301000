// FAQ Data (converted from your constants)
const FAQ_DATA = [
  {
    question: 'WHAT INDUSTRIES DO YOU SPECIALIZE IN?',
    answer:
      'I specialize in EdTech, SaaS, and Creative Tech. Having worked on projects like the BT Institute app and professional platforms at Techinfini, I build solutions that balance complex technical requirements with user-centric design.'
  },
  {
    question: 'DO YOU DESIGN FOR BOTH WEB AND MOBILE?',
    answer:
      'Yes. My expertise covers responsive web platforms and native mobile applications. I focus on platform-specific UI patterns, ensuring seamless experiences across iOS, Android, and all modern browsers.'
  },
  {
    question: 'WHAT SERVICES DO YOU OFFER AS A DESIGNER?',
    answer:
      'I offer end-to-end Product Design, including UI/UX audits, scalable Design Systems, 3D product modeling in Blender, and high-fidelity interactive prototyping.'
  },
  {
    question: 'CAN YOU PROVIDE EXAMPLES OF YOUR PREVIOUS WORK?',
    answer:
      'Absolutely. You can explore my featured case studies on Behance (ashu-gfx) or view my professional trajectory through my roles at GlobusSoft and Techinfini in the portfolio section below.'
  },
  {
    question: 'HOW DO YOU APPROACH BRANDING PROJECTS?',
    answer:
      'I combine visual identity with strategic consulting. Drawing from my experience with BCG and Accenture, I move from discovery and market research to creating comprehensive visual identity systems that drive community growth.'
  },
  // {
  //   question: 'HOW DOES YOUR COMPUTER SCIENCE BACKGROUND BENEFIT MY PROJECT?',
  //   answer:
  //     'Unlike traditional designers, my B.Tech in CS allows me to understand the technical constraints of a build. I design with clean architecture and performance in mind, ensuring a seamless handoff to developers and reducing post-launch technical debt.'
  // },
  {
    question: 'WHAT IS YOUR PROCESS FOR BOOSTING USER ENGAGEMENT?',
    answer:
      'I use a data-driven approach involving A/B testing and usability studies. At GlobusSoft, this process led to a 10% increase in engagement. I focus on reducing cognitive load through clear visual hierarchy and meaningful micro-interactions.'
  },
  {
    question: 'WHAT TECH STACK DO YOU USE FOR WEB DEVELOPMENT?',
    answer:
      'I specialize in the MERN stack (MongoDB, Express, React, Node.js) paired with GSAP and Framer Motion for high-end animations. This allows me to build fast, scalable applications that don’t sacrifice visual "wow" factor.'
  },
  {
    question: 'HOW DO YOUR STRATEGIC INTERNSHIPS INFLUENCE YOUR DESIGN?',
    answer:
      'My time with BCG and Accenture taught me to look beyond pixels. I analyze market trends and business goals to ensure that the design serves a strategic purpose, whether it’s increasing conversion rates or improving brand authority.'
  },
  {
    question: 'WHAT TOOLS DO YOU USE FOR 3D AND MOTION DESIGN?',
    answer:
      'I use Blender and Spline for 3D product modeling and web-based interactive scenes. For motion, I rely on GSAP for web-native animations and After Effects for commercial video content.'
  },
  {
    question: 'CAN YOU HELP ME BUILD A PERSONAL BRAND ON LINKEDIN?',
    answer:
      'Absolutely. As a Design & Branding Coach for a community of 10,000+, I help professionals and founders define their visual voice, optimize their profiles, and create content strategies that drive organic growth.'
  },
  {
    question: 'DO YOU OFFER DESIGN SYSTEMS FOR SCALABILITY?',
    answer:
      'Yes. I build comprehensive Design Systems in Figma that include documented UI kits, component libraries, and style guides. This ensures your product remains visually consistent as it scales from 10 to 10,000 users.'
  },
  {
    question: 'HOW DO YOU HANDLE DESIGN HANDOFFS?',
    answer:
      'I provide developers with clean Figma files organized by user flows, including interactive prototypes, asset exports, and CSS/React-ready documentation to ensure the final build matches the design perfectly.'
  },
  {
    question: 'WHAT IS YOUR TURNAROUND TIME FOR A FULL PROJECT?',
    answer:
      'Timeline varies by complexity, but typically a full UI/UX sprint (Research to High-Fidelity) takes 2-4 weeks, while a full-stack web build takes 4-8 weeks depending on the feature set.'
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
