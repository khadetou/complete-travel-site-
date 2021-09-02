class MobileMenu {
  constructor() {
    this.menu = document.getElementById('menu-icon')
    this.links = document.querySelector('.header__links')
    this.ul = document.querySelector('.header__ul')
    this.iconbars = document.querySelectorAll('.header__icon-bar')
    this.icobarTop = document.querySelector('.header__icon-bar-first')
    this.icobarBottom = document.querySelector('.header__icon-bar-second')
    this.iconbars.forEach((iconbar) => {
      iconbar.classList.add('header__icon-bar-humberger')
    })

    this.events()
  }

  events() {
    this.menu.addEventListener('click', () => this.toggleMenu())
  }

  toggleMenu() {
    this.links.classList.toggle('header__show')
    this.ul.classList.toggle('header__isvisible')
    this.iconbars.forEach((iconbar) => {
      iconbar.classList.toggle('header__icon-bar-humberger')
    })
    this.icobarTop.classList.toggle('header__icon-bar-top')
    this.icobarBottom.classList.toggle('header__icon-bar-bottom')
  }
}

export default MobileMenu
