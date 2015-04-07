var MyShuttle;
(function (MyShuttle) {
    (function (Settings) {
        Settings.angularModule.controller('SettingsController', function ($scope, settingsService, storageService, messengerService, navigationService) {
            $scope.saveSettings = function () {
                storageService.setValue('serviceUrl', $scope.serviceUrl);
                messengerService.send(messengerService.messageTypes.settingsChanged);
                navigationService.navigateBack();
            };

            var init = function () {
                messengerService.send(messengerService.messageTypes.showNavigateBackBtn, { jumpToMainPage: false });
                $scope.serviceUrl = settingsService.getMobileServiceUrl();

                $scope.$on('$locationChangeStart', function (event) {
                    messengerService.send(messengerService.messageTypes.hideNavigateBackBtn);
                });
            };

            init();
        });
    })(MyShuttle.Settings || (MyShuttle.Settings = {}));
    var Settings = MyShuttle.Settings;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=settingsController.js.map
