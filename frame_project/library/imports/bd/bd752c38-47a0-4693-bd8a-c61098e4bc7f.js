"use strict";
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