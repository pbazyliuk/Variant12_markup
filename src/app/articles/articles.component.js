(() => {

    angular
        .module('app')
        .component('articles', {
            controller: 'ArticlesController',
            controllerAs: 'vm',
            templateUrl: 'app/articles/articles.html'
        });

})();