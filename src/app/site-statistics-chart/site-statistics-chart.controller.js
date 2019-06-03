(() => {
    angular
        .module('app')
        .controller('SiteStatisticsChartController', SiteStatisticsChartController);

    function SiteStatisticsChartController() {
        const vm = this;
        Highcharts.chart('site-statistics', {
            chart: {
                type: 'line',
                backgroundColor: '#34495e'
            },
            title: {
                text: 'Site Statistics',
                style: { "color": "#fff", "padding-left": '30px' },
                align: 'left',
                x: 30,
                y: 25
            },
            xAxis: {
                labels: {
                    style: {
                        color: '#fff'
                    },
                    formatter: function () {
                        return moment(this.value).format("YYYY-MM-DD");
                    }
                }
            },
            yAxis: {
                labels: {
                    style: {
                        color: '#fff'
                    }
                },
                title: {
                    text: ''
                }
            },
            legend: {
                backgroundColor: '#fff'
            },

            series: [{
                name: 'Visitors',
                color: '#ffcf3d',
                marker: {
                    fillColor: '#ff00d8',
                    radius: 6
                },
                data: [
                    [moment('2014-01-01').valueOf(), 10000],
                    [moment('2014-01-02').valueOf(), 14000],
                    [moment('2014-01-03').valueOf(), 20000],
                    [moment('2014-01-04').valueOf(), 16000],
                    [moment('2014-01-05').valueOf(), 25000],
                    [moment('2014-01-06').valueOf(), 29000],
                ]
            },
            {
                name: 'Sales',
                color: '#1efe00',
                marker: {
                    fillColor: '#ff0000',
                    radius: 6
                },
                data: [
                    [moment('2014-01-01').valueOf(), 20000],
                    [moment('2014-01-02').valueOf(), 12000],
                    [moment('2014-01-03').valueOf(), 25000],
                    [moment('2014-01-04').valueOf(), 14000],
                    [moment('2014-01-05').valueOf(), 21000],
                    [moment('2014-01-06').valueOf(), 26000],
                ]
            }]
        });
    }
})();