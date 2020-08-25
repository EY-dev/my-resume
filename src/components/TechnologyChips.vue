<template>
    <v-row id="technology">
        <v-col class="chips">
            <div>
                <v-chip v-for="(item, index) in list" :key="index"
                    color="#e65100"
                    outlined
                    x-small
                >
                    {{ item }}
                </v-chip>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "TechnologyChips",
    props:['list']
}
</script>

<style scoped>
.chips{
    width: 100%;
}
.v-chip{
    margin-right: 5px;
}
</style>
