"use strict";
cc._RF.push(module, '22bbf185KRKXZrVxKewslaP', 'ProgressCol');
// homePage/script/common/ProgressCol.ts

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
var ProgressCol = /** @class */ (function (_super) {
    __extends(ProgressCol, _super);
    function ProgressCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progress = null;
        _this.bar = null;
        _this.proLab = null;
        _this.numLab = null;
        _this.isCeil = false;
        _this.total = 0;
        _this.curNum = 0;
        _this.isOnAnim = false;
        _this.speed = 10;
        _this.tarNum = 0;
        _this.cb = null;
        _this.dir = 1;
        return _this;
    }
    ProgressCol.prototype.init = function (total) {
        this.curNum = this.total = total;
        this.refreshBar();
    };
    ProgressCol.prototype.change = function (changeNum, isAnim, cb) {
        if (isAnim === void 0) { isAnim = false; }
        if (cb === void 0) { cb = null; }
        if (isAnim) {
            this.dir = changeNum > 0 ? 1 : -1;
            this.cb = cb;
            this.tarNum = cc.misc.clampf(this.curNum += changeNum, 0, this.total);
            this.isOnAnim = true;
        }
        else {
            this.curNum = cc.misc.clampf(this.curNum += changeNum, 0, this.total);
            this.refreshBar();
        }
    };
    ProgressCol.prototype.setCurNum = function (num, isAnim, cb) {
        if (isAnim === void 0) { isAnim = false; }
        if (cb === void 0) { cb = null; }
        if (isAnim) {
            this.dir = num > this.curNum ? 1 : -1;
            this.cb = cb;
            this.tarNum = cc.misc.clampf(num, 0, this.total);
            this.isOnAnim = true;
        }
        else {
            this.curNum = cc.misc.clampf(num, 0, this.total);
            this.refreshBar();
        }
    };
    ProgressCol.prototype.refreshBar = function () {
        this.bar.fillRange = this.curNum / this.total;
        if (this.proLab)
            this.proLab.string = (this.isCeil ? Math.ceil(this.curNum / this.total * 100) : Math.floor(this.curNum / this.total * 100)) + "%";
        if (this.numLab)
            this.numLab.string = (this.isCeil ? Math.ceil(this.curNum) : Math.floor(this.curNum)) + "";
    };
    ProgressCol.prototype.update = function (dt) {
        if (!this.isOnAnim)
            return;
        this.curNum += dt * this.speed * this.dir;
        if (this.dir == 1 && this.curNum >= this.tarNum || this.dir == -1 && this.curNum <= this.tarNum) {
            this.curNum = this.tarNum;
            this.isOnAnim = false;
            this.cb && this.cb();
        }
        this.refreshBar();
    };
    __decorate([
        property(cc.ProgressBar)
    ], ProgressCol.prototype, "progress", void 0);
    __decorate([
        property(cc.Sprite)
    ], ProgressCol.prototype, "bar", void 0);
    __decorate([
        property(cc.Label)
    ], ProgressCol.prototype, "proLab", void 0);
    __decorate([
        property(cc.Label)
    ], ProgressCol.prototype, "numLab", void 0);
    __decorate([
        property({ displayName: "是否向上取整" })
    ], ProgressCol.prototype, "isCeil", void 0);
    ProgressCol = __decorate([
        ccclass
    ], ProgressCol);
    return ProgressCol;
}(cc.Component));
exports.default = ProgressCol;

cc._RF.pop();