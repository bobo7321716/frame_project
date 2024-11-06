"use strict";
cc._RF.push(module, '7b02f6/jFhJ+6/hD709doym', 'AnimationCol');
// homePage/script/common/AnimationCol.ts

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
exports.AnimEventEnum = void 0;
var MyPool_1 = require("./MyPool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AnimEventEnum;
(function (AnimEventEnum) {
    AnimEventEnum["PLAY"] = "play";
    AnimEventEnum["STOP"] = "stop";
    AnimEventEnum["LASTGFRAME"] = "lastframe";
    AnimEventEnum["FINISHED"] = "finished";
    AnimEventEnum["PAUSE"] = "pause";
    AnimEventEnum["RESUME"] = "resume";
})(AnimEventEnum = exports.AnimEventEnum || (exports.AnimEventEnum = {}));
var AnimationCol = /** @class */ (function (_super) {
    __extends(AnimationCol, _super);
    function AnimationCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.finishDestroy = true;
        _this.repeatTimes = 1;
        _this.speed = 1;
        _this.playOnEnable = true;
        return _this;
    }
    AnimationCol.prototype.onEnable = function () {
        if (this.playOnEnable) {
            this.play(this.repeatTimes, this.speed);
        }
    };
    AnimationCol.prototype.play = function (repeatTimes, speed, cb) {
        var _this = this;
        if (speed === void 0) { speed = 1; }
        if (cb === void 0) { cb = null; }
        if (!repeatTimes || !Number.isInteger(repeatTimes)) {
            repeatTimes = this.repeatTimes;
        }
        var animState = this.anim.play();
        var endCb = function () {
            cb && cb();
        };
        if (this.finishDestroy) {
            endCb = function () {
                cb && cb();
                _this.destroySelf();
            };
        }
        this.anim.once(AnimEventEnum.FINISHED, endCb, this);
        animState.speed = speed;
        if (repeatTimes >= 999) {
            animState.wrapMode = cc.WrapMode.Loop;
        }
        else if (this.repeatTimes > 1) {
            animState.repeatCount = repeatTimes;
        }
    };
    AnimationCol.prototype.destroySelf = function () {
        // this.node.destroy();
        MyPool_1.default.putObj(this.node);
    };
    __decorate([
        property(cc.Animation)
    ], AnimationCol.prototype, "anim", void 0);
    __decorate([
        property
    ], AnimationCol.prototype, "finishDestroy", void 0);
    __decorate([
        property
    ], AnimationCol.prototype, "repeatTimes", void 0);
    __decorate([
        property
    ], AnimationCol.prototype, "speed", void 0);
    __decorate([
        property
    ], AnimationCol.prototype, "playOnEnable", void 0);
    AnimationCol = __decorate([
        ccclass
    ], AnimationCol);
    return AnimationCol;
}(cc.Component));
exports.default = AnimationCol;

cc._RF.pop();