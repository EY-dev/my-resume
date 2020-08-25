<template>
    <v-row id="fetchers">
        <v-col>
            <p style="text-indent: 25px; " align="justify">
                Interesting fetchers:
            </p>
            <div class="description">
                <div class="description-item" v-for="(item, index) in list" :key="index">
                    <span style="text-indent: 25px;" v-html="item">
                        {{ item }}
                    </span>
                </div>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "FetchersList",
    props: ['list']
}
</script>

<style scoped>
.description{
    color: #888888;
    line-height: 1.73;

}
.description-item{
    padding-left: 50px;
    font-size: 0.8rem;
}
</style>
