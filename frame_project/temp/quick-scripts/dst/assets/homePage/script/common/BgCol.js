
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/BgCol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxCZ0NvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFFeEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUE2TUM7UUExTUcsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUd0QixXQUFLLEdBQVcsR0FBRyxDQUFDO1FBS1osY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixpQkFBVyxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3BDLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFDdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUMxQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGFBQU8sR0FBNEIsSUFBSSxDQUFDO1FBQ3hDLFlBQU0sR0FBMkIsSUFBSSxDQUFDO1FBQ3RDLGtCQUFZLEdBQWUsSUFBSSxDQUFDO1FBRS9CLG9CQUFjLEdBQUcsS0FBSyxDQUFDOztJQXFMbkMsQ0FBQztJQXJNRyxzQkFBWSw0QkFBUzthQUFyQjtZQUNJLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFnQlEsc0JBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDekMsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNsRCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbEQsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUM5QzthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDaEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVTLHFCQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFUyx3QkFBUSxHQUFsQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFUyx5QkFBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVB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QUFDLGNBQWM7WUFBRSxPQUFPO1FBQ2pDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQXpNRDtRQURDLFFBQVE7NENBQ2E7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUM7d0NBQ2hCO0lBTkgsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTZNekI7SUFBRCxZQUFDO0NBN01ELEFBNk1DLENBN01rQyxFQUFFLENBQUMsU0FBUyxHQTZNOUM7a0JBN01vQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuL1V0aWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZ0NvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpbml0U2NhbGU6IG51bWJlciA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5pyA5aSn57yp5pS+5YCN546HXCIgfSlcclxuICAgIHNjYWxlOiBudW1iZXIgPSAxLjU7XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgc2NlbmVTaXplKCkge1xyXG4gICAgICAgIHJldHVybiBjYy53aW5TaXplO1xyXG4gICAgfTtcclxuICAgIHByaXZhdGUgbWluU2NhbGU6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIG1heFNjYWxlOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBzdGFydERpczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY3VyU2NhbGU6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIHRvdWNoT2Zmc2V0OiBjYy5WZWMyID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgcHJpdmF0ZSB0b3VjaElkOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VUaW1lczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc3RhcnRQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG4gICAgcHVibGljIGlzUmVnYWxlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIHNjYWxlQ2I6IChzY2FsZTogbnVtYmVyKSA9PiB2b2lkID0gbnVsbDtcclxuICAgIHB1YmxpYyBtb3ZlQ2I6IChwb3M6IGNjLlZlYzIpID0+IHZvaWQgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXJ0Q2xpY2tDYjogKCkgPT4gdm9pZCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBpc0JnQXV0b01vdmluZyA9IGZhbHNlO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKHRoaXMuaW5pdFNjYWxlKTtcclxuICAgICAgICB0aGlzLmN1clNjYWxlID0gdGhpcy5pbml0U2NhbGU7XHJcbiAgICAgICAgbGV0IHdpZ2V0ID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICB3aWdldC51cGRhdGVBbGlnbm1lbnQoKTtcclxuICAgICAgICBsZXQgaW1nU2l6ZSA9IHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpO1xyXG4gICAgICAgIGxldCB3aWR0aFNjYWxlID0gY2Mud2luU2l6ZS53aWR0aCAvIGltZ1NpemUud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodFNjYWxlID0gY2Mud2luU2l6ZS5oZWlnaHQgLyBpbWdTaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLm1pblNjYWxlID0gTWF0aC5tYXgod2lkdGhTY2FsZSwgaGVpZ2h0U2NhbGUpO1xyXG4gICAgICAgIGlmICh0aGlzLmluaXRTY2FsZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF4U2NhbGUgPSB0aGlzLm1pblNjYWxlICogdGhpcy5zY2FsZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5pdFNjYWxlIDwgMSkge1xyXG4gICAgICAgICAgICB0aGlzLm1pblNjYWxlID0gdGhpcy5pbml0U2NhbGUgPiB0aGlzLm1pblNjYWxlID8gdGhpcy5pbml0U2NhbGUgOiB0aGlzLm1pblNjYWxlO1xyXG4gICAgICAgICAgICB0aGlzLm1heFNjYWxlID0gdGhpcy5zY2FsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1JlZ2FsZXIgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJTY2FsZSA9IHRoaXMubWluU2NhbGU7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKHRoaXMuY3VyU2NhbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlVGltZXMgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChwb3M6IGNjLlZlYzIsIHNjYWxlOiBudW1iZXIgPSB0aGlzLm1pblNjYWxlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKHNjYWxlKTtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICB0aGlzLmN1clNjYWxlID0gc2NhbGU7XHJcbiAgICAgICAgdGhpcy5pc1JlZ2FsZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzQmdBdXRvTW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zY2FsZUNiICYmIHRoaXMuc2NhbGVDYih0aGlzLmN1clNjYWxlKTtcclxuICAgICAgICB0aGlzLm1vdmVDYiAmJiB0aGlzLm1vdmVDYihwb3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGVtaXRGdW5jKCkge1xyXG4gICAgICAgIHRoaXMuc2NhbGVDYiAmJiB0aGlzLnNjYWxlQ2IodGhpcy5jdXJTY2FsZSk7XHJcbiAgICAgICAgdGhpcy5tb3ZlQ2IgJiYgdGhpcy5tb3ZlQ2IodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNjYWxlQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VUaW1lcysrO1xyXG4gICAgICAgIGlmICh0aGlzLmNoYW5nZVRpbWVzID4gMikge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRpbWVzID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJTY2FsZSA9IHRoaXMuY2hhbmdlVGltZXMgPT0gMCA/IHRoaXMubWluU2NhbGUgOiB0aGlzLmNoYW5nZVRpbWVzID09IDEgPyAodGhpcy5tYXhTY2FsZSAtIHRoaXMubWluU2NhbGUpIC8gMiArIHRoaXMubWluU2NhbGUgOiB0aGlzLm1heFNjYWxlO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IHRoaXMuY3VyU2NhbGU7XHJcbiAgICAgICAgdGhpcy5zY2FsZUNiICYmIHRoaXMuc2NhbGVDYih0aGlzLmN1clNjYWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSZWdhbGVyKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuaXNCZ0F1dG9Nb3ZpbmcpIHJldHVybjtcclxuICAgICAgICBsZXQgbG9jYWxQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIGxldCB0b3VjaFBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobG9jYWxQb3MpO1xyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKTtcclxuICAgICAgICBsZXQgbm9kZVBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xyXG4gICAgICAgIHRoaXMudG91Y2hPZmZzZXQgPSB0b3VjaFBvcy5zdWIobm9kZVBvcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRvdWNoUG9zLnN1Yih0aGlzLnRvdWNoT2Zmc2V0KSk7XHJcbiAgICAgICAgdGhpcy5zdGFydERpcyA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJTY2FsZSA9IHRoaXMubm9kZS5zY2FsZTtcclxuICAgICAgICB0aGlzLnN0YXJ0UG9zID0gbG9jYWxQb3M7XHJcbiAgICAgICAgdGhpcy50b3VjaElkID0gZXZlbnQuZ2V0SUQoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0Q2xpY2tDYiAmJiB0aGlzLnN0YXJ0Q2xpY2tDYigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvblRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUmVnYWxlcikgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQmdBdXRvTW92aW5nKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHRvdWNocyA9IGV2ZW50LmdldFRvdWNoZXMoKTtcclxuXHJcbiAgICAgICAgLyoq57yp5pS+ICovXHJcbiAgICAgICAgaWYgKHRvdWNocy5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICAvL+e8qeaUvlxyXG4gICAgICAgICAgICBsZXQgdG91Y2hQb2ludDEgPSB0b3VjaHNbMF0uZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgbGV0IHRvdWNoUG9pbnQyID0gdG91Y2hzWzFdLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGxldCBjdXJEaXMgPSB0b3VjaFBvaW50MS5zdWIodG91Y2hQb2ludDIpLm1hZygpO1xyXG4gICAgICAgICAgICBpZiAoY3VyRGlzIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY3VyRGlzID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhcnREaXMgfHwgdGhpcy5zdGFydERpcyA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RGlzID0gY3VyRGlzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJTY2FsZSA9IHRoaXMubm9kZS5zY2FsZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBzY2FsZSA9IGN1ckRpcyAvIHRoaXMuc3RhcnREaXMgKiB0aGlzLmN1clNjYWxlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNjYWxlID49IHRoaXMubWF4U2NhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IHRoaXMubWF4U2NhbGU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjYWxlIDwgdGhpcy5taW5TY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlID0gdGhpcy5taW5TY2FsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IHNjYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGVDYiAmJiB0aGlzLnNjYWxlQ2IodGhpcy5ub2RlLnNjYWxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/np7vliqhcclxuICAgICAgICBsZXQgaWQgPSBldmVudC5nZXRJRCgpO1xyXG4gICAgICAgIGlmIChpZCA9PSB0aGlzLnRvdWNoSWQpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZVBvcyA9IHRoaXMuY2FsY0VuZFBvaW50KGV2ZW50LmdldERlbHRhKCkpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24obm9kZVBvcyk7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUNiICYmIHRoaXMubW92ZUNiKG5vZGVQb3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Ub3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIC8vIGxldCBpZCA9IGV2ZW50LmdldElEKCk7XHJcbiAgICAgICAgLy8gaWYgKGlkID09IHRoaXMudG91Y2hJZCkge1xyXG4gICAgICAgIC8vICAgICBsZXQgcG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAvLyAgICAgbGV0IG1vdmVEaXMgPSB0aGlzLnN0YXJ0UG9zLnN1Yihwb3MpLm1hZygpO1xyXG4gICAgICAgIC8vICAgICBpZiAobW92ZURpcyA8IDEwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIueCueWHu1wiKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwi5ouW5YqoXCIpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY0VuZFBvaW50KG9mZnNldFBvaW50KSB7XHJcbiAgICAgICAgbGV0IG5vZGVXaWR0aCA9IHRoaXMubm9kZS53aWR0aDtcclxuICAgICAgICBsZXQgbm9kZUhlaWdodCA9IHRoaXMubm9kZS5oZWlnaHQ7XHJcbiAgICAgICAgbGV0IG5vZGVTY2FsZSA9IHRoaXMubm9kZS5zY2FsZTtcclxuICAgICAgICBsZXQgY2xhbXBSID0gbm9kZVdpZHRoIC8gMiAqIG5vZGVTY2FsZSAtIHRoaXMuc2NlbmVTaXplLndpZHRoIC8gMjtcclxuICAgICAgICBjbGFtcFIgPSBNYXRoLm1heCgwLCBjbGFtcFIpO1xyXG4gICAgICAgIGxldCBjbGFtcEwgPSAtbm9kZVdpZHRoIC8gMiAqIG5vZGVTY2FsZSArIHRoaXMuc2NlbmVTaXplLndpZHRoIC8gMjtcclxuICAgICAgICBjbGFtcEwgPSBNYXRoLm1pbigwLCBjbGFtcEwpO1xyXG4gICAgICAgIGxldCBjbGFtcFQgPSBub2RlSGVpZ2h0IC8gMiAqIG5vZGVTY2FsZSAtIHRoaXMuc2NlbmVTaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgY2xhbXBUID0gTWF0aC5tYXgoMCwgY2xhbXBUKTtcclxuICAgICAgICBsZXQgY2xhbXBCID0gLW5vZGVIZWlnaHQgLyAyICogbm9kZVNjYWxlICsgdGhpcy5zY2VuZVNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICBjbGFtcEIgPSBNYXRoLm1pbigwLCBjbGFtcEIpO1xyXG5cclxuICAgICAgICBsZXQgbm9kZVBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIG5vZGVQb3MgPSBub2RlUG9zLmFkZChvZmZzZXRQb2ludCk7XHJcbiAgICAgICAgbm9kZVBvcy54ID0gVXRpbC5jbGFtcFZhbHVlKG5vZGVQb3MueCwgY2xhbXBMLCBjbGFtcFIpO1xyXG4gICAgICAgIG5vZGVQb3MueSA9IFV0aWwuY2xhbXBWYWx1ZShub2RlUG9zLnksIGNsYW1wQiwgY2xhbXBUKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5vZGVQb3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoh6rliqjnp7vliqjog4zmma9cclxuICAgICAqIEBwYXJhbSBwb2ludCDnu4jngrnvvIzkuJbnlYzlnZDmoIdcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBhdXRvTW92ZShwb2ludDogY2MuVmVjMikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pc0JnQXV0b01vdmluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB3aW5DZW50ZXIgPSBjYy52MihjYy53aW5TaXplLndpZHRoIC8gMiwgY2Mud2luU2l6ZS5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0UG9pbnQgPSB3aW5DZW50ZXIuc3ViKHBvaW50KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGVQb3MgPSB0aGlzLmNhbGNFbmRQb2ludChvZmZzZXRQb2ludCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBub2RlUG9zLnN1Yih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSkubGVuKCkgLyAxMDAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAgICAgLnRvKHRpbWUsIHsgeDogbm9kZVBvcy54LCB5OiBub2RlUG9zLnkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQmdBdXRvTW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0JnQXV0b01vdmluZykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMubW92ZUNiICYmIHRoaXMubW92ZUNiKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgIH1cclxufVxyXG4iXX0=