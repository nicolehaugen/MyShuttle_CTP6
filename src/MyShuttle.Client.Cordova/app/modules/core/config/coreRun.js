var MyShuttle;
(function (MyShuttle) {
    (function (Core) {
        Core.angularModule.run(function (navigationService) {
            document.addEventListener("backbutton", onBackKeyDown.bind(this), false);

            function onBackKeyDown() {
                navigationService.navigateBack();
            }
            ;
        });
    })(MyShuttle.Core || (MyShuttle.Core = {}));
    var Core = MyShuttle.Core;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=coreRun.js.map
