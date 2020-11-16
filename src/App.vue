<template>
  <v-app dark>
    <full-list-navigation :open-full-navigation="openFullNavigationList" @close-full-navigation="openFullNavigationList = false"></full-list-navigation>
    <loader v-if="!isReady"></loader>
    <div v-else id="window-app" class="whole-page" >
      <v-main class="page-center">
        <v-row style="margin: 0; padding: 0; overflow: hidden;">
          <v-col class="navigation-menu padding-page">
            <navigation-bar @open-full-navigation="openFullNavigationList = true"></navigation-bar>
          </v-col>
          <v-col v-if="showPhoto()" class="mainInfo" :style="{'height': heightWindow+'px'}">
            <div class="photo-background"/>
            <div class="picture-title">
                <h1>Eugene Yesaulov</h1>
                <ul>
                    <li><a href="tel:(720) 292-7117"><v-icon class="icon-row">ring_volume</v-icon></a></li>
                    <li><a href="mailto:eyesaulov@ey-dev.com"><v-icon class="icon-row">email</v-icon></a></li>
                    <li><a href="https://www.facebook.com/EugeneYesaulov">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 33.866667 33.866667"
                        height="30"
                        width="30">
                        <g transform="translate(223.30833,-34.471382)" id="layer1">
                            <g
                                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:23.4798px;line-height:1.25;font-family:'Agency FB';-inkscape-font-specification:'Agency FB Bold';fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.326107"
                                id="text858"
                                transform="scale(1.2325311,0.81133853)"
                                aria-label="f">
                                <path
                                    id="path863"
                                    d="m -164.43468,56.532151 h -2.01687 l -0.0201,3.721558 h 1.75275 l 0.0201,2.780674 h -1.75274 v 9.617641 h -2.72515 v -9.617641 h -1.24853 l -0.0201,-2.780674 h 1.24853 c 0,0 -3e-5,-1.477922 -3e-5,-3.15625 0,-0.983398 0.84941,-3.033545 1.86584,-3.033545 h 2.89625 z" />
                            </g>
                        </g>
                    </svg></a></li>
                </ul>
            </div>
          </v-col>
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
    max-width: 470px!important;
    min-width: 250px!important;
    min-height: 400px!important;
    box-shadow: 0 0 50px 0 black;
    margin: 0;
    z-index: 100;
  }
  .picture-title{
      transform: translate(0, -100%);
      text-align: center;
      height: 100px;
      font-size: 1.2rem;
  }
  .picture-title ul{
      width: 50%;
      list-style: none;
      display: flex;
      padding: 0;
      margin: auto;
  }
  .picture-title ul li{
      flex: 1;
  }
  .picture-title ul li a{
      text-decoration: none;
  }
  .picture-title ul li a i{
      color: #fff;
  }
  .picture-title ul li a:hover i, .picture-title ul li a:hover svg{
      transform: scale(1.5, 1.5);
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
    .page-center{
      transform: translate(0, 0);
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) and (min-height: 500px){
    .whole-page{
      margin: 50px 100px;
      width: 100%;
      height: 100%;
    }
    .padding-page{
      padding: 50px 0 !important;
      min-height: 400px;
    }
    .page-center{
      width: 1100px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .photo-background{
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
      background-image: url('assets/photo-temp.jpg')
  }

</style>
