var MyShuttle;
(function (MyShuttle) {
    (function (Rides) {
        Rides.angularModule.controller('ServiceController', function ($scope, pushNotificationsService, navigationService, params) {
            $scope.notifyEmployee = function () {
                pushNotificationsService.notifyVehicleArrived($scope.employee.id).then(function () {
                    navigationService.navigateTo('ride', $scope.employee);
                });
            };

            var init = function () {
                if (!params) {
                    navigationService.navigateTo('home');
                }
                $scope.employee = params.employee;
                $scope.position = params.position;
                $scope.timeRequest = params.timeRequest;
            };

            init();
        });
    })(MyShuttle.Rides || (MyShuttle.Rides = {}));
    var Rides = MyShuttle.Rides;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=serviceController.js.map
