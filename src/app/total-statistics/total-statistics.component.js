(() => {

    angular
        .module('app')
        .component('totalStatistics', {
            controller: 'TotalStatisticsController',
            controllerAs: 'vm',
            bindings: {
                totalStatisticsConfig: '='
            },
            templateUrl: 'app/total-statistics/total-statistics.html'
        });

})();