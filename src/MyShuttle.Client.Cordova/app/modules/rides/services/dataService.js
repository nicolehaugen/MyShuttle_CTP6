var MyShuttle;
(function (MyShuttle) {
    (function (Rides) {
        var Employee = (function () {
            function Employee() {
            }
            return Employee;
        })();
        Rides.Employee = Employee;

        var Ride = (function () {
            function Ride() {
            }
            return Ride;
        })();
        Rides.Ride = Ride;

        var DataService = (function () {
            function DataService($rootScope, settingsService, messengerService) {
                var _this = this;
                this.$rootScope = $rootScope;
                this.settingsService = settingsService;
                this.messengerService = messengerService;
                this.createClient();

                this.$rootScope.$on(this.messengerService.messageTypes.settingsChanged, function () {
                    _this.createClient();
                });

                return this;
            }
            DataService.prototype.createClient = function () {
                this.client = new WindowsAzure.MobileServiceClient(this.settingsService.getMobileServiceUrl(), this.settingsService.mobileServiceKey);

                this.rideTable = this.client.getTable('ride');
                this.employeeTable = this.client.getTable('employee');
            };

            DataService.prototype.getEmployee = function (id) {
                return this.employeeTable.where({ Id: id }).read();
            };

            DataService.prototype.addRide = function (data) {
                var ride = new Ride();
                ride.StartDateTime = data.startRideTime.toDate();
                ride.EndDateTime = data.endRideTime.toDate();
                ride.StartLatitude = data.startRideLocation.latitude;
                ride.StartLongitude = data.startRideLocation.longitude;
                ride.EndLatitude = data.endRideLocation.latitude;
                ride.EndLongitude = data.endRideLocation.longitude;
                ride.StartAddress = this.settingsService.rideAddress;
                ride.EndAddress = this.settingsService.rideAddress;
                ride.Distance = data.distance;
                ride.Duration = data.duration;
                ride.Cost = data.cost;
                ride.Signature = data.signature;
                ride.VehicleId = this.settingsService.vehicle.VehicleId;
                ride.CarrierId = this.settingsService.vehicle.CarrierId;
                ride.DriverId = this.settingsService.vehicle.DriverId;
                ride.Employee = new Employee();
                ride.Employee.Email = data.employeeEmail;

                return this.rideTable.insert(ride);
            };
            return DataService;
        })();
        Rides.DataService = DataService;

        Rides.angularModule.factory('dataService', function ($rootScope, settingsService, messengerService) {
            return new MyShuttle.Rides.DataService($rootScope, settingsService, messengerService);
        });
    })(MyShuttle.Rides || (MyShuttle.Rides = {}));
    var Rides = MyShuttle.Rides;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=dataService.js.map
