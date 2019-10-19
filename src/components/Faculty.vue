<template>
    <v-content class="primary t">
        <div class="top">
            <v-tooltip bottom>
                <template v-slot:activator="{on}">
                    <v-btn color="accent secondary--text"
                        top right fab
                        v-on:click.prevent="goHome"
                        v-on="on"
                    >
                        <v-icon>mdi-home</v-icon>
                    </v-btn>
                </template>
                <span>Volver a facultades</span>
            </v-tooltip>
            <span class="headline white--text display-1 font-regular title">{{ $route.params.facultyName }}</span>
        </div>
        <div class="main">
            <Indicator v-bind:i01="reportI01"/>
        </div>
    </v-content>
</template>

<script>
    import Indicator from "./Indicator";
    import { I01 } from "../graphql/queries";

    export default {
        name: "Faculty",
        components: {
            Indicator: Indicator
        },
        apollo: {
            reportI01: {
                query: I01,
                    variables: {
                    faculty: 'INGENIERIA'
                }
            }
        },
        methods: {
            goHome() {
                this.$router.push('/')
            }
        },
        data: () => ({
            reportI01: {}
        })
    }
</script>

<style scoped>
    .t {
        height: 100vh;
    }
    .top {
        height: 15vh;
        padding: 20px;
    }
    .main {
        height: 80vh;
        margin: 0 3% 0 7%;
        text-align: center;
    }
    .title {
        margin-left: 80px;
    }
</style>
