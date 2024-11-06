"use strict";
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