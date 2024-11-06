
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/UiBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxVaUJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGtEQUE0RDtBQUV0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywwQkFBWTtJQUFqRDtRQUFBLHFFQStDQztRQTVDRyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUVwQixlQUFTLEdBQWMsSUFBSSxDQUFDOztJQXVDdkMsQ0FBQztJQXJDRyxlQUFlO0lBQ1IsdUJBQU0sR0FBYixjQUF3QixDQUFDO0lBRXpCLGVBQWU7SUFDUix3QkFBTyxHQUFkLGNBQW1CLENBQUM7SUFFcEIsa0JBQWtCO0lBQ1gsd0JBQU8sR0FBZCxjQUFtQixDQUFDO0lBRXBCLGVBQWU7SUFDUiwwQkFBUyxHQUFoQixjQUFxQixDQUFDO0lBRXRCLGtCQUFrQjtJQUNYLDZCQUFZLEdBQW5CLGNBQThCLENBQUM7SUFFL0IsbUJBQW1CO0lBQ1osOEJBQWEsR0FBcEIsY0FBeUIsQ0FBQztJQUUxQixnQkFBZ0I7SUFDVCw0QkFBVyxHQUFsQixjQUFzQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFBQSxDQUFDO0lBRWxFLG9CQUFvQjtJQUNiLHdCQUFPLEdBQWQsY0FBbUIsQ0FBQztJQUViLGtDQUFpQixHQUF4QjtRQUNJLHFDQUFxQztJQUN6QyxDQUFDO0lBRU0sb0NBQW1CLEdBQTFCO1FBQ0ksc0RBQXNEO0lBQzFELENBQUM7SUFFTSwrQkFBYyxHQUFyQjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLHFCQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUExQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDVztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNTO0lBTlQsTUFBTTtRQUQzQixPQUFPO09BQ2MsTUFBTSxDQStDM0I7SUFBRCxhQUFDO0NBL0NELEFBK0NDLENBL0NvQyxFQUFFLENBQUMsU0FBUyxHQStDaEQ7QUEvQ3FCLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTdGFja0RhdGEsIFVJTWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2VyL1VJTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVaUJhc2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgb3BlbkFuaW1Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJnTWFza05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGFja0RhdGE6IFN0YWNrRGF0YSA9IG51bGw7XHJcblxyXG4gICAgLyoq55WM6Z2i5byA5aeL5omT5byA5pe26LCD55SoICovXHJcbiAgICBwdWJsaWMgb25PcGVuKCk6IHZvaWQgeyB9XHJcblxyXG4gICAgLyoq55WM6Z2i5byA5aeL5YWz6Zet5pe26LCD55SoICovXHJcbiAgICBwdWJsaWMgb25DbG9zZSgpIHsgfVxyXG5cclxuICAgIC8qKueVjOmdouiiq+asoee6p+eVjOmdoumBruaMoeaXtuiwg+eUqCAqL1xyXG4gICAgcHVibGljIG9uQ292ZXIoKSB7IH1cclxuXHJcbiAgICAvKirmrKHnuqfnlYzpnaLlhbPpl63ml7bosIPnlKggKi9cclxuICAgIHB1YmxpYyBvblVuY292ZXIoKSB7IH1cclxuXHJcbiAgICAvKirnlYzpnaLmiZPlvIDliqjnlLvmkq3mlL7lrozmr5Xml7bosIPnlKgqL1xyXG4gICAgcHVibGljIG9uT3BlbkZpbmlzaCgpOiB2b2lkIHsgfVxyXG5cclxuICAgIC8qKueVjOmdouWFs+mXreWKqOeUu+aSreaUvuWujOavleaXtuiwg+eUqCAqL1xyXG4gICAgcHVibGljIG9uQ2xvc2VGaW5pc2goKSB7IH1cclxuXHJcbiAgICAvKirnlYzpnaLmiZPlvIDliY3nmoTlh4blpIfmlrnms5UgKi9cclxuICAgIHB1YmxpYyBvcGVuUHJlcGFyZSgpOiBQcm9taXNlPHZvaWQ+IHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpOyB9O1xyXG5cclxuICAgIC8qKueVjOmdouWFs+mXreWbnuiwg++8jOWtkOexu+WPr+ebtOaOpemHjeWGmSAqL1xyXG4gICAgcHVibGljIGNsb3NlQ2IoKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgcGxheUJ0bkNsaWNrQXVkaW8oKSB7XHJcbiAgICAgICAgLy8gQXVkaW9NYW5hZ2VyLmlucy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5Q2xvc2VTY2VuZUF1ZGlvKCkge1xyXG4gICAgICAgIC8vIEF1ZGlvTWFuYWdlci5pbnMucGxheUVmZmVjdChTb3VuZFBhdGguQ0xPU0VfU0NFTkUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZVZpZXdDbGljaygpIHtcclxuICAgICAgICB0aGlzLnBsYXlCdG5DbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmlucy5jbG9zZVZpZXcoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19