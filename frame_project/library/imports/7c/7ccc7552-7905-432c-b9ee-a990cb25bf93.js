"use strict";
cc._RF.push(module, '7ccc7VSeQVDLLnuqZDLJb+T', 'LoadingProgressCol');
// homePage/script/common/LoadingProgressCol.ts

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
/**加载进度条 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingProgressCol = /** @class */ (function (_super) {
    __extends(LoadingProgressCol, _super);
    function LoadingProgressCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progressLabel = null;
        _this.progressBar = null;
        _this.barSpr = null;
        _this.initProgress = 0;
        _this.isStart = false;
        _this.isFinish = false;
        _this.resolve = null;
        _this.curProgress = 0;
        return _this;
    }
    LoadingProgressCol.prototype.startProgressAnim = function () {
        this.node.active = true;
        this.isStart = true;
        this.curProgress = this.initProgress;
        this.progressBar.progress = this.curProgress;
        this.barSpr.fillRange = this.curProgress;
    };
    LoadingProgressCol.prototype.finishProgress = function () {
        var _this = this;
        this.isFinish = true;
        return new Promise(function (resolve, reject) {
            _this.resolve = resolve;
        });
    };
    LoadingProgressCol.prototype.update = function (dt) {
        if (!this.isStart) {
            return;
        }
        if (this.isFinish) {
            this.curProgress += 0.1;
        }
        else {
            if (this.curProgress <= 0.99) {
                this.curProgress += ((1 - this.curProgress) / 500);
            }
        }
        if (this.curProgress > 1) {
            console.log("LoadingCol.ts=>update:进度条已满");
            this.curProgress = 1;
        }
        var proLabel = this.curProgress * 100;
        var pre = Number(proLabel.toFixed(0));
        this.progressLabel.string = Math.min(99, pre) + "%";
        this.progressBar.progress = this.curProgress;
        this.barSpr.fillRange = this.curProgress;
        if (this.curProgress >= 1 && this.isStart) {
            console.log("进度条结束");
            this.isStart = false;
            this.isFinish = false;
            this.resolve();
        }
    };
    LoadingProgressCol.prototype.hideLoadNode = function () {
        this.node.active = false;
    };
    __decorate([
        property(cc.Label)
    ], LoadingProgressCol.prototype, "progressLabel", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], LoadingProgressCol.prototype, "progressBar", void 0);
    __decorate([
        property(cc.Sprite)
    ], LoadingProgressCol.prototype, "barSpr", void 0);
    __decorate([
        property
    ], LoadingProgressCol.prototype, "initProgress", void 0);
    LoadingProgressCol = __decorate([
        ccclass
    ], LoadingProgressCol);
    return LoadingProgressCol;
}(cc.Component));
exports.default = LoadingProgressCol;

cc._RF.pop();