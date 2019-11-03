<template>
    <v-content class="primary" align="center" style="padding: 0 20px 40px 20px">
        <v-container fluid>
            <v-row>
                <v-col lg="3" md="4" sm="4" xs="4">
                    <div class="white" style="border-radius: 35px; height: 50px">
                        <img src="https://res.cloudinary.com/dqcyu2ism/image/upload/v1571378074/WhatsApp_Image_2019-10-18_at_12.50.51_AM_nbjf9n.jpg">
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="7">
                    <Carousel title="Facultades" v-bind:dataM="faculties"></Carousel>
<!--                    <CardContainer title="Facultades" v-bind:data="faculties"/>-->
                </v-col>
                <v-col cols="5">
                    <Carousel title="Seccionales" v-bind:dataM="Sectional"></Carousel>
<!--                    <CardContainer title="Seccionales" v-bind:data="Sectional"/>-->
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    // import CardContainer from './CardContainer';
    import { FACULTIES } from "../graphql/queries";
    import Carousel from "./Carousel";

    export default {
        name: "Home",
        components: {
            // CardContainer: CardContainer,
            Carousel: Carousel
        },
        apollo: {
            faculties: {
                query: FACULTIES,
                update: data => data.Faculties
            }
        },
        data: () => ({
            faculties: [],
            Sectional: [],
        }),
        beforeUpdate() {
            this.Sectional = this.faculties.filter(f => f.name.charAt(0) === 'S');
            this.faculties = this.faculties.filter(f => f.name.charAt(0) === 'F');
        },
        created() {
            this.Sectional = this.faculties.filter(f => f.name.charAt(0) === 'S');
            this.faculties = this.faculties.filter(f => f.name.charAt(0) === 'F');
        }
    }
</script>

<style scoped>

</style>
