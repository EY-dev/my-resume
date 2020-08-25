<template>
    <v-row id="screens">
        <v-col>
            <v-carousel class="carousel">
                <v-carousel-item  v-for="(item,i) in images" :key="i">
                    <img :src="'img/' + prefix + '/' + item" alt="screen" class="img"/>
                </v-carousel-item>
            </v-carousel>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "Screens",
    props: ['images', 'prefix']
}
</script>

<style scoped>
    .img{
        display: block;
        width: 100%;
    }
    .carousel{
        width: 100%;
        height: unset!important;
    }
    .v-image, .v-carousel__item{
        height: unset!important;
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
</style>
