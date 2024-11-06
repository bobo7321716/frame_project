
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/DataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcRGF0YU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0Q7QUFDbEQsMkNBQTBDO0FBQzFDLHlDQUF3QztBQUl4QztJQUNJO1FBU1EsY0FBUyxHQUF5RixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRXBILFlBQVk7UUFDSyxlQUFVLEdBQUcseURBQXVELFVBQVUsQ0FBQyxPQUFPLGFBQVUsQ0FBQztRQUVsSCxjQUFjO1FBQ04sYUFBUSxHQUFZLEtBQUssQ0FBQztJQWZWLENBQUM7SUFBQSxDQUFDO0lBRTFCLHNCQUFXLGtCQUFHO2FBQWQ7WUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7YUFDakM7WUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFVRCxhQUFhO0lBQ2IsMEJBQUksR0FBSjtRQUFBLGlCQVlDO1FBWEcsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDN0MsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEtBQUssSUFBTSxDQUFDLElBQUksZUFBTSxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ3BCLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsZUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUNELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHlCQUFHLEdBQUgsVUFBeUMsSUFBa0M7UUFDdkUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQU0sQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLGtDQUFZLEdBQXBCLFVBQTBELEdBQVcsRUFBRSxJQUFrQztRQUF6RyxpQkFjQztRQWJHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixJQUFJLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YscUJBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQWlCO29CQUN6RixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzdDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLENBQUE7YUFDTDtpQkFBTTtnQkFDSCxxQkFBUyxDQUFDLGFBQWEsQ0FBQyx1QkFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQWlCO29CQUNqRixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzdDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLENBQUE7YUFDTDtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQTNEYyxnQkFBSSxHQUFnQixJQUFJLENBQUM7SUE0RDVDLGtCQUFDO0NBOURELEFBOERDLElBQUE7a0JBOURvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVuZGxlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vQnVuZGxlTmFtZVwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBYk1hbmFnZXIgfSBmcm9tIFwiLi9BYk1hbmFnZXJcIjtcclxuaW1wb3J0IEJhc2VEYXRhTWFuYWdlciwgeyBCYXNlRGF0YSB9IGZyb20gXCIuL0Jhc2VEYXRhXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnM6IERhdGFNYW5hZ2VyID0gbnVsbDtcclxuICAgIHN0YXRpYyBnZXQgaW5zKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pbnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnMgPSBuZXcgRGF0YU1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kYXRhTWFwczogTWFwPG5ldyAoZGF0YXM6IEJhc2VEYXRhW10pID0+IEJhc2VEYXRhTWFuYWdlcjxCYXNlRGF0YT4sIEJhc2VEYXRhTWFuYWdlcjxCYXNlRGF0YT4+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKuW9k+WJjeeJiOacrOWQjue8gCAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSByZW1vdGVQYXRoID0gYGh0dHBzOi8vY2RuLmhvbmdzaHVuZXQuY29tL3p5aC9KaW5nU2hlbkJpbmdZdWFuL3dlYi8ke2FwcENvbnRleHQudmVyc2lvbn0vY29uZmlnL2A7XHJcblxyXG4gICAgLyoq5piv5ZCm5L2/55So6L+c56iL6YWN572uICovXHJcbiAgICBwcml2YXRlIGlzUmVtb3RlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoq5Yid5aeL5YyW5pWw5o2u566h55CG57G7Ki9cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIHRoaXMuaXNSZW1vdGUgPSAhQ0NfREVWO1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcInRoaXMuaXNSZW1vdGUgXCIsIHRoaXMuaXNSZW1vdGUpXHJcbiAgICAgICAgbGV0IHByb21pc2VBcnIgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGsgaW4gQ29uZmlnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiayBcIiwgaylcclxuICAgICAgICAgICAgcHJvbWlzZUFyci5wdXNoKHRoaXMucmVnaXN0ZXJEYXRhKGssIENvbmZpZ1trXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZUFycikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5fZGF0YU1hcHMgXCIsIHRoaXMuX2RhdGFNYXBzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pWw5o2u566h55CG57G7XHJcbiAgICAgKiBAcGFyYW0gdHlwZSDnsbvlnotcclxuICAgICAqIEByZXR1cm5zIOaVsOaNrueuoeeQhuexu+WunuS+i1xyXG4gICAgICovXHJcbiAgICBnZXQ8VCBleHRlbmRzIEJhc2VEYXRhTWFuYWdlcjxCYXNlRGF0YT4+KHR5cGU6IG5ldyAoZGF0YXM6IEJhc2VEYXRhW10pID0+IFQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YU1hcHMuZ2V0KHR5cGUpIGFzIFQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDms6jlhozmlbDmja7nsbtcclxuICAgICAqIEBwYXJhbSB1cmwg5pWw5o2u6LWE5rqQ5Zyw5Z2A77yIanNvbuagvOW8j++8iVxyXG4gICAgICogQHBhcmFtIHR5cGUg5pWw5o2u6LWE5rqQ566h55CG57G7XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJEYXRhPFQgZXh0ZW5kcyBCYXNlRGF0YU1hbmFnZXI8QmFzZURhdGE+Pih1cmw6IHN0cmluZywgdHlwZTogbmV3IChkYXRhczogQmFzZURhdGFbXSkgPT4gVCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUmVtb3RlKSB7XHJcbiAgICAgICAgICAgICAgICBBYk1hbmFnZXIubG9hZFJlbW90ZSh0aGlzLnJlbW90ZVBhdGggKyB1cmwgKyBcIi5qc29uP3Q9XCIgKyBEYXRlLm5vdygpKS50aGVuKChyZXM6IGNjLkpzb25Bc3NldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFNYXBzLnNldCh0eXBlLCBuZXcgdHlwZShyZXMuanNvbikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgQWJNYW5hZ2VyLmxvYWRCdW5kbGVSZXMoQnVuZGxlTmFtZS5Db25maWcsIHVybCwgY2MuSnNvbkFzc2V0KS50aGVuKChyZXM6IGNjLkpzb25Bc3NldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFNYXBzLnNldCh0eXBlLCBuZXcgdHlwZShyZXMuanNvbikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdfQ==