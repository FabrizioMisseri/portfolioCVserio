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
            link: "proj"
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

    sliderArray: [
        "/img/boolking-1.png",
        "/img/boolking-2.png",
        "/img/boolking-3.png",
        "/img/boolking-10.png",
        "/img/fotoalbum-1.png",
        "/img/fotoalbum-3.png",
        "/img/pizzeria-3.png",
        "/img/pizzeria-4.png",
        "/img/whatsapp-1.png",
        "/img/whatsapp-2.png",
        "/img/strongpasswordgenerator-1.png",
        "/img/strongpasswordgenerator-2.png",
    ],

});