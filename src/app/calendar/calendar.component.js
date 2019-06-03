(() => {

    angular
        .module('app')
        .component('calendar', {
            controller: 'CalendarController',
            controllerAs: 'vm',
            templateUrl: 'app/calendar/calendar.html'
        });

})();