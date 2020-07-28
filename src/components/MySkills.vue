<template>
    <div class="my-skills">
        <v-row>
            <v-col cols="12" sm="6">
                <my-education/>
            </v-col>
            <v-col cols="12" sm="6">
                <my-experience/>
            </v-col>
        </v-row>
        <div><p/></div>
    </div>
</template>

<script>
    import MyEducation from "./MyEducation";
    import MyExperience from "./MyExperience";
    export default {
        name: "MySkills",
        components: {MyExperience, MyEducation}
    }
</script>

<style scoped>
    .my-skills{
        margin-left: 20px;
        margin-right: 20px;
    }
</style>
