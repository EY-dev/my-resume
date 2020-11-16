<template>
    <v-navigation-drawer
            :mini-variant=true
            mini-variant-width="50px"
            class="navigation-body"
            style="background-color: #1c1e1f; height: 100%"
            permanent>
        <v-list-item class="px-2">
            <v-tooltip right style="z-index: 101" v-if="!$store.getters.isMobile">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="#e65100" large depressed dark height="50px" width="50px" class="hamburger" v-on="on" v-bind="attrs" @click.stop="openMenu()">
                        <v-icon>list</v-icon>
                    </v-btn>
                </template>
                <span>Menu</span>
            </v-tooltip>
        </v-list-item>
        <v-list dense v-if="isReady" class="navigation-links">
            <v-list-item
                    v-for="item in links"
                    :key="item.key"
                    style="margin-bottom: 15px">
                <v-list-item-icon>
                    <v-tooltip right style="z-index: 101" v-if="!$store.getters.isMobile">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn v-bind="attrs"
                                   v-on="on"
                                   class="ma-2"
                                   style="margin-left: -10px!important;"
                                   :x-large="item.isActive"
                                   outlined
                                   fab
                                   color="#1c1e1f"
                                   @click="open(item.to)"
                                   @mouseover="setHoverActive(item.to, true)"
                                   @mouseleave="setHoverActive(item.to, false)">
                                <v-icon v-if="item.isHoverActive||item.isActive" style="color: #e65100">{{item.icon}}</v-icon>
                                <v-icon v-else style="color: #dedede">{{item.icon}}</v-icon>
                            </v-btn>
                        </template>
                        <span>{{item.title}}</span>
                    </v-tooltip>
                    <v-btn v-else
                           class="ma-2"
                           style="margin-left: -10px!important;"
                           :x-large="item.isActive"
                           outlined
                           fab
                           color="#1c1e1f"
                           @click="open(item.to)"
                           @mouseover="setHoverActive(item.to, true)"
                           @mouseleave="setHoverActive(item.to, false)">
                        <v-icon v-if="item.isHoverActive||item.isActive" style="color: #e65100">{{item.icon}}</v-icon>
                        <v-icon v-else style="color: #dedede">{{item.icon}}</v-icon>
                    </v-btn>
                </v-list-item-icon>
            </v-list-item>
        </v-list>
        <v-list-item class="pdf-btn">
            <v-tooltip right style="z-index: 101" v-if="!$store.getters.isMobile">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="#1c1e1f" large depressed dark height="50px" width="50px" v-on="on" v-bind="attrs" download href="https://ey-dev.github.io/my-page/files/EugeneYesaulovResume.pdf">
                        <v-icon>get_app</v-icon>
                    </v-btn>
                </template>
                <span>Download PDF</span>
            </v-tooltip>
        </v-list-item>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "NavigationBar",
        data : ()=>({
            isReady:false,
            resume: null
        }),
        created() {

        },
        mounted() {
            this.paintMenu(this.$route.fullPath);
            this.isReady = true;
        },
        computed:{
            links(){
                return this.$store.getters.getShortAvailableLinks;
            },
        },
        methods:{
            open(page){
                // eslint-disable-next-line no-unused-vars
                this.$router.push(page).catch(err => {});
                this.paintMenu(page);
            },
            paintMenu(page){
                setTimeout(()=>{
                    for(let index in this.links){
                        this.$store.dispatch('setLinkIsActive', {address: this.links[index].to, value: this.links[index].to === page})
                    }
                },1100);
            },
            openMenu(){
                this.$emit('open-full-navigation')
            },
            setHoverActive(link, value){
                this.$store.dispatch('setHoverIsActive', {address: link, value: value})
            }
        }
    }
</script>

<style scoped>
    .pdf-btn{
        position: absolute;
        top: 100%;
        transform: translate(0, -100%);
        padding: 0;
    }
    .pdf-btn a{
        min-width: 50px!important;
    }
    .navigation-links{
        position: absolute;
        top: 50%;
        transform: translate(-5px, -50%);
    }
    .navigation-body{
        height: 100%;
        background-color: #1c1e1f;
    }
    .ma-2{
        width: 45px!important;
        height: 45px!important;

    }
    .ma-2:hover{
        margin-left: -5px;
        background-color: #1c1e1f;
        border-radius: 50%;
        stroke-width: 1px;
        border: 1px solid #e65100;
    }
    .hamburger{
        z-index: 50;
        width: 50px;
    }
</style>
