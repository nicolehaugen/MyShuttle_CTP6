var MyShuttle;
(function (MyShuttle) {
    (function (Core) {
        var NavigationService = (function () {
            function NavigationService($rootScope, $timeout, $location, $anchorScroll) {
                this.$rootScope = $rootScope;
                this.$timeout = $timeout;
                this.$location = $location;
                this.$anchorScroll = $anchorScroll;
                this.urlHistory = [];
                return this;
            }
            NavigationService.prototype.start = function () {
                var location = this.$location;
                var history = this.urlHistory;
                this.$rootScope.$on('$routeChangeSuccess', function () {
                    if (location.absUrl().split('#')[1] !== history[history.length - 1]) {
                        history.push(location.absUrl().split('#')[1]);
                    }
                });
            };

            NavigationService.prototype.navigateTo = function (url, data) {
                this.transferData = data;
                var $location = this.$location;
                var $anchorScroll = this.$anchorScroll;

                this.$timeout(function () {
                    $location.path(url);
                    $anchorScroll();
                }, 10);
            };

            NavigationService.prototype.getTransferedData = function () {
                return this.transferData;
            };

            NavigationService.prototype.navigateBack = function () {
                var location = this.$location;
                var history = this.urlHistory;
                this.$timeout(function () {
                    if (location.path() === '/' || location.path() === '/home') {
                        navigator.app.exitApp();
                        return;
                    }
                    ;

                    history.pop();
                    location.path(history[history.length - 1]);
                }, 10);
            };
            return NavigationService;
        })();
        Core.NavigationService = NavigationService;

        Core.angularModule.factory('navigationService', function ($rootScope, $timeout, $location, $anchorScroll) {
            var instance = new MyShuttle.Core.NavigationService($rootScope, $timeout, $location, $anchorScroll);
            instance.start();
            return instance;
        });
    })(MyShuttle.Core || (MyShuttle.Core = {}));
    var Core = MyShuttle.Core;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=navigationService.js.map
