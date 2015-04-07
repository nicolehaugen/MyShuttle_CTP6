/// <reference path="../../../_app.ts" />
/// <reference path="../core.ts" />

module MyShuttle.Core {
    export class StorageService {

        constructor(private $window) {
            return this;
        }

        public getValue(key, defaultValue): string {
            return this.$window.localStorage.getItem(key) || defaultValue;
        }

        public setValue(key, value): void {
            this.$window.localStorage.setItem(key, value);
        }
    }

    angularModule.factory('storageService', ($window) => {
        return new MyShuttle.Core.StorageService($window);
    });
}