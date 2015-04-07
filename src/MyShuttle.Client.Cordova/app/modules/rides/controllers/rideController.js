var MyShuttle;
(function (MyShuttle) {
    (function (Rides) {
        Rides.angularModule.controller('RideController', function ($scope, settingsService, navigationService, params) {
            var employee;
            var rideDuration;

            var init = function () {
                $scope.distance = settingsService.rideDistance;
                $scope.duration = 0;
                $scope.cost = 0;
                employee = params;
            };

            $scope.startRide = function () {
                $scope.startRideTime = moment().milliseconds(0);
                $scope.startRideLocation = {
                    latitude: settingsService.startRideLocation.latitude,
                    longitude: settingsService.startRideLocation.longitude
                };
            };

            $scope.endRide = function () {
                $scope.endRideTime = moment().milliseconds(0);
                $scope.endRideLocation = {
                    latitude: settingsService.endRideLocation.latitude,
                    longitude: settingsService.endRideLocation.longitude
                };
            };

            $scope.endOfRoute = function (distance) {
                if (distance)
                    $scope.distance = distance;

                $scope.cost = Math.round($scope.distance * settingsService.vehicle.Rate * 10) / 10;
                $scope.duration = $scope.endRideTime.diff($scope.startRideTime);
                rideDuration = $scope.endRideTime.diff($scope.startRideTime, 'seconds');
            };

            $scope.sign = function () {
                var params = {
                    distance: $scope.distance,
                    duration: rideDuration,
                    cost: $scope.cost,
                    startRideTime: $scope.startRideTime,
                    endRideTime: $scope.endRideTime,
                    startRideLocation: $scope.startRideLocation,
                    endRideLocation: $scope.endRideLocation,
                    employee: employee
                };
                navigationService.navigateTo('signature', params);
            };

            init();
        });
    })(MyShuttle.Rides || (MyShuttle.Rides = {}));
    var Rides = MyShuttle.Rides;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=rideController.js.map
