<template>
    <div class="project">
        <header class="entry-subheader">
            <v-icon class="icon-style">looks_3</v-icon>
            <h2 class="entry-subtitle">My Resume</h2>
        </header>
        <v-row id="description">
            <v-col>
                <div class="description">
                    <p style="text-indent: 25px; " align="justify">
                        That application was made in purpose to improve my designing skill and to build one website where I can easily post all my achievements in future projects.
                    </p>
                </div>
            </v-col>
        </v-row>
        <fetchers-list :list="fetchers" />
        <links-list :list="links"/>
        <technology-chips :list="technology"/>
    </div>
</template>

<script>
    import TechnologyChips from "@/components/TechnologyChips";
    import FetchersList from "@/components/FetchersList";
    import LinksList from "@/components/LinksList";
    export default {
        name: "ResumeProject",
        components: {LinksList, FetchersList, TechnologyChips},
        data: () => ({
            images: ['login.jpg', 'dash.jpg', 'projects.jpg', 'login-mobile.jpg', 'dash-mobile.jpg', 'clocks-mobile.jpg', 'projects-mobile.jpg'],
            technology: ['Vue', 'Vuetify', 'JavaScript', 'html5', 'css3', 'VueRouter', 'Vuex', 'EmailJS'],
            fetchers: ['Two navigation panels', 'Email sender form without backend', 'Material design icons', 'SVG animation for logos'],
            links: [
                {value: 'GitHub,', src: 'https://github.com/Euegene/my-resume'},
                {value: 'WebSite', src: 'https://ey-dev.github.io/my-page/#/'
            }]
        })
    }
</script>

<style scoped>

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

</style>
