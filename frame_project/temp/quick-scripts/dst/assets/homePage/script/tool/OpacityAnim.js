
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/tool/OpacityAnim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd2a3dOk2w5ATK7c3rQFN8me', 'OpacityAnim');
// homePage/script/tool/OpacityAnim.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OpacityAnim = /** @class */ (function (_super) {
    __extends(OpacityAnim, _super);
    function OpacityAnim() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animTime = 1;
        _this.delayTime = 1;
        _this.tarNum = 120;
        _this.initNum = 255;
        _this.playOnEnable = false;
        return _this;
    }
    OpacityAnim.prototype.onEnable = function () {
        if (this.playOnEnable) {
            this.init();
        }
    };
    OpacityAnim.prototype.init = function () {
        this.node.stopAllActions();
        this.node.opacity = this.initNum;
        cc.tween(this.node)
            .repeatForever(cc.tween()
            .to(this.animTime, { opacity: this.tarNum })
            .delay(this.delayTime)
            .to(this.animTime, { opacity: this.initNum }))
            .start();
    };
    __decorate([
        property({ displayName: "动画时长" })
    ], OpacityAnim.prototype, "animTime", void 0);
    __decorate([
        property({ displayName: "等待时长" })
    ], OpacityAnim.prototype, "delayTime", void 0);
    __decorate([
        property({ displayName: "目标值" })
    ], OpacityAnim.prototype, "tarNum", void 0);
    __decorate([
        property({ displayName: "初始值" })
    ], OpacityAnim.prototype, "initNum", void 0);
    __decorate([
        property
    ], OpacityAnim.prototype, "playOnEnable", void 0);
    OpacityAnim = __decorate([
        ccclass
    ], OpacityAnim);
    return OpacityAnim;
}(cc.Component));
exports.default = OpacityAnim;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcdG9vbFxcT3BhY2l0eUFuaW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFtQ0M7UUFoQ0csY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBR3RCLFlBQU0sR0FBVyxHQUFHLENBQUM7UUFHckIsYUFBTyxHQUFXLEdBQUcsQ0FBQztRQUd0QixrQkFBWSxHQUFZLEtBQUssQ0FBQzs7SUFvQmxDLENBQUM7SUFsQmEsOEJBQVEsR0FBbEI7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBRU0sMEJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxhQUFhLENBQ1YsRUFBRSxDQUFDLEtBQUssRUFBRTthQUNMLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUMzQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUNyQixFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FDcEQ7YUFDQSxLQUFLLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBL0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDO2lEQUNiO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDO2tEQUNaO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDOytDQUNaO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDO2dEQUNYO0lBR3RCO1FBREMsUUFBUTtxREFDcUI7SUFmYixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBbUMvQjtJQUFELGtCQUFDO0NBbkNELEFBbUNDLENBbkN3QyxFQUFFLENBQUMsU0FBUyxHQW1DcEQ7a0JBbkNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcGFjaXR5QW5pbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5Yqo55S75pe26ZW/XCIgfSlcclxuICAgIGFuaW1UaW1lOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuetieW+heaXtumVv1wiIH0pXHJcbiAgICBkZWxheVRpbWU6IG51bWJlciA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi55uu5qCH5YC8XCIgfSlcclxuICAgIHRhck51bTogbnVtYmVyID0gMTIwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuWIneWni+WAvFwiIH0pXHJcbiAgICBpbml0TnVtOiBudW1iZXIgPSAyNTU7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwbGF5T25FbmFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheU9uRW5hYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IHRoaXMuaW5pdE51bTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIC50byh0aGlzLmFuaW1UaW1lLCB7IG9wYWNpdHk6IHRoaXMudGFyTnVtIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KHRoaXMuZGVsYXlUaW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIC50byh0aGlzLmFuaW1UaW1lLCB7IG9wYWNpdHk6IHRoaXMuaW5pdE51bSB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcbn1cclxuIl19