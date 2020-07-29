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
            <div id="pages-1" class="widget widget_pages">
                <h4 class="widget-title">Main Pages</h4>
                <v-list-item
                        v-for="item in mainLinks"
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
            </div>
            <v-divider style="margin-top: 15px"/>
            <div id="pages-2" class="widget">
                <h4 class="widget-title">Additional Pages</h4>
                <v-list-item
                        v-for="item in additionalLinks"
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
            </div>
            <v-divider style="margin-top: 15px"/>
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
                const links = this.$store.getters.getAvailableLinks;
                for(let index in links){
                    this.$store.dispatch('setLinkIsActive', {address: links[index].to, value: links[index].to === link.to})
                }
                this.$emit('close-full-navigation')
            },
        },
        created() {
        },
        computed:{
            mainLinks(){
                return this.$store.getters.getShortAvailableLinks;
            },
            additionalLinks(){
                return this.$store.getters.getAdditionalAvailableLinks;
            }
        },
    }
</script>

<style scoped>
    h4{
        font-size: 26px;
    }
    .widget-title {
        font-weight: 900;
        text-transform: lowercase;
        color: white;
        margin-bottom: 20px;
    }
    .widget {
        padding: 0 30px 30px;
        margin-bottom: 30px;
        position: relative;
        margin-top: 30px;
    }
</style>
