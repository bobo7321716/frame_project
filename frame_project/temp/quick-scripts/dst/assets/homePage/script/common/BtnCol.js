
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/BtnCol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82299r2Gq5Ihatcg1URguON', 'BtnCol');
// homePage/script/common/BtnCol.ts

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
var BtnCol = /** @class */ (function (_super) {
    __extends(BtnCol, _super);
    function BtnCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clickInterval = 100;
        _this.maters = [];
        _this.labNode = null;
        _this.redPointNode = null;
        _this.btn = null;
        _this.spr = null;
        return _this;
    }
    BtnCol.prototype.setIsGray = function (isGray) {
        if (!this.btn) {
            this.btn = this.node.getComponent(cc.Button);
        }
        if (!this.spr) {
            this.spr = this.node.getComponent(cc.Sprite);
        }
        this.spr.setMaterial(0, isGray ? this.maters[1] : this.maters[0]);
        this.labNode && (this.labNode.color = isGray ? cc.color(237, 126, 126) : cc.Color.WHITE);
        this.redPointNode && (this.redPointNode.active = !isGray);
    };
    BtnCol.prototype.onLoad = function () {
        this.setIsGray(false);
    };
    BtnCol.prototype.btnClick = function () {
        var _this = this;
        this.btn.interactable = false;
        setTimeout(function () {
            _this.btn.interactable = true;
        }, this.clickInterval);
    };
    __decorate([
        property({ displayName: "连点间隔", type: cc.Integer })
    ], BtnCol.prototype, "clickInterval", void 0);
    __decorate([
        property(cc.Material)
    ], BtnCol.prototype, "maters", void 0);
    __decorate([
        property(cc.Node)
    ], BtnCol.prototype, "labNode", void 0);
    __decorate([
        property(cc.Node)
    ], BtnCol.prototype, "redPointNode", void 0);
    BtnCol = __decorate([
        ccclass
    ], BtnCol);
    return BtnCol;
}(cc.Component));
exports.default = BtnCol;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxCdG5Db2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUF1Q0M7UUFwQ0csbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFHNUIsWUFBTSxHQUFrQixFQUFFLENBQUM7UUFHM0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixTQUFHLEdBQWMsSUFBSSxDQUFDO1FBQ3RCLFNBQUcsR0FBYyxJQUFJLENBQUM7O0lBd0IxQixDQUFDO0lBdEJHLDBCQUFTLEdBQVQsVUFBVSxNQUFNO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoRDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1gsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFUyx1QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHlCQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM5QixVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDakMsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBbkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lEQUN4QjtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzBDQUNLO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDVztJQVpaLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F1QzFCO0lBQUQsYUFBQztDQXZDRCxBQXVDQyxDQXZDbUMsRUFBRSxDQUFDLFNBQVMsR0F1Qy9DO2tCQXZDb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnRuQ29sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLov57ngrnpl7TpmpRcIiwgdHlwZTogY2MuSW50ZWdlciB9KVxyXG4gICAgY2xpY2tJbnRlcnZhbDogbnVtYmVyID0gMTAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5NYXRlcmlhbClcclxuICAgIG1hdGVyczogY2MuTWF0ZXJpYWxbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGFiTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByZWRQb2ludE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGJ0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIHNwcjogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBzZXRJc0dyYXkoaXNHcmF5KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJ0bikge1xyXG4gICAgICAgICAgICB0aGlzLmJ0biA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnNwcikge1xyXG4gICAgICAgICAgICB0aGlzLnNwciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zcHIuc2V0TWF0ZXJpYWwoMCwgaXNHcmF5ID8gdGhpcy5tYXRlcnNbMV0gOiB0aGlzLm1hdGVyc1swXSk7XHJcbiAgICAgICAgdGhpcy5sYWJOb2RlICYmICh0aGlzLmxhYk5vZGUuY29sb3IgPSBpc0dyYXkgPyBjYy5jb2xvcigyMzcsIDEyNiwgMTI2KSA6IGNjLkNvbG9yLldISVRFKTtcclxuICAgICAgICB0aGlzLnJlZFBvaW50Tm9kZSAmJiAodGhpcy5yZWRQb2ludE5vZGUuYWN0aXZlID0gIWlzR3JheSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldElzR3JheShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnRuQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5idG4uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSwgdGhpcy5jbGlja0ludGVydmFsKTtcclxuICAgIH1cclxufVxyXG4iXX0=