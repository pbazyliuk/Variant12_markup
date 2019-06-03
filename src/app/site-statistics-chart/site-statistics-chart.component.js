(() => {

    angular
        .module('app')
        .component('siteStatisticsChart', {
            controller: 'SiteStatisticsChartController',
            controllerAs: 'vm',
            templateUrl: 'app/site-statistics-chart/site-statistics-chart.html'
        });

})();