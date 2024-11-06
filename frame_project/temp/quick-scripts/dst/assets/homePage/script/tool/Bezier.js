
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/tool/Bezier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '843fdiiykRHWpVGuYQlOl31', 'Bezier');
// homePage/script/tool/Bezier.ts

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
exports.BezierData = void 0;
var GamingData_1 = require("../common/GamingData");
var Util_1 = require("../common/Util");
var BezierData = /** @class */ (function () {
    function BezierData() {
    }
    return BezierData;
}());
exports.BezierData = BezierData;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bezier = /** @class */ (function (_super) {
    __extends(Bezier, _super);
    function Bezier() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = 0;
        _this.costTime = 0;
        _this.allBezierPos = [];
        _this.endCb = null;
        _this.speed = 0;
        _this.sPos = null;
        _this.ePos = null;
        _this.sAngle = 0;
        _this.eAngle = 0;
        _this.totalLineLen = 0;
        _this.duration = 0;
        _this.endScale = 0;
        return _this;
    }
    // 匀速贝塞尔曲线运动
    Bezier.prototype.runUniformBezierAct = function (duration, bezierDatas, cb, endScale) {
        if (bezierDatas.length <= 0)
            return;
        this.duration = duration;
        this.index = 0;
        this.endCb = cb;
        this.endScale = endScale;
        this.node.stopAllActions();
        this.allBezierPos = [];
        for (var i = 0; i < bezierDatas.length; ++i) {
            var posArr = [bezierDatas[i].startPos, bezierDatas[i].c1, bezierDatas[i].c2, bezierDatas[i].endPos];
            this.allBezierPos = this.allBezierPos.concat(this._caculateBezierPoint(posArr));
        }
        this.totalLineLen = this._caculateBezierLength(this.allBezierPos);
        this.speed = this.totalLineLen / this.duration;
        this.node.setPosition(this.allBezierPos[0]);
        this.refreshTarget();
    };
    Bezier.prototype.refreshTarget = function () {
        var _this = this;
        if (this.index >= this.allBezierPos.length) {
            this.node.stopAllActions();
            this.endCb && this.endCb();
        }
        else {
            if (GamingData_1.default.fightSpeedMul > 0) {
                this.sPos = this.node.getPosition();
                this.ePos = this.allBezierPos[this.index];
                var dis = this.ePos.sub(this.sPos).mag();
                if (dis > 0) {
                    var dir = this.ePos.sub(this.sPos).normalize();
                    this.eAngle = -Util_1.Util.vectorsToDegress(dir);
                    this.costTime = dis / (this.speed * GamingData_1.default.fightSpeedMul);
                    cc.tween(this.node)
                        .to(this.costTime, { x: this.ePos.x, y: this.ePos.y, angle: this.eAngle })
                        .call(function () {
                        _this.node.setPosition(_this.ePos);
                        _this.node.angle = _this.eAngle;
                        _this.node.scale = 1 - _this.index / _this.allBezierPos.length * (1 - _this.endScale);
                        _this.index++;
                        _this.refreshTarget();
                    })
                        .start();
                }
                else {
                    this.index++;
                    this.refreshTarget();
                }
            }
        }
    };
    // 计算所有贝塞尔曲线的点
    Bezier.prototype._caculateBezierPoint = function (posArr) {
        var allBezierPos = [];
        var gap = 1 / 30; // 每次迭代步长,这个值越小越精细,但是效率越低,这里迭代300次已经够了
        for (var i = 0; i <= 1; i += gap) {
            var pos = this._caculateBezierP(posArr, i);
            allBezierPos.push(pos);
        }
        return allBezierPos;
    };
    // 计算贝塞尔曲线的长度
    Bezier.prototype._caculateBezierLength = function (allBezierPos) {
        var totalLineLen = 0;
        for (var i = 1; i < allBezierPos.length; ++i) {
            var dis = cc.v2(allBezierPos[i].x - allBezierPos[i - 1].x, allBezierPos[i].y - allBezierPos[i - 1].y).len();
            totalLineLen += dis;
        }
        return totalLineLen;
    };
    /**
     * 计算三阶贝塞尔在 t时刻 的位置
     * @param p 三阶贝塞尔的四个点,数组对应为 0起点,1起点控制点,2终点控制点,3终点
     * @param t 传入0-1的值,一个时间的迭代过程
     * @returns
     */
    Bezier.prototype._caculateBezierP = function (p, t) {
        // 三阶贝塞尔运算
        var bezierP = cc.v2();
        bezierP.x = Math.floor(Math.pow(1 - t, 3) * p[0].x + 3 * t * Math.pow(1 - t, 2) * p[1].x + 3 * Math.pow(t, 2) * (1 - t) * p[2].x + Math.pow(t, 3) * p[3].x);
        bezierP.y = Math.floor(Math.pow(1 - t, 3) * p[0].y + 3 * t * Math.pow(1 - t, 2) * p[1].y + 3 * Math.pow(t, 2) * (1 - t) * p[2].y + Math.pow(t, 3) * p[3].y);
        return bezierP;
    };
    Bezier = __decorate([
        ccclass
    ], Bezier);
    return Bezier;
}(cc.Component));
exports.default = Bezier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcdG9vbFxcQmV6aWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFDOUMsdUNBQXNDO0FBRXRDO0lBQUE7SUFLQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTtBQUxZLGdDQUFVO0FBT2pCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBcUdDO1FBbkdXLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixrQkFBWSxHQUFjLEVBQUUsQ0FBQztRQUM3QixXQUFLLEdBQWUsSUFBSSxDQUFDO1FBQ3pCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUNyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGNBQVEsR0FBVyxDQUFDLENBQUM7O0lBd0ZqQyxDQUFDO0lBdEZHLFlBQVk7SUFDWixvQ0FBbUIsR0FBbkIsVUFBb0IsUUFBZ0IsRUFBRSxXQUF5QixFQUFFLEVBQWMsRUFBRSxRQUFnQjtRQUM3RixJQUFJLFdBQVcsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU07UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFH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R0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVKLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFwR2dCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FxRzFCO0lBQUQsYUFBQztDQXJHRCxBQXFHQyxDQXJHbUMsRUFBRSxDQUFDLFNBQVMsR0FxRy9DO2tCQXJHb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1pbmdEYXRhIGZyb20gXCIuLi9jb21tb24vR2FtaW5nRGF0YVwiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uL2NvbW1vbi9VdGlsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmV6aWVyRGF0YSB7XHJcbiAgICBzdGFydFBvczogY2MuVmVjMjtcclxuICAgIGMxOiBjYy5WZWMyOyAgLy8g6LW354K555qE5o6n5Yi254K5XHJcbiAgICBjMjogY2MuVmVjMjsgIC8v57uI54K555qE5o6n5Yi254K5XHJcbiAgICBlbmRQb3M6IGNjLlZlYzI7XHJcbn1cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZXppZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgaW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNvc3RUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBhbGxCZXppZXJQb3M6IGNjLlZlYzJbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBlbmRDYjogKCkgPT4gdm9pZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNwZWVkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzUG9zOiBjYy5WZWMyID0gbnVsbDtcclxuICAgIHByaXZhdGUgZVBvczogY2MuVmVjMiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNBbmdsZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZUFuZ2xlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB0b3RhbExpbmVMZW46IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGR1cmF0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBlbmRTY2FsZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyDljIDpgJ/otJ3loZ7lsJTmm7Lnur/ov5DliqhcclxuICAgIHJ1blVuaWZvcm1CZXppZXJBY3QoZHVyYXRpb246IG51bWJlciwgYmV6aWVyRGF0YXM6IEJlemllckRhdGFbXSwgY2I6ICgpID0+IHZvaWQsIGVuZFNjYWxlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYmV6aWVyRGF0YXMubGVuZ3RoIDw9IDApIHJldHVyblxyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmVuZENiID0gY2I7XHJcbiAgICAgICAgdGhpcy5lbmRTY2FsZSA9IGVuZFNjYWxlO1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuYWxsQmV6aWVyUG9zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiZXppZXJEYXRhcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgcG9zQXJyID0gW2JlemllckRhdGFzW2ldLnN0YXJ0UG9zLCBiZXppZXJEYXRhc1tpXS5jMSwgYmV6aWVyRGF0YXNbaV0uYzIsIGJlemllckRhdGFzW2ldLmVuZFBvc11cclxuICAgICAgICAgICAgdGhpcy5hbGxCZXppZXJQb3MgPSB0aGlzLmFsbEJlemllclBvcy5jb25jYXQodGhpcy5fY2FjdWxhdGVCZXppZXJQb2ludChwb3NBcnIpKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRvdGFsTGluZUxlbiA9IHRoaXMuX2NhY3VsYXRlQmV6aWVyTGVuZ3RoKHRoaXMuYWxsQmV6aWVyUG9zKTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy50b3RhbExpbmVMZW4gLyB0aGlzLmR1cmF0aW9uO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLmFsbEJlemllclBvc1swXSk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVGFyZ2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWZyZXNoVGFyZ2V0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmluZGV4ID49IHRoaXMuYWxsQmV6aWVyUG9zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy5lbmRDYiAmJiB0aGlzLmVuZENiKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKEdhbWluZ0RhdGEuZmlnaHRTcGVlZE11bCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc1BvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lUG9zID0gdGhpcy5hbGxCZXppZXJQb3NbdGhpcy5pbmRleF07XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdGhpcy5lUG9zLnN1Yih0aGlzLnNQb3MpLm1hZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpcyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlyID0gdGhpcy5lUG9zLnN1Yih0aGlzLnNQb3MpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZUFuZ2xlID0gLVV0aWwudmVjdG9yc1RvRGVncmVzcyhkaXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29zdFRpbWUgPSBkaXMgLyAodGhpcy5zcGVlZCAqIEdhbWluZ0RhdGEuZmlnaHRTcGVlZE11bCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8odGhpcy5jb3N0VGltZSwgeyB4OiB0aGlzLmVQb3MueCwgeTogdGhpcy5lUG9zLnksIGFuZ2xlOiB0aGlzLmVBbmdsZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5lUG9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IHRoaXMuZUFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMSAtIHRoaXMuaW5kZXggLyB0aGlzLmFsbEJlemllclBvcy5sZW5ndGggKiAoMSAtIHRoaXMuZW5kU2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoVGFyZ2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hUYXJnZXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDorqHnrpfmiYDmnInotJ3loZ7lsJTmm7Lnur/nmoTngrlcclxuICAgIHByaXZhdGUgX2NhY3VsYXRlQmV6aWVyUG9pbnQocG9zQXJyOiBjYy5WZWMyW10pIHtcclxuICAgICAgICBsZXQgYWxsQmV6aWVyUG9zID0gW11cclxuICAgICAgICBsZXQgZ2FwID0gMSAvIDMwIC8vIOavj+asoei/reS7o+atpemVvyzov5nkuKrlgLzotorlsI/otornsr7nu4Ys5L2G5piv5pWI546H6LaK5L2OLOi/memHjOi/reS7ozMwMOasoeW3sue7j+Wkn+S6hlxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDE7IGkgKz0gZ2FwKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLl9jYWN1bGF0ZUJlemllclAocG9zQXJyLCBpKVxyXG4gICAgICAgICAgICBhbGxCZXppZXJQb3MucHVzaChwb3MpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYWxsQmV6aWVyUG9zXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6K6h566X6LSd5aGe5bCU5puy57q/55qE6ZW/5bqmXHJcbiAgICBwcml2YXRlIF9jYWN1bGF0ZUJlemllckxlbmd0aChhbGxCZXppZXJQb3M6IGNjLlZlYzJbXSkge1xyXG4gICAgICAgIGxldCB0b3RhbExpbmVMZW4gPSAwXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhbGxCZXppZXJQb3MubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IGRpcyA9IGNjLnYyKGFsbEJlemllclBvc1tpXS54IC0gYWxsQmV6aWVyUG9zW2kgLSAxXS54LCBhbGxCZXppZXJQb3NbaV0ueSAtIGFsbEJlemllclBvc1tpIC0gMV0ueSkubGVuKClcclxuICAgICAgICAgICAgdG90YWxMaW5lTGVuICs9IGRpc1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsTGluZUxlblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6h566X5LiJ6Zi26LSd5aGe5bCU5ZyoIHTml7bliLsg55qE5L2N572uXHJcbiAgICAgKiBAcGFyYW0gcCDkuInpmLbotJ3loZ7lsJTnmoTlm5vkuKrngrks5pWw57uE5a+55bqU5Li6IDDotbfngrksMei1t+eCueaOp+WItueCuSwy57uI54K55o6n5Yi254K5LDPnu4jngrlcclxuICAgICAqIEBwYXJhbSB0IOS8oOWFpTAtMeeahOWAvCzkuIDkuKrml7bpl7TnmoTov63ku6Pov4fnqItcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9jYWN1bGF0ZUJlemllclAocDogY2MuVmVjMltdLCB0OiBudW1iZXIpOiBjYy5WZWMyIHtcclxuICAgICAgICAvLyDkuInpmLbotJ3loZ7lsJTov5DnrpdcclxuICAgICAgICBsZXQgYmV6aWVyUDogY2MuVmVjMiA9IGNjLnYyKClcclxuICAgICAgICBiZXppZXJQLnggPSBNYXRoLmZsb29yKE1hdGgucG93KDEgLSB0LCAzKSAqIHBbMF0ueCArIDMgKiB0ICogTWF0aC5wb3coMSAtIHQsIDIpICogcFsxXS54ICsgMyAqIE1hdGgucG93KHQsIDIpICogKDEgLSB0KSAqIHBbMl0ueCArIE1hdGgucG93KHQsIDMpICogcFszXS54KTtcclxuICAgICAgICBiZXppZXJQLnkgPSBNYXRoLmZsb29yKE1hdGgucG93KDEgLSB0LCAzKSAqIHBbMF0ueSArIDMgKiB0ICogTWF0aC5wb3coMSAtIHQsIDIpICogcFsxXS55ICsgMyAqIE1hdGgucG93KHQsIDIpICogKDEgLSB0KSAqIHBbMl0ueSArIE1hdGgucG93KHQsIDMpICogcFszXS55KTtcclxuICAgICAgICByZXR1cm4gYmV6aWVyUDtcclxuICAgIH1cclxufVxyXG4iXX0=