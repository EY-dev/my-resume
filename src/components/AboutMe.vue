<template>
    <div class="about-me">
        <v-row>
            <v-col>
                <header class="entry-header">
                    <h1 class="entry-title">about me</h1>
                </header>
            </v-col>
        </v-row>
        <v-row>
            <v-col>

            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "AboutMe"
    }
</script>

<style scoped>
    .entry-header {
        margin-top: 40px;
        margin-bottom: 20px;
    }
    .entry-title {
        font-weight: 900;
        color: #ffffff;
        line-height: normal;
        text-transform: lowercase;
        padding-right: 30px;
    }
    h1 {
        margin-block-start: 0;
        margin-block-end: 0;
    }
    .about-me{
        margin-left: 40px;
    }


    @media only screen and (max-width: 599px) {
        h1 {
            font-size: 2rem;
        }
    }
    @media only screen and (min-width: 600px) {
        h1 {
            font-size: 2rem;
        }
    }
    @media only screen and (min-width: 768px) {
        h1 {
            font-size: 3rem;
        }
    }
    @media only screen and (min-width: 992px) {
        h1 {
            font-size: 4rem;
        }
    }
</style>
