<template>
    <div class="project">
        <header class="entry-subheader">
            <v-icon class="icon-style">looks_4</v-icon>
            <h2 class="entry-subtitle">Art portfolio</h2>
        </header>
        <v-row id="description">
            <v-col>
                <div class="description">
                    <p style="text-indent: 25px; " align="justify">
                        That single page application was developed for graphic designer
                    </p>
                </div>
            </v-col>
        </v-row>
        <fetchers-list :list="fetchers" />
        <links-list :list="links"/>
        <technology-chips :list="technology"/>
        <screens :images="images" :prefix="'art-portfolio'"/>
    </div>
</template>

<script>
import Screens from "@/components/Screens";
import TechnologyChips from "@/components/TechnologyChips";
import FetchersList from "@/components/FetchersList";
import LinksList from "@/components/LinksList";
export default {
    name: "NoeliaDickson",
    components: {LinksList, FetchersList, TechnologyChips, Screens},
    data: () => ({
        images: ['home.jpg', 'about.jpg', 'experience.jpg', 'about-mobile.jpg', 'experience-mobile.jpg'],
        technology: ['Vue', 'Vuetify', 'JavaScript', 'html5', 'css3', 'VueRouter', 'Vuex', 'EmailJS'],
        fetchers: ['Two languages site: English, Spanish', 'Custom transition of navigation', 'Fully responsive webSite'],
        links: [
            {value: 'GitHub,', src: 'https://github.com/EY-dev/noelia-dickson'},

            ]
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
