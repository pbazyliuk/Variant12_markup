(() => {

    angular
        .module('app')
        .component('pages', {
            controller: 'PagesController',
            controllerAs: 'vm',
            templateUrl: 'app/pages/pages.html'
        });

})();