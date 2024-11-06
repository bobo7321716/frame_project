
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/AnimationCol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxBbmltYXRpb25Db2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUE4QjtBQUV4QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFZLGFBT1g7QUFQRCxXQUFZLGFBQWE7SUFDckIsOEJBQWEsQ0FBQTtJQUNiLDhCQUFhLENBQUE7SUFDYix5Q0FBd0IsQ0FBQTtJQUN4QixzQ0FBcUIsQ0FBQTtJQUNyQixnQ0FBZSxDQUFBO0lBQ2Ysa0NBQWlCLENBQUE7QUFDckIsQ0FBQyxFQVBXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBT3hCO0FBR0Q7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFrREM7UUEvQ0csVUFBSSxHQUFpQixJQUFJLENBQUM7UUFHMUIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFHeEIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUdsQixrQkFBWSxHQUFZLElBQUksQ0FBQzs7SUFtQ2pDLENBQUM7SUFqQ2EsK0JBQVEsR0FBbEI7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQztJQUNMLENBQUM7SUFFRCwyQkFBSSxHQUFKLFVBQUssV0FBb0IsRUFBRSxLQUFpQixFQUFFLEVBQXFCO1FBQW5FLGlCQXFCQztRQXJCMEIsc0JBQUEsRUFBQSxTQUFpQjtRQUFFLG1CQUFBLEVBQUEsU0FBcUI7UUFDL0QsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDaEQsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDbEM7UUFDRCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLElBQUksS0FBSyxHQUFHO1lBQ1IsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFBO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLEtBQUssR0FBRztnQkFDSixFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7Z0JBQ1gsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQTtTQUNKO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEQsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxXQUFXLElBQUksR0FBRyxFQUFFO1lBQ3BCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDekM7YUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLFNBQVMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDSSx1QkFBdUI7UUFDdkIsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUE5Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs4Q0FDRztJQUcxQjtRQURDLFFBQVE7dURBQ3FCO0lBRzlCO1FBREMsUUFBUTtxREFDZTtJQUd4QjtRQURDLFFBQVE7K0NBQ1M7SUFHbEI7UUFEQyxRQUFRO3NEQUNvQjtJQWZaLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FrRGhDO0lBQUQsbUJBQUM7Q0FsREQsQUFrREMsQ0FsRHlDLEVBQUUsQ0FBQyxTQUFTLEdBa0RyRDtrQkFsRG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXlQb29sIGZyb20gXCIuL015UG9vbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIEFuaW1FdmVudEVudW0ge1xyXG4gICAgUExBWSA9IFwicGxheVwiLFxyXG4gICAgU1RPUCA9IFwic3RvcFwiLFxyXG4gICAgTEFTVEdGUkFNRSA9IFwibGFzdGZyYW1lXCIsXHJcbiAgICBGSU5JU0hFRCA9IFwiZmluaXNoZWRcIixcclxuICAgIFBBVVNFID0gXCJwYXVzZVwiLFxyXG4gICAgUkVTVU1FID0gXCJyZXN1bWVcIlxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYXRpb25Db2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgZmluaXNoRGVzdHJveTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICByZXBlYXRUaW1lczogbnVtYmVyID0gMTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNwZWVkOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcGxheU9uRW5hYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheU9uRW5hYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheSh0aGlzLnJlcGVhdFRpbWVzLCB0aGlzLnNwZWVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheShyZXBlYXRUaW1lcz86IG51bWJlciwgc3BlZWQ6IG51bWJlciA9IDEsIGNiOiAoKSA9PiB2b2lkID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghcmVwZWF0VGltZXMgfHwgIU51bWJlci5pc0ludGVnZXIocmVwZWF0VGltZXMpKSB7XHJcbiAgICAgICAgICAgIHJlcGVhdFRpbWVzID0gdGhpcy5yZXBlYXRUaW1lcztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFuaW1TdGF0ZSA9IHRoaXMuYW5pbS5wbGF5KCk7XHJcbiAgICAgICAgbGV0IGVuZENiID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5maW5pc2hEZXN0cm95KSB7XHJcbiAgICAgICAgICAgIGVuZENiID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveVNlbGYoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFuaW0ub25jZShBbmltRXZlbnRFbnVtLkZJTklTSEVELCBlbmRDYiwgdGhpcyk7XHJcbiAgICAgICAgYW5pbVN0YXRlLnNwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgaWYgKHJlcGVhdFRpbWVzID49IDk5OSkge1xyXG4gICAgICAgICAgICBhbmltU3RhdGUud3JhcE1vZGUgPSBjYy5XcmFwTW9kZS5Mb29wO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXBlYXRUaW1lcyA+IDEpIHtcclxuICAgICAgICAgICAgYW5pbVN0YXRlLnJlcGVhdENvdW50ID0gcmVwZWF0VGltZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3lTZWxmKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgTXlQb29sLnB1dE9iaih0aGlzLm5vZGUpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==