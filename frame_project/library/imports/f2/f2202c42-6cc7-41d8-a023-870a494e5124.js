"use strict";
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