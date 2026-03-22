import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faPlay,
    faPersonRunning,
    faNewspaper,
    faStarHalfStroke,
    faBasketShopping,
    faPeopleGroup,
    faMoneyBills,
    faCirclePlus,
    faXmark,
    faFaceFrown,
    faFaceSmile,
    faArrowDownAZ,
    faArrowUpZA,
    faTv,
    faMicrophone,
    faMoon,
    faSun,
    faChevronDown,
    faChevronUp
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faPlay,
    faTv,
    faPersonRunning,
    faNewspaper,
    faStarHalfStroke,
    faBasketShopping,
    faPeopleGroup,
    faMoneyBills,
    faCirclePlus,
    faXmark,
    faFaceFrown,
    faFaceSmile,
    faArrowDownAZ,
    faArrowUpZA,
    faMicrophone,
    faMoon,
    faSun,
    faChevronDown,
    faChevronUp
)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
