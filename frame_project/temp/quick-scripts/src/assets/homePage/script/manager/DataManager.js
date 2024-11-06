"use strict";
cc._RF.push(module, 'fb000C8oHNCs4HkN1aUE1Sa', 'DataManager');
// homePage/script/manager/DataManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BundleName_1 = require("../common/BundleName");
var Config_1 = require("../config/Config");
var AbManager_1 = require("./AbManager");
var DataManager = /** @class */ (function () {
    function DataManager() {
        this._dataMaps = new Map();
        /**当前版本后缀 */
        this.remotePath = "https://cdn.hongshunet.com/zyh/JingShenBingYuan/web/" + appContext.version + "/config/";
        /**是否使用远程配置 */
        this.isRemote = false;
    }
    ;
    Object.defineProperty(DataManager, "ins", {
        get: function () {
            if (this._ins == null) {
                this._ins = new DataManager();
            }
            return this._ins;
        },
        enumerable: false,
        configurable: true
    });
    /**初始化数据管理类*/
    DataManager.prototype.init = function () {
        var _this = this;
        // return Promise.resolve();
        this.isRemote = !CC_DEV;
        console.warn("this.isRemote ", this.isRemote);
        var promiseArr = [];
        for (var k in Config_1.Config) {
            console.log("k ", k);
            promiseArr.push(this.registerData(k, Config_1.Config[k]));
        }
        return Promise.all(promiseArr).then(function () {
            console.log("this._dataMaps ", _this._dataMaps);
        });
    };
    /**
     * 获取数据管理类
     * @param type 类型
     * @returns 数据管理类实例
     */
    DataManager.prototype.get = function (type) {
        return this._dataMaps.get(type);
    };
    /**
     * 注册数据类
     * @param url 数据资源地址（json格式）
     * @param type 数据资源管理类
     */
    DataManager.prototype.registerData = function (url, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.isRemote) {
                AbManager_1.AbManager.loadRemote(_this.remotePath + url + ".json?t=" + Date.now()).then(function (res) {
                    _this._dataMaps.set(type, new type(res.json));
                    resolve(null);
                });
            }
            else {
                AbManager_1.AbManager.loadBundleRes(BundleName_1.BundleName.Config, url, cc.JsonAsset).then(function (res) {
                    _this._dataMaps.set(type, new type(res.json));
                    resolve(null);
                });
            }
        });
    };
    DataManager._ins = null;
    return DataManager;
}());
exports.default = DataManager;

cc._RF.pop();