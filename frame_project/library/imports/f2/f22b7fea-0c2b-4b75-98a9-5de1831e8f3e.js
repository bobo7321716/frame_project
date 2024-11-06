"use strict";
cc._RF.push(module, 'f22b7/qDCtLdZipXeGDHo8+', 'HttpManager');
// homePage/script/common/HttpManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP_ERROR = exports.HTTP_TYPE = void 0;
var HTTP_TYPE;
(function (HTTP_TYPE) {
    HTTP_TYPE["GET"] = "GET";
    HTTP_TYPE["POST"] = "POST";
})(HTTP_TYPE = exports.HTTP_TYPE || (exports.HTTP_TYPE = {}));
var HTTP_ERROR;
(function (HTTP_ERROR) {
    HTTP_ERROR[HTTP_ERROR["TIME_OUT"] = 0] = "TIME_OUT";
})(HTTP_ERROR = exports.HTTP_ERROR || (exports.HTTP_ERROR = {}));
var HttpManager = /** @class */ (function () {
    function HttpManager() {
    }
    HttpManager.send = function (url, params, httpType, timeout) {
        if (params === void 0) { params = null; }
        if (httpType === void 0) { httpType = HTTP_TYPE.GET; }
        if (timeout === void 0) { timeout = 5000000; }
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status >= 200 && xhr.status < 400) {
                        try {
                            resolve(JSON.parse(xhr.responseText));
                        }
                        catch (error) {
                            reject(xhr);
                        }
                    }
                    else {
                        reject(xhr);
                    }
                    xhr && xhr.abort && xhr.abort();
                }
            };
            xhr.onerror = function (err) {
                console.log('request error', err);
                reject(HTTP_ERROR.TIME_OUT);
            };
            xhr.ontimeout = function () {
                reject(HTTP_ERROR.TIME_OUT);
                xhr && xhr.abort && xhr.abort();
            };
            if (params && typeof (params) == "object" && !params.length && !Array.isArray(params)) {
                params = JSON.stringify(params);
            }
            if (httpType == HTTP_TYPE.GET && params) {
                url += '?' + params;
                params = null;
            }
            xhr.open(httpType, url, true);
            xhr.timeout = timeout;
            if (httpType == HTTP_TYPE.POST) {
                xhr.setRequestHeader("Content-Type", 'application/json; charset=utf-8');
            }
            xhr.send(params);
            console.log("[hs_game]Request URL:" + url);
            console.log("[hs_game]Request Data:" + params);
        });
    };
    return HttpManager;
}());
exports.default = HttpManager;

cc._RF.pop();