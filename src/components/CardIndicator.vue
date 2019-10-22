<template>
    <v-container style="margin: 4px">
        <v-hover v-slot:default="{ hover }">
            <v-card :color="color" :elevation="main ? 4 : (hover ? 16 : 2)" >
                <div v-bind:class="[main ? 'mainCard' : 'card']">
                    <p v-bind:class="[main ? 'danger--text headline font-weight-light general' : 'info--text caption font-weight-light general']">
                        {{ data.info.code }} - {{ data.info.value }}</p>
                    <DonutPieGraph v-if="data.info.code === 'I01'" v-bind:data="chartDataI01"/>
                    <RadialBarGraph v-if="data.info.code === 'I02'" v-bind:data="chartDataI02"/>
                    <DonutPieGraph v-if="data.info.code === 'I03'" v-bind:data="chartDataI03" />
                    <BarLineGraph v-if="data.info.code === 'I05'" v-bind:data="chartDataI05" />
                    <BarLineGraph v-if="data.info.code === 'I06'" v-bind:data="chartDataI06" />
                </div>
            </v-card>
        </v-hover>
    </v-container>
</template>

<script>
    import DonutPieGraph from "./charts/DonutPieGraph";
    import RadialBarGraph from "./charts/RadialBarGraph";
    import BarLineGraph from "./charts/BarLineGraph";

    export default {
        name: "CardIndicator",
        components: {
            BarLineGraph,
            RadialBarGraph,
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
                    series: [
                        this.data.data.filter(d => d.year === 2017).map(v => v['internalS_amount']),
                        this.data.data.filter(d => d.year === 2017).map(v => v['internalE_amount']),
                        this.data.data.filter(d => d.year === 2017).map(v => v['external_amount'])],
                    labels: this.data.header.map(d => d['nameColumn'])
                },
                chartDataI03: {
                    series: this.data.data.filter(d => d.year === 2017).map(v => v['total']),
                    labels: this.data.data.filter(d => d.year === 2017).map(v => v['entity']),
                    type: 'donut'
                },
                chartDataI05: {
                    seriesX: this.data.data.map(v => v['year']),
                    seriesY: this.data.data.map(v => v['total']),
                    type: 'line'
                },
                chartDataI06: {
                    seriesX: this.data.data.map(v => v['year']),
                    seriesY: this.data.data.map(v => v['total']),
                    type: 'bar'
                }
            }
        },
    }
</script>

<style scoped>
    .card {
        width: 100% !important;
        height: 35vh !important;
    }
    .mainCard {
        width: 100% !important;
        height: 72vh !important;
    }
    .card:hover {
        cursor: pointer;
    }
    .general {
        padding: 7px;
    }
</style>
