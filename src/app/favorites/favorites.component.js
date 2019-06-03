(() => {

    angular
        .module('app')
        .component('favorites', {
            controller: 'FavoritesController',
            controllerAs: 'vm',
            templateUrl: 'app/favorites/favorites.html'
        });

})();