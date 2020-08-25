<template>
    <div class="my-projects">
        <v-row>
            <v-col>
                <elegant-c-r-m/>
            </v-col>
        </v-row>
        <v-divider style="margin-top: 15px"/>
        <v-row>
            <v-col>
                <pet-project/>
            </v-col>
        </v-row>
        <v-divider style="margin-top: 15px"/>
        <v-row>
            <v-col>
                <resume-project/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <noelia-dickson/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div style="height:20px;"><p> </p></div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import ElegantCRM from "./ElegantCRM";
    import PetProject from "./PetProject";
    import ResumeProject from "./ResumeProject";
    import NoeliaDickson from "@/components/NoeliaDickson";
    export default {
        name: "MyProjects",
        components: {NoeliaDickson, ResumeProject, PetProject, ElegantCRM}
    }
</script>

<style scoped>
    .my-projects{
        margin-left: 20px;
        margin-right: 20px;
    }
    @media only screen and (max-width: 767px){
        .my-projects{
            margin: 0;
        }
    }
</style>
