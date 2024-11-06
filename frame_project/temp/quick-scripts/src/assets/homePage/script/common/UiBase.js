"use strict";
cc._RF.push(module, '37b131KLtJDL4mP2xCSYpsX', 'UiBase');
// homePage/script/common/UiBase.ts

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
exports.UiBase = void 0;
var UIManager_1 = require("../manager/UIManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UiBase = /** @class */ (function (_super) {
    __extends(UiBase, _super);
    function UiBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.openAnimNode = null;
        _this.bgMaskNode = null;
        _this.stackData = null;
        return _this;
    }
    /**界面开始打开时调用 */
    UiBase.prototype.onOpen = function () { };
    /**界面开始关闭时调用 */
    UiBase.prototype.onClose = function () { };
    /**界面被次级界面遮挡时调用 */
    UiBase.prototype.onCover = function () { };
    /**次级界面关闭时调用 */
    UiBase.prototype.onUncover = function () { };
    /**界面打开动画播放完毕时调用*/
    UiBase.prototype.onOpenFinish = function () { };
    /**界面关闭动画播放完毕时调用 */
    UiBase.prototype.onCloseFinish = function () { };
    /**界面打开前的准备方法 */
    UiBase.prototype.openPrepare = function () { return Promise.resolve(); };
    ;
    /**界面关闭回调，子类可直接重写 */
    UiBase.prototype.closeCb = function () { };
    UiBase.prototype.playBtnClickAudio = function () {
        // AudioManager.ins.playClickAudio();
    };
    UiBase.prototype.playCloseSceneAudio = function () {
        // AudioManager.ins.playEffect(SoundPath.CLOSE_SCENE);
    };
    UiBase.prototype.closeViewClick = function () {
        this.playBtnClickAudio();
        UIManager_1.UIManager.ins.closeView();
    };
    __decorate([
        property(cc.Node)
    ], UiBase.prototype, "openAnimNode", void 0);
    __decorate([
        property(cc.Node)
    ], UiBase.prototype, "bgMaskNode", void 0);
    UiBase = __decorate([
        ccclass
    ], UiBase);
    return UiBase;
}(cc.Component));
exports.UiBase = UiBase;

cc._RF.pop();