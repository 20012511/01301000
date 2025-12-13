// Data converted from your React constants
const COMPARISON_DATA = [
  { others: 'Generic Solutions', we: 'Personalized Plans' },
  { others: 'Jargon Overload', we: 'Plain Talk' },
  { others: 'Boring Creativity', we: 'Bold Ideas' },
  { others: 'Fluff Metrics', we: 'Real ROI' },
  { others: 'One-Time Campaigners', we: 'Long-Term Partners' },
  { others: 'Hidden Costs', we: 'Transparent Pricing' },
  { others: 'Outdated Methods', we: 'Innovative Tools' },
  { others: 'Limited Scope', we: 'Full-Service Experts' },
  { others: 'Reactive Tactics', we: 'Proactive Strategies' },
  { others: 'Just Another Client', we: 'Passion & Care' }
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
