<template>
    <v-content class="secondary content">
        <v-row>
            <v-col cols="8">
                <CardIndicator v-bind:data="indicatorName" color="accent" main="true"/>
            </v-col>
            <v-col cols="4">
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
    .content {
        height: 80vh;
        border-radius: 5px;
    }
</style>
