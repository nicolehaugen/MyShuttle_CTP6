var MyShuttle;
(function (MyShuttle) {
    (function (Settings) {
        Settings.angularModule.config(function ($routeProvider) {
            $routeProvider.when('/settings', {
                controller: 'SettingsController',
                templateUrl: 'app/modules/settings/views/settings.html'
            });
        });
    })(MyShuttle.Settings || (MyShuttle.Settings = {}));
    var Settings = MyShuttle.Settings;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=settingsRoutes.js.map
