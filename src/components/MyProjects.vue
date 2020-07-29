<template>
    <div class="my-projects">
        <v-row>
            <v-col>
                <header class="entry-subheader">
                    <v-icon class="icon-style">work_outline</v-icon>
                    <h2 class="entry-subtitle">my projects</h2>
                </header>
            </v-col>
        </v-row>
        <v-row>
            <v-col>

            </v-col>
        </v-row>
        <v-divider style="margin-top: 15px"/>
        <v-row>
            <v-col>

            </v-col>
        </v-row>
        <v-divider style="margin-top: 15px"/>
        <v-row>
            <v-col>

            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "MyProjects"
    }
</script>

<style scoped>
    .my-projects{
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
