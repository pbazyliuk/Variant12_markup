(() => {
    angular
        .module('app')
        .controller('UsersTrendChartController', UsersTrendChartController);

    function UsersTrendChartController() {
        const vm = this;

        Highcharts.chart('users-trend', {
            chart: {
                type: 'column',
                backgroundColor: '#1b93e1'
            },
            title: {
                text: 'Site Statistics',
                style: { "color": "#fff", "padding-left": '30px' },
                align: 'left',
                x: 30,
                y: 20
            },
            xAxis: {
                title: {
                    text: ''
                },
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
                min: 0,
                title: {
                    text: ''
                },
                labels: {
                    style: {
                        color: '#fff'
                    }
                },
                formatter: function () {
                    return this.value + "%";
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'New',
                color: '#34495e',
                data: [
                    [moment('2014-01-01').valueOf(), 34.33],
                    [moment('2014-01-02').valueOf(), 67],
                    [moment('2014-01-03').valueOf(), 32],
                    [moment('2014-01-04').valueOf(), 78],
                    [moment('2014-01-05').valueOf(), 34],
                    [moment('2014-01-06').valueOf(), 65],
                ]

            }, {
                name: 'Sales',
                color: '#1efe00',
                data: [
                    [moment('2014-01-01').valueOf(), 89],
                    [moment('2014-01-02').valueOf(), 65],
                    [moment('2014-01-03').valueOf(), 77],
                    [moment('2014-01-04').valueOf(), 87],
                    [moment('2014-01-05').valueOf(), 56],
                    [moment('2014-01-06').valueOf(), 45],
                ]

            }]
        });
    }
})();