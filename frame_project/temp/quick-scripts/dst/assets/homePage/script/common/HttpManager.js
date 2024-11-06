
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/HttpManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxIdHRwTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLFNBR1g7QUFIRCxXQUFZLFNBQVM7SUFDakIsd0JBQVcsQ0FBQTtJQUNYLDBCQUFhLENBQUE7QUFDakIsQ0FBQyxFQUhXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBR3BCO0FBRUQsSUFBWSxVQUVYO0FBRkQsV0FBWSxVQUFVO0lBQ2xCLG1EQUFRLENBQUE7QUFDWixDQUFDLEVBRlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFFckI7QUFFRDtJQUFBO0lBbURBLENBQUM7SUEvQ1UsZ0JBQUksR0FBWCxVQUFZLEdBQVcsRUFBRSxNQUFrQixFQUFFLFFBQW1DLEVBQUUsT0FBeUI7UUFBbEYsdUJBQUEsRUFBQSxhQUFrQjtRQUFFLHlCQUFBLEVBQUEsV0FBc0IsU0FBUyxDQUFDLEdBQUc7UUFBRSx3QkFBQSxFQUFBLGlCQUF5QjtRQUV2RyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUMvQixHQUFHLENBQUMsa0JBQWtCLEdBQUc7Z0JBQ3JCLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7b0JBQ3JCLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7d0JBQ3ZDLElBQUk7NEJBQ0EsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7eUJBQ3pDO3dCQUFDLE9BQU8sS0FBSyxFQUFFOzRCQUNaLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDZjtxQkFDSjt5QkFBTTt3QkFDSCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ2Y7b0JBQ0QsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNuQztZQUNMLENBQUMsQ0FBQztZQUVGLEdBQUcsQ0FBQyxPQUFPLEdBQUcsVUFBQSxHQUFHO2dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQztZQUVGLEdBQUcsQ0FBQyxTQUFTLEdBQUc7Z0JBQ1osTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDNUIsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BDLENBQUMsQ0FBQTtZQUVELElBQUksTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDbkYsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbkM7WUFDRCxJQUFJLFFBQVEsSUFBSSxTQUFTLENBQUMsR0FBRyxJQUFJLE1BQU0sRUFBRTtnQkFDckMsR0FBRyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUM7Z0JBQ3BCLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDakI7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUIsR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFFdEIsSUFBSSxRQUFRLElBQUksU0FBUyxDQUFDLElBQUksRUFBRTtnQkFDNUIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO2FBQzNFO1lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixHQUFLLENBQUMsQ0FBQztZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUF5QixNQUFRLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTCxrQkFBQztBQUFELENBbkRBLEFBbURDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBIVFRQX1RZUEUge1xyXG4gICAgR0VUID0gJ0dFVCcsXHJcbiAgICBQT1NUID0gJ1BPU1QnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEhUVFBfRVJST1Ige1xyXG4gICAgVElNRV9PVVRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cE1hbmFnZXIge1xyXG4gICAgc3RhdGljIHNlbmQodXJsOiBzdHJpbmcsIHBhcmFtcz86IHN0cmluZywgaHR0cFR5cGU/OiBIVFRQX1RZUEUgfCBzdHJpbmcsIHRpbWVvdXQ/OiBudW1iZXIpOiBQcm9taXNlPGFueT47XHJcbiAgICBzdGF0aWMgc2VuZCh1cmw6IHN0cmluZywgcGFyYW1zPzogb2JqZWN0LCBodHRwVHlwZT86IEhUVFBfVFlQRSB8IHN0cmluZywgdGltZW91dD86IG51bWJlcik6IFByb21pc2U8YW55PjtcclxuXHJcbiAgICBzdGF0aWMgc2VuZCh1cmw6IHN0cmluZywgcGFyYW1zOiBhbnkgPSBudWxsLCBodHRwVHlwZTogSFRUUF9UWVBFID0gSFRUUF9UWVBFLkdFVCwgdGltZW91dDogbnVtYmVyID0gNTAwMDAwMCk6IFByb21pc2U8YW55PiB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoeGhyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh4aHIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB4aHIgJiYgeGhyLmFib3J0ICYmIHhoci5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QgZXJyb3InLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KEhUVFBfRVJST1IuVElNRV9PVVQpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChIVFRQX0VSUk9SLlRJTUVfT1VUKTtcclxuICAgICAgICAgICAgICAgIHhociAmJiB4aHIuYWJvcnQgJiYgeGhyLmFib3J0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwYXJhbXMgJiYgdHlwZW9mIChwYXJhbXMpID09IFwib2JqZWN0XCIgJiYgIXBhcmFtcy5sZW5ndGggJiYgIUFycmF5LmlzQXJyYXkocGFyYW1zKSkge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zID0gSlNPTi5zdHJpbmdpZnkocGFyYW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaHR0cFR5cGUgPT0gSFRUUF9UWVBFLkdFVCAmJiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIHVybCArPSAnPycgKyBwYXJhbXM7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHhoci5vcGVuKGh0dHBUeXBlLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICB4aHIudGltZW91dCA9IHRpbWVvdXQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoaHR0cFR5cGUgPT0gSFRUUF9UWVBFLlBPU1QpIHtcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeGhyLnNlbmQocGFyYW1zKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFtoc19nYW1lXVJlcXVlc3QgVVJMOiR7dXJsfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgW2hzX2dhbWVdUmVxdWVzdCBEYXRhOiR7cGFyYW1zfWApO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iXX0=