(() => {

    angular
        .module('app')
        .component('siteReport', {
            controller: 'SiteReportController',
            controllerAs: 'vm',
            templateUrl: 'app/site-report/site-report.html'
        });

})();