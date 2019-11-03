<template>
    <v-carousel :show-arrows="showArrows" :hide-delimiters="hideDelimiters" :delimiter-icon="delimiterIcon"
                height="635" show-arrows-on-hover>
        <v-carousel-item v-for="i in parseInt(dataM.length/6 , 10)+1" v-bind:key="i">
            <CardContainer :title="title" v-bind:data="dataM.slice((i-1)*6, (i*6))"/>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
    import CardContainer from './CardContainer';

    export default {
        name: "Carousel",
        components: {
            CardContainer
        },
        props: ['title', 'dataM'],
        data: () => {
            return {
                showArrows: true,
                hideDelimiters: false,
                delimiterIcon: "mdi-minus"
            }
        }
    }
</script>

<style scoped>

</style>