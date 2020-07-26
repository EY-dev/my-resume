<template>
    <v-container style="overflow: hidden; background-color: #1c1e1f; height: inherit;">
        <perfect-scrollbar :options="{suppressScrollX:true}" class="content-body">
            <v-row class="text-center">
                <v-col class="mb-4">
                    <h1 class="display-2 font-weight-bold mb-3">
                        Welcome to Vuetify
                    </h1>

                    <p class="subheading font-weight-regular">
                        For help and collaboration with other Vuetify developers,
                        <br>please join our online
                        <a
                                href="https://community.vuetifyjs.com"
                                target="_blank"
                        >Discord Community</a>
                    </p>
                </v-col>
            </v-row>
        </perfect-scrollbar>
    </v-container>
</template>

<script>
    export default {
        name: "Contacts"
    }
</script>

<style scoped>
    .ps{
        height: 100%;
        width: 100%;
    }
    .ps__rail-x{
        display: none;
    }
</style>
