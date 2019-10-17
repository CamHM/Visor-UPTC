<template>
    <v-content class="secondary">
        <v-row>
            <v-col cols="9">
                <CardIndicator v-bind:data="indicatorName" />
            </v-col>
            <v-col cols="3">
                <GraphicsList/>
            </v-col>
        </v-row>
    </v-content>
</template>

<script>
    import CardIndicator from "./CardIndicator";
    import GraphicsList from "./GraphicsList";

    export default {
        name: "Indicator",
        components: {
            CardIndicator: CardIndicator,
            GraphicsList: GraphicsList
        },
        data() {
            return {
                indicatorName: "Número de proyectos de investigación según financiación"
            }
        }
    }
</script>

<style scoped>

</style>