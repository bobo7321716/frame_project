
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/BaseData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcQmFzZURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtJQUNJLHlCQUFZLEtBQVU7UUFDWixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBREQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUFDLENBQUM7SUFBQSxDQUFDO0lBRzlDLHNCQUFXLGtDQUFLO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQsK0JBQUssR0FBTCxVQUFNLEtBQVU7UUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLEVBQVU7UUFDbEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFiLENBQWEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxPQUFPO0lBQ1Asa0NBQVEsR0FBUixVQUFTLEdBQVUsRUFBRSxJQUE4QjtRQUE5QixxQkFBQSxFQUFBLFFBQWtCLElBQUksRUFBRSxLQUFLLENBQUM7UUFDL0MsSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLElBQUksSUFBSSxHQUFHLFVBQUMsSUFBSTtZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztnQkFDZCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDWDtxQkFBTTtvQkFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNwQjtZQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFBO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgQmFzZURhdGEgPSB7XHJcbiAgICBpZD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZURhdGFNYW5hZ2VyPFQgZXh0ZW5kcyBCYXNlRGF0YT4ge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YXM6IFRbXSkgeyB0aGlzLnBhcnNlKGRhdGFzKSB9O1xyXG4gICAgcHJvdGVjdGVkIF9kYXRhczogVFtdID0gW107XHJcblxyXG4gICAgcHVibGljIGdldCBkYXRhcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2UoZGF0YXM6IFRbXSkge1xyXG4gICAgICAgIHRoaXMuX2RhdGFzID0gZGF0YXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YUJ5SWQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhcy5maW5kKGRhdGEgPT4gZGF0YS5pZCA9PSBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mlbDnu4Tovazlr7nosaFcclxuICAgIGFyclRvT2JqKGFycjogYW55W10sIGtleXM6IHN0cmluZ1tdID0gW1wiaWRcIiwgXCJudW1cIl0pIHtcclxuICAgICAgICBsZXQgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBsZXQgY2FsbCA9IChhcnIxKSA9PiB7XHJcbiAgICAgICAgICAgIGFycjEuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsKHYpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmpba2V5c1trXV0gPSB2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsKGFycik7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxufSJdfQ==