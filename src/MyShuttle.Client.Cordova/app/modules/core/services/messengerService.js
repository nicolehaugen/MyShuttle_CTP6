var MyShuttle;
(function (MyShuttle) {
    (function (Core) {
        var MessengerService = (function () {
            function MessengerService($rootScope) {
                this.$rootScope = $rootScope;
                this.messageTypes = {
                    startLoading: '_START_LOADING_',
                    endLoading: '_END_LOADING_',
                    showNavigateBackBtn: '_SHOW_NAVIGATE_BACK_BTN_',
                    hideNavigateBackBtn: '_HIDE_NAVIGATE_BACK_BTN_',
                    getSignature: '_GET_SIGNATURE_',
                    settingsChanged: '_SETTINGS_CHANGED_'
                };

                return this;
            }
            MessengerService.prototype.send = function (message, data) {
                this.$rootScope.$broadcast(message, data);
            };
            return MessengerService;
        })();
        Core.MessengerService = MessengerService;

        Core.angularModule.service('messengerService', MessengerService);
    })(MyShuttle.Core || (MyShuttle.Core = {}));
    var Core = MyShuttle.Core;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=messengerService.js.map
