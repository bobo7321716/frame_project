
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/SceneEventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcU2NlbmVFdmVudE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEseUNBQXdDO0FBRWxDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLFFBQVE7QUFFUjtJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQW9FQztRQWpFVyxTQUFHLEdBQXlDLElBQUksQ0FBQztRQUNsRCxnQkFBVSxHQUFxRCxFQUFFLENBQUM7O0lBZ0U3RSxDQUFDOzBCQXBFb0IsaUJBQWlCO0lBTXhCLGtDQUFNLEdBQWhCO1FBQ0ksbUJBQWlCLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRUQsa0RBQWtEO0lBQzNDLDJDQUFlLEdBQXRCLFVBQXVCLEdBQXlDO1FBQzVELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLDBDQUFjLEdBQXJCO1FBQUEsaUJBaUJDO1FBaEJHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUM3QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPO1FBQ3hDLHFEQUFxRDtRQUNyRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxF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RyxHQUFzQixJQUFJLENBQUM7SUFGM0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FvRXJDO0lBQUQsd0JBQUM7Q0FwRUQsQUFvRUMsQ0FwRThDLEVBQUUsQ0FBQyxTQUFTLEdBb0UxRDtrQkFwRW9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1bmRsZURhdGEgfSBmcm9tIFwiLi4vY29tbW9uL0J1bmRsZURhdGFcIjtcclxuaW1wb3J0IHsgVWlCYXNlIH0gZnJvbSBcIi4uL2NvbW1vbi9VaUJhc2VcIjtcclxuaW1wb3J0IHsgVUlNYW5hZ2VyIH0gZnJvbSBcIi4vVUlNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG4vL+eVjOmdouS6i+S7tueuoeeQhlxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZUV2ZW50TWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbnM6IFNjZW5lRXZlbnRNYW5hZ2VyID0gbnVsbDtcclxuICAgIHByaXZhdGUgYXJnOiB7IGRhdGE6IEJ1bmRsZURhdGEsIHVpQmFzZTogVWlCYXNlIH0gPSBudWxsO1xyXG4gICAgcHVibGljIHNjZW5lRXZlbnQ6IHsgdXJsOiBzdHJpbmcsIGV2ZW50czogc3RyaW5nW10sIGFyZ3M6IGFueVtdIH1bXSA9IFtdO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgU2NlbmVFdmVudE1hbmFnZXIuaW5zID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKirmo4Dmn6XmmK/lkKbop6blj5HnlYzpnaLkuovku7Yg5oyJ54Wn5Yqg5YWl6aG65bqP5L6d5qyh6Kem5Y+R77yM6YCa6L+HY2hlY2tOZXh0RXZlbnTop6blj5HlkI7nu63kuovku7YgKi9cclxuICAgIHB1YmxpYyBjaGVja1NjZW5lRXZlbnQoYXJnOiB7IGRhdGE6IEJ1bmRsZURhdGEsIHVpQmFzZTogVWlCYXNlIH0pIHtcclxuICAgICAgICBpZiAoIWFyZyB8fCAhYXJnLmRhdGEpIHJldHVybjtcclxuICAgICAgICB0aGlzLmFyZyA9IGFyZztcclxuICAgICAgICB0aGlzLmNoZWNrTmV4dEV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoZWNrTmV4dEV2ZW50KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hcmcpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuc2NlbmVFdmVudCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnNjZW5lRXZlbnQubGVuZ3RoIDw9IDApIHJldHVybjtcclxuICAgICAgICAvLyBjb25zb2xlLndhcm4oXCJjaGVja05leHRFdmVudCA9IFwiLCB0aGlzLnNjZW5lRXZlbnQpXHJcbiAgICAgICAgbGV0IGluZm8gPSB0aGlzLnNjZW5lRXZlbnQuZmluZChpbmZvID0+IGluZm8udXJsID09IHRoaXMuYXJnLmRhdGEudXJsKTtcclxuICAgICAgICBpZiAoIWluZm8gfHwgaW5mby5ldmVudHMubGVuZ3RoIDw9IDApIHJldHVybjtcclxuICAgICAgICBsZXQgZXZlbnQgPSBpbmZvLmV2ZW50cy5zaGlmdCgpO1xyXG4gICAgICAgIGxldCBhcmcgPSBpbmZvLmFyZ3Muc2hpZnQoKTtcclxuICAgICAgICB0aGlzLmFyZy51aUJhc2VbZXZlbnRdICYmIHRoaXMuYXJnLnVpQmFzZVtldmVudF0oYXJnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNjZW5lRXZlbnQgXCIsIGV2ZW50KTtcclxuICAgICAgICBpZiAoaW5mby5ldmVudHMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zY2VuZUV2ZW50LmZpbmRJbmRleChpbmZvID0+IGluZm8udXJsID09IHRoaXMuYXJnLmRhdGEudXJsKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZUV2ZW50LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmlzaEN1ckV2ZW50KCkge1xyXG4gICAgICAgIFVJTWFuYWdlci5pbnMucmVmcmVzaEN1clRvcEJ1bmRsZURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOeVjOmdouS6i+S7tijlnKjlr7nlupTnlYzpnaLkuIvmrKHmiZPlvIDmiJbogIXkuI3ooqvpga7mjKHml7bmo4DmtYvvvIzmiJDlip/op6blj5HlkI7np7vpmaQpXHJcbiAgICAgKiBAcGFyYW0gdWlCdW5kbGUg55WM6Z2i55qEYnVuZGxlRGF0YVxyXG4gICAgICogQHBhcmFtIGZ1bmNOYW1lIOeVjOmdouiEmuacrOS4reeahOaWueazleWQjVxyXG4gICAgICogQHBhcmFtIGltbWVkaWF0ZWx5Q2hlY2sg5piv5ZCm56uL5Y2z5qOA5rWLXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRTY2VuZUV2ZW50KHVpQnVuZGxlOiBCdW5kbGVEYXRhLCBmdW5jTmFtZTogc3RyaW5nLCBhcmc6IGFueSA9IG51bGwsIGltbWVkaWF0ZWx5Q2hlY2s6IGJvb2xlYW4gPSB0cnVlLCBtZXJnZVNhbWVGdW5jOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCBpbmZvID0gdGhpcy5zY2VuZUV2ZW50LmZpbmQoaW5mbyA9PiBpbmZvLnVybCA9PSB1aUJ1bmRsZS51cmwpO1xyXG4gICAgICAgIGlmIChpbmZvKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXJnZVNhbWVGdW5jKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBpbmZvLmV2ZW50cy5maW5kSW5kZXgodiA9PiB2ID09IGZ1bmNOYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmZvLmV2ZW50cy5wdXNoKGZ1bmNOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpbmZvLmFyZ3MucHVzaChbYXJnXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZm8uYXJnc1tpbmRleF0ucHVzaChhcmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5mby5ldmVudHMucHVzaChmdW5jTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpbmZvLmFyZ3MucHVzaChbYXJnXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lRXZlbnQucHVzaCh7IHVybDogdWlCdW5kbGUudXJsLCBldmVudHM6IFtmdW5jTmFtZV0sIGFyZ3M6IFtbYXJnXV0gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbW1lZGlhdGVseUNoZWNrKSB7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnMucmVmcmVzaEN1clRvcEJ1bmRsZURhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19