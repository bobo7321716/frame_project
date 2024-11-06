"use strict";
cc._RF.push(module, '7dffbQg3RNJkZmLIB451i7l', 'BaseData');
// homePage/script/manager/BaseData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseDataManager = /** @class */ (function () {
    function BaseDataManager(datas) {
        this._datas = [];
        this.parse(datas);
    }
    ;
    Object.defineProperty(BaseDataManager.prototype, "datas", {
        get: function () {
            return this._datas;
        },
        enumerable: false,
        configurable: true
    });
    BaseDataManager.prototype.parse = function (datas) {
        this._datas = datas;
    };
    BaseDataManager.prototype.getDataById = function (id) {
        return this._datas.find(function (data) { return data.id == id; });
    };
    //数组转对象
    BaseDataManager.prototype.arrToObj = function (arr, keys) {
        if (keys === void 0) { keys = ["id", "num"]; }
        var obj = {};
        var call = function (arr1) {
            arr1.forEach(function (v, k) {
                if (Array.isArray(v)) {
                    call(v);
                }
                else {
                    obj[keys[k]] = v;
                }
            });
        };
        call(arr);
        return obj;
    };
    return BaseDataManager;
}());
exports.default = BaseDataManager;

cc._RF.pop();