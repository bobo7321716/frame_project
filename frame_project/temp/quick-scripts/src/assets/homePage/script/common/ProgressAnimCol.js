"use strict";
cc._RF.push(module, '306552pUgBKuonrUjN6FyVL', 'ProgressAnimCol');
// homePage/script/common/ProgressAnimCol.ts

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
var ProgressAnimCol = /** @class */ (function (_super) {
    __extends(ProgressAnimCol, _super);
    function ProgressAnimCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.proLab = null;
        _this.proBar = null;
        _this.barSpr = null;
        _this.pendant = null;
        _this.initPro = 0;
        _this.speed = 0.01;
        _this.isOnAnim = false;
        _this.target = 0;
        _this.upgradeNum = 0;
        _this.timer = 0;
        _this.upgrageCb = null;
        _this.endCb = null;
        _this.progressCb = null;
        _this._curProgress = 0;
        return _this;
    }
    Object.defineProperty(ProgressAnimCol.prototype, "curProgress", {
        get: function () {
            return this._curProgress;
        },
        set: function (value) {
            this._curProgress = value;
            this.proBar.progress = value;
            this.barSpr.fillRange = value;
            if (this.proLab) {
                // this.proLab.string = (value * 100).toFixed(0) + "%";
                this.proLab.string = Math.floor(value * 100) + "%";
            }
            if (this.pendant) {
                var fixWidth = this.barSpr.node.width - 40;
                this.pendant.x = -fixWidth / 2 + value * fixWidth;
            }
            this.progressCb && this.progressCb(value);
        },
        enumerable: false,
        configurable: true
    });
    ProgressAnimCol.prototype.init = function () {
        this.curProgress = this.initPro;
        this.isOnAnim = false;
        this.target = null;
    };
    ProgressAnimCol.prototype.setProgress = function (value) {
        this.isOnAnim = false;
        this.curProgress = value;
    };
    ProgressAnimCol.prototype.progressAnim = function (targetPro, upgradeNum, upgrageCb, endCb, progressCb) {
        if (upgradeNum === void 0) { upgradeNum = 0; }
        if (upgrageCb === void 0) { upgrageCb = null; }
        if (endCb === void 0) { endCb = null; }
        if (progressCb === void 0) { progressCb = null; }
        this.upgradeNum = upgradeNum;
        this.upgrageCb = upgrageCb;
        this.endCb = endCb;
        this.progressCb = progressCb;
        if (this.curProgress >= targetPro && upgradeNum == 0) {
            this.endCb && this.endCb();
            this.endCb = null;
            return;
        }
        this.timer = 0;
        this.isOnAnim = true;
        this.target = targetPro;
    };
    ProgressAnimCol.prototype.update = function (dt) {
        if (!this.isOnAnim)
            return;
        this.curProgress += dt * this.speed;
        if (this.upgradeNum > 0 && this.timer < this.upgradeNum) {
            if (this.curProgress >= 1) {
                this.timer++;
                this.curProgress = 0;
                this.upgrageCb && this.upgrageCb();
            }
        }
        else {
            if (this.curProgress >= this.target) {
                this.isOnAnim = false;
                this.curProgress = this.target;
                this.target = null;
                this.endCb && this.endCb();
                this.endCb = null;
                this.upgrageCb = null;
                this.progressCb = null;
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], ProgressAnimCol.prototype, "proLab", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], ProgressAnimCol.prototype, "proBar", void 0);
    __decorate([
        property(cc.Sprite)
    ], ProgressAnimCol.prototype, "barSpr", void 0);
    __decorate([
        property(cc.Node)
    ], ProgressAnimCol.prototype, "pendant", void 0);
    __decorate([
        property
    ], ProgressAnimCol.prototype, "initPro", void 0);
    __decorate([
        property
    ], ProgressAnimCol.prototype, "speed", void 0);
    ProgressAnimCol = __decorate([
        ccclass
    ], ProgressAnimCol);
    return ProgressAnimCol;
}(cc.Component));
exports.default = ProgressAnimCol;

cc._RF.pop();