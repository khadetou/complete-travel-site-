import throttle from 'lodash/throttle'

class RevealOnScroll {
  constructor() {
    this.features = document.querySelectorAll('.features__element')
    this.hideInitially()
    this.scrollThrottle = throttle(this.calc, 200).bind(this)
    this.event()
  }

  hideInitially() {
    this.features.forEach((feature) => {
      feature.classList.add('reveal_item')
      feature.isRevealed = false
    })
    this.features[this.features.length - 1].lastItem = true
  }

  isScrolled(el) {
    if (!el.isRevealed) {
      let scroll = (el.getBoundingClientRect().y / window.innerHeight) * 100

      if (scroll < 75) {
        el.classList.add('reveal_item__isvisible')
        el.isRevealed = true

        if (el.lastItem) {
          window.removeEventListener('scroll', this.scrollThrottle)
        }
      }
    }
  }

  event() {
    window.addEventListener('scroll', this.scrollThrottle)
  }

  calc() {
    this.features.forEach((feature) => {
      this.isScrolled(feature)
    })
  }
}

export default RevealOnScroll
