(() => {

    angular
        .module('app')
        .component('faqs', {
            controller: 'FaqsController',
            controllerAs: 'vm',
            templateUrl: 'app/faqs/faqs.html'
        });

})();