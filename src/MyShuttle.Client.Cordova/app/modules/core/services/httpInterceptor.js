var MyShuttle;
(function (MyShuttle) {
    (function (Core) {
        var HttpInterceptorService = (function () {
            function HttpInterceptorService($http, messengerService, $q) {
                this.$http = $http;
                this.messengerService = messengerService;
                this.$q = $q;
                this.requestCompleted = function (forceEndLoading) {
                    if (forceEndLoading || (this.$http.pendingRequests.length < 1)) {
                        this.messengerService.send(this.messengerService.messageTypes.endLoading);
                    }
                };
                this.startRequest = function () {
                    this.messengerService.send(this.messengerService.messageTypes.startLoading);
                };
                this.requestSuccess = function (response) {
                    this.requestCompleted(false);
                    return response;
                };
                this.requestError = function (response) {
                    this.requestCompleted(false);

                    console.log('An error ocurred: ' + response);

                    return this.$q.reject(response);
                };
                return this;
            }
            return HttpInterceptorService;
        })();
        Core.HttpInterceptorService = HttpInterceptorService;

        Core.angularModule.service('httpInterceptorService', HttpInterceptorService);
    })(MyShuttle.Core || (MyShuttle.Core = {}));
    var Core = MyShuttle.Core;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=httpInterceptor.js.map
