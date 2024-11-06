"use strict";
cc._RF.push(module, 'c6305rG4BZOIqI/6191S0e1', 'BgCol');
// homePage/script/common/BgCol.ts

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
var Util_1 = require("./Util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BgCol = /** @class */ (function (_super) {
    __extends(BgCol, _super);
    function BgCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initScale = 1;
        _this.scale = 1.5;
        _this.minScale = 1;
        _this.maxScale = 1;
        _this.startDis = 0;
        _this.curScale = 1;
        _this.touchOffset = cc.Vec2.ZERO;
        _this.touchId = null;
        _this.changeTimes = 0;
        _this.startPos = null;
        _this.isRegaler = false;
        _this.scaleCb = null;
        _this.moveCb = null;
        _this.startClickCb = null;
        _this.isBgAutoMoving = false;
        return _this;
    }
    Object.defineProperty(BgCol.prototype, "sceneSize", {
        get: function () {
            return cc.winSize;
        },
        enumerable: false,
        configurable: true
    });
    ;
    BgCol.prototype.onLoad = function () {
        this.node.setScale(this.initScale);
        this.curScale = this.initScale;
        var wiget = this.node.parent.getComponent(cc.Widget);
        wiget.updateAlignment();
        var imgSize = this.node.getContentSize();
        var widthScale = cc.winSize.width / imgSize.width;
        var heightScale = cc.winSize.height / imgSize.height;
        this.minScale = Math.max(widthScale, heightScale);
        if (this.initScale == 1) {
            this.maxScale = this.minScale * this.scale;
        }
        else if (this.initScale < 1) {
            this.minScale = this.initScale > this.minScale ? this.initScale : this.minScale;
            this.maxScale = this.scale;
        }
        this.isRegaler = false;
    };
    BgCol.prototype.start = function () {
        this.curScale = this.minScale;
        this.node.setScale(this.curScale);
    };
    BgCol.prototype.onEnable = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.changeTimes = 0;
    };
    BgCol.prototype.onDisable = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    };
    BgCol.prototype.init = function (pos, scale) {
        if (scale === void 0) { scale = this.minScale; }
        this.node.setScale(scale);
        this.node.setPosition(pos);
        this.curScale = scale;
        this.isRegaler = false;
        this.isBgAutoMoving = false;
        this.scaleCb && this.scaleCb(this.curScale);
        this.moveCb && this.moveCb(pos);
    };
    BgCol.prototype.emitFunc = function () {
        this.scaleCb && this.scaleCb(this.curScale);
        this.moveCb && this.moveCb(this.node.getPosition());
    };
    BgCol.prototype.changeScaleClick = function () {
        this.changeTimes++;
        if (this.changeTimes > 2) {
            this.changeTimes = 0;
        }
        this.curScale = this.changeTimes == 0 ? this.minScale : this.changeTimes == 1 ? (this.maxScale - this.minScale) / 2 + this.minScale : this.maxScale;
        this.node.scale = this.curScale;
        this.scaleCb && this.scaleCb(this.curScale);
    };
    BgCol.prototype.onTouchStart = function (event) {
        if (this.isRegaler)
            return;
        if (this.isBgAutoMoving)
            return;
        var localPos = event.getLocation();
        var touchPos = this.node.parent.convertToNodeSpaceAR(localPos);
        var worldPos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var nodePos = this.node.parent.convertToNodeSpaceAR(worldPos);
        this.touchOffset = touchPos.sub(nodePos);
        this.node.setPosition(touchPos.sub(this.touchOffset));
        this.startDis = 0;
        this.curScale = this.node.scale;
        this.startPos = localPos;
        this.touchId = event.getID();
        this.startClickCb && this.startClickCb();
    };
    BgCol.prototype.onTouchMove = function (event) {
        if (this.isRegaler)
            return;
        if (this.isBgAutoMoving)
            return;
        var touchs = event.getTouches();
        /**缩放 */
        if (touchs.length == 2) {
            //缩放
            var touchPoint1 = touchs[0].getLocation();
            var touchPoint2 = touchs[1].getLocation();
            var curDis = touchPoint1.sub(touchPoint2).mag();
            if (curDis < 0) {
                curDis = 0;
            }
            if (!this.startDis || this.startDis <= 0) {
                this.startDis = curDis;
                this.curScale = this.node.scale;
            }
            else {
                var scale = curDis / this.startDis * this.curScale;
                if (scale >= this.maxScale) {
                    scale = this.maxScale;
                }
                else if (scale < this.minScale) {
                    scale = this.minScale;
                }
                this.node.scale = scale;
            }
            this.scaleCb && this.scaleCb(this.node.scale);
        }
        //移动
        var id = event.getID();
        if (id == this.touchId) {
            var nodePos = this.calcEndPoint(event.getDelta());
            this.node.setPosition(nodePos);
            this.moveCb && this.moveCb(nodePos);
        }
    };
    BgCol.prototype.onTouchEnd = function (event) {
        // let id = event.getID();
        // if (id == this.touchId) {
        //     let pos = event.getLocation();
        //     let moveDis = this.startPos.sub(pos).mag();
        //     if (moveDis < 10) {
        //         console.log("点击");
        //     } else {
        //         console.log("拖动")
        //     }
        // }
    };
    BgCol.prototype.calcEndPoint = function (offsetPoint) {
        var nodeWidth = this.node.width;
        var nodeHeight = this.node.height;
        var nodeScale = this.node.scale;
        var clampR = nodeWidth / 2 * nodeScale - this.sceneSize.width / 2;
        clampR = Math.max(0, clampR);
        var clampL = -nodeWidth / 2 * nodeScale + this.sceneSize.width / 2;
        clampL = Math.min(0, clampL);
        var clampT = nodeHeight / 2 * nodeScale - this.sceneSize.height / 2;
        clampT = Math.max(0, clampT);
        var clampB = -nodeHeight / 2 * nodeScale + this.sceneSize.height / 2;
        clampB = Math.min(0, clampB);
        var nodePos = this.node.getPosition();
        nodePos = nodePos.add(offsetPoint);
        nodePos.x = Util_1.Util.clampValue(nodePos.x, clampL, clampR);
        nodePos.y = Util_1.Util.clampValue(nodePos.y, clampB, clampT);
        return nodePos;
    };
    /**
     * 自动移动背景
     * @param point 终点，世界坐标
     * @returns
     */
    BgCol.prototype.autoMove = function (point) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.isBgAutoMoving = true;
            var winCenter = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2);
            var offsetPoint = winCenter.sub(point);
            var nodePos = _this.calcEndPoint(offsetPoint);
            var time = nodePos.sub(_this.node.getPosition()).len() / 1000;
            _this.node.stopAllActions();
            cc.tween(_this.node)
                .to(time, { x: nodePos.x, y: nodePos.y })
                .call(function () {
                _this.isBgAutoMoving = false;
                resolve(null);
            })
                .start();
        });
    };
    BgCol.prototype.update = function (dt) {
        if (!this.isBgAutoMoving)
            return;
        this.moveCb && this.moveCb(this.node.getPosition());
    };
    __decorate([
        property
    ], BgCol.prototype, "initScale", void 0);
    __decorate([
        property({ displayName: "最大缩放倍率" })
    ], BgCol.prototype, "scale", void 0);
    BgCol = __decorate([
        ccclass
    ], BgCol);
    return BgCol;
}(cc.Component));
exports.default = BgCol;

cc._RF.pop();