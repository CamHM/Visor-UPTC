<template>
    <v-content class="secondary content">
        <v-row>
            <v-col cols="6">
                <v-row>
                    <CardIndicator color="alter" main=true v-bind:data="getMainCard"/>
                </v-row>
                <v-row>
                    <!--
                    <div class="text-center div">
                        <v-btn class="mx-2"  dark small color="teal" v-on:click="changeCard()">
                            Siguiente
                        </v-btn>
                    </div>
                    -->
                </v-row>
            </v-col>
            <v-col cols="6">
                <GraphicsList v-bind:list="getCardList"/>
            </v-col>
        </v-row>
    </v-content>
</template>

<script>
    import CardIndicator from "./CardIndicator";
    import GraphicsList from "./GraphicsList";
    import { I01, I02, I03, I05, I06 } from "../graphql/queries";

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
                variables() {
                    return {
                        faculty: this.$store.getters.faculty.report
                    }
                },
                result({data, loading}) {
                    !loading && this.$store.dispatch('addCardList', data.reportI02)
                }
            },
            reportI03: {
                query: I03,
                variables() {
                    return {
                        faculty: this.$store.getters.faculty.report
                    }
                },
                result({data, loading}) {
                    !loading && this.$store.dispatch('addCardList', data.reportI03)
                }
            },
            reportI05: {
                query: I05,
                variables() {
                    return {
                        faculty: this.$store.getters.faculty.report
                    }
                },
                result({data, loading}) {
                    !loading && this.$store.dispatch('addCardList', data.reportI05)
                }
            },
            reportI06: {
                query: I06,
                variables() {
                    return {
                        faculty: this.$store.getters.faculty.report
                    }
                },
                result({data, loading}) {
                    !loading && this.$store.dispatch('addCardList', data.reportI06)
                }
            },
        },
        methods: {
            changeCard() {
                const actualCard = this.$store.getters.cardList[0];
                this.$store.dispatch('addCardList', this.$store.getters.mainCard);
                this.$store.dispatch('setMainCard', actualCard);
                this.$store.dispatch('removeFirstCard');
                return true
            }
        },
        created() {
            this.$store.dispatch('resetList')
        },
        computed: {
            getMainCard() {
                return this.$store.getters.mainCard
            },
            getCardList() {
                return this.$store.getters.cardList
            }
        },
    }
</script>

<style scoped>
    .content {
        height: 82vh;
        border-radius: 5px;
    }
    .div {
        width: 100%;
    }
</style>
