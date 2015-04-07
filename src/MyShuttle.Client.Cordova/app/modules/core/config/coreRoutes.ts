/// <reference path="../../../_app.ts" />
/// <reference path="../core.ts" />

module MyShuttle.Core {
    angularModule.config(function ($routeProvider: ng.route.IRouteProvider) {
        $routeProvider.otherwise({ redirectTo: '/home' });
    });
}