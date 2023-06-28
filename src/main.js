import { createApp } from 'vue'
import './styles/style.scss'
import App from './App.vue'

createApp(App).mount('#app')


if (window.matchMedia('(max-width: 425px)').matches) {
    console.log('Media query matched!');
    document.getElementById('my_name').classList.remove('fs-4').classList.add('fs-6');
}

