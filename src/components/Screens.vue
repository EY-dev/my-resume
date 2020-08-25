<template>
    <v-row id="screens">
        <v-col>
            <v-carousel class="carousel">
                <v-carousel-item  v-for="(item,i) in images" :key="i">
                    <img :src="'img/' + prefix + '/' + item" alt="screen" class="img click-img" @click="openCarousel(i)"/>
                </v-carousel-item>
            </v-carousel>
            <v-overlay :value="overlay" class="absolute-carousel">
                <v-progress-circular v-if="progress" indeterminate size="64" class="progress"></v-progress-circular>
                <transition appear enter-active-class="animated fadeIn delay-1s" leave-active-class="">
                    <div>
                        <div class="close-carousel">
                            <v-btn icon @click="overlay = false">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </div>
                        <v-carousel>
                            <v-carousel-item
                                v-for="(item,i) in images"
                                :key="i"
                                reverse-transition="fade-transition"
                                transition="fade-transition"
                            >
                                <img :src="'img/' + prefix + '/' + item" alt="illustrations" class="img"/>
                            </v-carousel-item>
                        </v-carousel>
                    </div>
                </transition>
            </v-overlay>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "Screens",
    props: ['images', 'prefix'],
    data : ()=> ({
        overlay:false,
        progress: true,
    }),
    methods:{
        openCarousel(id){
            this.progress = true;
            this.overlay = true;
            setTimeout(()=>{
                let but = document.querySelectorAll('button[value="' + (id) +'"]');
                but[1].click();
            },1);
            const that = this;
            setTimeout(()=>{
                that.progress = false;
            },900)
        },
    }
}
</script>

<style scoped>
    .img{
        display: block;
        width: 100%;
        margin: auto;
    }
    .carousel{
        width: 100%;
        height: unset!important;
    }
    .v-image, .v-carousel__item{
        height: unset!important;
    }
    .absolute-carousel{
        z-index: 500!important;
        position: fixed;
        padding: 30px;
    }
    .progress{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .click-img:hover{
        cursor: pointer;
    }
    .close-carousel{
        position: absolute;
        z-index: 2;
        right: 10px;
        top: 10px;
    }
    .close-carousel button{
        background-color: black;
        opacity: 0.8;
    }
</style>
<style>
.v-window-item{
    transition: all .5s ease-in-out;
}
.v-image, .v-carousel__item{
    height: unset!important;
    width: 100%;
}
.v-image, .v-window{
    height: unset!important;
    max-height: 568px;
}
</style>
