"use strict";
cc._RF.push(module, '5f5b3ZAUeVMlZ2R53GCShZd', 'CommonTip');
// homePage/script/common/CommonTip.ts

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
exports.CommonTip = void 0;
var AbManager_1 = require("../manager/AbManager");
var BundleName_1 = require("./BundleName");
var MyPool_1 = require("./MyPool");
var Util_1 = require("./Util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CommonTip = /** @class */ (function (_super) {
    __extends(CommonTip, _super);
    function CommonTip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tipText = null;
        _this.isOnAnim = false;
        return _this;
    }
    CommonTip.prototype.init = function () {
        var _this = this;
        return AbManager_1.AbManager.loadBundleRes(BundleName_1.BundleName.Font, "/方正隶二简体", cc.Font).then(function (font) {
            if (!Util_1.Util.isValid(_this.node))
                return;
            _this.tipText.font = font;
        });
    };
    /**
     * 显示提示框
     * @param tipInfo 需要显示的文字信息
     */
    CommonTip.prototype.show = function (tipInfo) {
        var _this = this;
        if (tipInfo == null) {
            return;
        }
        this.init().then(function () {
            _this.node.opacity = 255;
            _this.tipText.string = tipInfo;
            _this.isOnAnim = false;
            _this.tipText._forceUpdateRenderData();
            if (_this.tipText.node.width >= 500) {
                _this.tipText.node.width = 500;
                _this.tipText.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
                _this.tipText._forceUpdateRenderData();
            }
            var width = _this.tipText.node.width + 100;
            var height = _this.tipText.node.height + 30;
            _this.node.setContentSize(width, height);
            _this.scheduleOnce(function () {
                _this.destroySelf();
            }, 3);
        });
    };
    CommonTip.prototype.animEndCall = function () {
        this.isOnAnim = false;
    };
    CommonTip.prototype.hide = function () {
        var _this = this;
        var hideAnim = function () {
            cc.tween(_this.node)
                .by(0.5, { y: 200, opacity: -255 })
                .removeSelf()
                .start();
        };
        if (this.isOnAnim) {
            this.animEndCall = function () {
                hideAnim();
            };
        }
        else {
            this.isOnAnim = true;
            hideAnim();
        }
    };
    CommonTip.prototype.topMove = function () {
        if (this.isOnAnim) {
            return;
        }
        this.isOnAnim = true;
        cc.tween(this.node)
            .by(0.1, { y: this.node.height + 10 })
            .call(this.animEndCall.bind(this))
            .start();
    };
    CommonTip.prototype.destroySelf = function () {
        this.unscheduleAllCallbacks();
        this.tipText.string = "";
        this.node.stopAllActions();
        this.isOnAnim = false;
        MyPool_1.default.putObj(this.node);
    };
    __decorate([
        property({
            type: cc.Label
        })
    ], CommonTip.prototype, "tipText", void 0);
    CommonTip = __decorate([
        ccclass
    ], CommonTip);
    return CommonTip;
}(cc.Component));
exports.CommonTip = CommonTip;

cc._RF.pop();