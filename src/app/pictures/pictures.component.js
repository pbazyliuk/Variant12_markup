(() => {

    angular
        .module('app')
        .component('pictures', {
            controller: 'PicturesController',
            controllerAs: 'vm',
            templateUrl: 'app/pictures/pictures.html'
        });

})();