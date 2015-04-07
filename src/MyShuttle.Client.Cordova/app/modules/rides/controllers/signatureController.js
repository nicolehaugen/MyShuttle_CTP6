var MyShuttle;
(function (MyShuttle) {
    (function (Rides) {
        Rides.angularModule.controller('SignatureController', function ($scope, dataService, navigationService, messengerService, settingsService, params) {
            var ride;

            $scope.sendRide = function () {
                if (!$scope.signatureForm.$valid)
                    return;

                messengerService.send(messengerService.messageTypes.getSignature, function (signature) {
                    ride.signature = signature;
                    ride.employeeEmail = $scope.email;

                    messengerService.send(messengerService.messageTypes.startLoading);
                    dataService.addRide(ride).done(function () {
                        messengerService.send(messengerService.messageTypes.endLoading);
                        navigationService.navigateTo('home');
                    }, function () {
                        messengerService.send(messengerService.messageTypes.endLoading);
                        $scope.email = '';
                        $scope.$digest();
                    });
                });
            };

            var init = function () {
                ride = params || {};
                messengerService.send(messengerService.messageTypes.showNavigateBackBtn, { jumpToMainPage: true });
                $scope.email = (ride.employee && ride.employee.email) || settingsService.defaultEmployeeEmail;

                $scope.$on('$locationChangeStart', function (event) {
                    messengerService.send(messengerService.messageTypes.hideNavigateBackBtn);
                });
            };

            init();
        });
    })(MyShuttle.Rides || (MyShuttle.Rides = {}));
    var Rides = MyShuttle.Rides;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=signatureController.js.map
