<template>
    <div class="project">
        <header class="entry-subheader">
            <v-icon class="icon-style">looks_one</v-icon>
            <h2 class="entry-subtitle">Elegant CRM</h2>
        </header>
        <v-row id="description">
            <v-col>
                <div class="description">
                    <p style="text-indent: 25px;" align="justify">
                        Full stack progressive web application was created in purpose to manage a construction business. That includes document flow and control of working hours
                    </p>
                </div>
            </v-col>
        </v-row>
        <fetchers-list :list="fetchers" />
        <links-list :list="links"/>
        <technology-chips :list="technology"/>
        <screens :images="images" :prefix="'elegant'"/>
    </div>
</template>

<script>
import Screens from "@/components/Screens";
import TechnologyChips from "@/components/TechnologyChips";
import FetchersList from "@/components/FetchersList";
import LinksList from "@/components/LinksList";
    export default {
        name: "ElegantCRM",
        components: {LinksList, FetchersList, TechnologyChips, Screens},
        data: () => ({
            images: ['login.jpg', 'dash.jpg', 'projects.jpg', 'login-mobile.jpg', 'dash-mobile.jpg', 'clocks-mobile.jpg', 'projects-mobile.jpg'],
            technology: ['Vue', 'Bootstrap', 'JavaScript', 'html5', 'css3', 'VueRouter', 'php', 'mySQL', 'MS VB Application'],
            fetchers: ['PHP + MySQL server side REST API', 'Authorization and authentication use cookies, php sessions and tokens', 'Different roles for users', 'Smart data sheets', 'Uploading and downloading files', 'Exporting to MS Excel', 'Tickets journal with comments from users'],
            links: [
                {value: 'GitHub client side,', src: 'https://github.com/Euegene/elegantCRM-Client'},
                {value: 'GitHub server side,', src: 'https://github.com/Euegene/elegantCRM-Server'},
                {value: 'WebSite', src: 'https://crm.elegantenterprisesinc.com/#/login'
                }]
        })
    }
</script>

<style scoped>
    .v-application a {
        color: #ffffff;
    }
    a {
        text-decoration: none;
        color: #ffffff;
        text-align: center;
    }
    a:hover {
        text-decoration:none;
        cursor:pointer;
        color: #e65100;
    }
    h5{
        height: 100%;
        vertical-align: middle;
        line-height: 30px; /* <-- adjust this */
    }
    .project{
        margin-left: 20px;
        margin-right: 20px;
    }
    .entry-subheader{
        margin-top: 40px;
        display: flex;
    }
    .entry-subtitle{
        font-weight: 900;
        color: #ffffff;
        text-transform: lowercase;
        margin-bottom: 0;
        margin-left: 15px;
    }
    .icon-style{
        font-size: 2.2rem;
        color: #e65100;
    }
    .description{
        color: #888888;
        line-height: 1.73;

    }
    .chips{
        width: 100%;
    }
    .v-chip{
        margin-right: 5px;
    }
    .description-item{
        padding-left: 50px;
        font-size: 0.8rem;
    }
</style>
