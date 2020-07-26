<template>
  <v-app dark>
    <loader v-if="!isReady"></loader>
    <div v-else id="window-app" class="whole-page" >
      <v-main>
        <full-list-navigation :open-full-navigation="openFullNavigationList" @close-full-navigation="openFullNavigationList = false"></full-list-navigation>
        <v-row style="margin: 0; padding: 0; overflow: hidden;">
          <v-col class="navigation-menu padding-page">
            <navigation-bar @open-full-navigation="openFullNavigationList = true"></navigation-bar>
          </v-col>
          <v-col v-if="showPhoto()" class="mainInfo" :style="{'height': heightWindow+'px'}"></v-col>
          <v-col class="padding-page" :style="{'height': heightWindow+'px'}">
            <div class="content">
              <transition name="router-anim" appear enter-active-class="animated slideInLeft delay-1s" leave-active-class="animated slideOutLeft">
                <router-view/>
              </transition>
            </div>
          </v-col>
        </v-row>
      </v-main>
    </div>
  </v-app>
</template>
<script>

import NavigationBar from "./components/NavigationBar";
import FullListNavigation from "./components/FullListNavigation";
import Loader from "./components/Loader";

export default {
  name: 'App',
  components: {
    Loader,
    FullListNavigation,
    NavigationBar,
  },

  data: () => ({
    isReady: false,
    heightWindow : 0,
    openFullNavigationList: false,
  }),
  methods:{
    showPhoto(){
      return window.innerWidth > 767&&window.innerHeight>399 ;
    },
    onResize() {
      //this.heightWindow = document.body.clientHeight;
      this.heightWindow = window.innerHeight;
      const el = document.getElementsByClassName("v-navigation-drawer__border");
      if (window.innerWidth < 600) {
        el[0].setAttribute("style", "display: block");
      }
      else if(window.innerWidth > 599 && window.innerWidth < 992){
        this.heightWindow -= 50;
        el[0].setAttribute("style", "display: none;");
      }
      else{
        this.heightWindow -= 100;
        el[0].setAttribute("style", "display: none;");
      }

    },
    async load(){
      if (!this.isReady){
        setTimeout(()=>{
          this.isReady = true;
          setTimeout(()=>{
            window.onclick = e => {
              if (e.target.className!=='v-navigation-drawer__content'){
                this.openFullNavigationList = false;
              }
            };
            this.$nextTick(() => {
              window.addEventListener('resize', this.onResize);
            });
            this.onResize();
          },100)
        },8000);
      }
    },
    openFullMenu(){
      this.openFullNavigationList = !this.openFullNavigationList;
    }
  },

  mounted() {
    if (!this.isReady){
      const loadPage = this.load();
      loadPage.then(() => {}, () => {});
    }
  },
  created() {

  }
};
</script>
<style scoped>
  @import '~animate.css';

  .navigation-menu{
    max-width: 50px!important;
    min-width: 50px!important;
    z-index: 50;
    background-color: #121212;
  }
  .mainInfo{
    padding: 0;
    background-color: #1c1e1f;
    width: 20vh;
    max-width: 300px!important;
    min-width: 250px!important;
    min-height: 400px!important;
    box-shadow: 0 0 50px 0 black;
    margin: 0;
    z-index: 100;
  }
  .content{
    height: 100%;
  }
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 599px), (max-height: 400px){
    .whole-page{
      margin: 0;
      height: 100vh;
    }
    .padding-page{
      padding: 0 !important;
      height: 100vh!important;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) and (min-height: 400px) {
    .whole-page{
      margin: 25px;
    }
    .padding-page{
      padding: 0 !important;
      min-height: 400px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (min-height: 400px){
    .whole-page{
      margin: 25px 25px;
    }
    .padding-page{
      padding: 25px 0 !important;
      min-height: 400px;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) and (min-height: 500px) {
    .whole-page{
      margin: 50px 100px;
    }
    .padding-page{
      padding: 50px 0 !important;
      min-height: 400px;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) and (min-height: 500px){
    .whole-page{
      margin: 50px 100px;
    }
    .padding-page{
      padding: 50px 0 !important;
      min-height: 400px;
    }
  }

</style>
