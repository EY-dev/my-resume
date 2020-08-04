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
        <v-row id="fetchers">
            <v-col>
                <p style="text-indent: 25px; " align="justify">
                    Interesting fetchers:
                </p>
                <div class="description">
                    <div class="description-item">
                        <span style="text-indent: 25px;">
                            Random generation of an array with a choice of the number of elements limited by a device's screen size
                        </span>
                    </div>
                    <div class="description-item">
                        <span style="text-indent: 25px;">
                            SVG animation of next sorting algorithms: <i>Bubble sort, Selection sort, Quick sort, Insertion sort, Gnome sort, Cocktail sort, Comb sort</i>
                        </span>
                    </div>
                    <div class="description-item">
                        <span style="text-indent: 25px;">
                            Speed settings of animation
                        </span>
                    </div>
                    <div class="description-item">
                        <span style="text-indent: 25px;">
                            Black and White mode
                        </span>
                    </div>
                    <div class="description-item">
                        <span style="text-indent: 25px;">
                            PHP + MS Access backend for authorization
                        </span>
                    </div>
                </div>
            </v-col>
        </v-row>
        <v-row id="link">
            <v-col>
                <div style="font-size: 13px">
                    <span style="margin-right: 15px; margin-left: 25px">Source: </span>
                    <a href="https://github.com/Euegene/vue-algorithms">GitHub link</a>
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
                        php
                    </v-chip>
                    <v-chip
                            color="#e65100"
                            outlined
                            x-small
                    >
                        MS Access
                    </v-chip>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "PetProject"
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
