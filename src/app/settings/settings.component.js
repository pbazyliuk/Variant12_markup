(() => {

    angular
        .module('app')
        .component('settings', {
            controller: 'SettingsController',
            controllerAs: 'vm',
            templateUrl: 'app/settings/settings.html'
        });

})();