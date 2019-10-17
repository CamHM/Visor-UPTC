<template>
    <v-content class="primary" align="center" style="padding: 0 20px 40px 20px">
        <v-container fluid>
            <v-row>
                <v-col lg="3" md="4" sm="4" xs="4">
                    <div class="white" style="border-radius: 35px; height: 50px">
                        <img src="https://res.cloudinary.com/dqcyu2ism/image/upload/v1571300925/acre_color_jpg_jxl4tu.jpg">
                    </div>
                </v-col>
                <v-col md="4" lg="5"></v-col>
                <v-col cols="4">
                    <p class="display-1 font-weight-light white--text">Visor OCITEB</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="7">
                    <CardContainer title="Facultades" v-bind:data="faculties"/>
                </v-col>
                <v-col cols="5">
                    <CardContainer title="Seccionales" v-bind:data="Sectional"/>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import CardContainer from './CardContainer';
    import { FACULTIES } from "../graphql/queries";

    export default {
        name: "Home",
        components: {
            CardContainer: CardContainer,
        },
        apollo: {
            faculties: {
                query: FACULTIES,
                update: data => data.Faculties
            }
        },
        data: () => ({
            faculties: [],
            Sectional: [
                {
                    _id: 20,
                    name: 'Duitama',
                    abbreviation: 'D'
                },
                {
                    _id: 21,
                    name: 'Sogamoso',
                    abbreviation: 'S'
                },
                {
                    _id: 22,
                    name: 'Chiquinquirá',
                    abbreviation: 'CH'
                },
                {
                    _id: 23,
                    name: 'Aguazul',
                    abbreviation: 'AZ'
                },
            ],
        }),
    }
</script>

<style scoped>

</style>
