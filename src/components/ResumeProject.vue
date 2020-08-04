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
        <v-row id="fetchers">
            <v-col>
                <p style="text-indent: 25px; " align="justify">
                    Interesting fetchers:
                </p>
                <div class="description">
                    <div class="description-item">
                        <span style="text-indent: 25px;">
                            Two navigation panels
                        </span>
                    </div>
                    <div class="description-item">
                        <span style="text-indent: 25px;">
                            Email sender form without backend
                        </span>
                    </div>
                    <div class="description-item">
                        <span style="text-indent: 25px;">
                            Material design icons
                        </span>
                    </div>
                    <div class="description-item">
                        <span style="text-indent: 25px;">
                            SVG animation for logos
                        </span>
                    </div>
                </div>
            </v-col>
        </v-row>
        <v-row id="link">
            <v-col>
                <div style="font-size: 13px">
                    <span style="margin-right: 15px; margin-left: 25px">Source: </span>
                    <a href="https://github.com/Euegene/my-resume">GitHub link</a>
                </div>
            </v-col>
        </v-row>
        <v-row id="technology">
            <v-col class="chips">
                <div>
                    <v-chip
                            color="#e65100"
                            outlined
                            x-small
                    >
                        Vue
                    </v-chip>
                    <v-chip

                            color="#e65100"
                            outlined
                            x-small
                    >
                        Vuetify
                    </v-chip>
                    <v-chip

                            color="#e65100"
                            outlined
                            x-small
                    >
                        JavaScript
                    </v-chip>
                    <v-chip

                            color="#e65100"
                            outlined
                            x-small
                    >
                        html5
                    </v-chip>
                    <v-chip

                            color="#e65100"
                            outlined
                            x-small
                    >
                        css3
                    </v-chip>
                    <v-chip

                            color="#e65100"
                            outlined
                            x-small
                    >
                        VueRouter
                    </v-chip>
                    <v-chip

                            color="#e65100"
                            outlined
                            x-small
                    >
                        Vuex
                    </v-chip>
                    <v-chip
                            color="#e65100"
                            outlined
                            x-small
                    >
                        EmailJS
                    </v-chip>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "ResumeProject"
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
