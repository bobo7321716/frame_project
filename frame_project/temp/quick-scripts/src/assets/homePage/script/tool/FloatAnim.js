"use strict";
cc._RF.push(module, '2fbfdb9I09OybjGLE2zftWf', 'FloatAnim');
// homePage/script/tool/FloatAnim.ts

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
var FloatAnim = /** @class */ (function (_super) {
    __extends(FloatAnim, _super);
    function FloatAnim() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.time = 2;
        _this.dis = 10;
        _this.oriPos = null;
        return _this;
    }
    FloatAnim.prototype.onLoad = function () {
        this.oriPos = this.node.getPosition();
    };
    FloatAnim.prototype.onEnable = function () {
        this.node.stopAllActions();
        cc.tween(this.node)
            .repeatForever(cc.tween()
            .by(this.time / 4, { y: -this.dis / 2 }, { easing: "sineOut" })
            .by(this.time / 4, { y: this.dis / 2 }, { easing: "sineIn" })
            .by(this.time / 4, { y: this.dis / 2 }, { easing: "sineOut" })
            .by(this.time / 4, { y: -this.dis / 2 }, { easing: "sineIn" }))
            .start();
    };
    FloatAnim.prototype.onDisable = function () {
        this.node.setPosition(this.oriPos);
    };
    __decorate([
        property
    ], FloatAnim.prototype, "time", void 0);
    __decorate([
        property
    ], FloatAnim.prototype, "dis", void 0);
    FloatAnim = __decorate([
        ccclass
    ], FloatAnim);
    return FloatAnim;
}(cc.Component));
exports.default = FloatAnim;

cc._RF.pop();