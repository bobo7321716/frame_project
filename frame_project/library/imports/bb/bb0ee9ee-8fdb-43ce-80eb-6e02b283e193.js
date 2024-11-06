"use strict";
cc._RF.push(module, 'bb0eenuj9tDzoDrbgKyg+GT', 'SeqFrameCol');
// homePage/script/common/SeqFrameCol.ts

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
var MyPool_1 = require("./MyPool");
var Util_1 = require("./Util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SeqFrameCol = /** @class */ (function (_super) {
    __extends(SeqFrameCol, _super);
    function SeqFrameCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spr = null;
        _this.spfs = [];
        _this.playOnEnable = false;
        _this.replayTimes = 1;
        _this.interval = 0.1;
        _this.delayTimeRange = cc.Vec2.ZERO;
        _this.finishDestroySelf = false;
        _this.spfIndex = 0;
        _this.timer = 0;
        _this.isOnAnim = false;
        _this.cb = null;
        _this.replayTimer = 0;
        _this.isOnDelay = false;
        _this.delayTimer = 0;
        _this.delayLength = 0;
        return _this;
    }
    SeqFrameCol.prototype.onEnable = function () {
        if (this.playOnEnable) {
            this.playAnim();
        }
    };
    SeqFrameCol.prototype.playAnim = function () {
        this.spfIndex = 0;
        this.replayTimer = 0;
        this.isOnAnim = false;
        this.timer = 0;
        if (!this.spr) {
            this.spr = this.node.getComponent(cc.Sprite);
        }
        this.spr.spriteFrame = this.spfs[0];
        this.play();
    };
    SeqFrameCol.prototype.play = function (replayTimes, cb) {
        if (replayTimes === void 0) { replayTimes = null; }
        if (cb === void 0) { cb = null; }
        if (replayTimes != null) {
            this.replayTimes = replayTimes;
        }
        this.isOnAnim = true;
        this.isOnDelay = false;
        this.spfIndex = 0;
        this.replayTimer = 0;
        this.delayTimer = 0;
        this.timer = 0;
        this.delayLength = Util_1.Util.getRandomFloat(this.delayTimeRange.x, this.delayTimeRange.y);
        this.cb = cb;
        this.refreshSpr();
    };
    SeqFrameCol.prototype.refreshSpr = function () {
        this.spr.spriteFrame = this.spfs[this.spfIndex];
        this.spfIndex++;
        if (this.spfIndex > this.spfs.length - 1) {
            this.spfIndex = 0;
            this.replayTimer++;
            if (this.replayTimes > 0 && this.replayTimer >= this.replayTimes) {
                this.isOnAnim = false;
                this.cb && this.cb();
                if (this.finishDestroySelf) {
                    MyPool_1.default.putObj(this.node);
                }
            }
            else {
                this.isOnDelay = this.delayLength > 0;
            }
        }
    };
    SeqFrameCol.prototype.update = function (dt) {
        if (!this.isOnAnim) {
            return;
        }
        if (this.isOnDelay) {
            this.delayTimer += dt;
            if (this.delayTimer >= this.delayLength) {
                this.isOnDelay = false;
                this.delayTimer = 0;
            }
            return;
        }
        this.timer += dt;
        if (this.timer >= this.interval) {
            this.timer = 0;
            this.refreshSpr();
        }
    };
    SeqFrameCol.prototype.reset = function () {
        this.isOnAnim = false;
        this.isOnDelay = false;
        this.spfIndex = 0;
        this.replayTimer = 0;
        this.delayTimer = 0;
        this.timer = 0;
        this.spr.spriteFrame = this.spfs[0];
    };
    __decorate([
        property(cc.Sprite)
    ], SeqFrameCol.prototype, "spr", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], SeqFrameCol.prototype, "spfs", void 0);
    __decorate([
        property
    ], SeqFrameCol.prototype, "playOnEnable", void 0);
    __decorate([
        property
    ], SeqFrameCol.prototype, "replayTimes", void 0);
    __decorate([
        property
    ], SeqFrameCol.prototype, "interval", void 0);
    __decorate([
        property
    ], SeqFrameCol.prototype, "delayTimeRange", void 0);
    __decorate([
        property
    ], SeqFrameCol.prototype, "finishDestroySelf", void 0);
    SeqFrameCol = __decorate([
        ccclass
    ], SeqFrameCol);
    return SeqFrameCol;
}(cc.Component));
exports.default = SeqFrameCol;

cc._RF.pop();