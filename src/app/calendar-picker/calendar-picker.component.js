(() => {

    angular
        .module('app')
        .component('calendarPicker', {
            controller: 'CalendarPickerController',
            controllerAs: 'vm',
            templateUrl: 'app/calendar-picker/calendar-picker.html'
        });

})();