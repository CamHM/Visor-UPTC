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
            <span class="title white--text display-1 font-regular">Facultad {{ $route.params.id }}</span>
        </div>
        <div class="main">
            <Indicator/>
        </div>
    </v-content>
</template>

<script>
    import Indicator from "./Indicator";

    export default {
        name: "Faculty",
        components: {
            Indicator: Indicator
        },
        props: ['faculty'],
        methods: {
            goHome() {
                this.$router.push('/')
            }
        }
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
        margin: 0 1% 0 7%;
        text-align: center;
    }
    .title {
        margin-left: 50px;
    }
</style>
