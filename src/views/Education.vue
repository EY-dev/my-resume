<template>
    <v-container style="overflow: hidden; background-color: #1c1e1f; height: inherit; margin-left: 0!important;" id="component-about" >
        <div class="box"/>
        <div class="shadow"/>
        <perfect-scrollbar :options="{suppressScrollX:true}" class="content-body">
           <my-education  style="margin-left: 20px; margin-right: 20px;"/>
        </perfect-scrollbar>
        <div class="shadow-reverse"/>
        <div class="box box-bottom"/>
        <div/>
    </v-container>
</template>

<script>

    import MyEducation from "../components/MyEducation";
    export default {
        name: 'Education',
        components: {MyEducation},
        data: () => ({
        }),
        methods:{
            onResize() {
                const width_value = document.querySelector('.content-body').offsetWidth;
                const el = document.getElementsByClassName("box");
                el[0].setAttribute("style", "width:" + width_value + "px");
                el[1].setAttribute("style", "margin-top: -20px; width:" + width_value + "px");
                document.getElementsByClassName("shadow")[0].setAttribute("style", "width:" + width_value + "px");
                document.getElementsByClassName("shadow-reverse")[0].setAttribute("style", "width:" + width_value + "px");
            },
        },
        mounted() {
            setTimeout(()=>{this.onResize();},1100)
        },
        created() {
            this.$nextTick(() => {
                window.addEventListener('resize', this.onResize);
            });

        }
    }
</script>
<style scoped>
    #component-about{
        padding: 0;
        min-height: 300px;
    }
    .ps{
        height: 100%;
        width: 100%;
    }
    .ps__rail-x{
        display: none;
    }
    .home{
        height: inherit;
    }
    .shadow {
        margin-top: 18px;
        position: absolute;
        width: 100%;
        height: 40px;
        display: block;
        background-image: linear-gradient(to bottom, rgb(28, 30, 31), rgba(28, 30, 31, 0));
        z-index: 5;
    }
    .shadow-reverse {
        margin-top: -58px;
        position: absolute;
        width: 100%;
        height: 40px;
        display: block;
        background-image: linear-gradient(to top, rgb(28, 30, 31), rgba(28, 30, 31, 0));
        z-index: 5;
    }
    .box {
        margin-top: -1px;
        position: absolute;
        width: 100%;
        height: 20px;
        display: block;
        background:  rgb(28, 30, 31);
        z-index: 5;
    }
    .box-bottom{
        margin-top: -19px!important;
    }
    @media only screen and (min-width: 600px), (max-height: 400px) {
        .content-body{
            padding: 12px;
        }
        .container{
            margin-left: 0!important;
        }
    }
</style>
