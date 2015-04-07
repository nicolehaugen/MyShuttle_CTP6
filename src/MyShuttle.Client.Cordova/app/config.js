var ApplicationConfiguration = (function () {
    var applicationName = 'myShuttleDriverApp';
    var applicationModuleVendorDependencies = ['ngRoute', 'ui.bootstrap', 'angularMoment'];

    var registerModule = function (moduleName) {
        angular.module(applicationName).requires.push(moduleName);
    };

    return {
        applicationName: applicationName,
        applicationModuleVendorDependencies: applicationModuleVendorDependencies,
        registerModule: registerModule
    };
})();
//# sourceMappingURL=config.js.map
