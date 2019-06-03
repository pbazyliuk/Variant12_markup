(() => {

    angular
        .module('app')
        .component('searchInfo', {
            controller: 'SearchInfoController',
            controllerAs: 'vm',
            templateUrl: 'app/search-info/search-info.html'
        });

})();