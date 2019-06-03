(() => {

    angular
        .module('app')
        .component('footer', {
            controller: 'FooterController',
            controllerAs: 'vm',
            templateUrl: 'app/footer/footer.html'
        });

})();