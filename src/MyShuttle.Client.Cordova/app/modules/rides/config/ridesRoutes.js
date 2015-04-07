var MyShuttle;
(function (MyShuttle) {
    (function (Rides) {
        'use strict';

        Rides.angularModule.config(function ($routeProvider) {
            $routeProvider.when('/home', {
                controller: 'HomeController',
                templateUrl: 'app/modules/rides/views/home.html'
            });

            $routeProvider.when('/service', {
                controller: 'ServiceController',
                templateUrl: 'app/modules/rides/views/service.html',
                resolve: {
                    'params': function (navigationService) {
                        return navigationService.getTransferedData();
                    }
                }
            });

            $routeProvider.when('/ride', {
                controller: 'RideController',
                templateUrl: 'app/modules/rides/views/ride.html',
                resolve: {
                    'params': function (navigationService) {
                        return navigationService.getTransferedData();
                    }
                }
            });

            $routeProvider.when('/signature', {
                controller: 'SignatureController',
                templateUrl: 'app/modules/rides/views/signature.html',
                resolve: {
                    'params': function (navigationService) {
                        return navigationService.getTransferedData();
                    }
                }
            });
        });
    })(MyShuttle.Rides || (MyShuttle.Rides = {}));
    var Rides = MyShuttle.Rides;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=ridesRoutes.js.map
