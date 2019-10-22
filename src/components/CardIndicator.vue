<template>
    <v-container>
        <v-hover v-slot:default="{ hover }">
            <v-card :color="color" :elevation="main ? 4 : (hover ? 16 : 2)" >
                <div v-bind:class="[main ? 'mainCard' : 'card']">
                    <p v-bind:class="[main ? 'danger--text headline font-weight-light general' : 'info--text caption font-weight-light general']">
                        {{ data.info.code }} - {{ data.info.value }}</p>
                    <DonutPieGraph v-if="main" fullsize="true" v-bind:data="chartDataI01"/>

                    <h5>{{data}}</h5>

                </div>
            </v-card>
        </v-hover>
    </v-container>
</template>

<script>
    import DonutPieGraph from "./charts/DonutPieGraph";

    export default {
        name: "CardIndicator",
        components: {
            DonutPieGraph,
        },
        props: [
            'data',
            'color',
            'main'
        ],
        data: function() {
            return {
                chartDataI01: {
                    series: this.data.data.filter(d => d.year === 2017).map(v => v['total']),
                    labels: this.data.data.filter(d => d.year === 2017).map(v => v['financing']),
                    type: 'pie'
                },
                chartDataI02: {
                    series: this.data.data.filter(d => d.year === 2018).map(v => v['total']),
                    labels: this.data.header.map(d => d['nameColumn'])
                }
            }
        }
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
