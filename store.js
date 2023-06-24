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
            logoPath: '/logos/logo-html.png',
        },
        {
            title: 'BootStrap',
            logoPath: '/logos/logo-bootstrap.png',
        },
        {
            title: 'JavaScript',
            logoPath: '/logos/logo-javascript.png',
        },
        {
            title: 'VueJS',
            logoPath: '/logos/logo-vue.png',
        },
        {
            title: 'NPM',
            logoPath: '/logos/logo-npm.png',
        },
        {
            title: 'MySQL',
            logoPath: '/logos/logo-mysql.png',
        },
        {
            title: 'PHP',
            logoPath: '/logos/logo-php.png',
        },
        {
            title: 'Laravel',
            logoPath: '/logos/logo-laravel.png',
        },
        {
            title: 'Java',
            logoPath: '/logos/logo-java.png',
        },
        {
            title: 'Spring',
            logoPath: '/logos/logo-spring.png',
        },
        {
            title: 'CSS',
            logoPath: '/logos/logo-css.png',
        },
    ],

});