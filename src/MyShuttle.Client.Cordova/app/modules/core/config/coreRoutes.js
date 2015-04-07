var MyShuttle;
(function (MyShuttle) {
    (function (Core) {
        Core.angularModule.config(function ($routeProvider) {
            $routeProvider.otherwise({ redirectTo: '/home' });
        });
    })(MyShuttle.Core || (MyShuttle.Core = {}));
    var Core = MyShuttle.Core;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=coreRoutes.js.map
