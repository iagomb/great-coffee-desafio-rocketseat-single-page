const nav = document.querySelector('.logo nav')

const body = document.querySelector('body')

nav.addEventListener('click', () => {
  nav.classList.toggle('show')
  body.classList.toggle('show')
})

