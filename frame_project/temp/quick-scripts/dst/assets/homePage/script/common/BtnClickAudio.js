
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/BtnClickAudio.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54bdfdI2cVGo4otKC0FNlNu', 'BtnClickAudio');
// homePage/script/common/BtnClickAudio.ts

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
var AudioManager_1 = require("../manager/AudioManager");
var SoundPath_1 = require("./SoundPath");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BtnClickAudio = /** @class */ (function (_super) {
    __extends(BtnClickAudio, _super);
    function BtnClickAudio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.soundPath = SoundPath_1.SoundEnum.button_click;
        return _this;
    }
    BtnClickAudio.prototype.onEnable = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    };
    BtnClickAudio.prototype.onDisable = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    };
    BtnClickAudio.prototype.onTouchStart = function () {
        var key = Object.keys(SoundPath_1.SoundEnum)[this.soundPath];
        AudioManager_1.AudioManager.ins.playEffect(SoundPath_1.SoundPath[key]);
    };
    __decorate([
        property({ type: cc.Enum(SoundPath_1.SoundEnum) })
    ], BtnClickAudio.prototype, "soundPath", void 0);
    BtnClickAudio = __decorate([
        ccclass
    ], BtnClickAudio);
    return BtnClickAudio;
}(cc.Component));
exports.default = BtnClickAudio;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxCdG5DbGlja0F1ZGlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUF1RDtBQUN2RCx5Q0FBbUQ7QUFFN0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFpQkM7UUFkRyxlQUFTLEdBQWMscUJBQVMsQ0FBQyxZQUFZLENBQUM7O0lBY2xELENBQUM7SUFaYSxnQ0FBUSxHQUFsQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFUyxpQ0FBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0ksSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELDJCQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxxQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQWJEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxFQUFFLENBQUM7b0RBQ087SUFIN0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQWlCakM7SUFBRCxvQkFBQztDQWpCRCxBQWlCQyxDQWpCMEMsRUFBRSxDQUFDLFNBQVMsR0FpQnREO2tCQWpCb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZEVudW0sIFNvdW5kUGF0aCB9IGZyb20gXCIuL1NvdW5kUGF0aFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ0bkNsaWNrQXVkaW8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oU291bmRFbnVtKSB9KVxyXG4gICAgc291bmRQYXRoOiBTb3VuZEVudW0gPSBTb3VuZEVudW0uYnV0dG9uX2NsaWNrO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoU3RhcnQoKSB7XHJcbiAgICAgICAgbGV0IGtleSA9IE9iamVjdC5rZXlzKFNvdW5kRW51bSlbdGhpcy5zb3VuZFBhdGhdO1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnMucGxheUVmZmVjdChTb3VuZFBhdGhba2V5XSk7XHJcbiAgICB9XHJcbn1cclxuIl19