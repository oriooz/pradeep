angular.module('eventCalendarApp', [])
  .controller('CalendarController', function() {
    var vm = this;

    var today = new Date();
    vm.currentMonth = today.toLocaleString('default', { month: 'long', year: 'numeric' });
    vm.daysInMonth = [];

    vm.initCalendar = function() {
      var daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
      vm.daysInMonth = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    };

    vm.prevMonth = function() {
      today.setMonth(today.getMonth() - 1);
      vm.currentMonth = today.toLocaleString('default', { month: 'long', year: 'numeric' });
      vm.initCalendar();
    };

    vm.nextMonth = function() {
      today.setMonth(today.getMonth() + 1);
      vm.currentMonth = today.toLocaleString('default', { month: 'long', year: 'numeric' });
      vm.initCalendar();
    };

    vm.initCalendar();
  });
