<template>
    <v-row id="link">
        <v-col>
            <div style="font-size: 13px">
                <span style="margin-right: 15px; margin-left: 25px">Links: </span>
                <a v-for="(item, index) in list" :key="index"  :href="item.src">{{ item.value }}</a>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "LinksList",
    props: ['list']
}
</script>

<style scoped>
.v-application a {
    color: #b0b0b0;
}
a {
    text-decoration: none;
    text-align: center;
    margin-right: 15px;
}
a:hover {
    text-decoration:none;
    cursor:pointer;
    color: #e65100;
}
</style>
