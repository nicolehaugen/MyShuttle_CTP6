var MyShuttle;
(function (MyShuttle) {
    (function (Core) {
        var Vehicle = (function () {
            function Vehicle() {
            }
            return Vehicle;
        })();
        Core.Vehicle = Vehicle;

        var Coordinate = (function () {
            function Coordinate(latitude, longitude) {
                this.latitude = latitude;
                this.longitude = longitude;
            }
            return Coordinate;
        })();
        Core.Coordinate = Coordinate;

        var SettingsService = (function () {
            function SettingsService(storageService) {
                this.storageService = storageService;
                this.getMobileServiceUrl = function () {
                    return this.storageService.getValue('serviceUrl', 'http://YOUR_SITE.azure-mobile.net/');
                };
                this.defaultEmployeeEmail = '';

                this.vehicle = new Vehicle();
                this.vehicle.VehicleId = 5;
                this.vehicle.DriverId = 5;
                this.vehicle.CarrierId = 1;
                this.vehicle.Rate = 3;

                var coord = new Coordinate(40.72109533886229, -74.006596745813);
                this.startRideLocation = coord;
                this.endRideLocation = coord;
                this.rideDistance = 0.1;
                this.rideAddress = '50 Varick St, New York, NY 10012';

                this.bingMapsKey = 'YOUR_BING_MAPS_TOKEN_KEY';
                this.mobileServiceKey = 'YOUR_MOBILE_SERVICE_KEY';
                this.gcmSenderId = 'SENDER_ID';
                this.realTimeNotificationsServerUrl = 'http://YOUR_SITE.azurewebsites.net/';

                return this;
            }
            return SettingsService;
        })();
        Core.SettingsService = SettingsService;

        Core.angularModule.factory('settingsService', function (storageService) {
            return new MyShuttle.Core.SettingsService(storageService);
        });
    })(MyShuttle.Core || (MyShuttle.Core = {}));
    var Core = MyShuttle.Core;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=settingsService.js.map
