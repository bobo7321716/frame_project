"use strict";
cc._RF.push(module, 'c6dd4xhsutDoazXOUM5FhB3', 'AnimCol');
// homePage/script/common/AnimCol.ts

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
var AnimCol = /** @class */ (function (_super) {
    __extends(AnimCol, _super);
    function AnimCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spine = null;
        _this.dragon = null;
        return _this;
    }
    AnimCol.prototype.onLoad = function () {
        if (this.dragon) {
            this.dragon.premultipliedAlpha = false;
            this.dragon.enableBatch = true;
        }
        if (!this.spine) {
            this.spine = this.node.getComponent(sp.Skeleton);
        }
        if (!this.dragon) {
            this.dragon = this.node.getComponent(dragonBones.ArmatureDisplay);
        }
    };
    Object.defineProperty(AnimCol.prototype, "isPlaying", {
        get: function () {
            return (this.spine && this.spine.animation != null) || (this.dragon && this.dragon.animationName != null);
        },
        enumerable: false,
        configurable: true
    });
    AnimCol.prototype.play = function (animName, timeScale, loopTimes, endCb) {
        var _this = this;
        if (animName === void 0) { animName = null; }
        if (timeScale === void 0) { timeScale = 1; }
        if (loopTimes === void 0) { loopTimes = 0; }
        if (endCb === void 0) { endCb = null; }
        return new Promise(function (resolve, reject) {
            var loopTimer = 0;
            var completeCall = function () {
                loopTimer++;
                if (loopTimer >= loopTimes || loopTimes == 0) {
                    _this.dragon && _this.dragon.removeEventListener(dragonBones.EventObject.COMPLETE, completeCall, _this);
                    resolve(null);
                }
                else {
                    _this.spine.timeScale = timeScale;
                    var name = animName ? animName : _this.spine.defaultAnimation;
                    _this.spine.setAnimation(0, name, loopTimes == 0);
                }
            };
            if (_this.spine) {
                endCb && _this.spine.setEndListener(endCb);
                _this.spine.setCompleteListener(completeCall);
                _this.spine.timeScale = timeScale;
                var name = animName ? animName : _this.spine.defaultAnimation;
                _this.spine.setAnimation(0, name, loopTimes == 0);
            }
            else if (_this.dragon) {
                _this.dragon.timeScale = timeScale;
                _this.dragon.addEventListener(dragonBones.EventObject.COMPLETE, completeCall, _this);
                var name = animName ? animName : _this.dragon.animationName;
                _this.dragon.playAnimation(name, loopTimes);
            }
            else {
                resolve(null);
            }
        });
    };
    __decorate([
        property(sp.Skeleton)
    ], AnimCol.prototype, "spine", void 0);
    __decorate([
        property(dragonBones.ArmatureDisplay)
    ], AnimCol.prototype, "dragon", void 0);
    AnimCol = __decorate([
        ccclass
    ], AnimCol);
    return AnimCol;
}(cc.Component));
exports.default = AnimCol;

cc._RF.pop();