var MyShuttle;
(function (MyShuttle) {
    (function (Rides) {
        var StorageService = (function () {
            function StorageService($window) {
                this.$window = $window;
                return this;
            }
            StorageService.prototype.getValue = function (key, defaultValue) {
                return this.$window.localStorage[key] || defaultValue;
            };

            StorageService.prototype.setValue = function (key, value) {
                this.$window.localStorage[key] = value;
            };
            return StorageService;
        })();
        Rides.StorageService = StorageService;

        Rides.angularModule.factory('storageService', StorageService);
    })(MyShuttle.Rides || (MyShuttle.Rides = {}));
    var Rides = MyShuttle.Rides;
})(MyShuttle || (MyShuttle = {}));
