<template>
    <div class="project">
        <header class="entry-subheader">
            <v-icon class="icon-style">looks_two</v-icon>
            <h2 class="entry-subtitle">Demo of algorithms</h2>
        </header>
        <v-row id="description">
            <v-col>
                <div class="description">
                    <p style="text-indent: 25px; " align="justify">
                        That single page application was developed as a home project for SP20 CIS295-OL 79347 - Web Application Development Chemeketa community college
                    </p>
                </div>
            </v-col>
        </v-row>
        <fetchers-list :list="fetchers" />
        <links-list :list="links"/>
        <technology-chips :list="technology"/>
        <screens :images="images" :prefix="'algorithms'"/>
    </div>
</template>

<script>
import Screens from "@/components/Screens";
import TechnologyChips from "@/components/TechnologyChips";
import FetchersList from "@/components/FetchersList";
import LinksList from "@/components/LinksList";
    export default {
        name: "PetProject",
        components: {LinksList, FetchersList, TechnologyChips, Screens},
        data: () => ({
            images: ['home.jpg', 'sorts.jpg', 'home-mobile.jpg', 'sorts-mobile.jpg'],
            technology: ['Vue', 'Vuetify', 'JavaScript', 'html5', 'css3', 'VueRouter', 'php', 'MS Access'],
            fetchers: ['Random generation of an array with a choice of the number of elements limited by a device\'s screen size', 'SVG animation of next sorting algorithms: <i>Bubble sort, Selection sort, Quick sort, Insertion sort, Gnome sort, Cocktail sort, Comb sort</i>', ' Dark and Light mode', 'PHP + MS Access backend for authorization'],
            links: [
                {value: 'GitHub,', src: 'https://github.com/Euegene/vue-algorithms'},
                {value: 'WebSite', src: 'https://ey-dev.github.io/sort-algorithms/'
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
