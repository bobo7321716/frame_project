"use strict";
cc._RF.push(module, '8722f3C2clPIqL/KWiXSrbR', 'SceneEventManager');
// homePage/script/manager/SceneEventManager.ts

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
var UIManager_1 = require("./UIManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
//界面事件管理
var SceneEventManager = /** @class */ (function (_super) {
    __extends(SceneEventManager, _super);
    function SceneEventManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arg = null;
        _this.sceneEvent = [];
        return _this;
    }
    SceneEventManager_1 = SceneEventManager;
    SceneEventManager.prototype.onLoad = function () {
        SceneEventManager_1.ins = this;
    };
    /**检查是否触发界面事件 按照加入顺序依次触发，通过checkNextEvent触发后续事件 */
    SceneEventManager.prototype.checkSceneEvent = function (arg) {
        if (!arg || !arg.data)
            return;
        this.arg = arg;
        this.checkNextEvent();
    };
    SceneEventManager.prototype.checkNextEvent = function () {
        var _this = this;
        if (!this.arg)
            return;
        if (!this.sceneEvent)
            return;
        if (this.sceneEvent.length <= 0)
            return;
        // console.warn("checkNextEvent = ", this.sceneEvent)
        var info = this.sceneEvent.find(function (info) { return info.url == _this.arg.data.url; });
        if (!info || info.events.length <= 0)
            return;
        var event = info.events.shift();
        var arg = info.args.shift();
        this.arg.uiBase[event] && this.arg.uiBase[event](arg);
        console.log("sceneEvent ", event);
        if (info.events.length <= 0) {
            var index = this.sceneEvent.findIndex(function (info) { return info.url == _this.arg.data.url; });
            if (index != undefined) {
                this.sceneEvent.splice(index, 1);
            }
        }
    };
    SceneEventManager.prototype.finishCurEvent = function () {
        UIManager_1.UIManager.ins.refreshCurTopBundleData();
    };
    /**
     * 添加界面事件(在对应界面下次打开或者不被遮挡时检测，成功触发后移除)
     * @param uiBundle 界面的bundleData
     * @param funcName 界面脚本中的方法名
     * @param immediatelyCheck 是否立即检测
     */
    SceneEventManager.prototype.addSceneEvent = function (uiBundle, funcName, arg, immediatelyCheck, mergeSameFunc) {
        if (arg === void 0) { arg = null; }
        if (immediatelyCheck === void 0) { immediatelyCheck = true; }
        if (mergeSameFunc === void 0) { mergeSameFunc = true; }
        var info = this.sceneEvent.find(function (info) { return info.url == uiBundle.url; });
        if (info) {
            if (mergeSameFunc) {
                var index = info.events.findIndex(function (v) { return v == funcName; });
                if (index < 0) {
                    info.events.push(funcName);
                    info.args.push([arg]);
                }
                else {
                    info.args[index].push(arg);
                }
            }
            else {
                info.events.push(funcName);
                info.args.push([arg]);
            }
        }
        else {
            this.sceneEvent.push({ url: uiBundle.url, events: [funcName], args: [[arg]] });
        }
        if (immediatelyCheck) {
            UIManager_1.UIManager.ins.refreshCurTopBundleData();
        }
    };
    var SceneEventManager_1;
    SceneEventManager.ins = null;
    SceneEventManager = SceneEventManager_1 = __decorate([
        ccclass
    ], SceneEventManager);
    return SceneEventManager;
}(cc.Component));
exports.default = SceneEventManager;

cc._RF.pop();