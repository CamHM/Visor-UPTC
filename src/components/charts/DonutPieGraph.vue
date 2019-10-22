<template>
    <apexchart v-bind:class="[fullSize ? 'shortChart' : 'chart']" v-bind:type="data.type" :options="options" :series="series"></apexchart>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        name: "DonutPieGraph",
        components: {
            apexchart: VueApexCharts
        },
        props: ['data', 'fullSize'],
        data: function () {
            return {
                series: this.data.series,
                options: {
                    labels: this.data.labels
                    ,
                    theme: {
                        palette: 'palette10'
                    },
                    fill: {
                        type: 'gradient',
                    },
                    legend: {
                        position: 'bottom'
                    },
                    plotOptions: {
                        pie: {
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '22px',
                                    fontFamily: 'Rubik',
                                    color: '#dfsda',
                                    offsetY: -10
                                },
                                value: {
                                    show: true,
                                    fontSize: '16px',
                                    fontFamily: 'Helvetica, Arial, sans-serif',
                                    color: '#dfsda',
                                    offsetY: 16,
                                    formatter: function (val) {
                                        return val
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .chart {
        height: 400px;
    }
    .shortChart {
        width: 150px;
    }
</style>