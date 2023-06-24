import { reactive } from "vue";

export const store = reactive({

    navbarList: [
        {
            name: "Home",
            link: ""
        },
        {
            name: "About-me",
            link: "about"
        },
        {
            name: "Skills",
            link: "skills"
        },
        {
            name: "Projects",
            link: "projects"
        },
        {
            name: "Contacts",
            link: "contacts"
        },
    ],

    logosArray: [
        {
            title: 'HTML',
            logoPath: '/public/logos/logo-html.png',
        },
        {
            title: 'BootStrap',
            logoPath: '/public/logos/logo-bootstrap.png',
        },
        {
            title: 'JavaScript',
            logoPath: '/public/logos/logo-javascript.png',
        },
        {
            title: 'VueJS',
            logoPath: '/public/logos/logo-vue.png',
        },
        {
            title: 'NPM',
            logoPath: '/public/logos/logo-npm.png',
        },
        {
            title: 'MySQL',
            logoPath: '/public/logos/logo-mysql.png',
        },
        {
            title: 'PHP',
            logoPath: '/public/logos/logo-php.png',
        },
        {
            title: 'Laravel',
            logoPath: '/public/logos/logo-laravel.png',
        },
        {
            title: 'Java',
            logoPath: '/public/logos/logo-java.png',
        },
        {
            title: 'Spring',
            logoPath: '/public/logos/logo-spring.png',
        },
        {
            title: 'CSS',
            logoPath: '/public/logos/logo-css.png',
        },
    ],

});