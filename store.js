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
            logoPath: '/assets/public/logos/logo-html.png',
        },
        {
            title: 'BootStrap',
            logoPath: '/assets/public/logos/logo-bootstrap.png',
        },
        {
            title: 'JavaScript',
            logoPath: '/assets/public/logos/logo-javascript.png',
        },
        {
            title: 'VueJS',
            logoPath: '/assets/public/logos/logo-vue.png',
        },
        {
            title: 'NPM',
            logoPath: '/assets/public/logos/logo-npm.png',
        },
        {
            title: 'MySQL',
            logoPath: '/assets/public/logos/logo-mysql.png',
        },
        {
            title: 'PHP',
            logoPath: '/assets/public/logos/logo-php.png',
        },
        {
            title: 'Laravel',
            logoPath: '/assets/public/logos/logo-laravel.png',
        },
        {
            title: 'Java',
            logoPath: '/assets/public/logos/logo-java.png',
        },
        {
            title: 'Spring',
            logoPath: '/assets/public/logos/logo-spring.png',
        },
        {
            title: 'CSS',
            logoPath: '/assets/public/logos/logo-css.png',
        },
    ],

});