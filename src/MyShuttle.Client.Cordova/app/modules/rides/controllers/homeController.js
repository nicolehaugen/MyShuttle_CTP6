var MyShuttle;
(function (MyShuttle) {
    (function (Rides) {
        Rides.angularModule.controller('HomeController', function ($scope, pushNotificationsService, settingsService, dataService, messengerService, modalService, navigationService) {
            var timeRequest;

            var showRequest = function (data) {
                var employeeId = data.employeeId;
                var position = new MyShuttle.Core.Coordinate(data.latitude, data.longitude);

                messengerService.send(messengerService.messageTypes.startLoading);
                dataService.getEmployee(employeeId).done(function (results) {
                    messengerService.send(messengerService.messageTypes.endLoading);
                    var employee = results[0];
                    modalService.showRideRequest(employee, position).then(function (result) {
                        if (result) {
                            pushNotificationsService.notifyApprovedRequest(employeeId);
                            var params = { employee: employee, position: position, timeRequest: timeRequest };
                            navigationService.navigateTo('service', params);
                        } else {
                            pushNotificationsService.notifyRejectedRequest(employeeId);
                        }
                    });
                });
            };

            var init = function () {
                pushNotificationsService.initPushNotifications(function (data) {
                    timeRequest = moment();
                    showRequest(data);
                });
            };

            init();
        });
    })(MyShuttle.Rides || (MyShuttle.Rides = {}));
    var Rides = MyShuttle.Rides;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=homeController.js.map
