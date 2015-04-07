var MyShuttle;
(function (MyShuttle) {
    (function (Core) {
        Core.angularModule.controller('HeaderController', function ($scope, $rootScope, messengerService, navigationService) {
            var init = function () {
            };

            var jumpToMainPage, cleanUpShowBackBtn = $rootScope.$on(messengerService.messageTypes.showNavigateBackBtn, function (event, params) {
                $scope.backBtnVisible = true;
                if (params)
                    jumpToMainPage = params.jumpToMainPage;
            }), cleanUpHideBackBtn = $rootScope.$on(messengerService.messageTypes.hideNavigateBackBtn, function (event, params) {
                $scope.backBtnVisible = false;
            });

            $scope.navigateBack = function () {
                $scope.backBtnVisible = false;

                if (jumpToMainPage) {
                    navigationService.navigateTo('home');
                } else {
                    navigationService.navigateBack();
                }
            };

            var cleanUpDestroy = $scope.$on('$destroy', function () {
                cleanUpShowBackBtn();
                cleanUpHideBackBtn();
            });

            init();
        });
    })(MyShuttle.Core || (MyShuttle.Core = {}));
    var Core = MyShuttle.Core;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=headerController.js.map
