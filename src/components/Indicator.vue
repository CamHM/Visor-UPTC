<template>
    <v-content class="secondary content">
        <v-row>
            <v-col cols="8">
                <CardIndicator color="primary" main="true" v-bind:data="mainCard"/>
            </v-col>
            <v-col cols="4">
                <GraphicsList v-bind:list="graphicList" @move="moveCard($event)"/>
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
        data: () => ({
            graphicList: [
                {id: 2, title: 'Número de proyectos de investigación según financiación'},
                {id: 3, title: 'Inversión en I+D a nivel de proyectos'},
                {id: 4, title: 'Inversión en I+D por tipo de entidad'},
            ],
            mainCard: {id: 1, title: 'Tarjeta A' }
        }),
        methods: {
            moveCard(id) {
                this.graphicList.push(this.mainCard);
                this.mainCard = this.graphicList.find(obj => obj.id === id);
                this.graphicList = this.graphicList.filter(item => item.id !== this.mainCard.id);
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
