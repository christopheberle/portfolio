import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { faPython, faRProject, faVuejs, faHtml5, faCss3, faJs, faSass } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ViewHeader from "@/components/ViewHeader.vue"

import '@/assets/styles/main.scss'

library.add(faPython, faRProject, faCubes,faVuejs, faHtml5, faCss3, faJs, faSass);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('ViewHeader', ViewHeader)
    .use(router)
    .mount('#app')
