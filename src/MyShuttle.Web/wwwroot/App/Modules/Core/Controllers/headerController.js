'use strict';

angular.module('myShuttleCore').controller('HeaderController', ['$scope', 'navigationService', 'profileDataService', 'messenger', 
    function($scope, navigationService, profileDataService, messenger) {

        $scope.isActiveRoute = function (path) {
            return navigationService.isActiveRoute(path);
        };

        var getCarrierProfile = function () {
            profileDataService.getAsync().then(function (serviceProfile) {
                $scope.profile = angular.copy(serviceProfile);
            });
        };

         var init = function(){
            $scope.menu = navigationService.getMenu();

            getCarrierProfile();
        };

        var carrierProfileUpdated = $scope.$on(messenger.messageTypes.carrierProfileUpdated, function (event) {
            getCarrierProfile();
        });

        init();
    }
]);
