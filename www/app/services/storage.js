"use strict";
/**
 * Created by or.e on 05/09/2017.
 */
exports.__esModule = true;
var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.getItem = function (key) {
        var obj = JSON.parse(localStorage.getItem(key));
        return obj;
    };
    StorageService.setItem = function (key, value) {
        if (typeof value === 'object')
            localStorage.setItem(key, JSON.stringify(value));
        else
            localStorage.setItem(key, value);
    };
    StorageService.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    StorageService.updateActive = function (key) {
        var obj = this.getItem(key);
        if (obj) {
            obj.active = !obj.active;
            this.setItem(key, obj);
        }
    };
    StorageService.getActiveUser = function () {
        for (var key in localStorage) {
            var obj = this.getItem(key);
            if (obj && obj.active)
                return obj;
        }
        return null;
    };
    return StorageService;
}());
exports["default"] = StorageService;
