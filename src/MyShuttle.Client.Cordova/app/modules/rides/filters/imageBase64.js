var MyShuttle;
(function (MyShuttle) {
    (function (Rides) {
        Rides.angularModule.filter('imageBase64', function () {
            return function (bytes) {
                if (bytes) {
                    if (bytes.slice(0, 11) !== 'data:image/') {
                        bytes = 'data:image/png;base64,' + bytes;
                    }
                    return bytes;
                } else {
                    return '';
                }
            };
        });
    })(MyShuttle.Rides || (MyShuttle.Rides = {}));
    var Rides = MyShuttle.Rides;
})(MyShuttle || (MyShuttle = {}));
//# sourceMappingURL=imageBase64.js.map
