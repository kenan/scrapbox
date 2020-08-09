"use strict";
exports.__esModule = true;
exports.Observable = void 0;
var Observable = /** @class */ (function () {
    function Observable(subscrible) {
        this._isScalar = false;
        if (subscrible) {
            this._subscribe = subscribe;
        }
    }
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        // 
    };
    return Observable;
}());
exports.Observable = Observable;
