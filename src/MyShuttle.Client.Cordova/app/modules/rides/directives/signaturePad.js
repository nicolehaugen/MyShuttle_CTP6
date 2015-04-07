var MyShuttle;
(function (MyShuttle) {
    (function (Rides) {
        Rides.angularModule.directive('msSignaturePad', function ($window, messengerService) {
            var link = function (scope, element, attrs) {
                var padOptions = {
                    drawOnly: true,
                    defaultAction: 'drawIt',
                    validateFields: false,
                    lineWidth: 0,
                    output: null,
                    sigNav: null,
                    name: null,
                    typed: null,
                    typeIt: null,
                    drawIt: null,
                    typeItDesc: null,
                    drawItDesc: null
                };

                var $form = $('form.canvas-wrapper');
                var control = $form.signaturePad(padOptions);

                var canvas = element.find('.pad')[0];

                function resizeCanvas() {
                    var ratio = $window.devicePixelRatio || 1;
                    canvas.width = $form.outerWidth();
                    canvas.height = $form.outerHeight();
                }

                $window.onresize = resizeCanvas;
                resizeCanvas();

                scope.$on(messengerService.messageTypes.getSignature, function (event, callback) {
                    var signature = control.getSignatureImage();
                    if (signature && signature.indexOf('data:image/png;base64,') === 0) {
                        signature = signature.split('base64,')[1];
                    }
                    callback(signature);
                });
            };

            return {
                restrict: 'E',
                template: '<form method="POST" class="canvas-wrapper"><canvas class="pad"></canvas></form>',
                link: link
            };
        });
    })(MyShuttle.Rides || (MyShuttle.Rides = {}));
    var Rides = MyShuttle.Rides;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=signaturePad.js.map
