(() => {

    angular
        .module('app')
        .component('usersTrendChart', {
            controller: 'UsersTrendChartController',
            controllerAs: 'vm',
            templateUrl: 'app/users-trend-chart/users-trend-chart.html'
        });

})();