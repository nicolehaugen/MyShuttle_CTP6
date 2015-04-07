var MyShuttle;
(function (MyShuttle) {
    (function (Rides) {
        var ModalService = (function () {
            function ModalService($modal) {
                this.$modal = $modal;
                this.modalOptions = {
                    backdrop: 'static',
                    keyboard: false,
                    modalFade: true
                };

                return this;
            }
            ModalService.prototype.showRideRequest = function (employee, position) {
                this.modalOptions.templateUrl = 'app/modules/rides/views/rideRequest.html';
                this.modalOptions.controller = function ($scope) {
                    $scope.employee = employee;
                    $scope.position = position;
                };

                return this.$modal.open(this.modalOptions).result;
            };
            return ModalService;
        })();
        Rides.ModalService = ModalService;

        Rides.angularModule.factory('modalService', function ($modal) {
            return new MyShuttle.Rides.ModalService($modal);
        });
    })(MyShuttle.Rides || (MyShuttle.Rides = {}));
    var Rides = MyShuttle.Rides;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=modalService.js.map
