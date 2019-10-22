<template>
    <v-content class="secondary content">
        <v-row>
            <v-col cols="8">
                <CardIndicator color="primary" main="true" v-bind:data="{}"/>
            </v-col>
            <v-col cols="4">
                <GraphicsList v-bind:list="cardList"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
            </v-col>
        </v-row>
    </v-content>
</template>

<script>
    import CardIndicator from "./CardIndicator";
    import GraphicsList from "./GraphicsList";
    import { I01, I02 } from "../graphql/queries";

    export default {
        name: "Indicator",
        components: {
            CardIndicator: CardIndicator,
            GraphicsList: GraphicsList
        },
        apollo: {
            reportI01: {
                query: I01,
                variables() {
                    return {
                        faculty: this.$store.getters.faculty.report
                    }
                },
                result({data, loading}) {
                    !loading && this.$store.dispatch('setMainCard', data.reportI01)
                }
            },
            reportI02: {
                query: I02,
                variables: {faculty: "INGENIERIA"},
            }
        },
        data() {
            return {
                mainCard: this.$store.getters.mainCard,
                cardList: this.$store.getters.cardList,
                loading: false
            }
        },
        methods: {
            moveCard(id) {
                this.graphicList.push(this.mainCard);
                this.mainCard = this.graphicList.find(obj => obj.id === id);
                this.graphicList = this.graphicList.filter(item => item.id !== this.mainCard.id);
            }
        },
    }
</script>

<style scoped>
    .content {
        height: 80vh;
        border-radius: 5px;
    }
</style>
