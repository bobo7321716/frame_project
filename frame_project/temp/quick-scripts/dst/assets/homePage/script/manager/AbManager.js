
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/AbManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2202xCbMdB2KAjhwpJTlEk', 'AbManager');
// homePage/script/manager/AbManager.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbManager = void 0;
var TipManager_1 = require("./TipManager");
var AbManager = /** @class */ (function () {
    function AbManager() {
    }
    AbManager.getBundle = function (bundleName) {
        if (!bundleName) {
            return Promise.resolve(null);
        }
        var targetBundle = cc.assetManager.getBundle(bundleName);
        if (targetBundle) {
            return Promise.resolve(targetBundle);
        }
        if (this.bundleMap.has(bundleName)) {
            return this.bundleMap.get(bundleName);
        }
        var self = this;
        this.bundleMap.set(bundleName, new Promise(function (resolve, reject) {
            cc.assetManager.loadBundle(bundleName, function (error, bundle) {
                if (error) {
                    resolve(null);
                }
                else {
                    resolve(bundle);
                }
                self.bundleMap.delete(bundleName);
            });
        }));
        return this.bundleMap.get(bundleName);
    };
    /**
     * 加载子包
     * @param bundleList 子包名称列表
     * ## 请确保子包列表已按照优先级排序
     */
    AbManager.loadSubPackage = function (bundleList) {
        if (!bundleList || bundleList.length <= 0) {
            console.error("bundle list not exist or length less zero");
            return Promise.resolve(null);
        }
        this.loadSubIndex = 0;
        var self = this;
        return new Promise(function (resolve, reject) {
            self.circleLoadBundle(bundleList, resolve);
        });
    };
    AbManager.circleLoadBundle = function (bundleList, resolve) {
        var self = this;
        var bundleName = bundleList[self.loadSubIndex];
        this.getBundle(bundleName).then(function (bundle) {
            if (!bundle) {
                self.circleLoadBundle(bundleList, resolve);
            }
            else {
                console.log("分包 " + bundleName + " 加载完成");
                self.loadSubIndex++;
                if (self.loadSubIndex < bundleList.length) {
                    self.circleLoadBundle(bundleList, resolve);
                    return;
                }
                resolve(true);
            }
        });
    };
    /**
     * 添加重试和超时的资源加载方法
     * @param retryTimes 重试次数
     * @param loadOutTime 超时时长（毫秒）
     * @param tipOutTime 提示超时时长（毫秒）
     * @returns 加载成功进resolve，返回资源，失败进reject，返回null
     */
    AbManager.loadBundleResWitchTimeout = function (bundleName, url, assetsType, isAddRef, retryTimes, loadOutTime, tipOutTime) {
        if (isAddRef === void 0) { isAddRef = true; }
        if (retryTimes === void 0) { retryTimes = 3; }
        if (loadOutTime === void 0) { loadOutTime = 10000; }
        if (tipOutTime === void 0) { tipOutTime = 2000; }
        return __awaiter(this, void 0, Promise, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBundle(bundleName)];
                    case 1:
                        result = _a.sent();
                        if (!result) {
                            console.error("can not get target bundle");
                            return [2 /*return*/, Promise.reject(null)];
                        }
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var tipTimeOut = null;
                                if (tipOutTime > 0) {
                                    tipTimeOut = setTimeout(function () {
                                        TipManager_1.default.ins.showTip("资源加载中，请稍后");
                                    }, tipOutTime);
                                }
                                var isTimeOut = false;
                                var loadTimeOut = setTimeout(function () {
                                    isTimeOut = true;
                                    console.warn("loadTimeOut", url);
                                    clearTimeout(tipTimeOut);
                                    reject(null);
                                }, loadOutTime);
                                var retry = 0;
                                var retryCall = function (asset) {
                                    if (asset) {
                                        // console.warn("加载成功", url)
                                        clearTimeout(loadTimeOut);
                                        clearTimeout(tipTimeOut);
                                        resolve(asset);
                                    }
                                    else {
                                        if (!isTimeOut) {
                                            retry++;
                                            if (retry >= retryTimes) {
                                                clearTimeout(loadTimeOut);
                                                clearTimeout(tipTimeOut);
                                                console.warn("加载失败", url);
                                                reject(null);
                                            }
                                            else {
                                                setTimeout(function () {
                                                    _this.loadBundleRes(bundleName, url, assetsType, isAddRef).then(retryCall);
                                                }, 200);
                                            }
                                        }
                                    }
                                };
                                _this.loadBundleRes(bundleName, url, assetsType, isAddRef).then(retryCall);
                            })];
                }
            });
        });
    };
    /**
     * 加载某一bundle路径下的单一资源
     * @param bundleName bundle名称
     * @param url bundle下的资源路径
     * @param assetType 资源类型
     * @param isAddRef 是否增加引用计数
     */
    AbManager.loadBundleRes = function (bundleName, url, assetType, isAddRef) {
        if (isAddRef === void 0) { isAddRef = true; }
        return __awaiter(this, void 0, Promise, function () {
            var bundle;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBundle(bundleName)];
                    case 1:
                        bundle = _a.sent();
                        if (!bundle) {
                            console.error("can not get target bundle");
                            return [2 /*return*/, Promise.resolve(null)];
                        }
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                bundle.load(url, assetType, function (error, asset) {
                                    if (error) {
                                        console.error("loadBundleRes 失败! bundleName : ", bundleName, " url : ", url, error);
                                        resolve(null);
                                    }
                                    else {
                                        if (isAddRef && _this.isAutoReleaseAsset) {
                                            asset.addRef();
                                            _this.resUuidMap.set(asset._uuid, asset);
                                        }
                                        resolve(asset);
                                    }
                                });
                            })];
                }
            });
        });
    };
    /**加载资源,增加单个资源最小加载间隔
     * interval:最小加载间隔 毫秒
     */
    AbManager.loadAssetsAddInterval = function (bundleName, url, assetsType, interval) {
        var _this = this;
        if (interval === void 0) { interval = 500; }
        return new Promise(function (resolve, reject) {
            var timer = Date.now();
            var loadPromise = _this.loadBundleRes(bundleName, url, assetsType);
            var delayPromise = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve(null);
                }, interval);
            });
            Promise.all([loadPromise, delayPromise]).then(function () {
                console.log("loadPreAddInterval 加载耗时 ", url, Date.now() - timer);
                resolve(null);
            });
        });
    };
    /**
     * 加载某一bundle路径下某一文件夹下的所有资源
     * @param bundleName bundle名称
     * @param url bundle下的资源路径
     * @param type 指定需要加载的资源类型
     */
    AbManager.loadBundleDir = function (bundleName, url, type) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBundle(bundleName)];
                    case 1:
                        result = _a.sent();
                        if (!result) {
                            console.error("can not get target bundle in loadBundleDir");
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                if (type) {
                                    result.loadDir(url, type, function (error, assets) {
                                        if (error) {
                                            console.error("loadBundleDir 失败! bundleName : ", bundleName, " url : ", url);
                                            resolve(null);
                                        }
                                        else {
                                            resolve(assets);
                                        }
                                    });
                                }
                                else {
                                    result.loadDir(url, function (error, assets) {
                                        if (error) {
                                            console.error("loadBundleDir 失败! bundleName : ", bundleName, " url : ", url);
                                            resolve(null);
                                        }
                                        else {
                                            resolve(assets);
                                        }
                                    });
                                }
                            })];
                }
            });
        });
    };
    /**
     * 预加载某一bundle路径下的单一资源
     * @param bundleName bundle名称
     * @param url bundle下的资源路径
     * @param type 指定需要加载的资源类型
     */
    AbManager.preloadBundleRes = function (bundleName, url, type) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBundle(bundleName)];
                    case 1:
                        result = _a.sent();
                        if (!result) {
                            console.error("can not get target bundle");
                            return [2 /*return*/, Promise.resolve(null)];
                        }
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                result.preload(url, type, function (error, items) {
                                    if (error) {
                                        console.error("preloadBundleRes 失败! bundleName : ", bundleName, " url : ", url, error);
                                        resolve(null);
                                    }
                                    else {
                                        resolve(items);
                                    }
                                });
                            })];
                }
            });
        });
    };
    /**
     * 预加载某一bundle路径下某一文件夹下的所有资源
     * @param bundleName bundle名称
     * @param url bundle下的资源路径
     * @param type 指定需要加载的资源类型
     */
    AbManager.preloadBundleDir = function (bundleName, url, type) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBundle(bundleName)];
                    case 1:
                        result = _a.sent();
                        if (!result) {
                            console.error("can not get target bundle in loadBundleDir");
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                if (type) {
                                    result.preloadDir(url, type, function (error, items) {
                                        if (error) {
                                            console.error("preloadBundleDir 失败! bundleName : ", bundleName, " url : ", url);
                                            resolve(null);
                                        }
                                        else {
                                            resolve(items);
                                        }
                                    });
                                }
                                else {
                                    result.preloadDir(url, function (error, items) {
                                        if (error) {
                                            console.error("preloadBundleDir 失败! bundleName : ", bundleName, " url : ", url);
                                            resolve(null);
                                        }
                                        else {
                                            resolve(items);
                                        }
                                    });
                                }
                            })];
                }
            });
        });
    };
    /**预加载资源数组 */
    AbManager.preloadAssets = function (preloadRes, assetsType) {
        var promiseArr = [];
        for (var i = 0; i < preloadRes.length; i++) {
            var bundleData = preloadRes[i];
            var preLoadPromise = this.preloadBundleRes(bundleData.bundle, bundleData.url, assetsType);
            promiseArr.push(preLoadPromise);
        }
        return Promise.all(promiseArr);
    };
    /**预加载资源,增加单个资源最小加载间隔
     * interval:最小加载间隔 毫秒
     */
    AbManager.preloadAssetsAddInterval = function (preloadRes, assetsType, interval) {
        var _this = this;
        if (interval === void 0) { interval = 500; }
        return new Promise(function (resolve, reject) {
            var index = 0;
            var timer = 0;
            var call = function () {
                timer = Date.now();
                var bundleData = preloadRes[index];
                var preLoadPromise = _this.preloadBundleRes(bundleData.bundleName, bundleData.url, assetsType);
                var delayPromise = new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        resolve(null);
                    }, interval);
                });
                Promise.all([preLoadPromise, delayPromise]).then(function () {
                    console.log("preloadPreAddInterval 加载耗时 ", bundleData.url, Date.now() - timer);
                    index++;
                    if (index < preloadRes.length) {
                        call();
                    }
                    else {
                        resolve(null);
                    }
                });
            };
            call();
        });
    };
    /**加载远程资源 */
    AbManager.loadRemote = function (remoteUrl, assetsType) {
        return new Promise(function (resolve, reject) {
            cc.assetManager.loadRemote(remoteUrl, assetsType, function (error, assets) {
                if (error) {
                    console.error("loadRemote 失败! remoteUrl : ", remoteUrl, error);
                    resolve(null);
                }
                else {
                    resolve(assets);
                }
            });
        });
    };
    AbManager.loadBundleResArray = function (resInfo) {
        var loadArr = [];
        for (var _i = 0, resInfo_1 = resInfo; _i < resInfo_1.length; _i++) {
            var data = resInfo_1[_i];
            loadArr.push(this.loadBundleRes(data.bundleName, data.url, data.assetsType, data.isAddRef));
        }
        return Promise.all(loadArr);
    };
    /**释放bundle内所有资源，移除bundle */
    AbManager.releaseBundle = function (bundleName) {
        return __awaiter(this, void 0, void 0, function () {
            var bundle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBundle(bundleName)];
                    case 1:
                        bundle = _a.sent();
                        if (!bundle) {
                            console.error("can not get target bundle in loadBundleDir");
                            return [2 /*return*/];
                        }
                        bundle.releaseAll();
                        cc.assetManager.removeBundle(bundle);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**回收资源时减少引用计数 */
    AbManager.decRef = function (uuid, decCount) {
        if (decCount === void 0) { decCount = 1; }
        if (!this.isAutoReleaseAsset)
            return;
        var asset = this.resUuidMap.get(uuid);
        if (!asset)
            return;
        for (var i = 0; i < decCount; i++) {
            asset.decRef();
        }
        if (asset.refCount <= 0) {
            this.resUuidMap.delete(uuid);
        }
    };
    /**是否自动释放资源 */
    AbManager.isAutoReleaseAsset = false;
    //记录加载过的资源
    AbManager.resUuidMap = new Map();
    AbManager.bundleMap = new Map();
    AbManager.loadSubIndex = 0;
    return AbManager;
}());
exports.AbManager = AbManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcQWJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUFzQztBQUV0QztJQUFBO0lBMlhBLENBQUM7SUFqWGlCLG1CQUFTLEdBQXZCLFVBQXdCLFVBQWtCO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDYixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7UUFFRCxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RCxJQUFJLFlBQVksRUFBRTtZQUNkLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4QztRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN6QztRQUVELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxPQUFPLENBQ3RDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDWixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBTTtnQkFDakQsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNqQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ25CO2dCQUNELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUNKLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUlEOzs7O09BSUc7SUFDVyx3QkFBYyxHQUE1QixVQUE2QixVQUF5QjtRQUNsRCxJQUFJLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztZQUMzRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsT0FBTyxJQUFJLE9BQU8sQ0FDZCxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ1osSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFYywwQkFBZ0IsR0FBL0IsVUFBZ0MsVUFBeUIsRUFBRSxPQUFPO1FBQzlELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLFVBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBOEI7WUFDM0QsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDVCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzlDO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxPQUFPLENBQUMsQ0FBQTtnQkFDekMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRTtvQkFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDM0MsT0FBTztpQkFDVjtnQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakI7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDaUIsbUNBQXlCLEdBQTdDLFVBQThDLFVBQWtCLEVBQUUsR0FBVyxFQUFFLFVBQTJCLEVBQUUsUUFBd0IsRUFBRSxVQUFzQixFQUFFLFdBQTJCLEVBQUUsVUFBeUI7UUFBeEcseUJBQUEsRUFBQSxlQUF3QjtRQUFFLDJCQUFBLEVBQUEsY0FBc0I7UUFBRSw0QkFBQSxFQUFBLG1CQUEyQjtRQUFFLDJCQUFBLEVBQUEsaUJBQXlCO3VDQUFHLE9BQU87Ozs7OzRCQUNyTCxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBakUsTUFBTSxHQUEyQixTQUFnQzt3QkFDckUsSUFBSSxDQUFDLE1BQU0sRUFBRTs0QkFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7NEJBQzNDLHNCQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUM7eUJBQy9CO3dCQUNELHNCQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0NBQy9CLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQztnQ0FDdEIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFO29DQUNoQixVQUFVLEdBQUcsVUFBVSxDQUFDO3dDQUNwQixvQkFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7b0NBQ3hDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztpQ0FDbEI7Z0NBQ0QsSUFBSSxTQUFTLEdBQVksS0FBSyxDQUFDO2dDQUMvQixJQUFJLFdBQVcsR0FBRyxVQUFVLENBQUM7b0NBQ3pCLFNBQVMsR0FBRyxJQUFJLENBQUM7b0NBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFBO29DQUNoQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7b0NBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FDakIsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dDQUVoQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Z0NBQ2QsSUFBSSxTQUFTLEdBQUcsVUFBQyxLQUFlO29DQUM1QixJQUFJLEtBQUssRUFBRTt3Q0FDUCw0QkFBNEI7d0NBQzVCLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQzt3Q0FDMUIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dDQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7cUNBQ2xCO3lDQUFNO3dDQUNILElBQUksQ0FBQyxTQUFTLEVBQUU7NENBQ1osS0FBSyxFQUFFLENBQUM7NENBQ1IsSUFBSSxLQUFLLElBQUksVUFBVSxFQUFFO2dEQUNyQixZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7Z0RBQzFCLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztnREFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUE7Z0RBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs2Q0FDaEI7aURBQU07Z0RBQ0gsVUFBVSxDQUFDO29EQUNQLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dEQUM5RSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7NkNBQ1g7eUNBQ0o7cUNBQ0o7Z0NBQ0wsQ0FBQyxDQUFBO2dDQUNELEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzRCQUM5RSxDQUFDLENBQUMsRUFBQTs7OztLQUNMO0lBRUQ7Ozs7OztPQU1HO0lBQ2lCLHVCQUFhLEdBQWpDLFVBQWtDLFVBQWtCLEVBQUUsR0FBVyxFQUFFLFNBQTBCLEVBQUUsUUFBd0I7UUFBeEIseUJBQUEsRUFBQSxlQUF3Qjt1Q0FBRyxPQUFPOzs7Ozs0QkFDeEYscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBQTs7d0JBQWpFLE1BQU0sR0FBMkIsU0FBZ0M7d0JBQ3JFLElBQUksQ0FBQyxNQUFNLEVBQUU7NEJBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDOzRCQUMzQyxzQkFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDO3lCQUNoQzt3QkFDRCxzQkFBTyxJQUFJLE9BQU8sQ0FDZCxVQUFDLE9BQU8sRUFBRSxNQUFNO2dDQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFDLEtBQUssRUFBRSxLQUFLO29DQUNyQyxJQUFJLEtBQUssRUFBRTt3Q0FDUCxPQUFPLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO3dDQUNwRixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7cUNBQ2hCO3lDQUFNO3dDQUNILElBQUksUUFBUSxJQUFJLEtBQUksQ0FBQyxrQkFBa0IsRUFBRTs0Q0FDckMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDOzRDQUNmLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7eUNBQzNDO3dDQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQ0FDbEI7Z0NBQ0wsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsQ0FBQyxDQUNKLEVBQUM7Ozs7S0FDTDtJQUVEOztPQUVHO0lBQ1csK0JBQXFCLEdBQW5DLFVBQW9DLFVBQWtCLEVBQUUsR0FBVyxFQUFFLFVBQTJCLEVBQUUsUUFBc0I7UUFBeEgsaUJBY0M7UUFkaUcseUJBQUEsRUFBQSxjQUFzQjtRQUNwSCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLElBQUksV0FBVyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNsRSxJQUFJLFlBQVksR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUMzQyxVQUFVLENBQUM7b0JBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUE7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQ2pFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVEOzs7OztPQUtHO0lBQ2lCLHVCQUFhLEdBQWpDLFVBQWtDLFVBQWtCLEVBQUUsR0FBVyxFQUFFLElBQXNCO3VDQUFHLE9BQU87Ozs7NEJBQzFELHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUE7O3dCQUFqRSxNQUFNLEdBQTJCLFNBQWdDO3dCQUNyRSxJQUFJLENBQUMsTUFBTSxFQUFFOzRCQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQzs0QkFDNUQsc0JBQU87eUJBQ1Y7d0JBRUQsc0JBQU8sSUFBSSxPQUFPLENBQ2QsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQ0FDWixJQUFJLElBQUksRUFBRTtvQ0FDTixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBa0I7d0NBQ2hELElBQUksS0FBSyxFQUFFOzRDQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUNBQWlDLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQzs0Q0FDN0UsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO3lDQUNoQjs2Q0FBTTs0Q0FDSCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7eUNBQ25CO29DQUNMLENBQUMsQ0FBQyxDQUFDO2lDQUNOO3FDQUFNO29DQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQUMsS0FBSyxFQUFFLE1BQWtCO3dDQUMxQyxJQUFJLEtBQUssRUFBRTs0Q0FDUCxPQUFPLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7NENBQzdFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTt5Q0FDaEI7NkNBQU07NENBQ0gsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3lDQUNuQjtvQ0FDTCxDQUFDLENBQUMsQ0FBQztpQ0FDTjs0QkFDTCxDQUFDLENBQ0osRUFBQzs7OztLQUNMO0lBR0Q7Ozs7O09BS0c7SUFDaUIsMEJBQWdCLEdBQXBDLFVBQXFDLFVBQWtCLEVBQUUsR0FBVyxFQUFFLElBQXFCO3VDQUFHLE9BQU87Ozs7NEJBQzVELHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUE7O3dCQUFqRSxNQUFNLEdBQTJCLFNBQWdDO3dCQUNyRSxJQUFJLENBQUMsTUFBTSxFQUFFOzRCQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQzs0QkFDM0Msc0JBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQzt5QkFDaEM7d0JBRUQsc0JBQU8sSUFBSSxPQUFPLENBQ2QsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQ0FDWixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBQyxLQUFLLEVBQUUsS0FBSztvQ0FDbkMsSUFBSSxLQUFLLEVBQUU7d0NBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQzt3Q0FDdkYsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO3FDQUNoQjt5Q0FBTTt3Q0FDSCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7cUNBQ2xCO2dDQUNMLENBQUMsQ0FBQyxDQUFDOzRCQUNQLENBQUMsQ0FDSixFQUFDOzs7O0tBQ0w7SUFHRDs7Ozs7T0FLRztJQUNpQiwwQkFBZ0IsR0FBcEMsVUFBcUMsVUFBa0IsRUFBRSxHQUFXLEVBQUUsSUFBc0I7dUNBQUcsT0FBTzs7Ozs0QkFDN0QscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBQTs7d0JBQWpFLE1BQU0sR0FBMkIsU0FBZ0M7d0JBQ3JFLElBQUksQ0FBQyxNQUFNLEVBQUU7NEJBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDOzRCQUM1RCxzQkFBTzt5QkFDVjt3QkFFRCxzQkFBTyxJQUFJLE9BQU8sQ0FDZCxVQUFDLE9BQU8sRUFBRSxNQUFNO2dDQUNaLElBQUksSUFBSSxFQUFFO29DQUNOLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFDLEtBQUssRUFBRSxLQUFLO3dDQUN0QyxJQUFJLEtBQUssRUFBRTs0Q0FDUCxPQUFPLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7NENBQ2hGLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTt5Q0FDaEI7NkNBQU07NENBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3lDQUNsQjtvQ0FDTCxDQUFDLENBQUMsQ0FBQztpQ0FDTjtxQ0FBTTtvQ0FDSCxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFDLEtBQUssRUFBRSxLQUFLO3dDQUNoQyxJQUFJLEtBQUssRUFBRTs0Q0FDUCxPQUFPLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7NENBQ2hGLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTt5Q0FDaEI7NkNBQU07NENBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3lDQUNsQjtvQ0FDTCxDQUFDLENBQUMsQ0FBQztpQ0FDTjs0QkFDTCxDQUFDLENBQ0osRUFBQzs7OztLQUNMO0lBRUQsYUFBYTtJQUNDLHVCQUFhLEdBQTNCLFVBQTRCLFVBQXdCLEVBQUUsVUFBMkI7UUFDN0UsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQzFGLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDbkM7UUFDRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ1csa0NBQXdCLEdBQXRDLFVBQXVDLFVBQWlELEVBQUUsVUFBMkIsRUFBRSxRQUFzQjtRQUE3SSxpQkF5QkM7UUF6QnNILHlCQUFBLEVBQUEsY0FBc0I7UUFDekksT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNkLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNkLElBQUksSUFBSSxHQUFHO2dCQUNQLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ25CLElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxjQUFjLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDOUYsSUFBSSxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDM0MsVUFBVSxDQUFDO3dCQUNQLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEIsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNqQixDQUFDLENBQUMsQ0FBQTtnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO29CQUMvRSxLQUFLLEVBQUUsQ0FBQztvQkFDUixJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFO3dCQUMzQixJQUFJLEVBQUUsQ0FBQztxQkFDVjt5QkFBTTt3QkFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ2pCO2dCQUNMLENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFBO1lBQ0QsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxZQUFZO0lBQ0Usb0JBQVUsR0FBeEIsVUFBeUIsU0FBaUIsRUFBRSxVQUE0QjtRQUNwRSxPQUFPLElBQUksT0FBTyxDQUNkLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDWixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQUMsS0FBSyxFQUFFLE1BQWdCO2dCQUN0RSxJQUFJLEtBQUssRUFBRTtvQkFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDL0QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO2lCQUNoQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ25CO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFYSw0QkFBa0IsR0FBaEMsVUFBaUMsT0FBOEY7UUFDM0gsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLEtBQWlCLFVBQU8sRUFBUCxtQkFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTyxFQUFFO1lBQXJCLElBQUksSUFBSSxnQkFBQTtZQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUMvRjtRQUNELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsNEJBQTRCO0lBQ1IsdUJBQWEsR0FBakMsVUFBa0MsVUFBa0I7Ozs7OzRCQUNYLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUE7O3dCQUFqRSxNQUFNLEdBQTJCLFNBQWdDO3dCQUNyRSxJQUFJLENBQUMsTUFBTSxFQUFFOzRCQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQzs0QkFDNUQsc0JBQU87eUJBQ1Y7d0JBQ0QsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUNwQixFQUFFLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7S0FDeEM7SUFFRCxpQkFBaUI7SUFDSCxnQkFBTSxHQUFwQixVQUFxQixJQUFZLEVBQUUsUUFBb0I7UUFBcEIseUJBQUEsRUFBQSxZQUFvQjtRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQjtZQUFFLE9BQU87UUFDckMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0IsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUNMLENBQUM7SUF2WEQsY0FBYztJQUNQLDRCQUFrQixHQUFZLEtBQUssQ0FBQztJQUUzQyxVQUFVO0lBQ0ssb0JBQVUsR0FBMEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUU5QyxtQkFBUyxHQUFpRCxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBaUNwRSxzQkFBWSxHQUFXLENBQUMsQ0FBQztJQWtWNUMsZ0JBQUM7Q0EzWEQsQUEyWEMsSUFBQTtBQTNYWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1bmRsZURhdGEgfSBmcm9tIFwiLi4vY29tbW9uL0J1bmRsZURhdGFcIjtcclxuaW1wb3J0IFRpcE1hbmFnZXIgZnJvbSBcIi4vVGlwTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFiTWFuYWdlciB7XHJcblxyXG4gICAgLyoq5piv5ZCm6Ieq5Yqo6YeK5pS+6LWE5rqQICovXHJcbiAgICBzdGF0aWMgaXNBdXRvUmVsZWFzZUFzc2V0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy/orrDlvZXliqDovb3ov4fnmoTotYTmupBcclxuICAgIHByaXZhdGUgc3RhdGljIHJlc1V1aWRNYXA6IE1hcDxzdHJpbmcsIGNjLkFzc2V0PiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBidW5kbGVNYXA6IE1hcDxzdHJpbmcsIFByb21pc2U8Y2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZT4+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0QnVuZGxlKGJ1bmRsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8Y2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZT4ge1xyXG4gICAgICAgIGlmICghYnVuZGxlTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRhcmdldEJ1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoYnVuZGxlTmFtZSk7XHJcbiAgICAgICAgaWYgKHRhcmdldEJ1bmRsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRhcmdldEJ1bmRsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5idW5kbGVNYXAuaGFzKGJ1bmRsZU5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1bmRsZU1hcC5nZXQoYnVuZGxlTmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5idW5kbGVNYXAuc2V0KGJ1bmRsZU5hbWUsIG5ldyBQcm9taXNlPGNjLkFzc2V0TWFuYWdlci5CdW5kbGU+KFxyXG4gICAgICAgICAgICAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShidW5kbGVOYW1lLCAoZXJyb3IsIGJ1bmRsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYnVuZGxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5idW5kbGVNYXAuZGVsZXRlKGJ1bmRsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVuZGxlTWFwLmdldChidW5kbGVOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBsb2FkU3ViSW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lrZDljIVcclxuICAgICAqIEBwYXJhbSBidW5kbGVMaXN0IOWtkOWMheWQjeensOWIl+ihqFxyXG4gICAgICogIyMg6K+356Gu5L+d5a2Q5YyF5YiX6KGo5bey5oyJ54Wn5LyY5YWI57qn5o6S5bqPXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFN1YlBhY2thZ2UoYnVuZGxlTGlzdDogQXJyYXk8c3RyaW5nPik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGlmICghYnVuZGxlTGlzdCB8fCBidW5kbGVMaXN0Lmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJidW5kbGUgbGlzdCBub3QgZXhpc3Qgb3IgbGVuZ3RoIGxlc3MgemVyb1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2FkU3ViSW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oXHJcbiAgICAgICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY2lyY2xlTG9hZEJ1bmRsZShidW5kbGVMaXN0LCByZXNvbHZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2lyY2xlTG9hZEJ1bmRsZShidW5kbGVMaXN0OiBBcnJheTxzdHJpbmc+LCByZXNvbHZlKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBidW5kbGVOYW1lID0gYnVuZGxlTGlzdFtzZWxmLmxvYWRTdWJJbmRleF07XHJcbiAgICAgICAgdGhpcy5nZXRCdW5kbGUoYnVuZGxlTmFtZSkudGhlbigoYnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghYnVuZGxlKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNpcmNsZUxvYWRCdW5kbGUoYnVuZGxlTGlzdCwgcmVzb2x2ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWIhuWMhSBcIiArIGJ1bmRsZU5hbWUgKyBcIiDliqDovb3lrozmiJBcIilcclxuICAgICAgICAgICAgICAgIHNlbGYubG9hZFN1YkluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5sb2FkU3ViSW5kZXggPCBidW5kbGVMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2lyY2xlTG9hZEJ1bmRsZShidW5kbGVMaXN0LCByZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOmHjeivleWSjOi2heaXtueahOi1hOa6kOWKoOi9veaWueazlVxyXG4gICAgICogQHBhcmFtIHJldHJ5VGltZXMg6YeN6K+V5qyh5pWwXHJcbiAgICAgKiBAcGFyYW0gbG9hZE91dFRpbWUg6LaF5pe25pe26ZW/77yI5q+r56eS77yJXHJcbiAgICAgKiBAcGFyYW0gdGlwT3V0VGltZSDmj5DnpLrotoXml7bml7bplb/vvIjmr6vnp5LvvIlcclxuICAgICAqIEByZXR1cm5zIOWKoOi9veaIkOWKn+i/m3Jlc29sdmXvvIzov5Tlm57otYTmupDvvIzlpLHotKXov5tyZWplY3TvvIzov5Tlm55udWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZEJ1bmRsZVJlc1dpdGNoVGltZW91dChidW5kbGVOYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nLCBhc3NldHNUeXBlOiB0eXBlb2YgY2MuQXNzZXQsIGlzQWRkUmVmOiBib29sZWFuID0gdHJ1ZSwgcmV0cnlUaW1lczogbnVtYmVyID0gMywgbG9hZE91dFRpbWU6IG51bWJlciA9IDEwMDAwLCB0aXBPdXRUaW1lOiBudW1iZXIgPSAyMDAwKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlID0gYXdhaXQgdGhpcy5nZXRCdW5kbGUoYnVuZGxlTmFtZSk7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImNhbiBub3QgZ2V0IHRhcmdldCBidW5kbGVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRpcFRpbWVPdXQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGlwT3V0VGltZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRpcFRpbWVPdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBUaXBNYW5hZ2VyLmlucy5zaG93VGlwKFwi6LWE5rqQ5Yqg6L295Lit77yM6K+356iN5ZCOXCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgdGlwT3V0VGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGlzVGltZU91dDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgbG9hZFRpbWVPdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlzVGltZU91dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJsb2FkVGltZU91dFwiLCB1cmwpXHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGlwVGltZU91dCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgIH0sIGxvYWRPdXRUaW1lKTtcclxuXHJcbiAgICAgICAgICAgIGxldCByZXRyeSA9IDA7XHJcbiAgICAgICAgICAgIGxldCByZXRyeUNhbGwgPSAoYXNzZXQ6IGNjLkFzc2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oXCLliqDovb3miJDlip9cIiwgdXJsKVxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChsb2FkVGltZU91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpcFRpbWVPdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXNzZXQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVGltZU91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRyeSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmV0cnkgPj0gcmV0cnlUaW1lcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGxvYWRUaW1lT3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aXBUaW1lT3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuWKoOi9veWksei0pVwiLCB1cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCdW5kbGVSZXMoYnVuZGxlTmFtZSwgdXJsLCBhc3NldHNUeXBlLCBpc0FkZFJlZikudGhlbihyZXRyeUNhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxvYWRCdW5kbGVSZXMoYnVuZGxlTmFtZSwgdXJsLCBhc3NldHNUeXBlLCBpc0FkZFJlZikudGhlbihyZXRyeUNhbGwpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3mn5DkuIBidW5kbGXot6/lvoTkuIvnmoTljZXkuIDotYTmupAgXHJcbiAgICAgKiBAcGFyYW0gYnVuZGxlTmFtZSBidW5kbGXlkI3np7BcclxuICAgICAqIEBwYXJhbSB1cmwgYnVuZGxl5LiL55qE6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gYXNzZXRUeXBlIOi1hOa6kOexu+Wei1xyXG4gICAgICogQHBhcmFtIGlzQWRkUmVmIOaYr+WQpuWinuWKoOW8leeUqOiuoeaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGxvYWRCdW5kbGVSZXMoYnVuZGxlTmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZywgYXNzZXRUeXBlOiB0eXBlb2YgY2MuQXNzZXQsIGlzQWRkUmVmOiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IGJ1bmRsZTogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSA9IGF3YWl0IHRoaXMuZ2V0QnVuZGxlKGJ1bmRsZU5hbWUpO1xyXG4gICAgICAgIGlmICghYnVuZGxlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJjYW4gbm90IGdldCB0YXJnZXQgYnVuZGxlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PihcclxuICAgICAgICAgICAgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnVuZGxlLmxvYWQodXJsLCBhc3NldFR5cGUsIChlcnJvciwgYXNzZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImxvYWRCdW5kbGVSZXMg5aSx6LSlISBidW5kbGVOYW1lIDogXCIsIGJ1bmRsZU5hbWUsIFwiIHVybCA6IFwiLCB1cmwsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0FkZFJlZiAmJiB0aGlzLmlzQXV0b1JlbGVhc2VBc3NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQuYWRkUmVmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc1V1aWRNYXAuc2V0KGFzc2V0Ll91dWlkLCBhc3NldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhc3NldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWKoOi9vei1hOa6kCzlop7liqDljZXkuKrotYTmupDmnIDlsI/liqDovb3pl7TpmpRcclxuICAgICAqIGludGVydmFsOuacgOWwj+WKoOi9vemXtOmalCDmr6vnp5IgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEFzc2V0c0FkZEludGVydmFsKGJ1bmRsZU5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcsIGFzc2V0c1R5cGU6IHR5cGVvZiBjYy5Bc3NldCwgaW50ZXJ2YWw6IG51bWJlciA9IDUwMCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRpbWVyID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgbGV0IGxvYWRQcm9taXNlID0gdGhpcy5sb2FkQnVuZGxlUmVzKGJ1bmRsZU5hbWUsIHVybCwgYXNzZXRzVHlwZSk7XHJcbiAgICAgICAgICAgIGxldCBkZWxheVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfSwgaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChbbG9hZFByb21pc2UsIGRlbGF5UHJvbWlzZV0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkUHJlQWRkSW50ZXJ2YWwg5Yqg6L296ICX5pe2IFwiLCB1cmwsIERhdGUubm93KCkgLSB0aW1lcik7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3mn5DkuIBidW5kbGXot6/lvoTkuIvmn5DkuIDmlofku7blpLnkuIvnmoTmiYDmnInotYTmupBcclxuICAgICAqIEBwYXJhbSBidW5kbGVOYW1lIGJ1bmRsZeWQjeensFxyXG4gICAgICogQHBhcmFtIHVybCBidW5kbGXkuIvnmoTotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSB0eXBlIOaMh+WumumcgOimgeWKoOi9veeahOi1hOa6kOexu+Wei1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGxvYWRCdW5kbGVEaXIoYnVuZGxlTmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZywgdHlwZT86IHR5cGVvZiBjYy5Bc3NldCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSA9IGF3YWl0IHRoaXMuZ2V0QnVuZGxlKGJ1bmRsZU5hbWUpO1xyXG4gICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJjYW4gbm90IGdldCB0YXJnZXQgYnVuZGxlIGluIGxvYWRCdW5kbGVEaXJcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KFxyXG4gICAgICAgICAgICAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5sb2FkRGlyKHVybCwgdHlwZSwgKGVycm9yLCBhc3NldHM6IGNjLkFzc2V0W10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwibG9hZEJ1bmRsZURpciDlpLHotKUhIGJ1bmRsZU5hbWUgOiBcIiwgYnVuZGxlTmFtZSwgXCIgdXJsIDogXCIsIHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGFzc2V0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmxvYWREaXIodXJsLCAoZXJyb3IsIGFzc2V0czogY2MuQXNzZXRbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJsb2FkQnVuZGxlRGlyIOWksei0pSEgYnVuZGxlTmFtZSA6IFwiLCBidW5kbGVOYW1lLCBcIiB1cmwgOiBcIiwgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXNzZXRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpooTliqDovb3mn5DkuIBidW5kbGXot6/lvoTkuIvnmoTljZXkuIDotYTmupAgXHJcbiAgICAgKiBAcGFyYW0gYnVuZGxlTmFtZSBidW5kbGXlkI3np7BcclxuICAgICAqIEBwYXJhbSB1cmwgYnVuZGxl5LiL55qE6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gdHlwZSDmjIflrprpnIDopoHliqDovb3nmoTotYTmupDnsbvlnotcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBwcmVsb2FkQnVuZGxlUmVzKGJ1bmRsZU5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcsIHR5cGU6IHR5cGVvZiBjYy5Bc3NldCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSA9IGF3YWl0IHRoaXMuZ2V0QnVuZGxlKGJ1bmRsZU5hbWUpO1xyXG4gICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJjYW4gbm90IGdldCB0YXJnZXQgYnVuZGxlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oXHJcbiAgICAgICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wcmVsb2FkKHVybCwgdHlwZSwgKGVycm9yLCBpdGVtcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwicHJlbG9hZEJ1bmRsZVJlcyDlpLHotKUhIGJ1bmRsZU5hbWUgOiBcIiwgYnVuZGxlTmFtZSwgXCIgdXJsIDogXCIsIHVybCwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpdGVtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmihOWKoOi9veafkOS4gGJ1bmRsZei3r+W+hOS4i+afkOS4gOaWh+S7tuWkueS4i+eahOaJgOaciei1hOa6kFxyXG4gICAgICogQHBhcmFtIGJ1bmRsZU5hbWUgYnVuZGxl5ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gdXJsIGJ1bmRsZeS4i+eahOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIHR5cGUg5oyH5a6a6ZyA6KaB5Yqg6L2955qE6LWE5rqQ57G75Z6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcHJlbG9hZEJ1bmRsZURpcihidW5kbGVOYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nLCB0eXBlPzogdHlwZW9mIGNjLkFzc2V0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlID0gYXdhaXQgdGhpcy5nZXRCdW5kbGUoYnVuZGxlTmFtZSk7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImNhbiBub3QgZ2V0IHRhcmdldCBidW5kbGUgaW4gbG9hZEJ1bmRsZURpclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oXHJcbiAgICAgICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnByZWxvYWREaXIodXJsLCB0eXBlLCAoZXJyb3IsIGl0ZW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInByZWxvYWRCdW5kbGVEaXIg5aSx6LSlISBidW5kbGVOYW1lIDogXCIsIGJ1bmRsZU5hbWUsIFwiIHVybCA6IFwiLCB1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpdGVtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnByZWxvYWREaXIodXJsLCAoZXJyb3IsIGl0ZW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInByZWxvYWRCdW5kbGVEaXIg5aSx6LSlISBidW5kbGVOYW1lIDogXCIsIGJ1bmRsZU5hbWUsIFwiIHVybCA6IFwiLCB1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpdGVtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6aKE5Yqg6L296LWE5rqQ5pWw57uEICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHByZWxvYWRBc3NldHMocHJlbG9hZFJlczogQnVuZGxlRGF0YVtdLCBhc3NldHNUeXBlOiB0eXBlb2YgY2MuQXNzZXQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBwcm9taXNlQXJyID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVsb2FkUmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBidW5kbGVEYXRhID0gcHJlbG9hZFJlc1tpXTtcclxuICAgICAgICAgICAgbGV0IHByZUxvYWRQcm9taXNlID0gdGhpcy5wcmVsb2FkQnVuZGxlUmVzKGJ1bmRsZURhdGEuYnVuZGxlLCBidW5kbGVEYXRhLnVybCwgYXNzZXRzVHlwZSk7XHJcbiAgICAgICAgICAgIHByb21pc2VBcnIucHVzaChwcmVMb2FkUHJvbWlzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlQXJyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirpooTliqDovb3otYTmupAs5aKe5Yqg5Y2V5Liq6LWE5rqQ5pyA5bCP5Yqg6L296Ze06ZqUXHJcbiAgICAgKiBpbnRlcnZhbDrmnIDlsI/liqDovb3pl7TpmpQg5q+r56eSXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcHJlbG9hZEFzc2V0c0FkZEludGVydmFsKHByZWxvYWRSZXM6IHsgYnVuZGxlTmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZyB9W10sIGFzc2V0c1R5cGU6IHR5cGVvZiBjYy5Bc3NldCwgaW50ZXJ2YWw6IG51bWJlciA9IDUwMCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAgICAgbGV0IHRpbWVyID0gMDtcclxuICAgICAgICAgICAgbGV0IGNhbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aW1lciA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnVuZGxlRGF0YSA9IHByZWxvYWRSZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZUxvYWRQcm9taXNlID0gdGhpcy5wcmVsb2FkQnVuZGxlUmVzKGJ1bmRsZURhdGEuYnVuZGxlTmFtZSwgYnVuZGxlRGF0YS51cmwsIGFzc2V0c1R5cGUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlbGF5UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoW3ByZUxvYWRQcm9taXNlLCBkZWxheVByb21pc2VdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInByZWxvYWRQcmVBZGRJbnRlcnZhbCDliqDovb3ogJfml7YgXCIsIGJ1bmRsZURhdGEudXJsLCBEYXRlLm5vdygpIC0gdGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgcHJlbG9hZFJlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKirliqDovb3ov5znqIvotYTmupAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFJlbW90ZShyZW1vdGVVcmw6IHN0cmluZywgYXNzZXRzVHlwZT86IHR5cGVvZiBjYy5Bc3NldCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oXHJcbiAgICAgICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHJlbW90ZVVybCwgYXNzZXRzVHlwZSwgKGVycm9yLCBhc3NldHM6IGNjLkFzc2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJsb2FkUmVtb3RlIOWksei0pSEgcmVtb3RlVXJsIDogXCIsIHJlbW90ZVVybCwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhc3NldHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRCdW5kbGVSZXNBcnJheShyZXNJbmZvOiB7IGJ1bmRsZU5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcsIGFzc2V0c1R5cGU6IHR5cGVvZiBjYy5Bc3NldCwgaXNBZGRSZWY6IGJvb2xlYW4gfVtdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgbG9hZEFyciA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGRhdGEgb2YgcmVzSW5mbykge1xyXG4gICAgICAgICAgICBsb2FkQXJyLnB1c2godGhpcy5sb2FkQnVuZGxlUmVzKGRhdGEuYnVuZGxlTmFtZSwgZGF0YS51cmwsIGRhdGEuYXNzZXRzVHlwZSwgZGF0YS5pc0FkZFJlZikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwobG9hZEFycik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6YeK5pS+YnVuZGxl5YaF5omA5pyJ6LWE5rqQ77yM56e76ZmkYnVuZGxlICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHJlbGVhc2VCdW5kbGUoYnVuZGxlTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGJ1bmRsZTogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSA9IGF3YWl0IHRoaXMuZ2V0QnVuZGxlKGJ1bmRsZU5hbWUpO1xyXG4gICAgICAgIGlmICghYnVuZGxlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJjYW4gbm90IGdldCB0YXJnZXQgYnVuZGxlIGluIGxvYWRCdW5kbGVEaXJcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVuZGxlLnJlbGVhc2VBbGwoKTtcclxuICAgICAgICBjYy5hc3NldE1hbmFnZXIucmVtb3ZlQnVuZGxlKGJ1bmRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Zue5pS26LWE5rqQ5pe25YeP5bCR5byV55So6K6h5pWwICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY1JlZih1dWlkOiBzdHJpbmcsIGRlY0NvdW50OiBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQXV0b1JlbGVhc2VBc3NldCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBhc3NldCA9IHRoaXMucmVzVXVpZE1hcC5nZXQodXVpZCk7XHJcbiAgICAgICAgaWYgKCFhc3NldCkgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVjQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBhc3NldC5kZWNSZWYoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFzc2V0LnJlZkNvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNVdWlkTWFwLmRlbGV0ZSh1dWlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==