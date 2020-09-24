"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triggerEnum = void 0;
var react_native_1 = require("react-native");
var react_1 = require("react");
var PdaScan = react_native_1.NativeModules.PdaScan;
var triggerEnum;
(function (triggerEnum) {
    triggerEnum["always"] = "always";
    triggerEnum["change"] = "change";
})(triggerEnum = exports.triggerEnum || (exports.triggerEnum = {}));
var usePdaScan = function (_a) {
    var onError = _a.onError, onEvent = _a.onEvent, _b = _a.trigger, trigger = _b === void 0 ? triggerEnum.always : _b;
    var _c = react_1.useState(""), code = _c[0], setCode = _c[1];
    var _d = react_1.useState(undefined), error = _d[0], setError = _d[1];
    react_1.useEffect(function () {
        var eventEmitter = new react_native_1.NativeEventEmitter(PdaScan);
        var eventHandle = eventEmitter.addListener("onEvent", function (event) {
            if (trigger === triggerEnum.always) {
                setCode(event.code);
                onEvent && onEvent(event.code);
            }
            if (trigger === triggerEnum.change && event.code != code) {
                setCode(event.code);
                onEvent && onEvent(event.code);
            }
        });
        return function () {
            eventHandle.remove();
        };
    }, [onEvent, PdaScan]);
    react_1.useEffect(function () {
        var eventEmitter = new react_native_1.NativeEventEmitter(PdaScan);
        var eventHandle = eventEmitter.addListener("onError", function (event) {
            setError(event);
            onError && onError(event);
        });
        return function () {
            eventHandle.remove();
        };
    }, [onError, PdaScan]);
    return {
        code: code,
        error: error,
    };
};
exports.default = usePdaScan;
