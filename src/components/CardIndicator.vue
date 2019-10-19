<template>
    <v-container>
        <v-hover v-slot:default="{ hover }">
            <v-card :color="color" :elevation="main ? 4 : (hover ? 16 : 2)"  @click="$emit('move-card', Number(data.id))">
                <div v-bind:class="[main ? 'mainCard' : 'card']">
                    <p v-bind:class="[main ? 'danger--text headline font-weight-light general' : 'info--text caption font-weight-light general']">{{ data.title }}</p>

                    <DonutChart v-bind:data="chartData" v-if="main" fullsize="true" />
                    <DonutChart v-bind:data="chartData" v-if="!main" />

                </div>
            </v-card>
        </v-hover>
    </v-container>
</template>

<script>
    import DonutChart from "./charts/DonutChart";

    export default {
        name: "CardIndicator",
        components: {
            DonutChart
        },
        props: [
            'data',
            'color',
            'main',
        ],
        data: () => ({
            chartData: {
                series: [40, 58, 10, 34],
                labels: ['Manzana', 'Mango', 'Pera', 'Mandrina']
            }
        })
    }
</script>

<style scoped>
    .card {
        width: 100% !important;
        height: 35vh !important;
    }
    .mainCard {
        width: 100% !important;
        height: 73vh !important;
    }
    .card:hover {
        cursor: pointer;
    }
    .general {
        padding: 7px;
    }
</style>
