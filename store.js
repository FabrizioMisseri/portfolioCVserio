import { reactive } from "vue";

export const store = reactive({

    navbarList: [
        {
            name: "Home",
            link: "jumbo"
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
    ]

});