<template>
    <div class="project">
        <header class="entry-subheader">
            <v-icon class="icon-style">looks_3</v-icon>
            <h2 class="entry-subtitle">My Resume</h2>
        </header>
    </div>
</template>

<script>
    export default {
        name: "ResumeProject"
    }
</script>

<style scoped>
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
</style>
