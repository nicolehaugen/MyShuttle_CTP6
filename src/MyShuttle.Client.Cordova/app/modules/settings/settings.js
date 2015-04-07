var MyShuttle;
(function (MyShuttle) {
    (function (Settings) {
        var Module = (function () {
            function Module() {
                this.name = 'ms.Settings';
                this._module = angular.module(this.name, ['ngRoute']);
            }
            Module.prototype.register = function () {
                ApplicationConfiguration.registerModule(this.name);
                return this._module;
            };
            return Module;
        })();
        Settings.Module = Module;

        Settings.angularModule = new Settings.Module().register();
    })(MyShuttle.Settings || (MyShuttle.Settings = {}));
    var Settings = MyShuttle.Settings;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=settings.js.map
