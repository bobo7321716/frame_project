"use strict";
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