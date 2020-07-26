<template>
    <v-navigation-drawer
        app
        v-model="openFullNavigation"
        :mini-variant=false
        :disable-route-watcher=true
        mini-variant-width="150px"
        class="navigation-body"
        style="background-color: #e65100; height: 100%; z-index: 101"
        temporary>
        <v-list dense>
            <v-list-item
                v-for="item in links"
                :key="item.key"
                :to="item.to"
                @click="closeNavigation(item)"
                link>
                <v-list-item-icon>
                    <v-icon>{{item.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{item.title}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        props: ['openFullNavigation'],
        name: "FullListNavigation",
        data:()=>({

        }),
        methods:{
            closeNavigation(link){
                for(let index in this.links){
                    this.$store.dispatch('setLinkIsActive', {address: this.links[index].to, value: this.links[index].to === link.to})
                }
                this.$emit('close-full-navigation')
            },
        },
        created() {
        },
        computed:{
            links(){
                return this.$store.getters.getAvailableLinks;
            },
        },
    }
</script>

<style scoped>

</style>
