var MyShuttle;
(function (MyShuttle) {
    (function (Core) {
        Core.angularModule.directive('msLoader', function (messengerService) {
            return {
                restrict: 'AE',
                link: function (scope, element) {
                    element.addClass('hidden');

                    var cleanUpStartLoading = scope.$on(messengerService.messageTypes.startLoading, function (event) {
                        element.removeClass('hidden');
                    });

                    var cleanUpEndLoading = scope.$on(messengerService.messageTypes.endLoading, function (event) {
                        element.addClass('hidden');
                    });

                    var cleanUpDestroy = scope.$on('$destroy', function () {
                        cleanUpStartLoading();
                        cleanUpEndLoading();
                        cleanUpDestroy();
                    });
                }
            };
        });
    })(MyShuttle.Core || (MyShuttle.Core = {}));
    var Core = MyShuttle.Core;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=loader.js.map
