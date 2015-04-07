var MyShuttle;
(function (MyShuttle) {
    (function (Core) {
        var StorageService = (function () {
            function StorageService($window) {
                this.$window = $window;
                return this;
            }
            StorageService.prototype.getValue = function (key, defaultValue) {
                return this.$window.localStorage.getItem(key) || defaultValue;
            };

            StorageService.prototype.setValue = function (key, value) {
                this.$window.localStorage.setItem(key, value);
            };
            return StorageService;
        })();
        Core.StorageService = StorageService;

        Core.angularModule.factory('storageService', function ($window) {
            return new MyShuttle.Core.StorageService($window);
        });
    })(MyShuttle.Core || (MyShuttle.Core = {}));
    var Core = MyShuttle.Core;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=storageService.js.map
