var MyShuttle;
(function (MyShuttle) {
    (function (Core) {
        Core.angularModule.service('modalService', [
            '$modal', function ($modal) {
                var service = this;

                var modalOptions = {
                    backdrop: true,
                    keyboard: true,
                    modalFade: true,
                    templateUrl: 'app/modules/core/views/modal.html',
                    controller: function ($scope, $modalInstance) {
                    }
                };

                service.show = function (customModel) {
                    var tempModel = {};

                    var model = {
                        cancelActionText: 'Cancel',
                        confirmActionText: 'OK',
                        headerText: 'Proceed?',
                        bodyText: 'Perform this action?'
                    };

                    angular.extend(tempModel, model, customModel);

                    modalOptions.controller = function ($scope, $modalInstance) {
                        $scope.model = tempModel;
                    };

                    return $modal.open(modalOptions).result;
                };

                service.confirm = function (title, text) {
                    var model = {
                        cancelActionText: 'No',
                        confirmActionText: 'Yes',
                        headerText: title,
                        bodyText: text
                    };

                    modalOptions.controller = function ($scope) {
                        $scope.model = model;
                    };

                    return $modal.open(modalOptions).result;
                };
            }]);
    })(MyShuttle.Core || (MyShuttle.Core = {}));
    var Core = MyShuttle.Core;
})(MyShuttle || (MyShuttle = {}));
