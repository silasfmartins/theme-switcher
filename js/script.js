const body = document.querySelector('body')
const checkbox = document.querySelector('#checkbox')

checkbox.addEventListener('change', changeLight)

function changeLight() {
  document.body.classList.toggle('light')
}