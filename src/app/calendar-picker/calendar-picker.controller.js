(() => {

    angular
        .module('app')
        .controller('CalendarPickerController', CalendarPickerController);

    function CalendarPickerController() {

        $(document).ready(function () {
            $("#calendar").jqxCalendar({ theme: "arctic", width: 250, height: 250 });
        });
    }
})();