import '../styles/style.css'
import MobileMenu from './modules/MobileMenue'
import RevealOnScroll from './modules/RevealOnScroll'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

if (module.hot) {
  module.hot.accept()
}

let val = new MobileMenu()
let reveal = new RevealOnScroll()
