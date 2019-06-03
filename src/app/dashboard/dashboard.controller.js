(() => {

    angular
        .module('app')
        .controller('DashboardController', DashboardController);

    function DashboardController(Constants) {
        const vm = this;

        vm.totalStatisticsConfig = Constants.totalStatisticsConfig;
    }
})();