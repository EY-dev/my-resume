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
            <div class="links">
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
                    <v-list-item
                        @click="downloadResume()">
                        <v-list-item-icon>
                            <v-icon>get_app</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>PDF version</v-list-item-title>
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
            </div>
            <div class="update-btn" v-if="isNewVersion">
                <v-btn class="update-app" outlined color="white" @click="updateApp()">
                    <v-icon left>priority_high</v-icon>get update
                </v-btn>
            </div>
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
            downloadResume(){
                const link = "https://ey-dev.github.io/my-page/files/EugeneYesaulovResume.pdf"
                window.open(link);
            },
            closeNavigation(link){
                const links = this.$store.getters.getAvailableLinks;
                for(let index in links){
                    this.$store.dispatch('setLinkIsActive', {address: links[index].to, value: links[index].to === link.to})
                }
                this.$emit('close-full-navigation')
            },
            updateApp(){
                window.location.reload(true);
                this.$store.dispatch('setNewVersionReady', false);
            }
        },
        created() {
        },
        computed:{
            mainLinks(){
                return this.$store.getters.getShortAvailableLinks;
            },
            additionalLinks(){
                return this.$store.getters.getAdditionalAvailableLinks;
            },
            isNewVersion(){
                return this.$store.getters.isNewVersion;
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
    .links{
        height: 90%;
    }
    .update-btn{
        width: 100%;
        height: 36px;
        position: absolute;
        bottom: 10px;
    }
    .update-app{
        height: 10%;
        left: 50%;
        transform: translate(-50%, 0);
    }
</style>
