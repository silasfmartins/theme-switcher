const body = document.querySelector('body')
const checkbox = document.querySelector('#checkbox')

checkbox.addEventListener('change', changeTheme)

function changeTheme() {
  document.body.classList.toggle('light')

  if(body.classList.contains('light')) {
    body.classList.remove('dark')
    body.classList.add('light')
    localStorage.setItem("theme", "light")
  }
  else {
    body.classList.remove('light')
    body.classList.add('dark')
    localStorage.setItem("theme", "dark")
  }
}   

body.classList.add(localStorage.getItem("theme"))