const container = document.querySelector('.container')
const div = document.querySelector("div")

const cloneContainer = container.cloneNode(true)
cloneContainer.id = 'dark-container'
document.body.appendChild(cloneContainer)
cloneContainer.classList.remove('active')

const toggleIcons = document.querySelectorAll('.toggle-icon')
const icons = document.querySelectorAll('.toggle-icon i')
const darkContainer = document.querySelector('#dark-container')
const darkContainerImg = document.querySelector('#dark-container .home-img img')

darkContainerImg.src = '/Imgs/imgDark.png'

toggleIcons.forEach(toggle => {
  toggle.addEventListener('click', () => {

    toggle.classList.add('disabled')
    setTimeout(() => {
      toggle.classList.remove('disabled')
    }, 2500)

    
    icons.forEach(icon => {
      icon.classList.toggle('bx-sun')
    })

    container.classList.toggle('active')
    darkContainer.classList.toggle('active')

    //localstorage
    if (container.classList.contains('active')) {
      localStorage.setItem('theme', JSON.stringify('light'))
    } else {
      localStorage.setItem('theme', JSON.stringify('dark'))
    }
  })
})

//localstorage
getTheme = JSON.parse(localStorage.getItem('theme'))

if (getTheme === 'dark') {
  container.classList.remove('active')
  darkContainer.classList.add('active')

  icons.forEach(icon => {
    icon.classList.toggle('bx-sun')
  })
  
}

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

let darkMenuIcon = document.querySelector('#dark-container #menu-icon')
let darkNavbar = document.querySelector('#dark-container .navbar')

darkMenuIcon.onclick = () => {
  darkMenuIcon.classList.toggle('bx-x')
  darkNavbar.classList.toggle('active')
}


// Destaque nav onscroll

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY
    let offset = sec.offsetTop - 150
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('destaque')
        document.querySelector('header nav a[href*=' + id + ']').classList.add('destaque')
        links.classList.remove('destaque')
        document.querySelector('#dark-container header nav a[href*=' + id + ']').classList.add('destaque')
      })
    }
  })

  // sticky navbar
  let header = document.querySelector('header')

  header.classList.toggle('sticky', window.scrollY > 100)

  // remove toggle icon and navbar when click navbar link (scroll)
  menuIcon.classList.remove('bx-x')
  navbar.classList.remove('active')
  darkMenuIcon.classList.remove('bx-x')
  darkNavbar.classList.remove('active')
}

// scroll reveal
ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .habilidades-container, .portfolio-box, .formacoes', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .sobre-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .sobre-content', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text', {
  strings: ['Desenvolvedor Front-end'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})

const typeds = new Typed('#dark-container .multiple-text', {
  strings: ['Desenvolvedor Front-end'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})

