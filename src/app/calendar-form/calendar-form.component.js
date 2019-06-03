(() => {

    angular
        .module('app')
        .component('calendarForm', {
            controller: 'CalendarFormController',
            controllerAs: 'vm',
            templateUrl: 'app/calendar-form/calendar-form.html'
        });

})();