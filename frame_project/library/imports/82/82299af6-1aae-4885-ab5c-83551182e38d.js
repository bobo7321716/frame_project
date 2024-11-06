"use strict";
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