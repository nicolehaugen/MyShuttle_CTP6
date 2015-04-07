var MyShuttle;
(function (MyShuttle) {
    (function (Rides) {
        var Module = (function () {
            function Module() {
                this.name = 'ms.Rides';
                this._module = angular.module(this.name, ['ngRoute']);
            }
            Module.prototype.register = function () {
                ApplicationConfiguration.registerModule(this.name);
                return this._module;
            };
            return Module;
        })();
        Rides.Module = Module;

        Rides.angularModule = new Rides.Module().register();
    })(MyShuttle.Rides || (MyShuttle.Rides = {}));
    var Rides = MyShuttle.Rides;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=rides.js.map
