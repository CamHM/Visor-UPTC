<template>
    <apexchart height=300 v-bind:type="data.type" :options="options" :series="series"></apexchart>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts';

    export default {
        name: "BarLineGraph",
        components: {
            apexchart: VueApexCharts
        },
        props: ['data', 'fullsize'],
        data: function () {
            return {
                options: {
                    chart: {
                        id: 'vuechart'
                    },
                    xaxis: {
                        categories: this.data.seriesX,
                        axisBorder: {
                            show: true,
                            color: '#78909C',
                            height: 5,
                            width: '100%',
                            offsetX: 0,
                            offsetY: 0
                        }
                    },
                    // theme: {
                    //     palette: 'palette4'
                    // },
                    // chart: {
                    //     height: 380,
                    //     type: "line",
                    //     foreColor: '#6D6D6D'
                    // },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shade: 'dark',
                            gradientToColors: ['#45dec2'],
                            shadeIntensity: 1,
                            type: 'horizontal',
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [0, 100, 100, 100]
                        },
                    },
                    grid: {
                        borderColor: '#6D6D6D'
                    }
                },
                series: [{
                    name: this.data.name,
                    data: this.data.seriesY
                }]
            }
        }
    }
</script>

<style scoped>
    .chart {
        width: 600px;
    }
    .shortChart {
        width: 250px;
    }
</style>
