(() => {

    angular
        .module('app')
        .controller('NotificationsController', NotificationsController);

    function NotificationsController(Constants) {
        const vm = this;

        vm.notificationConfig = Constants.notificationConfig;
    }

})();