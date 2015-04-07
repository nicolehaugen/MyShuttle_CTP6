var MyShuttle;
(function (MyShuttle) {
    (function (Core) {
        var Module = (function () {
            function Module() {
                this.name = 'ms.Core';
                this._module = angular.module(this.name, ['ngRoute']);
            }
            Module.prototype.register = function () {
                ApplicationConfiguration.registerModule(this.name);
                return this._module;
            };
            return Module;
        })();
        Core.Module = Module;

        Core.angularModule = new Core.Module().register();
    })(MyShuttle.Core || (MyShuttle.Core = {}));
    var Core = MyShuttle.Core;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=core.js.map
