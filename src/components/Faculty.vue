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
            <span class="headline secondary--text display-1 font-regular titleHeader">
                {{ faculty.name }}
                <v-avatar class="avatar" size="70">
                    <span class="text primary--text title font-weight-bold">{{ faculty.abbreviation }}</span>
                </v-avatar>
            </span>
        </div>
        <div class="main">
            <Indicator />
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
        methods: {
            goHome() {
                this.$router.push('/')
            }
        },
        data: function() {
            return {
                faculty: this.$store.getters.faculty,
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
        margin: 0 3% 0 7%;
        text-align: center;
    }
    .titleHeader {
        margin-left: 100px;
        background-color: #29FFCC;
        padding: 12px;
        border-radius: 50px;
    }
    .avatar {
        margin-left: 10px;
        background-color: #fff;
        border: #27293d 3px solid;
        top: -3px;
    }
</style>
