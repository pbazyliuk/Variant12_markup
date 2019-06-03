// home.component.js
(() => {

    angular
        .module('app')
        .component('breadCrumbs', {
            controller: 'BreadCrumbsController',
            controllerAs: 'vm',
            templateUrl: 'app/bread-crumbs/bread-crumbs.html'
        });

})();