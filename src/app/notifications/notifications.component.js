(() => {

    angular
        .module('app')
        .component('notifications', {
            controller: 'NotificationsController',
            controllerAs: 'vm',
            templateUrl: 'app/notifications/notifications.html'
        });

})();