
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/TimeManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd752w4R6BGk72KxhCY5Lx/', 'TimeManager');
// homePage/script/manager/TimeManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PlayerData_1 = require("../common/PlayerData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TimeManager = /** @class */ (function (_super) {
    __extends(TimeManager, _super);
    function TimeManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**游戏运行的时长 */
        _this._curTime = 0;
        _this.interval = 1;
        _this.timer = 0;
        _this.timeCalls = [];
        _this.getHeartbeatInterval = 1;
        return _this;
    }
    TimeManager_1 = TimeManager;
    Object.defineProperty(TimeManager.prototype, "curTime", {
        get: function () {
            return this._curTime;
        },
        enumerable: false,
        configurable: true
    });
    TimeManager.prototype.onLoad = function () {
        TimeManager_1.ins = this;
        this.timer = 0;
        this._curTime = 0;
        this.timeCalls = [];
    };
    TimeManager.prototype.update = function (dt) {
        this.timer += dt;
        if (this.timer >= this.interval) {
            this.timer = 0;
            this.checkTimeCall();
        }
        this._curTime += dt * 1000;
        PlayerData_1.PlayerData.ins.todayOnlineDuration += dt * 1000;
        PlayerData_1.PlayerData.ins.lastOnLineDur += dt * 1000;
    };
    TimeManager.prototype.checkTimeCall = function () {
        var _this = this;
        this.timeCalls.forEach(function (call) {
            if (call && call.callFunc) {
                if (_this.curTime >= call.targetTime) {
                    _this.offCdCall(call);
                    if (call.isTriggerOnce) {
                        call.callFunc(0);
                    }
                }
                !call.isTriggerOnce && call.callFunc((call.targetTime - _this.curTime) / 1000);
            }
        });
    };
    /**
     * 添加一个倒计时回调，每秒触发,返回剩余时间
     * @param call 回调
     * @param targetTime 回调移除时间,毫秒
     * @param caller
     * @param isTriggerOnce 是否只触发一次
     * @returns
     */
    TimeManager.prototype.onCdCall = function (call, targetTime, caller, isCheckSame, isTriggerOnce) {
        if (isCheckSame === void 0) { isCheckSame = true; }
        if (isTriggerOnce === void 0) { isTriggerOnce = false; }
        if (isCheckSame && this.timeCalls.find(function (data) { return data.caller == caller; }) != undefined) {
            console.warn("TimeManager 重复注册");
            return;
        }
        this.timeCalls.push({ callFunc: call, targetTime: targetTime, caller: caller, isTriggerOnce: isTriggerOnce });
    };
    /**移除倒计时回调 */
    TimeManager.prototype.offCdCall = function (call) {
        var index = this.timeCalls.findIndex(function (v) { return v.callFunc.name == call.callFunc.name && v.targetTime == call.targetTime && v.caller == call.caller; });
        if (index >= 0) {
            this.timeCalls.splice(index, 1);
        }
    };
    TimeManager.prototype.offAll = function (caller) {
        this.timeCalls = this.timeCalls.filter(function (v) { return v.caller != caller; });
    };
    var TimeManager_1;
    TimeManager.ins = null;
    TimeManager = TimeManager_1 = __decorate([
        ccclass
    ], TimeManager);
    return TimeManager;
}(cc.Component));
exports.default = TimeManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcVGltZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBMEVDO1FBdEVHLGFBQWE7UUFDTCxjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBS3JCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixlQUFTLEdBQXNHLEVBQUUsQ0FBQztRQUNuSCwwQkFBb0IsR0FBVyxDQUFDLENBQUM7O0lBNkQ1QyxDQUFDO29CQTFFb0IsV0FBVztJQU01QixzQkFBVyxnQ0FBTzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQU9TLDRCQUFNLEdBQWhCO1FBQ0ksYUFBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRVMsNEJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUMzQix1QkFBVSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2hELHVCQUFVLENBQUMsR0FBRyxDQUFDLGFBQWEsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQzlDLENBQUM7SUFFTSxtQ0FBYSxHQUFwQjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3hCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3ZCLElBQUksS0FBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNqQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNyQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7d0JBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3BCO2lCQUNKO2dCQUNELENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDakY7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksOEJBQVEsR0FBZixVQUFnQixJQUE0QixFQUFFLFVBQWtCLEVBQUUsTUFBVyxFQUFFLFdBQTJCLEVBQUUsYUFBOEI7UUFBM0QsNEJBQUEsRUFBQSxrQkFBMkI7UUFBRSw4QkFBQSxFQUFBLHFCQUE4QjtRQUN0SSxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxFQUFyQixDQUFxQixDQUFDLElBQUksU0FBUyxFQUFFO1lBQ2hGLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNqQyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ2xILENBQUM7SUFFRCxhQUFhO0lBQ04sK0JBQVMsR0FBaEIsVUFBaUIsSUFBNkU7UUFDMUYsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFuRyxDQUFtRyxDQUFDLENBQUM7UUFDL0ksSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUVNLDRCQUFNLEdBQWIsVUFBYyxNQUFXO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxJQUFJLE1BQU0sRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7O0lBdkVhLGVBQUcsR0FBZ0IsSUFBSSxDQUFDO0lBRnJCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0EwRS9CO0lBQUQsa0JBQUM7Q0ExRUQsQUEwRUMsQ0ExRXdDLEVBQUUsQ0FBQyxTQUFTLEdBMEVwRDtrQkExRW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF5ZXJEYXRhIH0gZnJvbSBcIi4uL2NvbW1vbi9QbGF5ZXJEYXRhXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zOiBUaW1lTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgLyoq5ri45oiP6L+Q6KGM55qE5pe26ZW/ICovXHJcbiAgICBwcml2YXRlIF9jdXJUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGdldCBjdXJUaW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1clRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbnRlcnZhbDogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgdGltZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRpbWVDYWxsczogeyBjYWxsRnVuYzogKCh0aW1lOiBudW1iZXIpID0+IHZvaWQpLCB0YXJnZXRUaW1lOiBudW1iZXIsIGNhbGxlcjogYW55LCBpc1RyaWdnZXJPbmNlOiBib29sZWFuIH1bXSA9IFtdO1xyXG4gICAgcHVibGljIGdldEhlYXJ0YmVhdEludGVydmFsOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgVGltZU1hbmFnZXIuaW5zID0gdGhpcztcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLl9jdXJUaW1lID0gMDtcclxuICAgICAgICB0aGlzLnRpbWVDYWxscyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPj0gdGhpcy5pbnRlcnZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1RpbWVDYWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2N1clRpbWUgKz0gZHQgKiAxMDAwO1xyXG4gICAgICAgIFBsYXllckRhdGEuaW5zLnRvZGF5T25saW5lRHVyYXRpb24gKz0gZHQgKiAxMDAwO1xyXG4gICAgICAgIFBsYXllckRhdGEuaW5zLmxhc3RPbkxpbmVEdXIgKz0gZHQgKiAxMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGVja1RpbWVDYWxsKCkge1xyXG4gICAgICAgIHRoaXMudGltZUNhbGxzLmZvckVhY2goKGNhbGwpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNhbGwgJiYgY2FsbC5jYWxsRnVuYykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VyVGltZSA+PSBjYWxsLnRhcmdldFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZkNkQ2FsbChjYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbC5pc1RyaWdnZXJPbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGwuY2FsbEZ1bmMoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIWNhbGwuaXNUcmlnZ2VyT25jZSAmJiBjYWxsLmNhbGxGdW5jKChjYWxsLnRhcmdldFRpbWUgLSB0aGlzLmN1clRpbWUpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOS4gOS4quWAkuiuoeaXtuWbnuiwg++8jOavj+enkuinpuWPkSzov5Tlm57liankvZnml7bpl7RcclxuICAgICAqIEBwYXJhbSBjYWxsIOWbnuiwg1xyXG4gICAgICogQHBhcmFtIHRhcmdldFRpbWUg5Zue6LCD56e76Zmk5pe26Ze0LOavq+enklxyXG4gICAgICogQHBhcmFtIGNhbGxlciBcclxuICAgICAqIEBwYXJhbSBpc1RyaWdnZXJPbmNlIOaYr+WQpuWPquinpuWPkeS4gOasoVxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkNkQ2FsbChjYWxsOiAodGltZTogbnVtYmVyKSA9PiB2b2lkLCB0YXJnZXRUaW1lOiBudW1iZXIsIGNhbGxlcjogYW55LCBpc0NoZWNrU2FtZTogYm9vbGVhbiA9IHRydWUsIGlzVHJpZ2dlck9uY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChpc0NoZWNrU2FtZSAmJiB0aGlzLnRpbWVDYWxscy5maW5kKGRhdGEgPT4gZGF0YS5jYWxsZXIgPT0gY2FsbGVyKSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVGltZU1hbmFnZXIg6YeN5aSN5rOo5YaMXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZUNhbGxzLnB1c2goeyBjYWxsRnVuYzogY2FsbCwgdGFyZ2V0VGltZTogdGFyZ2V0VGltZSwgY2FsbGVyOiBjYWxsZXIsIGlzVHJpZ2dlck9uY2U6IGlzVHJpZ2dlck9uY2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq56e76Zmk5YCS6K6h5pe25Zue6LCDICovXHJcbiAgICBwdWJsaWMgb2ZmQ2RDYWxsKGNhbGw6IHsgY2FsbEZ1bmM6ICgodGltZTogbnVtYmVyKSA9PiB2b2lkKSwgdGFyZ2V0VGltZTogbnVtYmVyLCBjYWxsZXI6IGFueSB9KSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50aW1lQ2FsbHMuZmluZEluZGV4KHYgPT4gdi5jYWxsRnVuYy5uYW1lID09IGNhbGwuY2FsbEZ1bmMubmFtZSAmJiB2LnRhcmdldFRpbWUgPT0gY2FsbC50YXJnZXRUaW1lICYmIHYuY2FsbGVyID09IGNhbGwuY2FsbGVyKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVDYWxscy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb2ZmQWxsKGNhbGxlcjogYW55KSB7XHJcbiAgICAgICAgdGhpcy50aW1lQ2FsbHMgPSB0aGlzLnRpbWVDYWxscy5maWx0ZXIodiA9PiB2LmNhbGxlciAhPSBjYWxsZXIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==