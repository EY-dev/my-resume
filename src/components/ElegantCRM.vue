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
        <v-row id="fetchers">
            <v-col>
                <p style="text-indent: 25px; " align="justify">
                    Interesting fetchers:
                </p>
                <div class="description">
                    <div class="description-item">
                        <span style="text-indent: 25px;">
                            PHP + MySQL server side REST API
                        </span>
                    </div>
                    <div class="description-item">
                        <span style="text-indent: 25px;">
                          Authorization and authentication use cookies, php sessions and tokens
                        </span>
                    </div>
                    <div class="description-item">
                        <span style="text-indent: 25px;">
                            Different roles for users
                        </span>
                    </div>
                    <div class="description-item">
                        <span style="text-indent: 25px;">
                            Smart data sheets
                        </span>
                    </div>
                    <div class="description-item">
                        <span style="text-indent: 25px;">
                            Uploading and downloading files
                        </span>
                    </div>
                  <div class="description-item">
                        <span style="text-indent: 25px;">
                           Exporting to MS Excel
                        </span>
                  </div>
                  <div class="description-item">
                        <span style="text-indent: 25px;">
                           Tickets journal with comments from users
                        </span>
                  </div>
                </div>
            </v-col>
        </v-row>
        <v-row id="link">
            <v-col>
                <div style="font-size: 13px">
                    <span style="margin-right: 15px; margin-left: 25px">Private project:</span>
                    <a style="margin-right: 15px; " href="https://github.com/Euegene/elegantCRM-Client">Client side</a>
                    <a href="https://github.com/Euegene/elegantCRM-Server">Server side</a>
                </div>
            </v-col>
        </v-row>
        <v-row id="technology">
            <v-col class="chips">
                <div>
                    <v-chip
                            color="#e65100"
                            outlined
                            x-small>
                        Vue
                    </v-chip>
                    <v-chip
                            color="#e65100"
                            outlined
                            x-small>
                        Bootstrap
                    </v-chip>
                    <v-chip
                            color="#e65100"
                            outlined
                            x-small>
                        JavaScript
                    </v-chip>
                    <v-chip
                            color="#e65100"
                            outlined
                            x-small>
                        html5
                    </v-chip>
                    <v-chip
                            color="#e65100"
                            outlined
                            x-small>
                        css3
                    </v-chip>
                    <v-chip
                            color="#e65100"
                            outlined
                            x-small>
                        VueRouter
                    </v-chip>
                    <v-chip
                            color="#e65100"
                            outlined
                            x-small>
                        php
                    </v-chip>
                    <v-chip
                            color="#e65100"
                            outlined
                            x-small>
                        MySQL
                    </v-chip>
                    <v-chip
                            color="#e65100"
                            outlined
                            x-small>
                        MS VB Application
                    </v-chip>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "ElegantCRM"
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
