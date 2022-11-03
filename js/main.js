const burger = document.querySelector('.burger'),
  menu = document.querySelector('.mobile-menu'),
  overlay = document.querySelector('.overlay'),
  body = document.body

if (burger && menu) {
  const showMenu = () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('body--fixed')
    overlay.classList.toggle('overlay--active')
  }

  const hideMenu = () => {
    burger.classList.remove('active')
    menu.classList.remove('active')
    body.classList.remove('body--fixed')
    overlay.classList.remove('overlay--active')
  }

  burger.addEventListener('click', showMenu)
  overlay.addEventListener('click', hideMenu)
}

const header = document.querySelector('.header'),
  headerHeight = header.clientHeight,
  logoText = document.querySelector('.logo-text')

document.addEventListener('scroll', () => {
  let scrollHeight = window.pageYOffset
  if (headerHeight < scrollHeight) {
    header.classList.add('header--fixed', 'fade')
    burger.classList.add('burger--fixed')
    logoText.classList.add('logo-text--active')
  } else {
    header.classList.remove('header--fixed', 'fade')
    burger.classList.remove('burger--fixed')
    logoText.classList.remove('logo-text--active')
  }
})

const modalOverlay = document.querySelector('.modal-overlay'),
  modal = document.querySelector('.modal'),
  closeModal = document.querySelector('.modal-close'),
  modalBtns = document.querySelectorAll('.modal-btn')

if (modal && modalOverlay) {
  modalBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      let dataBtn = event.currentTarget.getAttribute('data-btn')
      const dataModal = document.querySelector(`[data-modal="${dataBtn}"]`)
      dataModal.classList.add('modal--open')
      body.classList.add('body--fixed')
    })
  })

  const hideModal = () => {
    modalOverlay.classList.remove('modal--open')
    body.classList.remove('body--fixed')
  }

  closeModal.addEventListener('click', hideModal)

  document.addEventListener('click', event => {
    if (event.target.classList.contains('modal-overlay')) {
      hideModal()
    }
  })

  document.addEventListener('keydown', event => {
    if (event.code == 'Escape' && modalOverlay.classList.contains('modal--open')) {
      hideModal()
    }
  })
}
