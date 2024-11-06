"use strict";
cc._RF.push(module, '8d525NX9bpNw6tZCOz5YlUX', 'ScaleAnim');
// homePage/script/tool/ScaleAnim.ts

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
var ScaleAnim = /** @class */ (function (_super) {
    __extends(ScaleAnim, _super);
    function ScaleAnim() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animTime = 1;
        _this.delayTime = 1;
        _this.scaleNum = 1;
        _this.initScaleNum = 1;
        _this.playOnEnable = false;
        return _this;
    }
    ScaleAnim.prototype.onEnable = function () {
        if (this.playOnEnable) {
            this.init();
        }
    };
    ScaleAnim.prototype.init = function () {
        this.node.stopAllActions();
        this.node.scale = this.initScaleNum;
        cc.tween(this.node)
            .repeatForever(cc.tween()
            .to(this.animTime, { scale: this.scaleNum * this.initScaleNum })
            .delay(this.delayTime)
            .to(this.animTime, { scale: this.initScaleNum }))
            .start();
    };
    __decorate([
        property({ displayName: "动画时长" })
    ], ScaleAnim.prototype, "animTime", void 0);
    __decorate([
        property({ displayName: "等待时长" })
    ], ScaleAnim.prototype, "delayTime", void 0);
    __decorate([
        property({ displayName: "缩放值" })
    ], ScaleAnim.prototype, "scaleNum", void 0);
    __decorate([
        property({ displayName: "初始缩放值" })
    ], ScaleAnim.prototype, "initScaleNum", void 0);
    __decorate([
        property
    ], ScaleAnim.prototype, "playOnEnable", void 0);
    ScaleAnim = __decorate([
        ccclass
    ], ScaleAnim);
    return ScaleAnim;
}(cc.Component));
exports.default = ScaleAnim;

cc._RF.pop();