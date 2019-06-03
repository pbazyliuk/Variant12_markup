(() => {

    angular
        .module('app')
        .component('emails', {
            controller: 'EmailsController',
            controllerAs: 'vm',
            templateUrl: 'app/emails/emails.html'
        });

})();