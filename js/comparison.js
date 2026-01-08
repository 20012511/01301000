// Data converted from your React constants
const COMPARISON_DATA = [
  { others: 'Generic layouts', we: 'Scalable design systems' },
  { others: 'Hard to code', we: 'CS-backed feasibility' },
  { others: 'Pure aesthetics', we: 'Data-driven usability' },
  { others: 'Guessed behavior', we: 'Proven 20% engagement' },
  { others: 'Technical gaps', we: 'Full-stack awareness' },
  { others: 'Static UI', we: '3D & Motion immersion' },
  { others: 'Surface design', we: 'Strategic business logic' },
  { others: 'Design fluff', we: 'Real product ROI' },
  // { others: 'Jargon overload', we: 'Technical clarity' },
  { others: 'Outdated tools', we: 'Modern AI workflows' },
  { others: 'Narrow focus', we: 'End-to-end delivery' },
  { others: 'Short-term fixes', we: 'Long-term scalability' },
  { others: 'Reactive design', we: 'Proactive strategy' },
  // { others: 'Slow handoffs', we: 'Developer-ready files' },
  { others: 'Standard agency', we: 'Product-first mindset' },
  { others: 'Solo designer', we: 'Community-led insights' }
]

// DOM injectors
const othersList = document.getElementById('others-list')
const weList = document.getElementById('we-list')

// Render list items dynamically
COMPARISON_DATA.forEach(item => {
  const li1 = document.createElement('li')
  li1.textContent = item.others
  othersList.appendChild(li1)

  const li2 = document.createElement('li')
  li2.textContent = item.we
  weList.appendChild(li2)
})
