(function () {
    angular.module(ApplicationConfiguration.applicationName, ApplicationConfiguration.applicationModuleVendorDependencies);

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        angular.bootstrap(document, [ApplicationConfiguration.applicationName]);
    }
    ;

    function onPause() {
    }
    ;

    function onResume() {
    }
    ;
})();
//# sourceMappingURL=application.js.map
