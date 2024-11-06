
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/SeqFrameCol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxTZXFGcmFtZUNvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFDOUIsK0JBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBK0dDO1FBNUdHLFNBQUcsR0FBYyxJQUFJLENBQUM7UUFHdEIsVUFBSSxHQUFxQixFQUFFLENBQUM7UUFHNUIsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFHOUIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFHeEIsY0FBUSxHQUFXLEdBQUcsQ0FBQztRQUd2QixvQkFBYyxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBR3ZDLHVCQUFpQixHQUFZLEtBQUssQ0FBQztRQUUzQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixRQUFFLEdBQWUsSUFBSSxDQUFDO1FBQ3RCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7O0lBaUZwQyxDQUFDO0lBL0VhLDhCQUFRLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEs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QUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDckI7SUFDTCxDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBM0dEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0U7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDRztJQUc1QjtRQURDLFFBQVE7cURBQ3FCO0lBRzlCO1FBREMsUUFBUTtvREFDZTtJQUd4QjtRQURDLFFBQVE7aURBQ2M7SUFHdkI7UUFEQyxRQUFRO3VEQUM4QjtJQUd2QztRQURDLFFBQVE7MERBQzBCO0lBckJsQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBK0cvQjtJQUFELGtCQUFDO0NBL0dELEFBK0dDLENBL0d3QyxFQUFFLENBQUMsU0FBUyxHQStHcEQ7a0JBL0dvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE15UG9vbCBmcm9tIFwiLi9NeVBvb2xcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuL1V0aWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXFGcmFtZUNvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHNwcjogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBzcGZzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwbGF5T25FbmFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHJlcGxheVRpbWVzOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgaW50ZXJ2YWw6IG51bWJlciA9IDAuMTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGRlbGF5VGltZVJhbmdlOiBjYy5WZWMyID0gY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZmluaXNoRGVzdHJveVNlbGY6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHNwZkluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB0aW1lcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgaXNPbkFuaW06IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY2I6ICgpID0+IHZvaWQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSByZXBsYXlUaW1lcjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgaXNPbkRlbGF5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGRlbGF5VGltZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGRlbGF5TGVuZ3RoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5T25FbmFibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5QW5pbSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5QW5pbSgpIHtcclxuICAgICAgICB0aGlzLnNwZkluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnJlcGxheVRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLmlzT25BbmltID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNwcikge1xyXG4gICAgICAgICAgICB0aGlzLnNwciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zcHIuc3ByaXRlRnJhbWUgPSB0aGlzLnNwZnNbMF07XHJcbiAgICAgICAgdGhpcy5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheShyZXBsYXlUaW1lczogbnVtYmVyID0gbnVsbCwgY2I6ICgpID0+IHZvaWQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHJlcGxheVRpbWVzICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBsYXlUaW1lcyA9IHJlcGxheVRpbWVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzT25BbmltID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzT25EZWxheSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3BmSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMucmVwbGF5VGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuZGVsYXlUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5kZWxheUxlbmd0aCA9IFV0aWwuZ2V0UmFuZG9tRmxvYXQodGhpcy5kZWxheVRpbWVSYW5nZS54LCB0aGlzLmRlbGF5VGltZVJhbmdlLnkpO1xyXG4gICAgICAgIHRoaXMuY2IgPSBjYjtcclxuICAgICAgICB0aGlzLnJlZnJlc2hTcHIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZnJlc2hTcHIoKSB7XHJcbiAgICAgICAgdGhpcy5zcHIuc3ByaXRlRnJhbWUgPSB0aGlzLnNwZnNbdGhpcy5zcGZJbmRleF07XHJcbiAgICAgICAgdGhpcy5zcGZJbmRleCsrO1xyXG4gICAgICAgIGlmICh0aGlzLnNwZkluZGV4ID4gdGhpcy5zcGZzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGZJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVwbGF5VGltZXIrKztcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVwbGF5VGltZXMgPiAwICYmIHRoaXMucmVwbGF5VGltZXIgPj0gdGhpcy5yZXBsYXlUaW1lcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc09uQW5pbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYiAmJiB0aGlzLmNiKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maW5pc2hEZXN0cm95U2VsZikge1xyXG4gICAgICAgICAgICAgICAgICAgIE15UG9vbC5wdXRPYmoodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNPbkRlbGF5ID0gdGhpcy5kZWxheUxlbmd0aCA+IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzT25BbmltKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPbkRlbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsYXlUaW1lciArPSBkdDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVsYXlUaW1lciA+PSB0aGlzLmRlbGF5TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzT25EZWxheSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxheVRpbWVyID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPj0gdGhpcy5pbnRlcnZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoU3ByKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNPbkFuaW0gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzT25EZWxheSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3BmSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMucmVwbGF5VGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuZGVsYXlUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5zcHIuc3ByaXRlRnJhbWUgPSB0aGlzLnNwZnNbMF07XHJcbiAgICB9XHJcbn1cclxuIl19