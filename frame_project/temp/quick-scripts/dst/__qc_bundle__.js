
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/homePage/script/common/AbRef');
require('./assets/homePage/script/common/AnimCol');
require('./assets/homePage/script/common/AnimationCol');
require('./assets/homePage/script/common/BgCol');
require('./assets/homePage/script/common/BoundingBox');
require('./assets/homePage/script/common/BtnClickAudio');
require('./assets/homePage/script/common/BtnCol');
require('./assets/homePage/script/common/BundleData');
require('./assets/homePage/script/common/BundleName');
require('./assets/homePage/script/common/CommonTip');
require('./assets/homePage/script/common/GamingData');
require('./assets/homePage/script/common/Global');
require('./assets/homePage/script/common/HttpManager');
require('./assets/homePage/script/common/LoadingProgressCol');
require('./assets/homePage/script/common/MyPool');
require('./assets/homePage/script/common/MyToggle');
require('./assets/homePage/script/common/MyToggleBtn');
require('./assets/homePage/script/common/MyToggleItem');
require('./assets/homePage/script/common/ParticleSystem');
require('./assets/homePage/script/common/PlayerData');
require('./assets/homePage/script/common/PoolObjBase');
require('./assets/homePage/script/common/ProgressAnimCol');
require('./assets/homePage/script/common/ProgressCol');
require('./assets/homePage/script/common/PromptView');
require('./assets/homePage/script/common/RedPointTag');
require('./assets/homePage/script/common/ScreenShot');
require('./assets/homePage/script/common/SeqFrameCol');
require('./assets/homePage/script/common/SoundPath');
require('./assets/homePage/script/common/UiBase');
require('./assets/homePage/script/common/UiPath');
require('./assets/homePage/script/common/Util');
require('./assets/homePage/script/config/Config');
require('./assets/homePage/script/config/LevelConfig');
require('./assets/homePage/script/manager/AbManager');
require('./assets/homePage/script/manager/AppContext');
require('./assets/homePage/script/manager/AudioManager');
require('./assets/homePage/script/manager/BaseData');
require('./assets/homePage/script/manager/DataManager');
require('./assets/homePage/script/manager/EventManager');
require('./assets/homePage/script/manager/RedPointManager');
require('./assets/homePage/script/manager/SceneEventManager');
require('./assets/homePage/script/manager/StoryManager');
require('./assets/homePage/script/manager/TaskManager');
require('./assets/homePage/script/manager/TimeManager');
require('./assets/homePage/script/manager/TipManager');
require('./assets/homePage/script/manager/UIManager');
require('./assets/homePage/script/scrollview/RecycleScrollH');
require('./assets/homePage/script/scrollview/RecycleScrollV');
require('./assets/homePage/script/tool/AwayAnim');
require('./assets/homePage/script/tool/Bezier');
require('./assets/homePage/script/tool/CheckTouchMoveDir');
require('./assets/homePage/script/tool/FloatAnim');
require('./assets/homePage/script/tool/OpacityAnim');
require('./assets/homePage/script/tool/ScaleAnim');
require('./assets/loading/Loading');
require('./assets/start/script/StartView');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/start/script/StartView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '673820vukZMGo5QYDrtNVvM', 'StartView');
// start/script/StartView.ts

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
var UiBase_1 = require("../../homePage/script/common/UiBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StartView = /** @class */ (function (_super) {
    __extends(StartView, _super);
    function StartView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StartView.prototype.init = function () {
        return Promise.resolve();
    };
    StartView = __decorate([
        ccclass
    ], StartView);
    return StartView;
}(UiBase_1.UiBase));
exports.default = StartView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3RhcnRcXHNjcmlwdFxcU3RhcnRWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUE2RDtBQUV2RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBTTtJQUE3Qzs7SUFLQSxDQUFDO0lBSEcsd0JBQUksR0FBSjtRQUNJLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFKZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQUs3QjtJQUFELGdCQUFDO0NBTEQsQUFLQyxDQUxzQyxlQUFNLEdBSzVDO2tCQUxvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVWlCYXNlIH0gZnJvbSBcIi4uLy4uL2hvbWVQYWdlL3NjcmlwdC9jb21tb24vVWlCYXNlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydFZpZXcgZXh0ZW5kcyBVaUJhc2Uge1xuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/loading/Loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41ca9VzFRxCva6tq45j6jiD', 'Loading');
// loading/Loading.ts

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
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loading.prototype.start = function () {
        cc.director.loadScene("HomePage");
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.triggerGC();
        }
    };
    Loading = __decorate([
        ccclass
    ], Loading);
    return Loading;
}(cc.Component));
exports.default = Loading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbG9hZGluZ1xcTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDs7SUFRQSxDQUFDO0lBTmEsdUJBQUssR0FBZjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7WUFDdkMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO0lBQ0wsQ0FBQztJQVBnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBUTNCO0lBQUQsY0FBQztDQVJELEFBUUMsQ0FSb0MsRUFBRSxDQUFDLFNBQVMsR0FRaEQ7a0JBUm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJIb21lUGFnZVwiKTtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB3eC50cmlnZ2VyR0MoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/config/LevelConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96dc97PUK9CdIgARcV+U07y', 'LevelConfig');
// homePage/script/config/LevelConfig.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelConfigMgr = void 0;
var BaseData_1 = require("../manager/BaseData");
var LevelConfig = /** @class */ (function () {
    function LevelConfig() {
    }
    return LevelConfig;
}());
exports.default = LevelConfig;
var LevelConfigMgr = /** @class */ (function (_super) {
    __extends(LevelConfigMgr, _super);
    function LevelConfigMgr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelConfigMgr.prototype.getMaxLvConfig = function () {
        return this._datas[this._datas.length - 1];
    };
    return LevelConfigMgr;
}(BaseData_1.default));
exports.LevelConfigMgr = LevelConfigMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29uZmlnXFxMZXZlbENvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0RBQWdFO0FBR2hFO0lBQUE7SUFXQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTs7QUFFRDtJQUFvQyxrQ0FBNEI7SUFBaEU7O0lBS0EsQ0FBQztJQUhHLHVDQUFjLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FMQSxBQUtDLENBTG1DLGtCQUFlLEdBS2xEO0FBTFksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEJhc2VEYXRhTWFuYWdlciwgeyBCYXNlRGF0YSB9IGZyb20gXCIuLi9tYW5hZ2VyL0Jhc2VEYXRhXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxDb25maWcgaW1wbGVtZW50cyBCYXNlRGF0YSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGljb246IHN0cmluZztcclxuICAgIHRlcnJvcl9sdjogbnVtYmVyO1xyXG4gICAgZGlmZl9sdjogbnVtYmVyO1xyXG4gICAgZGVzYzogc3RyaW5nO1xyXG4gICAgdGlwczogc3RyaW5nW107XHJcbiAgICBmYWlsU3RyOiBzdHJpbmdbXTtcclxuICAgIHN1Y1N0cjogc3RyaW5nW107XHJcbiAgICBwcm9wOiBudW1iZXJbXVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGV2ZWxDb25maWdNZ3IgZXh0ZW5kcyBCYXNlRGF0YU1hbmFnZXI8TGV2ZWxDb25maWc+IHtcclxuXHJcbiAgICBnZXRNYXhMdkNvbmZpZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YXNbdGhpcy5fZGF0YXMubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/AppContext.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '65d0bq7tndJ6YNVKBJaUv6D', 'AppContext');
// homePage/script/manager/AppContext.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var BundleName_1 = require("../common/BundleName");
var LoadingProgressCol_1 = require("../common/LoadingProgressCol");
var PlayerData_1 = require("../common/PlayerData");
var UiPath_1 = require("../common/UiPath");
var AbManager_1 = require("./AbManager");
var AudioManager_1 = require("./AudioManager");
var DataManager_1 = require("./DataManager");
var UIManager_1 = require("./UIManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AppContext = /** @class */ (function (_super) {
    __extends(AppContext, _super);
    function AppContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.version = "0.0.1";
        _this.loadingCol = null;
        _this.flyCameraNode = null;
        _this.loadList1 = [BundleName_1.BundleName.Font, BundleName_1.BundleName.Config, BundleName_1.BundleName.Assets, BundleName_1.BundleName.Start, BundleName_1.BundleName.Common];
        _this.preloadlist1 = [];
        _this.loadTimer = 0;
        _this.lastObj = {};
        return _this;
    }
    AppContext.prototype.onLoad = function () {
        window.appContext = this;
        cc.game.addPersistRootNode(this.node);
        // var manager = cc.director.getCollisionManager();
        // manager.enabled = true;
        // manager.enabledDebugDraw = true;
        this.initShiftEvent();
        console.log("操作系统:", cc.sys.os);
        console.log("DEBUG:", CC_DEBUG);
        if (!CC_DEBUG) { //不是Debug包不用输出log
            // console.log = () => { };
        }
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.onMemoryWarning(function () {
                // console.error('内存告警! onMemoryWarningReceive');
                wx.triggerGC();
            });
        }
        this.gameInit();
        this.loadingCol.node.active = true;
    };
    AppContext.prototype.triggerGc = function () {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.triggerGC();
        }
    };
    AppContext.prototype.gameInit = function () {
        var _this = this;
        setInterval(function () {
            _this.triggerGc();
            PlayerData_1.PlayerData.ins.saveData();
        }, 60000);
        this.loadingCol.startProgressAnim();
        this.flyCameraNode.active = false;
        this.onLoadRes();
    };
    AppContext.prototype.initShiftEvent = function () {
        var _this = this;
        if (cc.sys.isBrowser) {
            cc.game.off(cc.game.EVENT_SHOW);
            cc.game.on(cc.game.EVENT_SHOW, function () {
                cc.game.canvas.focus();
                _this.gameShowEvent();
            });
            cc.game.off(cc.game.EVENT_HIDE);
            cc.game.on(cc.game.EVENT_HIDE, this.gameHideEvent.bind(this));
        }
        else if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.offShow(this.gameShowEvent.bind(this));
            wx.offHide(this.gameHideEvent.bind(this));
            wx.onShow(this.gameShowEvent.bind(this));
            wx.onHide(this.gameHideEvent.bind(this));
        }
    };
    AppContext.prototype.gameHideEvent = function () {
        console.log('cc.game.EVENT_HIDE');
        AudioManager_1.AudioManager.ins.pauseAllSound();
    };
    AppContext.prototype.gameShowEvent = function () {
        console.log('cc.game.EVENT_SHOW');
        AudioManager_1.AudioManager.ins.resumeAllSound();
    };
    /**
     * 加载资源
     */
    AppContext.prototype.onLoadRes = function () {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadTimer = Date.now();
                        return [4 /*yield*/, AbManager_1.AbManager.loadSubPackage(this.loadList1)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, DataManager_1.default.ins.init()];
                    case 2:
                        _a.sent();
                        PlayerData_1.PlayerData.ins.initData();
                        // await AbManager.preloadAssets(this.preloadlist1, cc.Prefab);
                        console.log("第一步耗时 ： ", Date.now() - this.loadTimer);
                        this.loadTimer = Date.now();
                        UIManager_1.UIManager.ins.openView(UiPath_1.UiPath.StartView).then(function (main) {
                            main.init().then(function () {
                                _this.toStartBoard();
                            });
                            AbManager_1.AbManager.preloadAssets(_this.preloadlist1, cc.Prefab);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AppContext.prototype.toStartBoard = function () {
        var _this = this;
        this.loadingCol.finishProgress().then(function () {
            _this.loadingCol.node.active = false;
        });
    };
    AppContext.prototype.preloadAssets = function () {
        AbManager_1.AbManager.preloadBundleDir(BundleName_1.BundleName.Assets, "audios");
    };
    /**
     * 退出游戏
     */
    AppContext.prototype.exitGame = function () {
        PlayerData_1.PlayerData.ins.saveData();
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.exitMiniProgram({});
        }
        else {
            cc.game.end();
        }
    };
    AppContext.prototype.clearDataClick = function () {
        cc.sys.localStorage.clear();
    };
    AppContext.prototype.contrastAssetsMap = function () {
        console.warn("cc.assetManager.assets = ", cc.assetManager.assets);
        if (Object.keys(this.lastObj).length <= 0) {
            var obj = cc.assetManager.assets._map;
            for (var key in obj) {
                this.lastObj[key] = obj[key];
            }
            console.warn("this.lastObj = ", this.lastObj);
        }
        else {
            var arr = [];
            var newObj = cc.assetManager.assets._map;
            for (var key in newObj) {
                var has = key in this.lastObj;
                if (!has) {
                    // console.log(newObj[key]);
                    arr.push(newObj[key]);
                }
            }
            this.lastObj = {};
            console.warn("newObj[key] = ", arr);
        }
    };
    __decorate([
        property({ displayName: "版本号" })
    ], AppContext.prototype, "version", void 0);
    __decorate([
        property(LoadingProgressCol_1.default)
    ], AppContext.prototype, "loadingCol", void 0);
    __decorate([
        property(cc.Node)
    ], AppContext.prototype, "flyCameraNode", void 0);
    AppContext = __decorate([
        ccclass
    ], AppContext);
    return AppContext;
}(cc.Component));
exports.default = AppContext;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcQXBwQ29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxtREFBa0Q7QUFDbEQsbUVBQThEO0FBQzlELG1EQUFrRDtBQUNsRCwyQ0FBMEM7QUFDMUMseUNBQXdDO0FBQ3hDLCtDQUE4QztBQUM5Qyw2Q0FBd0M7QUFFeEMseUNBQXdDO0FBR2xDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBVTVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBMEpDO1FBdkpHLGFBQU8sR0FBVyxPQUFPLENBQUM7UUFHMUIsZ0JBQVUsR0FBdUIsSUFBSSxDQUFDO1FBR3RDLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRXRCLGVBQVMsR0FBYSxDQUFDLHVCQUFVLENBQUMsSUFBSSxFQUFFLHVCQUFVLENBQUMsTUFBTSxFQUFFLHVCQUFVLENBQUMsTUFBTSxFQUFFLHVCQUFVLENBQUMsS0FBSyxFQUFFLHVCQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkgsa0JBQVksR0FBaUIsRUFBRSxDQUFDO1FBRWhDLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFvSHRCLGFBQU8sR0FBRyxFQUFFLENBQUM7O0lBdUJ6QixDQUFDO0lBeklhLDJCQUFNLEdBQWhCO1FBQ0ksTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEMsbURBQW1EO1FBQ25ELDBCQUEwQjtRQUMxQixtQ0FBbUM7UUFFbkMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FB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QixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUNoRDthQUFNO1lBQ0gsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2IsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3pDLEtBQUssSUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO2dCQUN0QixJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDOUIsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDTiw0QkFBNEI7b0JBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7aUJBQ3hCO2FBQ0o7WUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBQ3RDO0lBQ0wsQ0FBQztJQXRKRDtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQzsrQ0FDUDtJQUcxQjtRQURDLFFBQVEsQ0FBQyw0QkFBa0IsQ0FBQztrREFDUztJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNZO0lBVGIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQTBKOUI7SUFBRCxpQkFBQztDQTFKRCxBQTBKQyxDQTFKdUMsRUFBRSxDQUFDLFNBQVMsR0EwSm5EO2tCQTFKb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGFydFZpZXcgZnJvbSBcIi4uLy4uLy4uL3N0YXJ0L3NjcmlwdC9TdGFydFZpZXdcIjtcclxuaW1wb3J0IHsgQnVuZGxlRGF0YSB9IGZyb20gXCIuLi9jb21tb24vQnVuZGxlRGF0YVwiO1xyXG5pbXBvcnQgeyBCdW5kbGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9CdW5kbGVOYW1lXCI7XHJcbmltcG9ydCBMb2FkaW5nUHJvZ3Jlc3NDb2wgZnJvbSBcIi4uL2NvbW1vbi9Mb2FkaW5nUHJvZ3Jlc3NDb2xcIjtcclxuaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gXCIuLi9jb21tb24vUGxheWVyRGF0YVwiO1xyXG5pbXBvcnQgeyBVaVBhdGggfSBmcm9tIFwiLi4vY29tbW9uL1VpUGF0aFwiO1xyXG5pbXBvcnQgeyBBYk1hbmFnZXIgfSBmcm9tIFwiLi9BYk1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgU3RvcnlNYW5hZ2VyIGZyb20gXCIuL1N0b3J5TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tIFwiLi9VSU1hbmFnZXJcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICAgICAgYXBwQ29udGV4dDogQXBwQ29udGV4dDtcclxuICAgIH1cclxuICAgIGV4cG9ydCBsZXQgYXBwQ29udGV4dDogQXBwQ29udGV4dDtcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQ29udGV4dCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi54mI5pys5Y+3XCIgfSlcclxuICAgIHZlcnNpb246IHN0cmluZyA9IFwiMC4wLjFcIjtcclxuXHJcbiAgICBAcHJvcGVydHkoTG9hZGluZ1Byb2dyZXNzQ29sKVxyXG4gICAgbG9hZGluZ0NvbDogTG9hZGluZ1Byb2dyZXNzQ29sID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZseUNhbWVyYU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbG9hZExpc3QxOiBzdHJpbmdbXSA9IFtCdW5kbGVOYW1lLkZvbnQsIEJ1bmRsZU5hbWUuQ29uZmlnLCBCdW5kbGVOYW1lLkFzc2V0cywgQnVuZGxlTmFtZS5TdGFydCwgQnVuZGxlTmFtZS5Db21tb25dO1xyXG5cclxuICAgIHByaXZhdGUgcHJlbG9hZGxpc3QxOiBCdW5kbGVEYXRhW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGxvYWRUaW1lcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5hcHBDb250ZXh0ID0gdGhpcztcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICAvLyB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICAvLyBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIG1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdFNoaWZ0RXZlbnQoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmk43kvZzns7vnu586XCIsIGNjLnN5cy5vcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJERUJVRzpcIiwgQ0NfREVCVUcpO1xyXG4gICAgICAgIGlmICghQ0NfREVCVUcpIHsvL+S4jeaYr0RlYnVn5YyF5LiN55So6L6T5Ye6bG9nXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nID0gKCkgPT4geyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd3gub25NZW1vcnlXYXJuaW5nKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ+WGheWtmOWRiuitpiEgb25NZW1vcnlXYXJuaW5nUmVjZWl2ZScpO1xyXG4gICAgICAgICAgICAgICAgd3gudHJpZ2dlckdDKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZUluaXQoKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdDb2wubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRyaWdnZXJHYygpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB3eC50cmlnZ2VyR0MoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdhbWVJbml0KCkge1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyR2MoKTtcclxuICAgICAgICAgICAgUGxheWVyRGF0YS5pbnMuc2F2ZURhdGEoKTtcclxuICAgICAgICB9LCA2MDAwMClcclxuICAgICAgICB0aGlzLmxvYWRpbmdDb2wuc3RhcnRQcm9ncmVzc0FuaW0oKTtcclxuICAgICAgICB0aGlzLmZseUNhbWVyYU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkxvYWRSZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0U2hpZnRFdmVudCgpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzQnJvd3Nlcikge1xyXG4gICAgICAgICAgICBjYy5nYW1lLm9mZihjYy5nYW1lLkVWRU5UX1NIT1cpO1xyXG4gICAgICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfU0hPVywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5jYW52YXMuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVNob3dFdmVudCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2MuZ2FtZS5vZmYoY2MuZ2FtZS5FVkVOVF9ISURFKTtcclxuICAgICAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX0hJREUsIHRoaXMuZ2FtZUhpZGVFdmVudC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd3gub2ZmU2hvdyh0aGlzLmdhbWVTaG93RXZlbnQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHd4Lm9mZkhpZGUodGhpcy5nYW1lSGlkZUV2ZW50LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB3eC5vblNob3codGhpcy5nYW1lU2hvd0V2ZW50LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB3eC5vbkhpZGUodGhpcy5nYW1lSGlkZUV2ZW50LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdhbWVIaWRlRXZlbnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NjLmdhbWUuRVZFTlRfSElERScpO1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnMucGF1c2VBbGxTb3VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2FtZVNob3dFdmVudCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2MuZ2FtZS5FVkVOVF9TSE9XJylcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zLnJlc3VtZUFsbFNvdW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3otYTmupBcclxuICAgICAqL1xyXG4gICAgYXN5bmMgb25Mb2FkUmVzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkVGltZXIgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGF3YWl0IEFiTWFuYWdlci5sb2FkU3ViUGFja2FnZSh0aGlzLmxvYWRMaXN0MSk7XHJcbiAgICAgICAgYXdhaXQgRGF0YU1hbmFnZXIuaW5zLmluaXQoKTtcclxuICAgICAgICBQbGF5ZXJEYXRhLmlucy5pbml0RGF0YSgpO1xyXG4gICAgICAgIC8vIGF3YWl0IEFiTWFuYWdlci5wcmVsb2FkQXNzZXRzKHRoaXMucHJlbG9hZGxpc3QxLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi56ys5LiA5q2l6ICX5pe2IO+8miBcIiwgRGF0ZS5ub3coKSAtIHRoaXMubG9hZFRpbWVyKTtcclxuICAgICAgICB0aGlzLmxvYWRUaW1lciA9IERhdGUubm93KCk7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmlucy5vcGVuVmlldyhVaVBhdGguU3RhcnRWaWV3KS50aGVuKChtYWluOiBTdGFydFZpZXcpID0+IHtcclxuICAgICAgICAgICAgbWFpbi5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvU3RhcnRCb2FyZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgQWJNYW5hZ2VyLnByZWxvYWRBc3NldHModGhpcy5wcmVsb2FkbGlzdDEsIGNjLlByZWZhYik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0b1N0YXJ0Qm9hcmQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nQ29sLmZpbmlzaFByb2dyZXNzKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ0NvbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJlbG9hZEFzc2V0cygpIHtcclxuICAgICAgICBBYk1hbmFnZXIucHJlbG9hZEJ1bmRsZURpcihCdW5kbGVOYW1lLkFzc2V0cywgXCJhdWRpb3NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgIDlh7rmuLjmiI9cclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4aXRHYW1lKCkge1xyXG4gICAgICAgIFBsYXllckRhdGEuaW5zLnNhdmVEYXRhKCk7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd3guZXhpdE1pbmlQcm9ncmFtKHt9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5nYW1lLmVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhckRhdGFDbGljaygpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsYXN0T2JqID0ge307XHJcbiAgICBjb250cmFzdEFzc2V0c01hcCgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJjYy5hc3NldE1hbmFnZXIuYXNzZXRzID0gXCIsIGNjLmFzc2V0TWFuYWdlci5hc3NldHMpXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMubGFzdE9iaikubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgbGV0IG9iaiA9IGNjLmFzc2V0TWFuYWdlci5hc3NldHMuX21hcDtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RPYmpba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcInRoaXMubGFzdE9iaiA9IFwiLCB0aGlzLmxhc3RPYmopXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgbmV3T2JqID0gY2MuYXNzZXRNYW5hZ2VyLmFzc2V0cy5fbWFwO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXdPYmopIHtcclxuICAgICAgICAgICAgICAgIGxldCBoYXMgPSBrZXkgaW4gdGhpcy5sYXN0T2JqO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoYXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdPYmpba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gobmV3T2JqW2tleV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXN0T2JqID0ge307XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIm5ld09ialtrZXldID0gXCIsIGFycilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/scrollview/RecycleScrollH.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07304yob8xPpo8GL+oHU40Y', 'RecycleScrollH');
// homePage/script/scrollview/RecycleScrollH.ts

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
/**
 * 循环+分帧 滑动面板 横向
 */
var RecycleScrollH = /** @class */ (function (_super) {
    __extends(RecycleScrollH, _super);
    function RecycleScrollH() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** item预制 */
        _this.itemPrefab = null;
        /** item间隔 */
        _this.spacing = null;
        /** item数量 */
        _this._numItems = 0;
        // public get numItems() {
        //     return this._numItems;
        // }
        // public set numItems(value: number) {
        //     this._numItems = value;
        //     this._hideAllItems();
        //     this.updateAllItems();
        //     this.scheduleOnce(() => {
        //         this._initialize();
        //         this._updateContentHeight();
        //     });
        // }
        /** 视图内显示列数 */
        _this._viewCol = 0;
        /** 视图内显示行数 */
        _this._viewRow = 0;
        /** 视图窗宽 */
        _this._viewW = 0;
        /** 视图窗高 */
        _this._viewH = 0;
        /** item格子宽 */
        _this._itemW = 0;
        /** item格子高 */
        _this._itemH = 0;
        /** content上一次x坐标 */
        _this._lastPosX = 0;
        /** 是否已初始化 */
        _this._isInit = false;
        /** item的index */
        _this._itemsUUIDToIndex = {};
        /** item列表 */
        _this.itemList = [];
        /** item父节点 */
        _this.content = null;
        return _this;
    }
    /** item刷新回调 */
    RecycleScrollH.prototype.onItemRender = function (index, node) { };
    /** item点击回调 */
    RecycleScrollH.prototype.onItemClicked = function (index, node) { };
    /**
     * 初始化滚动列表
     * @param dataLength 全部数据长度
     * @param finishCb 初始化完成回调
     * @param onItemRender item刷新回调
     * @param onItemClicked item点击回调
     */
    RecycleScrollH.prototype.init = function (dataLength, finishCb, onItemRender, onItemClicked) {
        this.onItemRender = onItemRender;
        this.onItemClicked = onItemClicked;
        this.refresh(dataLength, finishCb);
    };
    RecycleScrollH.prototype.refresh = function (dataLength, cb) {
        var _this = this;
        if (cb === void 0) { cb = null; }
        this._numItems = dataLength;
        this._hideAllItems();
        this.updateAllItems();
        this._initialize(function () {
            _this._updateContentHeight();
            cb && cb();
        });
    };
    /**将指定下标的item滚动到屏幕中间 */
    RecycleScrollH.prototype.rollItemByIndex = function (index, time, xOffset) {
        var _this = this;
        if (time === void 0) { time = 0.1; }
        if (xOffset === void 0) { xOffset = 0; }
        if (!this._isInit) {
            this.scheduleOnce(function () {
                _this.rollItemByIndex(index, time, xOffset);
            }, 0);
            return;
        }
        var targetX = Math.abs(index * this._itemW + this._itemW / 2) - this._itemW / 2 - (this._itemW - this._itemW) / 2 + xOffset;
        var scroll = this.node.getComponent(cc.ScrollView);
        scroll.scrollToOffset(cc.v2(0, targetX), time);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(null);
            }, time * 1000);
        });
    };
    /** 刷新所有item */
    RecycleScrollH.prototype.updateAllItems = function () {
        var _this = this;
        this.itemList.forEach(function (item, index) {
            _this._updateItem(_this._itemsUUIDToIndex[item.uuid], item);
        });
    };
    RecycleScrollH.prototype._hideAllItems = function () {
        this.itemList.forEach(function (item, index) {
            item.active = false;
        });
    };
    /** 获取content */
    RecycleScrollH.prototype._getContent = function () {
        return this.node.getComponent(cc.ScrollView).content;
    };
    /** 初始化 */
    RecycleScrollH.prototype._initialize = function (initCb) {
        var _this = this;
        if (this._isInit)
            return;
        var scroll = this.node.getComponent(cc.ScrollView);
        scroll.enabled = false;
        this._isInit = true;
        var content = this._getContent();
        this.content = content;
        this._viewW = content.parent.width;
        this._viewH = content.parent.height;
        var itemData = this.itemPrefab.data;
        this._itemW = itemData.width + this.spacing.x;
        this._itemH = itemData.height + this.spacing.y;
        this._lastPosX = content.y;
        this._viewRow = Math.floor(this._viewH / this._itemH);
        this._viewCol = Math.ceil(this._viewW / this._itemW) + 1;
        var surplusH = this._viewH - (this._viewRow * this._itemH);
        var startPos = cc.v2(this._itemW >> 1, (this._viewH >> 1) - (this._itemH >> 1) - (surplusH >> 1));
        var cNum = this._viewRow * this._viewCol;
        cc.log("\u5B9E\u4F8B\u5316\u6570\u91CF:" + cNum);
        var createNum = 0;
        var createFunc = function (index) {
            if (!cc.isValid(content))
                return; //异步创建，创建完回来父节点有可能已经被销毁 
            var item = cc.instantiate(_this.itemPrefab);
            item.parent = content;
            var x = Math.floor(index / _this._viewRow) * _this._itemW + (_this.spacing.x >> 1);
            var y = (index % _this._viewRow) * _this._itemH;
            var pos = startPos.add(cc.v2(x, y));
            item.setPosition(pos);
            item.on(cc.Node.EventType.TOUCH_END, function (e) {
                _this.onItemClicked && _this.onItemClicked(_this._itemsUUIDToIndex[item.uuid], item);
            }, _this);
            _this.itemList.push(item);
            _this._updateItem(index, item);
            _this._itemsUUIDToIndex[item.uuid] = index;
            createNum++;
            if (createNum == cNum) {
                scroll.enabled = true;
                initCb && initCb();
            }
        };
        /** 分帧创建item */
        frameLoad(cNum, createFunc, 1);
    };
    /** 更新centent高度 */
    RecycleScrollH.prototype._updateContentHeight = function () {
        var content = this._getContent();
        var row = Math.floor(this._viewH / this._itemH);
        var col = Math.ceil(this._numItems / row);
        content.width = col * (this.itemPrefab.data.width + this.spacing.x) - (this.spacing.x);
    };
    /** 获取item在view坐标系的对标 */
    RecycleScrollH.prototype._getPosInView = function (item) {
        var content = this._getContent();
        var view = content.parent;
        var wpos = content.convertToWorldSpaceAR(item.position);
        var lpos = view.convertToNodeSpaceAR(wpos);
        return lpos;
    };
    /** 更新item */
    RecycleScrollH.prototype._updateItem = function (index, item) {
        var isShow = index >= 0 && index < this._numItems;
        item.active = isShow;
        if (isShow && this.onItemRender) {
            this.onItemRender(index, item);
        }
    };
    RecycleScrollH.prototype.update = function (dt) {
        var content = this._getContent();
        var currX = content.x;
        var dtX = currX - this._lastPosX;
        this._lastPosX = currX;
        if (dtX == 0)
            return;
        var isRight = dtX > 0;
        var itemsLen = this.itemList.length;
        for (var i = 0; i < itemsLen; ++i) {
            var item = this.itemList[i];
            var posInView = this._getPosInView(item);
            var viewHalfW = this._viewW >> 1;
            var itemHalfW = this._itemW >> 1;
            var lastIndex = this._itemsUUIDToIndex[item.uuid];
            var currIndex = lastIndex;
            if (!isRight) {
                if (posInView.x <= -viewHalfW - itemHalfW) {
                    item.x += (this._viewCol * this._itemW);
                    currIndex = lastIndex + itemsLen;
                }
            }
            else {
                if (posInView.x >= viewHalfW + itemHalfW) {
                    item.x -= (this._viewCol * this._itemW);
                    currIndex = lastIndex - itemsLen;
                }
            }
            if (currIndex != lastIndex) {
                this._updateItem(currIndex, item);
            }
            this._itemsUUIDToIndex[item.uuid] = currIndex;
        }
    };
    __decorate([
        property(cc.Prefab)
    ], RecycleScrollH.prototype, "itemPrefab", void 0);
    __decorate([
        property(cc.Vec2)
    ], RecycleScrollH.prototype, "spacing", void 0);
    RecycleScrollH = __decorate([
        ccclass
    ], RecycleScrollH);
    return RecycleScrollH;
}(cc.Component));
exports.default = RecycleScrollH;
/** 分帧执行 */
function frameLoad(loopTimes, func, frameTime, __index) {
    if (frameTime === void 0) { frameTime = 16; }
    if (__index === void 0) { __index = 0; }
    var loop = loopTimes;
    var start = new Date().getTime();
    var end = 0;
    var dt = 0;
    for (var i = 0; i < loop; ++i) {
        if (__index >= loop) {
            break;
        }
        try {
            func && func(__index);
        }
        catch (e) {
            cc.error(e);
        }
        __index++;
        end = new Date().getTime();
        dt = end - start;
        if (dt > frameTime) {
            setTimeout(function () {
                frameLoad(loop, func, frameTime, __index);
            }, 150);
            break;
        }
    }
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcc2Nyb2xsdmlld1xcUmVjeWNsZVNjcm9sbEgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7O0dBRUc7QUFFSDtJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQThOQztRQTdORyxhQUFhO1FBRWIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsYUFBYTtRQUViLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBYTtRQUNMLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDOUIsMEJBQTBCO1FBQzFCLDZCQUE2QjtRQUM3QixJQUFJO1FBQ0osdUNBQXVDO1FBQ3ZDLDhCQUE4QjtRQUM5Qiw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLGdDQUFnQztRQUNoQyw4QkFBOEI7UUFDOUIsdUNBQXVDO1FBQ3ZDLFVBQVU7UUFDVixJQUFJO1FBRUosY0FBYztRQUNOLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDN0IsY0FBYztRQUNOLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDN0IsV0FBVztRQUNILFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDM0IsV0FBVztRQUNILFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDM0IsY0FBYztRQUNOLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDM0IsY0FBYztRQUNOLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDM0Isb0JBQW9CO1FBQ1osZUFBUyxHQUFXLENBQUMsQ0FBQztRQUM5QixhQUFhO1FBQ0wsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUNqQyxpQkFBaUI7UUFDVCx1QkFBaUIsR0FBK0IsRUFBRSxDQUFDO1FBRTNELGFBQWE7UUFDTixjQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ2hDLGNBQWM7UUFDUCxhQUFP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QUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6QjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNmO1FBQ0QsT0FBTyxFQUFFLENBQUM7UUFDVixHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixFQUFFLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNqQixJQUFJLEVBQUUsR0FBRyxTQUFTLEVBQUU7WUFDaEIsVUFBVSxDQUFDO2dCQUNQLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM5QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDUixNQUFNO1NBQ1Q7S0FDSjtBQUNMLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqIFxyXG4gKiDlvqrnjq8r5YiG5binIOa7keWKqOmdouadvyDmqKrlkJEgXHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN5Y2xlU2Nyb2xsSCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvKiogaXRlbemihOWItiAqL1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGl0ZW1QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgLyoqIGl0ZW3pl7TpmpQgKi9cclxuICAgIEBwcm9wZXJ0eShjYy5WZWMyKVxyXG4gICAgc3BhY2luZzogY2MuVmVjMiA9IG51bGw7XHJcblxyXG4gICAgLyoqIGl0ZW3mlbDph48gKi9cclxuICAgIHByaXZhdGUgX251bUl0ZW1zOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gcHVibGljIGdldCBudW1JdGVtcygpIHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5fbnVtSXRlbXM7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBwdWJsaWMgc2V0IG51bUl0ZW1zKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIC8vICAgICB0aGlzLl9udW1JdGVtcyA9IHZhbHVlO1xyXG4gICAgLy8gICAgIHRoaXMuX2hpZGVBbGxJdGVtcygpO1xyXG4gICAgLy8gICAgIHRoaXMudXBkYXRlQWxsSXRlbXMoKTtcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuX2luaXRpYWxpemUoKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5fdXBkYXRlQ29udGVudEhlaWdodCgpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8qKiDop4blm77lhoXmmL7npLrliJfmlbAgKi9cclxuICAgIHByaXZhdGUgX3ZpZXdDb2w6IG51bWJlciA9IDA7XHJcbiAgICAvKiog6KeG5Zu+5YaF5pi+56S66KGM5pWwICovXHJcbiAgICBwcml2YXRlIF92aWV3Um93OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIOinhuWbvueql+WuvSAqL1xyXG4gICAgcHJpdmF0ZSBfdmlld1c6IG51bWJlciA9IDA7XHJcbiAgICAvKiog6KeG5Zu+56qX6auYICovXHJcbiAgICBwcml2YXRlIF92aWV3SDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBpdGVt5qC85a2Q5a69ICovXHJcbiAgICBwcml2YXRlIF9pdGVtVzogbnVtYmVyID0gMDtcclxuICAgIC8qKiBpdGVt5qC85a2Q6auYICovXHJcbiAgICBwcml2YXRlIF9pdGVtSDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBjb250ZW505LiK5LiA5qyheOWdkOaghyAqL1xyXG4gICAgcHJpdmF0ZSBfbGFzdFBvc1g6IG51bWJlciA9IDA7XHJcbiAgICAvKiog5piv5ZCm5bey5Yid5aeL5YyWICovXHJcbiAgICBwcml2YXRlIF9pc0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiBpdGVt55qEaW5kZXggKi9cclxuICAgIHByaXZhdGUgX2l0ZW1zVVVJRFRvSW5kZXg6IHsgW3V1aWQ6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcblxyXG4gICAgLyoqIGl0ZW3liJfooaggKi9cclxuICAgIHB1YmxpYyBpdGVtTGlzdDogY2MuTm9kZVtdID0gW107XHJcbiAgICAvKiogaXRlbeeItuiKgueCuSAqL1xyXG4gICAgcHVibGljIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8qKiBpdGVt5Yi35paw5Zue6LCDICovXHJcbiAgICBwdWJsaWMgb25JdGVtUmVuZGVyKGluZGV4OiBudW1iZXIsIG5vZGU6IGNjLk5vZGUpIHsgfVxyXG4gICAgLyoqIGl0ZW3ngrnlh7vlm57osIMgKi9cclxuICAgIHB1YmxpYyBvbkl0ZW1DbGlja2VkKGluZGV4OiBudW1iZXIsIG5vZGU6IGNjLk5vZGUpIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5rua5Yqo5YiX6KGoXHJcbiAgICAgKiBAcGFyYW0gZGF0YUxlbmd0aCDlhajpg6jmlbDmja7plb/luqZcclxuICAgICAqIEBwYXJhbSBmaW5pc2hDYiDliJ3lp4vljJblrozmiJDlm57osINcclxuICAgICAqIEBwYXJhbSBvbkl0ZW1SZW5kZXIgaXRlbeWIt+aWsOWbnuiwg1xyXG4gICAgICogQHBhcmFtIG9uSXRlbUNsaWNrZWQgaXRlbeeCueWHu+Wbnuiwg1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdChkYXRhTGVuZ3RoOiBudW1iZXIsIGZpbmlzaENiPzogKCkgPT4gdm9pZCwgb25JdGVtUmVuZGVyPzogKGluZGV4OiBudW1iZXIsIG5vZGU6IGNjLk5vZGUpID0+IHZvaWQsIG9uSXRlbUNsaWNrZWQ/OiAoaW5kZXg6IG51bWJlciwgbm9kZTogY2MuTm9kZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMub25JdGVtUmVuZGVyID0gb25JdGVtUmVuZGVyO1xyXG4gICAgICAgIHRoaXMub25JdGVtQ2xpY2tlZCA9IG9uSXRlbUNsaWNrZWQ7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoKGRhdGFMZW5ndGgsIGZpbmlzaENiKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoKGRhdGFMZW5ndGg6IG51bWJlciwgY2I6ICgpID0+IHZvaWQgPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5fbnVtSXRlbXMgPSBkYXRhTGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuX2hpZGVBbGxJdGVtcygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQWxsSXRlbXMoKTtcclxuICAgICAgICB0aGlzLl9pbml0aWFsaXplKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ29udGVudEhlaWdodCgpO1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5bCG5oyH5a6a5LiL5qCH55qEaXRlbea7muWKqOWIsOWxj+W5leS4remXtCAqL1xyXG4gICAgcHVibGljIHJvbGxJdGVtQnlJbmRleChpbmRleDogbnVtYmVyLCB0aW1lOiBudW1iZXIgPSAwLjEsIHhPZmZzZXQ6IG51bWJlciA9IDApIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzSW5pdCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGxJdGVtQnlJbmRleChpbmRleCwgdGltZSwgeE9mZnNldCk7XHJcbiAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRhcmdldFggPSBNYXRoLmFicyhpbmRleCAqIHRoaXMuX2l0ZW1XICsgdGhpcy5faXRlbVcgLyAyKSAtIHRoaXMuX2l0ZW1XIC8gMiAtICh0aGlzLl9pdGVtVyAtIHRoaXMuX2l0ZW1XKSAvIDIgKyB4T2Zmc2V0O1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XHJcbiAgICAgICAgc2Nyb2xsLnNjcm9sbFRvT2Zmc2V0KGNjLnYyKDAsIHRhcmdldFgpLCB0aW1lKVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgfSwgdGltZSAqIDEwMDApO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIt+aWsOaJgOaciWl0ZW0gKi9cclxuICAgIHB1YmxpYyB1cGRhdGVBbGxJdGVtcygpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmZvckVhY2goKGl0ZW06IGNjLk5vZGUsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlSXRlbSh0aGlzLl9pdGVtc1VVSURUb0luZGV4W2l0ZW0udXVpZF0sIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hpZGVBbGxJdGVtcygpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmZvckVhY2goKGl0ZW06IGNjLk5vZGUsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6I635Y+WY29udGVudCAqL1xyXG4gICAgcHJpdmF0ZSBfZ2V0Q29udGVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5jb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJYgKi9cclxuICAgIHByaXZhdGUgX2luaXRpYWxpemUoaW5pdENiOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzSW5pdCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XHJcbiAgICAgICAgc2Nyb2xsLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9pc0luaXQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLl9nZXRDb250ZW50KCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLl92aWV3VyA9IGNvbnRlbnQucGFyZW50LndpZHRoO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdIID0gY29udGVudC5wYXJlbnQuaGVpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtRGF0YSA9IHRoaXMuaXRlbVByZWZhYi5kYXRhO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1XID0gaXRlbURhdGEud2lkdGggKyB0aGlzLnNwYWNpbmcueDtcclxuICAgICAgICB0aGlzLl9pdGVtSCA9IGl0ZW1EYXRhLmhlaWdodCArIHRoaXMuc3BhY2luZy55O1xyXG5cclxuICAgICAgICB0aGlzLl9sYXN0UG9zWCA9IGNvbnRlbnQueTtcclxuICAgICAgICB0aGlzLl92aWV3Um93ID0gTWF0aC5mbG9vcih0aGlzLl92aWV3SCAvIHRoaXMuX2l0ZW1IKTtcclxuICAgICAgICB0aGlzLl92aWV3Q29sID0gTWF0aC5jZWlsKHRoaXMuX3ZpZXdXIC8gdGhpcy5faXRlbVcpICsgMTtcclxuICAgICAgICBjb25zdCBzdXJwbHVzSCA9IHRoaXMuX3ZpZXdIIC0gKHRoaXMuX3ZpZXdSb3cgKiB0aGlzLl9pdGVtSCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSBjYy52Mih0aGlzLl9pdGVtVyA+PiAxLCAodGhpcy5fdmlld0ggPj4gMSkgLSAodGhpcy5faXRlbUggPj4gMSkgLSAoc3VycGx1c0ggPj4gMSkpO1xyXG5cclxuICAgICAgICBjb25zdCBjTnVtID0gdGhpcy5fdmlld1JvdyAqIHRoaXMuX3ZpZXdDb2w7XHJcbiAgICAgICAgY2MubG9nKGDlrp7kvovljJbmlbDph486JHtjTnVtfWApO1xyXG5cclxuICAgICAgICBsZXQgY3JlYXRlTnVtID0gMDtcclxuICAgICAgICBjb25zdCBjcmVhdGVGdW5jID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKGNvbnRlbnQpKSByZXR1cm47IC8v5byC5q2l5Yib5bu677yM5Yib5bu65a6M5Zue5p2l54i26IqC54K55pyJ5Y+v6IO95bey57uP6KKr6ZSA5q+BIFxyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtUHJlZmFiKTtcclxuICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSBjb250ZW50O1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihpbmRleCAvIHRoaXMuX3ZpZXdSb3cpICogdGhpcy5faXRlbVcgKyAodGhpcy5zcGFjaW5nLnggPj4gMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSAoaW5kZXggJSB0aGlzLl92aWV3Um93KSAqIHRoaXMuX2l0ZW1IO1xyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSBzdGFydFBvcy5hZGQoY2MudjIoeCwgeSkpO1xyXG4gICAgICAgICAgICBpdGVtLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgIGl0ZW0ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkl0ZW1DbGlja2VkICYmIHRoaXMub25JdGVtQ2xpY2tlZCh0aGlzLl9pdGVtc1VVSURUb0luZGV4W2l0ZW0udXVpZF0sIGl0ZW0pO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5wdXNoKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlSXRlbShpbmRleCwgaXRlbSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9pdGVtc1VVSURUb0luZGV4W2l0ZW0udXVpZF0gPSBpbmRleDtcclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZU51bSsrO1xyXG4gICAgICAgICAgICBpZiAoY3JlYXRlTnVtID09IGNOdW0pIHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbC5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGluaXRDYiAmJiBpbml0Q2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKiog5YiG5bin5Yib5bu6aXRlbSAqL1xyXG4gICAgICAgIGZyYW1lTG9hZChjTnVtLCBjcmVhdGVGdW5jLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog5pu05pawY2VudGVudOmrmOW6piAqL1xyXG4gICAgcHJpdmF0ZSBfdXBkYXRlQ29udGVudEhlaWdodCgpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5fZ2V0Q29udGVudCgpO1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IodGhpcy5fdmlld0ggLyB0aGlzLl9pdGVtSCk7XHJcbiAgICAgICAgY29uc3QgY29sID0gTWF0aC5jZWlsKHRoaXMuX251bUl0ZW1zIC8gcm93KTtcclxuICAgICAgICBjb250ZW50LndpZHRoID0gY29sICogKHRoaXMuaXRlbVByZWZhYi5kYXRhLndpZHRoICsgdGhpcy5zcGFjaW5nLngpIC0gKHRoaXMuc3BhY2luZy54KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6I635Y+WaXRlbeWcqHZpZXflnZDmoIfns7vnmoTlr7nmoIcgKi9cclxuICAgIHByaXZhdGUgX2dldFBvc0luVmlldyhpdGVtOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuX2dldENvbnRlbnQoKTtcclxuICAgICAgICBjb25zdCB2aWV3ID0gY29udGVudC5wYXJlbnQ7XHJcbiAgICAgICAgY29uc3Qgd3BvcyA9IGNvbnRlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGl0ZW0ucG9zaXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGxwb3MgPSB2aWV3LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdwb3MpO1xyXG4gICAgICAgIHJldHVybiBscG9zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDmm7TmlrBpdGVtICovXHJcbiAgICBwcml2YXRlIF91cGRhdGVJdGVtKGluZGV4OiBudW1iZXIsIGl0ZW06IGNjLk5vZGUpIHtcclxuICAgICAgICBjb25zdCBpc1Nob3cgPSBpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5fbnVtSXRlbXM7XHJcbiAgICAgICAgaXRlbS5hY3RpdmUgPSBpc1Nob3c7XHJcbiAgICAgICAgaWYgKGlzU2hvdyAmJiB0aGlzLm9uSXRlbVJlbmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9uSXRlbVJlbmRlcihpbmRleCwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLl9nZXRDb250ZW50KCk7XHJcbiAgICAgICAgY29uc3QgY3VyclggPSBjb250ZW50Lng7XHJcbiAgICAgICAgY29uc3QgZHRYID0gY3VyclggLSB0aGlzLl9sYXN0UG9zWDtcclxuICAgICAgICB0aGlzLl9sYXN0UG9zWCA9IGN1cnJYO1xyXG4gICAgICAgIGlmIChkdFggPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGlzUmlnaHQgPSBkdFggPiAwO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zTGVuID0gdGhpcy5pdGVtTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtc0xlbjsgKytpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1MaXN0W2ldO1xyXG4gICAgICAgICAgICBjb25zdCBwb3NJblZpZXcgPSB0aGlzLl9nZXRQb3NJblZpZXcoaXRlbSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZXdIYWxmVyA9IHRoaXMuX3ZpZXdXID4+IDE7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1IYWxmVyA9IHRoaXMuX2l0ZW1XID4+IDE7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHRoaXMuX2l0ZW1zVVVJRFRvSW5kZXhbaXRlbS51dWlkXTtcclxuICAgICAgICAgICAgbGV0IGN1cnJJbmRleCA9IGxhc3RJbmRleDtcclxuICAgICAgICAgICAgaWYgKCFpc1JpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zSW5WaWV3LnggPD0gLXZpZXdIYWxmVyAtIGl0ZW1IYWxmVykge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ueCArPSAodGhpcy5fdmlld0NvbCAqIHRoaXMuX2l0ZW1XKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJySW5kZXggPSBsYXN0SW5kZXggKyBpdGVtc0xlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChwb3NJblZpZXcueCA+PSB2aWV3SGFsZlcgKyBpdGVtSGFsZlcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnggLT0gKHRoaXMuX3ZpZXdDb2wgKiB0aGlzLl9pdGVtVyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VyckluZGV4ID0gbGFzdEluZGV4IC0gaXRlbXNMZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJJbmRleCAhPSBsYXN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUl0ZW0oY3VyckluZGV4LCBpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9pdGVtc1VVSURUb0luZGV4W2l0ZW0udXVpZF0gPSBjdXJySW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiog5YiG5bin5omn6KGMICovXHJcbmZ1bmN0aW9uIGZyYW1lTG9hZChsb29wVGltZXM6IG51bWJlciwgZnVuYzogRnVuY3Rpb24sIGZyYW1lVGltZTogbnVtYmVyID0gMTYsIF9faW5kZXg6IG51bWJlciA9IDApIHtcclxuICAgIGxldCBsb29wID0gbG9vcFRpbWVzO1xyXG4gICAgbGV0IHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBsZXQgZW5kID0gMDtcclxuICAgIGxldCBkdCA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvb3A7ICsraSkge1xyXG4gICAgICAgIGlmIChfX2luZGV4ID49IGxvb3ApIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZ1bmMgJiYgZnVuYyhfX2luZGV4KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfX2luZGV4Kys7XHJcbiAgICAgICAgZW5kID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgZHQgPSBlbmQgLSBzdGFydDtcclxuICAgICAgICBpZiAoZHQgPiBmcmFtZVRpbWUpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmcmFtZUxvYWQobG9vcCwgZnVuYywgZnJhbWVUaW1lLCBfX2luZGV4KTtcclxuICAgICAgICAgICAgfSwgMTUwKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/BtnClickAudio.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54bdfdI2cVGo4otKC0FNlNu', 'BtnClickAudio');
// homePage/script/common/BtnClickAudio.ts

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
var AudioManager_1 = require("../manager/AudioManager");
var SoundPath_1 = require("./SoundPath");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BtnClickAudio = /** @class */ (function (_super) {
    __extends(BtnClickAudio, _super);
    function BtnClickAudio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.soundPath = SoundPath_1.SoundEnum.button_click;
        return _this;
    }
    BtnClickAudio.prototype.onEnable = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    };
    BtnClickAudio.prototype.onDisable = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    };
    BtnClickAudio.prototype.onTouchStart = function () {
        var key = Object.keys(SoundPath_1.SoundEnum)[this.soundPath];
        AudioManager_1.AudioManager.ins.playEffect(SoundPath_1.SoundPath[key]);
    };
    __decorate([
        property({ type: cc.Enum(SoundPath_1.SoundEnum) })
    ], BtnClickAudio.prototype, "soundPath", void 0);
    BtnClickAudio = __decorate([
        ccclass
    ], BtnClickAudio);
    return BtnClickAudio;
}(cc.Component));
exports.default = BtnClickAudio;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxCdG5DbGlja0F1ZGlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUF1RDtBQUN2RCx5Q0FBbUQ7QUFFN0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFpQkM7UUFkRyxlQUFTLEdBQWMscUJBQVMsQ0FBQyxZQUFZLENBQUM7O0lBY2xELENBQUM7SUFaYSxnQ0FBUSxHQUFsQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFUyxpQ0FBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0ksSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELDJCQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxxQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQWJEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQVMsQ0FBQyxFQUFFLENBQUM7b0RBQ087SUFIN0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQWlCakM7SUFBRCxvQkFBQztDQWpCRCxBQWlCQyxDQWpCMEMsRUFBRSxDQUFDLFNBQVMsR0FpQnREO2tCQWpCb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZEVudW0sIFNvdW5kUGF0aCB9IGZyb20gXCIuL1NvdW5kUGF0aFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ0bkNsaWNrQXVkaW8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oU291bmRFbnVtKSB9KVxyXG4gICAgc291bmRQYXRoOiBTb3VuZEVudW0gPSBTb3VuZEVudW0uYnV0dG9uX2NsaWNrO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoU3RhcnQoKSB7XHJcbiAgICAgICAgbGV0IGtleSA9IE9iamVjdC5rZXlzKFNvdW5kRW51bSlbdGhpcy5zb3VuZFBhdGhdO1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnMucGxheUVmZmVjdChTb3VuZFBhdGhba2V5XSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/BoundingBox.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53e92nXNnVD6IEIT7cAAplW', 'BoundingBox');
// homePage/script/common/BoundingBox.ts

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
var BoundingBox = /** @class */ (function (_super) {
    __extends(BoundingBox, _super);
    function BoundingBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boundingBox = null;
        return _this;
    }
    BoundingBox.prototype.onDisable = function () {
        this.boundingBox = null;
    };
    BoundingBox.prototype.getBoundingBoxToWorld = function () {
        if (!this.boundingBox) {
            this.boundingBox = this.node.getBoundingBoxToWorld();
        }
        return this.boundingBox;
    };
    BoundingBox = __decorate([
        ccclass
    ], BoundingBox);
    return BoundingBox;
}(cc.Component));
exports.default = BoundingBox;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxCb3VuZGluZ0JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWNDO1FBWlcsaUJBQVcsR0FBWSxJQUFJLENBQUM7O0lBWXhDLENBQUM7SUFWYSwrQkFBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCwyQ0FBcUIsR0FBckI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUN4RDtRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBYmdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FjL0I7SUFBRCxrQkFBQztDQWRELEFBY0MsQ0Fkd0MsRUFBRSxDQUFDLFNBQVMsR0FjcEQ7a0JBZG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kaW5nQm94IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGJvdW5kaW5nQm94OiBjYy5SZWN0ID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYm91bmRpbmdCb3ggPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJvdW5kaW5nQm94VG9Xb3JsZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYm91bmRpbmdCb3gpIHtcclxuICAgICAgICAgICAgdGhpcy5ib3VuZGluZ0JveCA9IHRoaXMubm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm91bmRpbmdCb3g7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/BtnCol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82299r2Gq5Ihatcg1URguON', 'BtnCol');
// homePage/script/common/BtnCol.ts

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
var BtnCol = /** @class */ (function (_super) {
    __extends(BtnCol, _super);
    function BtnCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clickInterval = 100;
        _this.maters = [];
        _this.labNode = null;
        _this.redPointNode = null;
        _this.btn = null;
        _this.spr = null;
        return _this;
    }
    BtnCol.prototype.setIsGray = function (isGray) {
        if (!this.btn) {
            this.btn = this.node.getComponent(cc.Button);
        }
        if (!this.spr) {
            this.spr = this.node.getComponent(cc.Sprite);
        }
        this.spr.setMaterial(0, isGray ? this.maters[1] : this.maters[0]);
        this.labNode && (this.labNode.color = isGray ? cc.color(237, 126, 126) : cc.Color.WHITE);
        this.redPointNode && (this.redPointNode.active = !isGray);
    };
    BtnCol.prototype.onLoad = function () {
        this.setIsGray(false);
    };
    BtnCol.prototype.btnClick = function () {
        var _this = this;
        this.btn.interactable = false;
        setTimeout(function () {
            _this.btn.interactable = true;
        }, this.clickInterval);
    };
    __decorate([
        property({ displayName: "连点间隔", type: cc.Integer })
    ], BtnCol.prototype, "clickInterval", void 0);
    __decorate([
        property(cc.Material)
    ], BtnCol.prototype, "maters", void 0);
    __decorate([
        property(cc.Node)
    ], BtnCol.prototype, "labNode", void 0);
    __decorate([
        property(cc.Node)
    ], BtnCol.prototype, "redPointNode", void 0);
    BtnCol = __decorate([
        ccclass
    ], BtnCol);
    return BtnCol;
}(cc.Component));
exports.default = BtnCol;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxCdG5Db2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUF1Q0M7UUFwQ0csbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFHNUIsWUFBTSxHQUFrQixFQUFFLENBQUM7UUFHM0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixTQUFHLEdBQWMsSUFBSSxDQUFDO1FBQ3RCLFNBQUcsR0FBYyxJQUFJLENBQUM7O0lBd0IxQixDQUFDO0lBdEJHLDBCQUFTLEdBQVQsVUFBVSxNQUFNO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoRDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1gsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFUyx1QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHlCQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM5QixVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDakMsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBbkNEO1FBREMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lEQUN4QjtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzBDQUNLO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDVztJQVpaLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F1QzFCO0lBQUQsYUFBQztDQXZDRCxBQXVDQyxDQXZDbUMsRUFBRSxDQUFDLFNBQVMsR0F1Qy9DO2tCQXZDb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnRuQ29sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLov57ngrnpl7TpmpRcIiwgdHlwZTogY2MuSW50ZWdlciB9KVxyXG4gICAgY2xpY2tJbnRlcnZhbDogbnVtYmVyID0gMTAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5NYXRlcmlhbClcclxuICAgIG1hdGVyczogY2MuTWF0ZXJpYWxbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGFiTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICByZWRQb2ludE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGJ0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIHNwcjogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBzZXRJc0dyYXkoaXNHcmF5KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJ0bikge1xyXG4gICAgICAgICAgICB0aGlzLmJ0biA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnNwcikge1xyXG4gICAgICAgICAgICB0aGlzLnNwciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zcHIuc2V0TWF0ZXJpYWwoMCwgaXNHcmF5ID8gdGhpcy5tYXRlcnNbMV0gOiB0aGlzLm1hdGVyc1swXSk7XHJcbiAgICAgICAgdGhpcy5sYWJOb2RlICYmICh0aGlzLmxhYk5vZGUuY29sb3IgPSBpc0dyYXkgPyBjYy5jb2xvcigyMzcsIDEyNiwgMTI2KSA6IGNjLkNvbG9yLldISVRFKTtcclxuICAgICAgICB0aGlzLnJlZFBvaW50Tm9kZSAmJiAodGhpcy5yZWRQb2ludE5vZGUuYWN0aXZlID0gIWlzR3JheSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldElzR3JheShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnRuQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5idG4uaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuLmludGVyYWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSwgdGhpcy5jbGlja0ludGVydmFsKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/BundleData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '04429IMYDpEtbmgoVo76XQz', 'BundleData');
// homePage/script/common/BundleData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundleData = void 0;
var BundleData = /** @class */ (function () {
    function BundleData(bundle, url) {
        this.bundle = null;
        this.url = null;
        this.bundle = bundle;
        this.url = url;
    }
    return BundleData;
}());
exports.BundleData = BundleData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxCdW5kbGVEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBS0ksb0JBQVksTUFBYyxFQUFFLEdBQVc7UUFIdkMsV0FBTSxHQUFXLElBQUksQ0FBQztRQUN0QixRQUFHLEdBQVcsSUFBSSxDQUFDO1FBR2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgQnVuZGxlRGF0YSB7XHJcblxyXG4gICAgYnVuZGxlOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgdXJsOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGJ1bmRsZTogc3RyaW5nLCB1cmw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYnVuZGxlID0gYnVuZGxlO1xyXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/CommonTip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f5b3ZAUeVMlZ2R53GCShZd', 'CommonTip');
// homePage/script/common/CommonTip.ts

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
exports.CommonTip = void 0;
var AbManager_1 = require("../manager/AbManager");
var BundleName_1 = require("./BundleName");
var MyPool_1 = require("./MyPool");
var Util_1 = require("./Util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CommonTip = /** @class */ (function (_super) {
    __extends(CommonTip, _super);
    function CommonTip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tipText = null;
        _this.isOnAnim = false;
        return _this;
    }
    CommonTip.prototype.init = function () {
        var _this = this;
        return AbManager_1.AbManager.loadBundleRes(BundleName_1.BundleName.Font, "/方正隶二简体", cc.Font).then(function (font) {
            if (!Util_1.Util.isValid(_this.node))
                return;
            _this.tipText.font = font;
        });
    };
    /**
     * 显示提示框
     * @param tipInfo 需要显示的文字信息
     */
    CommonTip.prototype.show = function (tipInfo) {
        var _this = this;
        if (tipInfo == null) {
            return;
        }
        this.init().then(function () {
            _this.node.opacity = 255;
            _this.tipText.string = tipInfo;
            _this.isOnAnim = false;
            _this.tipText._forceUpdateRenderData();
            if (_this.tipText.node.width >= 500) {
                _this.tipText.node.width = 500;
                _this.tipText.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
                _this.tipText._forceUpdateRenderData();
            }
            var width = _this.tipText.node.width + 100;
            var height = _this.tipText.node.height + 30;
            _this.node.setContentSize(width, height);
            _this.scheduleOnce(function () {
                _this.destroySelf();
            }, 3);
        });
    };
    CommonTip.prototype.animEndCall = function () {
        this.isOnAnim = false;
    };
    CommonTip.prototype.hide = function () {
        var _this = this;
        var hideAnim = function () {
            cc.tween(_this.node)
                .by(0.5, { y: 200, opacity: -255 })
                .removeSelf()
                .start();
        };
        if (this.isOnAnim) {
            this.animEndCall = function () {
                hideAnim();
            };
        }
        else {
            this.isOnAnim = true;
            hideAnim();
        }
    };
    CommonTip.prototype.topMove = function () {
        if (this.isOnAnim) {
            return;
        }
        this.isOnAnim = true;
        cc.tween(this.node)
            .by(0.1, { y: this.node.height + 10 })
            .call(this.animEndCall.bind(this))
            .start();
    };
    CommonTip.prototype.destroySelf = function () {
        this.unscheduleAllCallbacks();
        this.tipText.string = "";
        this.node.stopAllActions();
        this.isOnAnim = false;
        MyPool_1.default.putObj(this.node);
    };
    __decorate([
        property({
            type: cc.Label
        })
    ], CommonTip.prototype, "tipText", void 0);
    CommonTip = __decorate([
        ccclass
    ], CommonTip);
    return CommonTip;
}(cc.Component));
exports.CommonTip = CommonTip;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxDb21tb25UaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUFpRDtBQUNqRCwyQ0FBMEM7QUFDMUMsbUNBQThCO0FBQzlCLCtCQUE4QjtBQUV4QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQiw2QkFBWTtJQUEzQztRQUFBLHFFQW9GQztRQS9FYSxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBWSxLQUFLLENBQUM7O0lBNkV0QyxDQUFDO0lBM0VHLHdCQUFJLEdBQUo7UUFBQSxpQkFLQztRQUpHLE9BQU8scUJBQVMsQ0FBQyxhQUFhLENBQUMsdUJBQVUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQzFFLElBQUksQ0FBQyxXQUFJLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsT0FBTztZQUNyQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsd0JBQUksR0FBSixVQUFLLE9BQWU7UUFBcEIsaUJBdUJDO1FBdEJHLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtZQUNqQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2IsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztZQUM5QixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUVyQixLQUFJLENBQUMsT0FBZSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDL0MsSUFBSSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFFO2dCQUNoQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUM5QixLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7Z0JBQ3ZELEtBQUksQ0FBQyxPQUFlLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzthQUNsRDtZQUVELElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDMUMsSUFBSSxNQUFNLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUMzQyxLQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ1QsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRCx3QkFBSSxHQUFKO1FBQUEsaUJBZUM7UUFkRyxJQUFJLFFBQVEsR0FBRztZQUNYLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQztpQkFDZCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDbEMsVUFBVSxFQUFFO2lCQUNaLEtBQUssRUFBRSxDQUFBO1FBQ2hCLENBQUMsQ0FBQTtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLEdBQUc7Z0JBQ2YsUUFBUSxFQUFFLENBQUM7WUFDZixDQUFDLENBQUE7U0FDSjthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsUUFBUSxFQUFFLENBQUM7U0FDZDtJQUNMLENBQUM7SUFFRCwyQkFBTyxHQUFQO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUUsQ0FBQzthQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakMsS0FBSyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUVELCtCQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQTlFRDtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSztTQUNqQixDQUFDOzhDQUNpQztJQUwxQixTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBb0ZyQjtJQUFELGdCQUFDO0NBcEZELEFBb0ZDLENBcEY4QixFQUFFLENBQUMsU0FBUyxHQW9GMUM7QUFwRlksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYk1hbmFnZXIgfSBmcm9tIFwiLi4vbWFuYWdlci9BYk1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQnVuZGxlTmFtZSB9IGZyb20gXCIuL0J1bmRsZU5hbWVcIjtcclxuaW1wb3J0IE15UG9vbCBmcm9tIFwiLi9NeVBvb2xcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuL1V0aWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgQ29tbW9uVGlwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICB9KVxyXG4gICAgcHJvdGVjdGVkIHRpcFRleHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlzT25BbmltOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICByZXR1cm4gQWJNYW5hZ2VyLmxvYWRCdW5kbGVSZXMoQnVuZGxlTmFtZS5Gb250LCBcIi/mlrnmraPpmrbkuoznroDkvZNcIiwgY2MuRm9udCkudGhlbigoZm9udCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIVV0aWwuaXNWYWxpZCh0aGlzLm5vZGUpKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMudGlwVGV4dC5mb250ID0gZm9udDtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65o+Q56S65qGGXHJcbiAgICAgKiBAcGFyYW0gdGlwSW5mbyDpnIDopoHmmL7npLrnmoTmloflrZfkv6Hmga8gXHJcbiAgICAgKi9cclxuICAgIHNob3codGlwSW5mbzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRpcEluZm8gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgdGhpcy50aXBUZXh0LnN0cmluZyA9IHRpcEluZm87XHJcbiAgICAgICAgICAgIHRoaXMuaXNPbkFuaW0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICh0aGlzLnRpcFRleHQgYXMgYW55KS5fZm9yY2VVcGRhdGVSZW5kZXJEYXRhKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpcFRleHQubm9kZS53aWR0aCA+PSA1MDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlwVGV4dC5ub2RlLndpZHRoID0gNTAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXBUZXh0Lm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuUkVTSVpFX0hFSUdIVDtcclxuICAgICAgICAgICAgICAgICh0aGlzLnRpcFRleHQgYXMgYW55KS5fZm9yY2VVcGRhdGVSZW5kZXJEYXRhKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IHRoaXMudGlwVGV4dC5ub2RlLndpZHRoICsgMTAwO1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy50aXBUZXh0Lm5vZGUuaGVpZ2h0ICsgMzA7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95U2VsZigpO1xyXG4gICAgICAgICAgICB9LCAzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYW5pbUVuZENhbGwoKSB7XHJcbiAgICAgICAgdGhpcy5pc09uQW5pbSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgbGV0IGhpZGVBbmltID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAuYnkoMC41LCB7IHk6IDIwMCwgb3BhY2l0eTogLTI1NSB9KVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZVNlbGYoKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPbkFuaW0pIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltRW5kQ2FsbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGhpZGVBbmltKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzT25BbmltID0gdHJ1ZTtcclxuICAgICAgICAgICAgaGlkZUFuaW0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9wTW92ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc09uQW5pbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNPbkFuaW0gPSB0cnVlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLmJ5KDAuMSwgeyB5OiB0aGlzLm5vZGUuaGVpZ2h0ICsgMTAgfSlcclxuICAgICAgICAgICAgLmNhbGwodGhpcy5hbmltRW5kQ2FsbC5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3lTZWxmKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgIHRoaXMudGlwVGV4dC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuaXNPbkFuaW0gPSBmYWxzZTtcclxuICAgICAgICBNeVBvb2wucHV0T2JqKHRoaXMubm9kZSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/BundleName.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd49b4ajDTNA/JOZdEx3nWxu', 'BundleName');
// homePage/script/common/BundleName.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BundleName = void 0;
var BundleName;
(function (BundleName) {
    BundleName["Assets"] = "asset";
    BundleName["Font"] = "font";
    BundleName["Config"] = "config";
    BundleName["Start"] = "start";
    BundleName["Level"] = "level";
    BundleName["Common"] = "common";
})(BundleName = exports.BundleName || (exports.BundleName = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxCdW5kbGVOYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQVksVUFPWDtBQVBELFdBQVksVUFBVTtJQUNsQiw4QkFBZ0IsQ0FBQTtJQUNoQiwyQkFBYSxDQUFBO0lBQ2IsK0JBQWlCLENBQUE7SUFDakIsNkJBQWUsQ0FBQTtJQUNmLDZCQUFlLENBQUE7SUFDZiwrQkFBaUIsQ0FBQTtBQUNyQixDQUFDLEVBUFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFPckIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGVudW0gQnVuZGxlTmFtZSB7XHJcbiAgICBBc3NldHMgPSBcImFzc2V0XCIsXHJcbiAgICBGb250ID0gXCJmb250XCIsXHJcbiAgICBDb25maWcgPSBcImNvbmZpZ1wiLFxyXG4gICAgU3RhcnQgPSBcInN0YXJ0XCIsXHJcbiAgICBMZXZlbCA9IFwibGV2ZWxcIixcclxuICAgIENvbW1vbiA9IFwiY29tbW9uXCJcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0940WNzhNHMZAvBww3XrkN', 'Global');
// homePage/script/common/Global.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LvInfo = exports.AssetPath = exports.EventEnum = void 0;
var EventEnum;
(function (EventEnum) {
    EventEnum["TopUIChange"] = "TopUIChange";
    EventEnum["RefreshPlayerInfo"] = "RefreshPlayerInfo";
})(EventEnum = exports.EventEnum || (exports.EventEnum = {}));
var AssetPath;
(function (AssetPath) {
    /**关卡icon */
    AssetPath["lv_icon"] = "texture/levelIcon/";
    /**关卡icon */
    AssetPath["lv_title"] = "texture/levelTitle/";
    /**道具 */
    AssetPath["prop"] = "texture/prop/";
})(AssetPath = exports.AssetPath || (exports.AssetPath = {}));
var LvInfo = /** @class */ (function () {
    function LvInfo() {
    }
    return LvInfo;
}());
exports.LvInfo = LvInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxHbG9iYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBWSxTQUdYO0FBSEQsV0FBWSxTQUFTO0lBQ2pCLHdDQUEyQixDQUFBO0lBQzNCLG9EQUF1QyxDQUFBO0FBQzNDLENBQUMsRUFIVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUdwQjtBQUVELElBQVksU0FPWDtBQVBELFdBQVksU0FBUztJQUNqQixZQUFZO0lBQ1osMkNBQThCLENBQUE7SUFDOUIsWUFBWTtJQUNaLDZDQUFnQyxDQUFBO0lBQ2hDLFFBQVE7SUFDUixtQ0FBc0IsQ0FBQTtBQUMxQixDQUFDLEVBUFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFPcEI7QUFFRDtJQUFBO0lBT0EsQ0FBQztJQUFELGFBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBlbnVtIEV2ZW50RW51bSB7XHJcbiAgICBUb3BVSUNoYW5nZSA9IFwiVG9wVUlDaGFuZ2VcIixcclxuICAgIFJlZnJlc2hQbGF5ZXJJbmZvID0gXCJSZWZyZXNoUGxheWVySW5mb1wiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFzc2V0UGF0aCB7XHJcbiAgICAvKirlhbPljaFpY29uICovXHJcbiAgICBsdl9pY29uID0gXCJ0ZXh0dXJlL2xldmVsSWNvbi9cIixcclxuICAgIC8qKuWFs+WNoWljb24gKi9cclxuICAgIGx2X3RpdGxlID0gXCJ0ZXh0dXJlL2xldmVsVGl0bGUvXCIsXHJcbiAgICAvKirpgZPlhbcgKi9cclxuICAgIHByb3AgPSBcInRleHR1cmUvcHJvcC9cIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTHZJbmZvIHtcclxuICAgIGx2OiBudW1iZXI7XHJcbiAgICBpc1VubG9jazogYm9vbGVhbjtcclxuICAgIC8v5bey6Kej6ZSB55qE57uT5bGAXHJcbiAgICB1bmxvY2tFbmRpbmdzOiBudW1iZXJbXTtcclxuICAgIC8v5bey6Kej6ZSB55qE5o+Q56S6XHJcbiAgICB1bmxvY2tUaXBzOiBudW1iZXJbXTtcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/GamingData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2050yMolBP7r2VEtSDZRKo', 'GamingData');
// homePage/script/common/GamingData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//存放游戏运行中的临时数据
var GamingData = /** @class */ (function () {
    function GamingData() {
    }
    GamingData.isFirstLogin = true;
    /**当前选择的关卡 */
    GamingData.curLv = 1;
    /**是否在限时解锁全部关卡中 */
    GamingData.isOnUnlockAllLv = false;
    return GamingData;
}());
exports.default = GamingData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxHYW1pbmdEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsY0FBYztBQUNkO0lBQUE7SUFTQSxDQUFDO0lBUFUsdUJBQVksR0FBWSxJQUFJLENBQUM7SUFFcEMsYUFBYTtJQUNOLGdCQUFLLEdBQVcsQ0FBQyxDQUFDO0lBRXpCLGtCQUFrQjtJQUNYLDBCQUFlLEdBQVksS0FBSyxDQUFDO0lBQzVDLGlCQUFDO0NBVEQsQUFTQyxJQUFBO2tCQVRvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8v5a2Y5pS+5ri45oiP6L+Q6KGM5Lit55qE5Li05pe25pWw5o2uXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWluZ0RhdGEge1xyXG5cclxuICAgIHN0YXRpYyBpc0ZpcnN0TG9naW46IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKuW9k+WJjemAieaLqeeahOWFs+WNoSAqL1xyXG4gICAgc3RhdGljIGN1ckx2OiBudW1iZXIgPSAxO1xyXG5cclxuICAgIC8qKuaYr+WQpuWcqOmZkOaXtuino+mUgeWFqOmDqOWFs+WNoeS4rSAqL1xyXG4gICAgc3RhdGljIGlzT25VbmxvY2tBbGxMdjogYm9vbGVhbiA9IGZhbHNlO1xyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/HttpManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f22b7/qDCtLdZipXeGDHo8+', 'HttpManager');
// homePage/script/common/HttpManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP_ERROR = exports.HTTP_TYPE = void 0;
var HTTP_TYPE;
(function (HTTP_TYPE) {
    HTTP_TYPE["GET"] = "GET";
    HTTP_TYPE["POST"] = "POST";
})(HTTP_TYPE = exports.HTTP_TYPE || (exports.HTTP_TYPE = {}));
var HTTP_ERROR;
(function (HTTP_ERROR) {
    HTTP_ERROR[HTTP_ERROR["TIME_OUT"] = 0] = "TIME_OUT";
})(HTTP_ERROR = exports.HTTP_ERROR || (exports.HTTP_ERROR = {}));
var HttpManager = /** @class */ (function () {
    function HttpManager() {
    }
    HttpManager.send = function (url, params, httpType, timeout) {
        if (params === void 0) { params = null; }
        if (httpType === void 0) { httpType = HTTP_TYPE.GET; }
        if (timeout === void 0) { timeout = 5000000; }
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status >= 200 && xhr.status < 400) {
                        try {
                            resolve(JSON.parse(xhr.responseText));
                        }
                        catch (error) {
                            reject(xhr);
                        }
                    }
                    else {
                        reject(xhr);
                    }
                    xhr && xhr.abort && xhr.abort();
                }
            };
            xhr.onerror = function (err) {
                console.log('request error', err);
                reject(HTTP_ERROR.TIME_OUT);
            };
            xhr.ontimeout = function () {
                reject(HTTP_ERROR.TIME_OUT);
                xhr && xhr.abort && xhr.abort();
            };
            if (params && typeof (params) == "object" && !params.length && !Array.isArray(params)) {
                params = JSON.stringify(params);
            }
            if (httpType == HTTP_TYPE.GET && params) {
                url += '?' + params;
                params = null;
            }
            xhr.open(httpType, url, true);
            xhr.timeout = timeout;
            if (httpType == HTTP_TYPE.POST) {
                xhr.setRequestHeader("Content-Type", 'application/json; charset=utf-8');
            }
            xhr.send(params);
            console.log("[hs_game]Request URL:" + url);
            console.log("[hs_game]Request Data:" + params);
        });
    };
    return HttpManager;
}());
exports.default = HttpManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxIdHRwTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLFNBR1g7QUFIRCxXQUFZLFNBQVM7SUFDakIsd0JBQVcsQ0FBQTtJQUNYLDBCQUFhLENBQUE7QUFDakIsQ0FBQyxFQUhXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBR3BCO0FBRUQsSUFBWSxVQUVYO0FBRkQsV0FBWSxVQUFVO0lBQ2xCLG1EQUFRLENBQUE7QUFDWixDQUFDLEVBRlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFFckI7QUFFRDtJQUFBO0lBbURBLENBQUM7SUEvQ1UsZ0JBQUksR0FBWCxVQUFZLEdBQVcsRUFBRSxNQUFrQixFQUFFLFFBQW1DLEVBQUUsT0FBeUI7UUFBbEYsdUJBQUEsRUFBQSxhQUFrQjtRQUFFLHlCQUFBLEVBQUEsV0FBc0IsU0FBUyxDQUFDLEdBQUc7UUFBRSx3QkFBQSxFQUFBLGlCQUF5QjtRQUV2RyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztZQUMvQixHQUFHLENBQUMsa0JBQWtCLEdBQUc7Z0JBQ3JCLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7b0JBQ3JCLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7d0JBQ3ZDLElBQUk7NEJBQ0EsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7eUJBQ3pDO3dCQUFDLE9BQU8sS0FBSyxFQUFFOzRCQUNaLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzt5QkFDZjtxQkFDSjt5QkFBTTt3QkFDSCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ2Y7b0JBQ0QsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNuQztZQUNMLENBQUMsQ0FBQztZQUVGLEdBQUcsQ0FBQyxPQUFPLEdBQUcsVUFBQSxHQUFHO2dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQztZQUVGLEdBQUcsQ0FBQyxTQUFTLEdBQUc7Z0JBQ1osTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDNUIsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BDLENBQUMsQ0FBQTtZQUVELElBQUksTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDbkYsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbkM7WUFDRCxJQUFJLFFBQVEsSUFBSSxTQUFTLENBQUMsR0FBRyxJQUFJLE1BQU0sRUFBRTtnQkFDckMsR0FBRyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUM7Z0JBQ3BCLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDakI7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUIsR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFFdEIsSUFBSSxRQUFRLElBQUksU0FBUyxDQUFDLElBQUksRUFBRTtnQkFDNUIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO2FBQzNFO1lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixHQUFLLENBQUMsQ0FBQztZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUF5QixNQUFRLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTCxrQkFBQztBQUFELENBbkRBLEFBbURDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBIVFRQX1RZUEUge1xyXG4gICAgR0VUID0gJ0dFVCcsXHJcbiAgICBQT1NUID0gJ1BPU1QnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEhUVFBfRVJST1Ige1xyXG4gICAgVElNRV9PVVRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cE1hbmFnZXIge1xyXG4gICAgc3RhdGljIHNlbmQodXJsOiBzdHJpbmcsIHBhcmFtcz86IHN0cmluZywgaHR0cFR5cGU/OiBIVFRQX1RZUEUgfCBzdHJpbmcsIHRpbWVvdXQ/OiBudW1iZXIpOiBQcm9taXNlPGFueT47XHJcbiAgICBzdGF0aWMgc2VuZCh1cmw6IHN0cmluZywgcGFyYW1zPzogb2JqZWN0LCBodHRwVHlwZT86IEhUVFBfVFlQRSB8IHN0cmluZywgdGltZW91dD86IG51bWJlcik6IFByb21pc2U8YW55PjtcclxuXHJcbiAgICBzdGF0aWMgc2VuZCh1cmw6IHN0cmluZywgcGFyYW1zOiBhbnkgPSBudWxsLCBodHRwVHlwZTogSFRUUF9UWVBFID0gSFRUUF9UWVBFLkdFVCwgdGltZW91dDogbnVtYmVyID0gNTAwMDAwMCk6IFByb21pc2U8YW55PiB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoeGhyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh4aHIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB4aHIgJiYgeGhyLmFib3J0ICYmIHhoci5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QgZXJyb3InLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KEhUVFBfRVJST1IuVElNRV9PVVQpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChIVFRQX0VSUk9SLlRJTUVfT1VUKTtcclxuICAgICAgICAgICAgICAgIHhociAmJiB4aHIuYWJvcnQgJiYgeGhyLmFib3J0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwYXJhbXMgJiYgdHlwZW9mIChwYXJhbXMpID09IFwib2JqZWN0XCIgJiYgIXBhcmFtcy5sZW5ndGggJiYgIUFycmF5LmlzQXJyYXkocGFyYW1zKSkge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zID0gSlNPTi5zdHJpbmdpZnkocGFyYW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaHR0cFR5cGUgPT0gSFRUUF9UWVBFLkdFVCAmJiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIHVybCArPSAnPycgKyBwYXJhbXM7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHhoci5vcGVuKGh0dHBUeXBlLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICB4aHIudGltZW91dCA9IHRpbWVvdXQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoaHR0cFR5cGUgPT0gSFRUUF9UWVBFLlBPU1QpIHtcclxuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeGhyLnNlbmQocGFyYW1zKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFtoc19nYW1lXVJlcXVlc3QgVVJMOiR7dXJsfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgW2hzX2dhbWVdUmVxdWVzdCBEYXRhOiR7cGFyYW1zfWApO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/LoadingProgressCol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ccc7VSeQVDLLnuqZDLJb+T', 'LoadingProgressCol');
// homePage/script/common/LoadingProgressCol.ts

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
/**加载进度条 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingProgressCol = /** @class */ (function (_super) {
    __extends(LoadingProgressCol, _super);
    function LoadingProgressCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progressLabel = null;
        _this.progressBar = null;
        _this.barSpr = null;
        _this.initProgress = 0;
        _this.isStart = false;
        _this.isFinish = false;
        _this.resolve = null;
        _this.curProgress = 0;
        return _this;
    }
    LoadingProgressCol.prototype.startProgressAnim = function () {
        this.node.active = true;
        this.isStart = true;
        this.curProgress = this.initProgress;
        this.progressBar.progress = this.curProgress;
        this.barSpr.fillRange = this.curProgress;
    };
    LoadingProgressCol.prototype.finishProgress = function () {
        var _this = this;
        this.isFinish = true;
        return new Promise(function (resolve, reject) {
            _this.resolve = resolve;
        });
    };
    LoadingProgressCol.prototype.update = function (dt) {
        if (!this.isStart) {
            return;
        }
        if (this.isFinish) {
            this.curProgress += 0.1;
        }
        else {
            if (this.curProgress <= 0.99) {
                this.curProgress += ((1 - this.curProgress) / 500);
            }
        }
        if (this.curProgress > 1) {
            console.log("LoadingCol.ts=>update:进度条已满");
            this.curProgress = 1;
        }
        var proLabel = this.curProgress * 100;
        var pre = Number(proLabel.toFixed(0));
        this.progressLabel.string = Math.min(99, pre) + "%";
        this.progressBar.progress = this.curProgress;
        this.barSpr.fillRange = this.curProgress;
        if (this.curProgress >= 1 && this.isStart) {
            console.log("进度条结束");
            this.isStart = false;
            this.isFinish = false;
            this.resolve();
        }
    };
    LoadingProgressCol.prototype.hideLoadNode = function () {
        this.node.active = false;
    };
    __decorate([
        property(cc.Label)
    ], LoadingProgressCol.prototype, "progressLabel", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], LoadingProgressCol.prototype, "progressBar", void 0);
    __decorate([
        property(cc.Sprite)
    ], LoadingProgressCol.prototype, "barSpr", void 0);
    __decorate([
        property
    ], LoadingProgressCol.prototype, "initProgress", void 0);
    LoadingProgressCol = __decorate([
        ccclass
    ], LoadingProgressCol);
    return LoadingProgressCol;
}(cc.Component));
exports.default = LoadingProgressCol;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxMb2FkaW5nUHJvZ3Jlc3NDb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsV0FBVztBQUNMLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBcUVDO1FBbEVXLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBR3ZDLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUduQyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR2pCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixhQUFPLEdBQVEsSUFBSSxDQUFDO1FBQ3BCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDOztJQW9EcEMsQ0FBQztJQWxEVSw4Q0FBaUIsR0FBeEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM3QyxDQUFDO0lBRU0sMkNBQWMsR0FBckI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxtQ0FBTSxHQUFiLFVBQWMsRUFBVTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLE9BQU87U0FDVjtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDO1NBQzNCO2FBQU07WUFDSCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFO2dCQUMxQixJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQ3REO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztTQUN4QjtRQUVELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3RDLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUV6QyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBRU0seUNBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQWhFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZEQUNvQjtJQUd2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzJEQUNVO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ0s7SUFHekI7UUFEQyxRQUFROzREQUN3QjtJQVpoQixrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQXFFdEM7SUFBRCx5QkFBQztDQXJFRCxBQXFFQyxDQXJFK0MsRUFBRSxDQUFDLFNBQVMsR0FxRTNEO2tCQXJFb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKuWKoOi9vei/m+W6puadoSAqL1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ1Byb2dyZXNzQ29sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHByb2dyZXNzTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwcm9ncmVzc0JhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBiYXJTcHI6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcml2YXRlIGluaXRQcm9ncmVzczogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGlzU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNGaW5pc2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgcmVzb2x2ZTogYW55ID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VyUHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIHN0YXJ0UHJvZ3Jlc3NBbmltKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNTdGFydCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jdXJQcm9ncmVzcyA9IHRoaXMuaW5pdFByb2dyZXNzO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSB0aGlzLmN1clByb2dyZXNzO1xyXG4gICAgICAgIHRoaXMuYmFyU3ByLmZpbGxSYW5nZSA9IHRoaXMuY3VyUHJvZ3Jlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmlzaFByb2dyZXNzKCkge1xyXG4gICAgICAgIHRoaXMuaXNGaW5pc2ggPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNTdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0ZpbmlzaCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1clByb2dyZXNzICs9IDAuMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJQcm9ncmVzcyA8PSAwLjk5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1clByb2dyZXNzICs9ICgoMSAtIHRoaXMuY3VyUHJvZ3Jlc3MpIC8gNTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jdXJQcm9ncmVzcyA+IDEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nQ29sLnRzPT51cGRhdGU66L+b5bqm5p2h5bey5ruhXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmN1clByb2dyZXNzID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwcm9MYWJlbCA9IHRoaXMuY3VyUHJvZ3Jlc3MgKiAxMDA7XHJcbiAgICAgICAgbGV0IHByZSA9IE51bWJlcihwcm9MYWJlbC50b0ZpeGVkKDApKTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzTGFiZWwuc3RyaW5nID0gTWF0aC5taW4oOTksIHByZSkgKyBcIiVcIjtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID0gdGhpcy5jdXJQcm9ncmVzcztcclxuICAgICAgICB0aGlzLmJhclNwci5maWxsUmFuZ2UgPSB0aGlzLmN1clByb2dyZXNzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJQcm9ncmVzcyA+PSAxICYmIHRoaXMuaXNTdGFydCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIui/m+W6puadoee7k+adn1wiKVxyXG4gICAgICAgICAgICB0aGlzLmlzU3RhcnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpbmlzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGVMb2FkTm9kZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/MyPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38885jjaV9AGrXyfh9I2It/', 'MyPool');
// homePage/script/common/MyPool.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbManager_1 = require("../manager/AbManager");
var AbRef_1 = require("./AbRef");
var MyPool = /** @class */ (function () {
    function MyPool() {
    }
    MyPool.getObj = function (pre) {
        if (!pre)
            return null;
        var pool = this.poolMap.get(pre._uuid);
        if (pool) {
            var node = pool.get();
            if (node && cc.isValid(node)) {
                return node;
            }
            else {
                return cc.instantiate(pre);
            }
        }
        else {
            this.poolMap.set(pre._uuid, new cc.NodePool());
            return cc.instantiate(pre);
        }
    };
    MyPool.putObj = function (node) {
        if (!node || !cc.isValid(node, true))
            return;
        if (node._prefab) {
            var uuid = node._prefab.asset._uuid;
            var pool = this.poolMap.get(uuid);
            if (pool) {
                if (node._prefab.asset.refCount <= 1) {
                    node._prefab.asset.addRef();
                }
                node.removeFromParent(false);
                pool.put(node);
            }
            else {
                node.walk(function (cNode) {
                    var abRef = cNode.getComponent(AbRef_1.default);
                    if (abRef)
                        abRef.decRef();
                }, null);
                AbManager_1.AbManager.decRef(uuid);
                node.removeFromParent(false);
                node.destroy();
            }
        }
        else {
            node.removeFromParent(false);
            node.destroy();
        }
    };
    MyPool.poolMap = new Map();
    return MyPool;
}());
exports.default = MyPool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxNeVBvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBaUQ7QUFDakQsaUNBQTRCO0FBRTVCO0lBQUE7SUE2Q0EsQ0FBQztJQXpDaUIsYUFBTSxHQUFwQixVQUFxQixHQUFjO1FBQy9CLElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0gsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUMvQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBRWEsYUFBTSxHQUFwQixVQUFxQixJQUFhO1FBQzlCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7WUFBRSxPQUFPO1FBQzdDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNwQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxJQUFJLElBQUksRUFBRTtnQkFDTixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUMvQjtnQkFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQWM7b0JBQ3JCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUM7b0JBQ3RDLElBQUksS0FBSzt3QkFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzlCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFDUixxQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEI7U0FDSjthQUFNO1lBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQjtJQUNMLENBQUM7SUExQ2MsY0FBTyxHQUE2QixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBMkNqRSxhQUFDO0NBN0NELEFBNkNDLElBQUE7a0JBN0NvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJNYW5hZ2VyIH0gZnJvbSBcIi4uL21hbmFnZXIvQWJNYW5hZ2VyXCI7XHJcbmltcG9ydCBBYlJlZiBmcm9tIFwiLi9BYlJlZlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlQb29sIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBwb29sTWFwOiBNYXA8c3RyaW5nLCBjYy5Ob2RlUG9vbD4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRPYmoocHJlOiBjYy5QcmVmYWIpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAoIXByZSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgbGV0IHBvb2wgPSB0aGlzLnBvb2xNYXAuZ2V0KHByZS5fdXVpZCk7XHJcbiAgICAgICAgaWYgKHBvb2wpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBwb29sLmdldCgpO1xyXG4gICAgICAgICAgICBpZiAobm9kZSAmJiBjYy5pc1ZhbGlkKG5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYy5pbnN0YW50aWF0ZShwcmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wb29sTWFwLnNldChwcmUuX3V1aWQsIG5ldyBjYy5Ob2RlUG9vbCgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLmluc3RhbnRpYXRlKHByZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcHV0T2JqKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoIW5vZGUgfHwgIWNjLmlzVmFsaWQobm9kZSwgdHJ1ZSkpIHJldHVybjtcclxuICAgICAgICBpZiAobm9kZS5fcHJlZmFiKSB7XHJcbiAgICAgICAgICAgIGxldCB1dWlkID0gbm9kZS5fcHJlZmFiLmFzc2V0Ll91dWlkO1xyXG4gICAgICAgICAgICBsZXQgcG9vbCA9IHRoaXMucG9vbE1hcC5nZXQodXVpZCk7XHJcbiAgICAgICAgICAgIGlmIChwb29sKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5fcHJlZmFiLmFzc2V0LnJlZkNvdW50IDw9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLl9wcmVmYWIuYXNzZXQuYWRkUmVmKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUZyb21QYXJlbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcG9vbC5wdXQobm9kZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLndhbGsoKGNOb2RlOiBjYy5Ob2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFiUmVmID0gY05vZGUuZ2V0Q29tcG9uZW50KEFiUmVmKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWJSZWYpIGFiUmVmLmRlY1JlZigpO1xyXG4gICAgICAgICAgICAgICAgfSwgbnVsbClcclxuICAgICAgICAgICAgICAgIEFiTWFuYWdlci5kZWNSZWYodXVpZCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUZyb21QYXJlbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub2RlLnJlbW92ZUZyb21QYXJlbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/MyToggle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e844Q/SHREIYXeZ7s74kMn', 'MyToggle');
// homePage/script/common/MyToggle.ts

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
var MyToggleBtn_1 = require("./MyToggleBtn");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MyToggle = /** @class */ (function (_super) {
    __extends(MyToggle, _super);
    function MyToggle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnNodes = [];
        _this.events = [];
        _this.isHandInit = false;
        _this.toggleBtnPre = null;
        _this.isLock = false;
        return _this;
    }
    MyToggle.prototype.onLoad = function () {
        if (!this.isHandInit) {
            this.btnInit();
        }
    };
    MyToggle.prototype.btnInit = function () {
        for (var i = 0; i < this.btnNodes.length; i++) {
            var btnNode = this.btnNodes[i];
            var handler = new cc.Component.EventHandler();
            handler.target = this.node;
            handler.component = "MyToggle";
            handler.handler = "btnClick";
            handler.customEventData = i + "";
            var btn = btnNode.getComponent(cc.Button);
            btn.clickEvents.push(handler);
        }
    };
    MyToggle.prototype.handInit = function (tagArr) {
        var _this = this;
        if (tagArr.length <= 0 || !this.toggleBtnPre)
            return;
        this.btnNodes.forEach(function (v) {
            MyPool_1.default.putObj(v);
        });
        this.btnNodes = [];
        tagArr.forEach(function (v, k) {
            var btn = MyPool_1.default.getObj(_this.toggleBtnPre);
            btn.parent = _this.node;
            var btnSrc = btn.getComponent(MyToggleBtn_1.default);
            if (btnSrc) {
                btnSrc.init(v);
            }
            _this.btnNodes.push(btn);
        });
        this.btnInit();
    };
    MyToggle.prototype.btnClick = function (event, data) {
        if (this.isLock)
            return;
        this.emit(Number(data));
    };
    MyToggle.prototype.selectEmpty = function () {
        for (var i = 0; i < this.btnNodes.length; i++) {
            var btn = this.btnNodes[i];
            btn.children[1].active = false;
        }
    };
    MyToggle.prototype.emit = function (btnIndex) {
        for (var i = 0; i < this.btnNodes.length; i++) {
            var btn = this.btnNodes[i];
            btn.children[1].active = i == btnIndex;
        }
        this.events.forEach(function (value, index, array) {
            value.emit([value, btnIndex]);
        });
    };
    __decorate([
        property(cc.Node)
    ], MyToggle.prototype, "btnNodes", void 0);
    __decorate([
        property({ displayName: "点击事件", type: cc.Component.EventHandler })
    ], MyToggle.prototype, "events", void 0);
    __decorate([
        property({ displayName: "是否手动初始化" })
    ], MyToggle.prototype, "isHandInit", void 0);
    __decorate([
        property({ type: cc.Prefab, visible: function () { return this.isHandInit; } })
    ], MyToggle.prototype, "toggleBtnPre", void 0);
    MyToggle = __decorate([
        ccclass
    ], MyToggle);
    return MyToggle;
}(cc.Component));
exports.default = MyToggle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxNeVRvZ2dsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFDOUIsNkNBQXdDO0FBRWxDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMEVDO1FBdkVHLGNBQVEsR0FBYyxFQUFFLENBQUM7UUFHekIsWUFBTSxHQUFnQyxFQUFFLENBQUM7UUFHekMsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFHNUIsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFZLEtBQUssQ0FBQzs7SUE0RG5DLENBQUM7SUExRGEseUJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBRUQsMEJBQU8sR0FBUDtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7WUFDL0IsT0FBTyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7WUFDN0IsT0FBTyxDQUFDLGVBQWUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2pD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QUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxnQkFBSyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztrREFDckM7SUFaZCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEU1QjtJQUFELGVBQUM7Q0ExRUQsQUEwRUMsQ0ExRXFDLEVBQUUsQ0FBQyxTQUFTLEdBMEVqRDtrQkExRW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXlQb29sIGZyb20gXCIuL015UG9vbFwiO1xyXG5pbXBvcnQgTXlUb2dnbGVCdG4gZnJvbSBcIi4vTXlUb2dnbGVCdG5cIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVRvZ2dsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5Ob2RlczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi54K55Ye75LqL5Lu2XCIsIHR5cGU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIgfSlcclxuICAgIGV2ZW50czogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5piv5ZCm5omL5Yqo5Yid5aeL5YyWXCIgfSlcclxuICAgIGlzSGFuZEluaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIsIHZpc2libGUoKSB7IHJldHVybiB0aGlzLmlzSGFuZEluaXQgfSB9KVxyXG4gICAgdG9nZ2xlQnRuUHJlOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBpc0xvY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0hhbmRJbml0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuSW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidG5Jbml0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idG5Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYnRuTm9kZSA9IHRoaXMuYnRuTm9kZXNbaV07XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgaGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuY29tcG9uZW50ID0gXCJNeVRvZ2dsZVwiO1xyXG4gICAgICAgICAgICBoYW5kbGVyLmhhbmRsZXIgPSBcImJ0bkNsaWNrXCI7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gaSArIFwiXCI7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBidG5Ob2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICBidG4uY2xpY2tFdmVudHMucHVzaChoYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZEluaXQodGFnQXJyOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIGlmICh0YWdBcnIubGVuZ3RoIDw9IDAgfHwgIXRoaXMudG9nZ2xlQnRuUHJlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5idG5Ob2Rlcy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICBNeVBvb2wucHV0T2JqKHYpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5idG5Ob2RlcyA9IFtdO1xyXG4gICAgICAgIHRhZ0Fyci5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBNeVBvb2wuZ2V0T2JqKHRoaXMudG9nZ2xlQnRuUHJlKTtcclxuICAgICAgICAgICAgYnRuLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgbGV0IGJ0blNyYyA9IGJ0bi5nZXRDb21wb25lbnQoTXlUb2dnbGVCdG4pO1xyXG4gICAgICAgICAgICBpZiAoYnRuU3JjKSB7XHJcbiAgICAgICAgICAgICAgICBidG5TcmMuaW5pdCh2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJ0bk5vZGVzLnB1c2goYnRuKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuYnRuSW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ0bkNsaWNrKGV2ZW50LCBkYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0xvY2spIHJldHVybjtcclxuICAgICAgICB0aGlzLmVtaXQoTnVtYmVyKGRhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RFbXB0eSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnRuTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMuYnRuTm9kZXNbaV07XHJcbiAgICAgICAgICAgIGJ0bi5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW1pdChidG5JbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ0bk5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLmJ0bk5vZGVzW2ldO1xyXG4gICAgICAgICAgICBidG4uY2hpbGRyZW5bMV0uYWN0aXZlID0gaSA9PSBidG5JbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaCgodmFsdWU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsIGluZGV4OiBudW1iZXIsIGFycmF5OiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10pID0+IHtcclxuICAgICAgICAgICAgdmFsdWUuZW1pdChbdmFsdWUsIGJ0bkluZGV4XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/MyToggleBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '952eaNP4uRF0Yoi/iJgUjaK', 'MyToggleBtn');
// homePage/script/common/MyToggleBtn.ts

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
var MyToggleBtn = /** @class */ (function (_super) {
    __extends(MyToggleBtn, _super);
    function MyToggleBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nameLabs = [];
        return _this;
    }
    MyToggleBtn.prototype.init = function (name) {
        if (this.nameLabs.length > 0) {
            this.nameLabs.forEach(function (v) {
                v.string = name;
            });
        }
    };
    __decorate([
        property(cc.Label)
    ], MyToggleBtn.prototype, "nameLabs", void 0);
    MyToggleBtn = __decorate([
        ccclass
    ], MyToggleBtn);
    return MyToggleBtn;
}(cc.Component));
exports.default = MyToggleBtn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxNeVRvZ2dsZUJ0bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQVlDO1FBVEcsY0FBUSxHQUFlLEVBQUUsQ0FBQzs7SUFTOUIsQ0FBQztJQVBHLDBCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUNuQixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQTtTQUNMO0lBQ0wsQ0FBQztJQVJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ087SUFIVCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBWS9CO0lBQUQsa0JBQUM7Q0FaRCxBQVlDLENBWndDLEVBQUUsQ0FBQyxTQUFTLEdBWXBEO2tCQVpvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVRvZ2dsZUJ0biBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbmFtZUxhYnM6IGNjLkxhYmVsW10gPSBbXTtcclxuXHJcbiAgICBpbml0KG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLm5hbWVMYWJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lTGFicy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgdi5zdHJpbmcgPSBuYW1lO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/ParticleSystem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2e3bvguTZJ6pm6cIItv6CZ', 'ParticleSystem');
// homePage/script/common/ParticleSystem.ts

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
var ParticleSystem = /** @class */ (function (_super) {
    __extends(ParticleSystem, _super);
    function ParticleSystem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.particleSystem = null;
        return _this;
    }
    ParticleSystem.prototype.onEnable = function () {
        this.particleSystem.resetSystem();
    };
    __decorate([
        property(cc.ParticleSystem)
    ], ParticleSystem.prototype, "particleSystem", void 0);
    ParticleSystem = __decorate([
        ccclass
    ], ParticleSystem);
    return ParticleSystem;
}(cc.Component));
exports.default = ParticleSystem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxQYXJ0aWNsZVN5c3RlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQVFDO1FBTEcsb0JBQWMsR0FBc0IsSUFBSSxDQUFDOztJQUs3QyxDQUFDO0lBSGEsaUNBQVEsR0FBbEI7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFKRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDOzBEQUNhO0lBSHhCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FRbEM7SUFBRCxxQkFBQztDQVJELEFBUUMsQ0FSMkMsRUFBRSxDQUFDLFNBQVMsR0FRdkQ7a0JBUm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY2xlU3lzdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUGFydGljbGVTeXN0ZW0pXHJcbiAgICBwYXJ0aWNsZVN5c3RlbTogY2MuUGFydGljbGVTeXN0ZW0gPSBudWxsO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlU3lzdGVtLnJlc2V0U3lzdGVtKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/MyToggleItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51bd5HGTqJIGa4zWGzER0UO', 'MyToggleItem');
// homePage/script/common/MyToggleItem.ts

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
var MyToggleItem = /** @class */ (function (_super) {
    __extends(MyToggleItem, _super);
    function MyToggleItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.checkedNode = null;
        _this.unCheckNode = null;
        _this.checkEvent = null;
        _this._checked = false;
        _this.onChecked = null;
        return _this;
    }
    Object.defineProperty(MyToggleItem.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (v) {
            this._checked = v;
            if (this.checkedNode)
                this.checkedNode.active = v;
            if (this.unCheckNode)
                this.unCheckNode.enabled = !v;
        },
        enumerable: false,
        configurable: true
    });
    MyToggleItem.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    };
    MyToggleItem.prototype.onTouchStart = function (event) {
        var _a;
        if (this.onChecked && !this.onChecked(this))
            return;
        this.checked = !this.checked;
        (_a = this.checkEvent) === null || _a === void 0 ? void 0 : _a.emit([this.checkEvent.customEventData]);
    };
    __decorate([
        property(cc.Node)
    ], MyToggleItem.prototype, "checkedNode", void 0);
    __decorate([
        property(cc.Sprite)
    ], MyToggleItem.prototype, "unCheckNode", void 0);
    __decorate([
        property(cc.Component.EventHandler)
    ], MyToggleItem.prototype, "checkEvent", void 0);
    __decorate([
        property(cc.Boolean)
    ], MyToggleItem.prototype, "checked", null);
    MyToggleItem = __decorate([
        ccclass
    ], MyToggleItem);
    return MyToggleItem;
}(cc.Component));
exports.default = MyToggleItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxNeVRvZ2dsZUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFnQ0M7UUE5QkcsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHNUIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsZ0JBQVUsR0FBOEIsSUFBSSxDQUFDO1FBRXJDLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFXekIsZUFBUyxHQUFzQyxJQUFJLENBQUM7O0lBV3hELENBQUM7SUFyQkcsc0JBQUksaUNBQU87YUFBWDtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBRUQsVUFBWSxDQUFVO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLElBQUksSUFBSSxDQUFDLFdBQVc7Z0JBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2xELElBQUksSUFBSSxDQUFDLFdBQVc7Z0JBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQzs7O09BTkE7SUFVUyw2QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsS0FBZTs7UUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPO1FBQ3BELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLE1BQUEsSUFBSSxDQUFDLFVBQVUsMENBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsRUFBQztJQUM1RCxDQUFDO0lBN0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztvREFDUztJQU83QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOytDQUtwQjtJQW5CZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWdDaEM7SUFBRCxtQkFBQztDQWhDRCxBQWdDQyxDQWhDeUMsRUFBRSxDQUFDLFNBQVMsR0FnQ3JEO2tCQWhDb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVRvZ2dsZUl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGVja2VkTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHVuQ2hlY2tOb2RlOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKVxyXG4gICAgY2hlY2tFdmVudDogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgZ2V0IGNoZWNrZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XHJcbiAgICB9XHJcbiAgICBAcHJvcGVydHkoY2MuQm9vbGVhbilcclxuICAgIHNldCBjaGVja2VkKHY6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9jaGVja2VkID0gdjtcclxuICAgICAgICBpZiAodGhpcy5jaGVja2VkTm9kZSkgdGhpcy5jaGVja2VkTm9kZS5hY3RpdmUgPSB2O1xyXG4gICAgICAgIGlmICh0aGlzLnVuQ2hlY2tOb2RlKSB0aGlzLnVuQ2hlY2tOb2RlLmVuYWJsZWQgPSAhdjtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoZWNrZWQ6ICh0b2dnbGU6IE15VG9nZ2xlSXRlbSkgPT4gYm9vbGVhbiA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoU3RhcnQoZXZlbnQ6IGNjLlRvdWNoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub25DaGVja2VkICYmICF0aGlzLm9uQ2hlY2tlZCh0aGlzKSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XHJcbiAgICAgICAgdGhpcy5jaGVja0V2ZW50Py5lbWl0KFt0aGlzLmNoZWNrRXZlbnQuY3VzdG9tRXZlbnREYXRhXSlcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/PlayerData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b56b5ix1dBHIuwoPUhjrvi', 'PlayerData');
// homePage/script/common/PlayerData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerData = void 0;
var LevelConfig_1 = require("../config/LevelConfig");
var DataManager_1 = require("../manager/DataManager");
var EventManager_1 = require("../manager/EventManager");
var GamingData_1 = require("./GamingData");
var Global_1 = require("./Global");
var Util_1 = require("./Util");
//玩家数据类
var PlayerData = /** @class */ (function () {
    function PlayerData() {
        /**是否是新玩家 */
        this.isNewUser = true;
        /**上次登录时间 */
        this.lastLoginTime = 0;
        /**上次在线时长 */
        this.lastOnLineDur = 0;
        /**本次离线时长 */
        this.logOutDuration = 0;
        /**今日累计在线时长 */
        this.todayOnlineDuration = 0;
        /**是否播放音效 */
        this.isPlayAudio = true;
        /**是否播放bgm */
        this.isPlayMusic = true;
        /**玩家等级 */
        this.playerLevel = 1;
        /**累计登录天数 */
        this.totalLoginDays = 0;
        /**签到天数 */
        this.signDay = 0;
        /**玩家背包数据 */
        this.packageInfo = [];
        /**关卡数据 */
        this.levelInfos = [];
        /**观看广告次数 */
        this.finishAdTimes = 0;
        /**限时解锁全部关卡的开始时间 */
        this.unlockAlllvTime = -1;
    }
    Object.defineProperty(PlayerData, "ins", {
        get: function () {
            if (!this._ins) {
                this._ins = new PlayerData();
            }
            return this._ins;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 获取指定键名的值。
     * @param key 键名。
     */
    PlayerData.prototype.setLoaclStorageItem = function (key, value) {
        PlayerData.data[key] = value;
        this.saveData();
    };
    PlayerData.prototype.saveData = function () {
        for (var key in PlayerData.ins) {
            if (PlayerData.ins[key] instanceof Function) {
            }
            else {
                PlayerData.data[key] = PlayerData.ins[key];
            }
        }
        cc.sys.localStorage.setItem(PlayerData.gameName, JSON.stringify(PlayerData.data));
    };
    PlayerData.prototype.initData = function () {
        var localStorage = cc.sys.localStorage.getItem(PlayerData.gameName);
        var data = {};
        if (localStorage != null && localStorage != "") {
            data = JSON.parse(localStorage);
        }
        PlayerData.data = data;
        for (var key in PlayerData.ins) {
            if (PlayerData.ins[key] instanceof Function) {
            }
            else {
                PlayerData.ins[key] = PlayerData.data[key] == undefined ? PlayerData.ins[key] : PlayerData.data[key];
            }
        }
        this.initNewUserData();
        this.checkIsNextDay();
        this.logOutDuration = Date.now() - this.lastLoginTime - this.lastOnLineDur;
        this.lastLoginTime = Date.now();
        this.lastOnLineDur = 0;
        this.intervalCheck();
        this.saveData();
    };
    PlayerData.prototype.initNewUserData = function () {
        var _this = this;
        if (!this.isNewUser)
            return;
        this.isNewUser = false;
        this.lastLoginTime = Date.now();
        this.lastOnLineDur = 0;
        var levelConfigs = DataManager_1.default.ins.get(LevelConfig_1.LevelConfigMgr).datas;
        levelConfigs.forEach(function (v) {
            var info = new Global_1.LvInfo();
            info.lv = v.id;
            info.isUnlock = false;
            info.unlockTips = [];
            info.unlockEndings = [];
            _this.levelInfos.push(info);
        });
        this.saveData();
    };
    PlayerData.prototype.checkIsNextDay = function () {
        if (Util_1.Util.isNextDay(this.lastLoginTime, Date.now())) {
            this.totalLoginDays++;
            if (this.signDay > 7) {
                this.signDay = 0;
                this.totalLoginDays = 0;
            }
            this.todayOnlineDuration = 0;
            // if (Util.isNextWeek(this.lastLoginTime, TimeManager.ins.curTime)) {
            // }
        }
    };
    PlayerData.prototype.intervalCheck = function () {
        var _this = this;
        GamingData_1.default.isOnUnlockAllLv = this.unlockAlllvTime > 0 && (Date.now() - this.unlockAlllvTime) / 1000 / 60 / 60 < 24;
        setInterval(function () {
            GamingData_1.default.isOnUnlockAllLv = _this.unlockAlllvTime > 0 && (Date.now() - _this.unlockAlllvTime) / 1000 / 60 / 60 < 24;
        }, 1000);
    };
    /**更新道具数量 */
    PlayerData.prototype.changeItemNum = function (id, num, isRefresh, isSave) {
        if (isRefresh === void 0) { isRefresh = true; }
        if (isSave === void 0) { isSave = true; }
        if (num == 0)
            return;
        num = Math.floor(num);
        var info = this.packageInfo.find(function (v) { return v.id == id; });
        if (!info) {
            info = { id: id, num: num };
            this.packageInfo.push(info);
        }
        else {
            info.num = Math.max(0, info.num + num);
        }
        isSave && this.saveData();
        isRefresh && EventManager_1.EventManager.triggerEvent(Global_1.EventEnum.RefreshPlayerInfo, id);
    };
    /**获得道具数量 */
    PlayerData.prototype.getItemNum = function (id) {
        var info = this.packageInfo.find(function (v) { return v.id == id; });
        if (!info)
            return 0;
        return info.num;
    };
    /**检查消耗是否充足 */
    PlayerData.prototype.checkCostIsEnough = function (costs, isLog, isCost, isPop) {
        if (isLog === void 0) { isLog = false; }
        if (isCost === void 0) { isCost = false; }
        if (isPop === void 0) { isPop = false; }
        var isEnought = true;
        // let logStr = "";
        // costs.forEach((v, k) => {
        //     let config = DataManager.ins.get(Gs_itemMgr).getDataById(v.id);
        //     if (!config) return false;
        //     let isEnought2 = this.getItemNum(v.id) >= v.num;
        //     if (!isEnought2 && isEnought) isEnought = false;
        //     if (!isEnought2 && isLog) {
        //         logStr += config.Name + (k == costs.length - 1 ? "不足" : ",");
        //     }
        //     if (isCost && isEnought2) this.changeItemNum(v.id, -v.num);
        // })
        // if (!isEnought && isLog) {
        //     TipManager.ins.showTip(logStr);
        // }
        // if (isPop && !isEnought) {
        //     // UIManager.ins.openView(UiPath.AddAssetsView).then((view: AddAssetsView) => {
        //     //     view.init()
        //     // })
        // }
        return isEnought;
    };
    PlayerData.prototype.getLvInfo = function (lv) {
        return this.levelInfos.find(function (v) { return v.lv == lv; });
    };
    PlayerData.prototype.passLv = function (lv, resultId) {
        var info = this.levelInfos.find(function (v) { return v.lv == lv; });
        if (info) {
            info.isUnlock = true;
            info.unlockEndings.push(resultId);
            var maxLvConfig = DataManager_1.default.ins.get(LevelConfig_1.LevelConfigMgr).getMaxLvConfig();
            GamingData_1.default.curLv = Math.min(GamingData_1.default.curLv + 1, maxLvConfig.id);
        }
        else {
            console.warn("关卡数据为空");
        }
        this.saveData();
    };
    /**增加一次看广告次数 */
    PlayerData.prototype.addFinishAd = function (sucCb) {
        if (this.unlockAlllvTime > 0)
            return;
        this.finishAdTimes++;
        if (this.finishAdTimes >= 3) {
            this.unlockAlllvTime = Date.now();
            this.finishAdTimes = 0;
            sucCb && sucCb();
            this.saveData();
        }
    };
    /**解锁关卡提示 */
    PlayerData.prototype.unlockLvTip = function (lvConfig, index) {
        if (index === void 0) { index = null; }
        var lvInfo = this.getLvInfo(lvConfig.id);
        if (!lvInfo) {
            console.log("关卡未解锁");
            return;
        }
        if (index != null) {
            var isUnlock = lvInfo.unlockTips.includes(index);
            if (!isUnlock) {
                lvInfo.unlockTips.push(index);
                lvInfo.unlockTips.sort();
                this.saveData();
            }
        }
        else {
            lvInfo.unlockTips.sort();
            for (var i = 0; i < lvConfig.tips.length; i++) {
                if (!lvInfo.unlockTips.includes(i)) {
                    lvInfo.unlockTips.push(i);
                    lvInfo.unlockTips.sort();
                    this.saveData();
                    break;
                }
            }
        }
    };
    PlayerData._ins = null;
    PlayerData.gameName = "GWYS";
    PlayerData.data = {};
    return PlayerData;
}());
exports.PlayerData = PlayerData;
window["PlayerData"] = PlayerData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxQbGF5ZXJEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFvRTtBQUNwRSxzREFBaUQ7QUFDakQsd0RBQXVEO0FBQ3ZELDJDQUFzQztBQUN0QyxtQ0FBNkM7QUFDN0MsK0JBQThCO0FBSTlCLE9BQU87QUFDUDtJQUFBO1FBaUNJLFlBQVk7UUFDTCxjQUFTLEdBQVksSUFBSSxDQUFDO1FBQ2pDLFlBQVk7UUFDTCxrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUNqQyxZQUFZO1FBQ0wsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDakMsWUFBWTtRQUNMLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQ2xDLGNBQWM7UUFDUCx3QkFBbUIsR0FBVyxDQUFDLENBQUM7UUFDdkMsWUFBWTtRQUNMLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQ25DLGFBQWE7UUFDTixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUNuQyxVQUFVO1FBQ0gsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDL0IsWUFBWTtRQUNMLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQ2xDLFVBQVU7UUFDSCxZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLFlBQVk7UUFDTCxnQkFBVyxHQUFrQyxFQUFFLENBQUM7UUFDdkQsVUFBVTtRQUNILGVBQVUsR0FBYSxFQUFFLENBQUM7UUFDakMsWUFBWTtRQUNMLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQ2pDLG1CQUFtQjtRQUNaLG9CQUFlLEdBQVcsQ0FBQyxDQUFDLENBQUM7SUFvS3hDLENBQUM7SUEzTkcsc0JBQWtCLGlCQUFHO2FBQXJCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO2FBQ2hDO1lBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENB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Q0FBQyxRQUFRLEVBQUU7Z0JBQ1gsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNuQjtTQUNKO2FBQU07WUFDSCxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNoQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNoQixNQUFNO2lCQUNUO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUE3TmMsZUFBSSxHQUFlLElBQUksQ0FBQztJQUN6QixtQkFBUSxHQUFXLE1BQU0sQ0FBQztJQVMxQixlQUFJLEdBQUcsRUFBRSxDQUFDO0lBb041QixpQkFBQztDQWhPRCxBQWdPQyxJQUFBO0FBaE9ZLGdDQUFVO0FBaU92QixNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsVUFBVSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExldmVsQ29uZmlnLCB7IExldmVsQ29uZmlnTWdyIH0gZnJvbSBcIi4uL2NvbmZpZy9MZXZlbENvbmZpZ1wiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyIH0gZnJvbSBcIi4uL21hbmFnZXIvRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCBHYW1pbmdEYXRhIGZyb20gXCIuL0dhbWluZ0RhdGFcIjtcclxuaW1wb3J0IHsgRXZlbnRFbnVtLCBMdkluZm8gfSBmcm9tIFwiLi9HbG9iYWxcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuL1V0aWxcIjtcclxuXHJcblxyXG5cclxuLy/njqnlrrbmlbDmja7nsbtcclxuZXhwb3J0IGNsYXNzIFBsYXllckRhdGEge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnM6IFBsYXllckRhdGEgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBnYW1lTmFtZTogc3RyaW5nID0gXCJHV1lTXCI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zKCk6IFBsYXllckRhdGEge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lucyA9IG5ldyBQbGF5ZXJEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkYXRhID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmjIflrprplK7lkI3nmoTlgLzjgIJcclxuICAgICAqIEBwYXJhbSBrZXkg6ZSu5ZCN44CCXHJcbiAgICAgKi9cclxuICAgIHNldExvYWNsU3RvcmFnZUl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBQbGF5ZXJEYXRhLmRhdGFba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2F2ZURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlRGF0YSgpIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gUGxheWVyRGF0YS5pbnMpIHtcclxuICAgICAgICAgICAgaWYgKFBsYXllckRhdGEuaW5zW2tleV0gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgUGxheWVyRGF0YS5kYXRhW2tleV0gPSBQbGF5ZXJEYXRhLmluc1trZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShQbGF5ZXJEYXRhLmdhbWVOYW1lLCBKU09OLnN0cmluZ2lmeShQbGF5ZXJEYXRhLmRhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmmK/lkKbmmK/mlrDnjqnlrrYgKi9cclxuICAgIHB1YmxpYyBpc05ld1VzZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgLyoq5LiK5qyh55m75b2V5pe26Ze0ICovXHJcbiAgICBwdWJsaWMgbGFzdExvZ2luVGltZTogbnVtYmVyID0gMDtcclxuICAgIC8qKuS4iuasoeWcqOe6v+aXtumVvyAqL1xyXG4gICAgcHVibGljIGxhc3RPbkxpbmVEdXI6IG51bWJlciA9IDA7XHJcbiAgICAvKirmnKzmrKHnprvnur/ml7bplb8gKi9cclxuICAgIHB1YmxpYyBsb2dPdXREdXJhdGlvbjogbnVtYmVyID0gMDtcclxuICAgIC8qKuS7iuaXpee0r+iuoeWcqOe6v+aXtumVvyAqL1xyXG4gICAgcHVibGljIHRvZGF5T25saW5lRHVyYXRpb246IG51bWJlciA9IDA7XHJcbiAgICAvKirmmK/lkKbmkq3mlL7pn7PmlYggKi9cclxuICAgIHB1YmxpYyBpc1BsYXlBdWRpbzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAvKirmmK/lkKbmkq3mlL5iZ20gKi9cclxuICAgIHB1YmxpYyBpc1BsYXlNdXNpYzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAvKirnjqnlrrbnrYnnuqcgKi9cclxuICAgIHB1YmxpYyBwbGF5ZXJMZXZlbDogbnVtYmVyID0gMTtcclxuICAgIC8qKue0r+iuoeeZu+W9leWkqeaVsCAqL1xyXG4gICAgcHVibGljIHRvdGFsTG9naW5EYXlzOiBudW1iZXIgPSAwO1xyXG4gICAgLyoq562+5Yiw5aSp5pWwICovXHJcbiAgICBwdWJsaWMgc2lnbkRheTogbnVtYmVyID0gMDtcclxuICAgIC8qKueOqeWutuiDjOWMheaVsOaNriAqL1xyXG4gICAgcHVibGljIHBhY2thZ2VJbmZvOiB7IGlkOiBudW1iZXIsIG51bTogbnVtYmVyIH1bXSA9IFtdO1xyXG4gICAgLyoq5YWz5Y2h5pWw5o2uICovXHJcbiAgICBwdWJsaWMgbGV2ZWxJbmZvczogTHZJbmZvW10gPSBbXTtcclxuICAgIC8qKuingueci+W5v+WRiuasoeaVsCAqL1xyXG4gICAgcHVibGljIGZpbmlzaEFkVGltZXM6IG51bWJlciA9IDA7XHJcbiAgICAvKirpmZDml7bop6PplIHlhajpg6jlhbPljaHnmoTlvIDlp4vml7bpl7QgKi9cclxuICAgIHB1YmxpYyB1bmxvY2tBbGxsdlRpbWU6IG51bWJlciA9IC0xO1xyXG5cclxuICAgIHB1YmxpYyBpbml0RGF0YSgpIHtcclxuICAgICAgICBsZXQgbG9jYWxTdG9yYWdlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFBsYXllckRhdGEuZ2FtZU5hbWUpO1xyXG4gICAgICAgIGxldCBkYXRhID0ge307XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZSAhPSBudWxsICYmIGxvY2FsU3RvcmFnZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFBsYXllckRhdGEuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIFBsYXllckRhdGEuaW5zKSB7XHJcbiAgICAgICAgICAgIGlmIChQbGF5ZXJEYXRhLmluc1trZXldIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFBsYXllckRhdGEuaW5zW2tleV0gPSBQbGF5ZXJEYXRhLmRhdGFba2V5XSA9PSB1bmRlZmluZWQgPyBQbGF5ZXJEYXRhLmluc1trZXldIDogUGxheWVyRGF0YS5kYXRhW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0TmV3VXNlckRhdGEoKTtcclxuICAgICAgICB0aGlzLmNoZWNrSXNOZXh0RGF5KCk7XHJcbiAgICAgICAgdGhpcy5sb2dPdXREdXJhdGlvbiA9IERhdGUubm93KCkgLSB0aGlzLmxhc3RMb2dpblRpbWUgLSB0aGlzLmxhc3RPbkxpbmVEdXI7XHJcbiAgICAgICAgdGhpcy5sYXN0TG9naW5UaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB0aGlzLmxhc3RPbkxpbmVEdXIgPSAwO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxDaGVjaygpO1xyXG4gICAgICAgIHRoaXMuc2F2ZURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXROZXdVc2VyRGF0YSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNOZXdVc2VyKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc05ld1VzZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxhc3RMb2dpblRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMubGFzdE9uTGluZUR1ciA9IDA7XHJcbiAgICAgICAgbGV0IGxldmVsQ29uZmlncyA9IERhdGFNYW5hZ2VyLmlucy5nZXQoTGV2ZWxDb25maWdNZ3IpLmRhdGFzO1xyXG4gICAgICAgIGxldmVsQ29uZmlncy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW5mbyA9IG5ldyBMdkluZm8oKTtcclxuICAgICAgICAgICAgaW5mby5sdiA9IHYuaWQ7XHJcbiAgICAgICAgICAgIGluZm8uaXNVbmxvY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgaW5mby51bmxvY2tUaXBzID0gW107XHJcbiAgICAgICAgICAgIGluZm8udW5sb2NrRW5kaW5ncyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsSW5mb3MucHVzaChpbmZvKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2F2ZURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lzTmV4dERheSgpIHtcclxuICAgICAgICBpZiAoVXRpbC5pc05leHREYXkodGhpcy5sYXN0TG9naW5UaW1lLCBEYXRlLm5vdygpKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsTG9naW5EYXlzKys7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNpZ25EYXkgPiA3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpZ25EYXkgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbExvZ2luRGF5cyA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50b2RheU9ubGluZUR1cmF0aW9uID0gMDtcclxuICAgICAgICAgICAgLy8gaWYgKFV0aWwuaXNOZXh0V2Vlayh0aGlzLmxhc3RMb2dpblRpbWUsIFRpbWVNYW5hZ2VyLmlucy5jdXJUaW1lKSkge1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGludGVydmFsQ2hlY2soKSB7XHJcbiAgICAgICAgR2FtaW5nRGF0YS5pc09uVW5sb2NrQWxsTHYgPSB0aGlzLnVubG9ja0FsbGx2VGltZSA+IDAgJiYgKERhdGUubm93KCkgLSB0aGlzLnVubG9ja0FsbGx2VGltZSkgLyAxMDAwIC8gNjAgLyA2MCA8IDI0O1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgR2FtaW5nRGF0YS5pc09uVW5sb2NrQWxsTHYgPSB0aGlzLnVubG9ja0FsbGx2VGltZSA+IDAgJiYgKERhdGUubm93KCkgLSB0aGlzLnVubG9ja0FsbGx2VGltZSkgLyAxMDAwIC8gNjAgLyA2MCA8IDI0O1xyXG4gICAgICAgIH0sIDEwMDApXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5pu05paw6YGT5YW35pWw6YePICovXHJcbiAgICBjaGFuZ2VJdGVtTnVtKGlkOiBudW1iZXIsIG51bTogbnVtYmVyLCBpc1JlZnJlc2g6IGJvb2xlYW4gPSB0cnVlLCBpc1NhdmU6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKG51bSA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgbnVtID0gTWF0aC5mbG9vcihudW0pO1xyXG4gICAgICAgIGxldCBpbmZvID0gdGhpcy5wYWNrYWdlSW5mby5maW5kKHYgPT4gdi5pZCA9PSBpZCk7XHJcbiAgICAgICAgaWYgKCFpbmZvKSB7XHJcbiAgICAgICAgICAgIGluZm8gPSB7IGlkOiBpZCwgbnVtOiBudW0gfTtcclxuICAgICAgICAgICAgdGhpcy5wYWNrYWdlSW5mby5wdXNoKGluZm8pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGluZm8ubnVtID0gTWF0aC5tYXgoMCwgaW5mby5udW0gKyBudW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc1NhdmUgJiYgdGhpcy5zYXZlRGF0YSgpO1xyXG4gICAgICAgIGlzUmVmcmVzaCAmJiBFdmVudE1hbmFnZXIudHJpZ2dlckV2ZW50KEV2ZW50RW51bS5SZWZyZXNoUGxheWVySW5mbywgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+W+l+mBk+WFt+aVsOmHjyAqL1xyXG4gICAgZ2V0SXRlbU51bShpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGluZm8gPSB0aGlzLnBhY2thZ2VJbmZvLmZpbmQodiA9PiB2LmlkID09IGlkKTtcclxuICAgICAgICBpZiAoIWluZm8pIHJldHVybiAwO1xyXG4gICAgICAgIHJldHVybiBpbmZvLm51bTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmo4Dmn6XmtojogJfmmK/lkKblhYXotrMgKi9cclxuICAgIGNoZWNrQ29zdElzRW5vdWdoKGNvc3RzOiB7IGlkOiBudW1iZXIsIG51bTogbnVtYmVyIH1bXSwgaXNMb2c6IGJvb2xlYW4gPSBmYWxzZSwgaXNDb3N0OiBib29sZWFuID0gZmFsc2UsIGlzUG9wOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgaXNFbm91Z2h0ID0gdHJ1ZTtcclxuICAgICAgICAvLyBsZXQgbG9nU3RyID0gXCJcIjtcclxuICAgICAgICAvLyBjb3N0cy5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGxldCBjb25maWcgPSBEYXRhTWFuYWdlci5pbnMuZ2V0KEdzX2l0ZW1NZ3IpLmdldERhdGFCeUlkKHYuaWQpO1xyXG4gICAgICAgIC8vICAgICBpZiAoIWNvbmZpZykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vICAgICBsZXQgaXNFbm91Z2h0MiA9IHRoaXMuZ2V0SXRlbU51bSh2LmlkKSA+PSB2Lm51bTtcclxuICAgICAgICAvLyAgICAgaWYgKCFpc0Vub3VnaHQyICYmIGlzRW5vdWdodCkgaXNFbm91Z2h0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIGlmICghaXNFbm91Z2h0MiAmJiBpc0xvZykge1xyXG4gICAgICAgIC8vICAgICAgICAgbG9nU3RyICs9IGNvbmZpZy5OYW1lICsgKGsgPT0gY29zdHMubGVuZ3RoIC0gMSA/IFwi5LiN6LazXCIgOiBcIixcIik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgaWYgKGlzQ29zdCAmJiBpc0Vub3VnaHQyKSB0aGlzLmNoYW5nZUl0ZW1OdW0odi5pZCwgLXYubnVtKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIGlmICghaXNFbm91Z2h0ICYmIGlzTG9nKSB7XHJcbiAgICAgICAgLy8gICAgIFRpcE1hbmFnZXIuaW5zLnNob3dUaXAobG9nU3RyKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKGlzUG9wICYmICFpc0Vub3VnaHQpIHtcclxuICAgICAgICAvLyAgICAgLy8gVUlNYW5hZ2VyLmlucy5vcGVuVmlldyhVaVBhdGguQWRkQXNzZXRzVmlldykudGhlbigodmlldzogQWRkQXNzZXRzVmlldykgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgdmlldy5pbml0KClcclxuICAgICAgICAvLyAgICAgLy8gfSlcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHJldHVybiBpc0Vub3VnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0THZJbmZvKGx2OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sZXZlbEluZm9zLmZpbmQodiA9PiB2Lmx2ID09IGx2KTtcclxuICAgIH1cclxuXHJcbiAgICBwYXNzTHYobHY6IG51bWJlciwgcmVzdWx0SWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBpbmZvID0gdGhpcy5sZXZlbEluZm9zLmZpbmQodiA9PiB2Lmx2ID09IGx2KTtcclxuICAgICAgICBpZiAoaW5mbykge1xyXG4gICAgICAgICAgICBpbmZvLmlzVW5sb2NrID0gdHJ1ZTtcclxuICAgICAgICAgICAgaW5mby51bmxvY2tFbmRpbmdzLnB1c2gocmVzdWx0SWQpO1xyXG4gICAgICAgICAgICBsZXQgbWF4THZDb25maWcgPSBEYXRhTWFuYWdlci5pbnMuZ2V0KExldmVsQ29uZmlnTWdyKS5nZXRNYXhMdkNvbmZpZygpO1xyXG4gICAgICAgICAgICBHYW1pbmdEYXRhLmN1ckx2ID0gTWF0aC5taW4oR2FtaW5nRGF0YS5jdXJMdiArIDEsIG1heEx2Q29uZmlnLmlkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCLlhbPljaHmlbDmja7kuLrnqbpcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zYXZlRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWinuWKoOS4gOasoeeci+W5v+WRiuasoeaVsCAqL1xyXG4gICAgYWRkRmluaXNoQWQoc3VjQ2I6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy51bmxvY2tBbGxsdlRpbWUgPiAwKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5maW5pc2hBZFRpbWVzKys7XHJcbiAgICAgICAgaWYgKHRoaXMuZmluaXNoQWRUaW1lcyA+PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5sb2NrQWxsbHZUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hBZFRpbWVzID0gMDtcclxuICAgICAgICAgICAgc3VjQ2IgJiYgc3VjQ2IoKTtcclxuICAgICAgICAgICAgdGhpcy5zYXZlRGF0YSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirop6PplIHlhbPljaHmj5DnpLogKi9cclxuICAgIHVubG9ja0x2VGlwKGx2Q29uZmlnOiBMZXZlbENvbmZpZywgaW5kZXg6IG51bWJlciA9IG51bGwpIHtcclxuICAgICAgICBsZXQgbHZJbmZvID0gdGhpcy5nZXRMdkluZm8obHZDb25maWcuaWQpO1xyXG4gICAgICAgIGlmICghbHZJbmZvKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YWz5Y2h5pyq6Kej6ZSBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbmRleCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBpc1VubG9jayA9IGx2SW5mby51bmxvY2tUaXBzLmluY2x1ZGVzKGluZGV4KTtcclxuICAgICAgICAgICAgaWYgKCFpc1VubG9jaykge1xyXG4gICAgICAgICAgICAgICAgbHZJbmZvLnVubG9ja1RpcHMucHVzaChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBsdkluZm8udW5sb2NrVGlwcy5zb3J0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVEYXRhKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsdkluZm8udW5sb2NrVGlwcy5zb3J0KCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbHZDb25maWcudGlwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsdkluZm8udW5sb2NrVGlwcy5pbmNsdWRlcyhpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGx2SW5mby51bmxvY2tUaXBzLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbHZJbmZvLnVubG9ja1RpcHMuc29ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG53aW5kb3dbXCJQbGF5ZXJEYXRhXCJdID0gUGxheWVyRGF0YTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/ProgressAnimCol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '306552pUgBKuonrUjN6FyVL', 'ProgressAnimCol');
// homePage/script/common/ProgressAnimCol.ts

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
var ProgressAnimCol = /** @class */ (function (_super) {
    __extends(ProgressAnimCol, _super);
    function ProgressAnimCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.proLab = null;
        _this.proBar = null;
        _this.barSpr = null;
        _this.pendant = null;
        _this.initPro = 0;
        _this.speed = 0.01;
        _this.isOnAnim = false;
        _this.target = 0;
        _this.upgradeNum = 0;
        _this.timer = 0;
        _this.upgrageCb = null;
        _this.endCb = null;
        _this.progressCb = null;
        _this._curProgress = 0;
        return _this;
    }
    Object.defineProperty(ProgressAnimCol.prototype, "curProgress", {
        get: function () {
            return this._curProgress;
        },
        set: function (value) {
            this._curProgress = value;
            this.proBar.progress = value;
            this.barSpr.fillRange = value;
            if (this.proLab) {
                // this.proLab.string = (value * 100).toFixed(0) + "%";
                this.proLab.string = Math.floor(value * 100) + "%";
            }
            if (this.pendant) {
                var fixWidth = this.barSpr.node.width - 40;
                this.pendant.x = -fixWidth / 2 + value * fixWidth;
            }
            this.progressCb && this.progressCb(value);
        },
        enumerable: false,
        configurable: true
    });
    ProgressAnimCol.prototype.init = function () {
        this.curProgress = this.initPro;
        this.isOnAnim = false;
        this.target = null;
    };
    ProgressAnimCol.prototype.setProgress = function (value) {
        this.isOnAnim = false;
        this.curProgress = value;
    };
    ProgressAnimCol.prototype.progressAnim = function (targetPro, upgradeNum, upgrageCb, endCb, progressCb) {
        if (upgradeNum === void 0) { upgradeNum = 0; }
        if (upgrageCb === void 0) { upgrageCb = null; }
        if (endCb === void 0) { endCb = null; }
        if (progressCb === void 0) { progressCb = null; }
        this.upgradeNum = upgradeNum;
        this.upgrageCb = upgrageCb;
        this.endCb = endCb;
        this.progressCb = progressCb;
        if (this.curProgress >= targetPro && upgradeNum == 0) {
            this.endCb && this.endCb();
            this.endCb = null;
            return;
        }
        this.timer = 0;
        this.isOnAnim = true;
        this.target = targetPro;
    };
    ProgressAnimCol.prototype.update = function (dt) {
        if (!this.isOnAnim)
            return;
        this.curProgress += dt * this.speed;
        if (this.upgradeNum > 0 && this.timer < this.upgradeNum) {
            if (this.curProgress >= 1) {
                this.timer++;
                this.curProgress = 0;
                this.upgrageCb && this.upgrageCb();
            }
        }
        else {
            if (this.curProgress >= this.target) {
                this.isOnAnim = false;
                this.curProgress = this.target;
                this.target = null;
                this.endCb && this.endCb();
                this.endCb = null;
                this.upgrageCb = null;
                this.progressCb = null;
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], ProgressAnimCol.prototype, "proLab", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], ProgressAnimCol.prototype, "proBar", void 0);
    __decorate([
        property(cc.Sprite)
    ], ProgressAnimCol.prototype, "barSpr", void 0);
    __decorate([
        property(cc.Node)
    ], ProgressAnimCol.prototype, "pendant", void 0);
    __decorate([
        property
    ], ProgressAnimCol.prototype, "initPro", void 0);
    __decorate([
        property
    ], ProgressAnimCol.prototype, "speed", void 0);
    ProgressAnimCol = __decorate([
        ccclass
    ], ProgressAnimCol);
    return ProgressAnimCol;
}(cc.Component));
exports.default = ProgressAnimCol;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxQcm9ncmVzc0FuaW1Db2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUErRkM7UUE1RkcsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUc5QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUdwQixXQUFLLEdBQVcsSUFBSSxDQUFDO1FBRWIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsZUFBUyxHQUFlLElBQUksQ0FBQztRQUM3QixXQUFLLEdBQWUsSUFBSSxDQUFDO1FBQ3pCLGdCQUFVLEdBQTRCLElBQUksQ0FBQztRQUUzQyxrQkFBWSxHQUFXLENBQUMsQ0FBQzs7SUFtRXJDLENBQUM7SUFsRUcsc0JBQVcsd0NBQVc7YUFBdEI7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQUNELFVBQXVCLEtBQWE7WUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsdURBQXVEO2dCQUN2RCxJQUFJLENBQUMsTUFBTSxD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SUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUMxQjtTQUNKO0lBQ0wsQ0FBQztJQTNGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bURBQ0s7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNNO0lBR3hCO1FBREMsUUFBUTtvREFDVztJQUdwQjtRQURDLFFBQVE7a0RBQ1k7SUFsQkosZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQStGbkM7SUFBRCxzQkFBQztDQS9GRCxBQStGQyxDQS9GNEMsRUFBRSxDQUFDLFNBQVMsR0ErRnhEO2tCQS9Gb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3NBbmltQ29sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcm9MYWI6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwcm9CYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgYmFyU3ByOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGVuZGFudDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpbml0UHJvOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc3BlZWQ6IG51bWJlciA9IDAuMDE7XHJcblxyXG4gICAgcHJpdmF0ZSBpc09uQW5pbTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB0YXJnZXQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHVwZ3JhZGVOdW06IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB1cGdyYWdlQ2I6ICgpID0+IHZvaWQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBlbmRDYjogKCkgPT4gdm9pZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHByb2dyZXNzQ2I6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9jdXJQcm9ncmVzczogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBnZXQgY3VyUHJvZ3Jlc3MoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VyUHJvZ3Jlc3M7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGN1clByb2dyZXNzKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9jdXJQcm9ncmVzcyA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMucHJvQmFyLnByb2dyZXNzID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5iYXJTcHIuZmlsbFJhbmdlID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvTGFiKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucHJvTGFiLnN0cmluZyA9ICh2YWx1ZSAqIDEwMCkudG9GaXhlZCgwKSArIFwiJVwiO1xyXG4gICAgICAgICAgICB0aGlzLnByb0xhYi5zdHJpbmcgPSBNYXRoLmZsb29yKHZhbHVlICogMTAwKSArIFwiJVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wZW5kYW50KSB7XHJcbiAgICAgICAgICAgIGxldCBmaXhXaWR0aCA9IHRoaXMuYmFyU3ByLm5vZGUud2lkdGggLSA0MDtcclxuICAgICAgICAgICAgdGhpcy5wZW5kYW50LnggPSAtZml4V2lkdGggLyAyICsgdmFsdWUgKiBmaXhXaWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0NiICYmIHRoaXMucHJvZ3Jlc3NDYih2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJQcm9ncmVzcyA9IHRoaXMuaW5pdFBybztcclxuICAgICAgICB0aGlzLmlzT25BbmltID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRQcm9ncmVzcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pc09uQW5pbSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VyUHJvZ3Jlc3MgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJvZ3Jlc3NBbmltKHRhcmdldFBybzogbnVtYmVyLCB1cGdyYWRlTnVtOiBudW1iZXIgPSAwLCB1cGdyYWdlQ2I6ICgpID0+IHZvaWQgPSBudWxsLCBlbmRDYjogKCkgPT4gdm9pZCA9IG51bGwsIHByb2dyZXNzQ2I6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMudXBncmFkZU51bSA9IHVwZ3JhZGVOdW07XHJcbiAgICAgICAgdGhpcy51cGdyYWdlQ2IgPSB1cGdyYWdlQ2I7XHJcbiAgICAgICAgdGhpcy5lbmRDYiA9IGVuZENiO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NDYiA9IHByb2dyZXNzQ2I7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1clByb2dyZXNzID49IHRhcmdldFBybyAmJiB1cGdyYWRlTnVtID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRDYiAmJiB0aGlzLmVuZENiKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2IgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuaXNPbkFuaW0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0UHJvO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc09uQW5pbSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3VyUHJvZ3Jlc3MgKz0gZHQgKiB0aGlzLnNwZWVkO1xyXG4gICAgICAgIGlmICh0aGlzLnVwZ3JhZGVOdW0gPiAwICYmIHRoaXMudGltZXIgPCB0aGlzLnVwZ3JhZGVOdW0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyUHJvZ3Jlc3MgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lcisrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJQcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZ3JhZ2VDYiAmJiB0aGlzLnVwZ3JhZ2VDYigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyUHJvZ3Jlc3MgPj0gdGhpcy50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNPbkFuaW0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyUHJvZ3Jlc3MgPSB0aGlzLnRhcmdldDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2IgJiYgdGhpcy5lbmRDYigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZ3JhZ2VDYiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQ2IgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/ScreenShot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e58dbFhbDtCQo4IqBQxtwEa', 'ScreenShot');
// homePage/script/common/ScreenShot.ts

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
var ScreenShot = /** @class */ (function (_super) {
    __extends(ScreenShot, _super);
    function ScreenShot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.shotNode = null;
        _this.shotTexture2D = null;
        return _this;
    }
    ScreenShot.prototype.shot = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var texture = new cc.RenderTexture();
            texture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc["gfx"].RB_FMT_D24S8); //RB_FMT_D24S8 RB_FMT_S8
            _this.camera.targetTexture = texture;
            _this.camera.enabled = true;
            _this.scheduleOnce(function () {
                var data = texture.readPixels();
                var picData = _this.filpYImage(data, texture.width, texture.height);
                var shotTexture2D = new cc.Texture2D();
                shotTexture2D.initWithData(picData, 32, texture.width, texture.height);
                _this.camera.enabled = false;
                resolve(shotTexture2D);
            }, 0);
        });
    };
    ScreenShot.prototype.filpYImage = function (data, width, height) {
        // create the data array
        var picData = new Uint8Array(width * height * 4);
        var rowBytes = width * 4;
        for (var row = 0; row < height; row++) {
            var srow = height - 1 - row;
            var start = srow * width * 4;
            var reStart = row * width * 4;
            // save the piexls data
            for (var i = 0; i < rowBytes; i++) {
                // 透明度修正
                if (i % 4 == 3) {
                    data[start + i] = Math.round(Math.sqrt(data[start + i] / 255) * 255);
                    if (data[start + i] > 220) {
                        data[start + i] = 255;
                    }
                }
                picData[reStart + i] = data[start + i];
            }
        }
        return picData;
    };
    ScreenShot.prototype.shot2 = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var texture = new cc.RenderTexture();
            texture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc["gfx"].RB_FMT_D24S8);
            _this.camera.targetTexture = texture;
            _this.camera.enabled = true;
            _this.scheduleOnce(function () {
                _this.camera.enabled = false;
                resolve(texture);
            }, 0);
        });
    };
    __decorate([
        property(cc.Camera)
    ], ScreenShot.prototype, "camera", void 0);
    ScreenShot = __decorate([
        ccclass
    ], ScreenShot);
    return ScreenShot;
}(cc.Component));
exports.default = ScreenShot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxTY3JlZW5TaG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBK0RDO1FBNURHLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFbEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixtQkFBYSxHQUFpQixJQUFJLENBQUM7O0lBeUQ5QyxDQUFDO0lBdkRVLHlCQUFJLEdBQVg7UUFBQSxpQkFlQztRQWRHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixJQUFJLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBLHdCQUF3QjtZQUNsSCxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7WUFDcEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNoQyxJQUFJLE9BQU8sR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkUsSUFBSSxhQUFhLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFF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QkEvRG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlblNob3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHNob3ROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBzaG90VGV4dHVyZTJEOiBjYy5UZXh0dXJlMkQgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzaG90KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcclxuICAgICAgICAgICAgdGV4dHVyZS5pbml0V2l0aFNpemUoY2MudmlzaWJsZVJlY3Qud2lkdGgsIGNjLnZpc2libGVSZWN0LmhlaWdodCwgY2NbXCJnZnhcIl0uUkJfRk1UX0QyNFM4KTsvL1JCX0ZNVF9EMjRTOCBSQl9GTVRfUzhcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEudGFyZ2V0VGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRleHR1cmUucmVhZFBpeGVscygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBpY0RhdGEgPSB0aGlzLmZpbHBZSW1hZ2UoZGF0YSwgdGV4dHVyZS53aWR0aCwgdGV4dHVyZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNob3RUZXh0dXJlMkQgPSBuZXcgY2MuVGV4dHVyZTJEKCk7XHJcbiAgICAgICAgICAgICAgICBzaG90VGV4dHVyZTJELmluaXRXaXRoRGF0YShwaWNEYXRhLCAzMiwgdGV4dHVyZS53aWR0aCwgdGV4dHVyZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShzaG90VGV4dHVyZTJEKTtcclxuICAgICAgICAgICAgfSwgMClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZpbHBZSW1hZ2UoZGF0YSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgZGF0YSBhcnJheVxyXG4gICAgICAgIGxldCBwaWNEYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KTtcclxuICAgICAgICBsZXQgcm93Qnl0ZXMgPSB3aWR0aCAqIDQ7XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgaGVpZ2h0OyByb3crKykge1xyXG4gICAgICAgICAgICBsZXQgc3JvdyA9IGhlaWdodCAtIDEgLSByb3c7XHJcbiAgICAgICAgICAgIGxldCBzdGFydCA9IHNyb3cgKiB3aWR0aCAqIDQ7XHJcbiAgICAgICAgICAgIGxldCByZVN0YXJ0ID0gcm93ICogd2lkdGggKiA0O1xyXG4gICAgICAgICAgICAvLyBzYXZlIHRoZSBwaWV4bHMgZGF0YVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0J5dGVzOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDpgI/mmI7luqbkv67mraNcclxuICAgICAgICAgICAgICAgIGlmIChpICUgNCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtzdGFydCArIGldID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoZGF0YVtzdGFydCArIGldIC8gMjU1KSAqIDI1NSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtzdGFydCArIGldID4gMjIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbc3RhcnQgKyBpXSA9IDI1NTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcGljRGF0YVtyZVN0YXJ0ICsgaV0gPSBkYXRhW3N0YXJ0ICsgaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBpY0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3QyKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcclxuXHJcbiAgICAgICAgICAgIHRleHR1cmUuaW5pdFdpdGhTaXplKGNjLnZpc2libGVSZWN0LndpZHRoLCBjYy52aXNpYmxlUmVjdC5oZWlnaHQsIGNjW1wiZ2Z4XCJdLlJCX0ZNVF9EMjRTOCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnRhcmdldFRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgfSwgMClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/PoolObjBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37f1c9DXDJApIwGD9dBlcfr', 'PoolObjBase');
// homePage/script/common/PoolObjBase.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var MyPool_1 = require("./MyPool");
var PoolObjBase = /** @class */ (function (_super) {
    __extends(PoolObjBase, _super);
    function PoolObjBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PoolObjBase.prototype.destroySelf = function () {
        MyPool_1.default.putObj(this.node);
    };
    return PoolObjBase;
}(cc.Component));
exports.default = PoolObjBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxQb29sT2JqQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFFOUI7SUFBeUMsK0JBQVk7SUFBckQ7O0lBS0EsQ0FBQztJQUhHLGlDQUFXLEdBQVg7UUFDSSxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FMQSxBQUtDLENBTHdDLEVBQUUsQ0FBQyxTQUFTLEdBS3BEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE15UG9vbCBmcm9tIFwiLi9NeVBvb2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9vbE9iakJhc2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgZGVzdHJveVNlbGYoKSB7XG4gICAgICAgIE15UG9vbC5wdXRPYmoodGhpcy5ub2RlKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/PromptView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cad9a1wjk9Bo4iqW4bFO9gQ', 'PromptView');
// homePage/script/common/PromptView.ts

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
var PromptView = /** @class */ (function (_super) {
    __extends(PromptView, _super);
    function PromptView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = null;
        _this.curAnim = null;
        _this.isShowing = false;
        return _this;
    }
    PromptView.prototype.init = function (Tiptext) {
        this.text.string = Tiptext;
        this.show();
    };
    PromptView.prototype.show = function () {
        var _a;
        if (!cc.isValid(this))
            return;
        (_a = this.curAnim) === null || _a === void 0 ? void 0 : _a.stop();
        if (!this.isShowing) {
            this.node.active = true;
            this.isShowing = true;
            this.curAnim = cc.tween(this.node)
                .set({ opacity: 0 })
                .to(0.2, { opacity: 255 })
                .delay(2)
                .call(this.hide.bind(this))
                .start();
        }
        else {
            this.curAnim = cc.tween(this.node)
                .set({ opacity: 255 })
                .delay(2)
                .call(this.hide.bind(this))
                .start();
        }
    };
    PromptView.prototype.hide = function () {
        var _this = this;
        var _a;
        if (!cc.isValid(this))
            return;
        (_a = this.curAnim) === null || _a === void 0 ? void 0 : _a.stop();
        this.isShowing = false;
        this.curAnim = cc.tween(this.node)
            .to(0.2, { opacity: 0 })
            .call(function () {
            _this.node.active = false;
            _this.curAnim = null;
        })
            .start();
    };
    __decorate([
        property(cc.Label)
    ], PromptView.prototype, "text", void 0);
    PromptView = __decorate([
        ccclass
    ], PromptView);
    return PromptView;
}(cc.Component));
exports.default = PromptView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxQcm9tcHRWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBOENDO1FBNUNHLFVBQUksR0FBYSxJQUFJLENBQUM7UUFFZCxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBRyxLQUFLLENBQUM7O0lBd0M5QixDQUFDO0lBdENHLHlCQUFJLEdBQUosVUFBSyxPQUFlO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELHlCQUFJLEdBQUo7O1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTztRQUM5QixNQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLElBQUksR0FBRztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQzdCLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDbkIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztpQkFDekIsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDUixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzFCLEtBQUssRUFBRSxDQUFDO1NBQ2hCO2FBQU07WUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDN0IsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO2lCQUNyQixLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUIsS0FBSyxFQUFFLENBQUM7U0FDaEI7SUFDTCxDQUFDO0lBRUQseUJBQUksR0FBSjtRQUFBLGlCQVdDOztRQVZHLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU87UUFDOUIsTUFBQSxJQUFJLENBQUMsT0FBTywwQ0FBRSxJQUFJLEdBQUc7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDN0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUN2QixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDekIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQTNDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNHO0lBRkwsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQThDOUI7SUFBRCxpQkFBQztDQTlDRCxBQThDQyxDQTlDdUMsRUFBRSxDQUFDLFNBQVMsR0E4Q25EO2tCQTlDb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvbXB0VmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0ZXh0OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJBbmltOiBjYy5Ud2VlbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBpc1Nob3dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBpbml0KFRpcHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGV4dC5zdHJpbmcgPSBUaXB0ZXh0O1xyXG4gICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKHRoaXMpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jdXJBbmltPy5zdG9wKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU2hvd2luZykge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1Nob3dpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmN1ckFuaW0gPSBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAuc2V0KHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgICAgICAgICAgIC5kZWxheSgyKVxyXG4gICAgICAgICAgICAgICAgLmNhbGwodGhpcy5oaWRlLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1ckFuaW0gPSBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAuc2V0KHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgICAgICAuZGVsYXkoMilcclxuICAgICAgICAgICAgICAgIC5jYWxsKHRoaXMuaGlkZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKHRoaXMpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jdXJBbmltPy5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5pc1Nob3dpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1ckFuaW0gPSBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckFuaW0gPSBudWxsO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/ProgressCol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '22bbf185KRKXZrVxKewslaP', 'ProgressCol');
// homePage/script/common/ProgressCol.ts

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
var ProgressCol = /** @class */ (function (_super) {
    __extends(ProgressCol, _super);
    function ProgressCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progress = null;
        _this.bar = null;
        _this.proLab = null;
        _this.numLab = null;
        _this.isCeil = false;
        _this.total = 0;
        _this.curNum = 0;
        _this.isOnAnim = false;
        _this.speed = 10;
        _this.tarNum = 0;
        _this.cb = null;
        _this.dir = 1;
        return _this;
    }
    ProgressCol.prototype.init = function (total) {
        this.curNum = this.total = total;
        this.refreshBar();
    };
    ProgressCol.prototype.change = function (changeNum, isAnim, cb) {
        if (isAnim === void 0) { isAnim = false; }
        if (cb === void 0) { cb = null; }
        if (isAnim) {
            this.dir = changeNum > 0 ? 1 : -1;
            this.cb = cb;
            this.tarNum = cc.misc.clampf(this.curNum += changeNum, 0, this.total);
            this.isOnAnim = true;
        }
        else {
            this.curNum = cc.misc.clampf(this.curNum += changeNum, 0, this.total);
            this.refreshBar();
        }
    };
    ProgressCol.prototype.setCurNum = function (num, isAnim, cb) {
        if (isAnim === void 0) { isAnim = false; }
        if (cb === void 0) { cb = null; }
        if (isAnim) {
            this.dir = num > this.curNum ? 1 : -1;
            this.cb = cb;
            this.tarNum = cc.misc.clampf(num, 0, this.total);
            this.isOnAnim = true;
        }
        else {
            this.curNum = cc.misc.clampf(num, 0, this.total);
            this.refreshBar();
        }
    };
    ProgressCol.prototype.refreshBar = function () {
        this.bar.fillRange = this.curNum / this.total;
        if (this.proLab)
            this.proLab.string = (this.isCeil ? Math.ceil(this.curNum / this.total * 100) : Math.floor(this.curNum / this.total * 100)) + "%";
        if (this.numLab)
            this.numLab.string = (this.isCeil ? Math.ceil(this.curNum) : Math.floor(this.curNum)) + "";
    };
    ProgressCol.prototype.update = function (dt) {
        if (!this.isOnAnim)
            return;
        this.curNum += dt * this.speed * this.dir;
        if (this.dir == 1 && this.curNum >= this.tarNum || this.dir == -1 && this.curNum <= this.tarNum) {
            this.curNum = this.tarNum;
            this.isOnAnim = false;
            this.cb && this.cb();
        }
        this.refreshBar();
    };
    __decorate([
        property(cc.ProgressBar)
    ], ProgressCol.prototype, "progress", void 0);
    __decorate([
        property(cc.Sprite)
    ], ProgressCol.prototype, "bar", void 0);
    __decorate([
        property(cc.Label)
    ], ProgressCol.prototype, "proLab", void 0);
    __decorate([
        property(cc.Label)
    ], ProgressCol.prototype, "numLab", void 0);
    __decorate([
        property({ displayName: "是否向上取整" })
    ], ProgressCol.prototype, "isCeil", void 0);
    ProgressCol = __decorate([
        ccclass
    ], ProgressCol);
    return ProgressCol;
}(cc.Component));
exports.default = ProgressCol;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxQcm9ncmVzc0NvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXNFQztRQW5FRyxjQUFRLEdBQW1CLElBQUksQ0FBQztRQUdoQyxTQUFHLEdBQWMsSUFBSSxDQUFDO1FBR3RCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBRWhCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFdBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixRQUFFLEdBQWUsSUFBSSxDQUFDO1FBQ3RCLFNBQUcsR0FBVyxDQUFDLENBQUM7O0lBK0M1QixDQUFDO0lBN0NHLDBCQUFJLEdBQUosVUFBSyxLQUFhO1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxTQUFpQixFQUFFLE1BQXVCLEVBQUUsRUFBcUI7UUFBOUMsdUJBQUEsRUFBQSxjQUF1QjtRQUFFLG1CQUFBLEVBQUEsU0FBcUI7UUFDcEUsSUFBSSxNQUFNLEVBQUU7WUFDUixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMs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SUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFsRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFDTztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNFO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsQ0FBQzsrQ0FDWjtJQWZQLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FzRS9CO0lBQUQsa0JBQUM7Q0F0RUQsQUFzRUMsQ0F0RXdDLEVBQUUsQ0FBQyxTQUFTLEdBc0VwRDtrQkF0RW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzQ29sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwcm9ncmVzczogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBiYXI6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJvTGFiOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbnVtTGFiOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5piv5ZCm5ZCR5LiK5Y+W5pW0XCIgfSlcclxuICAgIGlzQ2VpbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgdG90YWw6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGN1ck51bTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgaXNPbkFuaW06IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc3BlZWQ6IG51bWJlciA9IDEwO1xyXG4gICAgcHJpdmF0ZSB0YXJOdW06IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNiOiAoKSA9PiB2b2lkID0gbnVsbDtcclxuICAgIHByaXZhdGUgZGlyOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIGluaXQodG90YWw6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY3VyTnVtID0gdGhpcy50b3RhbCA9IHRvdGFsO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaEJhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZShjaGFuZ2VOdW06IG51bWJlciwgaXNBbmltOiBib29sZWFuID0gZmFsc2UsIGNiOiAoKSA9PiB2b2lkID0gbnVsbCkge1xyXG4gICAgICAgIGlmIChpc0FuaW0pIHtcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSBjaGFuZ2VOdW0gPiAwID8gMSA6IC0xO1xyXG4gICAgICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICAgICAgICAgIHRoaXMudGFyTnVtID0gY2MubWlzYy5jbGFtcGYodGhpcy5jdXJOdW0gKz0gY2hhbmdlTnVtLCAwLCB0aGlzLnRvdGFsKTtcclxuICAgICAgICAgICAgdGhpcy5pc09uQW5pbSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJOdW0gPSBjYy5taXNjLmNsYW1wZih0aGlzLmN1ck51bSArPSBjaGFuZ2VOdW0sIDAsIHRoaXMudG90YWwpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCYXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VyTnVtKG51bTogbnVtYmVyLCBpc0FuaW06IGJvb2xlYW4gPSBmYWxzZSwgY2I6ICgpID0+IHZvaWQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKGlzQW5pbSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpciA9IG51bSA+IHRoaXMuY3VyTnVtID8gMSA6IC0xO1xyXG4gICAgICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICAgICAgICAgIHRoaXMudGFyTnVtID0gY2MubWlzYy5jbGFtcGYobnVtLCAwLCB0aGlzLnRvdGFsKTtcclxuICAgICAgICAgICAgdGhpcy5pc09uQW5pbSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJOdW0gPSBjYy5taXNjLmNsYW1wZihudW0sIDAsIHRoaXMudG90YWwpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCYXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWZyZXNoQmFyKCkge1xyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxSYW5nZSA9IHRoaXMuY3VyTnVtIC8gdGhpcy50b3RhbDtcclxuICAgICAgICBpZiAodGhpcy5wcm9MYWIpIHRoaXMucHJvTGFiLnN0cmluZyA9ICh0aGlzLmlzQ2VpbCA/IE1hdGguY2VpbCh0aGlzLmN1ck51bSAvIHRoaXMudG90YWwgKiAxMDApIDogTWF0aC5mbG9vcih0aGlzLmN1ck51bSAvIHRoaXMudG90YWwgKiAxMDApKSArIFwiJVwiO1xyXG4gICAgICAgIGlmICh0aGlzLm51bUxhYikgdGhpcy5udW1MYWIuc3RyaW5nID0gKHRoaXMuaXNDZWlsID8gTWF0aC5jZWlsKHRoaXMuY3VyTnVtKSA6IE1hdGguZmxvb3IodGhpcy5jdXJOdW0pKSArIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzT25BbmltKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jdXJOdW0gKz0gZHQgKiB0aGlzLnNwZWVkICogdGhpcy5kaXI7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyID09IDEgJiYgdGhpcy5jdXJOdW0gPj0gdGhpcy50YXJOdW0gfHwgdGhpcy5kaXIgPT0gLTEgJiYgdGhpcy5jdXJOdW0gPD0gdGhpcy50YXJOdW0pIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJOdW0gPSB0aGlzLnRhck51bTtcclxuICAgICAgICAgICAgdGhpcy5pc09uQW5pbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNiICYmIHRoaXMuY2IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQmFyKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/RedPointTag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8a0fmayFFNO4UG6dYd2YpK', 'RedPointTag');
// homePage/script/common/RedPointTag.ts

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
var EventManager_1 = require("../manager/EventManager");
var RedPointManager_1 = require("../manager/RedPointManager");
var Global_1 = require("./Global");
var Util_1 = require("./Util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RedPointTag = /** @class */ (function (_super) {
    __extends(RedPointTag, _super);
    function RedPointTag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keys = [];
        _this.point = null;
        return _this;
    }
    RedPointTag.prototype.onLoad = function () {
        EventManager_1.EventManager.addListener(Global_1.EventEnum.RedPointRefresh, this.refreshRedPoint, this);
        this.point.stopAllActions();
        cc.tween(this.point)
            .repeatForever(cc.tween()
            .repeat(2, cc.tween()
            .to(0.2, { angle: 10 })
            .to(0.2, { angle: -10 })
            .to(0.1, { angle: 0 }))
            .delay(1))
            .start();
    };
    RedPointTag.prototype.onEnable = function () {
        this.refreshRedPoint();
    };
    RedPointTag.prototype.refreshRedPoint = function () {
        var sameArr = Util_1.Util.getCommonElements(RedPointManager_1.default.ins.allShowRedPoints, this.keys);
        this.point.active = sameArr.length > 0;
    };
    __decorate([
        property([cc.Integer])
    ], RedPointTag.prototype, "keys", void 0);
    __decorate([
        property(cc.Node)
    ], RedPointTag.prototype, "point", void 0);
    RedPointTag = __decorate([
        ccclass
    ], RedPointTag);
    return RedPointTag;
}(cc.Component));
exports.default = RedPointTag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxSZWRQb2ludFRhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBdUQ7QUFDdkQsOERBQXlEO0FBQ3pELG1DQUFxQztBQUNyQywrQkFBOEI7QUFFeEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFpQ0M7UUE5QkcsVUFBSSxHQUFhLEVBQUUsQ0FBQztRQUdwQixXQUFLLEdBQVksSUFBSSxDQUFDOztJQTJCMUIsQ0FBQztJQXpCYSw0QkFBTSxHQUFoQjtRQUNJLDJCQUFZLENBQUMsV0FBVyxDQUFDLGtCQUFTLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM1QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDZixhQUFhLENBQ1YsRUFBRSxDQUFDLEtBQUssRUFBRTthQUNMLE1BQU0sQ0FBQyxDQUFDLEVBQ0wsRUFBRSxDQUFDLEtBQUssRUFBRTthQUNMLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDdEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ3ZCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FDN0I7YUFDQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ2hCO2FBQ0EsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVTLDhCQUFRLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxxQ0FBZSxHQUFmO1FBQ0ksSUFBSSxPQUFPLEdBQUcsV0FBSSxDQUFDLGlCQUFpQixDQUFDLHlCQUFlLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBN0JEO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzZDQUNIO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0k7SUFOTCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBaUMvQjtJQUFELGtCQUFDO0NBakNELEFBaUNDLENBakN3QyxFQUFFLENBQUMsU0FBUyxHQWlDcEQ7a0JBakNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRNYW5hZ2VyIH0gZnJvbSBcIi4uL21hbmFnZXIvRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCBSZWRQb2ludE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvUmVkUG9pbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEV2ZW50RW51bSB9IGZyb20gXCIuL0dsb2JhbFwiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4vVXRpbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZFBvaW50VGFnIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLkludGVnZXJdKVxyXG4gICAga2V5czogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50TWFuYWdlci5hZGRMaXN0ZW5lcihFdmVudEVudW0uUmVkUG9pbnRSZWZyZXNoLCB0aGlzLnJlZnJlc2hSZWRQb2ludCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wb2ludC5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucG9pbnQpXHJcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBlYXQoMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBhbmdsZTogMTAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHsgYW5nbGU6IC0xMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBhbmdsZTogMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUmVkUG9pbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoUmVkUG9pbnQoKSB7XHJcbiAgICAgICAgbGV0IHNhbWVBcnIgPSBVdGlsLmdldENvbW1vbkVsZW1lbnRzKFJlZFBvaW50TWFuYWdlci5pbnMuYWxsU2hvd1JlZFBvaW50cywgdGhpcy5rZXlzKTtcclxuICAgICAgICB0aGlzLnBvaW50LmFjdGl2ZSA9IHNhbWVBcnIubGVuZ3RoID4gMDtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/config/Config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58999G+2PVGpqFc6qLXu78B', 'Config');
// homePage/script/config/Config.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
var LevelConfig_1 = require("./LevelConfig");
exports.Config = {
    LevelConfig: LevelConfig_1.LevelConfigMgr,
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29uZmlnXFxDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStDO0FBRWxDLFFBQUEsTUFBTSxHQUFHO0lBRWxCLFdBQVcsRUFBRSw0QkFBYztDQUU5QixDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGV2ZWxDb25maWdNZ3IgfSBmcm9tIFwiLi9MZXZlbENvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbmZpZyA9IHtcclxuXHJcbiAgICBMZXZlbENvbmZpZzogTGV2ZWxDb25maWdNZ3IsXHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/UiPath.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10eabNB0O1E572N1t0Usz9S', 'UiPath');
// homePage/script/common/UiPath.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiPath = void 0;
var BundleData_1 = require("./BundleData");
var BundleName_1 = require("./BundleName");
exports.UiPath = {
    StartView: new BundleData_1.BundleData(BundleName_1.BundleName.Start, "prefab/StartView"),
    AdUnlockView: new BundleData_1.BundleData(BundleName_1.BundleName.Common, "prefab/adUnlock/AdUnlockView"),
    EndView: new BundleData_1.BundleData(BundleName_1.BundleName.Common, "prefab/end/EndView"),
    HotView: new BundleData_1.BundleData(BundleName_1.BundleName.Common, "prefab/hot/HotView"),
    NumView: new BundleData_1.BundleData(BundleName_1.BundleName.Common, "prefab/num/NumView"),
    SetView: new BundleData_1.BundleData(BundleName_1.BundleName.Common, "prefab/set/SetView"),
    TipView: new BundleData_1.BundleData(BundleName_1.BundleName.Common, "prefab/tip/TipView"),
    WxtsView: new BundleData_1.BundleData(BundleName_1.BundleName.Common, "prefab/wxts/WxtsView"),
    ZytsView: new BundleData_1.BundleData(BundleName_1.BundleName.Common, "prefab/zyts/ZytsView"),
    LevelView: new BundleData_1.BundleData(BundleName_1.BundleName.Common, "prefab/level/LevelView"),
    LoadView: new BundleData_1.BundleData(BundleName_1.BundleName.Common, "prefab/load/LoadView"),
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxVaVBhdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkNBQTBDO0FBQzFDLDJDQUEwQztBQUU3QixRQUFBLE1BQU0sR0FBRztJQUVsQixTQUFTLEVBQUUsSUFBSSx1QkFBVSxDQUFDLHVCQUFVLENBQUMsS0FBSyxFQUFFLGtCQUFrQixDQUFDO0lBQy9ELFlBQVksRUFBRSxJQUFJLHVCQUFVLENBQUMsdUJBQVUsQ0FBQyxNQUFNLEVBQUUsOEJBQThCLENBQUM7SUFDL0UsT0FBTyxFQUFFLElBQUksdUJBQVUsQ0FBQyx1QkFBVSxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQztJQUNoRSxPQUFPLEVBQUUsSUFBSSx1QkFBVSxDQUFDLHVCQUFVLENBQUMsTUFBTSxFQUFFLG9CQUFvQixDQUFDO0lBQ2hFLE9BQU8sRUFBRSxJQUFJLHVCQUFVLENBQUMsdUJBQVUsQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLENBQUM7SUFDaEUsT0FBTyxFQUFFLElBQUksdUJBQVUsQ0FBQyx1QkFBVSxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQztJQUNoRSxPQUFPLEVBQUUsSUFBSSx1QkFBVSxDQUFDLHVCQUFVLENBQUMsTUFBTSxFQUFFLG9CQUFvQixDQUFDO0lBQ2hFLFFBQVEsRUFBRSxJQUFJLHVCQUFVLENBQUMsdUJBQVUsQ0FBQyxNQUFNLEVBQUUsc0JBQXNCLENBQUM7SUFDbkUsUUFBUSxFQUFFLElBQUksdUJBQVUsQ0FBQyx1QkFBVSxDQUFDLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQztJQUNuRSxTQUFTLEVBQUUsSUFBSSx1QkFBVSxDQUFDLHVCQUFVLENBQUMsTUFBTSxFQUFFLHdCQUF3QixDQUFDO0lBQ3RFLFFBQVEsRUFBRSxJQUFJLHVCQUFVLENBQUMsdUJBQVUsQ0FBQyxNQUFNLEVBQUUsc0JBQXNCLENBQUM7Q0FDdEUsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBCdW5kbGVEYXRhIH0gZnJvbSBcIi4vQnVuZGxlRGF0YVwiO1xyXG5pbXBvcnQgeyBCdW5kbGVOYW1lIH0gZnJvbSBcIi4vQnVuZGxlTmFtZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVpUGF0aCA9IHtcclxuXHJcbiAgICBTdGFydFZpZXc6IG5ldyBCdW5kbGVEYXRhKEJ1bmRsZU5hbWUuU3RhcnQsIFwicHJlZmFiL1N0YXJ0Vmlld1wiKSxcclxuICAgIEFkVW5sb2NrVmlldzogbmV3IEJ1bmRsZURhdGEoQnVuZGxlTmFtZS5Db21tb24sIFwicHJlZmFiL2FkVW5sb2NrL0FkVW5sb2NrVmlld1wiKSxcclxuICAgIEVuZFZpZXc6IG5ldyBCdW5kbGVEYXRhKEJ1bmRsZU5hbWUuQ29tbW9uLCBcInByZWZhYi9lbmQvRW5kVmlld1wiKSxcclxuICAgIEhvdFZpZXc6IG5ldyBCdW5kbGVEYXRhKEJ1bmRsZU5hbWUuQ29tbW9uLCBcInByZWZhYi9ob3QvSG90Vmlld1wiKSxcclxuICAgIE51bVZpZXc6IG5ldyBCdW5kbGVEYXRhKEJ1bmRsZU5hbWUuQ29tbW9uLCBcInByZWZhYi9udW0vTnVtVmlld1wiKSxcclxuICAgIFNldFZpZXc6IG5ldyBCdW5kbGVEYXRhKEJ1bmRsZU5hbWUuQ29tbW9uLCBcInByZWZhYi9zZXQvU2V0Vmlld1wiKSxcclxuICAgIFRpcFZpZXc6IG5ldyBCdW5kbGVEYXRhKEJ1bmRsZU5hbWUuQ29tbW9uLCBcInByZWZhYi90aXAvVGlwVmlld1wiKSxcclxuICAgIFd4dHNWaWV3OiBuZXcgQnVuZGxlRGF0YShCdW5kbGVOYW1lLkNvbW1vbiwgXCJwcmVmYWIvd3h0cy9XeHRzVmlld1wiKSxcclxuICAgIFp5dHNWaWV3OiBuZXcgQnVuZGxlRGF0YShCdW5kbGVOYW1lLkNvbW1vbiwgXCJwcmVmYWIvenl0cy9aeXRzVmlld1wiKSxcclxuICAgIExldmVsVmlldzogbmV3IEJ1bmRsZURhdGEoQnVuZGxlTmFtZS5Db21tb24sIFwicHJlZmFiL2xldmVsL0xldmVsVmlld1wiKSxcclxuICAgIExvYWRWaWV3OiBuZXcgQnVuZGxlRGF0YShCdW5kbGVOYW1lLkNvbW1vbiwgXCJwcmVmYWIvbG9hZC9Mb2FkVmlld1wiKSxcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/SoundPath.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ce1eQEhj5F+7e5M4UnDa5e', 'SoundPath');
// homePage/script/common/SoundPath.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundEnum = exports.SoundPath = void 0;
var BundleData_1 = require("./BundleData");
var BundleName_1 = require("./BundleName");
exports.SoundPath = {
    button_click: new BundleData_1.BundleData(BundleName_1.BundleName.Assets, "audio/dianji"),
    //剧情
    //lv1
    lv_1_1_0: new BundleData_1.BundleData("level1", "audio/1_1_0"),
    lv_1_1_1: new BundleData_1.BundleData("level1", "audio/1_1_1"),
    lv_1_1_2: new BundleData_1.BundleData("level1", "audio/1_1_2"),
    lv_1_2_0: new BundleData_1.BundleData("level1", "audio/1_2_0"),
    lv_1_3_0: new BundleData_1.BundleData("level1", "audio/1_3_0"),
    lv_1_4_0: new BundleData_1.BundleData("level1", "audio/1_4_0"),
    lv_1_5_0: new BundleData_1.BundleData("level1", "audio/1_5_0"),
    lv_1_6_0: new BundleData_1.BundleData("level1", "audio/1_6_0"),
    lv_1_6_1: new BundleData_1.BundleData("level1", "audio/1_6_1"),
    lv_1_6_2: new BundleData_1.BundleData("level1", "audio/1_6_2"),
    jiandao: new BundleData_1.BundleData("level1", "audio/jiandao"),
    pingguo: new BundleData_1.BundleData("level1", "audio/pingguo"),
    //bgm
    bgm: new BundleData_1.BundleData(BundleName_1.BundleName.Assets, "audio/bgm"),
    //裁纸刀
    caizhi: new BundleData_1.BundleData(BundleName_1.BundleName.Assets, "audio/caizhi"),
    //切换关卡
    guanqia: new BundleData_1.BundleData(BundleName_1.BundleName.Assets, "audio/guanqia"),
};
var SoundEnum;
(function (SoundEnum) {
    SoundEnum[SoundEnum["button_click"] = 0] = "button_click";
})(SoundEnum = exports.SoundEnum || (exports.SoundEnum = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxTb3VuZFBhdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBDO0FBQzFDLDJDQUEwQztBQUU3QixRQUFBLFNBQVMsR0FBRztJQUVyQixZQUFZLEVBQUUsSUFBSSx1QkFBVSxDQUFDLHVCQUFVLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQztJQUMvRCxJQUFJO0lBQ0osS0FBSztJQUNMLFFBQVEsRUFBRSxJQUFJLHVCQUFVLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQztJQUNqRCxRQUFRLEVBQUUsSUFBSSx1QkFBVSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUM7SUFDakQsUUFBUSxFQUFFLElBQUksdUJBQVUsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDO0lBQ2pELFFBQVEsRUFBRSxJQUFJLHVCQUFVLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQztJQUNqRCxRQUFRLEVBQUUsSUFBSSx1QkFBVSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUM7SUFDakQsUUFBUSxFQUFFLElBQUksdUJBQVUsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDO0lBQ2pELFFBQVEsRUFBRSxJQUFJLHVCQUFVLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQztJQUNqRCxRQUFRLEVBQUUsSUFBSSx1QkFBVSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUM7SUFDakQsUUFBUSxFQUFFLElBQUksdUJBQVUsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDO0lBQ2pELFFBQVEsRUFBRSxJQUFJLHVCQUFVLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQztJQUNqRCxPQUFPLEVBQUUsSUFBSSx1QkFBVSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUM7SUFDbEQsT0FBTyxFQUFFLElBQUksdUJBQVUsQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDO0lBRWxELEtBQUs7SUFDTCxHQUFHLEVBQUUsSUFBSSx1QkFBVSxDQUFDLHVCQUFVLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQztJQUNuRCxLQUFLO0lBQ0wsTUFBTSxFQUFFLElBQUksdUJBQVUsQ0FBQyx1QkFBVSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUM7SUFDekQsTUFBTTtJQUNOLE9BQU8sRUFBRSxJQUFJLHVCQUFVLENBQUMsdUJBQVUsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDO0NBQzlELENBQUE7QUFFRCxJQUFZLFNBR1g7QUFIRCxXQUFZLFNBQVM7SUFDakIseURBQWdCLENBQUE7QUFFcEIsQ0FBQyxFQUhXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBR3BCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVuZGxlRGF0YSB9IGZyb20gXCIuL0J1bmRsZURhdGFcIjtcclxuaW1wb3J0IHsgQnVuZGxlTmFtZSB9IGZyb20gXCIuL0J1bmRsZU5hbWVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTb3VuZFBhdGggPSB7XHJcblxyXG4gICAgYnV0dG9uX2NsaWNrOiBuZXcgQnVuZGxlRGF0YShCdW5kbGVOYW1lLkFzc2V0cywgXCJhdWRpby9kaWFuamlcIiksXHJcbiAgICAvL+WJp+aDhVxyXG4gICAgLy9sdjFcclxuICAgIGx2XzFfMV8wOiBuZXcgQnVuZGxlRGF0YShcImxldmVsMVwiLCBcImF1ZGlvLzFfMV8wXCIpLFxyXG4gICAgbHZfMV8xXzE6IG5ldyBCdW5kbGVEYXRhKFwibGV2ZWwxXCIsIFwiYXVkaW8vMV8xXzFcIiksXHJcbiAgICBsdl8xXzFfMjogbmV3IEJ1bmRsZURhdGEoXCJsZXZlbDFcIiwgXCJhdWRpby8xXzFfMlwiKSxcclxuICAgIGx2XzFfMl8wOiBuZXcgQnVuZGxlRGF0YShcImxldmVsMVwiLCBcImF1ZGlvLzFfMl8wXCIpLFxyXG4gICAgbHZfMV8zXzA6IG5ldyBCdW5kbGVEYXRhKFwibGV2ZWwxXCIsIFwiYXVkaW8vMV8zXzBcIiksXHJcbiAgICBsdl8xXzRfMDogbmV3IEJ1bmRsZURhdGEoXCJsZXZlbDFcIiwgXCJhdWRpby8xXzRfMFwiKSxcclxuICAgIGx2XzFfNV8wOiBuZXcgQnVuZGxlRGF0YShcImxldmVsMVwiLCBcImF1ZGlvLzFfNV8wXCIpLFxyXG4gICAgbHZfMV82XzA6IG5ldyBCdW5kbGVEYXRhKFwibGV2ZWwxXCIsIFwiYXVkaW8vMV82XzBcIiksXHJcbiAgICBsdl8xXzZfMTogbmV3IEJ1bmRsZURhdGEoXCJsZXZlbDFcIiwgXCJhdWRpby8xXzZfMVwiKSxcclxuICAgIGx2XzFfNl8yOiBuZXcgQnVuZGxlRGF0YShcImxldmVsMVwiLCBcImF1ZGlvLzFfNl8yXCIpLFxyXG4gICAgamlhbmRhbzogbmV3IEJ1bmRsZURhdGEoXCJsZXZlbDFcIiwgXCJhdWRpby9qaWFuZGFvXCIpLFxyXG4gICAgcGluZ2d1bzogbmV3IEJ1bmRsZURhdGEoXCJsZXZlbDFcIiwgXCJhdWRpby9waW5nZ3VvXCIpLFxyXG5cclxuICAgIC8vYmdtXHJcbiAgICBiZ206IG5ldyBCdW5kbGVEYXRhKEJ1bmRsZU5hbWUuQXNzZXRzLCBcImF1ZGlvL2JnbVwiKSxcclxuICAgIC8v6KOB57q45YiAXHJcbiAgICBjYWl6aGk6IG5ldyBCdW5kbGVEYXRhKEJ1bmRsZU5hbWUuQXNzZXRzLCBcImF1ZGlvL2NhaXpoaVwiKSxcclxuICAgIC8v5YiH5o2i5YWz5Y2hXHJcbiAgICBndWFucWlhOiBuZXcgQnVuZGxlRGF0YShCdW5kbGVOYW1lLkFzc2V0cywgXCJhdWRpby9ndWFucWlhXCIpLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBTb3VuZEVudW0ge1xyXG4gICAgYnV0dG9uX2NsaWNrID0gMCxcclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/UiBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37b131KLtJDL4mP2xCSYpsX', 'UiBase');
// homePage/script/common/UiBase.ts

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
exports.UiBase = void 0;
var UIManager_1 = require("../manager/UIManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UiBase = /** @class */ (function (_super) {
    __extends(UiBase, _super);
    function UiBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.openAnimNode = null;
        _this.bgMaskNode = null;
        _this.stackData = null;
        return _this;
    }
    /**界面开始打开时调用 */
    UiBase.prototype.onOpen = function () { };
    /**界面开始关闭时调用 */
    UiBase.prototype.onClose = function () { };
    /**界面被次级界面遮挡时调用 */
    UiBase.prototype.onCover = function () { };
    /**次级界面关闭时调用 */
    UiBase.prototype.onUncover = function () { };
    /**界面打开动画播放完毕时调用*/
    UiBase.prototype.onOpenFinish = function () { };
    /**界面关闭动画播放完毕时调用 */
    UiBase.prototype.onCloseFinish = function () { };
    /**界面打开前的准备方法 */
    UiBase.prototype.openPrepare = function () { return Promise.resolve(); };
    ;
    /**界面关闭回调，子类可直接重写 */
    UiBase.prototype.closeCb = function () { };
    UiBase.prototype.playBtnClickAudio = function () {
        // AudioManager.ins.playClickAudio();
    };
    UiBase.prototype.playCloseSceneAudio = function () {
        // AudioManager.ins.playEffect(SoundPath.CLOSE_SCENE);
    };
    UiBase.prototype.closeViewClick = function () {
        this.playBtnClickAudio();
        UIManager_1.UIManager.ins.closeView();
    };
    __decorate([
        property(cc.Node)
    ], UiBase.prototype, "openAnimNode", void 0);
    __decorate([
        property(cc.Node)
    ], UiBase.prototype, "bgMaskNode", void 0);
    UiBase = __decorate([
        ccclass
    ], UiBase);
    return UiBase;
}(cc.Component));
exports.UiBase = UiBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxVaUJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGtEQUE0RDtBQUV0RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywwQkFBWTtJQUFqRDtRQUFBLHFFQStDQztRQTVDRyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUVwQixlQUFTLEdBQWMsSUFBSSxDQUFDOztJQXVDdkMsQ0FBQztJQXJDRyxlQUFlO0lBQ1IsdUJBQU0sR0FBYixjQUF3QixDQUFDO0lBRXpCLGVBQWU7SUFDUix3QkFBTyxHQUFkLGNBQW1CLENBQUM7SUFFcEIsa0JBQWtCO0lBQ1gsd0JBQU8sR0FBZCxjQUFtQixDQUFDO0lBRXBCLGVBQWU7SUFDUiwwQkFBUyxHQUFoQixjQUFxQixDQUFDO0lBRXRCLGtCQUFrQjtJQUNYLDZCQUFZLEdBQW5CLGNBQThCLENBQUM7SUFFL0IsbUJBQW1CO0lBQ1osOEJBQWEsR0FBcEIsY0FBeUIsQ0FBQztJQUUxQixnQkFBZ0I7SUFDVCw0QkFBVyxHQUFsQixjQUFzQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFBQSxDQUFDO0lBRWxFLG9CQUFvQjtJQUNiLHdCQUFPLEdBQWQsY0FBbUIsQ0FBQztJQUViLGtDQUFpQixHQUF4QjtRQUNJLHFDQUFxQztJQUN6QyxDQUFDO0lBRU0sb0NBQW1CLEdBQTFCO1FBQ0ksc0RBQXNEO0lBQzFELENBQUM7SUFFTSwrQkFBYyxHQUFyQjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLHFCQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUExQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDVztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNTO0lBTlQsTUFBTTtRQUQzQixPQUFPO09BQ2MsTUFBTSxDQStDM0I7SUFBRCxhQUFDO0NBL0NELEFBK0NDLENBL0NvQyxFQUFFLENBQUMsU0FBUyxHQStDaEQ7QUEvQ3FCLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTdGFja0RhdGEsIFVJTWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2VyL1VJTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBVaUJhc2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgb3BlbkFuaW1Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJnTWFza05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGFja0RhdGE6IFN0YWNrRGF0YSA9IG51bGw7XHJcblxyXG4gICAgLyoq55WM6Z2i5byA5aeL5omT5byA5pe26LCD55SoICovXHJcbiAgICBwdWJsaWMgb25PcGVuKCk6IHZvaWQgeyB9XHJcblxyXG4gICAgLyoq55WM6Z2i5byA5aeL5YWz6Zet5pe26LCD55SoICovXHJcbiAgICBwdWJsaWMgb25DbG9zZSgpIHsgfVxyXG5cclxuICAgIC8qKueVjOmdouiiq+asoee6p+eVjOmdoumBruaMoeaXtuiwg+eUqCAqL1xyXG4gICAgcHVibGljIG9uQ292ZXIoKSB7IH1cclxuXHJcbiAgICAvKirmrKHnuqfnlYzpnaLlhbPpl63ml7bosIPnlKggKi9cclxuICAgIHB1YmxpYyBvblVuY292ZXIoKSB7IH1cclxuXHJcbiAgICAvKirnlYzpnaLmiZPlvIDliqjnlLvmkq3mlL7lrozmr5Xml7bosIPnlKgqL1xyXG4gICAgcHVibGljIG9uT3BlbkZpbmlzaCgpOiB2b2lkIHsgfVxyXG5cclxuICAgIC8qKueVjOmdouWFs+mXreWKqOeUu+aSreaUvuWujOavleaXtuiwg+eUqCAqL1xyXG4gICAgcHVibGljIG9uQ2xvc2VGaW5pc2goKSB7IH1cclxuXHJcbiAgICAvKirnlYzpnaLmiZPlvIDliY3nmoTlh4blpIfmlrnms5UgKi9cclxuICAgIHB1YmxpYyBvcGVuUHJlcGFyZSgpOiBQcm9taXNlPHZvaWQ+IHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpOyB9O1xyXG5cclxuICAgIC8qKueVjOmdouWFs+mXreWbnuiwg++8jOWtkOexu+WPr+ebtOaOpemHjeWGmSAqL1xyXG4gICAgcHVibGljIGNsb3NlQ2IoKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgcGxheUJ0bkNsaWNrQXVkaW8oKSB7XHJcbiAgICAgICAgLy8gQXVkaW9NYW5hZ2VyLmlucy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5Q2xvc2VTY2VuZUF1ZGlvKCkge1xyXG4gICAgICAgIC8vIEF1ZGlvTWFuYWdlci5pbnMucGxheUVmZmVjdChTb3VuZFBhdGguQ0xPU0VfU0NFTkUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZVZpZXdDbGljaygpIHtcclxuICAgICAgICB0aGlzLnBsYXlCdG5DbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmlucy5jbG9zZVZpZXcoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/AbRef.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd043349yzJHaajf8qhl+BcM', 'AbRef');
// homePage/script/common/AbRef.ts

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
var AbManager_1 = require("../manager/AbManager");
//记录需要释放的资源
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AbRef = /** @class */ (function (_super) {
    __extends(AbRef, _super);
    function AbRef() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.assetArr = [];
        _this._spriteFrame = null;
        return _this;
    }
    Object.defineProperty(AbRef.prototype, "spriteFrame", {
        get: function () {
            return this._spriteFrame;
        },
        set: function (value) {
            this._spriteFrame = value;
            var spr = this.node.getComponent(cc.Sprite);
            if (!spr)
                return;
            spr.spriteFrame = value;
            if (value) {
                var obj = this.assetArr.find(function (v) { return v.uuid == value._uuid; });
                if (!obj) {
                    obj = { uuid: value._uuid, refCount: 0 };
                    this.assetArr.push(obj);
                }
                obj.refCount++;
            }
        },
        enumerable: false,
        configurable: true
    });
    AbRef.prototype.decRef = function () {
        this.assetArr.forEach(function (v) {
            AbManager_1.AbManager.decRef(v.uuid, v.refCount);
        });
        this.assetArr = [];
    };
    AbRef = __decorate([
        ccclass
    ], AbRef);
    return AbRef;
}(cc.Component));
exports.default = AbRef;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxBYlJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBaUQ7QUFFakQsV0FBVztBQUNMLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBNkJDO1FBM0JHLGNBQVEsR0FBeUMsRUFBRSxDQUFDO1FBRTVDLGtCQUFZLEdBQW1CLElBQUksQ0FBQzs7SUF5QmhELENBQUM7SUF4Qkcsc0JBQVcsOEJBQVc7YUFBdEI7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQUNELFVBQXVCLEtBQXFCO1lBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsR0FBRztnQkFBRSxPQUFPO1lBQ2pCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksS0FBSyxFQUFFO2dCQUNQLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFyQixDQUFxQixDQUFDLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQ04sR0FBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDM0I7Z0JBQ0QsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ2xCO1FBQ0wsQ0FBQzs7O09BZEE7SUFnQkQsc0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUNuQixxQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUE1QmdCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0E2QnpCO0lBQUQsWUFBQztDQTdCRCxBQTZCQyxDQTdCa0MsRUFBRSxDQUFDLFNBQVMsR0E2QjlDO2tCQTdCb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFiTWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2VyL0FiTWFuYWdlclwiO1xyXG5cclxuLy/orrDlvZXpnIDopoHph4rmlL7nmoTotYTmupBcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFiUmVmIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBhc3NldEFycjogeyB1dWlkOiBzdHJpbmcsIHJlZkNvdW50OiBudW1iZXIgfVtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgc3ByaXRlRnJhbWUoKTogY2MuU3ByaXRlRnJhbWUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVGcmFtZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgc3ByaXRlRnJhbWUodmFsdWU6IGNjLlNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlRnJhbWUgPSB2YWx1ZTtcclxuICAgICAgICBsZXQgc3ByID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIGlmICghc3ByKSByZXR1cm47XHJcbiAgICAgICAgc3ByLnNwcml0ZUZyYW1lID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxldCBvYmogPSB0aGlzLmFzc2V0QXJyLmZpbmQodiA9PiB2LnV1aWQgPT0gdmFsdWUuX3V1aWQpO1xyXG4gICAgICAgICAgICBpZiAoIW9iaikge1xyXG4gICAgICAgICAgICAgICAgb2JqID0geyB1dWlkOiB2YWx1ZS5fdXVpZCwgcmVmQ291bnQ6IDAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRBcnIucHVzaChvYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9iai5yZWZDb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWNSZWYoKSB7XHJcbiAgICAgICAgdGhpcy5hc3NldEFyci5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICBBYk1hbmFnZXIuZGVjUmVmKHYudXVpZCwgdi5yZWZDb3VudCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmFzc2V0QXJyID0gW107XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/BaseData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7dffbQg3RNJkZmLIB451i7l', 'BaseData');
// homePage/script/manager/BaseData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseDataManager = /** @class */ (function () {
    function BaseDataManager(datas) {
        this._datas = [];
        this.parse(datas);
    }
    ;
    Object.defineProperty(BaseDataManager.prototype, "datas", {
        get: function () {
            return this._datas;
        },
        enumerable: false,
        configurable: true
    });
    BaseDataManager.prototype.parse = function (datas) {
        this._datas = datas;
    };
    BaseDataManager.prototype.getDataById = function (id) {
        return this._datas.find(function (data) { return data.id == id; });
    };
    //数组转对象
    BaseDataManager.prototype.arrToObj = function (arr, keys) {
        if (keys === void 0) { keys = ["id", "num"]; }
        var obj = {};
        var call = function (arr1) {
            arr1.forEach(function (v, k) {
                if (Array.isArray(v)) {
                    call(v);
                }
                else {
                    obj[keys[k]] = v;
                }
            });
        };
        call(arr);
        return obj;
    };
    return BaseDataManager;
}());
exports.default = BaseDataManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcQmFzZURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtJQUNJLHlCQUFZLEtBQVU7UUFDWixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBREQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUFDLENBQUM7SUFBQSxDQUFDO0lBRzlDLHNCQUFXLGtDQUFLO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQsK0JBQUssR0FBTCxVQUFNLEtBQVU7UUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLEVBQVU7UUFDbEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFiLENBQWEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxPQUFPO0lBQ1Asa0NBQVEsR0FBUixVQUFTLEdBQVUsRUFBRSxJQUE4QjtRQUE5QixxQkFBQSxFQUFBLFFBQWtCLElBQUksRUFBRSxLQUFLLENBQUM7UUFDL0MsSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLElBQUksSUFBSSxHQUFHLFVBQUMsSUFBSTtZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztnQkFDZCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDWDtxQkFBTTtvQkFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNwQjtZQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFBO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgQmFzZURhdGEgPSB7XHJcbiAgICBpZD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZURhdGFNYW5hZ2VyPFQgZXh0ZW5kcyBCYXNlRGF0YT4ge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YXM6IFRbXSkgeyB0aGlzLnBhcnNlKGRhdGFzKSB9O1xyXG4gICAgcHJvdGVjdGVkIF9kYXRhczogVFtdID0gW107XHJcblxyXG4gICAgcHVibGljIGdldCBkYXRhcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2UoZGF0YXM6IFRbXSkge1xyXG4gICAgICAgIHRoaXMuX2RhdGFzID0gZGF0YXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YUJ5SWQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhcy5maW5kKGRhdGEgPT4gZGF0YS5pZCA9PSBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mlbDnu4Tovazlr7nosaFcclxuICAgIGFyclRvT2JqKGFycjogYW55W10sIGtleXM6IHN0cmluZ1tdID0gW1wiaWRcIiwgXCJudW1cIl0pIHtcclxuICAgICAgICBsZXQgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBsZXQgY2FsbCA9IChhcnIxKSA9PiB7XHJcbiAgICAgICAgICAgIGFycjEuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsKHYpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmpba2V5c1trXV0gPSB2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsKGFycik7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/Util.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7aebcxrU6VEXoANiS4gJpR6', 'Util');
// homePage/script/common/Util.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
var Util = /** @class */ (function () {
    function Util() {
    }
    /**
 * 将字符串转换为一维数组
 * @param str 目标字符串
 * @param sep 分隔符 默认为","
 */
    Util.convertStrToArr = function (str, sep) {
        if (sep === void 0) { sep = ","; }
        if (!str)
            return [];
        var arr = [];
        var subStrArr = str.split(sep);
        subStrArr.forEach(function (subStr) {
            if (Number(subStr) !== undefined) {
                arr.push(subStr);
            }
            else {
                arr.push(subStr);
            }
        });
        return arr;
    };
    Util.getWorldPosition = function (node) {
        if (!node) {
            return;
        }
        var parent = node.getParent();
        if (!parent) {
            return node.getPosition();
        }
        return parent.convertToWorldSpaceAR(node.getPosition());
    };
    Util.getWorldSize = function (node) {
        var size = node.getContentSize();
        size.height *= node.scale;
        size.width *= node.scale;
        var parent = node.getParent();
        while (parent) {
            size.height *= parent.scale;
            size.width *= parent.scale;
            parent = parent.getParent();
        }
        return size;
    };
    Util.setWorldSize = function (node, size) {
        node.setContentSize(size);
        size.height /= node.scale;
        size.width /= node.scale;
        var parent = node.getParent();
        while (parent) {
            node.width /= parent.scale;
            node.height /= parent.scale;
            parent = parent.getParent();
        }
    };
    Util.getWorldScale = function (node) {
        var scale = node.scale;
        var parent = node.getParent();
        while (parent) {
            scale *= parent.scale;
            parent = parent.getParent();
        }
        return scale;
    };
    Util.setWorldPosition = function (node, worldPos) {
        if (!node) {
            return;
        }
        if (!worldPos) {
            return;
        }
        var parent = node.getParent();
        if (!parent) {
            node.setPosition(worldPos);
            return;
        }
        var localPos = parent.convertToNodeSpaceAR(worldPos);
        node.setPosition(localPos);
    };
    Util.getWorldRotation = function (node) {
        var rot = node.rotation;
        var parent = node.getParent();
        while (parent) {
            rot += parent.rotation;
            parent = parent.getParent();
        }
        return rot;
    };
    Util.getWorldRotationWithRot = function (parent, localRot) {
        var rot = localRot;
        while (parent) {
            rot += parent.rotation;
            parent = parent.getParent();
        }
        return rot;
    };
    Util.getLocalRotation = function (targetNode, worldRot) {
        var rot = worldRot;
        var parent = targetNode.getParent();
        while (parent) {
            rot -= parent.rotation;
            parent = parent.getParent();
        }
        return rot;
    };
    Util.setWorldRotation = function (node, worldRot) {
        node.rotation = worldRot;
        var parent = node.getParent();
        while (parent) {
            node.rotation -= parent.rotation;
            parent = parent.getParent();
        }
    };
    Util.distance = function (a, b) {
        if (!a || !b) {
            return;
        }
        var vec = new cc.Vec2(a.x - b.x, a.y - b.y);
        return vec.mag();
    };
    Util.vec = function (start, end) {
        if (!start || !end) {
            return;
        }
        var a = this.getWorldPosition(start);
        var b = this.getWorldPosition(end);
        return new cc.Vec2(b.x - a.x, b.y - a.y);
    };
    //角度转向量
    Util.degreesToVectors = function (degree) {
        var radian = cc.misc.degreesToRadians(degree);
        var comVec = cc.v2(0, 1);
        var dirVec = comVec.rotate(-radian);
        return dirVec;
    };
    //向量转角度
    Util.vectorsToDegress = function (dirVec) {
        var comVec = cc.v2(0, 1);
        var radian = dirVec.normalize().signAngle(comVec);
        var degree = cc.misc.radiansToDegrees(radian);
        return degree;
    };
    /**向量转弧度 */
    Util.vectorToRadian = function (dirVec) {
        return dirVec.normalize().signAngle(cc.v2(0, 1));
    };
    //求两向量夹角
    Util.getDegreeByVec = function (vec1, vec2) {
        var radian = vec1.normalize().signAngle(vec2.normalize());
        var degree = cc.misc.radiansToDegrees(radian);
        if (degree < -90) {
            degree = -90 - (90 + degree);
        }
        if (degree > 90) {
            degree = 180 - degree;
        }
        return degree;
    };
    /**
     *
     * @param a 起点
     * @param b 终点
     */
    Util.vector = function (a, b) {
        if (!a || !b) {
            return cc.Vec2.UP;
        }
        var vector = new cc.Vec2();
        vector.x = b.x - a.x;
        vector.y = b.y - a.y;
        return vector;
    };
    // public static clampPosition(position: cc.Vec2, radius: number): cc.Vec2 {
    //     let x = cc.misc.clampf(position.x, this.xMin + radius, this.xMax - radius);
    //     let y = cc.misc.clampf(position.y, this.yMin + radius, this.yMax - radius);
    //     return cc.v2(x, y);
    // }
    Util.caculateRadius = function (c, minRadius, maxRadius) {
        var r = c / (2 * Math.PI);
        return cc.misc.clampf(r, minRadius, maxRadius);
    };
    /**
     * 取得开始值和结束值之间的插值
     * @param num 0-1 表示从开始值到结束值之间的比例
     * @param startValue 开始值
     * @param endValue 结束值
     */
    Util.lerp = function (num, startValue, endValue) {
        num = cc.misc.clampf(num, 0, 1);
        if (typeof startValue == "number" && typeof endValue == "number") {
            var result = startValue + (endValue - startValue) * num;
            return result;
        }
        else if ((startValue instanceof cc.Vec2 || startValue instanceof cc.Vec3) && (endValue instanceof cc.Vec2 || endValue instanceof cc.Vec3)) {
            var start = startValue;
            var end = endValue;
            var x = this.lerp(num, start.x, end.x);
            var y = this.lerp(num, start.y, end.y);
            var result = cc.v2(x, y);
            return result;
        }
        else if (startValue instanceof cc.Color && endValue instanceof cc.Color) {
            var start = startValue;
            var end = endValue;
            var r = this.lerp(num, start.getR(), end.getR());
            var g = this.lerp(num, start.getG(), end.getG());
            var b = this.lerp(num, start.getB(), end.getB());
            var a = this.lerp(num, start.getA(), end.getA());
            var result = cc.color(r, g, b, a);
            return result;
        }
    };
    Util.getRandomInt = function (min, max) {
        if (min > max) {
            var temp = min;
            min = max;
            max = temp;
        }
        return Math.floor(Math.random() * (max - min) + min);
    };
    Util.getRandomFloat = function (min, max) {
        if (min > max) {
            var temp = min;
            min = max;
            max = temp;
        }
        return Math.random() * (max - min) + min;
    };
    /**
     * 超长字符用’...‘替代
     * @param str
     * @param maxLen
     */
    Util.subString = function (str, maxLen, suffix) {
        if (maxLen === void 0) { maxLen = 10; }
        if (suffix === void 0) { suffix = '...'; }
        var len = this.getLength(str);
        var l = 0, i = 0;
        var a = str.split("");
        for (i = 0; i < a.length; i++) {
            if (a[i].charCodeAt(0) < 299) {
                l++;
                if (l > maxLen) {
                    l = l - 1;
                    break;
                }
            }
            else {
                l += 2;
                if (l > maxLen) {
                    l = l - 2;
                    break;
                }
            }
        }
        return str.substr(0, i) + (len > maxLen ? suffix : '');
    };
    Util.getLength = function (str) {
        var n_str = new String(str);
        var bytesCount = 0;
        for (var i = 0, n = n_str.length; i < n; i++) {
            var c = n_str.charCodeAt(i);
            if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
                bytesCount += 1;
            }
            else {
                bytesCount += 2;
            }
        }
        return bytesCount;
    };
    /**
     * 分隔符分割字符串
     * @param str
     * @param sep
     * @param len
     */
    Util.formatString = function (str, sep, len) {
        if (sep === void 0) { sep = ','; }
        if (len === void 0) { len = 3; }
        str = str.toString();
        var strLen = str.length;
        var newStr = str;
        for (var i = strLen - len; i > 0; i -= len) {
            var left = str.substring(0, i);
            var right = str.substring(i);
            newStr = left + sep + right;
            strLen = str.length;
            str = newStr;
        }
        return newStr;
    };
    /**字符串分割为数组 */
    Util.stringToArray = function (str, sep) {
        if (sep === void 0) { sep = ';'; }
        if (!str)
            return [];
        var new_list = [];
        var list = str.replace(' ', '').split(sep);
        list.forEach(function (key) {
            if (key != null && key !== undefined && key != '') {
                if (!isNaN(Number(key))) {
                    key = Number(key);
                }
                new_list.push(key);
            }
        });
        return new_list;
    };
    /**删除字符串左右空格 */
    Util.trim = function (str) {
        if (typeof str !== 'string')
            return str;
        return str.replace(/(^\s*)|(\s*$)/g, "");
    };
    /**
     * 转换秒数时间为标准样式
     */
    Util.convertTimeToStandStyle = function (second) {
        var sec = second % 60;
        second -= sec;
        var min = second / 60;
        var minN = min % 60;
        min -= minN;
        var hour = min / 60;
        return (hour > 0 ? (hour + ":") : "") +
            (minN > 0 ? (minN >= 10 ? minN : "0" + minN) : "00") + ":" +
            (sec > 0 ? (sec >= 10 ? sec : "0" + sec) : "00");
    };
    /**将秒转为 [时，分,秒] */
    Util.convertTimeToStandStyle2 = function (second) {
        var hour = second >= 3600 ? Math.floor(second / 3600) : 0;
        second -= hour * 3600;
        var min = second >= 60 ? Math.floor(second / 60) : 0;
        second -= min * 60;
        var sec = second;
        return [hour, min, sec];
    };
    Util.formatData = function (time) {
        if (time === void 0) { time = null; }
        if (!time)
            time = Date.now();
        var date = new Date(time);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? "0" + String(m) : m;
        var d = date.getDate();
        d = d < 10 ? "0" + String(d) : d;
        var h = date.getHours();
        h = h < 10 ? "0" + String(h) : h;
        var minute = date.getMinutes();
        minute = minute < 10 ? "0" + String(minute) : minute;
        var second = date.getSeconds();
        second = second < 10 ? "0" + String(second) : second;
        // return `${String(y)}-${String(m)}-${String(d)}   ${String(h)}:${String(
        //     minute
        // )}:${String(second)}`
        return String(y) + "/" + String(m) + "/" + String(d) + " " + String(h) + ":" + String(minute);
    };
    /**检查数组中是否有相同vec */
    Util.checkSameVec = function (vecArr, vec) {
        if (vecArr.length <= 0) {
            return false;
        }
        for (var i = 0; i < vecArr.length; i++) {
            if (vecArr[i].x == vec.x && vecArr[i].y == vec.y) {
                return true;
            }
        }
        return false;
    };
    /**从数组中随机取值 */
    Util.getRandomValue = function (arr) {
        var index = Math.floor(Math.random() * arr.length);
        return { value: arr[index], key: index };
    };
    /**copy数组 */
    Util.copyArr = function (arr) {
        if (arr.length <= 0) {
            return [];
        }
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
        return newArr;
    };
    /**随机打乱数组顺序 */
    Util.randomArrOrder = function (arr) {
        var _a;
        var i = arr.length;
        while (i) {
            var j = Math.floor(Math.random() * i--);
            _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
        }
        return arr;
    };
    /**获取两数组的不同值 */
    Util.getArrDifference = function (arr1, arr2) {
        return arr1.concat(arr2).filter(function (v, i, arr) {
            return arr.indexOf(v) === arr.lastIndexOf(v);
        });
    };
    /**获取两数组相同值 */
    Util.getArrSame = function (arr1, arr2) {
        return arr1.filter(function (item) {
            var idList = arr2.map(function (val) { return val.name; });
            return idList.indexOf(item.name) != -1;
        });
    };
    /**获取两数组相同值 */
    Util.getCommonElements = function (arr1, arr2) {
        return arr1.filter(function (item) { return arr2.includes(item); });
    };
    /**限制取值范围 */
    Util.clampValue = function (val, min, max) {
        if (min == max) {
            return min;
        }
        if (min > max) {
            var temp = min;
            min = max;
            max = temp;
        }
        return val < min ? min : val > max ? max : val;
    };
    /**检查vec数组中是否有值与vec相等 不考虑顺序 */
    Util.checkSameVecNoOrder = function (vecArr, vec) {
        if (vecArr.length <= 0) {
            return false;
        }
        for (var i = 0; i < vecArr.length; i++) {
            if ((vecArr[i].x == vec.x && vecArr[i].y == vec.y) || (vecArr[i].x == vec.y && vecArr[i].y == vec.x)) {
                return true;
            }
        }
        return false;
    };
    /**检查两个向量是否相等 */
    Util.checkVecIsSame = function (vec1, vec2) {
        return vec1.x == vec2.x && vec1.y == vec2.y;
    };
    /**
     * !#en Test line and line
     * !#zh 测试线段与线段是否相交
     * @method lineLine
     * @param {Vec2} a1 - The start point of the first line
     * @param {Vec2} a2 - The end point of the first line
     * @param {Vec2} b1 - The start point of the second line
     * @param {Vec2} b2 - The end point of the second line
     * @return {boolean}
     */
    Util.checkLineIntersect = function (a1, a2, b1, b2) {
        var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
        var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
        var u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
        if (u_b !== 0) {
            var ua = ua_t / u_b;
            var ub = ub_t / u_b;
            if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
                return true;
            }
        }
        return false;
    };
    /**将字符串数组转为number数组 */
    Util.changeStrArrToNumArr = function (strArr) {
        var numArr = [];
        for (var i = 0; i < strArr.length; i++) {
            numArr.push(Number(strArr[i]));
        }
        return numArr;
    };
    /**获取一个num数组中的最大值 */
    Util.getMaxNumInNumArr = function (arr) {
        return arr.sort().reverse()[0];
    };
    /**克隆一个字符串 */
    Util.copyStr = function (str) {
        var newStr = "";
        for (var i = 0; i < str.length; i++) {
            newStr += str[i];
        }
        return newStr;
    };
    /**
 * 遍历执行//遍历某个节点的所有子节点包括自己，并可执行设置的操作
 * @param tarNode 遍历的根结点
 * @param execute 每个节点执行的操作
 */
    Util.TraversalExecute = function (tarNode, execute) {
        var _this = this;
        execute(tarNode);
        tarNode.children.forEach(function (value) {
            _this.TraversalExecute(value, execute);
        });
    };
    /**检查当前值是否在目标值允许误差范围内 */
    Util.checkValueRandom = function (value, tarVal, error) {
        return value >= tarVal - error && value <= tarVal + error;
    };
    /**判断两个多边形碰撞器是否相交 */
    Util.polygonPolygonTest = function (polygon1, polygon2) {
        if (!polygon1 || !polygon2) {
            return false;
        }
        if (!polygon1.node.active || !polygon2.node.active) {
            return false;
        }
        var points1 = [];
        for (var i = 0; i < polygon1.points.length; i++) {
            var pos = polygon1.node.convertToWorldSpaceAR(polygon1.points[i]);
            points1.push(pos);
        }
        var points2 = [];
        for (var i = 0; i < polygon2.points.length; i++) {
            var pos = polygon2.node.convertToWorldSpaceAR(polygon2.points[i]);
            points2.push(pos);
        }
        return cc.Intersection.polygonPolygon(points1, points2);
    };
    /**判断两个多边形碰撞器是否有接触 部分相交返回true，完全包含，完全无接触返回false
     */
    Util.linePolygonTest = function (polygon1, polygon2) {
        if (!polygon1 || !polygon2) {
            return false;
        }
        if (!polygon1.node.active || !polygon2.node.active) {
            return false;
        }
        for (var i = 0; i < polygon2.points.length; i++) {
            var vec = polygon2.points[i];
            var a1 = polygon2.node.convertToWorldSpaceAR(vec);
            a1 = polygon1.node.convertToNodeSpaceAR(a1);
            var a2 = null;
            if (i < polygon2.points.length - 1) {
                a2 = polygon2.node.convertToWorldSpaceAR(polygon2.points[i + 1]);
            }
            else {
                a2 = polygon2.node.convertToWorldSpaceAR(polygon2.points[0]);
            }
            a2 = polygon1.node.convertToNodeSpaceAR(a2);
            var isCollider = cc.Intersection.linePolygon(a1, a2, polygon1.points);
            if (isCollider) {
                return true;
            }
        }
        return false;
    };
    /**测试一个世界坐标系的点是否在多边形碰撞器内 */
    Util.polygonHitTest = function (polyCol, touchPos) {
        touchPos = polyCol.node.convertToNodeSpaceAR(touchPos);
        return cc.Intersection.pointInPolygon(touchPos, polyCol.points);
    };
    /**判断两个线段是否相交，如果相交 返回两个线段的交点
     * @param {Vec2} a - The start point of the first line
     * @param {Vec2} b - The end point of the first line
     * @param {Vec2} c - The start point of the second line
     * @param {Vec2} d - The end point of the second line
     * @return {boolean}
     */
    Util.segmentsIntr = function (a, b, c, d) {
        /** 1 解线性方程组, 求线段交点. **/
        // 如果分母为0 则平行或共线, 不相交  
        var denominator = (b.y - a.y) * (d.x - c.x) - (a.x - b.x) * (c.y - d.y);
        if (denominator == 0) {
            return false;
        }
        // 线段所在直线的交点坐标 (x , y)      
        var x = ((b.x - a.x) * (d.x - c.x) * (c.y - a.y)
            + (b.y - a.y) * (d.x - c.x) * a.x
            - (d.y - c.y) * (b.x - a.x) * c.x) / denominator;
        var y = -((b.y - a.y) * (d.y - c.y) * (c.x - a.x)
            + (b.x - a.x) * (d.y - c.y) * a.y
            - (d.x - c.x) * (b.y - a.y) * c.y) / denominator;
        /** 2 判断交点是否在两条线段上 **/
        if (
        // 交点在线段1上  
        (x - a.x) * (x - b.x) <= 0 && (y - a.y) * (y - b.y) <= 0
            // 且交点也在线段2上  
            && (x - c.x) * (x - d.x) <= 0 && (y - c.y) * (y - d.y) <= 0) {
            // 返回交点p  
            return cc.v2(x, y);
        }
        //否则不相交  
        return false;
    };
    /**屏幕适配，返回界面缩放比例 */
    Util.sceneAdaptation = function () {
        var frameSize = cc.view.getVisibleSize();
        var canvasSize = cc.view.getDesignResolutionSize();
        console.log("frameSize = ", frameSize);
        console.log("canvasSize = ", canvasSize);
        console.log(cc.view.getCanvasSize());
        var aspectRatio = frameSize.width / frameSize.height;
        console.log("aspectRatio = ", aspectRatio);
        var adapScale = 1;
        var canvasAr = canvasSize.width / canvasSize.height;
        if (canvasAr < 1) {
            var scale = canvasSize.height / frameSize.height;
            adapScale = canvasSize.width / (frameSize.width * scale);
            adapScale = adapScale > 1 ? 1 : adapScale;
            // if (aspectRatio > 0.5625) {
            //     adapScale *= (aspectRatio / 0.5625);
            // }
            console.log("竖屏 ", adapScale);
        }
        else {
            canvasAr = canvasSize.height / canvasSize.width;
            var scale = canvasSize.width / frameSize.width;
            adapScale = canvasSize.height / (frameSize.height * scale);
            console.log("横屏 ", adapScale);
        }
        return adapScale;
    };
    /**
* 从数组中删除一个元素
* @param array 数组
* @param element 需要删除的元素
*/
    Util.deleteElement = function (array, element) {
        var index = array.indexOf(element);
        if (index >= 0) {
            array.splice(index, 1);
            // console.log("移除TimeManager 监听成功 ", element)
        }
        return array;
    };
    /**
* 从数组中删除一组元素
* @param array 数组
* @param element 需要删除的元素组
*/
    Util.deleteElements = function (array, deleteArray) {
        var _this = this;
        if (array == null || deleteArray == null) {
            return;
        }
        deleteArray.forEach(function (value) {
            _this.deleteElement(array, value);
        });
        return array;
    };
    Util.deleteElementByRule = function (array, targetOrder) {
        return Util.deleteElement(array, Util.find(array, targetOrder));
    };
    Util.deleteElementsByRule = function (array, targetOrder) {
        return Util.deleteElements(array, array.filter(function (a) { return targetOrder(a); }));
    };
    /**
    * 寻找数组中的第一个符合条件的元素
    * @param array
    * @param preciate
    */
    Util.find = function (array, preciate) {
        if (array == null || array.length == 0) {
            return null;
        }
        if (preciate == null) {
            return array[0];
        }
        var result = null;
        for (var i = 0; i < array.length; i++) {
            if (preciate(array[i])) {
                result = array[i];
                break;
            }
        }
        return result;
    };
    /**获取一组随机数 */
    Util.getRandomNum = function (numLength) {
        var num = "";
        for (var i = 0; i < numLength; i++) {
            num += this.getRandomInt(0, 9);
        }
        return Number(num);
    };
    /**
     * 是否是以后的天数
     * @param lastTime 上次时间
     * @param curTime 当前时间
     */
    Util.isNextDay = function (lastTime, curTime) {
        if (lastTime > curTime) {
            return false;
        }
        else if (curTime - lastTime >= 24 * 60 * 60 * 1000) {
            return true;
        }
        else {
            var lastDate = new Date(lastTime);
            var curDate = new Date(curTime);
            return lastDate.getDay() != curDate.getDay();
        }
    };
    /**
     * 是否是以后的周
     * @param lastTime 上次时间
     * @param curTime 当前时间
     */
    Util.isNextWeek = function (lastTime, curTime) {
        if (lastTime > curTime) {
            return false;
        }
        else if (curTime - lastTime >= 24 * 60 * 60 * 1000 * 7) {
            return true;
        }
        else {
            var lastDate = new Date(lastTime);
            var curDate = new Date(curTime);
            return curDate.getDay() < lastDate.getDay() || (curDate.getDay() == lastDate.getDay() && curTime - lastTime > 24 * 60 * 60 * 1000);
        }
    };
    Util.getAllEnumNums = function (enumType) {
        var objs = [];
        for (var de in enumType) {
            if (!isNaN(parseInt(de))) {
                objs.push(parseInt(de));
            }
        }
        return objs;
    };
    /**获取枚举的value数组 */
    Util.getAllEnumValues = function (enumType) {
        var objs = [];
        for (var key in enumType) {
            objs.push(enumType[key]);
        }
        return objs;
    };
    Util.getAllEnumKeys = function (enumType) {
        var objs = [];
        for (var key in enumType) {
            if (isNaN(Number(key))) {
                objs.push(key);
            }
        }
        return objs;
    };
    /**获取一个随机枚举 */
    Util.getRandomEnum = function (enumType) {
        var strs = [];
        for (var key in enumType) {
            strs.push(key);
        }
        this.randomArrOrder(strs);
        return enumType[strs[0]];
    };
    /**根据权重随机取值 */
    Util.getRandomEleInWeight = function (objs) {
        if (objs == null || objs.length == 0) {
            return null;
        }
        var allWeight = 0;
        var curWeight = 0;
        var objsProb = [];
        objs.forEach(function (value) {
            allWeight += value[1];
            objsProb.push([value[0], curWeight, curWeight + value[1]]);
            curWeight += value[1];
        });
        var rand = Math.random() * allWeight;
        for (var i = 0; i < objsProb.length; i++) {
            if (rand > objsProb[i][1] && rand <= objsProb[i][2]) {
                return objsProb[i][0];
            }
        }
        return null;
    };
    /**获取矩形范围内随机一点 */
    Util.getRandomPosInRect = function (rect) {
        return cc.v2(rect.x + Math.random() * rect.width, rect.y + Math.random() * rect.height);
    };
    /**添加一个子节点并添加脚本 */
    Util.addComponentNode = function (paNode, className) {
        var node = new cc.Node(className);
        node.parent = paNode;
        var classSrc = node.addComponent(className);
        return classSrc;
    };
    /**根据对象的value获取key */
    Util.getObjKeyByValue = function (record, value) {
        return Object.keys(record).find(function (k) {
            return record[k] === value;
        });
    };
    /**屏幕震动效果 */
    Util.shakeAnim = function (node, loopTimes) {
        if (loopTimes === void 0) { loopTimes = 1; }
        return new Promise(function (resolve, reject) {
            node.stopAllActions();
            cc.tween(node)
                .to(0.02, { position: cc.v3(5, 7) })
                .to(0.02, { position: cc.v3(-6, 7) })
                .to(0.02, { position: cc.v3(-13, 3) })
                .to(0.02, { position: cc.v3(3, -6) })
                .to(0.02, { position: cc.v3(-5, 5) })
                .to(0.02, { position: cc.v3(2, -8) })
                .to(0.02, { position: cc.v3(-8, 10) })
                .to(0.02, { position: cc.v3(3, 10) })
                .to(0.02, { position: cc.v3(0, 0) })
                .union()
                .repeat(loopTimes)
                .call(function () {
                resolve(null);
            })
                .start();
        });
    };
    /**将富文本替换成可使用打字机效果显示的文本数组2 */
    Util.richTextTypewrite = function (str) {
        var charArr = str.replace(/<.+?\/?>/g, '').split('');
        var tempStrArr = [str];
        for (var i = charArr.length; i > 1; i--) {
            var curStr = tempStrArr[charArr.length - i];
            var lastIdx = curStr.lastIndexOf(charArr[i - 1]);
            var prevStr = curStr.slice(0, lastIdx);
            var nextStr = curStr.slice(lastIdx + 1, curStr.length);
            tempStrArr.push(prevStr + nextStr);
        }
        tempStrArr = tempStrArr.reverse();
        // console.log(tempStrArr)
        return tempStrArr;
    };
    /**将富文本替换成可使用打字机效果显示的文本数组 性能较差*/
    Util.replaceRichText = function (str) {
        var regex = /<.+?\/?>/g; // 匹配尖括号标签
        var matchArr = str.match(regex);
        var specialChar = "│";
        var replaceStr = str.replace(regex, specialChar); // 标签数组
        var textArr = replaceStr.split(specialChar); // 文字数组
        var strArr = []; // 存放处理过的文字数组
        var paraNum = 0; // 待替换参数个数
        for (var _i = 0, textArr_1 = textArr; _i < textArr_1.length; _i++) {
            var text = textArr_1[_i];
            // 非空字符替换成类似 $[0-n] 参数
            if (text !== "") {
                text = "$[" + paraNum + "]";
                paraNum += 1;
            }
            strArr.push(text);
        }
        var templetStr = strArr.join(specialChar); // 数组转成待替换字符串
        for (var index = 0; index < textArr.length; index++) {
            // 转换代替换字符串之后, 删除文字数组多余空字符
            if (textArr[index] === "") {
                textArr.splice(index, 1);
                index = index - 1;
            }
        }
        while (templetStr.search(specialChar) !== -1) {
            // 数组转成的字符串原本 '特殊字符' 位置都是富文本标签的位置, 替换回标签
            if (matchArr[0]) {
                templetStr = templetStr.replace(specialChar, matchArr[0].toString());
                matchArr.splice(0, 1);
            }
            else {
                templetStr = templetStr.replace(specialChar, ""); // 空字符串替换,防止死循环
                console.warn("matchArr not enough");
            }
        }
        var lastStrArr = []; // 转换后富文本数组
        var arrayParm = new Array(paraNum).fill(""); // 替换参数数组
        for (var i = 0; i < textArr.length; i++) {
            for (var _a = 0, _b = textArr[i]; _a < _b.length; _a++) {
                var text = _b[_a];
                arrayParm[i] = arrayParm[i] + text;
                var replaceStr1 = templetStr;
                for (var index = 0; index < paraNum; index++) {
                    replaceStr1 = replaceStr1.replace("$[" + index + "]", arrayParm[index]);
                }
                lastStrArr.push(replaceStr1);
            }
        }
        return lastStrArr;
    };
    /**
     * 格式化时间戳
     * @param date Date
     * @param fmt 格式，默认 yyyy/MM/dd hh:mm:ss
     *
     * 【可用标志：y-年 | M-月 | d-日 | h-小时 | m-分 | s-秒 | q-季度 | S-毫秒】
     *
     * @returns String
     */
    Util.dateFormat = function (date, fmt) {
        if (fmt === void 0) { fmt = 'yyyy/MM/dd hh:mm:ss'; }
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds() //毫秒   
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    };
    /**
     * 获取某一位的值
     * @param flag
     * @param position
     * @returns
     */
    Util.getBitValue = function (flag, position) {
        return ((1 << (position - 1)) & flag) > 0 ? 1 : 0;
    };
    /**
   * 1为真0为假
   * @param flag
   * @param position
   */
    Util.checkBitValue = function (flag, position) {
        return this.getBitValue(flag, position) == 1 ? true : false;
    };
    /**
     * 设置富文本数字字体大小
     * @param richText 原富文本
     * @param num_size 数字字体大小
     * @returns 新文本
     */
    Util.setRichTextNumberSize = function (richText, num_size) {
        var reg = new RegExp("^(<.*?>)[0-9]+", "g");
        var results = richText.match(reg);
        if (!results || results.length <= 0)
            return richText;
        results.forEach(function (res) { return richText.replace(res, "<size=" + num_size + ">" + res + "</size>"); });
        return richText;
    };
    /**
    * 格式化时间到分
    * @param time 时间(单位：秒)
    * @returns (分:秒)
    */
    Util.formatTimeToMin = function (time, withZH) {
        if (withZH === void 0) { withZH = false; }
        var min = Math.floor(time / 60);
        var sec = Math.ceil(time % 60);
        return withZH ? this.keepIntUnits(min, 2) + "\u5206" + this.keepIntUnits(sec, 2) + "\u79D2" : this.keepIntUnits(min, 2) + ":" + this.keepIntUnits(sec, 2);
    };
    /**
     * 格式化时间
     * @param time 秒
     * @param fmt 显示格式
     * @param fix 后缀
     * @returns
     */
    Util.formatTime = function (time, fmt, fix) {
        if (fmt === void 0) { fmt = "dhms"; }
        if (fix === void 0) { fix = { d: "d", h: "h", m: "m", s: "s" }; }
        var day = this.keepIntUnits(Math.floor(time / (24 * 3600)), 2);
        var hour = this.keepIntUnits(Math.floor(time / 3600) % 24, 2);
        var min = this.keepIntUnits(Math.floor(time / 60) % 60, 2);
        var sec = this.keepIntUnits(Math.floor(time % 60), 2);
        var obj = { d: day, h: hour, m: min, s: sec };
        var str = "";
        for (var i = 0; i < fmt.length; i++) {
            var fixs = fix && fix[fmt[i]];
            str += obj[fmt[i]] + fixs;
            if (fixs == "" && i < fmt.length - 1) {
                str += ":";
            }
        }
        return str;
    };
    /**
    * 设置整形数字固定位数（不足的部分用0充填，超出设定长度或者不为整形则直接返回字符串形式）
    * @param int 要调整位数的数字
    * @param units 要调整的位数
    * @returns 调整后的字符串
    */
    Util.keepIntUnits = function (int, units) {
        if (!Number.isInteger(int) || int.toString().length >= units)
            return int.toString();
        var intStr = int.toString();
        var str = [];
        for (var i = 0; i < units; i++) {
            if (i < intStr.length) {
                str.push(intStr.charAt(i));
            }
            else {
                str.unshift("0");
            }
        }
        return str.join("");
    };
    /**获取节点相对自身的矩形范围 */
    Util.getSelfRect = function (node) {
        return cc.rect(-node.width * node.anchorX, -node.height * node.anchorY, node.width, node.height);
    };
    /**
     * 等比分割矩形
     * @param rect 原矩形
     * @param row 行数
     * @param col 列数
     * @returns 切割后的矩形
     */
    Util.splitRect = function (rect, row, col) {
        var splitRects = [];
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < col; j++) {
                splitRects.push(cc.rect(rect.x + j * rect.width / col, rect.y + i * rect.height / row, rect.width / col, rect.height / row));
            }
        }
        return splitRects;
    };
    Util.formatCountPerKilo = function (count, fractionDigits, kiloLimit, milloneLimit) {
        if (fractionDigits === void 0) { fractionDigits = 1; }
        if (kiloLimit === void 0) { kiloLimit = 10000; }
        if (milloneLimit === void 0) { milloneLimit = 100000000; }
        fractionDigits = Math.max(fractionDigits, 0);
        if (count >= milloneLimit) {
            return (Math.floor(count /= Math.pow(10, 8 - fractionDigits)) / Math.pow(10, fractionDigits)) + "亿";
        }
        else if (count >= kiloLimit) {
            return (Math.floor(count /= Math.pow(10, 4 - fractionDigits)) / Math.pow(10, fractionDigits)) + "万";
        }
        else {
            return count + "";
        }
    };
    Util.sum = function (arr) {
        var res = 0;
        arr.forEach(function (num) { return res += num; });
        return res;
    };
    Util.isValid = function (value) {
        return value != null && cc.isValid(value, true);
    };
    Util.convertStrToNumber = function (str) {
        var value = 0;
        if (str.includes("万")) {
            str = str.replace("万", "");
            value = Number(str) * 10000;
        }
        else if (str.includes("亿")) {
            str = str.replace("亿", "");
            value = Number(str) * 100000000;
        }
        else {
            value = Number(str);
        }
        return value || 0;
    };
    /**
     * 将一个值随机分成几份
     * @param total 值
     * @param parts 要分的份数
     * @param maxOffsetPer 最大差值百分比
     * @param isInt 是否整型
     * @returns
     */
    Util.splitIntoRandomShares = function (total, parts, maxOffsetPer, isInt) {
        if (maxOffsetPer === void 0) { maxOffsetPer = 0.2; }
        if (isInt === void 0) { isInt = true; }
        var shares = [];
        var partNum = total / parts;
        if (isInt) {
            if (!this.isInteger(partNum)) {
                partNum = Math.ceil(partNum);
            }
        }
        var maxOffset = partNum * maxOffsetPer / 2;
        if (isInt)
            maxOffset = Math.floor(maxOffset);
        var max = partNum + maxOffset;
        var min = partNum - maxOffset;
        for (var i = 0; i < parts - 1; i++) {
            var randomShare = isInt ? this.getRandomInt(min, max) : this.getRandomFloat(min, max);
            shares.push(randomShare);
            total -= randomShare;
        }
        shares.push(total);
        shares.sort(function () { return Math.random() - 0.5; });
        return shares;
    };
    /**动态构建枚举 */
    Util.createEnum = function (enumObj) {
        return Object.keys(enumObj).reduce(function (prev, key) {
            prev[key] = enumObj[key];
            return prev;
        }, {});
    };
    /**
     * 获得贝塞尔曲线的途径点坐标数组
     * @param posArr 三阶贝塞尔的四个点,数组对应为 0起点,1起点控制点,2终点控制点,3终点
     * @param interval 间隔 每次迭代步长,这个值越小越精细,但是效率越低
     * @returns
     */
    Util.getBezierPointArr = function (posArr, interval) {
        if (interval === void 0) { interval = 300; }
        var allBezierPos = [];
        var gap = 1 / interval;
        for (var i = 0; i <= 1; i += gap) {
            var pos = this._caculateBezierP(posArr, i);
            allBezierPos.push(pos);
        }
        return allBezierPos;
    };
    /**
     * 计算三阶贝塞尔在 t时刻 的位置
     * @param p 三阶贝塞尔的四个点,数组对应为 0起点,1起点控制点,2终点控制点,3终点
     * @param t 传入0-1的值,一个时间的迭代过程
     * @returns
     */
    Util._caculateBezierP = function (p, t) {
        // 三阶贝塞尔运算
        var bezierP = cc.v2();
        bezierP.x = Math.floor(Math.pow(1 - t, 3) * p[0].x + 3 * t * Math.pow(1 - t, 2) * p[1].x + 3 * Math.pow(t, 2) * (1 - t) * p[2].x + Math.pow(t, 3) * p[3].x);
        bezierP.y = Math.floor(Math.pow(1 - t, 3) * p[0].y + 3 * t * Math.pow(1 - t, 2) * p[1].y + 3 * Math.pow(t, 2) * (1 - t) * p[2].y + Math.pow(t, 3) * p[3].y);
        return bezierP;
    };
    /**
     * 获得以每万为单位的数值字符串
     * @param value 原数值
     * @param decimal 小数位
     * @returns
     */
    Util.getFormatValueStr = function (value, decimal) {
        if (decimal === void 0) { decimal = 1; }
        if (value >= Math.pow(10, 12)) { //京
            return Math.floor(value / Math.pow(10, 12 - decimal)) / Math.pow(10, decimal) + "t";
        }
        else if (value >= Math.pow(10, 9)) { //兆
            return Math.floor(value / Math.pow(10, 9 - decimal)) / Math.pow(10, decimal) + "g";
        }
        else if (value >= Math.pow(10, 6)) { //亿
            return Math.floor(value / Math.pow(10, 6 - decimal)) / Math.pow(10, decimal) + "m";
        }
        else if (value >= Math.pow(10, 3)) { //万
            return Math.floor(value / Math.pow(10, 3 - decimal)) / Math.pow(10, decimal) + "k";
        }
        else {
            return value.toString();
        }
    };
    /**判断值是否为整型 */
    Util.isInteger = function (value) {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
    };
    Util.xMin = 0;
    Util.yMin = 0;
    Util.xMax = 3120;
    Util.yMax = 3120;
    return Util;
}());
exports.Util = Util;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBQUE7SUF5c0NBLENBQUM7SUF2c0NHOzs7O0dBSUQ7SUFDUSxvQkFBZSxHQUF0QixVQUFnQyxHQUFXLEVBQUUsR0FBUztRQUFULG9CQUFBLEVBQUEsU0FBUztRQUNsRCxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU07WUFDcEIsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDcEI7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sR0FBVSxDQUFDO0lBQ3RCLENBQUM7SUFFYSxxQkFBZ0IsR0FBOUIsVUFBK0IsSUFBYTtRQUN4QyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsT0FBTztTQUNWO1FBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM3QjtRQUVELE9BQU8sTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFYSxpQkFBWSxHQUExQixVQUEyQixJQUFhO1FBQ3BDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNq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RSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4RSxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLElBQUksRUFBRSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7WUFFcEIsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUMxQyxPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7UUFFRCxP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Q0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDMUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2NBQy9CLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDM0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2NBQy9CLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBRXJELHNCQUFzQjtRQUN0QjtRQUNJLFlBQVk7UUFDWixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxD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QUFBLEVBQUEsUUFBZ0IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtRQUNsRyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUM5QyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lB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RSxDQUFDLEVBQUUsRUFBRSxDQUFBO1FBQzlCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1SixPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUosT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksc0JBQWlCLEdBQXhCLFVBQXlCLEtBQWEsRUFBRSxPQUFtQjtRQUFuQix3QkFBQSxFQUFBLFdBQW1CO1FBQ3ZELElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUMsR0FBRztZQUMvQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUN2RjthQUFNLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsR0FBRztZQUNyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUN0RjthQUFNLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsR0FBRztZQUNyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUN0RjthQUFNLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsR0FBRztZQUNyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUN0RjthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRUQsY0FBYztJQUNQLGNBQVMsR0FBaEIsVUFBaUIsS0FBVTtRQUN2QixPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUM7SUFDdkYsQ0FBQztJQXZnQ3NCLFNBQUksR0FBRyxDQUFDLENBQUM7SUFDVCxTQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ1QsU0FBSSxHQUFHLElBQUksQ0FBQztJQUNaLFNBQUksR0FBRyxJQUFJLENBQUM7SUFxZ0N2QyxXQUFDO0NBenNDRCxBQXlzQ0MsSUFBQTtBQXpzQ1ksb0JBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNsYXNzIFV0aWwge1xyXG5cclxuICAgIC8qKlxyXG4gKiDlsIblrZfnrKbkuLLovazmjaLkuLrkuIDnu7TmlbDnu4RcclxuICogQHBhcmFtIHN0ciDnm67moIflrZfnrKbkuLJcclxuICogQHBhcmFtIHNlcCDliIbpmpTnrKYg6buY6K6k5Li6XCIsXCJcclxuICovXHJcbiAgICBzdGF0aWMgY29udmVydFN0clRvQXJyPFQgPSBhbnk+KHN0cjogc3RyaW5nLCBzZXAgPSBcIixcIikge1xyXG4gICAgICAgIGlmICghc3RyKSByZXR1cm4gW107XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGxldCBzdWJTdHJBcnIgPSBzdHIuc3BsaXQoc2VwKTtcclxuICAgICAgICBzdWJTdHJBcnIuZm9yRWFjaChzdWJTdHIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoTnVtYmVyKHN1YlN0cikgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgYXJyLnB1c2goc3ViU3RyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKHN1YlN0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBhcnIgYXMgVFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0V29ybGRQb3NpdGlvbihub2RlOiBjYy5Ob2RlKTogY2MuVmVjMiB7XHJcbiAgICAgICAgaWYgKCFub2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwYXJlbnQgPSBub2RlLmdldFBhcmVudCgpO1xyXG4gICAgICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0V29ybGRTaXplKG5vZGU6IGNjLk5vZGUpOiBjYy5TaXplIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IG5vZGUuZ2V0Q29udGVudFNpemUoKTtcclxuICAgICAgICBzaXplLmhlaWdodCAqPSBub2RlLnNjYWxlO1xyXG4gICAgICAgIHNpemUud2lkdGggKj0gbm9kZS5zY2FsZTtcclxuICAgICAgICBsZXQgcGFyZW50ID0gbm9kZS5nZXRQYXJlbnQoKTtcclxuICAgICAgICB3aGlsZSAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHNpemUuaGVpZ2h0ICo9IHBhcmVudC5zY2FsZTtcclxuICAgICAgICAgICAgc2l6ZS53aWR0aCAqPSBwYXJlbnQuc2NhbGU7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRXb3JsZFNpemUobm9kZTogY2MuTm9kZSwgc2l6ZTogY2MuU2l6ZSk6IHZvaWQge1xyXG4gICAgICAgIG5vZGUuc2V0Q29udGVudFNpemUoc2l6ZSk7XHJcbiAgICAgICAgc2l6ZS5oZWlnaHQgLz0gbm9kZS5zY2FsZTtcclxuICAgICAgICBzaXplLndpZHRoIC89IG5vZGUuc2NhbGU7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IG5vZGUuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgd2hpbGUgKHBhcmVudCkge1xyXG4gICAgICAgICAgICBub2RlLndpZHRoIC89IHBhcmVudC5zY2FsZTtcclxuICAgICAgICAgICAgbm9kZS5oZWlnaHQgLz0gcGFyZW50LnNjYWxlO1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0V29ybGRTY2FsZShub2RlOiBjYy5Ob2RlKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgc2NhbGUgPSBub2RlLnNjYWxlO1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBub2RlLmdldFBhcmVudCgpO1xyXG4gICAgICAgIHdoaWxlIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgc2NhbGUgKj0gcGFyZW50LnNjYWxlO1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFdvcmxkUG9zaXRpb24obm9kZTogY2MuTm9kZSwgd29ybGRQb3M6IGNjLlZlYzIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIW5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF3b3JsZFBvcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGFyZW50ID0gbm9kZS5nZXRQYXJlbnQoKVxyXG4gICAgICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24od29ybGRQb3MpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsb2NhbFBvcyA9IHBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRXb3JsZFJvdGF0aW9uKG5vZGU6IGNjLk5vZGUpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCByb3QgPSBub2RlLnJvdGF0aW9uO1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBub2RlLmdldFBhcmVudCgpO1xyXG4gICAgICAgIHdoaWxlIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgcm90ICs9IHBhcmVudC5yb3RhdGlvbjtcclxuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm90O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0V29ybGRSb3RhdGlvbldpdGhSb3QocGFyZW50OiBjYy5Ob2RlLCBsb2NhbFJvdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgcm90ID0gbG9jYWxSb3Q7XHJcbiAgICAgICAgd2hpbGUgKHBhcmVudCkge1xyXG4gICAgICAgICAgICByb3QgKz0gcGFyZW50LnJvdGF0aW9uO1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRMb2NhbFJvdGF0aW9uKHRhcmdldE5vZGU6IGNjLk5vZGUsIHdvcmxkUm90OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCByb3QgPSB3b3JsZFJvdDtcclxuICAgICAgICBsZXQgcGFyZW50ID0gdGFyZ2V0Tm9kZS5nZXRQYXJlbnQoKTtcclxuICAgICAgICB3aGlsZSAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJvdCAtPSBwYXJlbnQucm90YXRpb247XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFdvcmxkUm90YXRpb24obm9kZTogY2MuTm9kZSwgd29ybGRSb3Q6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIG5vZGUucm90YXRpb24gPSB3b3JsZFJvdDtcclxuICAgICAgICBsZXQgcGFyZW50ID0gbm9kZS5nZXRQYXJlbnQoKTtcclxuICAgICAgICB3aGlsZSAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIG5vZGUucm90YXRpb24gLT0gcGFyZW50LnJvdGF0aW9uO1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGlzdGFuY2UoYTogY2MuVmVjMiwgYjogY2MuVmVjMik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKCFhIHx8ICFiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZlYyA9IG5ldyBjYy5WZWMyKGEueCAtIGIueCwgYS55IC0gYi55KTtcclxuICAgICAgICByZXR1cm4gdmVjLm1hZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdmVjKHN0YXJ0OiBjYy5Ob2RlLCBlbmQ6IGNjLk5vZGUpOiBjYy5WZWMyIHtcclxuICAgICAgICBpZiAoIXN0YXJ0IHx8ICFlbmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYSA9IHRoaXMuZ2V0V29ybGRQb3NpdGlvbihzdGFydCk7XHJcbiAgICAgICAgbGV0IGIgPSB0aGlzLmdldFdvcmxkUG9zaXRpb24oZW5kKTtcclxuICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzIoYi54IC0gYS54LCBiLnkgLSBhLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6KeS5bqm6L2s5ZCR6YePXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlZ3JlZXNUb1ZlY3RvcnMoZGVncmVlKSB7XHJcbiAgICAgICAgbGV0IHJhZGlhbiA9IGNjLm1pc2MuZGVncmVlc1RvUmFkaWFucyhkZWdyZWUpO1xyXG4gICAgICAgIGxldCBjb21WZWMgPSBjYy52MigwLCAxKTtcclxuICAgICAgICBsZXQgZGlyVmVjID0gY29tVmVjLnJvdGF0ZSgtcmFkaWFuKTtcclxuICAgICAgICByZXR1cm4gZGlyVmVjO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5ZCR6YeP6L2s6KeS5bqmXHJcbiAgICBwdWJsaWMgc3RhdGljIHZlY3RvcnNUb0RlZ3Jlc3MoZGlyVmVjOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgbGV0IGNvbVZlYyA9IGNjLnYyKDAsIDEpO1xyXG4gICAgICAgIGxldCByYWRpYW4gPSBkaXJWZWMubm9ybWFsaXplKCkuc2lnbkFuZ2xlKGNvbVZlYyk7XHJcbiAgICAgICAgbGV0IGRlZ3JlZSA9IGNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyhyYWRpYW4pO1xyXG4gICAgICAgIHJldHVybiBkZWdyZWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5ZCR6YeP6L2s5byn5bqmICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHZlY3RvclRvUmFkaWFuKGRpclZlYzogY2MuVmVjMikge1xyXG4gICAgICAgIHJldHVybiBkaXJWZWMubm9ybWFsaXplKCkuc2lnbkFuZ2xlKGNjLnYyKDAsIDEpKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+axguS4pOWQkemHj+WkueinklxyXG4gICAgcHVibGljIHN0YXRpYyBnZXREZWdyZWVCeVZlYyh2ZWMxOiBjYy5WZWMyLCB2ZWMyOiBjYy5WZWMyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgcmFkaWFuID0gdmVjMS5ub3JtYWxpemUoKS5zaWduQW5nbGUodmVjMi5ub3JtYWxpemUoKSk7XHJcbiAgICAgICAgbGV0IGRlZ3JlZSA9IGNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyhyYWRpYW4pO1xyXG4gICAgICAgIGlmIChkZWdyZWUgPCAtOTApIHtcclxuICAgICAgICAgICAgZGVncmVlID0gLTkwIC0gKDkwICsgZGVncmVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRlZ3JlZSA+IDkwKSB7XHJcbiAgICAgICAgICAgIGRlZ3JlZSA9IDE4MCAtIGRlZ3JlZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlZ3JlZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGEg6LW354K5XHJcbiAgICAgKiBAcGFyYW0gYiDnu4jngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB2ZWN0b3IoYTogY2MuVmVjMiwgYjogY2MuVmVjMik6IGNjLlZlYzIge1xyXG4gICAgICAgIGlmICghYSB8fCAhYikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2MuVmVjMi5VUDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZlY3RvciA9IG5ldyBjYy5WZWMyKCk7XHJcbiAgICAgICAgdmVjdG9yLnggPSBiLnggLSBhLng7XHJcbiAgICAgICAgdmVjdG9yLnkgPSBiLnkgLSBhLnk7XHJcblxyXG4gICAgICAgIHJldHVybiB2ZWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSB4TWluID0gMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgeU1pbiA9IDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHhNYXggPSAzMTIwO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSB5TWF4ID0gMzEyMDtcclxuXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIGNsYW1wUG9zaXRpb24ocG9zaXRpb246IGNjLlZlYzIsIHJhZGl1czogbnVtYmVyKTogY2MuVmVjMiB7XHJcbiAgICAvLyAgICAgbGV0IHggPSBjYy5taXNjLmNsYW1wZihwb3NpdGlvbi54LCB0aGlzLnhNaW4gKyByYWRpdXMsIHRoaXMueE1heCAtIHJhZGl1cyk7XHJcbiAgICAvLyAgICAgbGV0IHkgPSBjYy5taXNjLmNsYW1wZihwb3NpdGlvbi55LCB0aGlzLnlNaW4gKyByYWRpdXMsIHRoaXMueU1heCAtIHJhZGl1cyk7XHJcbiAgICAvLyAgICAgcmV0dXJuIGNjLnYyKHgsIHkpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2FjdWxhdGVSYWRpdXMoYzogbnVtYmVyLCBtaW5SYWRpdXM6IG51bWJlciwgbWF4UmFkaXVzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCByID0gYyAvICgyICogTWF0aC5QSSk7XHJcbiAgICAgICAgcmV0dXJuIGNjLm1pc2MuY2xhbXBmKHIsIG1pblJhZGl1cywgbWF4UmFkaXVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPluW+l+W8gOWni+WAvOWSjOe7k+adn+WAvOS5i+mXtOeahOaPkuWAvFxyXG4gICAgICogQHBhcmFtIG51bSAwLTEg6KGo56S65LuO5byA5aeL5YC85Yiw57uT5p2f5YC85LmL6Ze055qE5q+U5L6LXHJcbiAgICAgKiBAcGFyYW0gc3RhcnRWYWx1ZSDlvIDlp4vlgLxcclxuICAgICAqIEBwYXJhbSBlbmRWYWx1ZSDnu5PmnZ/lgLxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBsZXJwKG51bTogbnVtYmVyLCBzdGFydFZhbHVlOiBudW1iZXIgfCBjYy5WZWMyIHwgY2MuQ29sb3IsIGVuZFZhbHVlOiBudW1iZXIgfCBjYy5WZWMyIHwgY2MuQ29sb3IpOiBudW1iZXIgfCBjYy5WZWMyIHwgY2MuQ29sb3Ige1xyXG4gICAgICAgIG51bSA9IGNjLm1pc2MuY2xhbXBmKG51bSwgMCwgMSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzdGFydFZhbHVlID09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGVuZFZhbHVlID09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHN0YXJ0VmFsdWUgKyAoZW5kVmFsdWUgLSBzdGFydFZhbHVlKSAqIG51bTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKHN0YXJ0VmFsdWUgaW5zdGFuY2VvZiBjYy5WZWMyIHx8IHN0YXJ0VmFsdWUgaW5zdGFuY2VvZiBjYy5WZWMzKSAmJiAoZW5kVmFsdWUgaW5zdGFuY2VvZiBjYy5WZWMyIHx8IGVuZFZhbHVlIGluc3RhbmNlb2YgY2MuVmVjMykpIHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gc3RhcnRWYWx1ZSBhcyBjYy5WZWMyO1xyXG4gICAgICAgICAgICBsZXQgZW5kID0gZW5kVmFsdWUgYXMgY2MuVmVjMjtcclxuICAgICAgICAgICAgbGV0IHggPSB0aGlzLmxlcnAobnVtLCBzdGFydC54LCBlbmQueCkgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgeSA9IHRoaXMubGVycChudW0sIHN0YXJ0LnksIGVuZC55KSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBjYy52Mih4LCB5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRWYWx1ZSBpbnN0YW5jZW9mIGNjLkNvbG9yICYmIGVuZFZhbHVlIGluc3RhbmNlb2YgY2MuQ29sb3IpIHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gc3RhcnRWYWx1ZSBhcyBjYy5Db2xvcjtcclxuICAgICAgICAgICAgbGV0IGVuZCA9IGVuZFZhbHVlIGFzIGNjLkNvbG9yO1xyXG4gICAgICAgICAgICBsZXQgciA9IHRoaXMubGVycChudW0sIHN0YXJ0LmdldFIoKSwgZW5kLmdldFIoKSkgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgZyA9IHRoaXMubGVycChudW0sIHN0YXJ0LmdldEcoKSwgZW5kLmdldEcoKSkgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgYiA9IHRoaXMubGVycChudW0sIHN0YXJ0LmdldEIoKSwgZW5kLmdldEIoKSkgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgYSA9IHRoaXMubGVycChudW0sIHN0YXJ0LmdldEEoKSwgZW5kLmdldEEoKSkgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gY2MuY29sb3IociwgZywgYiwgYSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKG1pbiA+IG1heCkge1xyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IG1pbjtcclxuICAgICAgICAgICAgbWluID0gbWF4O1xyXG4gICAgICAgICAgICBtYXggPSB0ZW1wO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmFuZG9tRmxvYXQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAobWluID4gbWF4KSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0gbWluO1xyXG4gICAgICAgICAgICBtaW4gPSBtYXg7XHJcbiAgICAgICAgICAgIG1heCA9IHRlbXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDotoXplb/lrZfnrKbnlKjigJkuLi7igJjmm7/ku6NcclxuICAgICAqIEBwYXJhbSBzdHIgXHJcbiAgICAgKiBAcGFyYW0gbWF4TGVuIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc3ViU3RyaW5nKHN0cjogc3RyaW5nLCBtYXhMZW46IG51bWJlciA9IDEwLCBzdWZmaXggPSAnLi4uJykge1xyXG4gICAgICAgIGxldCBsZW4gPSB0aGlzLmdldExlbmd0aChzdHIpO1xyXG5cclxuICAgICAgICBsZXQgbCA9IDAsIGkgPSAwO1xyXG4gICAgICAgIGxldCBhID0gc3RyLnNwbGl0KFwiXCIpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhW2ldLmNoYXJDb2RlQXQoMCkgPCAyOTkpIHtcclxuICAgICAgICAgICAgICAgIGwrKztcclxuICAgICAgICAgICAgICAgIGlmIChsID4gbWF4TGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbCA9IGwgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbCArPSAyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGwgPiBtYXhMZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBsID0gbCAtIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgaSkgKyAobGVuID4gbWF4TGVuID8gc3VmZml4IDogJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRMZW5ndGgoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgbl9zdHIgPSBuZXcgU3RyaW5nKHN0cik7XHJcbiAgICAgICAgbGV0IGJ5dGVzQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBuID0gbl9zdHIubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjID0gbl9zdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgaWYgKChjID49IDB4MDAwMSAmJiBjIDw9IDB4MDA3ZSkgfHwgKDB4ZmY2MCA8PSBjICYmIGMgPD0gMHhmZjlmKSkge1xyXG4gICAgICAgICAgICAgICAgYnl0ZXNDb3VudCArPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnl0ZXNDb3VudCArPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBieXRlc0NvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YiG6ZqU56ym5YiG5Ymy5a2X56ym5LiyXHJcbiAgICAgKiBAcGFyYW0gc3RyIFxyXG4gICAgICogQHBhcmFtIHNlcCBcclxuICAgICAqIEBwYXJhbSBsZW4gXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmb3JtYXRTdHJpbmcoc3RyOiBzdHJpbmcgfCBudW1iZXIsIHNlcDogc3RyaW5nID0gJywnLCBsZW46IG51bWJlciA9IDMpIHtcclxuICAgICAgICBzdHIgPSBzdHIudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgc3RyTGVuID0gc3RyLmxlbmd0aDtcclxuICAgICAgICBsZXQgbmV3U3RyID0gc3RyO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBzdHJMZW4gLSBsZW47IGkgPiAwOyBpIC09IGxlbikge1xyXG4gICAgICAgICAgICBsZXQgbGVmdCA9IHN0ci5zdWJzdHJpbmcoMCwgaSk7XHJcbiAgICAgICAgICAgIGxldCByaWdodCA9IHN0ci5zdWJzdHJpbmcoaSk7XHJcbiAgICAgICAgICAgIG5ld1N0ciA9IGxlZnQgKyBzZXAgKyByaWdodDtcclxuICAgICAgICAgICAgc3RyTGVuID0gc3RyLmxlbmd0aDtcclxuICAgICAgICAgICAgc3RyID0gbmV3U3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3U3RyXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5a2X56ym5Liy5YiG5Ymy5Li65pWw57uEICovXHJcbiAgICBzdGF0aWMgc3RyaW5nVG9BcnJheShzdHIsIHNlcCA9ICc7Jyk6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIGlmICghc3RyKSByZXR1cm4gW107XHJcbiAgICAgICAgbGV0IG5ld19saXN0ID0gW107XHJcbiAgICAgICAgbGV0IGxpc3QgPSBzdHIucmVwbGFjZSgnICcsICcnKS5zcGxpdChzZXApO1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoa2V5ICE9IG51bGwgJiYga2V5ICE9PSB1bmRlZmluZWQgJiYga2V5ICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKE51bWJlcihrZXkpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleSA9IE51bWJlcihrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV3X2xpc3QucHVzaChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld19saXN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWIoOmZpOWtl+espuS4suW3puWPs+epuuagvCAqL1xyXG4gICAgc3RhdGljIHRyaW0oc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHJldHVybiBzdHI7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXlxccyopfChcXHMqJCkvZywgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDovazmjaLnp5LmlbDml7bpl7TkuLrmoIflh4bmoLflvI9cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0VGltZVRvU3RhbmRTdHlsZShzZWNvbmQ6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHNlYyA9IHNlY29uZCAlIDYwO1xyXG4gICAgICAgIHNlY29uZCAtPSBzZWM7XHJcbiAgICAgICAgbGV0IG1pbiA9IHNlY29uZCAvIDYwO1xyXG4gICAgICAgIGxldCBtaW5OID0gbWluICUgNjA7XHJcbiAgICAgICAgbWluIC09IG1pbk47XHJcbiAgICAgICAgbGV0IGhvdXIgPSBtaW4gLyA2MDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChob3VyID4gMCA/IChob3VyICsgXCI6XCIpIDogXCJcIikgK1xyXG4gICAgICAgICAgICAobWluTiA+IDAgPyAobWluTiA+PSAxMCA/IG1pbk4gOiBcIjBcIiArIG1pbk4pIDogXCIwMFwiKSArIFwiOlwiICtcclxuICAgICAgICAgICAgKHNlYyA+IDAgPyAoc2VjID49IDEwID8gc2VjIDogXCIwXCIgKyBzZWMpIDogXCIwMFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlsIbnp5LovazkuLogW+aXtu+8jOWIhiznp5JdICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRUaW1lVG9TdGFuZFN0eWxlMihzZWNvbmQ6IG51bWJlcik6IG51bWJlcltdIHtcclxuICAgICAgICBsZXQgaG91ciA9IHNlY29uZCA+PSAzNjAwID8gTWF0aC5mbG9vcihzZWNvbmQgLyAzNjAwKSA6IDA7XHJcbiAgICAgICAgc2Vjb25kIC09IGhvdXIgKiAzNjAwO1xyXG4gICAgICAgIGxldCBtaW4gPSBzZWNvbmQgPj0gNjAgPyBNYXRoLmZsb29yKHNlY29uZCAvIDYwKSA6IDA7XHJcbiAgICAgICAgc2Vjb25kIC09IG1pbiAqIDYwO1xyXG4gICAgICAgIGxldCBzZWMgPSBzZWNvbmQ7XHJcbiAgICAgICAgcmV0dXJuIFtob3VyLCBtaW4sIHNlY107XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZm9ybWF0RGF0YSh0aW1lOiBzdHJpbmcgfCBudW1iZXIgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCF0aW1lKSB0aW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGltZSlcclxuICAgICAgICBjb25zdCB5ID0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICAgICAgbGV0IG06IHN0cmluZyB8IG51bWJlciA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICAgICAgICBtID0gbSA8IDEwID8gYDAke1N0cmluZyhtKX1gIDogbVxyXG4gICAgICAgIGxldCBkOiBzdHJpbmcgfCBudW1iZXIgPSBkYXRlLmdldERhdGUoKVxyXG4gICAgICAgIGQgPSBkIDwgMTAgPyBgMCR7U3RyaW5nKGQpfWAgOiBkXHJcbiAgICAgICAgbGV0IGg6IHN0cmluZyB8IG51bWJlciA9IGRhdGUuZ2V0SG91cnMoKVxyXG4gICAgICAgIGggPSBoIDwgMTAgPyBgMCR7U3RyaW5nKGgpfWAgOiBoXHJcbiAgICAgICAgbGV0IG1pbnV0ZTogc3RyaW5nIHwgbnVtYmVyID0gZGF0ZS5nZXRNaW51dGVzKClcclxuICAgICAgICBtaW51dGUgPSBtaW51dGUgPCAxMCA/IGAwJHtTdHJpbmcobWludXRlKX1gIDogbWludXRlXHJcbiAgICAgICAgbGV0IHNlY29uZDogc3RyaW5nIHwgbnVtYmVyID0gZGF0ZS5nZXRTZWNvbmRzKClcclxuICAgICAgICBzZWNvbmQgPSBzZWNvbmQgPCAxMCA/IGAwJHtTdHJpbmcoc2Vjb25kKX1gIDogc2Vjb25kXHJcbiAgICAgICAgLy8gcmV0dXJuIGAke1N0cmluZyh5KX0tJHtTdHJpbmcobSl9LSR7U3RyaW5nKGQpfSAgICR7U3RyaW5nKGgpfToke1N0cmluZyhcclxuICAgICAgICAvLyAgICAgbWludXRlXHJcbiAgICAgICAgLy8gKX06JHtTdHJpbmcoc2Vjb25kKX1gXHJcbiAgICAgICAgcmV0dXJuIGAke1N0cmluZyh5KX0vJHtTdHJpbmcobSl9LyR7U3RyaW5nKGQpfSAke1N0cmluZyhoKX06JHtTdHJpbmcoXHJcbiAgICAgICAgICAgIG1pbnV0ZVxyXG4gICAgICAgICl9YFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirmo4Dmn6XmlbDnu4TkuK3mmK/lkKbmnInnm7jlkIx2ZWMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tTYW1lVmVjKHZlY0FycjogY2MuVmVjMltdLCB2ZWM6IGNjLlZlYzIpIHtcclxuICAgICAgICBpZiAodmVjQXJyLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2ZWNBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHZlY0FycltpXS54ID09IHZlYy54ICYmIHZlY0FycltpXS55ID09IHZlYy55KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5LuO5pWw57uE5Lit6ZqP5py65Y+W5YC8ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFJhbmRvbVZhbHVlPFQ+KGFycjogVFtdKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGFycltpbmRleF0sIGtleTogaW5kZXggfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipjb3B55pWw57uEICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvcHlBcnI8VD4oYXJyOiBUW10pOiBUW10ge1xyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbmV3QXJyID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbmV3QXJyLnB1c2goYXJyW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld0FycjtcclxuICAgIH1cclxuXHJcbiAgICAvKirpmo/mnLrmiZPkubHmlbDnu4Tpobrluo8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tQXJyT3JkZXIoYXJyKSB7XHJcbiAgICAgICAgbGV0IGkgPSBhcnIubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChpKSB7XHJcbiAgICAgICAgICAgIGxldCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaS0tKTtcclxuICAgICAgICAgICAgW2FycltqXSwgYXJyW2ldXSA9IFthcnJbaV0sIGFycltqXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6I635Y+W5Lik5pWw57uE55qE5LiN5ZCM5YC8ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEFyckRpZmZlcmVuY2UoYXJyMSwgYXJyMik6IGFueVtdIHtcclxuICAgICAgICByZXR1cm4gYXJyMS5jb25jYXQoYXJyMikuZmlsdGVyKGZ1bmN0aW9uICh2LCBpLCBhcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFyci5pbmRleE9mKHYpID09PSBhcnIubGFzdEluZGV4T2Yodik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6I635Y+W5Lik5pWw57uE55u45ZCM5YC8ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEFyclNhbWUoYXJyMSwgYXJyMikge1xyXG4gICAgICAgIHJldHVybiBhcnIxLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgbGV0IGlkTGlzdCA9IGFycjIubWFwKHZhbCA9PiB2YWwubmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuIGlkTGlzdC5pbmRleE9mKGl0ZW0ubmFtZSkgIT0gLTFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPluS4pOaVsOe7hOebuOWQjOWAvCAqL1xyXG4gICAgc3RhdGljIGdldENvbW1vbkVsZW1lbnRzPFQ+KGFycjE6IFRbXSwgYXJyMjogVFtdKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gYXJyMS5maWx0ZXIoaXRlbSA9PiBhcnIyLmluY2x1ZGVzKGl0ZW0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirpmZDliLblj5blgLzojIPlm7QgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhbXBWYWx1ZSh2YWw6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKG1pbiA9PSBtYXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1pbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1pbiA+IG1heCkge1xyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IG1pbjtcclxuICAgICAgICAgICAgbWluID0gbWF4O1xyXG4gICAgICAgICAgICBtYXggPSB0ZW1wO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsIDwgbWluID8gbWluIDogdmFsID4gbWF4ID8gbWF4IDogdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuajgOafpXZlY+aVsOe7hOS4reaYr+WQpuacieWAvOS4jnZlY+ebuOetiSDkuI3ogIPomZHpobrluo8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tTYW1lVmVjTm9PcmRlcih2ZWNBcnI6IGNjLlZlYzJbXSwgdmVjOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgaWYgKHZlY0Fyci5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVjQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICgodmVjQXJyW2ldLnggPT0gdmVjLnggJiYgdmVjQXJyW2ldLnkgPT0gdmVjLnkpIHx8ICh2ZWNBcnJbaV0ueCA9PSB2ZWMueSAmJiB2ZWNBcnJbaV0ueSA9PSB2ZWMueCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmo4Dmn6XkuKTkuKrlkJHph4/mmK/lkKbnm7jnrYkgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tWZWNJc1NhbWUodmVjMTogY2MuVmVjMiwgdmVjMjogY2MuVmVjMikge1xyXG4gICAgICAgIHJldHVybiB2ZWMxLnggPT0gdmVjMi54ICYmIHZlYzEueSA9PSB2ZWMyLnk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAhI2VuIFRlc3QgbGluZSBhbmQgbGluZVxyXG4gICAgICogISN6aCDmtYvor5Xnur/mrrXkuI7nur/mrrXmmK/lkKbnm7jkuqRcclxuICAgICAqIEBtZXRob2QgbGluZUxpbmVcclxuICAgICAqIEBwYXJhbSB7VmVjMn0gYTEgLSBUaGUgc3RhcnQgcG9pbnQgb2YgdGhlIGZpcnN0IGxpbmVcclxuICAgICAqIEBwYXJhbSB7VmVjMn0gYTIgLSBUaGUgZW5kIHBvaW50IG9mIHRoZSBmaXJzdCBsaW5lXHJcbiAgICAgKiBAcGFyYW0ge1ZlYzJ9IGIxIC0gVGhlIHN0YXJ0IHBvaW50IG9mIHRoZSBzZWNvbmQgbGluZVxyXG4gICAgICogQHBhcmFtIHtWZWMyfSBiMiAtIFRoZSBlbmQgcG9pbnQgb2YgdGhlIHNlY29uZCBsaW5lXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNoZWNrTGluZUludGVyc2VjdChhMTogY2MuVmVjMiwgYTI6IGNjLlZlYzIsIGIxOiBjYy5WZWMyLCBiMjogY2MuVmVjMikge1xyXG5cclxuICAgICAgICB2YXIgdWFfdCA9IChiMi54IC0gYjEueCkgKiAoYTEueSAtIGIxLnkpIC0gKGIyLnkgLSBiMS55KSAqIChhMS54IC0gYjEueCk7XHJcbiAgICAgICAgdmFyIHViX3QgPSAoYTIueCAtIGExLngpICogKGExLnkgLSBiMS55KSAtIChhMi55IC0gYTEueSkgKiAoYTEueCAtIGIxLngpO1xyXG4gICAgICAgIHZhciB1X2IgPSAoYjIueSAtIGIxLnkpICogKGEyLnggLSBhMS54KSAtIChiMi54IC0gYjEueCkgKiAoYTIueSAtIGExLnkpO1xyXG5cclxuICAgICAgICBpZiAodV9iICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHZhciB1YSA9IHVhX3QgLyB1X2I7XHJcbiAgICAgICAgICAgIHZhciB1YiA9IHViX3QgLyB1X2I7XHJcblxyXG4gICAgICAgICAgICBpZiAoMCA8PSB1YSAmJiB1YSA8PSAxICYmIDAgPD0gdWIgJiYgdWIgPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlsIblrZfnrKbkuLLmlbDnu4TovazkuLpudW1iZXLmlbDnu4QgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hhbmdlU3RyQXJyVG9OdW1BcnIoc3RyQXJyOiBzdHJpbmdbXSk6IG51bWJlcltdIHtcclxuICAgICAgICBsZXQgbnVtQXJyID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbnVtQXJyLnB1c2goTnVtYmVyKHN0ckFycltpXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVtQXJyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPluS4gOS4qm51beaVsOe7hOS4reeahOacgOWkp+WAvCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRNYXhOdW1Jbk51bUFycihhcnI6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gYXJyLnNvcnQoKS5yZXZlcnNlKClbMF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5YWL6ZqG5LiA5Liq5a2X56ym5LiyICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvcHlTdHIoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBuZXdTdHIgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5ld1N0ciArPSBzdHJbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdTdHI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAqIOmBjeWOhuaJp+ihjC8v6YGN5Y6G5p+Q5Liq6IqC54K555qE5omA5pyJ5a2Q6IqC54K55YyF5ous6Ieq5bex77yM5bm25Y+v5omn6KGM6K6+572u55qE5pON5L2cXHJcbiAqIEBwYXJhbSB0YXJOb2RlIOmBjeWOhueahOaguee7k+eCuVxyXG4gKiBAcGFyYW0gZXhlY3V0ZSDmr4/kuKroioLngrnmiafooYznmoTmk43kvZxcclxuICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRyYXZlcnNhbEV4ZWN1dGUodGFyTm9kZTogY2MuTm9kZSwgZXhlY3V0ZTogKHNlbGZOb2RlOiBjYy5Ob2RlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgZXhlY3V0ZSh0YXJOb2RlKTtcclxuICAgICAgICB0YXJOb2RlLmNoaWxkcmVuLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuVHJhdmVyc2FsRXhlY3V0ZSh2YWx1ZSwgZXhlY3V0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5qOA5p+l5b2T5YmN5YC85piv5ZCm5Zyo55uu5qCH5YC85YWB6K646K+v5beu6IyD5Zu05YaFICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNoZWNrVmFsdWVSYW5kb20odmFsdWU6IG51bWJlciwgdGFyVmFsOiBudW1iZXIsIGVycm9yOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPj0gdGFyVmFsIC0gZXJyb3IgJiYgdmFsdWUgPD0gdGFyVmFsICsgZXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yik5pat5Lik5Liq5aSa6L655b2i56Kw5pKe5Zmo5piv5ZCm55u45LqkICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBvbHlnb25Qb2x5Z29uVGVzdChwb2x5Z29uMTogY2MuUG9seWdvbkNvbGxpZGVyLCBwb2x5Z29uMjogY2MuUG9seWdvbkNvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKCFwb2x5Z29uMSB8fCAhcG9seWdvbjIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXBvbHlnb24xLm5vZGUuYWN0aXZlIHx8ICFwb2x5Z29uMi5ub2RlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwb2ludHMxOiBjYy5WZWMyW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvbHlnb24xLnBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gcG9seWdvbjEubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9seWdvbjEucG9pbnRzW2ldKTtcclxuICAgICAgICAgICAgcG9pbnRzMS5wdXNoKHBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwb2ludHMyOiBjYy5WZWMyW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvbHlnb24yLnBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gcG9seWdvbjIubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9seWdvbjIucG9pbnRzW2ldKTtcclxuICAgICAgICAgICAgcG9pbnRzMi5wdXNoKHBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYy5JbnRlcnNlY3Rpb24ucG9seWdvblBvbHlnb24ocG9pbnRzMSwgcG9pbnRzMik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yik5pat5Lik5Liq5aSa6L655b2i56Kw5pKe5Zmo5piv5ZCm5pyJ5o6l6KemIOmDqOWIhuebuOS6pOi/lOWbnnRydWXvvIzlrozlhajljIXlkKvvvIzlrozlhajml6DmjqXop6bov5Tlm55mYWxzZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGxpbmVQb2x5Z29uVGVzdChwb2x5Z29uMTogY2MuUG9seWdvbkNvbGxpZGVyLCBwb2x5Z29uMjogY2MuUG9seWdvbkNvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKCFwb2x5Z29uMSB8fCAhcG9seWdvbjIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXBvbHlnb24xLm5vZGUuYWN0aXZlIHx8ICFwb2x5Z29uMi5ub2RlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9seWdvbjIucG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB2ZWMgPSBwb2x5Z29uMi5wb2ludHNbaV07XHJcbiAgICAgICAgICAgIGxldCBhMSA9IHBvbHlnb24yLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHZlYyk7XHJcbiAgICAgICAgICAgIGExID0gcG9seWdvbjEubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihhMSk7XHJcbiAgICAgICAgICAgIGxldCBhMiA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChpIDwgcG9seWdvbjIucG9pbnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIGEyID0gcG9seWdvbjIubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9seWdvbjIucG9pbnRzW2kgKyAxXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhMiA9IHBvbHlnb24yLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHBvbHlnb24yLnBvaW50c1swXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYTIgPSBwb2x5Z29uMS5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGEyKTtcclxuICAgICAgICAgICAgbGV0IGlzQ29sbGlkZXIgPSBjYy5JbnRlcnNlY3Rpb24ubGluZVBvbHlnb24oYTEsIGEyLCBwb2x5Z29uMS5wb2ludHMpO1xyXG4gICAgICAgICAgICBpZiAoaXNDb2xsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKua1i+ivleS4gOS4quS4lueVjOWdkOagh+ezu+eahOeCueaYr+WQpuWcqOWkmui+ueW9oueisOaSnuWZqOWGhSAqL1xyXG4gICAgc3RhdGljIHBvbHlnb25IaXRUZXN0KHBvbHlDb2w6IGNjLlBvbHlnb25Db2xsaWRlciwgdG91Y2hQb3M6IGNjLlZlYzIpIHtcclxuICAgICAgICB0b3VjaFBvcyA9IHBvbHlDb2wubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaFBvcyk7XHJcbiAgICAgICAgcmV0dXJuIGNjLkludGVyc2VjdGlvbi5wb2ludEluUG9seWdvbih0b3VjaFBvcywgcG9seUNvbC5wb2ludHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWIpOaWreS4pOS4que6v+auteaYr+WQpuebuOS6pO+8jOWmguaenOebuOS6pCDov5Tlm57kuKTkuKrnur/mrrXnmoTkuqTngrlcclxuICAgICAqIEBwYXJhbSB7VmVjMn0gYSAtIFRoZSBzdGFydCBwb2ludCBvZiB0aGUgZmlyc3QgbGluZVxyXG4gICAgICogQHBhcmFtIHtWZWMyfSBiIC0gVGhlIGVuZCBwb2ludCBvZiB0aGUgZmlyc3QgbGluZVxyXG4gICAgICogQHBhcmFtIHtWZWMyfSBjIC0gVGhlIHN0YXJ0IHBvaW50IG9mIHRoZSBzZWNvbmQgbGluZVxyXG4gICAgICogQHBhcmFtIHtWZWMyfSBkIC0gVGhlIGVuZCBwb2ludCBvZiB0aGUgc2Vjb25kIGxpbmVcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZWdtZW50c0ludHIoYTogY2MuVmVjMiwgYjogY2MuVmVjMiwgYzogY2MuVmVjMiwgZDogY2MuVmVjMikge1xyXG5cclxuICAgICAgICAvKiogMSDop6Pnur/mgKfmlrnnqIvnu4QsIOaxgue6v+auteS6pOeCuS4gKiovXHJcbiAgICAgICAgLy8g5aaC5p6c5YiG5q+N5Li6MCDliJnlubPooYzmiJblhbHnur8sIOS4jeebuOS6pCAgXHJcbiAgICAgICAgdmFyIGRlbm9taW5hdG9yID0gKGIueSAtIGEueSkgKiAoZC54IC0gYy54KSAtIChhLnggLSBiLngpICogKGMueSAtIGQueSk7XHJcbiAgICAgICAgaWYgKGRlbm9taW5hdG9yID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g57q/5q615omA5Zyo55u057q/55qE5Lqk54K55Z2Q5qCHICh4ICwgeSkgICAgICBcclxuICAgICAgICB2YXIgeCA9ICgoYi54IC0gYS54KSAqIChkLnggLSBjLngpICogKGMueSAtIGEueSlcclxuICAgICAgICAgICAgKyAoYi55IC0gYS55KSAqIChkLnggLSBjLngpICogYS54XHJcbiAgICAgICAgICAgIC0gKGQueSAtIGMueSkgKiAoYi54IC0gYS54KSAqIGMueCkgLyBkZW5vbWluYXRvcjtcclxuICAgICAgICB2YXIgeSA9IC0oKGIueSAtIGEueSkgKiAoZC55IC0gYy55KSAqIChjLnggLSBhLngpXHJcbiAgICAgICAgICAgICsgKGIueCAtIGEueCkgKiAoZC55IC0gYy55KSAqIGEueVxyXG4gICAgICAgICAgICAtIChkLnggLSBjLngpICogKGIueSAtIGEueSkgKiBjLnkpIC8gZGVub21pbmF0b3I7XHJcblxyXG4gICAgICAgIC8qKiAyIOWIpOaWreS6pOeCueaYr+WQpuWcqOS4pOadoee6v+auteS4iiAqKi9cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIC8vIOS6pOeCueWcqOe6v+autTHkuIogIFxyXG4gICAgICAgICAgICAoeCAtIGEueCkgKiAoeCAtIGIueCkgPD0gMCAmJiAoeSAtIGEueSkgKiAoeSAtIGIueSkgPD0gMFxyXG4gICAgICAgICAgICAvLyDkuJTkuqTngrnkuZ/lnKjnur/mrrUy5LiKICBcclxuICAgICAgICAgICAgJiYgKHggLSBjLngpICogKHggLSBkLngpIDw9IDAgJiYgKHkgLSBjLnkpICogKHkgLSBkLnkpIDw9IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8g6L+U5Zue5Lqk54K5cCAgXHJcbiAgICAgICAgICAgIHJldHVybiBjYy52Mih4LCB5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lkKbliJnkuI3nm7jkuqQgIFxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlsY/luZXpgILphY3vvIzov5Tlm57nlYzpnaLnvKnmlL7mr5TkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2NlbmVBZGFwdGF0aW9uKCkge1xyXG4gICAgICAgIGxldCBmcmFtZVNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XHJcbiAgICAgICAgbGV0IGNhbnZhc1NpemUgPSBjYy52aWV3LmdldERlc2lnblJlc29sdXRpb25TaXplKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmcmFtZVNpemUgPSBcIiwgZnJhbWVTaXplKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNhbnZhc1NpemUgPSBcIiwgY2FudmFzU2l6ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2Mudmlldy5nZXRDYW52YXNTaXplKCkpXHJcbiAgICAgICAgbGV0IGFzcGVjdFJhdGlvID0gZnJhbWVTaXplLndpZHRoIC8gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFzcGVjdFJhdGlvID0gXCIsIGFzcGVjdFJhdGlvKVxyXG4gICAgICAgIGxldCBhZGFwU2NhbGUgPSAxO1xyXG4gICAgICAgIGxldCBjYW52YXNBciA9IGNhbnZhc1NpemUud2lkdGggLyBjYW52YXNTaXplLmhlaWdodDtcclxuICAgICAgICBpZiAoY2FudmFzQXIgPCAxKSB7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IGNhbnZhc1NpemUuaGVpZ2h0IC8gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgYWRhcFNjYWxlID0gY2FudmFzU2l6ZS53aWR0aCAvIChmcmFtZVNpemUud2lkdGggKiBzY2FsZSk7XHJcbiAgICAgICAgICAgIGFkYXBTY2FsZSA9IGFkYXBTY2FsZSA+IDEgPyAxIDogYWRhcFNjYWxlO1xyXG4gICAgICAgICAgICAvLyBpZiAoYXNwZWN0UmF0aW8gPiAwLjU2MjUpIHtcclxuICAgICAgICAgICAgLy8gICAgIGFkYXBTY2FsZSAqPSAoYXNwZWN0UmF0aW8gLyAwLjU2MjUpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi56uW5bGPIFwiLCBhZGFwU2NhbGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbnZhc0FyID0gY2FudmFzU2l6ZS5oZWlnaHQgLyBjYW52YXNTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBsZXQgc2NhbGUgPSBjYW52YXNTaXplLndpZHRoIC8gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBhZGFwU2NhbGUgPSBjYW52YXNTaXplLmhlaWdodCAvIChmcmFtZVNpemUuaGVpZ2h0ICogc2NhbGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaoquWxjyBcIiwgYWRhcFNjYWxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFkYXBTY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuKiDku47mlbDnu4TkuK3liKDpmaTkuIDkuKrlhYPntKBcclxuKiBAcGFyYW0gYXJyYXkg5pWw57uEXHJcbiogQHBhcmFtIGVsZW1lbnQg6ZyA6KaB5Yig6Zmk55qE5YWD57SgXHJcbiovXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlbGV0ZUVsZW1lbnQ8VD4oYXJyYXk6IFRbXSwgZWxlbWVudDogVCk6IFRbXSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gYXJyYXkuaW5kZXhPZihlbGVtZW50KTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuenu+mZpFRpbWVNYW5hZ2VyIOebkeWQrOaIkOWKnyBcIiwgZWxlbWVudClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4qIOS7juaVsOe7hOS4reWIoOmZpOS4gOe7hOWFg+e0oFxyXG4qIEBwYXJhbSBhcnJheSDmlbDnu4RcclxuKiBAcGFyYW0gZWxlbWVudCDpnIDopoHliKDpmaTnmoTlhYPntKDnu4RcclxuKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVsZXRlRWxlbWVudHM8VD4oYXJyYXk6IFRbXSwgZGVsZXRlQXJyYXk6IFRbXSk6IFRbXSB7XHJcbiAgICAgICAgaWYgKGFycmF5ID09IG51bGwgfHwgZGVsZXRlQXJyYXkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZUFycmF5LmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlRWxlbWVudChhcnJheSwgdmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlbGV0ZUVsZW1lbnRCeVJ1bGU8VD4oYXJyYXk6IFRbXSwgdGFyZ2V0T3JkZXI6IChhOiBUKSA9PiBib29sZWFuKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gVXRpbC5kZWxldGVFbGVtZW50PFQ+KGFycmF5LCBVdGlsLmZpbmQ8VD4oYXJyYXksIHRhcmdldE9yZGVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkZWxldGVFbGVtZW50c0J5UnVsZTxUPihhcnJheTogVFtdLCB0YXJnZXRPcmRlcjogKGE6IFQpID0+IGJvb2xlYW4pOiBUW10ge1xyXG4gICAgICAgIHJldHVybiBVdGlsLmRlbGV0ZUVsZW1lbnRzPFQ+KGFycmF5LCBhcnJheS5maWx0ZXIoYSA9PiB0YXJnZXRPcmRlcihhKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDlr7vmib7mlbDnu4TkuK3nmoTnrKzkuIDkuKrnrKblkIjmnaHku7bnmoTlhYPntKBcclxuICAgICogQHBhcmFtIGFycmF5IFxyXG4gICAgKiBAcGFyYW0gcHJlY2lhdGUgXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBmaW5kPFQ+KGFycmF5OiBUW10sIHByZWNpYXRlOiAoYTogVCkgPT4gYm9vbGVhbik6IFQge1xyXG4gICAgICAgIGlmIChhcnJheSA9PSBudWxsIHx8IGFycmF5Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJlY2lhdGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXlbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHByZWNpYXRlKGFycmF5W2ldKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXJyYXlbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPluS4gOe7hOmaj+acuuaVsCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRSYW5kb21OdW0obnVtTGVuZ3RoOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBudW0gPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbnVtICs9IHRoaXMuZ2V0UmFuZG9tSW50KDAsIDkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTnVtYmVyKG51bSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbmmK/ku6XlkI7nmoTlpKnmlbBcclxuICAgICAqIEBwYXJhbSBsYXN0VGltZSDkuIrmrKHml7bpl7RcclxuICAgICAqIEBwYXJhbSBjdXJUaW1lIOW9k+WJjeaXtumXtFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzTmV4dERheShsYXN0VGltZTogbnVtYmVyLCBjdXJUaW1lOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAobGFzdFRpbWUgPiBjdXJUaW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjdXJUaW1lIC0gbGFzdFRpbWUgPj0gMjQgKiA2MCAqIDYwICogMTAwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbGFzdERhdGUgPSBuZXcgRGF0ZShsYXN0VGltZSk7XHJcbiAgICAgICAgICAgIGxldCBjdXJEYXRlID0gbmV3IERhdGUoY3VyVGltZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBsYXN0RGF0ZS5nZXREYXkoKSAhPSBjdXJEYXRlLmdldERheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuaYr+S7peWQjueahOWRqFxyXG4gICAgICogQHBhcmFtIGxhc3RUaW1lIOS4iuasoeaXtumXtFxyXG4gICAgICogQHBhcmFtIGN1clRpbWUg5b2T5YmN5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNOZXh0V2VlayhsYXN0VGltZTogbnVtYmVyLCBjdXJUaW1lOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAobGFzdFRpbWUgPiBjdXJUaW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjdXJUaW1lIC0gbGFzdFRpbWUgPj0gMjQgKiA2MCAqIDYwICogMTAwMCAqIDcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGxhc3REYXRlID0gbmV3IERhdGUobGFzdFRpbWUpO1xyXG4gICAgICAgICAgICBsZXQgY3VyRGF0ZSA9IG5ldyBEYXRlKGN1clRpbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gY3VyRGF0ZS5nZXREYXkoKSA8IGxhc3REYXRlLmdldERheSgpIHx8IChjdXJEYXRlLmdldERheSgpID09IGxhc3REYXRlLmdldERheSgpICYmIGN1clRpbWUgLSBsYXN0VGltZSA+IDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEFsbEVudW1OdW1zKGVudW1UeXBlOiBhbnkpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgbGV0IG9ianM6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgZGUgaW4gZW51bVR5cGUpIHtcclxuICAgICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChkZSkpKSB7XHJcbiAgICAgICAgICAgICAgICBvYmpzLnB1c2gocGFyc2VJbnQoZGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqcztcclxuICAgIH1cclxuXHJcbiAgICAvKirojrflj5bmnprkuL7nmoR2YWx1ZeaVsOe7hCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRBbGxFbnVtVmFsdWVzKGVudW1UeXBlOiBhbnkpOiBhbnlbXSB7XHJcbiAgICAgICAgbGV0IG9ianM6IGFueVtdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZW51bVR5cGUpIHtcclxuICAgICAgICAgICAgb2Jqcy5wdXNoKGVudW1UeXBlW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEFsbEVudW1LZXlzKGVudW1UeXBlOiBhbnkpOiBhbnlbXSB7XHJcbiAgICAgICAgbGV0IG9ianM6IGFueVtdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZW51bVR5cGUpIHtcclxuICAgICAgICAgICAgaWYgKGlzTmFOKE51bWJlcihrZXkpKSkge1xyXG4gICAgICAgICAgICAgICAgb2Jqcy5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9ianM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6I635Y+W5LiA5Liq6ZqP5py65p6a5Li+ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFJhbmRvbUVudW08VD4oZW51bVR5cGU6IFQpIHtcclxuICAgICAgICBsZXQgc3Ryczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBlbnVtVHlwZSkge1xyXG4gICAgICAgICAgICBzdHJzLnB1c2goa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yYW5kb21BcnJPcmRlcihzdHJzKTtcclxuICAgICAgICByZXR1cm4gZW51bVR5cGVbc3Ryc1swXV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5qC55o2u5p2D6YeN6ZqP5py65Y+W5YC8ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFJhbmRvbUVsZUluV2VpZ2h0PFQ+KG9ianM6IFtULCBudW1iZXJdW10pOiBUIHtcclxuICAgICAgICBpZiAob2JqcyA9PSBudWxsIHx8IG9ianMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhbGxXZWlnaHQgPSAwO1xyXG4gICAgICAgIGxldCBjdXJXZWlnaHQgPSAwO1xyXG4gICAgICAgIGxldCBvYmpzUHJvYjogW1QsIG51bWJlciwgbnVtYmVyXVtdID0gW107XHJcbiAgICAgICAgb2Jqcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBhbGxXZWlnaHQgKz0gdmFsdWVbMV07XHJcbiAgICAgICAgICAgIG9ianNQcm9iLnB1c2goW3ZhbHVlWzBdLCBjdXJXZWlnaHQsIGN1cldlaWdodCArIHZhbHVlWzFdXSk7XHJcbiAgICAgICAgICAgIGN1cldlaWdodCArPSB2YWx1ZVsxXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGgucmFuZG9tKCkgKiBhbGxXZWlnaHQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmpzUHJvYi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocmFuZCA+IG9ianNQcm9iW2ldWzFdICYmIHJhbmQgPD0gb2Jqc1Byb2JbaV1bMl0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmpzUHJvYltpXVswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKirojrflj5bnn6nlvaLojIPlm7TlhoXpmo/mnLrkuIDngrkgKi9cclxuICAgIHN0YXRpYyBnZXRSYW5kb21Qb3NJblJlY3QocmVjdDogY2MuUmVjdCkge1xyXG4gICAgICAgIHJldHVybiBjYy52MihyZWN0LnggKyBNYXRoLnJhbmRvbSgpICogcmVjdC53aWR0aCwgcmVjdC55ICsgTWF0aC5yYW5kb20oKSAqIHJlY3QuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmt7vliqDkuIDkuKrlrZDoioLngrnlubbmt7vliqDohJrmnKwgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYWRkQ29tcG9uZW50Tm9kZShwYU5vZGU6IGNjLk5vZGUsIGNsYXNzTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZShjbGFzc05hbWUpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gcGFOb2RlO1xyXG4gICAgICAgIGxldCBjbGFzc1NyYyA9IG5vZGUuYWRkQ29tcG9uZW50KGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzU3JjO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuagueaNruWvueixoeeahHZhbHVl6I635Y+Wa2V5ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE9iaktleUJ5VmFsdWU8VCwgVSBleHRlbmRzIFRba2V5b2YgVF0+KFxyXG4gICAgICAgIHJlY29yZDogVCxcclxuICAgICAgICB2YWx1ZTogVVxyXG4gICAgKToga2V5b2YgVCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIChPYmplY3Qua2V5cyhyZWNvcmQpIGFzIEFycmF5PGtleW9mIFQ+KS5maW5kKGsgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVjb3JkW2tdID09PSB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWxj+W5lemch+WKqOaViOaenCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzaGFrZUFuaW0obm9kZTogY2MuTm9kZSwgbG9vcFRpbWVzOiBudW1iZXIgPSAxKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMC4wMiwgeyBwb3NpdGlvbjogY2MudjMoNSwgNykgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjAyLCB7IHBvc2l0aW9uOiBjYy52MygtNiwgNykgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjAyLCB7IHBvc2l0aW9uOiBjYy52MygtMTMsIDMpIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4wMiwgeyBwb3NpdGlvbjogY2MudjMoMywgLTYpIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4wMiwgeyBwb3NpdGlvbjogY2MudjMoLTUsIDUpIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4wMiwgeyBwb3NpdGlvbjogY2MudjMoMiwgLTgpIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4wMiwgeyBwb3NpdGlvbjogY2MudjMoLTgsIDEwKSB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMDIsIHsgcG9zaXRpb246IGNjLnYzKDMsIDEwKSB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMDIsIHsgcG9zaXRpb246IGNjLnYzKDAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAudW5pb24oKVxyXG4gICAgICAgICAgICAgICAgLnJlcGVhdChsb29wVGltZXMpXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5bCG5a+M5paH5pys5pu/5o2i5oiQ5Y+v5L2/55So5omT5a2X5py65pWI5p6c5pi+56S655qE5paH5pys5pWw57uEMiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByaWNoVGV4dFR5cGV3cml0ZShzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBjaGFyQXJyID0gc3RyLnJlcGxhY2UoLzwuKz9cXC8/Pi9nLCAnJykuc3BsaXQoJycpO1xyXG4gICAgICAgIGxldCB0ZW1wU3RyQXJyID0gW3N0cl07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSBjaGFyQXJyLmxlbmd0aDsgaSA+IDE7IGktLSkge1xyXG4gICAgICAgICAgICBsZXQgY3VyU3RyID0gdGVtcFN0ckFycltjaGFyQXJyLmxlbmd0aCAtIGldO1xyXG4gICAgICAgICAgICBsZXQgbGFzdElkeCA9IGN1clN0ci5sYXN0SW5kZXhPZihjaGFyQXJyW2kgLSAxXSk7XHJcbiAgICAgICAgICAgIGxldCBwcmV2U3RyID0gY3VyU3RyLnNsaWNlKDAsIGxhc3RJZHgpO1xyXG4gICAgICAgICAgICBsZXQgbmV4dFN0ciA9IGN1clN0ci5zbGljZShsYXN0SWR4ICsgMSwgY3VyU3RyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHRlbXBTdHJBcnIucHVzaChwcmV2U3RyICsgbmV4dFN0cik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRlbXBTdHJBcnIgPSB0ZW1wU3RyQXJyLnJldmVyc2UoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZW1wU3RyQXJyKVxyXG4gICAgICAgIHJldHVybiB0ZW1wU3RyQXJyO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirlsIblr4zmlofmnKzmm7/mjaLmiJDlj6/kvb/nlKjmiZPlrZfmnLrmlYjmnpzmmL7npLrnmoTmlofmnKzmlbDnu4Qg5oCn6IO96L6D5beuKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVwbGFjZVJpY2hUZXh0KHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgcmVnZXggPSAvPC4rP1xcLz8+L2c7IC8vIOWMuemFjeWwluaLrOWPt+agh+etvlxyXG4gICAgICAgIGNvbnN0IG1hdGNoQXJyID0gc3RyLm1hdGNoKHJlZ2V4KTtcclxuICAgICAgICBjb25zdCBzcGVjaWFsQ2hhciA9IFwi4pSCXCI7XHJcbiAgICAgICAgY29uc3QgcmVwbGFjZVN0ciA9IHN0ci5yZXBsYWNlKHJlZ2V4LCBzcGVjaWFsQ2hhcik7IC8vIOagh+etvuaVsOe7hFxyXG4gICAgICAgIGNvbnN0IHRleHRBcnI6IHN0cmluZ1tdID0gcmVwbGFjZVN0ci5zcGxpdChzcGVjaWFsQ2hhcik7IC8vIOaWh+Wtl+aVsOe7hFxyXG4gICAgICAgIGNvbnN0IHN0ckFycjogc3RyaW5nW10gPSBbXTsgLy8g5a2Y5pS+5aSE55CG6L+H55qE5paH5a2X5pWw57uEXHJcbiAgICAgICAgbGV0IHBhcmFOdW0gPSAwOyAvLyDlvoXmm7/mjaLlj4LmlbDkuKrmlbBcclxuICAgICAgICBmb3IgKGxldCB0ZXh0IG9mIHRleHRBcnIpIHtcclxuICAgICAgICAgICAgLy8g6Z2e56m65a2X56ym5pu/5o2i5oiQ57G75Ly8ICRbMC1uXSDlj4LmlbBcclxuICAgICAgICAgICAgaWYgKHRleHQgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRleHQgPSBgJFske3BhcmFOdW19XWA7XHJcbiAgICAgICAgICAgICAgICBwYXJhTnVtICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RyQXJyLnB1c2godGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0ZW1wbGV0U3RyOiBzdHJpbmcgPSBzdHJBcnIuam9pbihzcGVjaWFsQ2hhcik7IC8vIOaVsOe7hOi9rOaIkOW+heabv+aNouWtl+espuS4slxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0ZXh0QXJyLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAvLyDovazmjaLku6Pmm7/mjaLlrZfnrKbkuLLkuYvlkI4sIOWIoOmZpOaWh+Wtl+aVsOe7hOWkmuS9meepuuWtl+esplxyXG4gICAgICAgICAgICBpZiAodGV4dEFycltpbmRleF0gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRleHRBcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gaW5kZXggLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh0ZW1wbGV0U3RyLnNlYXJjaChzcGVjaWFsQ2hhcikgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIOaVsOe7hOi9rOaIkOeahOWtl+espuS4suWOn+acrCAn54m55q6K5a2X56ymJyDkvY3nva7pg73mmK/lr4zmlofmnKzmoIfnrb7nmoTkvY3nva4sIOabv+aNouWbnuagh+etvlxyXG4gICAgICAgICAgICBpZiAobWF0Y2hBcnJbMF0pIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsZXRTdHIgPSB0ZW1wbGV0U3RyLnJlcGxhY2Uoc3BlY2lhbENoYXIsIG1hdGNoQXJyWzBdLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hBcnIuc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxldFN0ciA9IHRlbXBsZXRTdHIucmVwbGFjZShzcGVjaWFsQ2hhciwgXCJcIik7Ly8g56m65a2X56ym5Liy5pu/5o2iLOmYsuatouatu+W+queOr1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwibWF0Y2hBcnIgbm90IGVub3VnaFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsYXN0U3RyQXJyOiBzdHJpbmdbXSA9IFtdOyAvLyDovazmjaLlkI7lr4zmlofmnKzmlbDnu4RcclxuICAgICAgICBjb25zdCBhcnJheVBhcm06IHN0cmluZ1tdID0gbmV3IEFycmF5KHBhcmFOdW0pLmZpbGwoXCJcIik7IC8vIOabv+aNouWPguaVsOaVsOe7hFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRleHQgb2YgdGV4dEFycltpXSkge1xyXG4gICAgICAgICAgICAgICAgYXJyYXlQYXJtW2ldID0gYXJyYXlQYXJtW2ldICsgdGV4dDtcclxuICAgICAgICAgICAgICAgIGxldCByZXBsYWNlU3RyMSA9IHRlbXBsZXRTdHI7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFyYU51bTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VTdHIxID0gcmVwbGFjZVN0cjEucmVwbGFjZShgJFske2luZGV4fV1gLCBhcnJheVBhcm1baW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxhc3RTdHJBcnIucHVzaChyZXBsYWNlU3RyMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxhc3RTdHJBcnI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLzlvI/ljJbml7bpl7TmiLNcclxuICAgICAqIEBwYXJhbSBkYXRlIERhdGVcclxuICAgICAqIEBwYXJhbSBmbXQg5qC85byP77yM6buY6K6kIHl5eXkvTU0vZGQgaGg6bW06c3NcclxuICAgICAqIFxyXG4gICAgICog44CQ5Y+v55So5qCH5b+X77yaeS3lubQgfCBNLeaciCB8IGQt5pelIHwgaC3lsI/ml7YgfCBtLeWIhiB8IHMt56eSIHwgcS3lraPluqYgfCBTLeavq+enkuOAkVxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJucyBTdHJpbmdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBkYXRlRm9ybWF0KGRhdGU6IERhdGUsIGZtdCA9ICd5eXl5L01NL2RkIGhoOm1tOnNzJykge1xyXG4gICAgICAgIGxldCBvID0ge1xyXG4gICAgICAgICAgICBcIk0rXCI6IGRhdGUuZ2V0TW9udGgoKSArIDEsICAgICAgICAgICAgICAgICAvL+aciOS7vSAgIFxyXG4gICAgICAgICAgICBcImQrXCI6IGRhdGUuZ2V0RGF0ZSgpLCAgICAgICAgICAgICAgICAgICAgLy/ml6UgICBcclxuICAgICAgICAgICAgXCJoK1wiOiBkYXRlLmdldEhvdXJzKCksICAgICAgICAgICAgICAgICAgIC8v5bCP5pe2ICAgXHJcbiAgICAgICAgICAgIFwibStcIjogZGF0ZS5nZXRNaW51dGVzKCksICAgICAgICAgICAgICAgICAvL+WIhiAgIFxyXG4gICAgICAgICAgICBcInMrXCI6IGRhdGUuZ2V0U2Vjb25kcygpLCAgICAgICAgICAgICAgICAgLy/np5IgICBcclxuICAgICAgICAgICAgXCJxK1wiOiBNYXRoLmZsb29yKChkYXRlLmdldE1vbnRoKCkgKyAzKSAvIDMpLCAvL+Wto+W6piAgIFxyXG4gICAgICAgICAgICBcIlNcIjogZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAgICAgICAgICAgICAvL+avq+enkiAgIFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKC8oeSspLy50ZXN0KGZtdCkpIHtcclxuICAgICAgICAgICAgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoZGF0ZS5nZXRGdWxsWWVhcigpICsgXCJcIikuc3Vic3RyKDQgLSBSZWdFeHAuJDEubGVuZ3RoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGsgaW4gbykge1xyXG4gICAgICAgICAgICBpZiAobmV3IFJlZ0V4cChcIihcIiArIGsgKyBcIilcIikudGVzdChmbXQpKSB7XHJcbiAgICAgICAgICAgICAgICBmbXQgPSBmbXQucmVwbGFjZShSZWdFeHAuJDEsIChSZWdFeHAuJDEubGVuZ3RoID09IDEpID8gKG9ba10pIDogKChcIjAwXCIgKyBvW2tdKS5zdWJzdHIoKFwiXCIgKyBvW2tdKS5sZW5ndGgpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZtdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluafkOS4gOS9jeeahOWAvFxyXG4gICAgICogQHBhcmFtIGZsYWcgXHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRCaXRWYWx1ZShmbGFnOiBudW1iZXIsIHBvc2l0aW9uOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gKCgxIDw8IChwb3NpdGlvbiAtIDEpKSAmIGZsYWcpID4gMCA/IDEgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAqIDHkuLrnnJ8w5Li65YGHXHJcbiAgICogQHBhcmFtIGZsYWdcclxuICAgKiBAcGFyYW0gcG9zaXRpb25cclxuICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tCaXRWYWx1ZShmbGFnOiBudW1iZXIsIHBvc2l0aW9uOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCaXRWYWx1ZShmbGFnLCBwb3NpdGlvbikgPT0gMSA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWvjOaWh+acrOaVsOWtl+Wtl+S9k+Wkp+Wwj1xyXG4gICAgICogQHBhcmFtIHJpY2hUZXh0IOWOn+WvjOaWh+acrFxyXG4gICAgICogQHBhcmFtIG51bV9zaXplIOaVsOWtl+Wtl+S9k+Wkp+Wwj1xyXG4gICAgICogQHJldHVybnMg5paw5paH5pysXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0UmljaFRleHROdW1iZXJTaXplKHJpY2hUZXh0OiBzdHJpbmcsIG51bV9zaXplOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcmVnID0gbmV3IFJlZ0V4cChcIl4oPC4qPz4pWzAtOV0rXCIsIFwiZ1wiKTtcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IHJpY2hUZXh0Lm1hdGNoKHJlZyk7XHJcbiAgICAgICAgaWYgKCFyZXN1bHRzIHx8IHJlc3VsdHMubGVuZ3RoIDw9IDApIHJldHVybiByaWNoVGV4dDtcclxuICAgICAgICByZXN1bHRzLmZvckVhY2gocmVzID0+IHJpY2hUZXh0LnJlcGxhY2UocmVzLCBgPHNpemU9JHtudW1fc2l6ZX0+JHtyZXN9PC9zaXplPmApKTtcclxuICAgICAgICByZXR1cm4gcmljaFRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOagvOW8j+WMluaXtumXtOWIsOWIhlxyXG4gICAgKiBAcGFyYW0gdGltZSDml7bpl7Qo5Y2V5L2N77ya56eSKVxyXG4gICAgKiBAcmV0dXJucyAo5YiGOuenkilcclxuICAgICovXHJcbiAgICBzdGF0aWMgZm9ybWF0VGltZVRvTWluKHRpbWU6IG51bWJlciwgd2l0aFpIID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgbWluID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xyXG4gICAgICAgIGxldCBzZWMgPSBNYXRoLmNlaWwodGltZSAlIDYwKTtcclxuICAgICAgICByZXR1cm4gd2l0aFpIID8gYCR7dGhpcy5rZWVwSW50VW5pdHMobWluLCAyKX3liIYke3RoaXMua2VlcEludFVuaXRzKHNlYywgMil956eSYCA6IGAke3RoaXMua2VlcEludFVuaXRzKG1pbiwgMil9OiR7dGhpcy5rZWVwSW50VW5pdHMoc2VjLCAyKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIOagvOW8j+WMluaXtumXtCBcclxuICAgICAqIEBwYXJhbSB0aW1lIOenkiBcclxuICAgICAqIEBwYXJhbSBmbXQg5pi+56S65qC85byPIFxyXG4gICAgICogQHBhcmFtIGZpeCDlkI7nvIAgXHJcbiAgICAgKiBAcmV0dXJucyAgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmb3JtYXRUaW1lKHRpbWU6IG51bWJlciwgZm10OiBzdHJpbmcgPSBcImRobXNcIiwgZml4OiBPYmplY3QgPSB7IGQ6IFwiZFwiLCBoOiBcImhcIiwgbTogXCJtXCIsIHM6IFwic1wiIH0pIHtcclxuICAgICAgICBsZXQgZGF5ID0gdGhpcy5rZWVwSW50VW5pdHMoTWF0aC5mbG9vcih0aW1lIC8gKDI0ICogMzYwMCkpLCAyKTtcclxuICAgICAgICBsZXQgaG91ciA9IHRoaXMua2VlcEludFVuaXRzKE1hdGguZmxvb3IodGltZSAvIDM2MDApICUgMjQsIDIpO1xyXG4gICAgICAgIGxldCBtaW4gPSB0aGlzLmtlZXBJbnRVbml0cyhNYXRoLmZsb29yKHRpbWUgLyA2MCkgJSA2MCwgMik7XHJcbiAgICAgICAgbGV0IHNlYyA9IHRoaXMua2VlcEludFVuaXRzKE1hdGguZmxvb3IodGltZSAlIDYwKSwgMik7XHJcbiAgICAgICAgbGV0IG9iaiA9IHsgZDogZGF5LCBoOiBob3VyLCBtOiBtaW4sIHM6IHNlYyB9O1xyXG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm10Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBmaXhzID0gZml4ICYmIGZpeFtmbXRbaV1dO1xyXG4gICAgICAgICAgICBzdHIgKz0gb2JqW2ZtdFtpXV0gKyBmaXhzO1xyXG4gICAgICAgICAgICBpZiAoZml4cyA9PSBcIlwiICYmIGkgPCBmbXQubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgc3RyICs9IFwiOlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOiuvue9ruaVtOW9ouaVsOWtl+WbuuWumuS9jeaVsO+8iOS4jei2s+eahOmDqOWIhueUqDDlhYXloavvvIzotoXlh7rorr7lrprplb/luqbmiJbogIXkuI3kuLrmlbTlvaLliJnnm7TmjqXov5Tlm57lrZfnrKbkuLLlvaLlvI/vvIlcclxuICAgICogQHBhcmFtIGludCDopoHosIPmlbTkvY3mlbDnmoTmlbDlrZdcclxuICAgICogQHBhcmFtIHVuaXRzIOimgeiwg+aVtOeahOS9jeaVsFxyXG4gICAgKiBAcmV0dXJucyDosIPmlbTlkI7nmoTlrZfnrKbkuLJcclxuICAgICovXHJcbiAgICBzdGF0aWMga2VlcEludFVuaXRzKGludDogbnVtYmVyLCB1bml0czogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGludCkgfHwgaW50LnRvU3RyaW5nKCkubGVuZ3RoID49IHVuaXRzKSByZXR1cm4gaW50LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IGludFN0ciA9IGludC50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCBzdHI6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bml0czsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpIDwgaW50U3RyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3RyLnB1c2goaW50U3RyLmNoYXJBdChpKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdHIudW5zaGlmdChcIjBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0ci5qb2luKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPluiKgueCueebuOWvueiHqui6q+eahOefqeW9ouiMg+WbtCAqL1xyXG4gICAgc3RhdGljIGdldFNlbGZSZWN0KG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICByZXR1cm4gY2MucmVjdCgtbm9kZS53aWR0aCAqIG5vZGUuYW5jaG9yWCwgLW5vZGUuaGVpZ2h0ICogbm9kZS5hbmNob3JZLCBub2RlLndpZHRoLCBub2RlLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnrYnmr5TliIblibLnn6nlvaJcclxuICAgICAqIEBwYXJhbSByZWN0IOWOn+efqeW9olxyXG4gICAgICogQHBhcmFtIHJvdyDooYzmlbBcclxuICAgICAqIEBwYXJhbSBjb2wg5YiX5pWwXHJcbiAgICAgKiBAcmV0dXJucyDliIflibLlkI7nmoTnn6nlvaJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNwbGl0UmVjdChyZWN0OiBjYy5SZWN0LCByb3c6IG51bWJlciwgY29sOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgc3BsaXRSZWN0czogY2MuUmVjdFtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3c7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBzcGxpdFJlY3RzLnB1c2goY2MucmVjdChyZWN0LnggKyBqICogcmVjdC53aWR0aCAvIGNvbCwgcmVjdC55ICsgaSAqIHJlY3QuaGVpZ2h0IC8gcm93LCByZWN0LndpZHRoIC8gY29sLCByZWN0LmhlaWdodCAvIHJvdykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzcGxpdFJlY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmb3JtYXRDb3VudFBlcktpbG8oY291bnQ6IG51bWJlciwgZnJhY3Rpb25EaWdpdHM6IG51bWJlciA9IDEsIGtpbG9MaW1pdCA9IDEwMDAwLCBtaWxsb25lTGltaXQgPSAxMDAwMDAwMDApIHtcclxuICAgICAgICBmcmFjdGlvbkRpZ2l0cyA9IE1hdGgubWF4KGZyYWN0aW9uRGlnaXRzLCAwKTtcclxuICAgICAgICBpZiAoY291bnQgPj0gbWlsbG9uZUxpbWl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoTWF0aC5mbG9vcihjb3VudCAvPSBNYXRoLnBvdygxMCwgOCAtIGZyYWN0aW9uRGlnaXRzKSkgLyBNYXRoLnBvdygxMCwgZnJhY3Rpb25EaWdpdHMpKSArIFwi5Lq/XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb3VudCA+PSBraWxvTGltaXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChNYXRoLmZsb29yKGNvdW50IC89IE1hdGgucG93KDEwLCA0IC0gZnJhY3Rpb25EaWdpdHMpKSAvIE1hdGgucG93KDEwLCBmcmFjdGlvbkRpZ2l0cykpICsgXCLkuIdcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY291bnQgKyBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3VtKGFycjogbnVtYmVyW10pIHtcclxuICAgICAgICBsZXQgcmVzID0gMDtcclxuICAgICAgICBhcnIuZm9yRWFjaChudW0gPT4gcmVzICs9IG51bSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNWYWxpZCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGNjLmlzVmFsaWQodmFsdWUsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb252ZXJ0U3RyVG9OdW1iZXIoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSAwO1xyXG4gICAgICAgIGlmIChzdHIuaW5jbHVkZXMoXCLkuIdcIikpIHtcclxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoXCLkuIdcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHN0cikgKiAxMDAwMDtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0ci5pbmNsdWRlcyhcIuS6v1wiKSkge1xyXG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShcIuS6v1wiLCBcIlwiKTtcclxuICAgICAgICAgICAgdmFsdWUgPSBOdW1iZXIoc3RyKSAqIDEwMDAwMDAwMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IE51bWJlcihzdHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWUgfHwgMFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bCG5LiA5Liq5YC86ZqP5py65YiG5oiQ5Yeg5Lu9XHJcbiAgICAgKiBAcGFyYW0gdG90YWwg5YC8XHJcbiAgICAgKiBAcGFyYW0gcGFydHMg6KaB5YiG55qE5Lu95pWwXHJcbiAgICAgKiBAcGFyYW0gbWF4T2Zmc2V0UGVyIOacgOWkp+W3ruWAvOeZvuWIhuavlFxyXG4gICAgICogQHBhcmFtIGlzSW50IOaYr+WQpuaVtOWei1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzcGxpdEludG9SYW5kb21TaGFyZXModG90YWw6IG51bWJlciwgcGFydHM6IG51bWJlciwgbWF4T2Zmc2V0UGVyOiBudW1iZXIgPSAwLjIsIGlzSW50OiBib29sZWFuID0gdHJ1ZSk6IG51bWJlcltdIHtcclxuICAgICAgICBjb25zdCBzaGFyZXMgPSBbXTtcclxuICAgICAgICBsZXQgcGFydE51bSA9IHRvdGFsIC8gcGFydHM7XHJcbiAgICAgICAgaWYgKGlzSW50KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ludGVnZXIocGFydE51bSkpIHtcclxuICAgICAgICAgICAgICAgIHBhcnROdW0gPSBNYXRoLmNlaWwocGFydE51bSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1heE9mZnNldCA9IHBhcnROdW0gKiBtYXhPZmZzZXRQZXIgLyAyO1xyXG4gICAgICAgIGlmIChpc0ludCkgbWF4T2Zmc2V0ID0gTWF0aC5mbG9vcihtYXhPZmZzZXQpO1xyXG4gICAgICAgIGxldCBtYXggPSBwYXJ0TnVtICsgbWF4T2Zmc2V0O1xyXG4gICAgICAgIGxldCBtaW4gPSBwYXJ0TnVtIC0gbWF4T2Zmc2V0O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByYW5kb21TaGFyZSA9IGlzSW50ID8gdGhpcy5nZXRSYW5kb21JbnQobWluLCBtYXgpIDogdGhpcy5nZXRSYW5kb21GbG9hdChtaW4sIG1heCk7XHJcbiAgICAgICAgICAgIHNoYXJlcy5wdXNoKHJhbmRvbVNoYXJlKTtcclxuICAgICAgICAgICAgdG90YWwgLT0gcmFuZG9tU2hhcmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzaGFyZXMucHVzaCh0b3RhbCk7XHJcblxyXG4gICAgICAgIHNoYXJlcy5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG5cclxuICAgICAgICByZXR1cm4gc2hhcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWKqOaAgeaehOW7uuaemuS4viAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUVudW0oZW51bU9iajogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGVudW1PYmopLnJlZHVjZSgocHJldiwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHByZXZba2V5XSA9IGVudW1PYmpba2V5XTtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X6LSd5aGe5bCU5puy57q/55qE6YCU5b6E54K55Z2Q5qCH5pWw57uEXHJcbiAgICAgKiBAcGFyYW0gcG9zQXJyIOS4iemYtui0neWhnuWwlOeahOWbm+S4queCuSzmlbDnu4Tlr7nlupTkuLogMOi1t+eCuSwx6LW354K55o6n5Yi254K5LDLnu4jngrnmjqfliLbngrksM+e7iOeCuVxyXG4gICAgICogQHBhcmFtIGludGVydmFsIOmXtOmalCDmr4/mrKHov63ku6PmraXplb8s6L+Z5Liq5YC86LaK5bCP6LaK57K+57uGLOS9huaYr+aViOeOh+i2iuS9jlxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRCZXppZXJQb2ludEFycihwb3NBcnI6IGNjLlZlYzJbXSwgaW50ZXJ2YWw6IG51bWJlciA9IDMwMCk6IGNjLlZlYzJbXSB7XHJcbiAgICAgICAgbGV0IGFsbEJlemllclBvcyA9IFtdXHJcbiAgICAgICAgbGV0IGdhcCA9IDEgLyBpbnRlcnZhbDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAxOyBpICs9IGdhcCkge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5fY2FjdWxhdGVCZXppZXJQKHBvc0FyciwgaSlcclxuICAgICAgICAgICAgYWxsQmV6aWVyUG9zLnB1c2gocG9zKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsQmV6aWVyUG9zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6h566X5LiJ6Zi26LSd5aGe5bCU5ZyoIHTml7bliLsg55qE5L2N572uXHJcbiAgICAgKiBAcGFyYW0gcCDkuInpmLbotJ3loZ7lsJTnmoTlm5vkuKrngrks5pWw57uE5a+55bqU5Li6IDDotbfngrksMei1t+eCueaOp+WItueCuSwy57uI54K55o6n5Yi254K5LDPnu4jngrlcclxuICAgICAqIEBwYXJhbSB0IOS8oOWFpTAtMeeahOWAvCzkuIDkuKrml7bpl7TnmoTov63ku6Pov4fnqItcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgX2NhY3VsYXRlQmV6aWVyUChwOiBjYy5WZWMyW10sIHQ6IG51bWJlcik6IGNjLlZlYzIge1xyXG4gICAgICAgIC8vIOS4iemYtui0neWhnuWwlOi/kOeul1xyXG4gICAgICAgIGxldCBiZXppZXJQOiBjYy5WZWMyID0gY2MudjIoKVxyXG4gICAgICAgIGJlemllclAueCA9IE1hdGguZmxvb3IoTWF0aC5wb3coMSAtIHQsIDMpICogcFswXS54ICsgMyAqIHQgKiBNYXRoLnBvdygxIC0gdCwgMikgKiBwWzFdLnggKyAzICogTWF0aC5wb3codCwgMikgKiAoMSAtIHQpICogcFsyXS54ICsgTWF0aC5wb3codCwgMykgKiBwWzNdLngpO1xyXG4gICAgICAgIGJlemllclAueSA9IE1hdGguZmxvb3IoTWF0aC5wb3coMSAtIHQsIDMpICogcFswXS55ICsgMyAqIHQgKiBNYXRoLnBvdygxIC0gdCwgMikgKiBwWzFdLnkgKyAzICogTWF0aC5wb3codCwgMikgKiAoMSAtIHQpICogcFsyXS55ICsgTWF0aC5wb3codCwgMykgKiBwWzNdLnkpO1xyXG4gICAgICAgIHJldHVybiBiZXppZXJQO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X5Lul5q+P5LiH5Li65Y2V5L2N55qE5pWw5YC85a2X56ym5LiyXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUg5Y6f5pWw5YC8XHJcbiAgICAgKiBAcGFyYW0gZGVjaW1hbCDlsI/mlbDkvY1cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0Rm9ybWF0VmFsdWVTdHIodmFsdWU6IG51bWJlciwgZGVjaW1hbDogbnVtYmVyID0gMSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA+PSBNYXRoLnBvdygxMCwgMTIpKSB7Ly/kuqxcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodmFsdWUgLyBNYXRoLnBvdygxMCwgMTIgLSBkZWNpbWFsKSkgLyBNYXRoLnBvdygxMCwgZGVjaW1hbCkgKyBcInRcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID49IE1hdGgucG93KDEwLCA5KSkgey8v5YWGXHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHZhbHVlIC8gTWF0aC5wb3coMTAsIDkgLSBkZWNpbWFsKSkgLyBNYXRoLnBvdygxMCwgZGVjaW1hbCkgKyBcImdcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID49IE1hdGgucG93KDEwLCA2KSkgey8v5Lq/XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHZhbHVlIC8gTWF0aC5wb3coMTAsIDYgLSBkZWNpbWFsKSkgLyBNYXRoLnBvdygxMCwgZGVjaW1hbCkgKyBcIm1cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID49IE1hdGgucG93KDEwLCAzKSkgey8v5LiHXHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHZhbHVlIC8gTWF0aC5wb3coMTAsIDMgLSBkZWNpbWFsKSkgLyBNYXRoLnBvdygxMCwgZGVjaW1hbCkgKyBcImtcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yik5pat5YC85piv5ZCm5Li65pW05Z6LICovXHJcbiAgICBzdGF0aWMgaXNJbnRlZ2VyKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlKSAmJiBNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWU7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/RedPointManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '062c5DWyr1Lv5JWdKhjAZ9y', 'RedPointManager');
// homePage/script/manager/RedPointManager.ts

// import GamingData from "../common/GamingData";
// import { BoothType, EventEnum, RedPointType } from "../common/Global";
// import { PlayerData } from "../common/PlayerData";
// import { Util } from "../common/Util";
// import { Gs_foodMgr } from "../config/Gs_food";
// import { RedPointConfigMgr } from "../config/RedPointConfig";
// import DataManager from "./DataManager";
// import { EventManager } from "./EventManager";
// const { ccclass, property } = cc._decorator;
// @ccclass
// export default class RedPointManager extends cc.Component {
//     public static ins: RedPointManager = null;
//     protected onLoad(): void {
//         RedPointManager.ins = this;
//         this.allShowRedPoints = [];
//         EventManager.triggerEvent(EventEnum.RedPointRefresh);
//     }
//     /**所有需要显示的红点 */
//     public allShowRedPoints: number[] = [];
//     private showRedPoint(keys: number[]) {
//         keys.forEach(v => {
//             if (this.allShowRedPoints.includes(v)) return;
//             this.allShowRedPoints.push(v);
//         })
//         EventManager.triggerEvent(EventEnum.RedPointRefresh);
//     }
//     checkRedPoint() {
//         this.allShowRedPoints = [];
//         let datas = DataManager.ins.get(RedPointConfigMgr).datas;
//         datas.forEach(v => {
//             switch (v.Id) {
//                 case RedPointType.Recipes:
//                     let isShow: boolean = false;
//                     let enumArr = Util.getAllEnumNums(BoothType)
//                     for (let i = 0; i < enumArr.length; i++) {
//                         let type = enumArr[i];
//                         let info = PlayerData.ins.unlockBoothInfos.find(v => v.type == type);
//                         if (!info) break;
//                         let datas = DataManager.ins.get(Gs_foodMgr).getDatasByType(type);
//                         for (let i = 0; i < datas.length; i++) {
//                             let data = datas[i];
//                             let dishInfo = info.unlockDishs.find(v => v.id == data.Id);
//                             if (!dishInfo) {
//                                 let num = PlayerData.ins.getItemNum(data.Ulockgrade.id);
//                                 if (num >= data.Ulockgrade.num) {
//                                     this.showRedPoint(v.keys);
//                                     isShow = true;
//                                     break;
//                                 }
//                             }
//                         }
//                         if (isShow) break;
//                     }
//                     break;
//                 case RedPointType.Task:
//                     let taskList = PlayerData.ins.curTaskList;
//                     for (let i = 0; i < taskList.length; i++) {
//                         let task = taskList[i];
//                         if (task.progress >= task.task.Param.value) {
//                             this.showRedPoint(v.keys);
//                             break;
//                         }
//                     }
//                     break;
//                 case RedPointType.Game:
//                     if (PlayerData.ins.gameStep >= 1) {
//                         this.showRedPoint(v.keys);
//                     }
//                     break;
//                 case RedPointType.New_skin:
//                     if (PlayerData.ins.newSkins.length > 0) {
//                         this.showRedPoint(v.keys);
//                     }
//                     break;
//                 case RedPointType.Dish_finish:
//                     break;
//             }
//         })
//         EventManager.triggerEvent(EventEnum.RedPointRefresh);
//     }
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcUmVkUG9pbnRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFpRDtBQUNqRCx5RUFBeUU7QUFDekUscURBQXFEO0FBQ3JELHlDQUF5QztBQUN6QyxrREFBa0Q7QUFDbEQsZ0VBQWdFO0FBQ2hFLDJDQUEyQztBQUMzQyxpREFBaUQ7QUFFakQsK0NBQStDO0FBRS9DLFdBQVc7QUFDWCw4REFBOEQ7QUFFOUQsaURBQWlEO0FBRWpELGlDQUFpQztBQUNqQyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLGdFQUFnRTtBQUNoRSxRQUFRO0FBRVIsc0JBQXNCO0FBQ3RCLDhDQUE4QztBQUU5Qyw2Q0FBNkM7QUFDN0MsOEJBQThCO0FBQzlCLDZEQUE2RDtBQUM3RCw2Q0FBNkM7QUFDN0MsYUFBYTtBQUNiLGdFQUFnRTtBQUNoRSxRQUFRO0FBRVIsd0JBQXdCO0FBQ3hCLHNDQUFzQztBQUN0QyxvRUFBb0U7QUFDcEUsK0JBQStCO0FBQy9CLDhCQUE4QjtBQUM5Qiw2Q0FBNkM7QUFDN0MsbURBQW1EO0FBQ25ELG1FQUFtRTtBQUNuRSxpRUFBaUU7QUFDakUsaURBQWlEO0FBQ2pELGdHQUFnRztBQUNoRyw0Q0FBNEM7QUFDNUMsNEZBQTRGO0FBQzVGLG1FQUFtRTtBQUNuRSxtREFBbUQ7QUFDbkQsMEZBQTBGO0FBQzFGLCtDQUErQztBQUMvQywyRkFBMkY7QUFDM0Ysb0VBQW9FO0FBQ3BFLGlFQUFpRTtBQUNqRSxxREFBcUQ7QUFDckQsNkNBQTZDO0FBQzdDLG9DQUFvQztBQUNwQyxnQ0FBZ0M7QUFDaEMsNEJBQTRCO0FBQzVCLDZDQUE2QztBQUM3Qyx3QkFBd0I7QUFDeEIsNkJBQTZCO0FBQzdCLDBDQUEwQztBQUMxQyxpRUFBaUU7QUFDakUsa0VBQWtFO0FBQ2xFLGtEQUFrRDtBQUNsRCx3RUFBd0U7QUFDeEUseURBQXlEO0FBQ3pELHFDQUFxQztBQUNyQyw0QkFBNEI7QUFDNUIsd0JBQXdCO0FBQ3hCLDZCQUE2QjtBQUM3QiwwQ0FBMEM7QUFDMUMsMERBQTBEO0FBQzFELHFEQUFxRDtBQUNyRCx3QkFBd0I7QUFDeEIsNkJBQTZCO0FBQzdCLDhDQUE4QztBQUM5QyxnRUFBZ0U7QUFDaEUscURBQXFEO0FBQ3JELHdCQUF3QjtBQUN4Qiw2QkFBNkI7QUFDN0IsaURBQWlEO0FBRWpELDZCQUE2QjtBQUM3QixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLGdFQUFnRTtBQUNoRSxRQUFRO0FBQ1IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBHYW1pbmdEYXRhIGZyb20gXCIuLi9jb21tb24vR2FtaW5nRGF0YVwiO1xyXG4vLyBpbXBvcnQgeyBCb290aFR5cGUsIEV2ZW50RW51bSwgUmVkUG9pbnRUeXBlIH0gZnJvbSBcIi4uL2NvbW1vbi9HbG9iYWxcIjtcclxuLy8gaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gXCIuLi9jb21tb24vUGxheWVyRGF0YVwiO1xyXG4vLyBpbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uL2NvbW1vbi9VdGlsXCI7XHJcbi8vIGltcG9ydCB7IEdzX2Zvb2RNZ3IgfSBmcm9tIFwiLi4vY29uZmlnL0dzX2Zvb2RcIjtcclxuLy8gaW1wb3J0IHsgUmVkUG9pbnRDb25maWdNZ3IgfSBmcm9tIFwiLi4vY29uZmlnL1JlZFBvaW50Q29uZmlnXCI7XHJcbi8vIGltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xyXG4vLyBpbXBvcnQgeyBFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi9FdmVudE1hbmFnZXJcIjtcclxuXHJcbi8vIGNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vLyBAY2NjbGFzc1xyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWRQb2ludE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuLy8gICAgIHB1YmxpYyBzdGF0aWMgaW5zOiBSZWRQb2ludE1hbmFnZXIgPSBudWxsO1xyXG5cclxuLy8gICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbi8vICAgICAgICAgUmVkUG9pbnRNYW5hZ2VyLmlucyA9IHRoaXM7XHJcbi8vICAgICAgICAgdGhpcy5hbGxTaG93UmVkUG9pbnRzID0gW107XHJcbi8vICAgICAgICAgRXZlbnRNYW5hZ2VyLnRyaWdnZXJFdmVudChFdmVudEVudW0uUmVkUG9pbnRSZWZyZXNoKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAvKirmiYDmnInpnIDopoHmmL7npLrnmoTnuqLngrkgKi9cclxuLy8gICAgIHB1YmxpYyBhbGxTaG93UmVkUG9pbnRzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuLy8gICAgIHByaXZhdGUgc2hvd1JlZFBvaW50KGtleXM6IG51bWJlcltdKSB7XHJcbi8vICAgICAgICAga2V5cy5mb3JFYWNoKHYgPT4ge1xyXG4vLyAgICAgICAgICAgICBpZiAodGhpcy5hbGxTaG93UmVkUG9pbnRzLmluY2x1ZGVzKHYpKSByZXR1cm47XHJcbi8vICAgICAgICAgICAgIHRoaXMuYWxsU2hvd1JlZFBvaW50cy5wdXNoKHYpO1xyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICAgICAgRXZlbnRNYW5hZ2VyLnRyaWdnZXJFdmVudChFdmVudEVudW0uUmVkUG9pbnRSZWZyZXNoKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBjaGVja1JlZFBvaW50KCkge1xyXG4vLyAgICAgICAgIHRoaXMuYWxsU2hvd1JlZFBvaW50cyA9IFtdO1xyXG4vLyAgICAgICAgIGxldCBkYXRhcyA9IERhdGFNYW5hZ2VyLmlucy5nZXQoUmVkUG9pbnRDb25maWdNZ3IpLmRhdGFzO1xyXG4vLyAgICAgICAgIGRhdGFzLmZvckVhY2godiA9PiB7XHJcbi8vICAgICAgICAgICAgIHN3aXRjaCAodi5JZCkge1xyXG4vLyAgICAgICAgICAgICAgICAgY2FzZSBSZWRQb2ludFR5cGUuUmVjaXBlczpcclxuLy8gICAgICAgICAgICAgICAgICAgICBsZXQgaXNTaG93OiBib29sZWFuID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbGV0IGVudW1BcnIgPSBVdGlsLmdldEFsbEVudW1OdW1zKEJvb3RoVHlwZSlcclxuLy8gICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudW1BcnIubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBlbnVtQXJyW2ldO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5mbyA9IFBsYXllckRhdGEuaW5zLnVubG9ja0Jvb3RoSW5mb3MuZmluZCh2ID0+IHYudHlwZSA9PSB0eXBlKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmZvKSBicmVhaztcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFzID0gRGF0YU1hbmFnZXIuaW5zLmdldChHc19mb29kTWdyKS5nZXREYXRhc0J5VHlwZSh0eXBlKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhcy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBkYXRhc1tpXTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXNoSW5mbyA9IGluZm8udW5sb2NrRGlzaHMuZmluZCh2ID0+IHYuaWQgPT0gZGF0YS5JZCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRpc2hJbmZvKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG51bSA9IFBsYXllckRhdGEuaW5zLmdldEl0ZW1OdW0oZGF0YS5VbG9ja2dyYWRlLmlkKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtID49IGRhdGEuVWxvY2tncmFkZS5udW0pIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVkUG9pbnQodi5rZXlzKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTaG93ID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1Nob3cpIGJyZWFrO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICAgICAgICAgIGNhc2UgUmVkUG9pbnRUeXBlLlRhc2s6XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tMaXN0ID0gUGxheWVyRGF0YS5pbnMuY3VyVGFza0xpc3Q7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFzayA9IHRhc2tMaXN0W2ldO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5wcm9ncmVzcyA+PSB0YXNrLnRhc2suUGFyYW0udmFsdWUpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1JlZFBvaW50KHYua2V5cyk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICAgICAgICAgIGNhc2UgUmVkUG9pbnRUeXBlLkdhbWU6XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKFBsYXllckRhdGEuaW5zLmdhbWVTdGVwID49IDEpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVkUG9pbnQodi5rZXlzKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgICAgICBjYXNlIFJlZFBvaW50VHlwZS5OZXdfc2tpbjpcclxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAoUGxheWVyRGF0YS5pbnMubmV3U2tpbnMubGVuZ3RoID4gMCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dSZWRQb2ludCh2LmtleXMpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICAgICAgICAgIGNhc2UgUmVkUG9pbnRUeXBlLkRpc2hfZmluaXNoOlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICAgICAgRXZlbnRNYW5hZ2VyLnRyaWdnZXJFdmVudChFdmVudEVudW0uUmVkUG9pbnRSZWZyZXNoKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/SceneEventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8722f3C2clPIqL/KWiXSrbR', 'SceneEventManager');
// homePage/script/manager/SceneEventManager.ts

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
var UIManager_1 = require("./UIManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
//界面事件管理
var SceneEventManager = /** @class */ (function (_super) {
    __extends(SceneEventManager, _super);
    function SceneEventManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arg = null;
        _this.sceneEvent = [];
        return _this;
    }
    SceneEventManager_1 = SceneEventManager;
    SceneEventManager.prototype.onLoad = function () {
        SceneEventManager_1.ins = this;
    };
    /**检查是否触发界面事件 按照加入顺序依次触发，通过checkNextEvent触发后续事件 */
    SceneEventManager.prototype.checkSceneEvent = function (arg) {
        if (!arg || !arg.data)
            return;
        this.arg = arg;
        this.checkNextEvent();
    };
    SceneEventManager.prototype.checkNextEvent = function () {
        var _this = this;
        if (!this.arg)
            return;
        if (!this.sceneEvent)
            return;
        if (this.sceneEvent.length <= 0)
            return;
        // console.warn("checkNextEvent = ", this.sceneEvent)
        var info = this.sceneEvent.find(function (info) { return info.url == _this.arg.data.url; });
        if (!info || info.events.length <= 0)
            return;
        var event = info.events.shift();
        var arg = info.args.shift();
        this.arg.uiBase[event] && this.arg.uiBase[event](arg);
        console.log("sceneEvent ", event);
        if (info.events.length <= 0) {
            var index = this.sceneEvent.findIndex(function (info) { return info.url == _this.arg.data.url; });
            if (index != undefined) {
                this.sceneEvent.splice(index, 1);
            }
        }
    };
    SceneEventManager.prototype.finishCurEvent = function () {
        UIManager_1.UIManager.ins.refreshCurTopBundleData();
    };
    /**
     * 添加界面事件(在对应界面下次打开或者不被遮挡时检测，成功触发后移除)
     * @param uiBundle 界面的bundleData
     * @param funcName 界面脚本中的方法名
     * @param immediatelyCheck 是否立即检测
     */
    SceneEventManager.prototype.addSceneEvent = function (uiBundle, funcName, arg, immediatelyCheck, mergeSameFunc) {
        if (arg === void 0) { arg = null; }
        if (immediatelyCheck === void 0) { immediatelyCheck = true; }
        if (mergeSameFunc === void 0) { mergeSameFunc = true; }
        var info = this.sceneEvent.find(function (info) { return info.url == uiBundle.url; });
        if (info) {
            if (mergeSameFunc) {
                var index = info.events.findIndex(function (v) { return v == funcName; });
                if (index < 0) {
                    info.events.push(funcName);
                    info.args.push([arg]);
                }
                else {
                    info.args[index].push(arg);
                }
            }
            else {
                info.events.push(funcName);
                info.args.push([arg]);
            }
        }
        else {
            this.sceneEvent.push({ url: uiBundle.url, events: [funcName], args: [[arg]] });
        }
        if (immediatelyCheck) {
            UIManager_1.UIManager.ins.refreshCurTopBundleData();
        }
    };
    var SceneEventManager_1;
    SceneEventManager.ins = null;
    SceneEventManager = SceneEventManager_1 = __decorate([
        ccclass
    ], SceneEventManager);
    return SceneEventManager;
}(cc.Component));
exports.default = SceneEventManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcU2NlbmVFdmVudE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEseUNBQXdDO0FBRWxDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLFFBQVE7QUFFUjtJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQW9FQztRQWpFVyxTQUFHLEdBQXlDLElBQUksQ0FBQztRQUNsRCxnQkFBVSxHQUFxRCxFQUFFLENBQUM7O0lBZ0U3RSxDQUFDOzBCQXBFb0IsaUJBQWlCO0lBTXhCLGtDQUFNLEdBQWhCO1FBQ0ksbUJBQWlCLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRUQsa0RBQWtEO0lBQzNDLDJDQUFlLEdBQXRCLFVBQXVCLEdBQXlDO1FBQzVELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDOUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLDBDQUFjLEdBQXJCO1FBQUEsaUJBaUJDO1FBaEJHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUM3QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPO1FBQ3hDLHFEQUFxRDtRQUNyRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxF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RyxHQUFzQixJQUFJLENBQUM7SUFGM0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FvRXJDO0lBQUQsd0JBQUM7Q0FwRUQsQUFvRUMsQ0FwRThDLEVBQUUsQ0FBQyxTQUFTLEdBb0UxRDtrQkFwRW9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1bmRsZURhdGEgfSBmcm9tIFwiLi4vY29tbW9uL0J1bmRsZURhdGFcIjtcclxuaW1wb3J0IHsgVWlCYXNlIH0gZnJvbSBcIi4uL2NvbW1vbi9VaUJhc2VcIjtcclxuaW1wb3J0IHsgVUlNYW5hZ2VyIH0gZnJvbSBcIi4vVUlNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG4vL+eVjOmdouS6i+S7tueuoeeQhlxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZUV2ZW50TWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbnM6IFNjZW5lRXZlbnRNYW5hZ2VyID0gbnVsbDtcclxuICAgIHByaXZhdGUgYXJnOiB7IGRhdGE6IEJ1bmRsZURhdGEsIHVpQmFzZTogVWlCYXNlIH0gPSBudWxsO1xyXG4gICAgcHVibGljIHNjZW5lRXZlbnQ6IHsgdXJsOiBzdHJpbmcsIGV2ZW50czogc3RyaW5nW10sIGFyZ3M6IGFueVtdIH1bXSA9IFtdO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgU2NlbmVFdmVudE1hbmFnZXIuaW5zID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKirmo4Dmn6XmmK/lkKbop6blj5HnlYzpnaLkuovku7Yg5oyJ54Wn5Yqg5YWl6aG65bqP5L6d5qyh6Kem5Y+R77yM6YCa6L+HY2hlY2tOZXh0RXZlbnTop6blj5HlkI7nu63kuovku7YgKi9cclxuICAgIHB1YmxpYyBjaGVja1NjZW5lRXZlbnQoYXJnOiB7IGRhdGE6IEJ1bmRsZURhdGEsIHVpQmFzZTogVWlCYXNlIH0pIHtcclxuICAgICAgICBpZiAoIWFyZyB8fCAhYXJnLmRhdGEpIHJldHVybjtcclxuICAgICAgICB0aGlzLmFyZyA9IGFyZztcclxuICAgICAgICB0aGlzLmNoZWNrTmV4dEV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoZWNrTmV4dEV2ZW50KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hcmcpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuc2NlbmVFdmVudCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnNjZW5lRXZlbnQubGVuZ3RoIDw9IDApIHJldHVybjtcclxuICAgICAgICAvLyBjb25zb2xlLndhcm4oXCJjaGVja05leHRFdmVudCA9IFwiLCB0aGlzLnNjZW5lRXZlbnQpXHJcbiAgICAgICAgbGV0IGluZm8gPSB0aGlzLnNjZW5lRXZlbnQuZmluZChpbmZvID0+IGluZm8udXJsID09IHRoaXMuYXJnLmRhdGEudXJsKTtcclxuICAgICAgICBpZiAoIWluZm8gfHwgaW5mby5ldmVudHMubGVuZ3RoIDw9IDApIHJldHVybjtcclxuICAgICAgICBsZXQgZXZlbnQgPSBpbmZvLmV2ZW50cy5zaGlmdCgpO1xyXG4gICAgICAgIGxldCBhcmcgPSBpbmZvLmFyZ3Muc2hpZnQoKTtcclxuICAgICAgICB0aGlzLmFyZy51aUJhc2VbZXZlbnRdICYmIHRoaXMuYXJnLnVpQmFzZVtldmVudF0oYXJnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNjZW5lRXZlbnQgXCIsIGV2ZW50KTtcclxuICAgICAgICBpZiAoaW5mby5ldmVudHMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zY2VuZUV2ZW50LmZpbmRJbmRleChpbmZvID0+IGluZm8udXJsID09IHRoaXMuYXJnLmRhdGEudXJsKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZUV2ZW50LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmlzaEN1ckV2ZW50KCkge1xyXG4gICAgICAgIFVJTWFuYWdlci5pbnMucmVmcmVzaEN1clRvcEJ1bmRsZURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOeVjOmdouS6i+S7tijlnKjlr7nlupTnlYzpnaLkuIvmrKHmiZPlvIDmiJbogIXkuI3ooqvpga7mjKHml7bmo4DmtYvvvIzmiJDlip/op6blj5HlkI7np7vpmaQpXHJcbiAgICAgKiBAcGFyYW0gdWlCdW5kbGUg55WM6Z2i55qEYnVuZGxlRGF0YVxyXG4gICAgICogQHBhcmFtIGZ1bmNOYW1lIOeVjOmdouiEmuacrOS4reeahOaWueazleWQjVxyXG4gICAgICogQHBhcmFtIGltbWVkaWF0ZWx5Q2hlY2sg5piv5ZCm56uL5Y2z5qOA5rWLXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRTY2VuZUV2ZW50KHVpQnVuZGxlOiBCdW5kbGVEYXRhLCBmdW5jTmFtZTogc3RyaW5nLCBhcmc6IGFueSA9IG51bGwsIGltbWVkaWF0ZWx5Q2hlY2s6IGJvb2xlYW4gPSB0cnVlLCBtZXJnZVNhbWVGdW5jOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCBpbmZvID0gdGhpcy5zY2VuZUV2ZW50LmZpbmQoaW5mbyA9PiBpbmZvLnVybCA9PSB1aUJ1bmRsZS51cmwpO1xyXG4gICAgICAgIGlmIChpbmZvKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXJnZVNhbWVGdW5jKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBpbmZvLmV2ZW50cy5maW5kSW5kZXgodiA9PiB2ID09IGZ1bmNOYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmZvLmV2ZW50cy5wdXNoKGZ1bmNOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpbmZvLmFyZ3MucHVzaChbYXJnXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZm8uYXJnc1tpbmRleF0ucHVzaChhcmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5mby5ldmVudHMucHVzaChmdW5jTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpbmZvLmFyZ3MucHVzaChbYXJnXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lRXZlbnQucHVzaCh7IHVybDogdWlCdW5kbGUudXJsLCBldmVudHM6IFtmdW5jTmFtZV0sIGFyZ3M6IFtbYXJnXV0gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbW1lZGlhdGVseUNoZWNrKSB7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5pbnMucmVmcmVzaEN1clRvcEJ1bmRsZURhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/DataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb000C8oHNCs4HkN1aUE1Sa', 'DataManager');
// homePage/script/manager/DataManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BundleName_1 = require("../common/BundleName");
var Config_1 = require("../config/Config");
var AbManager_1 = require("./AbManager");
var DataManager = /** @class */ (function () {
    function DataManager() {
        this._dataMaps = new Map();
        /**当前版本后缀 */
        this.remotePath = "https://cdn.hongshunet.com/zyh/JingShenBingYuan/web/" + appContext.version + "/config/";
        /**是否使用远程配置 */
        this.isRemote = false;
    }
    ;
    Object.defineProperty(DataManager, "ins", {
        get: function () {
            if (this._ins == null) {
                this._ins = new DataManager();
            }
            return this._ins;
        },
        enumerable: false,
        configurable: true
    });
    /**初始化数据管理类*/
    DataManager.prototype.init = function () {
        var _this = this;
        // return Promise.resolve();
        this.isRemote = !CC_DEV;
        console.warn("this.isRemote ", this.isRemote);
        var promiseArr = [];
        for (var k in Config_1.Config) {
            console.log("k ", k);
            promiseArr.push(this.registerData(k, Config_1.Config[k]));
        }
        return Promise.all(promiseArr).then(function () {
            console.log("this._dataMaps ", _this._dataMaps);
        });
    };
    /**
     * 获取数据管理类
     * @param type 类型
     * @returns 数据管理类实例
     */
    DataManager.prototype.get = function (type) {
        return this._dataMaps.get(type);
    };
    /**
     * 注册数据类
     * @param url 数据资源地址（json格式）
     * @param type 数据资源管理类
     */
    DataManager.prototype.registerData = function (url, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.isRemote) {
                AbManager_1.AbManager.loadRemote(_this.remotePath + url + ".json?t=" + Date.now()).then(function (res) {
                    _this._dataMaps.set(type, new type(res.json));
                    resolve(null);
                });
            }
            else {
                AbManager_1.AbManager.loadBundleRes(BundleName_1.BundleName.Config, url, cc.JsonAsset).then(function (res) {
                    _this._dataMaps.set(type, new type(res.json));
                    resolve(null);
                });
            }
        });
    };
    DataManager._ins = null;
    return DataManager;
}());
exports.default = DataManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcRGF0YU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0Q7QUFDbEQsMkNBQTBDO0FBQzFDLHlDQUF3QztBQUl4QztJQUNJO1FBU1EsY0FBUyxHQUF5RixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRXBILFlBQVk7UUFDSyxlQUFVLEdBQUcseURBQXVELFVBQVUsQ0FBQyxPQUFPLGFBQVUsQ0FBQztRQUVsSCxjQUFjO1FBQ04sYUFBUSxHQUFZLEtBQUssQ0FBQztJQWZWLENBQUM7SUFBQSxDQUFDO0lBRTFCLHNCQUFXLGtCQUFHO2FBQWQ7WUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7YUFDakM7WUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFVRCxhQUFhO0lBQ2IsMEJBQUksR0FBSjtRQUFBLGlCQVlDO1FBWEcsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDN0MsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEtBQUssSUFBTSxDQUFDLElBQUksZUFBTSxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ3BCLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsZUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUNELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHlCQUFHLEdBQUgsVUFBeUMsSUFBa0M7UUFDdkUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQU0sQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLGtDQUFZLEdBQXBCLFVBQTBELEdBQVcsRUFBRSxJQUFrQztRQUF6RyxpQkFjQztRQWJHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixJQUFJLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YscUJBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQWlCO29CQUN6RixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzdDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLENBQUE7YUFDTDtpQkFBTTtnQkFDSCxxQkFBUyxDQUFDLGFBQWEsQ0FBQyx1QkFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQWlCO29CQUNqRixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzdDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLENBQUE7YUFDTDtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQTNEYyxnQkFBSSxHQUFnQixJQUFJLENBQUM7SUE0RDVDLGtCQUFDO0NBOURELEFBOERDLElBQUE7a0JBOURvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVuZGxlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vQnVuZGxlTmFtZVwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBBYk1hbmFnZXIgfSBmcm9tIFwiLi9BYk1hbmFnZXJcIjtcclxuaW1wb3J0IEJhc2VEYXRhTWFuYWdlciwgeyBCYXNlRGF0YSB9IGZyb20gXCIuL0Jhc2VEYXRhXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnM6IERhdGFNYW5hZ2VyID0gbnVsbDtcclxuICAgIHN0YXRpYyBnZXQgaW5zKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pbnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnMgPSBuZXcgRGF0YU1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kYXRhTWFwczogTWFwPG5ldyAoZGF0YXM6IEJhc2VEYXRhW10pID0+IEJhc2VEYXRhTWFuYWdlcjxCYXNlRGF0YT4sIEJhc2VEYXRhTWFuYWdlcjxCYXNlRGF0YT4+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKuW9k+WJjeeJiOacrOWQjue8gCAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSByZW1vdGVQYXRoID0gYGh0dHBzOi8vY2RuLmhvbmdzaHVuZXQuY29tL3p5aC9KaW5nU2hlbkJpbmdZdWFuL3dlYi8ke2FwcENvbnRleHQudmVyc2lvbn0vY29uZmlnL2A7XHJcblxyXG4gICAgLyoq5piv5ZCm5L2/55So6L+c56iL6YWN572uICovXHJcbiAgICBwcml2YXRlIGlzUmVtb3RlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoq5Yid5aeL5YyW5pWw5o2u566h55CG57G7Ki9cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIHRoaXMuaXNSZW1vdGUgPSAhQ0NfREVWO1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcInRoaXMuaXNSZW1vdGUgXCIsIHRoaXMuaXNSZW1vdGUpXHJcbiAgICAgICAgbGV0IHByb21pc2VBcnIgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGsgaW4gQ29uZmlnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiayBcIiwgaylcclxuICAgICAgICAgICAgcHJvbWlzZUFyci5wdXNoKHRoaXMucmVnaXN0ZXJEYXRhKGssIENvbmZpZ1trXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZUFycikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5fZGF0YU1hcHMgXCIsIHRoaXMuX2RhdGFNYXBzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5pWw5o2u566h55CG57G7XHJcbiAgICAgKiBAcGFyYW0gdHlwZSDnsbvlnotcclxuICAgICAqIEByZXR1cm5zIOaVsOaNrueuoeeQhuexu+WunuS+i1xyXG4gICAgICovXHJcbiAgICBnZXQ8VCBleHRlbmRzIEJhc2VEYXRhTWFuYWdlcjxCYXNlRGF0YT4+KHR5cGU6IG5ldyAoZGF0YXM6IEJhc2VEYXRhW10pID0+IFQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YU1hcHMuZ2V0KHR5cGUpIGFzIFQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDms6jlhozmlbDmja7nsbtcclxuICAgICAqIEBwYXJhbSB1cmwg5pWw5o2u6LWE5rqQ5Zyw5Z2A77yIanNvbuagvOW8j++8iVxyXG4gICAgICogQHBhcmFtIHR5cGUg5pWw5o2u6LWE5rqQ566h55CG57G7XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJEYXRhPFQgZXh0ZW5kcyBCYXNlRGF0YU1hbmFnZXI8QmFzZURhdGE+Pih1cmw6IHN0cmluZywgdHlwZTogbmV3IChkYXRhczogQmFzZURhdGFbXSkgPT4gVCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUmVtb3RlKSB7XHJcbiAgICAgICAgICAgICAgICBBYk1hbmFnZXIubG9hZFJlbW90ZSh0aGlzLnJlbW90ZVBhdGggKyB1cmwgKyBcIi5qc29uP3Q9XCIgKyBEYXRlLm5vdygpKS50aGVuKChyZXM6IGNjLkpzb25Bc3NldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFNYXBzLnNldCh0eXBlLCBuZXcgdHlwZShyZXMuanNvbikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgQWJNYW5hZ2VyLmxvYWRCdW5kbGVSZXMoQnVuZGxlTmFtZS5Db25maWcsIHVybCwgY2MuSnNvbkFzc2V0KS50aGVuKChyZXM6IGNjLkpzb25Bc3NldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFNYXBzLnNldCh0eXBlLCBuZXcgdHlwZShyZXMuanNvbikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f1c9fxqw1Ha574i8X2BSX0', 'AudioManager');
// homePage/script/manager/AudioManager.ts

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
exports.AudioManager = void 0;
var PlayerData_1 = require("../common/PlayerData");
var SoundPath_1 = require("../common/SoundPath");
var Util_1 = require("../common/Util");
var AbManager_1 = require("./AbManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audioSource = null;
        _this.curEffectId = null;
        _this.curAudioId = null;
        _this.curBgmArg = { path: null, clip: null };
        _this.commonAudioPath = ["res/audios/click", "res/audios/open", "res/audios/close"];
        _this.soundIds = new Map();
        return _this;
    }
    AudioManager_1 = AudioManager;
    AudioManager.prototype.onLoad = function () {
        AudioManager_1.ins = this;
    };
    AudioManager.prototype.playClickAudio = function () {
        this.playEffect(SoundPath_1.SoundPath.button_click);
    };
    /**
     * 播放背景音乐
     * @returns
     */
    AudioManager.prototype.playBgm = function (audioData, isloop, cb) {
        var _this = this;
        if (isloop === void 0) { isloop = true; }
        if (cb === void 0) { cb = null; }
        if (!PlayerData_1.PlayerData.ins.isPlayMusic) {
            return;
        }
        var bundleName = audioData.bundle;
        var path = audioData.url;
        if (cc.audioEngine.isMusicPlaying() && this.curBgmArg.path && this.curBgmArg.path == path) {
        }
        else {
            this.stopBgm();
            AbManager_1.AbManager.loadBundleRes(bundleName, path, cc.AudioClip).then(function (clip) {
                if (!Util_1.Util.isValid(_this.node))
                    return;
                if (clip) {
                    var bgmId = cc.audioEngine.playMusic(clip, isloop);
                    if (cb) {
                        cc.audioEngine.setFinishCallback(bgmId, cb);
                    }
                    _this.curBgmArg.path = path;
                    _this.curBgmArg.clip = clip;
                }
            });
        }
    };
    /**
     * 停止bgm
     */
    AudioManager.prototype.stopBgm = function () {
        cc.audioEngine.stopMusic();
        AbManager_1.AbManager.isAutoReleaseAsset && this.curBgmArg.clip && this.curBgmArg.clip.decRef();
        this.curBgmArg = { path: null, clip: null };
    };
    //暂停bgm
    AudioManager.prototype.pauseBgm = function () {
        cc.audioEngine.pauseMusic();
    };
    //恢复bgm
    AudioManager.prototype.resumeBgm = function () {
        if (!PlayerData_1.PlayerData.ins.isPlayMusic) {
            return;
        }
        cc.audioEngine.resumeMusic();
    };
    /**
     * 播放音效
     */
    AudioManager.prototype.playEffect = function (audioData, isloop, cb) {
        var _this = this;
        if (isloop === void 0) { isloop = false; }
        if (cb === void 0) { cb = null; }
        if (!PlayerData_1.PlayerData.ins.isPlayAudio) {
            cb && cb();
            return;
        }
        // console.warn("playEffect ", audioData);
        var bundleName = audioData.bundle;
        var path = audioData.url;
        AbManager_1.AbManager.loadBundleRes(bundleName, path, cc.AudioClip).then(function (clip) {
            if (!Util_1.Util.isValid(_this.node))
                return;
            if (clip) {
                var audioID = void 0;
                if (_this.commonAudioPath.indexOf(path) > 0) {
                    audioID = cc.audioEngine.playEffect(clip, isloop);
                }
                else {
                    audioID = cc.audioEngine.playEffect(clip, isloop);
                    _this.curEffectId = audioID;
                }
                _this.stopEffectByBundleData(audioData);
                _this.addSoundId(audioData, audioID);
                cc.audioEngine.setFinishCallback(audioID, function () {
                    AbManager_1.AbManager.isAutoReleaseAsset && clip.decRef();
                    cb && cb();
                    _this.delSoundId(audioData);
                });
            }
            else {
                cb && cb();
            }
        });
    };
    /**
     * 停止播放音效
     */
    AudioManager.prototype.stopEffect = function () {
        if (this.curEffectId == null) {
            return;
        }
        cc.audioEngine.stopEffect(this.curEffectId);
        this.curEffectId = null;
        this.delSoundIdById(this.curEffectId);
    };
    AudioManager.prototype.stopEffectByBundleData = function (audioData) {
        var audioID = this.getSoundId(audioData);
        if (audioID != null) {
            cc.audioEngine.stopEffect(audioID);
            this.delSoundId(audioData);
        }
    };
    /**
     * 停止所有音效
     */
    AudioManager.prototype.stopAllEffect = function () {
        cc.audioEngine.stopAllEffects();
        this.curEffectId = null;
        this.soundIds.clear();
    };
    /**
     * 暂停音效
     */
    AudioManager.prototype.pauseEffect = function () {
        if (this.curEffectId == null) {
            return;
        }
        cc.audioEngine.pauseEffect(this.curEffectId);
    };
    AudioManager.prototype.pauseEffectByBundleData = function (audioData) {
        var audioID = this.getSoundId(audioData);
        if (audioID != null) {
            cc.audioEngine.pauseEffect(audioID);
        }
    };
    /**恢复音效 */
    AudioManager.prototype.resumeEffect = function () {
        if (!PlayerData_1.PlayerData.ins.isPlayAudio) {
            return;
        }
        if (this.curEffectId == null) {
            return;
        }
        cc.audioEngine.resumeEffect(this.curEffectId);
    };
    AudioManager.prototype.resumeEffectByBundleData = function (audioData) {
        if (!PlayerData_1.PlayerData.ins.isPlayAudio) {
            return;
        }
        var audioID = this.getSoundId(audioData);
        if (audioID != null) {
            cc.audioEngine.resumeEffect(audioID);
        }
    };
    /**播放音频，设置开始比例 */
    AudioManager.prototype.playEffectPro = function (audioData, isloop, cb, startPro) {
        var _this = this;
        if (isloop === void 0) { isloop = false; }
        if (cb === void 0) { cb = null; }
        if (startPro === void 0) { startPro = 0; }
        if (!PlayerData_1.PlayerData.ins.isPlayAudio) {
            cb && cb();
            return;
        }
        var bundleName = audioData.bundle;
        var path = audioData.url;
        AbManager_1.AbManager.loadBundleRes(bundleName, path, cc.AudioClip).then(function (clip) {
            if (!Util_1.Util.isValid(_this.node))
                return;
            var audioID = cc.audioEngine.playEffect(clip, isloop);
            var dur = cc.audioEngine.getDuration(audioID);
            cc.audioEngine.setCurrentTime(audioID, startPro * dur);
            _this.curEffectId = audioID;
            _this.stopEffectByBundleData(audioData);
            _this.addSoundId(audioData, audioID);
            cc.audioEngine.setFinishCallback(audioID, function () {
                cb && cb();
                _this.delSoundId(audioData);
            });
        }).catch(function (err) {
            console.log("err");
            cb && cb();
        });
    };
    /**
     * 播放音频
     */
    AudioManager.prototype.playAudio = function (audioData, isloop, cb) {
        var _this = this;
        if (isloop === void 0) { isloop = false; }
        if (cb === void 0) { cb = null; }
        if (!PlayerData_1.PlayerData.ins.isPlayAudio) {
            cb && cb();
            return;
        }
        // console.warn("playAudio ", audioData);
        var bundleName = audioData.bundle;
        var path = audioData.url;
        AbManager_1.AbManager.loadBundleRes(bundleName, path, cc.AudioClip).then(function (clip) {
            if (!Util_1.Util.isValid(_this.node))
                return;
            if (clip) {
                var audioID = cc.audioEngine.play(clip, isloop, 1);
                _this.curAudioId = audioID;
                _this.stopAudioByBundleData(audioData);
                _this.addSoundId(audioData, audioID);
                cc.audioEngine.setFinishCallback(audioID, function () {
                    cb && cb();
                    _this.delSoundId(audioData);
                });
            }
            else {
                cb && cb();
            }
        });
    };
    /**
     * 停止播放音频
     */
    AudioManager.prototype.stopAudio = function () {
        if (this.curAudioId == null) {
            return;
        }
        cc.audioEngine.stop(this.curAudioId);
        this.curAudioId = null;
        this.delSoundIdById(this.curAudioId);
    };
    AudioManager.prototype.stopAudioByBundleData = function (audioData) {
        var audioID = this.getSoundId(audioData);
        if (audioID != null) {
            cc.audioEngine.stop(audioID);
            this.delSoundId(audioData);
        }
    };
    AudioManager.prototype.pauseAudio = function () {
        if (this.curAudioId == null) {
            return;
        }
        cc.audioEngine.pause(this.curAudioId);
    };
    AudioManager.prototype.pauseAudioByBundleData = function (audioData) {
        var audioID = this.getSoundId(audioData);
        if (audioID != null) {
            cc.audioEngine.pause(audioID);
        }
    };
    AudioManager.prototype.resumeAudio = function () {
        if (this.curAudioId == null) {
            return;
        }
        cc.audioEngine.resume(this.curAudioId);
    };
    AudioManager.prototype.resumeAudioByBundleData = function (audioData) {
        var audioID = this.getSoundId(audioData);
        if (audioID != null) {
            cc.audioEngine.resume(audioID);
        }
    };
    /**
     * 通过audioSource播放音频
     */
    AudioManager.prototype.playAudioBySource = function (audioData, isloop) {
        var _this = this;
        if (isloop === void 0) { isloop = false; }
        if (!this.audioSource) {
            console.warn("audioSource is empty");
            return;
        }
        if (!PlayerData_1.PlayerData.ins.isPlayAudio) {
            return;
        }
        var bundleName = audioData.bundle;
        var path = audioData.url;
        AbManager_1.AbManager.loadBundleRes(bundleName, path, cc.AudioClip).then(function (clip) {
            if (!Util_1.Util.isValid(_this.node))
                return;
            if (clip) {
                _this.stopAudioSource();
                _this.audioSource.clip = clip;
                _this.audioSource.loop = isloop;
                _this.audioSource.play();
            }
        });
    };
    AudioManager.prototype.stopAudioSource = function () {
        if (!this.audioSource) {
            return;
        }
        if (this.audioSource.isPlaying) {
            this.audioSource.stop();
        }
    };
    AudioManager.prototype.pauseAudioSource = function () {
        if (!this.audioSource) {
            return;
        }
        if (this.audioSource.isPlaying) {
            this.audioSource.pause();
        }
    };
    AudioManager.prototype.resumeAudioSource = function () {
        if (!this.audioSource) {
            return;
        }
        this.audioSource.resume();
    };
    AudioManager.prototype.stopAllSound = function () {
        this.stopAllEffect();
        this.stopAudio();
        this.stopAudioSource();
        this.stopBgm();
    };
    AudioManager.prototype.pauseAllSound = function () {
        this.pauseEffect();
        this.pauseAudio();
        this.pauseBgm();
        this.pauseAudioSource();
    };
    AudioManager.prototype.resumeAllSound = function () {
        this.resumeEffect();
        this.resumeAudio();
        this.resumeBgm();
        this.resumeAudioSource();
    };
    AudioManager.prototype.addSoundId = function (audioData, audioId) {
        var key = audioData.bundle + audioData.url;
        this.soundIds.set(key, audioId);
    };
    AudioManager.prototype.hasSoundId = function (audioData) {
        var key = audioData.bundle + audioData.url;
        return this.soundIds.has(key);
    };
    AudioManager.prototype.delSoundId = function (audioData) {
        var key = audioData.bundle + audioData.url;
        this.soundIds.delete(key);
    };
    AudioManager.prototype.getSoundId = function (audioData) {
        var key = audioData.bundle + audioData.url;
        return this.soundIds.get(key);
    };
    AudioManager.prototype.delSoundIdById = function (audioID) {
        var _this = this;
        this.soundIds.forEach(function (value, key) {
            if (audioID == value) {
                _this.soundIds.delete(key);
            }
        });
    };
    var AudioManager_1;
    AudioManager.ins = null;
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "audioSource", void 0);
    AudioManager = AudioManager_1 = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.AudioManager = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcQXVkaW9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtREFBa0Q7QUFDbEQsaURBQWdEO0FBQ2hELHVDQUFzQztBQUN0Qyx5Q0FBd0M7QUFHbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0MsZ0NBQVk7SUFBOUM7UUFBQSxxRUF5WEM7UUF0WEcsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBRTNCLGlCQUFXLEdBQVcsSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQVcsSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBeUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUU3RSxxQkFBZSxHQUFhLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUl4RixjQUFRLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7O0lBMFdqRCxDQUFDO3FCQXpYWSxZQUFZO0lBaUJYLDZCQUFNLEdBQWhCO1FBQ0ksY0FBWSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7T0FHRztJQUNILDhCQUFPLEdBQVAsVUFBUSxTQUFxQixFQUFFLE1BQXNCLEVBQUUsRUFBcUI7UUFBNUUsaUJBc0JDO1FBdEI4Qix1QkFBQSxFQUFBLGFBQXNCO1FBQUUsbUJBQUEsRUFBQSxTQUFxQjtRQUN4RSxJQUFJLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO1lBQzdCLE9BQU87U0FDVjtRQUNELElB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RyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNPLGlDQUFVLEdBQWxCLFVBQW1CLFNBQXFCO1FBQ3BDLElBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUM3QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDTyxxQ0FBYyxHQUF0QixVQUF1QixPQUFPO1FBQTlCLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUUsR0FBRztZQUM3QixJQUFJLE9BQU8sSUFBSSxLQUFLLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDOztJQTNXYSxnQkFBRyxHQUFpQixJQUFJLENBQUM7SUFWdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztxREFDVTtJQUgxQixZQUFZO1FBRHhCLE9BQU87T0FDSyxZQUFZLENBeVh4QjtJQUFELG1CQUFDO0NBelhELEFBeVhDLENBelhpQyxFQUFFLENBQUMsU0FBUyxHQXlYN0M7QUF6WFksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdW5kbGVEYXRhIH0gZnJvbSBcIi4uL2NvbW1vbi9CdW5kbGVEYXRhXCI7XHJcbmltcG9ydCB7IFBsYXllckRhdGEgfSBmcm9tIFwiLi4vY29tbW9uL1BsYXllckRhdGFcIjtcclxuaW1wb3J0IHsgU291bmRQYXRoIH0gZnJvbSBcIi4uL2NvbW1vbi9Tb3VuZFBhdGhcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi9jb21tb24vVXRpbFwiO1xyXG5pbXBvcnQgeyBBYk1hbmFnZXIgfSBmcm9tIFwiLi9BYk1hbmFnZXJcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgYXVkaW9Tb3VyY2U6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGN1ckVmZmVjdElkOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY3VyQXVkaW9JZDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGN1ckJnbUFyZzogeyBwYXRoOiBzdHJpbmcsIGNsaXA6IGNjLkF1ZGlvQ2xpcCB9ID0geyBwYXRoOiBudWxsLCBjbGlwOiBudWxsIH07XHJcblxyXG4gICAgcHJpdmF0ZSBjb21tb25BdWRpb1BhdGg6IHN0cmluZ1tdID0gW1wicmVzL2F1ZGlvcy9jbGlja1wiLCBcInJlcy9hdWRpb3Mvb3BlblwiLCBcInJlcy9hdWRpb3MvY2xvc2VcIl07XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbnM6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzb3VuZElkcyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwbGF5Q2xpY2tBdWRpbygpIHtcclxuICAgICAgICB0aGlzLnBsYXlFZmZlY3QoU291bmRQYXRoLmJ1dHRvbl9jbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7og4zmma/pn7PkuZBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwbGF5QmdtKGF1ZGlvRGF0YTogQnVuZGxlRGF0YSwgaXNsb29wOiBib29sZWFuID0gdHJ1ZSwgY2I6ICgpID0+IHZvaWQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCFQbGF5ZXJEYXRhLmlucy5pc1BsYXlNdXNpYykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidW5kbGVOYW1lID0gYXVkaW9EYXRhLmJ1bmRsZTtcclxuICAgICAgICBsZXQgcGF0aCA9IGF1ZGlvRGF0YS51cmw7XHJcbiAgICAgICAgaWYgKGNjLmF1ZGlvRW5naW5lLmlzTXVzaWNQbGF5aW5nKCkgJiYgdGhpcy5jdXJCZ21BcmcucGF0aCAmJiB0aGlzLmN1ckJnbUFyZy5wYXRoID09IHBhdGgpIHtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wQmdtKCk7XHJcbiAgICAgICAgICAgIEFiTWFuYWdlci5sb2FkQnVuZGxlUmVzKGJ1bmRsZU5hbWUsIHBhdGgsIGNjLkF1ZGlvQ2xpcCkudGhlbigoY2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFVdGlsLmlzVmFsaWQodGhpcy5ub2RlKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsaXApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYmdtSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoY2xpcCwgaXNsb29wKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYmdtSWQsIGNiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJCZ21BcmcucGF0aCA9IHBhdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJCZ21BcmcuY2xpcCA9IGNsaXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YGc5q2iYmdtXHJcbiAgICAgKi9cclxuICAgIHN0b3BCZ20oKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgQWJNYW5hZ2VyLmlzQXV0b1JlbGVhc2VBc3NldCAmJiB0aGlzLmN1ckJnbUFyZy5jbGlwICYmIHRoaXMuY3VyQmdtQXJnLmNsaXAuZGVjUmVmKCk7XHJcbiAgICAgICAgdGhpcy5jdXJCZ21BcmcgPSB7IHBhdGg6IG51bGwsIGNsaXA6IG51bGwgfTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aaguWBnGJnbVxyXG4gICAgcGF1c2VCZ20oKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5oGi5aSNYmdtXHJcbiAgICByZXN1bWVCZ20oKSB7XHJcbiAgICAgICAgaWYgKCFQbGF5ZXJEYXRhLmlucy5pc1BsYXlNdXNpYykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZU11c2ljKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7pn7PmlYhcclxuICAgICAqL1xyXG4gICAgcGxheUVmZmVjdChhdWRpb0RhdGE6IEJ1bmRsZURhdGEsIGlzbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBjYjogKCkgPT4gdm9pZCA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIVBsYXllckRhdGEuaW5zLmlzUGxheUF1ZGlvKSB7XHJcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS53YXJuKFwicGxheUVmZmVjdCBcIiwgYXVkaW9EYXRhKTtcclxuICAgICAgICBsZXQgYnVuZGxlTmFtZSA9IGF1ZGlvRGF0YS5idW5kbGU7XHJcbiAgICAgICAgbGV0IHBhdGggPSBhdWRpb0RhdGEudXJsO1xyXG4gICAgICAgIEFiTWFuYWdlci5sb2FkQnVuZGxlUmVzKGJ1bmRsZU5hbWUsIHBhdGgsIGNjLkF1ZGlvQ2xpcCkudGhlbigoY2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIVV0aWwuaXNWYWxpZCh0aGlzLm5vZGUpKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChjbGlwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXVkaW9JRDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbW1vbkF1ZGlvUGF0aC5pbmRleE9mKHBhdGgpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGlzbG9vcCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGlzbG9vcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJFZmZlY3RJZCA9IGF1ZGlvSUQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wRWZmZWN0QnlCdW5kbGVEYXRhKGF1ZGlvRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFNvdW5kSWQoYXVkaW9EYXRhLCBhdWRpb0lEKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEZpbmlzaENhbGxiYWNrKGF1ZGlvSUQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBBYk1hbmFnZXIuaXNBdXRvUmVsZWFzZUFzc2V0ICYmIGNsaXAuZGVjUmVmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbFNvdW5kSWQoYXVkaW9EYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLmkq3mlL7pn7PmlYhcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0b3BFZmZlY3QoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyRWZmZWN0SWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QodGhpcy5jdXJFZmZlY3RJZCk7XHJcbiAgICAgICAgdGhpcy5jdXJFZmZlY3RJZCA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuZGVsU291bmRJZEJ5SWQodGhpcy5jdXJFZmZlY3RJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BFZmZlY3RCeUJ1bmRsZURhdGEoYXVkaW9EYXRhOiBCdW5kbGVEYXRhKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnN0IGF1ZGlvSUQgPSB0aGlzLmdldFNvdW5kSWQoYXVkaW9EYXRhKTtcclxuICAgICAgICBpZiAoYXVkaW9JRCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QoYXVkaW9JRCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsU291bmRJZChhdWRpb0RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWBnOatouaJgOaciemfs+aViFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RvcEFsbEVmZmVjdCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgICAgIHRoaXMuY3VyRWZmZWN0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc291bmRJZHMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaaguWBnOmfs+aViFxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHBhdXNlRWZmZWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1ckVmZmVjdElkID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZUVmZmVjdCh0aGlzLmN1ckVmZmVjdElkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGF1c2VFZmZlY3RCeUJ1bmRsZURhdGEoYXVkaW9EYXRhOiBCdW5kbGVEYXRhKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYXVkaW9JRCA9IHRoaXMuZ2V0U291bmRJZChhdWRpb0RhdGEpO1xyXG4gICAgICAgIGlmIChhdWRpb0lEICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VFZmZlY3QoYXVkaW9JRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuaBouWkjemfs+aViCAqL1xyXG4gICAgcHVibGljIHJlc3VtZUVmZmVjdCgpIHtcclxuICAgICAgICBpZiAoIVBsYXllckRhdGEuaW5zLmlzUGxheUF1ZGlvKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyRWZmZWN0SWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUVmZmVjdCh0aGlzLmN1ckVmZmVjdElkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzdW1lRWZmZWN0QnlCdW5kbGVEYXRhKGF1ZGlvRGF0YTogQnVuZGxlRGF0YSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghUGxheWVyRGF0YS5pbnMuaXNQbGF5QXVkaW8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhdWRpb0lEID0gdGhpcy5nZXRTb3VuZElkKGF1ZGlvRGF0YSk7XHJcbiAgICAgICAgaWYgKGF1ZGlvSUQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWVFZmZlY3QoYXVkaW9JRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuaSreaUvumfs+mike+8jOiuvue9ruW8gOWni+avlOS+iyAqL1xyXG4gICAgcGxheUVmZmVjdFBybyhhdWRpb0RhdGE6IEJ1bmRsZURhdGEsIGlzbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBjYjogKCkgPT4gdm9pZCA9IG51bGwsIHN0YXJ0UHJvOiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgaWYgKCFQbGF5ZXJEYXRhLmlucy5pc1BsYXlBdWRpbykge1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidW5kbGVOYW1lID0gYXVkaW9EYXRhLmJ1bmRsZTtcclxuICAgICAgICBsZXQgcGF0aCA9IGF1ZGlvRGF0YS51cmxcclxuICAgICAgICBBYk1hbmFnZXIubG9hZEJ1bmRsZVJlcyhidW5kbGVOYW1lLCBwYXRoLCBjYy5BdWRpb0NsaXApLnRoZW4oKGNsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKCFVdGlsLmlzVmFsaWQodGhpcy5ub2RlKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCBhdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBpc2xvb3ApO1xyXG4gICAgICAgICAgICBsZXQgZHVyID0gY2MuYXVkaW9FbmdpbmUuZ2V0RHVyYXRpb24oYXVkaW9JRCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEN1cnJlbnRUaW1lKGF1ZGlvSUQsIHN0YXJ0UHJvICogZHVyKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJFZmZlY3RJZCA9IGF1ZGlvSUQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEVmZmVjdEJ5QnVuZGxlRGF0YShhdWRpb0RhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZFNvdW5kSWQoYXVkaW9EYXRhLCBhdWRpb0lEKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JRCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsU291bmRJZChhdWRpb0RhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIpO1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7pn7PpopFcclxuICAgICAqL1xyXG4gICAgcGxheUF1ZGlvKGF1ZGlvRGF0YTogQnVuZGxlRGF0YSwgaXNsb29wOiBib29sZWFuID0gZmFsc2UsIGNiOiAoKSA9PiB2b2lkID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghUGxheWVyRGF0YS5pbnMuaXNQbGF5QXVkaW8pIHtcclxuICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLndhcm4oXCJwbGF5QXVkaW8gXCIsIGF1ZGlvRGF0YSk7XHJcbiAgICAgICAgbGV0IGJ1bmRsZU5hbWUgPSBhdWRpb0RhdGEuYnVuZGxlO1xyXG4gICAgICAgIGxldCBwYXRoID0gYXVkaW9EYXRhLnVybDtcclxuICAgICAgICBBYk1hbmFnZXIubG9hZEJ1bmRsZVJlcyhidW5kbGVOYW1lLCBwYXRoLCBjYy5BdWRpb0NsaXApLnRoZW4oKGNsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKCFVdGlsLmlzVmFsaWQodGhpcy5ub2RlKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoY2xpcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoY2xpcCwgaXNsb29wLCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyQXVkaW9JZCA9IGF1ZGlvSUQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BBdWRpb0J5QnVuZGxlRGF0YShhdWRpb0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTb3VuZElkKGF1ZGlvRGF0YSwgYXVkaW9JRCk7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayhhdWRpb0lELCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbFNvdW5kSWQoYXVkaW9EYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLmkq3mlL7pn7PpopFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0b3BBdWRpbygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJBdWRpb0lkID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuY3VyQXVkaW9JZCk7XHJcbiAgICAgICAgdGhpcy5jdXJBdWRpb0lkID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5kZWxTb3VuZElkQnlJZCh0aGlzLmN1ckF1ZGlvSWQpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BBdWRpb0J5QnVuZGxlRGF0YShhdWRpb0RhdGE6IEJ1bmRsZURhdGEpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBhdWRpb0lEID0gdGhpcy5nZXRTb3VuZElkKGF1ZGlvRGF0YSk7XHJcbiAgICAgICAgaWYgKGF1ZGlvSUQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKGF1ZGlvSUQpO1xyXG4gICAgICAgICAgICB0aGlzLmRlbFNvdW5kSWQoYXVkaW9EYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhdXNlQXVkaW8oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyQXVkaW9JZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UodGhpcy5jdXJBdWRpb0lkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGF1c2VBdWRpb0J5QnVuZGxlRGF0YShhdWRpb0RhdGE6IEJ1bmRsZURhdGEpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBhdWRpb0lEID0gdGhpcy5nZXRTb3VuZElkKGF1ZGlvRGF0YSk7XHJcbiAgICAgICAgaWYgKGF1ZGlvSUQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZShhdWRpb0lEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc3VtZUF1ZGlvKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1ckF1ZGlvSWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZSh0aGlzLmN1ckF1ZGlvSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXN1bWVBdWRpb0J5QnVuZGxlRGF0YShhdWRpb0RhdGE6IEJ1bmRsZURhdGEpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBhdWRpb0lEID0gdGhpcy5nZXRTb3VuZElkKGF1ZGlvRGF0YSk7XHJcbiAgICAgICAgaWYgKGF1ZGlvSUQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUoYXVkaW9JRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCa6L+HYXVkaW9Tb3VyY2Xmkq3mlL7pn7PpopFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBsYXlBdWRpb0J5U291cmNlKGF1ZGlvRGF0YTogQnVuZGxlRGF0YSwgaXNsb29wOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYXVkaW9Tb3VyY2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiYXVkaW9Tb3VyY2UgaXMgZW1wdHlcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFQbGF5ZXJEYXRhLmlucy5pc1BsYXlBdWRpbykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidW5kbGVOYW1lID0gYXVkaW9EYXRhLmJ1bmRsZTtcclxuICAgICAgICBsZXQgcGF0aCA9IGF1ZGlvRGF0YS51cmw7XHJcblxyXG4gICAgICAgIEFiTWFuYWdlci5sb2FkQnVuZGxlUmVzKGJ1bmRsZU5hbWUsIHBhdGgsIGNjLkF1ZGlvQ2xpcCkudGhlbigoY2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIVV0aWwuaXNWYWxpZCh0aGlzLm5vZGUpKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChjbGlwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BBdWRpb1NvdXJjZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5jbGlwID0gY2xpcDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UubG9vcCA9IGlzbG9vcDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcEF1ZGlvU291cmNlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hdWRpb1NvdXJjZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmF1ZGlvU291cmNlLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvU291cmNlLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhdXNlQXVkaW9Tb3VyY2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmF1ZGlvU291cmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9Tb3VyY2UuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc3VtZUF1ZGlvU291cmNlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hdWRpb1NvdXJjZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UucmVzdW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BBbGxTb3VuZCgpIHtcclxuICAgICAgICB0aGlzLnN0b3BBbGxFZmZlY3QoKTtcclxuICAgICAgICB0aGlzLnN0b3BBdWRpbygpO1xyXG4gICAgICAgIHRoaXMuc3RvcEF1ZGlvU291cmNlKCk7XHJcbiAgICAgICAgdGhpcy5zdG9wQmdtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhdXNlQWxsU291bmQoKSB7XHJcbiAgICAgICAgdGhpcy5wYXVzZUVmZmVjdCgpO1xyXG4gICAgICAgIHRoaXMucGF1c2VBdWRpbygpO1xyXG4gICAgICAgIHRoaXMucGF1c2VCZ20oKTtcclxuICAgICAgICB0aGlzLnBhdXNlQXVkaW9Tb3VyY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzdW1lQWxsU291bmQoKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bWVFZmZlY3QoKTtcclxuICAgICAgICB0aGlzLnJlc3VtZUF1ZGlvKCk7XHJcbiAgICAgICAgdGhpcy5yZXN1bWVCZ20oKTtcclxuICAgICAgICB0aGlzLnJlc3VtZUF1ZGlvU291cmNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRTb3VuZElkKGF1ZGlvRGF0YTogQnVuZGxlRGF0YSwgYXVkaW9JZCkge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGF1ZGlvRGF0YS5idW5kbGUgKyBhdWRpb0RhdGEudXJsO1xyXG4gICAgICAgIHRoaXMuc291bmRJZHMuc2V0KGtleSwgYXVkaW9JZCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGhhc1NvdW5kSWQoYXVkaW9EYXRhOiBCdW5kbGVEYXRhKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gYXVkaW9EYXRhLmJ1bmRsZSArIGF1ZGlvRGF0YS51cmw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291bmRJZHMuaGFzKGtleSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRlbFNvdW5kSWQoYXVkaW9EYXRhOiBCdW5kbGVEYXRhKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gYXVkaW9EYXRhLmJ1bmRsZSArIGF1ZGlvRGF0YS51cmw7XHJcbiAgICAgICAgdGhpcy5zb3VuZElkcy5kZWxldGUoa2V5KTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0U291bmRJZChhdWRpb0RhdGE6IEJ1bmRsZURhdGEpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBhdWRpb0RhdGEuYnVuZGxlICsgYXVkaW9EYXRhLnVybDtcclxuICAgICAgICByZXR1cm4gdGhpcy5zb3VuZElkcy5nZXQoa2V5KTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZGVsU291bmRJZEJ5SWQoYXVkaW9JRCkge1xyXG4gICAgICAgIHRoaXMuc291bmRJZHMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYXVkaW9JRCA9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VuZElkcy5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/StoryManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43b10tVcGlO7KEHyVcioxVl', 'StoryManager');
// homePage/script/manager/StoryManager.ts

// import { BundleName } from "../common/BundleName";
// import { SoundPath } from "../common/SoundPath";
// import StoryConfig, { StoryConfigMgr } from "../config/StoryConfig";
// import { AbManager } from "./AbManager";
// import { AudioManager } from "./AudioManager";
// import DataManager from "./DataManager";
// const { ccclass, property } = cc._decorator;
// @ccclass
// export default class StoryManager extends cc.Component {
//     @property(cc.Node)
//     storyNode: cc.Node = null;
//     @property(cc.Label)
//     storyLab: cc.Label = null;
//     @property(cc.Node)
//     tipNode: cc.Node = null;
//     public static ins: StoryManager = null;
//     private storyConfig: StoryConfig = null;
//     private interval: number = 0;
//     private resolve: (value: unknown) => void = null;
//     protected readonly byteInterval: number = 100;
//     private isOnByteAnim: boolean = false;
//     private lv: number = 0;
//     private group: number = 0;
//     private step: number = 0;
//     protected onLoad(): void {
//         StoryManager.ins = this;
//         this.storyNode.active = false;
//     }
//     init() {
//         AbManager.loadBundleRes(BundleName.Font, "方正隶二简体", cc.Font).then(font => {
//             this.storyLab.font = font;
//         })
//     }
//     /**播放一组剧情 startCb/endCb:每句剧情 开始/结束 播放都会触发，返回当前storyConfig */
//     playByGroup(lv: number, group: number, startCb?: (config: StoryConfig) => void, endCb?: (config: StoryConfig) => void) {
//         return new Promise((resolve, reject) => {
//             let index = 0;
//             let storyArr = DataManager.ins.get(StoryConfigMgr).getStoryArrByLvGroup(lv, group);
//             let playCall = () => {
//                 let storyConfig = storyArr[index];
//                 startCb && startCb(storyConfig);
//                 this.playStory(lv, group, index, storyConfig).then(() => {
//                     endCb && endCb(storyConfig);
//                     index++;
//                     if (index >= storyArr.length) {
//                         resolve(null);
//                     } else {
//                         playCall();
//                     }
//                 })
//             }
//             playCall();
//         })
//     }
//     playStory(lv: number, group: number, step: number, storyConfig: StoryConfig) {
//         this.lv = lv;
//         this.group = group;
//         this.step = step;
//         return new Promise((resolve, reject) => {
//             this.storyConfig = storyConfig;
//             if (!this.storyConfig) return resolve(null);
//             this.storyAnim();
//             this.resolve = resolve;
//         })
//     }
//     storyAnim() {
//         if (this.isOnByteAnim) return;
//         let endCall = () => {
//             this.storyNode.active = false;
//             this.resolve && this.resolve(null);
//         }
//         this.storyNode.active = true;
//         // this.isOnByteAnim = true;
//         AudioManager.ins.stopAllEffect();
//         let soundPath = SoundPath["lv_" + this.lv + "_" + this.group + "_" + this.step];
//         console.log("soundPath ", soundPath)
//         if (soundPath) {
//             AudioManager.ins.playEffect(soundPath, false, () => {
//                 endCall();
//             });
//         } else {
//             setTimeout(() => {
//                 endCall();
//             }, 2000);
//         }
//         this.storyLab.string = this.storyConfig.desc
//         // let byteIndex = 0;
//         // this.interval = setInterval(() => {
//         //     if (byteIndex >= this.storyConfig.desc.length) {
//         //         clearInterval(this.interval);
//         //         this.isOnByteAnim = false;
//         //         !soundPath && this.storyEndCb && this.storyEndCb();
//         //         setTimeout(() => {
//         //             UIManager.ins.isSceneBlockInput = false;
//         //             this.storyNode.active = false;
//         //             this.resolve && this.resolve(null);
//         //         }, 2000);
//         //     } else {
//         //         byteIndex++;
//         //         this.storyLab.string = this.storyConfig.desc.slice(0, byteIndex);
//         //     }
//         // }, this.byteInterval);
//     }
//     reset() {
//         this.storyLab.string = "";
//         this.storyConfig = null;
//         clearInterval(this.interval);
//         this.interval = null;
//     }
//     jumpClick() {
//         AudioManager.ins.stopAllEffect();
//         this.storyNode.active = false;
//         this.resolve && this.resolve(null);
//     }
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcU3RvcnlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFxRDtBQUNyRCxtREFBbUQ7QUFDbkQsdUVBQXVFO0FBQ3ZFLDJDQUEyQztBQUMzQyxpREFBaUQ7QUFDakQsMkNBQTJDO0FBRTNDLCtDQUErQztBQUUvQyxXQUFXO0FBQ1gsMkRBQTJEO0FBRTNELHlCQUF5QjtBQUN6QixpQ0FBaUM7QUFFakMsMEJBQTBCO0FBQzFCLGlDQUFpQztBQUVqQyx5QkFBeUI7QUFDekIsK0JBQStCO0FBRS9CLDhDQUE4QztBQUU5QywrQ0FBK0M7QUFDL0Msb0NBQW9DO0FBQ3BDLHdEQUF3RDtBQUN4RCxxREFBcUQ7QUFDckQsNkNBQTZDO0FBQzdDLDhCQUE4QjtBQUM5QixpQ0FBaUM7QUFDakMsZ0NBQWdDO0FBRWhDLGlDQUFpQztBQUNqQyxtQ0FBbUM7QUFDbkMseUNBQXlDO0FBQ3pDLFFBQVE7QUFFUixlQUFlO0FBQ2YscUZBQXFGO0FBQ3JGLHlDQUF5QztBQUN6QyxhQUFhO0FBQ2IsUUFBUTtBQUVSLG1FQUFtRTtBQUNuRSwrSEFBK0g7QUFDL0gsb0RBQW9EO0FBQ3BELDZCQUE2QjtBQUM3QixrR0FBa0c7QUFDbEcscUNBQXFDO0FBQ3JDLHFEQUFxRDtBQUNyRCxtREFBbUQ7QUFDbkQsNkVBQTZFO0FBQzdFLG1EQUFtRDtBQUNuRCwrQkFBK0I7QUFDL0Isc0RBQXNEO0FBQ3RELHlDQUF5QztBQUN6QywrQkFBK0I7QUFDL0Isc0NBQXNDO0FBQ3RDLHdCQUF3QjtBQUN4QixxQkFBcUI7QUFDckIsZ0JBQWdCO0FBQ2hCLDBCQUEwQjtBQUMxQixhQUFhO0FBQ2IsUUFBUTtBQUVSLHFGQUFxRjtBQUNyRix3QkFBd0I7QUFDeEIsOEJBQThCO0FBQzlCLDRCQUE0QjtBQUM1QixvREFBb0Q7QUFDcEQsOENBQThDO0FBQzlDLDJEQUEyRDtBQUMzRCxnQ0FBZ0M7QUFDaEMsc0NBQXNDO0FBQ3RDLGFBQWE7QUFDYixRQUFRO0FBRVIsb0JBQW9CO0FBQ3BCLHlDQUF5QztBQUN6QyxnQ0FBZ0M7QUFDaEMsNkNBQTZDO0FBQzdDLGtEQUFrRDtBQUNsRCxZQUFZO0FBQ1osd0NBQXdDO0FBQ3hDLHVDQUF1QztBQUN2Qyw0Q0FBNEM7QUFDNUMsMkZBQTJGO0FBQzNGLCtDQUErQztBQUMvQywyQkFBMkI7QUFDM0Isb0VBQW9FO0FBQ3BFLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLGlDQUFpQztBQUNqQyw2QkFBNkI7QUFDN0Isd0JBQXdCO0FBQ3hCLFlBQVk7QUFDWix1REFBdUQ7QUFDdkQsZ0NBQWdDO0FBQ2hDLGlEQUFpRDtBQUNqRCxrRUFBa0U7QUFDbEUsbURBQW1EO0FBQ25ELGdEQUFnRDtBQUNoRCx5RUFBeUU7QUFDekUsd0NBQXdDO0FBQ3hDLGtFQUFrRTtBQUNsRSx3REFBd0Q7QUFDeEQsNkRBQTZEO0FBQzdELCtCQUErQjtBQUMvQiwwQkFBMEI7QUFDMUIsa0NBQWtDO0FBQ2xDLHVGQUF1RjtBQUN2RixtQkFBbUI7QUFDbkIsb0NBQW9DO0FBQ3BDLFFBQVE7QUFFUixnQkFBZ0I7QUFDaEIscUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQyx3Q0FBd0M7QUFDeEMsZ0NBQWdDO0FBQ2hDLFFBQVE7QUFFUixvQkFBb0I7QUFDcEIsNENBQTRDO0FBQzVDLHlDQUF5QztBQUN6Qyw4Q0FBOEM7QUFDOUMsUUFBUTtBQUNSLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBCdW5kbGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9CdW5kbGVOYW1lXCI7XG4vLyBpbXBvcnQgeyBTb3VuZFBhdGggfSBmcm9tIFwiLi4vY29tbW9uL1NvdW5kUGF0aFwiO1xuLy8gaW1wb3J0IFN0b3J5Q29uZmlnLCB7IFN0b3J5Q29uZmlnTWdyIH0gZnJvbSBcIi4uL2NvbmZpZy9TdG9yeUNvbmZpZ1wiO1xuLy8gaW1wb3J0IHsgQWJNYW5hZ2VyIH0gZnJvbSBcIi4vQWJNYW5hZ2VyXCI7XG4vLyBpbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tIFwiLi9BdWRpb01hbmFnZXJcIjtcbi8vIGltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xuXG4vLyBjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vLyBAY2NjbGFzc1xuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcnlNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuLy8gICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuLy8gICAgIHN0b3J5Tm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbi8vICAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4vLyAgICAgc3RvcnlMYWI6IGNjLkxhYmVsID0gbnVsbDtcblxuLy8gICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuLy8gICAgIHRpcE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4vLyAgICAgcHVibGljIHN0YXRpYyBpbnM6IFN0b3J5TWFuYWdlciA9IG51bGw7XG5cbi8vICAgICBwcml2YXRlIHN0b3J5Q29uZmlnOiBTdG9yeUNvbmZpZyA9IG51bGw7XG4vLyAgICAgcHJpdmF0ZSBpbnRlcnZhbDogbnVtYmVyID0gMDtcbi8vICAgICBwcml2YXRlIHJlc29sdmU6ICh2YWx1ZTogdW5rbm93bikgPT4gdm9pZCA9IG51bGw7XG4vLyAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGJ5dGVJbnRlcnZhbDogbnVtYmVyID0gMTAwO1xuLy8gICAgIHByaXZhdGUgaXNPbkJ5dGVBbmltOiBib29sZWFuID0gZmFsc2U7XG4vLyAgICAgcHJpdmF0ZSBsdjogbnVtYmVyID0gMDtcbi8vICAgICBwcml2YXRlIGdyb3VwOiBudW1iZXIgPSAwO1xuLy8gICAgIHByaXZhdGUgc3RlcDogbnVtYmVyID0gMDtcblxuLy8gICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4vLyAgICAgICAgIFN0b3J5TWFuYWdlci5pbnMgPSB0aGlzO1xuLy8gICAgICAgICB0aGlzLnN0b3J5Tm9kZS5hY3RpdmUgPSBmYWxzZTtcbi8vICAgICB9XG5cbi8vICAgICBpbml0KCkge1xuLy8gICAgICAgICBBYk1hbmFnZXIubG9hZEJ1bmRsZVJlcyhCdW5kbGVOYW1lLkZvbnQsIFwi5pa55q2j6Zq25LqM566A5L2TXCIsIGNjLkZvbnQpLnRoZW4oZm9udCA9PiB7XG4vLyAgICAgICAgICAgICB0aGlzLnN0b3J5TGFiLmZvbnQgPSBmb250O1xuLy8gICAgICAgICB9KVxuLy8gICAgIH1cblxuLy8gICAgIC8qKuaSreaUvuS4gOe7hOWJp+aDhSBzdGFydENiL2VuZENiOuavj+WPpeWJp+aDhSDlvIDlp4sv57uT5p2fIOaSreaUvumDveS8muinpuWPke+8jOi/lOWbnuW9k+WJjXN0b3J5Q29uZmlnICovXG4vLyAgICAgcGxheUJ5R3JvdXAobHY6IG51bWJlciwgZ3JvdXA6IG51bWJlciwgc3RhcnRDYj86IChjb25maWc6IFN0b3J5Q29uZmlnKSA9PiB2b2lkLCBlbmRDYj86IChjb25maWc6IFN0b3J5Q29uZmlnKSA9PiB2b2lkKSB7XG4vLyAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4vLyAgICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xuLy8gICAgICAgICAgICAgbGV0IHN0b3J5QXJyID0gRGF0YU1hbmFnZXIuaW5zLmdldChTdG9yeUNvbmZpZ01ncikuZ2V0U3RvcnlBcnJCeUx2R3JvdXAobHYsIGdyb3VwKTtcbi8vICAgICAgICAgICAgIGxldCBwbGF5Q2FsbCA9ICgpID0+IHtcbi8vICAgICAgICAgICAgICAgICBsZXQgc3RvcnlDb25maWcgPSBzdG9yeUFycltpbmRleF07XG4vLyAgICAgICAgICAgICAgICAgc3RhcnRDYiAmJiBzdGFydENiKHN0b3J5Q29uZmlnKTtcbi8vICAgICAgICAgICAgICAgICB0aGlzLnBsYXlTdG9yeShsdiwgZ3JvdXAsIGluZGV4LCBzdG9yeUNvbmZpZykudGhlbigoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVuZENiICYmIGVuZENiKHN0b3J5Q29uZmlnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IHN0b3J5QXJyLmxlbmd0aCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlDYWxsKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgcGxheUNhbGwoKTtcbi8vICAgICAgICAgfSlcbi8vICAgICB9XG5cbi8vICAgICBwbGF5U3RvcnkobHY6IG51bWJlciwgZ3JvdXA6IG51bWJlciwgc3RlcDogbnVtYmVyLCBzdG9yeUNvbmZpZzogU3RvcnlDb25maWcpIHtcbi8vICAgICAgICAgdGhpcy5sdiA9IGx2O1xuLy8gICAgICAgICB0aGlzLmdyb3VwID0gZ3JvdXA7XG4vLyAgICAgICAgIHRoaXMuc3RlcCA9IHN0ZXA7XG4vLyAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4vLyAgICAgICAgICAgICB0aGlzLnN0b3J5Q29uZmlnID0gc3RvcnlDb25maWc7XG4vLyAgICAgICAgICAgICBpZiAoIXRoaXMuc3RvcnlDb25maWcpIHJldHVybiByZXNvbHZlKG51bGwpO1xuLy8gICAgICAgICAgICAgdGhpcy5zdG9yeUFuaW0oKTtcbi8vICAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuXG4vLyAgICAgc3RvcnlBbmltKCkge1xuLy8gICAgICAgICBpZiAodGhpcy5pc09uQnl0ZUFuaW0pIHJldHVybjtcbi8vICAgICAgICAgbGV0IGVuZENhbGwgPSAoKSA9PiB7XG4vLyAgICAgICAgICAgICB0aGlzLnN0b3J5Tm9kZS5hY3RpdmUgPSBmYWxzZTtcbi8vICAgICAgICAgICAgIHRoaXMucmVzb2x2ZSAmJiB0aGlzLnJlc29sdmUobnVsbCk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgdGhpcy5zdG9yeU5vZGUuYWN0aXZlID0gdHJ1ZTtcbi8vICAgICAgICAgLy8gdGhpcy5pc09uQnl0ZUFuaW0gPSB0cnVlO1xuLy8gICAgICAgICBBdWRpb01hbmFnZXIuaW5zLnN0b3BBbGxFZmZlY3QoKTtcbi8vICAgICAgICAgbGV0IHNvdW5kUGF0aCA9IFNvdW5kUGF0aFtcImx2X1wiICsgdGhpcy5sdiArIFwiX1wiICsgdGhpcy5ncm91cCArIFwiX1wiICsgdGhpcy5zdGVwXTtcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJzb3VuZFBhdGggXCIsIHNvdW5kUGF0aClcbi8vICAgICAgICAgaWYgKHNvdW5kUGF0aCkge1xuLy8gICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmlucy5wbGF5RWZmZWN0KHNvdW5kUGF0aCwgZmFsc2UsICgpID0+IHtcbi8vICAgICAgICAgICAgICAgICBlbmRDYWxsKCk7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGVuZENhbGwoKTtcbi8vICAgICAgICAgICAgIH0sIDIwMDApO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHRoaXMuc3RvcnlMYWIuc3RyaW5nID0gdGhpcy5zdG9yeUNvbmZpZy5kZXNjXG4vLyAgICAgICAgIC8vIGxldCBieXRlSW5kZXggPSAwO1xuLy8gICAgICAgICAvLyB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuLy8gICAgICAgICAvLyAgICAgaWYgKGJ5dGVJbmRleCA+PSB0aGlzLnN0b3J5Q29uZmlnLmRlc2MubGVuZ3RoKSB7XG4vLyAgICAgICAgIC8vICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbi8vICAgICAgICAgLy8gICAgICAgICB0aGlzLmlzT25CeXRlQW5pbSA9IGZhbHNlO1xuLy8gICAgICAgICAvLyAgICAgICAgICFzb3VuZFBhdGggJiYgdGhpcy5zdG9yeUVuZENiICYmIHRoaXMuc3RvcnlFbmRDYigpO1xuLy8gICAgICAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgICAvLyAgICAgICAgICAgICBVSU1hbmFnZXIuaW5zLmlzU2NlbmVCbG9ja0lucHV0ID0gZmFsc2U7XG4vLyAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc3RvcnlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuLy8gICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnJlc29sdmUgJiYgdGhpcy5yZXNvbHZlKG51bGwpO1xuLy8gICAgICAgICAvLyAgICAgICAgIH0sIDIwMDApO1xuLy8gICAgICAgICAvLyAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgLy8gICAgICAgICBieXRlSW5kZXgrKztcbi8vICAgICAgICAgLy8gICAgICAgICB0aGlzLnN0b3J5TGFiLnN0cmluZyA9IHRoaXMuc3RvcnlDb25maWcuZGVzYy5zbGljZSgwLCBieXRlSW5kZXgpO1xuLy8gICAgICAgICAvLyAgICAgfVxuLy8gICAgICAgICAvLyB9LCB0aGlzLmJ5dGVJbnRlcnZhbCk7XG4vLyAgICAgfVxuXG4vLyAgICAgcmVzZXQoKSB7XG4vLyAgICAgICAgIHRoaXMuc3RvcnlMYWIuc3RyaW5nID0gXCJcIjtcbi8vICAgICAgICAgdGhpcy5zdG9yeUNvbmZpZyA9IG51bGw7XG4vLyAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4vLyAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBudWxsO1xuLy8gICAgIH1cblxuLy8gICAgIGp1bXBDbGljaygpIHtcbi8vICAgICAgICAgQXVkaW9NYW5hZ2VyLmlucy5zdG9wQWxsRWZmZWN0KCk7XG4vLyAgICAgICAgIHRoaXMuc3RvcnlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuLy8gICAgICAgICB0aGlzLnJlc29sdmUgJiYgdGhpcy5yZXNvbHZlKG51bGwpO1xuLy8gICAgIH1cbi8vIH1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0ecd3rtbupN/YOfBJZUHsXD', 'EventManager');
// homePage/script/manager/EventManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventManager = void 0;
var EventManager = /** @class */ (function () {
    function EventManager() {
    }
    /**
     * 添加全局事件监听
     * @param type 事件类型，string
     * @param listener 事件触发后的回调方法
     * @param target 指定回调方法中的this
     */
    EventManager.addListener = function (type, listener, target) {
        cc.systemEvent.on(type, listener, target, false);
    };
    /**
     * 移除全局事件监听
     * @param type 事件类型，string
     * @param listener 事件触发后的回调方法
     * @param target 指定回调方法中的this
     */
    EventManager.removeListener = function (type, listener, target) {
        cc.systemEvent.off(type, listener, target);
    };
    /**
     * 触发事件
     * @param type 事件类型，string
     * @param msg 需要传入的参数，传入后在回调listener中可以获取到参数
     */
    EventManager.triggerEvent = function (type, msg) {
        if (msg === void 0) { msg = null; }
        cc.systemEvent.emit(type, msg);
    };
    return EventManager;
}());
exports.EventManager = EventManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcRXZlbnRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBQUE7SUErQkEsQ0FBQztJQTdCRzs7Ozs7T0FLRztJQUNXLHdCQUFXLEdBQXpCLFVBQTBCLElBQVksRUFBRSxRQUFhLEVBQUUsTUFBVztRQUM5RCxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVywyQkFBYyxHQUE1QixVQUE2QixJQUFZLEVBQUUsUUFBYyxFQUFFLE1BQVk7UUFDbkUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNXLHlCQUFZLEdBQTFCLFVBQTJCLElBQVksRUFBRSxHQUFlO1FBQWYsb0JBQUEsRUFBQSxVQUFlO1FBQ3BELEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBO0FBL0JZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBFdmVudE1hbmFnZXIge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5YWo5bGA5LqL5Lu255uR5ZCsXHJcbiAgICAgKiBAcGFyYW0gdHlwZSDkuovku7bnsbvlnovvvIxzdHJpbmdcclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciDkuovku7bop6blj5HlkI7nmoTlm57osIPmlrnms5VcclxuICAgICAqIEBwYXJhbSB0YXJnZXQg5oyH5a6a5Zue6LCD5pa55rOV5Lit55qEdGhpc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFkZExpc3RlbmVyKHR5cGU6IHN0cmluZywgbGlzdGVuZXI6IGFueSwgdGFyZ2V0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0eXBlLCBsaXN0ZW5lciwgdGFyZ2V0LCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTlhajlsYDkuovku7bnm5HlkKxcclxuICAgICAqIEBwYXJhbSB0eXBlIOS6i+S7tuexu+Wei++8jHN0cmluZ1xyXG4gICAgICogQHBhcmFtIGxpc3RlbmVyIOS6i+S7tuinpuWPkeWQjueahOWbnuiwg+aWueazlVxyXG4gICAgICogQHBhcmFtIHRhcmdldCDmjIflrprlm57osIPmlrnms5XkuK3nmoR0aGlzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVtb3ZlTGlzdGVuZXIodHlwZTogc3RyaW5nLCBsaXN0ZW5lcj86IGFueSwgdGFyZ2V0PzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHR5cGUsIGxpc3RlbmVyLCB0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Kem5Y+R5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gdHlwZSDkuovku7bnsbvlnovvvIxzdHJpbmdcclxuICAgICAqIEBwYXJhbSBtc2cg6ZyA6KaB5Lyg5YWl55qE5Y+C5pWw77yM5Lyg5YWl5ZCO5Zyo5Zue6LCDbGlzdGVuZXLkuK3lj6/ku6Xojrflj5bliLDlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB0cmlnZ2VyRXZlbnQodHlwZTogc3RyaW5nLCBtc2c6IGFueSA9IG51bGwpOiB2b2lkIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KHR5cGUsIG1zZyk7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/TaskManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d5236S++lJp6gk/+KNSRnB', 'TaskManager');
// homePage/script/manager/TaskManager.ts

// import RewardView from "../../../part1/script/RewardView/RewardView";
// import { EventEnum } from "../common/Global";
// import { PlayerData } from "../common/PlayerData";
// import { UiPath } from "../common/UiPath";
// import Gs_task, { Gs_taskMgr } from "../config/Gs_task";
// import DataManager from "./DataManager";
// import { EventManager } from "./EventManager";
// import RedPointManager from "./RedPointManager";
// import { UIManager } from "./UIManager";
// const { ccclass, property } = cc._decorator;
// @ccclass
// export default class TaskManager extends cc.Component {
//     private taskDatas: Gs_task[] = [];
//     public static ins: TaskManager = null;
//     protected onLoad(): void {
//         TaskManager.ins = this;
//     }
//     /**获取新手任务 */
//     public getNewUserTaskList() {
//         PlayerData.ins.curTaskList = [];
//         this.taskDatas = DataManager.ins.get(Gs_taskMgr).datas;
//         this.taskDatas.forEach(v => {
//             if (v.Unlock_Condition) {
//                 switch (v.Unlock_Condition.id) {
//                     //角色等级
//                     case 1:
//                         if (PlayerData.ins.playerLevel >= v.Unlock_Condition.num) {
//                             PlayerData.ins.curTaskList.push({ task: v, progress: 0 });
//                         }
//                         break;
//                     case 2:
//                         let info = PlayerData.ins.unlockBoothInfos.find(vl => vl.type == v.Unlock_Condition.num);
//                         if (info && info.lv >= v.Unlock_Condition.value) {
//                             PlayerData.ins.curTaskList.push({ task: v, progress: 0 });
//                         }
//                         break;
//                 }
//             }
//         })
//         PlayerData.ins.saveData();
//     }
//     /**更新任务进度 */
//     refreshTaskList() {
//         if (PlayerData.ins.curTaskList.length <= 0) return;
//         PlayerData.ins.curTaskList.forEach(v => {
//             switch (v.task.Param.type) {
//                 case 1:
//                     let subInfo = PlayerData.ins.getSubBoothInfoBySubBuildId(v.task.Param.id, v.task.Param.value);
//                     v.progress = subInfo ? subInfo.lv : 0;
//                     break;
//                 case 2:
//                     let boothInfo = PlayerData.ins.getBoothInfoByBuildId(v.task.Param.id);
//                     v.progress = boothInfo ? boothInfo.lv : 0;
//                     break;
//             }
//         })
//         EventManager.triggerEvent(EventEnum.RefreshTask);
//     }
//     /**完成任务 */
//     finishTask(id: number) {
//         if (PlayerData.ins.curTaskList.length <= 0) return;
//         let index = PlayerData.ins.curTaskList.findIndex(v => v.task.Id == id);
//         if (index < 0) return;
//         let taskConfig = PlayerData.ins.curTaskList[index];
//         PlayerData.ins.curTaskList.splice(index, 1);
//         if (taskConfig.task.Next_Id) {
//             let nextConfig = DataManager.ins.get(Gs_taskMgr).getDataById(taskConfig.task.Next_Id);
//             if (nextConfig) {
//                 PlayerData.ins.curTaskList.splice(index, 0, { task: nextConfig, progress: 0 });
//             }
//         }
//     }
//     getAllFinishTask() {
//         let rewardArr: { id: number, num: number }[] = [];
//         PlayerData.ins.curTaskList.forEach(v => {
//             if (v.progress >= v.task.Param.value) {
//                 this.finishTask(v.task.Id);
//                 v.task.Raward.forEach(reward => {
//                     let obj = rewardArr.find(el => el.id == reward.id);
//                     if (obj) {
//                         obj.num += reward.num;
//                     } else {
//                         rewardArr.push(reward);
//                     }
//                 })
//             }
//         })
//         PlayerData.ins.saveData();
//         UIManager.ins.openView(UiPath.RewardView).then((view: RewardView) => {
//             view.init(rewardArr);
//         })
//         EventManager.triggerEvent(EventEnum.RefreshTask);
//         RedPointManager.ins.checkRedPoint();
//     }
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcVGFza01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQXdFO0FBQ3hFLGdEQUFnRDtBQUNoRCxxREFBcUQ7QUFDckQsNkNBQTZDO0FBQzdDLDJEQUEyRDtBQUMzRCwyQ0FBMkM7QUFDM0MsaURBQWlEO0FBQ2pELG1EQUFtRDtBQUNuRCwyQ0FBMkM7QUFFM0MsK0NBQStDO0FBRS9DLFdBQVc7QUFDWCwwREFBMEQ7QUFFMUQseUNBQXlDO0FBRXpDLDZDQUE2QztBQUU3QyxpQ0FBaUM7QUFDakMsa0NBQWtDO0FBQ2xDLFFBQVE7QUFFUixtQkFBbUI7QUFDbkIsb0NBQW9DO0FBQ3BDLDJDQUEyQztBQUMzQyxrRUFBa0U7QUFDbEUsd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4QyxtREFBbUQ7QUFDbkQsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5QixzRkFBc0Y7QUFDdEYseUZBQXlGO0FBQ3pGLDRCQUE0QjtBQUM1QixpQ0FBaUM7QUFDakMsOEJBQThCO0FBQzlCLG9IQUFvSDtBQUNwSCw2RUFBNkU7QUFDN0UseUZBQXlGO0FBQ3pGLDRCQUE0QjtBQUM1QixpQ0FBaUM7QUFDakMsb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2IscUNBQXFDO0FBQ3JDLFFBQVE7QUFFUixtQkFBbUI7QUFDbkIsMEJBQTBCO0FBQzFCLDhEQUE4RDtBQUM5RCxvREFBb0Q7QUFDcEQsMkNBQTJDO0FBQzNDLDBCQUEwQjtBQUMxQixxSEFBcUg7QUFDckgsNkRBQTZEO0FBQzdELDZCQUE2QjtBQUM3QiwwQkFBMEI7QUFDMUIsNkZBQTZGO0FBQzdGLGlFQUFpRTtBQUNqRSw2QkFBNkI7QUFDN0IsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYiw0REFBNEQ7QUFDNUQsUUFBUTtBQUVSLGlCQUFpQjtBQUNqQiwrQkFBK0I7QUFDL0IsOERBQThEO0FBQzlELGtGQUFrRjtBQUNsRixpQ0FBaUM7QUFDakMsOERBQThEO0FBQzlELHVEQUF1RDtBQUN2RCx5Q0FBeUM7QUFDekMscUdBQXFHO0FBQ3JHLGdDQUFnQztBQUNoQyxrR0FBa0c7QUFDbEcsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixRQUFRO0FBRVIsMkJBQTJCO0FBQzNCLDZEQUE2RDtBQUM3RCxvREFBb0Q7QUFDcEQsc0RBQXNEO0FBQ3RELDhDQUE4QztBQUM5QyxvREFBb0Q7QUFDcEQsMEVBQTBFO0FBQzFFLGlDQUFpQztBQUNqQyxpREFBaUQ7QUFDakQsK0JBQStCO0FBQy9CLGtEQUFrRDtBQUNsRCx3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2IscUNBQXFDO0FBQ3JDLGlGQUFpRjtBQUNqRixvQ0FBb0M7QUFDcEMsYUFBYTtBQUNiLDREQUE0RDtBQUM1RCwrQ0FBK0M7QUFDL0MsUUFBUTtBQUNSLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmV3YXJkVmlldyBmcm9tIFwiLi4vLi4vLi4vcGFydDEvc2NyaXB0L1Jld2FyZFZpZXcvUmV3YXJkVmlld1wiO1xuLy8gaW1wb3J0IHsgRXZlbnRFbnVtIH0gZnJvbSBcIi4uL2NvbW1vbi9HbG9iYWxcIjtcbi8vIGltcG9ydCB7IFBsYXllckRhdGEgfSBmcm9tIFwiLi4vY29tbW9uL1BsYXllckRhdGFcIjtcbi8vIGltcG9ydCB7IFVpUGF0aCB9IGZyb20gXCIuLi9jb21tb24vVWlQYXRoXCI7XG4vLyBpbXBvcnQgR3NfdGFzaywgeyBHc190YXNrTWdyIH0gZnJvbSBcIi4uL2NvbmZpZy9Hc190YXNrXCI7XG4vLyBpbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcbi8vIGltcG9ydCB7IEV2ZW50TWFuYWdlciB9IGZyb20gXCIuL0V2ZW50TWFuYWdlclwiO1xuLy8gaW1wb3J0IFJlZFBvaW50TWFuYWdlciBmcm9tIFwiLi9SZWRQb2ludE1hbmFnZXJcIjtcbi8vIGltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gXCIuL1VJTWFuYWdlclwiO1xuXG4vLyBjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vLyBAY2NjbGFzc1xuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza01hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4vLyAgICAgcHJpdmF0ZSB0YXNrRGF0YXM6IEdzX3Rhc2tbXSA9IFtdO1xuXG4vLyAgICAgcHVibGljIHN0YXRpYyBpbnM6IFRhc2tNYW5hZ2VyID0gbnVsbDtcblxuLy8gICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4vLyAgICAgICAgIFRhc2tNYW5hZ2VyLmlucyA9IHRoaXM7XG4vLyAgICAgfVxuXG4vLyAgICAgLyoq6I635Y+W5paw5omL5Lu75YqhICovXG4vLyAgICAgcHVibGljIGdldE5ld1VzZXJUYXNrTGlzdCgpIHtcbi8vICAgICAgICAgUGxheWVyRGF0YS5pbnMuY3VyVGFza0xpc3QgPSBbXTtcbi8vICAgICAgICAgdGhpcy50YXNrRGF0YXMgPSBEYXRhTWFuYWdlci5pbnMuZ2V0KEdzX3Rhc2tNZ3IpLmRhdGFzO1xuLy8gICAgICAgICB0aGlzLnRhc2tEYXRhcy5mb3JFYWNoKHYgPT4ge1xuLy8gICAgICAgICAgICAgaWYgKHYuVW5sb2NrX0NvbmRpdGlvbikge1xuLy8gICAgICAgICAgICAgICAgIHN3aXRjaCAodi5VbmxvY2tfQ29uZGl0aW9uLmlkKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIC8v6KeS6Imy562J57qnXG4vLyAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChQbGF5ZXJEYXRhLmlucy5wbGF5ZXJMZXZlbCA+PSB2LlVubG9ja19Db25kaXRpb24ubnVtKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVyRGF0YS5pbnMuY3VyVGFza0xpc3QucHVzaCh7IHRhc2s6IHYsIHByb2dyZXNzOiAwIH0pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmZvID0gUGxheWVyRGF0YS5pbnMudW5sb2NrQm9vdGhJbmZvcy5maW5kKHZsID0+IHZsLnR5cGUgPT0gdi5VbmxvY2tfQ29uZGl0aW9uLm51bSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbyAmJiBpbmZvLmx2ID49IHYuVW5sb2NrX0NvbmRpdGlvbi52YWx1ZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXllckRhdGEuaW5zLmN1clRhc2tMaXN0LnB1c2goeyB0YXNrOiB2LCBwcm9ncmVzczogMCB9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgUGxheWVyRGF0YS5pbnMuc2F2ZURhdGEoKTtcbi8vICAgICB9XG5cbi8vICAgICAvKirmm7TmlrDku7vliqHov5vluqYgKi9cbi8vICAgICByZWZyZXNoVGFza0xpc3QoKSB7XG4vLyAgICAgICAgIGlmIChQbGF5ZXJEYXRhLmlucy5jdXJUYXNrTGlzdC5sZW5ndGggPD0gMCkgcmV0dXJuO1xuLy8gICAgICAgICBQbGF5ZXJEYXRhLmlucy5jdXJUYXNrTGlzdC5mb3JFYWNoKHYgPT4ge1xuLy8gICAgICAgICAgICAgc3dpdGNoICh2LnRhc2suUGFyYW0udHlwZSkge1xuLy8gICAgICAgICAgICAgICAgIGNhc2UgMTpcbi8vICAgICAgICAgICAgICAgICAgICAgbGV0IHN1YkluZm8gPSBQbGF5ZXJEYXRhLmlucy5nZXRTdWJCb290aEluZm9CeVN1YkJ1aWxkSWQodi50YXNrLlBhcmFtLmlkLCB2LnRhc2suUGFyYW0udmFsdWUpO1xuLy8gICAgICAgICAgICAgICAgICAgICB2LnByb2dyZXNzID0gc3ViSW5mbyA/IHN1YkluZm8ubHYgOiAwO1xuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgICAgICBjYXNlIDI6XG4vLyAgICAgICAgICAgICAgICAgICAgIGxldCBib290aEluZm8gPSBQbGF5ZXJEYXRhLmlucy5nZXRCb290aEluZm9CeUJ1aWxkSWQodi50YXNrLlBhcmFtLmlkKTtcbi8vICAgICAgICAgICAgICAgICAgICAgdi5wcm9ncmVzcyA9IGJvb3RoSW5mbyA/IGJvb3RoSW5mby5sdiA6IDA7XG4vLyAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICBFdmVudE1hbmFnZXIudHJpZ2dlckV2ZW50KEV2ZW50RW51bS5SZWZyZXNoVGFzayk7XG4vLyAgICAgfVxuXG4vLyAgICAgLyoq5a6M5oiQ5Lu75YqhICovXG4vLyAgICAgZmluaXNoVGFzayhpZDogbnVtYmVyKSB7XG4vLyAgICAgICAgIGlmIChQbGF5ZXJEYXRhLmlucy5jdXJUYXNrTGlzdC5sZW5ndGggPD0gMCkgcmV0dXJuO1xuLy8gICAgICAgICBsZXQgaW5kZXggPSBQbGF5ZXJEYXRhLmlucy5jdXJUYXNrTGlzdC5maW5kSW5kZXgodiA9PiB2LnRhc2suSWQgPT0gaWQpO1xuLy8gICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm47XG4vLyAgICAgICAgIGxldCB0YXNrQ29uZmlnID0gUGxheWVyRGF0YS5pbnMuY3VyVGFza0xpc3RbaW5kZXhdO1xuLy8gICAgICAgICBQbGF5ZXJEYXRhLmlucy5jdXJUYXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuLy8gICAgICAgICBpZiAodGFza0NvbmZpZy50YXNrLk5leHRfSWQpIHtcbi8vICAgICAgICAgICAgIGxldCBuZXh0Q29uZmlnID0gRGF0YU1hbmFnZXIuaW5zLmdldChHc190YXNrTWdyKS5nZXREYXRhQnlJZCh0YXNrQ29uZmlnLnRhc2suTmV4dF9JZCk7XG4vLyAgICAgICAgICAgICBpZiAobmV4dENvbmZpZykge1xuLy8gICAgICAgICAgICAgICAgIFBsYXllckRhdGEuaW5zLmN1clRhc2tMaXN0LnNwbGljZShpbmRleCwgMCwgeyB0YXNrOiBuZXh0Q29uZmlnLCBwcm9ncmVzczogMCB9KTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIGdldEFsbEZpbmlzaFRhc2soKSB7XG4vLyAgICAgICAgIGxldCByZXdhcmRBcnI6IHsgaWQ6IG51bWJlciwgbnVtOiBudW1iZXIgfVtdID0gW107XG4vLyAgICAgICAgIFBsYXllckRhdGEuaW5zLmN1clRhc2tMaXN0LmZvckVhY2godiA9PiB7XG4vLyAgICAgICAgICAgICBpZiAodi5wcm9ncmVzcyA+PSB2LnRhc2suUGFyYW0udmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaFRhc2sodi50YXNrLklkKTtcbi8vICAgICAgICAgICAgICAgICB2LnRhc2suUmF3YXJkLmZvckVhY2gocmV3YXJkID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHJld2FyZEFyci5maW5kKGVsID0+IGVsLmlkID09IHJld2FyZC5pZCk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChvYmopIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5udW0gKz0gcmV3YXJkLm51bTtcbi8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZEFyci5wdXNoKHJld2FyZCk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICBQbGF5ZXJEYXRhLmlucy5zYXZlRGF0YSgpO1xuLy8gICAgICAgICBVSU1hbmFnZXIuaW5zLm9wZW5WaWV3KFVpUGF0aC5SZXdhcmRWaWV3KS50aGVuKCh2aWV3OiBSZXdhcmRWaWV3KSA9PiB7XG4vLyAgICAgICAgICAgICB2aWV3LmluaXQocmV3YXJkQXJyKTtcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgRXZlbnRNYW5hZ2VyLnRyaWdnZXJFdmVudChFdmVudEVudW0uUmVmcmVzaFRhc2spO1xuLy8gICAgICAgICBSZWRQb2ludE1hbmFnZXIuaW5zLmNoZWNrUmVkUG9pbnQoKTtcbi8vICAgICB9XG4vLyB9XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/TipManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '001f827Bw1HHaiXw+q5yJu+', 'TipManager');
// homePage/script/manager/TipManager.ts

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
var CommonTip_1 = require("../common/CommonTip");
var MyPool_1 = require("../common/MyPool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TipManager = /** @class */ (function (_super) {
    __extends(TipManager, _super);
    function TipManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tipNode = null;
        _this.tipPrefab = null;
        _this.tipNodeMap = new Map();
        _this.tipArr = [];
        return _this;
    }
    TipManager_1 = TipManager;
    TipManager.prototype.onLoad = function () {
        TipManager_1.ins = this;
    };
    TipManager.prototype.showTip = function (tipStr) {
        var tip = MyPool_1.default.getObj(this.tipPrefab);
        tip.setParent(this.tipNode);
        tip.y = 0;
        var commonTip = tip.getComponent(CommonTip_1.CommonTip);
        commonTip.show(tipStr);
        this.refreshTip(commonTip);
    };
    TipManager.prototype.refreshTip = function (commonTip) {
        if (this.tipNodeMap.size > 0) {
            this.tipNodeMap.forEach(function (v, k) {
                k.topMove();
            });
        }
        var gap = this.tipArr.length - 2;
        if (gap > 0) {
            for (var i = 0; i < gap; i++) {
                var tip = this.tipArr.shift();
                this.tipNodeMap.delete(tip);
                tip.destroySelf();
            }
        }
        this.tipNodeMap.set(commonTip, Date.now() + 1000);
        this.tipArr.push(commonTip);
    };
    TipManager.prototype.update = function (dt) {
        var _this = this;
        if (this.tipNodeMap.size <= 0)
            return;
        this.tipNodeMap.forEach(function (v, k) {
            if (Date.now() >= v) {
                _this.tipNodeMap.delete(k);
                var index = _this.tipArr.indexOf(k);
                _this.tipArr.splice(index, 1);
                k.hide();
            }
        });
    };
    var TipManager_1;
    TipManager.ins = null;
    __decorate([
        property(cc.Node)
    ], TipManager.prototype, "tipNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], TipManager.prototype, "tipPrefab", void 0);
    TipManager = TipManager_1 = __decorate([
        ccclass
    ], TipManager);
    return TipManager;
}(cc.Component));
exports.default = TipManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcVGlwTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBZ0Q7QUFDaEQsMkNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBc0RDO1FBbkRhLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUEyQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQy9DLFlBQU0sR0FBZ0IsRUFBRSxDQUFDOztJQTRDckMsQ0FBQzttQkF0RG9CLFVBQVU7SUFZM0IsMkJBQU0sR0FBTjtRQUNJLFlBQVUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFTSw0QkFBTyxHQUFkLFVBQWUsTUFBYztRQUN6QixJQUFJLEdBQUcsR0FBRyxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLHFCQUFTLENBQUMsQ0FBQztRQUM1QyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELCtCQUFVLEdBQVYsVUFBVyxTQUFvQjtRQUMzQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN6QixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUE7U0FDTDtRQUNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDVCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMxQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUIsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3JCO1NBQ0o7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFUywyQkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQTNCLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDO1lBQUUsT0FBTztRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3pCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDakIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNaO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDOztJQTdDYSxjQUFHLEdBQWUsSUFBSSxDQUFDO0lBTHJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ2dCO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ2tCO0lBTnJCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FzRDlCO0lBQUQsaUJBQUM7Q0F0REQsQUFzREMsQ0F0RHVDLEVBQUUsQ0FBQyxTQUFTLEdBc0RuRDtrQkF0RG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25UaXAgfSBmcm9tIFwiLi4vY29tbW9uL0NvbW1vblRpcFwiO1xyXG5pbXBvcnQgTXlQb29sIGZyb20gXCIuLi9jb21tb24vTXlQb29sXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlwTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcm90ZWN0ZWQgdGlwTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByb3RlY3RlZCB0aXBQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbnM6IFRpcE1hbmFnZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB0aXBOb2RlTWFwOiBNYXA8Q29tbW9uVGlwLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xyXG4gICAgcHJpdmF0ZSB0aXBBcnI6IENvbW1vblRpcFtdID0gW107XHJcblxyXG4gICAgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIFRpcE1hbmFnZXIuaW5zID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1RpcCh0aXBTdHI6IHN0cmluZykge1xyXG4gICAgICAgIHZhciB0aXAgPSBNeVBvb2wuZ2V0T2JqKHRoaXMudGlwUHJlZmFiKTtcclxuICAgICAgICB0aXAuc2V0UGFyZW50KHRoaXMudGlwTm9kZSk7XHJcbiAgICAgICAgdGlwLnkgPSAwO1xyXG4gICAgICAgIHZhciBjb21tb25UaXAgPSB0aXAuZ2V0Q29tcG9uZW50KENvbW1vblRpcCk7XHJcbiAgICAgICAgY29tbW9uVGlwLnNob3codGlwU3RyKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hUaXAoY29tbW9uVGlwKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoVGlwKGNvbW1vblRpcDogQ29tbW9uVGlwKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGlwTm9kZU1hcC5zaXplID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpcE5vZGVNYXAuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgay50b3BNb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBnYXAgPSB0aGlzLnRpcEFyci5sZW5ndGggLSAyO1xyXG4gICAgICAgIGlmIChnYXAgPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB0aXAgPSB0aGlzLnRpcEFyci5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXBOb2RlTWFwLmRlbGV0ZSh0aXApO1xyXG4gICAgICAgICAgICAgICAgdGlwLmRlc3Ryb3lTZWxmKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aXBOb2RlTWFwLnNldChjb21tb25UaXAsIERhdGUubm93KCkgKyAxMDAwKTtcclxuICAgICAgICB0aGlzLnRpcEFyci5wdXNoKGNvbW1vblRpcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudGlwTm9kZU1hcC5zaXplIDw9IDApIHJldHVybjtcclxuICAgICAgICB0aGlzLnRpcE5vZGVNYXAuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSA+PSB2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpcE5vZGVNYXAuZGVsZXRlKGspO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50aXBBcnIuaW5kZXhPZihrKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlwQXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICBrLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0gXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/tool/CheckTouchMoveDir.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b56bnthrtIR5dsdSnmJ5Xe', 'CheckTouchMoveDir');
// homePage/script/tool/CheckTouchMoveDir.ts

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
exports.CheckTouchMoveDir = exports.CheckDir = exports.MoveType = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var MoveType;
(function (MoveType) {
    MoveType[MoveType["ONLY_X"] = 0] = "ONLY_X";
    MoveType[MoveType["ONLY_Y"] = 1] = "ONLY_Y";
    MoveType[MoveType["X_AND_Y"] = 2] = "X_AND_Y";
})(MoveType = exports.MoveType || (exports.MoveType = {}));
var CheckDir;
(function (CheckDir) {
    CheckDir[CheckDir["LEFT_DOWN"] = 0] = "LEFT_DOWN";
    CheckDir[CheckDir["RIGHT_UP"] = 1] = "RIGHT_UP";
    CheckDir[CheckDir["NONE"] = 2] = "NONE";
})(CheckDir = exports.CheckDir || (exports.CheckDir = {}));
var CheckTouchMoveDir = /** @class */ (function (_super) {
    __extends(CheckTouchMoveDir, _super);
    function CheckTouchMoveDir() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touchNode = null;
        _this.moveType = MoveType.ONLY_X;
        _this.checkDir = CheckDir.NONE;
        _this.isMonitorDis = true;
        _this.triggerDis = 5;
        _this.isCheckClick = false;
        _this.useCapture = true;
        _this.id = 0;
        _this.touchEvents = [];
        _this._startTouch = false;
        _this.currentTouchId = -1;
        _this.startPos = cc.Vec2.ZERO;
        _this.endPos = cc.Vec2.ZERO;
        _this.lastPos = cc.Vec2.ZERO;
        _this.isCanCheck = true;
        _this.isMove = false;
        _this.totalMoveDis = 0;
        return _this;
    }
    CheckTouchMoveDir.prototype.onEnable = function () {
        if (!this.touchNode) {
            this.touchNode = this.node;
        }
        this.touchNode.on(cc.Node.EventType.TOUCH_START, this.touchStart, this, this.useCapture);
        this.touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this, this.useCapture);
        this.touchNode.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this, this.useCapture);
        this.touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this, this.useCapture);
        this.currentTouchId = -1;
        this.startTouch = false;
    };
    CheckTouchMoveDir.prototype.onDisable = function () {
        this.touchNode.off(cc.Node.EventType.TOUCH_START, this.touchStart, this, this.useCapture);
        this.touchNode.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this, this.useCapture);
        this.touchNode.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this, this.useCapture);
        this.touchNode.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this, this.useCapture);
    };
    Object.defineProperty(CheckTouchMoveDir.prototype, "startTouch", {
        get: function () {
            return this._startTouch;
        },
        set: function (value) {
            this._startTouch = value;
        },
        enumerable: false,
        configurable: true
    });
    CheckTouchMoveDir.prototype.touchStart = function (event) {
        if (this.startTouch) {
            return;
        }
        this.startTouch = true;
        this.currentTouchId = event.getID();
        var worldPos = event.getLocation();
        worldPos.x = Math.floor(worldPos.x);
        worldPos.y = Math.floor(worldPos.y);
        this.lastPos = worldPos;
        this.startPos = worldPos;
        this.endPos = worldPos;
        this.isMove = !this.isMonitorDis;
        this.totalMoveDis = 0;
    };
    CheckTouchMoveDir.prototype.touchMove = function (event) {
        if (event.getID() !== this.currentTouchId) {
            return;
        }
        var worldPos = event.getLocation();
        worldPos.x = Math.floor(worldPos.x);
        worldPos.y = Math.floor(worldPos.y);
        if (worldPos.x == this.lastPos.x && worldPos.y == this.lastPos.y) {
            return;
        }
        var moveDis = this.endPos.sub(worldPos).mag();
        this.totalMoveDis += moveDis;
        if (this.isMonitorDis && this.totalMoveDis >= this.triggerDis && !this.isMove) {
            this.isMove = true;
        }
        this.endPos = worldPos;
    };
    CheckTouchMoveDir.prototype.touchEnd = function (event) {
        var _this = this;
        if (event.getID() !== this.currentTouchId) {
            return;
        }
        this.startTouch = false;
        this.currentTouchId = -1;
        if (!this.isMove) {
            this.isCheckClick && this.touchEvents.forEach(function (value, index, array) {
                value.emit([_this.id]);
            });
        }
        else {
            if (this.moveType == MoveType.X_AND_Y) {
                // let moveDis = this.startPos.sub(this.endPos).mag();
                // console.log("touchEnd _moveDis = ",moveDis);
                // if(moveDis >= this.triggerDis){
                //     WorldEventManager.triggerEvent(EventEnum.TouchMove,moveDis);
                // }
                var xMoveDis_1 = this.endPos.x - this.startPos.x;
                var yMoveDis_1 = this.endPos.y - this.startPos.y;
                this.isCanCheck && this.touchEvents.forEach(function (value, index, array) {
                    value.emit([_this.id, xMoveDis_1, yMoveDis_1]);
                });
            }
            else {
                if (this.moveType == MoveType.ONLY_X) {
                    var call = function () {
                        if (!_this.isCanCheck) {
                            return;
                        }
                        if (_this.checkDir == CheckDir.NONE) {
                            _this.touchEvents.forEach(function (value, index, array) {
                                value.emit([_this.id, moveDis_1, dir_1]);
                            });
                        }
                        else if (_this.checkDir == CheckDir.LEFT_DOWN) {
                            if (_this.endPos.x < _this.startPos.x) {
                                _this.touchEvents.forEach(function (value, index, array) {
                                    value.emit([_this.id, moveDis_1]);
                                });
                            }
                        }
                        else if (_this.checkDir == CheckDir.RIGHT_UP) {
                            if (_this.endPos.x > _this.startPos.x) {
                                _this.touchEvents.forEach(function (value, index, array) {
                                    value.emit([_this.id, moveDis_1]);
                                });
                            }
                        }
                    };
                    var dir_1 = this.endPos.x - this.startPos.x > 0 ? 1 : -1;
                    var moveDis_1 = Math.abs(this.endPos.x - this.startPos.x);
                    if (this.isMonitorDis) {
                        // console.log("this._moveDis = ", moveDis)
                        if (moveDis_1 >= this.triggerDis) {
                            call();
                        }
                    }
                    else {
                        call();
                    }
                }
                else if (this.moveType == MoveType.ONLY_Y) {
                    var call = function () {
                        if (!_this.isCanCheck) {
                            return;
                        }
                        if (_this.checkDir == CheckDir.NONE) {
                            _this.touchEvents.forEach(function (value, index, array) {
                                value.emit([_this.id, moveDis_2]);
                            });
                        }
                        else if (_this.checkDir == CheckDir.LEFT_DOWN) {
                            if (_this.endPos.y < _this.startPos.y) {
                                _this.touchEvents.forEach(function (value, index, array) {
                                    value.emit([_this.id, moveDis_2]);
                                });
                            }
                        }
                        else if (_this.checkDir == CheckDir.RIGHT_UP) {
                            if (_this.endPos.y > _this.startPos.y) {
                                _this.touchEvents.forEach(function (value, index, array) {
                                    value.emit([_this.id, moveDis_2]);
                                });
                            }
                        }
                    };
                    var moveDis_2 = Math.abs(this.endPos.y - this.startPos.y);
                    if (this.isMonitorDis) {
                        // console.log("moveDis = ", moveDis)
                        if (moveDis_2 >= this.triggerDis) {
                            call();
                        }
                    }
                    else {
                        call();
                    }
                }
            }
        }
        this.isMove = false;
        this.startPos = cc.Vec2.ZERO;
        this.endPos = cc.Vec2.ZERO;
        this.lastPos = cc.Vec2.ZERO;
    };
    CheckTouchMoveDir.prototype.setCheckDir = function (dir) {
        this.checkDir = dir;
    };
    CheckTouchMoveDir.prototype.setIsCanCheck = function (isCheck) {
        this.isCanCheck = isCheck;
    };
    __decorate([
        property({
            tooltip: '触摸板节点',
            type: cc.Node
        })
    ], CheckTouchMoveDir.prototype, "touchNode", void 0);
    __decorate([
        property({
            displayName: '移动方式',
            type: cc.Enum(MoveType)
        })
    ], CheckTouchMoveDir.prototype, "moveType", void 0);
    __decorate([
        property({ displayName: "监测方向", type: cc.Enum(CheckDir) })
    ], CheckTouchMoveDir.prototype, "checkDir", void 0);
    __decorate([
        property({ displayName: "监测滑动距离" })
    ], CheckTouchMoveDir.prototype, "isMonitorDis", void 0);
    __decorate([
        property({ visible: function () { return this.isMonitorDis; } })
    ], CheckTouchMoveDir.prototype, "triggerDis", void 0);
    __decorate([
        property({ displayName: "监测点击" })
    ], CheckTouchMoveDir.prototype, "isCheckClick", void 0);
    __decorate([
        property
    ], CheckTouchMoveDir.prototype, "useCapture", void 0);
    __decorate([
        property
    ], CheckTouchMoveDir.prototype, "id", void 0);
    __decorate([
        property({ displayName: "触发事件", type: cc.Component.EventHandler })
    ], CheckTouchMoveDir.prototype, "touchEvents", void 0);
    CheckTouchMoveDir = __decorate([
        ccclass
    ], CheckTouchMoveDir);
    return CheckTouchMoveDir;
}(cc.Component));
exports.CheckTouchMoveDir = CheckTouchMoveDir;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcdG9vbFxcQ2hlY2tUb3VjaE1vdmVEaXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBRWxELElBQVksUUFJWDtBQUpELFdBQVksUUFBUTtJQUNoQiwyQ0FBVSxDQUFBO0lBQ1YsMkNBQVUsQ0FBQTtJQUNWLDZDQUFXLENBQUE7QUFDZixDQUFDLEVBSlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFJbkI7QUFFRCxJQUFZLFFBSVg7QUFKRCxXQUFZLFFBQVE7SUFDaEIsaURBQWEsQ0FBQTtJQUNiLCtDQUFZLENBQUE7SUFDWix1Q0FBSSxDQUFBO0FBQ1IsQ0FBQyxFQUpXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBSW5CO0FBR0Q7SUFBdUMscUNBQVk7SUFBbkQ7UUFBQSxxRUFtTkM7UUE3TVcsZUFBUyxHQUFZLElBQUksQ0FBQztRQU0xQixjQUFRLEdBQWEsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUdyQyxjQUFRLEdBQWEsUUFBUSxDQUFDLElBQUksQ0FBQztRQUduQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUd2QixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUd0QyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixRQUFFLEdBQVcsQ0FBQyxDQUFDO1FBR2YsaUJBQVcsR0FBZ0MsRUFBRSxDQUFDO1FBcUJ0QyxpQkFBVyxHQUFZLEtBQUssQ0FBQztRQU83QixvQkFBYyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzVCLGNBQVEsR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNqQyxZQUFNLEdBQVksRUFBRSxD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dEM7UUFEQyxRQUFRO3lEQUNrQjtJQUczQjtRQURDLFFBQVE7aURBQ007SUFHZjtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7MERBQ3JCO0lBakNyQyxpQkFBaUI7UUFEN0IsT0FBTztPQUNLLGlCQUFpQixDQW1ON0I7SUFBRCx3QkFBQztDQW5ORCxBQW1OQyxDQW5Oc0MsRUFBRSxDQUFDLFNBQVMsR0FtTmxEO0FBbk5ZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIE1vdmVUeXBlIHtcclxuICAgIE9OTFlfWCA9IDAsXHJcbiAgICBPTkxZX1kgPSAxLFxyXG4gICAgWF9BTkRfWSA9IDIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENoZWNrRGlyIHtcclxuICAgIExFRlRfRE9XTiA9IDAsXHJcbiAgICBSSUdIVF9VUCA9IDEsXHJcbiAgICBOT05FXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBDaGVja1RvdWNoTW92ZURpciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiAn6Kem5pG45p2/6IqC54K5JyxcclxuICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICB9KVxyXG4gICAgcHJpdmF0ZSB0b3VjaE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICfnp7vliqjmlrnlvI8nLFxyXG4gICAgICAgIHR5cGU6IGNjLkVudW0oTW92ZVR5cGUpXHJcbiAgICB9KVxyXG4gICAgcHJpdmF0ZSBtb3ZlVHlwZTogTW92ZVR5cGUgPSBNb3ZlVHlwZS5PTkxZX1g7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi55uR5rWL5pa55ZCRXCIsIHR5cGU6IGNjLkVudW0oQ2hlY2tEaXIpIH0pXHJcbiAgICBwcml2YXRlIGNoZWNrRGlyOiBDaGVja0RpciA9IENoZWNrRGlyLk5PTkU7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi55uR5rWL5ruR5Yqo6Led56a7XCIgfSlcclxuICAgIHByaXZhdGUgaXNNb25pdG9yRGlzOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5pc01vbml0b3JEaXMgfSB9KVxyXG4gICAgcHJpdmF0ZSB0cmlnZ2VyRGlzOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuebkea1i+eCueWHu1wiIH0pXHJcbiAgICBwcml2YXRlIGlzQ2hlY2tDbGljazogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdXNlQ2FwdHVyZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLop6blj5Hkuovku7ZcIiwgdHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlciB9KVxyXG4gICAgdG91Y2hFdmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMudG91Y2hOb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG91Y2hOb2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzLCB0aGlzLnVzZUNhcHR1cmUpO1xyXG4gICAgICAgIHRoaXMudG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzLCB0aGlzLnVzZUNhcHR1cmUpO1xyXG4gICAgICAgIHRoaXMudG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcywgdGhpcy51c2VDYXB0dXJlKTtcclxuICAgICAgICB0aGlzLnRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMsIHRoaXMudXNlQ2FwdHVyZSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VG91Y2hJZCA9IC0xO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUb3VjaCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMsIHRoaXMudXNlQ2FwdHVyZSk7XHJcbiAgICAgICAgdGhpcy50b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzLCB0aGlzLnVzZUNhcHR1cmUpO1xyXG4gICAgICAgIHRoaXMudG91Y2hOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMsIHRoaXMudXNlQ2FwdHVyZSk7XHJcbiAgICAgICAgdGhpcy50b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcywgdGhpcy51c2VDYXB0dXJlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zdGFydFRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZ2V0IHN0YXJ0VG91Y2goKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0VG91Y2g7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IHN0YXJ0VG91Y2godmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zdGFydFRvdWNoID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUb3VjaElkOiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgc3RhcnRQb3M6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XHJcbiAgICBwcml2YXRlIGVuZFBvczogY2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcclxuICAgIHByaXZhdGUgbGFzdFBvczogY2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcclxuICAgIHByaXZhdGUgaXNDYW5DaGVjazogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGlzTW92ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB0b3RhbE1vdmVEaXM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0KGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRUb3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhcnRUb3VjaCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VG91Y2hJZCA9IGV2ZW50LmdldElEKCk7XHJcblxyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgd29ybGRQb3MueCA9IE1hdGguZmxvb3Iod29ybGRQb3MueCk7XHJcbiAgICAgICAgd29ybGRQb3MueSA9IE1hdGguZmxvb3Iod29ybGRQb3MueSk7XHJcblxyXG4gICAgICAgIHRoaXMubGFzdFBvcyA9IHdvcmxkUG9zO1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3MgPSB3b3JsZFBvcztcclxuICAgICAgICB0aGlzLmVuZFBvcyA9IHdvcmxkUG9zO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gIXRoaXMuaXNNb25pdG9yRGlzO1xyXG4gICAgICAgIHRoaXMudG90YWxNb3ZlRGlzID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoTW92ZShldmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChldmVudC5nZXRJRCgpICE9PSB0aGlzLmN1cnJlbnRUb3VjaElkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB3b3JsZFBvcy54ID0gTWF0aC5mbG9vcih3b3JsZFBvcy54KTtcclxuICAgICAgICB3b3JsZFBvcy55ID0gTWF0aC5mbG9vcih3b3JsZFBvcy55KTtcclxuICAgICAgICBpZiAod29ybGRQb3MueCA9PSB0aGlzLmxhc3RQb3MueCAmJiB3b3JsZFBvcy55ID09IHRoaXMubGFzdFBvcy55KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1vdmVEaXMgPSB0aGlzLmVuZFBvcy5zdWIod29ybGRQb3MpLm1hZygpO1xyXG4gICAgICAgIHRoaXMudG90YWxNb3ZlRGlzICs9IG1vdmVEaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb25pdG9yRGlzICYmIHRoaXMudG90YWxNb3ZlRGlzID49IHRoaXMudHJpZ2dlckRpcyAmJiAhdGhpcy5pc01vdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVuZFBvcyA9IHdvcmxkUG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hFbmQoZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoZXZlbnQuZ2V0SUQoKSAhPT0gdGhpcy5jdXJyZW50VG91Y2hJZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhcnRUb3VjaCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRvdWNoSWQgPSAtMTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTW92ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2hlY2tDbGljayAmJiB0aGlzLnRvdWNoRXZlbnRzLmZvckVhY2goKHZhbHVlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLCBpbmRleDogbnVtYmVyLCBhcnJheTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5lbWl0KFt0aGlzLmlkXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vdmVUeXBlID09IE1vdmVUeXBlLlhfQU5EX1kpIHtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBtb3ZlRGlzID0gdGhpcy5zdGFydFBvcy5zdWIodGhpcy5lbmRQb3MpLm1hZygpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0b3VjaEVuZCBfbW92ZURpcyA9IFwiLG1vdmVEaXMpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYobW92ZURpcyA+PSB0aGlzLnRyaWdnZXJEaXMpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIFdvcmxkRXZlbnRNYW5hZ2VyLnRyaWdnZXJFdmVudChFdmVudEVudW0uVG91Y2hNb3ZlLG1vdmVEaXMpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgbGV0IHhNb3ZlRGlzID0gdGhpcy5lbmRQb3MueCAtIHRoaXMuc3RhcnRQb3MueDtcclxuICAgICAgICAgICAgICAgIGxldCB5TW92ZURpcyA9IHRoaXMuZW5kUG9zLnkgLSB0aGlzLnN0YXJ0UG9zLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2FuQ2hlY2sgJiYgdGhpcy50b3VjaEV2ZW50cy5mb3JFYWNoKCh2YWx1ZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlciwgaW5kZXg6IG51bWJlciwgYXJyYXk6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmVtaXQoW3RoaXMuaWQsIHhNb3ZlRGlzLCB5TW92ZURpc10pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZlVHlwZSA9PSBNb3ZlVHlwZS5PTkxZX1gpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FsbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ2FuQ2hlY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja0RpciA9PSBDaGVja0Rpci5OT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRzLmZvckVhY2goKHZhbHVlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLCBpbmRleDogbnVtYmVyLCBhcnJheTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuZW1pdChbdGhpcy5pZCwgbW92ZURpcywgZGlyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrRGlyID09IENoZWNrRGlyLkxFRlRfRE9XTikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5kUG9zLnggPCB0aGlzLnN0YXJ0UG9zLngpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRzLmZvckVhY2goKHZhbHVlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLCBpbmRleDogbnVtYmVyLCBhcnJheTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmVtaXQoW3RoaXMuaWQsIG1vdmVEaXNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrRGlyID09IENoZWNrRGlyLlJJR0hUX1VQKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmRQb3MueCA+IHRoaXMuc3RhcnRQb3MueCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2hFdmVudHMuZm9yRWFjaCgodmFsdWU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsIGluZGV4OiBudW1iZXIsIGFycmF5OiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuZW1pdChbdGhpcy5pZCwgbW92ZURpc10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXIgPSB0aGlzLmVuZFBvcy54IC0gdGhpcy5zdGFydFBvcy54ID4gMCA/IDEgOiAtMTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZURpcyA9IE1hdGguYWJzKHRoaXMuZW5kUG9zLnggLSB0aGlzLnN0YXJ0UG9zLngpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTW9uaXRvckRpcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuX21vdmVEaXMgPSBcIiwgbW92ZURpcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmVEaXMgPj0gdGhpcy50cmlnZ2VyRGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmVUeXBlID09IE1vdmVUeXBlLk9OTFlfWSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYWxsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNDYW5DaGVjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrRGlyID09IENoZWNrRGlyLk5PTkUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2hFdmVudHMuZm9yRWFjaCgodmFsdWU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsIGluZGV4OiBudW1iZXIsIGFycmF5OiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5lbWl0KFt0aGlzLmlkLCBtb3ZlRGlzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrRGlyID09IENoZWNrRGlyLkxFRlRfRE9XTikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5kUG9zLnkgPCB0aGlzLnN0YXJ0UG9zLnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRzLmZvckVhY2goKHZhbHVlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLCBpbmRleDogbnVtYmVyLCBhcnJheTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmVtaXQoW3RoaXMuaWQsIG1vdmVEaXNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrRGlyID09IENoZWNrRGlyLlJJR0hUX1VQKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmRQb3MueSA+IHRoaXMuc3RhcnRQb3MueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2hFdmVudHMuZm9yRWFjaCgodmFsdWU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsIGluZGV4OiBudW1iZXIsIGFycmF5OiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuZW1pdChbdGhpcy5pZCwgbW92ZURpc10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlRGlzID0gTWF0aC5hYnModGhpcy5lbmRQb3MueSAtIHRoaXMuc3RhcnRQb3MueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb25pdG9yRGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW92ZURpcyA9IFwiLCBtb3ZlRGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW92ZURpcyA+PSB0aGlzLnRyaWdnZXJEaXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGFydFBvcyA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICB0aGlzLmVuZFBvcyA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICB0aGlzLmxhc3RQb3MgPSBjYy5WZWMyLlpFUk87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldENoZWNrRGlyKGRpcjogQ2hlY2tEaXIpIHtcclxuICAgICAgICB0aGlzLmNoZWNrRGlyID0gZGlyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJc0NhbkNoZWNrKGlzQ2hlY2s6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmlzQ2FuQ2hlY2sgPSBpc0NoZWNrO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/TimeManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd752w4R6BGk72KxhCY5Lx/', 'TimeManager');
// homePage/script/manager/TimeManager.ts

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
var PlayerData_1 = require("../common/PlayerData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TimeManager = /** @class */ (function (_super) {
    __extends(TimeManager, _super);
    function TimeManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**游戏运行的时长 */
        _this._curTime = 0;
        _this.interval = 1;
        _this.timer = 0;
        _this.timeCalls = [];
        _this.getHeartbeatInterval = 1;
        return _this;
    }
    TimeManager_1 = TimeManager;
    Object.defineProperty(TimeManager.prototype, "curTime", {
        get: function () {
            return this._curTime;
        },
        enumerable: false,
        configurable: true
    });
    TimeManager.prototype.onLoad = function () {
        TimeManager_1.ins = this;
        this.timer = 0;
        this._curTime = 0;
        this.timeCalls = [];
    };
    TimeManager.prototype.update = function (dt) {
        this.timer += dt;
        if (this.timer >= this.interval) {
            this.timer = 0;
            this.checkTimeCall();
        }
        this._curTime += dt * 1000;
        PlayerData_1.PlayerData.ins.todayOnlineDuration += dt * 1000;
        PlayerData_1.PlayerData.ins.lastOnLineDur += dt * 1000;
    };
    TimeManager.prototype.checkTimeCall = function () {
        var _this = this;
        this.timeCalls.forEach(function (call) {
            if (call && call.callFunc) {
                if (_this.curTime >= call.targetTime) {
                    _this.offCdCall(call);
                    if (call.isTriggerOnce) {
                        call.callFunc(0);
                    }
                }
                !call.isTriggerOnce && call.callFunc((call.targetTime - _this.curTime) / 1000);
            }
        });
    };
    /**
     * 添加一个倒计时回调，每秒触发,返回剩余时间
     * @param call 回调
     * @param targetTime 回调移除时间,毫秒
     * @param caller
     * @param isTriggerOnce 是否只触发一次
     * @returns
     */
    TimeManager.prototype.onCdCall = function (call, targetTime, caller, isCheckSame, isTriggerOnce) {
        if (isCheckSame === void 0) { isCheckSame = true; }
        if (isTriggerOnce === void 0) { isTriggerOnce = false; }
        if (isCheckSame && this.timeCalls.find(function (data) { return data.caller == caller; }) != undefined) {
            console.warn("TimeManager 重复注册");
            return;
        }
        this.timeCalls.push({ callFunc: call, targetTime: targetTime, caller: caller, isTriggerOnce: isTriggerOnce });
    };
    /**移除倒计时回调 */
    TimeManager.prototype.offCdCall = function (call) {
        var index = this.timeCalls.findIndex(function (v) { return v.callFunc.name == call.callFunc.name && v.targetTime == call.targetTime && v.caller == call.caller; });
        if (index >= 0) {
            this.timeCalls.splice(index, 1);
        }
    };
    TimeManager.prototype.offAll = function (caller) {
        this.timeCalls = this.timeCalls.filter(function (v) { return v.caller != caller; });
    };
    var TimeManager_1;
    TimeManager.ins = null;
    TimeManager = TimeManager_1 = __decorate([
        ccclass
    ], TimeManager);
    return TimeManager;
}(cc.Component));
exports.default = TimeManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcVGltZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBRTVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBMEVDO1FBdEVHLGFBQWE7UUFDTCxjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBS3JCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixlQUFTLEdBQXNHLEVBQUUsQ0FBQztRQUNuSCwwQkFBb0IsR0FBVyxDQUFDLENBQUM7O0lBNkQ1QyxDQUFDO29CQTFFb0IsV0FBVztJQU01QixzQkFBVyxnQ0FBTzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQU9TLDRCQUFNLEdBQWhCO1FBQ0ksYUFBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRVMsNEJBQU0sR0FBaEIsVUFBaUIsRUFBVTtRQUN2QixJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUMzQix1QkFBVSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2hELHVCQUFVLENBQUMsR0FBRyxDQUFDLGFBQWEsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQzlDLENBQUM7SUFFTSxtQ0FBYSxHQUFwQjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3hCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3ZCLElBQUksS0FBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNqQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNyQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7d0JBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3BCO2lCQUNKO2dCQUNELENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDakY7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksOEJBQVEsR0FBZixVQUFnQixJQUE0QixFQUFFLFVBQWtCLEVBQUUsTUFBVyxFQUFFLFdBQTJCLEVBQUUsYUFBOEI7UUFBM0QsNEJBQUEsRUFBQSxrQkFBMkI7UUFBRSw4QkFBQSxFQUFBLHFCQUE4QjtRQUN0SSxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxFQUFyQixDQUFxQixDQUFDLElBQUksU0FBUyxFQUFFO1lBQ2hGLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNqQyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ2xILENBQUM7SUFFRCxhQUFhO0lBQ04sK0JBQVMsR0FBaEIsVUFBaUIsSUFBNkU7UUFDMUYsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFuRyxDQUFtRyxDQUFDLENBQUM7UUFDL0ksSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUVNLDRCQUFNLEdBQWIsVUFBYyxNQUFXO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxJQUFJLE1BQU0sRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7O0lBdkVhLGVBQUcsR0FBZ0IsSUFBSSxDQUFDO0lBRnJCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0EwRS9CO0lBQUQsa0JBQUM7Q0ExRUQsQUEwRUMsQ0ExRXdDLEVBQUUsQ0FBQyxTQUFTLEdBMEVwRDtrQkExRW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF5ZXJEYXRhIH0gZnJvbSBcIi4uL2NvbW1vbi9QbGF5ZXJEYXRhXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zOiBUaW1lTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgLyoq5ri45oiP6L+Q6KGM55qE5pe26ZW/ICovXHJcbiAgICBwcml2YXRlIF9jdXJUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGdldCBjdXJUaW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1clRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbnRlcnZhbDogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgdGltZXI6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRpbWVDYWxsczogeyBjYWxsRnVuYzogKCh0aW1lOiBudW1iZXIpID0+IHZvaWQpLCB0YXJnZXRUaW1lOiBudW1iZXIsIGNhbGxlcjogYW55LCBpc1RyaWdnZXJPbmNlOiBib29sZWFuIH1bXSA9IFtdO1xyXG4gICAgcHVibGljIGdldEhlYXJ0YmVhdEludGVydmFsOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgVGltZU1hbmFnZXIuaW5zID0gdGhpcztcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLl9jdXJUaW1lID0gMDtcclxuICAgICAgICB0aGlzLnRpbWVDYWxscyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPj0gdGhpcy5pbnRlcnZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1RpbWVDYWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2N1clRpbWUgKz0gZHQgKiAxMDAwO1xyXG4gICAgICAgIFBsYXllckRhdGEuaW5zLnRvZGF5T25saW5lRHVyYXRpb24gKz0gZHQgKiAxMDAwO1xyXG4gICAgICAgIFBsYXllckRhdGEuaW5zLmxhc3RPbkxpbmVEdXIgKz0gZHQgKiAxMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGVja1RpbWVDYWxsKCkge1xyXG4gICAgICAgIHRoaXMudGltZUNhbGxzLmZvckVhY2goKGNhbGwpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNhbGwgJiYgY2FsbC5jYWxsRnVuYykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VyVGltZSA+PSBjYWxsLnRhcmdldFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZkNkQ2FsbChjYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbC5pc1RyaWdnZXJPbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGwuY2FsbEZ1bmMoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIWNhbGwuaXNUcmlnZ2VyT25jZSAmJiBjYWxsLmNhbGxGdW5jKChjYWxsLnRhcmdldFRpbWUgLSB0aGlzLmN1clRpbWUpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOS4gOS4quWAkuiuoeaXtuWbnuiwg++8jOavj+enkuinpuWPkSzov5Tlm57liankvZnml7bpl7RcclxuICAgICAqIEBwYXJhbSBjYWxsIOWbnuiwg1xyXG4gICAgICogQHBhcmFtIHRhcmdldFRpbWUg5Zue6LCD56e76Zmk5pe26Ze0LOavq+enklxyXG4gICAgICogQHBhcmFtIGNhbGxlciBcclxuICAgICAqIEBwYXJhbSBpc1RyaWdnZXJPbmNlIOaYr+WQpuWPquinpuWPkeS4gOasoVxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkNkQ2FsbChjYWxsOiAodGltZTogbnVtYmVyKSA9PiB2b2lkLCB0YXJnZXRUaW1lOiBudW1iZXIsIGNhbGxlcjogYW55LCBpc0NoZWNrU2FtZTogYm9vbGVhbiA9IHRydWUsIGlzVHJpZ2dlck9uY2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChpc0NoZWNrU2FtZSAmJiB0aGlzLnRpbWVDYWxscy5maW5kKGRhdGEgPT4gZGF0YS5jYWxsZXIgPT0gY2FsbGVyKSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVGltZU1hbmFnZXIg6YeN5aSN5rOo5YaMXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZUNhbGxzLnB1c2goeyBjYWxsRnVuYzogY2FsbCwgdGFyZ2V0VGltZTogdGFyZ2V0VGltZSwgY2FsbGVyOiBjYWxsZXIsIGlzVHJpZ2dlck9uY2U6IGlzVHJpZ2dlck9uY2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq56e76Zmk5YCS6K6h5pe25Zue6LCDICovXHJcbiAgICBwdWJsaWMgb2ZmQ2RDYWxsKGNhbGw6IHsgY2FsbEZ1bmM6ICgodGltZTogbnVtYmVyKSA9PiB2b2lkKSwgdGFyZ2V0VGltZTogbnVtYmVyLCBjYWxsZXI6IGFueSB9KSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50aW1lQ2FsbHMuZmluZEluZGV4KHYgPT4gdi5jYWxsRnVuYy5uYW1lID09IGNhbGwuY2FsbEZ1bmMubmFtZSAmJiB2LnRhcmdldFRpbWUgPT0gY2FsbC50YXJnZXRUaW1lICYmIHYuY2FsbGVyID09IGNhbGwuY2FsbGVyKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVDYWxscy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb2ZmQWxsKGNhbGxlcjogYW55KSB7XHJcbiAgICAgICAgdGhpcy50aW1lQ2FsbHMgPSB0aGlzLnRpbWVDYWxscy5maWx0ZXIodiA9PiB2LmNhbGxlciAhPSBjYWxsZXIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/scrollview/RecycleScrollV.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a5467m4IfJDTIAFpS74tiVK', 'RecycleScrollV');
// homePage/script/scrollview/RecycleScrollV.ts

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
/**
 * 纵向滚动
 */
var RecycleScrollV = /** @class */ (function (_super) {
    __extends(RecycleScrollV, _super);
    function RecycleScrollV() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** item预制 */
        _this.itemPrefab = null;
        /** item间隔 */
        _this.spacing = null;
        /** item数量 */
        _this._numItems = 0;
        // public get numItems() {
        //     return this._numItems;
        // }
        // public set numItems(value: number) {
        //     this._numItems = value;
        //     this._hideAllItems();
        //     this.scheduleOnce(() => {
        //         this._initialize();
        //         this._updateContentHeight();
        //     });
        //     this.updateAllItems();
        // }
        /** 视图内显示列数 */
        _this._viewCol = 0;
        /** 视图内显示行数 */
        _this._viewRow = 0;
        /** 视图窗宽 */
        _this._viewW = 0;
        /** 视图窗高 */
        _this._viewH = 0;
        /** item格子宽 */
        _this._itemW = 0;
        /** item格子高 */
        _this._itemH = 0;
        /** content上一次y坐标 */
        _this._lastPosY = 0;
        /** 是否已初始化 */
        _this._isInit = false;
        /** item的index */
        _this._itemsUUIDToIndex = {};
        /** item列表 */
        _this.itemList = [];
        /** item父节点 */
        _this.content = null;
        return _this;
    }
    /** item刷新回调 */
    RecycleScrollV.prototype.onItemRender = function (index, node) { };
    /** item点击回调 */
    RecycleScrollV.prototype.onItemClicked = function (index, node) { };
    RecycleScrollV.prototype.init = function (dataLength, finishCb, onItemRender, onItemClicked) {
        this.onItemRender = onItemRender;
        this.onItemClicked = onItemClicked;
        this.refresh(dataLength, finishCb);
    };
    RecycleScrollV.prototype.refresh = function (dataLength, cb) {
        var _this = this;
        if (cb === void 0) { cb = null; }
        this._numItems = dataLength;
        this._hideAllItems();
        this.updateAllItems();
        this._initialize(function () {
            _this._updateContentHeight();
            cb && cb();
        });
    };
    /**将指定下标的item滚动到屏幕中间 */
    RecycleScrollV.prototype.rollItemByIndex = function (index, time, yOffset) {
        var _this = this;
        if (time === void 0) { time = 0.1; }
        if (yOffset === void 0) { yOffset = 0; }
        if (!this._isInit) {
            this.scheduleOnce(function () {
                _this.rollItemByIndex(index, time, yOffset);
            }, 0);
            return;
        }
        var targetY = Math.abs(index * this._itemH + this._itemH / 2) - this._itemH / 2 - (this._viewH - this._itemH) / 2 + yOffset;
        var scroll = this.node.getComponent(cc.ScrollView);
        scroll.scrollToOffset(cc.v2(0, targetY), time);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(null);
            }, time * 1000);
        });
    };
    /** 刷新所有item */
    RecycleScrollV.prototype.updateAllItems = function () {
        var _this = this;
        this.itemList.forEach(function (item, index) {
            _this._updateItem(_this._itemsUUIDToIndex[item.uuid], item);
        });
    };
    RecycleScrollV.prototype._hideAllItems = function () {
        this.itemList.forEach(function (item, index) {
            item.active = false;
        });
    };
    /** 获取content */
    RecycleScrollV.prototype._getContent = function () {
        return this.node.getComponent(cc.ScrollView).content;
    };
    /** 初始化 */
    RecycleScrollV.prototype._initialize = function (initCb) {
        var _this = this;
        if (this._isInit)
            return;
        var scroll = this.node.getComponent(cc.ScrollView);
        scroll.enabled = false;
        this._isInit = true;
        var content = this._getContent();
        this.content = content;
        this._viewW = content.parent.width;
        this._viewH = content.parent.height;
        var itemData = this.itemPrefab.data;
        this._itemW = itemData.width + this.spacing.x;
        this._itemH = itemData.height + this.spacing.y;
        this._lastPosY = content.y;
        this._viewRow = Math.ceil(this._viewH / this._itemH) + 1;
        this._viewCol = Math.max(1, Math.floor(this._viewW / this._itemW));
        var surplusW = this._viewW - (this._viewCol * this._itemW);
        var startPos = cc.v2((-this._viewW >> 1) + (this._itemW >> 1) + (surplusW >> 1), -this._itemH >> 1);
        var cNum = this._viewRow * this._viewCol;
        cc.log("\u5B9E\u4F8B\u5316\u6570\u91CF:" + cNum);
        var createNum = 0;
        var createFunc = function (index) {
            if (!cc.isValid(content))
                return; //异步创建，创建完回来父节点有可能已经被销毁 
            var item = cc.instantiate(_this.itemPrefab);
            item.parent = content;
            var x = (index % _this._viewCol) * _this._itemW;
            var y = -Math.floor(index / _this._viewCol) * _this._itemH + (_this.spacing.y >> 1);
            var pos = startPos.add(cc.v2(x, y));
            item.setPosition(pos);
            _this.onItemClicked && item.on(cc.Node.EventType.TOUCH_END, function (e) {
                _this.onItemClicked(_this._itemsUUIDToIndex[item.uuid], item);
            }, _this);
            _this.itemList.push(item);
            _this._updateItem(index, item);
            _this._itemsUUIDToIndex[item.uuid] = index;
            createNum++;
            if (createNum == cNum) {
                scroll.enabled = true;
                initCb && initCb();
            }
        };
        /** 分帧创建item */
        frameLoad(cNum, createFunc, 8);
    };
    /** 更新centent高度 */
    RecycleScrollV.prototype._updateContentHeight = function () {
        var content = this._getContent();
        var col = Math.max(1, Math.floor(this._viewW / this._itemW));
        var row = Math.ceil(this._numItems / col);
        content.height = row * (this.itemPrefab.data.height + this.spacing.y) - (this.spacing.y);
    };
    /** 获取item在view坐标系的对标 */
    RecycleScrollV.prototype._getPosInView = function (item) {
        var content = this._getContent();
        var view = content.parent;
        var wpos = content.convertToWorldSpaceAR(item.position);
        var lpos = view.convertToNodeSpaceAR(wpos);
        return lpos;
    };
    /** 更新item */
    RecycleScrollV.prototype._updateItem = function (index, item) {
        var isShow = index >= 0 && index < this._numItems;
        item.active = isShow;
        if (isShow) {
            this.onItemRender(index, item);
        }
    };
    RecycleScrollV.prototype.update = function (dt) {
        var content = this._getContent();
        var currY = content.y;
        var dtY = currY - this._lastPosY;
        this._lastPosY = currY;
        if (dtY == 0)
            return;
        var isDown = dtY < 0;
        var itemsLen = this.itemList.length;
        for (var i = 0; i < itemsLen; ++i) {
            var item = this.itemList[i];
            var posInView = this._getPosInView(item);
            var viewHalfH = this._viewH >> 1;
            var itemHalfH = this._itemH >> 1;
            var lastIndex = this._itemsUUIDToIndex[item.uuid];
            var currIndex = lastIndex;
            if (!isDown) {
                if (posInView.y >= viewHalfH + itemHalfH) {
                    item.y -= (this._viewRow * this._itemH);
                    currIndex = lastIndex + itemsLen;
                }
            }
            else {
                if (posInView.y <= -(viewHalfH + itemHalfH)) {
                    item.y += (this._viewRow * this._itemH);
                    currIndex = lastIndex - itemsLen;
                }
            }
            if (currIndex != lastIndex) {
                this._updateItem(currIndex, item);
            }
            this._itemsUUIDToIndex[item.uuid] = currIndex;
        }
    };
    __decorate([
        property(cc.Prefab)
    ], RecycleScrollV.prototype, "itemPrefab", void 0);
    __decorate([
        property(cc.Vec2)
    ], RecycleScrollV.prototype, "spacing", void 0);
    RecycleScrollV = __decorate([
        ccclass
    ], RecycleScrollV);
    return RecycleScrollV;
}(cc.Component));
exports.default = RecycleScrollV;
/** 分帧执行 */
function frameLoad(loopTimes, func, frameTime, __index) {
    if (frameTime === void 0) { frameTime = 16; }
    if (__index === void 0) { __index = 0; }
    var loop = loopTimes;
    var start = new Date().getTime();
    var end = 0;
    var dt = 0;
    for (var i = 0; i < loop; ++i) {
        if (__index >= loop) {
            break;
        }
        try {
            func && func(__index);
        }
        catch (e) {
            cc.error(e);
        }
        __index++;
        end = new Date().getTime();
        dt = end - start;
        if (dt > frameTime) {
            setTimeout(function () {
                frameLoad(loop, func, frameTime, __index);
            }, 10);
            break;
        }
    }
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcc2Nyb2xsdmlld1xcUmVjeWNsZVNjcm9sbFYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7O0dBRUc7QUFFSDtJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQXVOQztRQXRORyxhQUFhO1FBRWIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsYUFBYTtRQUViLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBYTtRQUNMLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDOUIsMEJBQTBCO1FBQzFCLDZCQUE2QjtRQUM3QixJQUFJO1FBQ0osdUNBQXVDO1FBQ3ZDLDhCQUE4QjtRQUM5Qiw0QkFBNEI7UUFDNUIsZ0NBQWdDO1FBQ2hDLDhCQUE4QjtRQUM5Qix1Q0FBdUM7UUFDdkMsVUFBVTtRQUNWLDZCQUE2QjtRQUM3QixJQUFJO1FBRUosY0FBYztRQUNOLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDN0IsY0FBYztRQUNOLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDN0IsV0FBVztRQUNILFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDM0IsV0FBVztRQUNILFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDM0IsY0FBYztRQUNOLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDM0IsY0FBYztRQUNOLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDM0Isb0JBQW9CO1FBQ1osZUFBUyxHQUFXLENBQUMsQ0FBQztRQUM5QixhQUFhO1FBQ0wsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUNqQyxpQkFBaUI7UUFDVCx1QkFBaUIsR0FBK0IsRUFBRSxDQUFDO1FBRTNELGFBQWE7UUFDTixjQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ2hDLGNBQWM7UUFDUCxhQUFP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LElBQUksSUFBSSxFQUFFO1lBQ2pCLE1BQU07U0FDVDtRQUNELElBQUk7WUFDQSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3pCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNWLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNCLEVBQUUsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLElBQUksRUFBRSxHQUFHLFNBQVMsRUFBRTtZQUNoQixVQUFVLENBQUM7Z0JBQ1AsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNQLE1BQU07U0FDVDtLQUNKO0FBQ0wsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vKiogXHJcbiAqIOe6teWQkea7muWKqFxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjeWNsZVNjcm9sbFYgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLyoqIGl0ZW3pooTliLYgKi9cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBpdGVtUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIC8qKiBpdGVt6Ze06ZqUICovXHJcbiAgICBAcHJvcGVydHkoY2MuVmVjMilcclxuICAgIHNwYWNpbmc6IGNjLlZlYzIgPSBudWxsO1xyXG5cclxuICAgIC8qKiBpdGVt5pWw6YePICovXHJcbiAgICBwcml2YXRlIF9udW1JdGVtczogbnVtYmVyID0gMDtcclxuICAgIC8vIHB1YmxpYyBnZXQgbnVtSXRlbXMoKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuX251bUl0ZW1zO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gcHVibGljIHNldCBudW1JdGVtcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgdGhpcy5fbnVtSXRlbXMgPSB2YWx1ZTtcclxuICAgIC8vICAgICB0aGlzLl9oaWRlQWxsSXRlbXMoKTtcclxuICAgIC8vICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuX2luaXRpYWxpemUoKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5fdXBkYXRlQ29udGVudEhlaWdodCgpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgIHRoaXMudXBkYXRlQWxsSXRlbXMoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvKiog6KeG5Zu+5YaF5pi+56S65YiX5pWwICovXHJcbiAgICBwcml2YXRlIF92aWV3Q29sOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIOinhuWbvuWGheaYvuekuuihjOaVsCAqL1xyXG4gICAgcHJpdmF0ZSBfdmlld1JvdzogbnVtYmVyID0gMDtcclxuICAgIC8qKiDop4blm77nqpflrr0gKi9cclxuICAgIHByaXZhdGUgX3ZpZXdXOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIOinhuWbvueql+mrmCAqL1xyXG4gICAgcHJpdmF0ZSBfdmlld0g6IG51bWJlciA9IDA7XHJcbiAgICAvKiogaXRlbeagvOWtkOWuvSAqL1xyXG4gICAgcHJpdmF0ZSBfaXRlbVc6IG51bWJlciA9IDA7XHJcbiAgICAvKiogaXRlbeagvOWtkOmrmCAqL1xyXG4gICAgcHJpdmF0ZSBfaXRlbUg6IG51bWJlciA9IDA7XHJcbiAgICAvKiogY29udGVudOS4iuS4gOasoXnlnZDmoIcgKi9cclxuICAgIHByaXZhdGUgX2xhc3RQb3NZOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIOaYr+WQpuW3suWIneWni+WMliAqL1xyXG4gICAgcHJpdmF0ZSBfaXNJbml0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKiogaXRlbeeahGluZGV4ICovXHJcbiAgICBwcml2YXRlIF9pdGVtc1VVSURUb0luZGV4OiB7IFt1dWlkOiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG5cclxuICAgIC8qKiBpdGVt5YiX6KGoICovXHJcbiAgICBwdWJsaWMgaXRlbUxpc3Q6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgLyoqIGl0ZW3niLboioLngrkgKi9cclxuICAgIHB1YmxpYyBjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvKiogaXRlbeWIt+aWsOWbnuiwgyAqL1xyXG4gICAgcHVibGljIG9uSXRlbVJlbmRlcihpbmRleDogbnVtYmVyLCBub2RlOiBjYy5Ob2RlKSB7IH1cclxuICAgIC8qKiBpdGVt54K55Ye75Zue6LCDICovXHJcbiAgICBwdWJsaWMgb25JdGVtQ2xpY2tlZChpbmRleDogbnVtYmVyLCBub2RlOiBjYy5Ob2RlKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdChkYXRhTGVuZ3RoOiBudW1iZXIsIGZpbmlzaENiPzogKCkgPT4gdm9pZCwgb25JdGVtUmVuZGVyPzogKGluZGV4OiBudW1iZXIsIG5vZGU6IGNjLk5vZGUpID0+IHZvaWQsIG9uSXRlbUNsaWNrZWQ/OiAoaW5kZXg6IG51bWJlciwgbm9kZTogY2MuTm9kZSkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMub25JdGVtUmVuZGVyID0gb25JdGVtUmVuZGVyO1xyXG4gICAgICAgIHRoaXMub25JdGVtQ2xpY2tlZCA9IG9uSXRlbUNsaWNrZWQ7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoKGRhdGFMZW5ndGgsIGZpbmlzaENiKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoKGRhdGFMZW5ndGg6IG51bWJlciwgY2I6ICgpID0+IHZvaWQgPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5fbnVtSXRlbXMgPSBkYXRhTGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuX2hpZGVBbGxJdGVtcygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQWxsSXRlbXMoKTtcclxuICAgICAgICB0aGlzLl9pbml0aWFsaXplKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ29udGVudEhlaWdodCgpO1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5bCG5oyH5a6a5LiL5qCH55qEaXRlbea7muWKqOWIsOWxj+W5leS4remXtCAqL1xyXG4gICAgcHVibGljIHJvbGxJdGVtQnlJbmRleChpbmRleDogbnVtYmVyLCB0aW1lOiBudW1iZXIgPSAwLjEsIHlPZmZzZXQ6IG51bWJlciA9IDApIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzSW5pdCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGxJdGVtQnlJbmRleChpbmRleCwgdGltZSwgeU9mZnNldCk7XHJcbiAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRhcmdldFkgPSBNYXRoLmFicyhpbmRleCAqIHRoaXMuX2l0ZW1IICsgdGhpcy5faXRlbUggLyAyKSAtIHRoaXMuX2l0ZW1IIC8gMiAtICh0aGlzLl92aWV3SCAtIHRoaXMuX2l0ZW1IKSAvIDIgKyB5T2Zmc2V0O1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XHJcbiAgICAgICAgc2Nyb2xsLnNjcm9sbFRvT2Zmc2V0KGNjLnYyKDAsIHRhcmdldFkpLCB0aW1lKVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgfSwgdGltZSAqIDEwMDApO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOWIt+aWsOaJgOaciWl0ZW0gKi9cclxuICAgIHB1YmxpYyB1cGRhdGVBbGxJdGVtcygpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmZvckVhY2goKGl0ZW06IGNjLk5vZGUsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlSXRlbSh0aGlzLl9pdGVtc1VVSURUb0luZGV4W2l0ZW0udXVpZF0sIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hpZGVBbGxJdGVtcygpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmZvckVhY2goKGl0ZW06IGNjLk5vZGUsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiog6I635Y+WY29udGVudCAqL1xyXG4gICAgcHJpdmF0ZSBfZ2V0Q29udGVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5jb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiDliJ3lp4vljJYgKi9cclxuICAgIHByaXZhdGUgX2luaXRpYWxpemUoaW5pdENiOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzSW5pdCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XHJcbiAgICAgICAgc2Nyb2xsLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9pc0luaXQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLl9nZXRDb250ZW50KCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLl92aWV3VyA9IGNvbnRlbnQucGFyZW50LndpZHRoO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdIID0gY29udGVudC5wYXJlbnQuaGVpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtRGF0YSA9IHRoaXMuaXRlbVByZWZhYi5kYXRhO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1XID0gaXRlbURhdGEud2lkdGggKyB0aGlzLnNwYWNpbmcueDtcclxuICAgICAgICB0aGlzLl9pdGVtSCA9IGl0ZW1EYXRhLmhlaWdodCArIHRoaXMuc3BhY2luZy55O1xyXG5cclxuICAgICAgICB0aGlzLl9sYXN0UG9zWSA9IGNvbnRlbnQueTtcclxuICAgICAgICB0aGlzLl92aWV3Um93ID0gTWF0aC5jZWlsKHRoaXMuX3ZpZXdIIC8gdGhpcy5faXRlbUgpICsgMTtcclxuICAgICAgICB0aGlzLl92aWV3Q29sID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0aGlzLl92aWV3VyAvIHRoaXMuX2l0ZW1XKSk7XHJcbiAgICAgICAgY29uc3Qgc3VycGx1c1cgPSB0aGlzLl92aWV3VyAtICh0aGlzLl92aWV3Q29sICogdGhpcy5faXRlbVcpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0UG9zID0gY2MudjIoKC10aGlzLl92aWV3VyA+PiAxKSArICh0aGlzLl9pdGVtVyA+PiAxKSArIChzdXJwbHVzVyA+PiAxKSwgLXRoaXMuX2l0ZW1IID4+IDEpO1xyXG5cclxuICAgICAgICBjb25zdCBjTnVtID0gdGhpcy5fdmlld1JvdyAqIHRoaXMuX3ZpZXdDb2w7XHJcbiAgICAgICAgY2MubG9nKGDlrp7kvovljJbmlbDph486JHtjTnVtfWApO1xyXG5cclxuICAgICAgICBsZXQgY3JlYXRlTnVtID0gMDtcclxuICAgICAgICBjb25zdCBjcmVhdGVGdW5jID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKGNvbnRlbnQpKSByZXR1cm47IC8v5byC5q2l5Yib5bu677yM5Yib5bu65a6M5Zue5p2l54i26IqC54K55pyJ5Y+v6IO95bey57uP6KKr6ZSA5q+BIFxyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtUHJlZmFiKTtcclxuICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSBjb250ZW50O1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gKGluZGV4ICUgdGhpcy5fdmlld0NvbCkgKiB0aGlzLl9pdGVtVztcclxuICAgICAgICAgICAgY29uc3QgeSA9IC1NYXRoLmZsb29yKGluZGV4IC8gdGhpcy5fdmlld0NvbCkgKiB0aGlzLl9pdGVtSCArICh0aGlzLnNwYWNpbmcueSA+PiAxKTtcclxuICAgICAgICAgICAgY29uc3QgcG9zID0gc3RhcnRQb3MuYWRkKGNjLnYyKHgsIHkpKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRQb3NpdGlvbihwb3MpO1xyXG4gICAgICAgICAgICB0aGlzLm9uSXRlbUNsaWNrZWQgJiYgaXRlbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uSXRlbUNsaWNrZWQodGhpcy5faXRlbXNVVUlEVG9JbmRleFtpdGVtLnV1aWRdLCBpdGVtKTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucHVzaChpdGVtKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUl0ZW0oaW5kZXgsIGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5faXRlbXNVVUlEVG9JbmRleFtpdGVtLnV1aWRdID0gaW5kZXg7XHJcblxyXG4gICAgICAgICAgICBjcmVhdGVOdW0rKztcclxuICAgICAgICAgICAgaWYgKGNyZWF0ZU51bSA9PSBjTnVtKSB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGwuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpbml0Q2IgJiYgaW5pdENiKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqIOWIhuW4p+WIm+W7uml0ZW0gKi9cclxuICAgICAgICBmcmFtZUxvYWQoY051bSwgY3JlYXRlRnVuYywgOCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOabtOaWsGNlbnRlbnTpq5jluqYgKi9cclxuICAgIHByaXZhdGUgX3VwZGF0ZUNvbnRlbnRIZWlnaHQoKSB7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuX2dldENvbnRlbnQoKTtcclxuICAgICAgICBjb25zdCBjb2wgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRoaXMuX3ZpZXdXIC8gdGhpcy5faXRlbVcpKTtcclxuICAgICAgICBjb25zdCByb3cgPSBNYXRoLmNlaWwodGhpcy5fbnVtSXRlbXMgLyBjb2wpO1xyXG4gICAgICAgIGNvbnRlbnQuaGVpZ2h0ID0gcm93ICogKHRoaXMuaXRlbVByZWZhYi5kYXRhLmhlaWdodCArIHRoaXMuc3BhY2luZy55KSAtICh0aGlzLnNwYWNpbmcueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOiOt+WPlml0ZW3lnKh2aWV35Z2Q5qCH57O755qE5a+55qCHICovXHJcbiAgICBwcml2YXRlIF9nZXRQb3NJblZpZXcoaXRlbTogY2MuTm9kZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLl9nZXRDb250ZW50KCk7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IGNvbnRlbnQucGFyZW50O1xyXG4gICAgICAgIGNvbnN0IHdwb3MgPSBjb250ZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihpdGVtLnBvc2l0aW9uKTtcclxuICAgICAgICBjb25zdCBscG9zID0gdmlldy5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3cG9zKTtcclxuICAgICAgICByZXR1cm4gbHBvcztcclxuICAgIH1cclxuXHJcbiAgICAvKiog5pu05pawaXRlbSAqL1xyXG4gICAgcHJpdmF0ZSBfdXBkYXRlSXRlbShpbmRleDogbnVtYmVyLCBpdGVtOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgY29uc3QgaXNTaG93ID0gaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuX251bUl0ZW1zO1xyXG4gICAgICAgIGl0ZW0uYWN0aXZlID0gaXNTaG93O1xyXG4gICAgICAgIGlmIChpc1Nob3cpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkl0ZW1SZW5kZXIoaW5kZXgsIGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgY29udGVudCA9IHRoaXMuX2dldENvbnRlbnQoKTtcclxuICAgICAgICBjb25zdCBjdXJyWSA9IGNvbnRlbnQueTtcclxuICAgICAgICBjb25zdCBkdFkgPSBjdXJyWSAtIHRoaXMuX2xhc3RQb3NZO1xyXG4gICAgICAgIHRoaXMuX2xhc3RQb3NZID0gY3Vyclk7XHJcbiAgICAgICAgaWYgKGR0WSA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgaXNEb3duID0gZHRZIDwgMDtcclxuICAgICAgICBjb25zdCBpdGVtc0xlbiA9IHRoaXMuaXRlbUxpc3QubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXNMZW47ICsraSkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtTGlzdFtpXTtcclxuICAgICAgICAgICAgY29uc3QgcG9zSW5WaWV3ID0gdGhpcy5fZ2V0UG9zSW5WaWV3KGl0ZW0pO1xyXG4gICAgICAgICAgICBjb25zdCB2aWV3SGFsZkggPSB0aGlzLl92aWV3SCA+PiAxO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtSGFsZkggPSB0aGlzLl9pdGVtSCA+PiAxO1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSB0aGlzLl9pdGVtc1VVSURUb0luZGV4W2l0ZW0udXVpZF07XHJcbiAgICAgICAgICAgIGxldCBjdXJySW5kZXggPSBsYXN0SW5kZXg7XHJcbiAgICAgICAgICAgIGlmICghaXNEb3duKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zSW5WaWV3LnkgPj0gdmlld0hhbGZIICsgaXRlbUhhbGZIKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS55IC09ICh0aGlzLl92aWV3Um93ICogdGhpcy5faXRlbUgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJJbmRleCA9IGxhc3RJbmRleCArIGl0ZW1zTGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvc0luVmlldy55IDw9IC0odmlld0hhbGZIICsgaXRlbUhhbGZIKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ueSArPSAodGhpcy5fdmlld1JvdyAqIHRoaXMuX2l0ZW1IKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJySW5kZXggPSBsYXN0SW5kZXggLSBpdGVtc0xlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY3VyckluZGV4ICE9IGxhc3RJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlSXRlbShjdXJySW5kZXgsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zVVVJRFRvSW5kZXhbaXRlbS51dWlkXSA9IGN1cnJJbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiDliIbluKfmiafooYwgKi9cclxuZnVuY3Rpb24gZnJhbWVMb2FkKGxvb3BUaW1lczogbnVtYmVyLCBmdW5jOiBGdW5jdGlvbiwgZnJhbWVUaW1lOiBudW1iZXIgPSAxNiwgX19pbmRleDogbnVtYmVyID0gMCkge1xyXG4gICAgbGV0IGxvb3AgPSBsb29wVGltZXM7XHJcbiAgICBsZXQgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIGxldCBlbmQgPSAwO1xyXG4gICAgbGV0IGR0ID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9vcDsgKytpKSB7XHJcbiAgICAgICAgaWYgKF9faW5kZXggPj0gbG9vcCkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZnVuYyAmJiBmdW5jKF9faW5kZXgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9faW5kZXgrKztcclxuICAgICAgICBlbmQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBkdCA9IGVuZCAtIHN0YXJ0O1xyXG4gICAgICAgIGlmIChkdCA+IGZyYW1lVGltZSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZyYW1lTG9hZChsb29wLCBmdW5jLCBmcmFtZVRpbWUsIF9faW5kZXgpO1xyXG4gICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/AbManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2202xCbMdB2KAjhwpJTlEk', 'AbManager');
// homePage/script/manager/AbManager.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbManager = void 0;
var TipManager_1 = require("./TipManager");
var AbManager = /** @class */ (function () {
    function AbManager() {
    }
    AbManager.getBundle = function (bundleName) {
        if (!bundleName) {
            return Promise.resolve(null);
        }
        var targetBundle = cc.assetManager.getBundle(bundleName);
        if (targetBundle) {
            return Promise.resolve(targetBundle);
        }
        if (this.bundleMap.has(bundleName)) {
            return this.bundleMap.get(bundleName);
        }
        var self = this;
        this.bundleMap.set(bundleName, new Promise(function (resolve, reject) {
            cc.assetManager.loadBundle(bundleName, function (error, bundle) {
                if (error) {
                    resolve(null);
                }
                else {
                    resolve(bundle);
                }
                self.bundleMap.delete(bundleName);
            });
        }));
        return this.bundleMap.get(bundleName);
    };
    /**
     * 加载子包
     * @param bundleList 子包名称列表
     * ## 请确保子包列表已按照优先级排序
     */
    AbManager.loadSubPackage = function (bundleList) {
        if (!bundleList || bundleList.length <= 0) {
            console.error("bundle list not exist or length less zero");
            return Promise.resolve(null);
        }
        this.loadSubIndex = 0;
        var self = this;
        return new Promise(function (resolve, reject) {
            self.circleLoadBundle(bundleList, resolve);
        });
    };
    AbManager.circleLoadBundle = function (bundleList, resolve) {
        var self = this;
        var bundleName = bundleList[self.loadSubIndex];
        this.getBundle(bundleName).then(function (bundle) {
            if (!bundle) {
                self.circleLoadBundle(bundleList, resolve);
            }
            else {
                console.log("分包 " + bundleName + " 加载完成");
                self.loadSubIndex++;
                if (self.loadSubIndex < bundleList.length) {
                    self.circleLoadBundle(bundleList, resolve);
                    return;
                }
                resolve(true);
            }
        });
    };
    /**
     * 添加重试和超时的资源加载方法
     * @param retryTimes 重试次数
     * @param loadOutTime 超时时长（毫秒）
     * @param tipOutTime 提示超时时长（毫秒）
     * @returns 加载成功进resolve，返回资源，失败进reject，返回null
     */
    AbManager.loadBundleResWitchTimeout = function (bundleName, url, assetsType, isAddRef, retryTimes, loadOutTime, tipOutTime) {
        if (isAddRef === void 0) { isAddRef = true; }
        if (retryTimes === void 0) { retryTimes = 3; }
        if (loadOutTime === void 0) { loadOutTime = 10000; }
        if (tipOutTime === void 0) { tipOutTime = 2000; }
        return __awaiter(this, void 0, Promise, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBundle(bundleName)];
                    case 1:
                        result = _a.sent();
                        if (!result) {
                            console.error("can not get target bundle");
                            return [2 /*return*/, Promise.reject(null)];
                        }
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var tipTimeOut = null;
                                if (tipOutTime > 0) {
                                    tipTimeOut = setTimeout(function () {
                                        TipManager_1.default.ins.showTip("资源加载中，请稍后");
                                    }, tipOutTime);
                                }
                                var isTimeOut = false;
                                var loadTimeOut = setTimeout(function () {
                                    isTimeOut = true;
                                    console.warn("loadTimeOut", url);
                                    clearTimeout(tipTimeOut);
                                    reject(null);
                                }, loadOutTime);
                                var retry = 0;
                                var retryCall = function (asset) {
                                    if (asset) {
                                        // console.warn("加载成功", url)
                                        clearTimeout(loadTimeOut);
                                        clearTimeout(tipTimeOut);
                                        resolve(asset);
                                    }
                                    else {
                                        if (!isTimeOut) {
                                            retry++;
                                            if (retry >= retryTimes) {
                                                clearTimeout(loadTimeOut);
                                                clearTimeout(tipTimeOut);
                                                console.warn("加载失败", url);
                                                reject(null);
                                            }
                                            else {
                                                setTimeout(function () {
                                                    _this.loadBundleRes(bundleName, url, assetsType, isAddRef).then(retryCall);
                                                }, 200);
                                            }
                                        }
                                    }
                                };
                                _this.loadBundleRes(bundleName, url, assetsType, isAddRef).then(retryCall);
                            })];
                }
            });
        });
    };
    /**
     * 加载某一bundle路径下的单一资源
     * @param bundleName bundle名称
     * @param url bundle下的资源路径
     * @param assetType 资源类型
     * @param isAddRef 是否增加引用计数
     */
    AbManager.loadBundleRes = function (bundleName, url, assetType, isAddRef) {
        if (isAddRef === void 0) { isAddRef = true; }
        return __awaiter(this, void 0, Promise, function () {
            var bundle;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBundle(bundleName)];
                    case 1:
                        bundle = _a.sent();
                        if (!bundle) {
                            console.error("can not get target bundle");
                            return [2 /*return*/, Promise.resolve(null)];
                        }
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                bundle.load(url, assetType, function (error, asset) {
                                    if (error) {
                                        console.error("loadBundleRes 失败! bundleName : ", bundleName, " url : ", url, error);
                                        resolve(null);
                                    }
                                    else {
                                        if (isAddRef && _this.isAutoReleaseAsset) {
                                            asset.addRef();
                                            _this.resUuidMap.set(asset._uuid, asset);
                                        }
                                        resolve(asset);
                                    }
                                });
                            })];
                }
            });
        });
    };
    /**加载资源,增加单个资源最小加载间隔
     * interval:最小加载间隔 毫秒
     */
    AbManager.loadAssetsAddInterval = function (bundleName, url, assetsType, interval) {
        var _this = this;
        if (interval === void 0) { interval = 500; }
        return new Promise(function (resolve, reject) {
            var timer = Date.now();
            var loadPromise = _this.loadBundleRes(bundleName, url, assetsType);
            var delayPromise = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve(null);
                }, interval);
            });
            Promise.all([loadPromise, delayPromise]).then(function () {
                console.log("loadPreAddInterval 加载耗时 ", url, Date.now() - timer);
                resolve(null);
            });
        });
    };
    /**
     * 加载某一bundle路径下某一文件夹下的所有资源
     * @param bundleName bundle名称
     * @param url bundle下的资源路径
     * @param type 指定需要加载的资源类型
     */
    AbManager.loadBundleDir = function (bundleName, url, type) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBundle(bundleName)];
                    case 1:
                        result = _a.sent();
                        if (!result) {
                            console.error("can not get target bundle in loadBundleDir");
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                if (type) {
                                    result.loadDir(url, type, function (error, assets) {
                                        if (error) {
                                            console.error("loadBundleDir 失败! bundleName : ", bundleName, " url : ", url);
                                            resolve(null);
                                        }
                                        else {
                                            resolve(assets);
                                        }
                                    });
                                }
                                else {
                                    result.loadDir(url, function (error, assets) {
                                        if (error) {
                                            console.error("loadBundleDir 失败! bundleName : ", bundleName, " url : ", url);
                                            resolve(null);
                                        }
                                        else {
                                            resolve(assets);
                                        }
                                    });
                                }
                            })];
                }
            });
        });
    };
    /**
     * 预加载某一bundle路径下的单一资源
     * @param bundleName bundle名称
     * @param url bundle下的资源路径
     * @param type 指定需要加载的资源类型
     */
    AbManager.preloadBundleRes = function (bundleName, url, type) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBundle(bundleName)];
                    case 1:
                        result = _a.sent();
                        if (!result) {
                            console.error("can not get target bundle");
                            return [2 /*return*/, Promise.resolve(null)];
                        }
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                result.preload(url, type, function (error, items) {
                                    if (error) {
                                        console.error("preloadBundleRes 失败! bundleName : ", bundleName, " url : ", url, error);
                                        resolve(null);
                                    }
                                    else {
                                        resolve(items);
                                    }
                                });
                            })];
                }
            });
        });
    };
    /**
     * 预加载某一bundle路径下某一文件夹下的所有资源
     * @param bundleName bundle名称
     * @param url bundle下的资源路径
     * @param type 指定需要加载的资源类型
     */
    AbManager.preloadBundleDir = function (bundleName, url, type) {
        return __awaiter(this, void 0, Promise, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBundle(bundleName)];
                    case 1:
                        result = _a.sent();
                        if (!result) {
                            console.error("can not get target bundle in loadBundleDir");
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                if (type) {
                                    result.preloadDir(url, type, function (error, items) {
                                        if (error) {
                                            console.error("preloadBundleDir 失败! bundleName : ", bundleName, " url : ", url);
                                            resolve(null);
                                        }
                                        else {
                                            resolve(items);
                                        }
                                    });
                                }
                                else {
                                    result.preloadDir(url, function (error, items) {
                                        if (error) {
                                            console.error("preloadBundleDir 失败! bundleName : ", bundleName, " url : ", url);
                                            resolve(null);
                                        }
                                        else {
                                            resolve(items);
                                        }
                                    });
                                }
                            })];
                }
            });
        });
    };
    /**预加载资源数组 */
    AbManager.preloadAssets = function (preloadRes, assetsType) {
        var promiseArr = [];
        for (var i = 0; i < preloadRes.length; i++) {
            var bundleData = preloadRes[i];
            var preLoadPromise = this.preloadBundleRes(bundleData.bundle, bundleData.url, assetsType);
            promiseArr.push(preLoadPromise);
        }
        return Promise.all(promiseArr);
    };
    /**预加载资源,增加单个资源最小加载间隔
     * interval:最小加载间隔 毫秒
     */
    AbManager.preloadAssetsAddInterval = function (preloadRes, assetsType, interval) {
        var _this = this;
        if (interval === void 0) { interval = 500; }
        return new Promise(function (resolve, reject) {
            var index = 0;
            var timer = 0;
            var call = function () {
                timer = Date.now();
                var bundleData = preloadRes[index];
                var preLoadPromise = _this.preloadBundleRes(bundleData.bundleName, bundleData.url, assetsType);
                var delayPromise = new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        resolve(null);
                    }, interval);
                });
                Promise.all([preLoadPromise, delayPromise]).then(function () {
                    console.log("preloadPreAddInterval 加载耗时 ", bundleData.url, Date.now() - timer);
                    index++;
                    if (index < preloadRes.length) {
                        call();
                    }
                    else {
                        resolve(null);
                    }
                });
            };
            call();
        });
    };
    /**加载远程资源 */
    AbManager.loadRemote = function (remoteUrl, assetsType) {
        return new Promise(function (resolve, reject) {
            cc.assetManager.loadRemote(remoteUrl, assetsType, function (error, assets) {
                if (error) {
                    console.error("loadRemote 失败! remoteUrl : ", remoteUrl, error);
                    resolve(null);
                }
                else {
                    resolve(assets);
                }
            });
        });
    };
    AbManager.loadBundleResArray = function (resInfo) {
        var loadArr = [];
        for (var _i = 0, resInfo_1 = resInfo; _i < resInfo_1.length; _i++) {
            var data = resInfo_1[_i];
            loadArr.push(this.loadBundleRes(data.bundleName, data.url, data.assetsType, data.isAddRef));
        }
        return Promise.all(loadArr);
    };
    /**释放bundle内所有资源，移除bundle */
    AbManager.releaseBundle = function (bundleName) {
        return __awaiter(this, void 0, void 0, function () {
            var bundle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBundle(bundleName)];
                    case 1:
                        bundle = _a.sent();
                        if (!bundle) {
                            console.error("can not get target bundle in loadBundleDir");
                            return [2 /*return*/];
                        }
                        bundle.releaseAll();
                        cc.assetManager.removeBundle(bundle);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**回收资源时减少引用计数 */
    AbManager.decRef = function (uuid, decCount) {
        if (decCount === void 0) { decCount = 1; }
        if (!this.isAutoReleaseAsset)
            return;
        var asset = this.resUuidMap.get(uuid);
        if (!asset)
            return;
        for (var i = 0; i < decCount; i++) {
            asset.decRef();
        }
        if (asset.refCount <= 0) {
            this.resUuidMap.delete(uuid);
        }
    };
    /**是否自动释放资源 */
    AbManager.isAutoReleaseAsset = false;
    //记录加载过的资源
    AbManager.resUuidMap = new Map();
    AbManager.bundleMap = new Map();
    AbManager.loadSubIndex = 0;
    return AbManager;
}());
exports.AbManager = AbManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcQWJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUFzQztBQUV0QztJQUFBO0lBMlhBLENBQUM7SUFqWGlCLG1CQUFTLEdBQXZCLFVBQXdCLFVBQWtCO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDYixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7UUFFRCxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RCxJQUFJLFlBQVksRUFBRTtZQUNkLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4QztRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN6QztRQUVELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxPQUFPLENBQ3RDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDWixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBTTtnQkFDakQsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNqQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ25CO2dCQUNELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUNKLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUlEOzs7O09BSUc7SUFDVyx3QkFBYyxHQUE1QixVQUE2QixVQUF5QjtRQUNsRCxJQUFJLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztZQUMzRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsT0FBTyxJQUFJLE9BQU8sQ0FDZCxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ1osSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFYywwQkFBZ0IsR0FBL0IsVUFBZ0MsVUFBeUIsRUFBRSxPQUFPO1FBQzlELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLFVBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBOEI7WUFDM0QsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDVCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzlDO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxPQUFPLENBQUMsQ0FBQTtnQkFDekMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRTtvQkFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDM0MsT0FBTztpQkFDVjtnQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDakI7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDaUIsbUNBQXlCLEdBQTdDLFVBQThDLFVBQWtCLEVBQUUsR0FBVyxFQUFFLFVBQTJCLEVBQUUsUUFBd0IsRUFBRSxVQUFzQixFQUFFLFdBQTJCLEVBQUUsVUFBeUI7UUFBeEcseUJBQUEsRUFBQSxlQUF3QjtRQUFFLDJCQUFBLEVBQUEsY0FBc0I7UUFBRSw0QkFBQSxFQUFBLG1CQUEyQjtRQUFFLDJCQUFBLEVBQUEsaUJBQXlCO3VDQUFHLE9BQU87Ozs7OzRCQUNyTCxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFBOzt3QkFBakUsTUFBTSxHQUEyQixTQUFnQzt3QkFDckUsSUFBSSxDQUFDLE1BQU0sRUFBRTs0QkFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7NEJBQzNDLHNCQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUM7eUJBQy9CO3dCQUNELHNCQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0NBQy9CLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQztnQ0FDdEIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFO29DQUNoQixVQUFVLEdBQUcsVUFBVSxDQUFDO3dDQUNwQixvQkFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7b0NBQ3hDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztpQ0FDbEI7Z0NBQ0QsSUFBSSxTQUFTLEdBQVksS0FBSyxDQUFDO2dDQUMvQixJQUFJLFdBQVcsR0FBRyxVQUFVLENBQUM7b0NBQ3pCLFNBQVMsR0FBRyxJQUFJLENBQUM7b0NBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFBO29DQUNoQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7b0NBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FDakIsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dDQUVoQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Z0NBQ2QsSUFBSSxTQUFTLEdBQUcsVUFBQyxLQUFlO29DQUM1QixJQUFJLEtBQUssRUFBRTt3Q0FDUCw0QkFBNEI7d0NBQzVCLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQzt3Q0FDMUIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dDQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7cUNBQ2xCO3lDQUFNO3dDQUNILElBQUksQ0FBQyxTQUFTLEVBQUU7NENBQ1osS0FBSyxFQUFFLENBQUM7NENBQ1IsSUFBSSxLQUFLLElBQUksVUFBVSxFQUFFO2dEQUNyQixZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7Z0RBQzFCLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztnREFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUE7Z0RBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs2Q0FDaEI7aURBQU07Z0RBQ0gsVUFBVSxDQUFDO29EQUNQLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dEQUM5RSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7NkNBQ1g7eUNBQ0o7cUNBQ0o7Z0NBQ0wsQ0FBQyxDQUFBO2dDQUNELEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzRCQUM5RSxDQUFDLENBQUMsRUFBQTs7OztLQUNMO0lBRUQ7Ozs7OztPQU1HO0lBQ2lCLHVCQUFhLEdBQWpDLFVBQWtDLFVBQWtCLEVBQUUsR0FBVyxFQUFFLFNBQTBCLEVBQUUsUUFBd0I7UUFBeEIseUJBQUEsRUFBQSxlQUF3Qjt1Q0FBRyxPQUFPOzs7Ozs0QkFDeEYscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBQTs7d0JBQWpFLE1BQU0sR0FBMkIsU0FBZ0M7d0JBQ3JFLElBQUksQ0FBQyxNQUFNLEVBQUU7NEJBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDOzRCQUMzQyxzQkFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDO3lCQUNoQzt3QkFDRCxzQkFBTyxJQUFJLE9BQU8sQ0FDZCxVQUFDLE9BQU8sRUFBRSxNQUFNO2dDQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFDLEtBQUssRUFBRSxLQUFLO29DQUNyQyxJQUFJLEtBQUssRUFBRTt3Q0FDUCxPQUFPLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO3dDQUNwRixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7cUNBQ2hCO3lDQUFNO3dDQUNILElBQUksUUFBUSxJQUFJLEtBQUksQ0FBQyxrQkFBa0IsRUFBRTs0Q0FDckMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDOzRDQUNmLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7eUNBQzNDO3dDQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQ0FDbEI7Z0NBQ0wsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsQ0FBQyxDQUNKLEVBQUM7Ozs7S0FDTDtJQUVEOztPQUVHO0lBQ1csK0JBQXFCLEdBQW5DLFVBQW9DLFVBQWtCLEVBQUUsR0FBVyxFQUFFLFVBQTJCLEVBQUUsUUFBc0I7UUFBeEgsaUJBY0M7UUFkaUcseUJBQUEsRUFBQSxjQUFzQjtRQUNwSCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLElBQUksV0FBVyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNsRSxJQUFJLFlBQVksR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUMzQyxVQUFVLENBQUM7b0JBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUE7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQ2pFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVEOzs7OztPQUtHO0lBQ2lCLHVCQUFhLEdBQWpDLFVBQWtDLFVBQWtCLEVBQUUsR0FBVyxFQUFFLElBQXNCO3VDQUFHLE9BQU87Ozs7NEJBQzFELHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUE7O3dCQUFqRSxNQUFNLEdBQTJCLFNBQWdDO3dCQUNyRSxJQUFJLENBQUMsTUFBTSxFQUFFOzRCQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQzs0QkFDNUQsc0JBQU87eUJBQ1Y7d0JBRUQsc0JBQU8sSUFBSSxPQUFPLENBQ2QsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQ0FDWixJQUFJLElBQUksRUFBRTtvQ0FDTixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBa0I7d0NBQ2hELElBQUksS0FBSyxFQUFFOzRDQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUNBQWlDLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQzs0Q0FDN0UsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO3lDQUNoQjs2Q0FBTTs0Q0FDSCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7eUNBQ25CO29DQUNMLENBQUMsQ0FBQyxDQUFDO2lDQUNOO3FDQUFNO29DQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQUMsS0FBSyxFQUFFLE1BQWtCO3dDQUMxQyxJQUFJLEtBQUssRUFBRTs0Q0FDUCxPQUFPLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7NENBQzdFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTt5Q0FDaEI7NkNBQU07NENBQ0gsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3lDQUNuQjtvQ0FDTCxDQUFDLENBQUMsQ0FBQztpQ0FDTjs0QkFDTCxDQUFDLENBQ0osRUFBQzs7OztLQUNMO0lBR0Q7Ozs7O09BS0c7SUFDaUIsMEJBQWdCLEdBQXBDLFVBQXFDLFVBQWtCLEVBQUUsR0FBVyxFQUFFLElBQXFCO3VDQUFHLE9BQU87Ozs7NEJBQzVELHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUE7O3dCQUFqRSxNQUFNLEdBQTJCLFNBQWdDO3dCQUNyRSxJQUFJLENBQUMsTUFBTSxFQUFFOzRCQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQzs0QkFDM0Msc0JBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQzt5QkFDaEM7d0JBRUQsc0JBQU8sSUFBSSxPQUFPLENBQ2QsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQ0FDWixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBQyxLQUFLLEVBQUUsS0FBSztvQ0FDbkMsSUFBSSxLQUFLLEVBQUU7d0NBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQzt3Q0FDdkYsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO3FDQUNoQjt5Q0FBTTt3Q0FDSCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7cUNBQ2xCO2dDQUNMLENBQUMsQ0FBQyxDQUFDOzRCQUNQLENBQUMsQ0FDSixFQUFDOzs7O0tBQ0w7SUFHRDs7Ozs7T0FLRztJQUNpQiwwQkFBZ0IsR0FBcEMsVUFBcUMsVUFBa0IsRUFBRSxHQUFXLEVBQUUsSUFBc0I7dUNBQUcsT0FBTzs7Ozs0QkFDN0QscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBQTs7d0JBQWpFLE1BQU0sR0FBMkIsU0FBZ0M7d0JBQ3JFLElBQUksQ0FBQyxNQUFNLEVBQUU7NEJBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDOzRCQUM1RCxzQkFBTzt5QkFDVjt3QkFFRCxzQkFBTyxJQUFJLE9BQU8sQ0FDZCxVQUFDLE9BQU8sRUFBRSxNQUFNO2dDQUNaLElBQUksSUFBSSxFQUFFO29DQUNOLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxVQUFDLEtBQUssRUFBRSxLQUFLO3dDQUN0QyxJQUFJLEtBQUssRUFBRTs0Q0FDUCxPQUFPLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7NENBQ2hGLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTt5Q0FDaEI7NkNBQU07NENBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3lDQUNsQjtvQ0FDTCxDQUFDLENBQUMsQ0FBQztpQ0FDTjtxQ0FBTTtvQ0FDSCxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFDLEtBQUssRUFBRSxLQUFLO3dDQUNoQyxJQUFJLEtBQUssRUFBRTs0Q0FDUCxPQUFPLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7NENBQ2hGLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTt5Q0FDaEI7NkNBQU07NENBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3lDQUNsQjtvQ0FDTCxDQUFDLENBQUMsQ0FBQztpQ0FDTjs0QkFDTCxDQUFDLENBQ0osRUFBQzs7OztLQUNMO0lBRUQsYUFBYTtJQUNDLHVCQUFhLEdBQTNCLFVBQTRCLFVBQXdCLEVBQUUsVUFBMkI7UUFDN0UsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQzFGLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDbkM7UUFDRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ1csa0NBQXdCLEdBQXRDLFVBQXVDLFVBQWlELEVBQUUsVUFBMkIsRUFBRSxRQUFzQjtRQUE3SSxpQkF5QkM7UUF6QnNILHlCQUFBLEVBQUEsY0FBc0I7UUFDekksT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNkLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNkLElBQUksSUFBSSxHQUFHO2dCQUNQLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ25CLElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxjQUFjLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDOUYsSUFBSSxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDM0MsVUFBVSxDQUFDO3dCQUNQLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEIsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNqQixDQUFDLENBQUMsQ0FBQTtnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO29CQUMvRSxLQUFLLEVBQUUsQ0FBQztvQkFDUixJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFO3dCQUMzQixJQUFJLEVBQUUsQ0FBQztxQkFDVjt5QkFBTTt3QkFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ2pCO2dCQUNMLENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFBO1lBQ0QsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxZQUFZO0lBQ0Usb0JBQVUsR0FBeEIsVUFBeUIsU0FBaUIsRUFBRSxVQUE0QjtRQUNwRSxPQUFPLElBQUksT0FBTyxDQUNkLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDWixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQUMsS0FBSyxFQUFFLE1BQWdCO2dCQUN0RSxJQUFJLEtBQUssRUFBRTtvQkFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDL0QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO2lCQUNoQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ25CO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFYSw0QkFBa0IsR0FBaEMsVUFBaUMsT0FBOEY7UUFDM0gsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLEtBQWlCLFVBQU8sRUFBUCxtQkFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTyxFQUFFO1lBQXJCLElBQUksSUFBSSxnQkFBQTtZQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUMvRjtRQUNELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsNEJBQTRCO0lBQ1IsdUJBQWEsR0FBakMsVUFBa0MsVUFBa0I7Ozs7OzRCQUNYLHFCQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUE7O3dCQUFqRSxNQUFNLEdBQTJCLFNBQWdDO3dCQUNyRSxJQUFJLENBQUMsTUFBTSxFQUFFOzRCQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQzs0QkFDNUQsc0JBQU87eUJBQ1Y7d0JBQ0QsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUNwQixFQUFFLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7S0FDeEM7SUFFRCxpQkFBaUI7SUFDSCxnQkFBTSxHQUFwQixVQUFxQixJQUFZLEVBQUUsUUFBb0I7UUFBcEIseUJBQUEsRUFBQSxZQUFvQjtRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQjtZQUFFLE9BQU87UUFDckMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0IsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUNMLENBQUM7SUF2WEQsY0FBYztJQUNQLDRCQUFrQixHQUFZLEtBQUssQ0FBQztJQUUzQyxVQUFVO0lBQ0ssb0JBQVUsR0FBMEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUU5QyxtQkFBUyxHQUFpRCxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBaUNwRSxzQkFBWSxHQUFXLENBQUMsQ0FBQztJQWtWNUMsZ0JBQUM7Q0EzWEQsQUEyWEMsSUFBQTtBQTNYWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1bmRsZURhdGEgfSBmcm9tIFwiLi4vY29tbW9uL0J1bmRsZURhdGFcIjtcclxuaW1wb3J0IFRpcE1hbmFnZXIgZnJvbSBcIi4vVGlwTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFiTWFuYWdlciB7XHJcblxyXG4gICAgLyoq5piv5ZCm6Ieq5Yqo6YeK5pS+6LWE5rqQICovXHJcbiAgICBzdGF0aWMgaXNBdXRvUmVsZWFzZUFzc2V0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy/orrDlvZXliqDovb3ov4fnmoTotYTmupBcclxuICAgIHByaXZhdGUgc3RhdGljIHJlc1V1aWRNYXA6IE1hcDxzdHJpbmcsIGNjLkFzc2V0PiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBidW5kbGVNYXA6IE1hcDxzdHJpbmcsIFByb21pc2U8Y2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZT4+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0QnVuZGxlKGJ1bmRsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8Y2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZT4ge1xyXG4gICAgICAgIGlmICghYnVuZGxlTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRhcmdldEJ1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoYnVuZGxlTmFtZSk7XHJcbiAgICAgICAgaWYgKHRhcmdldEJ1bmRsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRhcmdldEJ1bmRsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5idW5kbGVNYXAuaGFzKGJ1bmRsZU5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1bmRsZU1hcC5nZXQoYnVuZGxlTmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5idW5kbGVNYXAuc2V0KGJ1bmRsZU5hbWUsIG5ldyBQcm9taXNlPGNjLkFzc2V0TWFuYWdlci5CdW5kbGU+KFxyXG4gICAgICAgICAgICAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShidW5kbGVOYW1lLCAoZXJyb3IsIGJ1bmRsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYnVuZGxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5idW5kbGVNYXAuZGVsZXRlKGJ1bmRsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVuZGxlTWFwLmdldChidW5kbGVOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBsb2FkU3ViSW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3lrZDljIVcclxuICAgICAqIEBwYXJhbSBidW5kbGVMaXN0IOWtkOWMheWQjeensOWIl+ihqFxyXG4gICAgICogIyMg6K+356Gu5L+d5a2Q5YyF5YiX6KGo5bey5oyJ54Wn5LyY5YWI57qn5o6S5bqPXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFN1YlBhY2thZ2UoYnVuZGxlTGlzdDogQXJyYXk8c3RyaW5nPik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGlmICghYnVuZGxlTGlzdCB8fCBidW5kbGVMaXN0Lmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJidW5kbGUgbGlzdCBub3QgZXhpc3Qgb3IgbGVuZ3RoIGxlc3MgemVyb1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2FkU3ViSW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oXHJcbiAgICAgICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY2lyY2xlTG9hZEJ1bmRsZShidW5kbGVMaXN0LCByZXNvbHZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2lyY2xlTG9hZEJ1bmRsZShidW5kbGVMaXN0OiBBcnJheTxzdHJpbmc+LCByZXNvbHZlKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBidW5kbGVOYW1lID0gYnVuZGxlTGlzdFtzZWxmLmxvYWRTdWJJbmRleF07XHJcbiAgICAgICAgdGhpcy5nZXRCdW5kbGUoYnVuZGxlTmFtZSkudGhlbigoYnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghYnVuZGxlKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNpcmNsZUxvYWRCdW5kbGUoYnVuZGxlTGlzdCwgcmVzb2x2ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWIhuWMhSBcIiArIGJ1bmRsZU5hbWUgKyBcIiDliqDovb3lrozmiJBcIilcclxuICAgICAgICAgICAgICAgIHNlbGYubG9hZFN1YkluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5sb2FkU3ViSW5kZXggPCBidW5kbGVMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2lyY2xlTG9hZEJ1bmRsZShidW5kbGVMaXN0LCByZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOmHjeivleWSjOi2heaXtueahOi1hOa6kOWKoOi9veaWueazlVxyXG4gICAgICogQHBhcmFtIHJldHJ5VGltZXMg6YeN6K+V5qyh5pWwXHJcbiAgICAgKiBAcGFyYW0gbG9hZE91dFRpbWUg6LaF5pe25pe26ZW/77yI5q+r56eS77yJXHJcbiAgICAgKiBAcGFyYW0gdGlwT3V0VGltZSDmj5DnpLrotoXml7bml7bplb/vvIjmr6vnp5LvvIlcclxuICAgICAqIEByZXR1cm5zIOWKoOi9veaIkOWKn+i/m3Jlc29sdmXvvIzov5Tlm57otYTmupDvvIzlpLHotKXov5tyZWplY3TvvIzov5Tlm55udWxsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZEJ1bmRsZVJlc1dpdGNoVGltZW91dChidW5kbGVOYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nLCBhc3NldHNUeXBlOiB0eXBlb2YgY2MuQXNzZXQsIGlzQWRkUmVmOiBib29sZWFuID0gdHJ1ZSwgcmV0cnlUaW1lczogbnVtYmVyID0gMywgbG9hZE91dFRpbWU6IG51bWJlciA9IDEwMDAwLCB0aXBPdXRUaW1lOiBudW1iZXIgPSAyMDAwKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlID0gYXdhaXQgdGhpcy5nZXRCdW5kbGUoYnVuZGxlTmFtZSk7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImNhbiBub3QgZ2V0IHRhcmdldCBidW5kbGVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRpcFRpbWVPdXQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGlwT3V0VGltZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRpcFRpbWVPdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBUaXBNYW5hZ2VyLmlucy5zaG93VGlwKFwi6LWE5rqQ5Yqg6L295Lit77yM6K+356iN5ZCOXCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgdGlwT3V0VGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGlzVGltZU91dDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgbG9hZFRpbWVPdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlzVGltZU91dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJsb2FkVGltZU91dFwiLCB1cmwpXHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGlwVGltZU91dCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgIH0sIGxvYWRPdXRUaW1lKTtcclxuXHJcbiAgICAgICAgICAgIGxldCByZXRyeSA9IDA7XHJcbiAgICAgICAgICAgIGxldCByZXRyeUNhbGwgPSAoYXNzZXQ6IGNjLkFzc2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oXCLliqDovb3miJDlip9cIiwgdXJsKVxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChsb2FkVGltZU91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpcFRpbWVPdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXNzZXQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVGltZU91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRyeSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmV0cnkgPj0gcmV0cnlUaW1lcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGxvYWRUaW1lT3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aXBUaW1lT3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuWKoOi9veWksei0pVwiLCB1cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCdW5kbGVSZXMoYnVuZGxlTmFtZSwgdXJsLCBhc3NldHNUeXBlLCBpc0FkZFJlZikudGhlbihyZXRyeUNhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxvYWRCdW5kbGVSZXMoYnVuZGxlTmFtZSwgdXJsLCBhc3NldHNUeXBlLCBpc0FkZFJlZikudGhlbihyZXRyeUNhbGwpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3mn5DkuIBidW5kbGXot6/lvoTkuIvnmoTljZXkuIDotYTmupAgXHJcbiAgICAgKiBAcGFyYW0gYnVuZGxlTmFtZSBidW5kbGXlkI3np7BcclxuICAgICAqIEBwYXJhbSB1cmwgYnVuZGxl5LiL55qE6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gYXNzZXRUeXBlIOi1hOa6kOexu+Wei1xyXG4gICAgICogQHBhcmFtIGlzQWRkUmVmIOaYr+WQpuWinuWKoOW8leeUqOiuoeaVsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGxvYWRCdW5kbGVSZXMoYnVuZGxlTmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZywgYXNzZXRUeXBlOiB0eXBlb2YgY2MuQXNzZXQsIGlzQWRkUmVmOiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IGJ1bmRsZTogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSA9IGF3YWl0IHRoaXMuZ2V0QnVuZGxlKGJ1bmRsZU5hbWUpO1xyXG4gICAgICAgIGlmICghYnVuZGxlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJjYW4gbm90IGdldCB0YXJnZXQgYnVuZGxlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PihcclxuICAgICAgICAgICAgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnVuZGxlLmxvYWQodXJsLCBhc3NldFR5cGUsIChlcnJvciwgYXNzZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImxvYWRCdW5kbGVSZXMg5aSx6LSlISBidW5kbGVOYW1lIDogXCIsIGJ1bmRsZU5hbWUsIFwiIHVybCA6IFwiLCB1cmwsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0FkZFJlZiAmJiB0aGlzLmlzQXV0b1JlbGVhc2VBc3NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQuYWRkUmVmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc1V1aWRNYXAuc2V0KGFzc2V0Ll91dWlkLCBhc3NldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhc3NldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWKoOi9vei1hOa6kCzlop7liqDljZXkuKrotYTmupDmnIDlsI/liqDovb3pl7TpmpRcclxuICAgICAqIGludGVydmFsOuacgOWwj+WKoOi9vemXtOmalCDmr6vnp5IgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEFzc2V0c0FkZEludGVydmFsKGJ1bmRsZU5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcsIGFzc2V0c1R5cGU6IHR5cGVvZiBjYy5Bc3NldCwgaW50ZXJ2YWw6IG51bWJlciA9IDUwMCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRpbWVyID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgbGV0IGxvYWRQcm9taXNlID0gdGhpcy5sb2FkQnVuZGxlUmVzKGJ1bmRsZU5hbWUsIHVybCwgYXNzZXRzVHlwZSk7XHJcbiAgICAgICAgICAgIGxldCBkZWxheVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfSwgaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChbbG9hZFByb21pc2UsIGRlbGF5UHJvbWlzZV0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkUHJlQWRkSW50ZXJ2YWwg5Yqg6L296ICX5pe2IFwiLCB1cmwsIERhdGUubm93KCkgLSB0aW1lcik7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3mn5DkuIBidW5kbGXot6/lvoTkuIvmn5DkuIDmlofku7blpLnkuIvnmoTmiYDmnInotYTmupBcclxuICAgICAqIEBwYXJhbSBidW5kbGVOYW1lIGJ1bmRsZeWQjeensFxyXG4gICAgICogQHBhcmFtIHVybCBidW5kbGXkuIvnmoTotYTmupDot6/lvoRcclxuICAgICAqIEBwYXJhbSB0eXBlIOaMh+WumumcgOimgeWKoOi9veeahOi1hOa6kOexu+Wei1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGxvYWRCdW5kbGVEaXIoYnVuZGxlTmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZywgdHlwZT86IHR5cGVvZiBjYy5Bc3NldCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSA9IGF3YWl0IHRoaXMuZ2V0QnVuZGxlKGJ1bmRsZU5hbWUpO1xyXG4gICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJjYW4gbm90IGdldCB0YXJnZXQgYnVuZGxlIGluIGxvYWRCdW5kbGVEaXJcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KFxyXG4gICAgICAgICAgICAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5sb2FkRGlyKHVybCwgdHlwZSwgKGVycm9yLCBhc3NldHM6IGNjLkFzc2V0W10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwibG9hZEJ1bmRsZURpciDlpLHotKUhIGJ1bmRsZU5hbWUgOiBcIiwgYnVuZGxlTmFtZSwgXCIgdXJsIDogXCIsIHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGFzc2V0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmxvYWREaXIodXJsLCAoZXJyb3IsIGFzc2V0czogY2MuQXNzZXRbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJsb2FkQnVuZGxlRGlyIOWksei0pSEgYnVuZGxlTmFtZSA6IFwiLCBidW5kbGVOYW1lLCBcIiB1cmwgOiBcIiwgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYXNzZXRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpooTliqDovb3mn5DkuIBidW5kbGXot6/lvoTkuIvnmoTljZXkuIDotYTmupAgXHJcbiAgICAgKiBAcGFyYW0gYnVuZGxlTmFtZSBidW5kbGXlkI3np7BcclxuICAgICAqIEBwYXJhbSB1cmwgYnVuZGxl5LiL55qE6LWE5rqQ6Lev5b6EXHJcbiAgICAgKiBAcGFyYW0gdHlwZSDmjIflrprpnIDopoHliqDovb3nmoTotYTmupDnsbvlnotcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBwcmVsb2FkQnVuZGxlUmVzKGJ1bmRsZU5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcsIHR5cGU6IHR5cGVvZiBjYy5Bc3NldCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSA9IGF3YWl0IHRoaXMuZ2V0QnVuZGxlKGJ1bmRsZU5hbWUpO1xyXG4gICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJjYW4gbm90IGdldCB0YXJnZXQgYnVuZGxlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oXHJcbiAgICAgICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wcmVsb2FkKHVybCwgdHlwZSwgKGVycm9yLCBpdGVtcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwicHJlbG9hZEJ1bmRsZVJlcyDlpLHotKUhIGJ1bmRsZU5hbWUgOiBcIiwgYnVuZGxlTmFtZSwgXCIgdXJsIDogXCIsIHVybCwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpdGVtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmihOWKoOi9veafkOS4gGJ1bmRsZei3r+W+hOS4i+afkOS4gOaWh+S7tuWkueS4i+eahOaJgOaciei1hOa6kFxyXG4gICAgICogQHBhcmFtIGJ1bmRsZU5hbWUgYnVuZGxl5ZCN56ewXHJcbiAgICAgKiBAcGFyYW0gdXJsIGJ1bmRsZeS4i+eahOi1hOa6kOi3r+W+hFxyXG4gICAgICogQHBhcmFtIHR5cGUg5oyH5a6a6ZyA6KaB5Yqg6L2955qE6LWE5rqQ57G75Z6LXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcHJlbG9hZEJ1bmRsZURpcihidW5kbGVOYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nLCB0eXBlPzogdHlwZW9mIGNjLkFzc2V0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlID0gYXdhaXQgdGhpcy5nZXRCdW5kbGUoYnVuZGxlTmFtZSk7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImNhbiBub3QgZ2V0IHRhcmdldCBidW5kbGUgaW4gbG9hZEJ1bmRsZURpclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oXHJcbiAgICAgICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnByZWxvYWREaXIodXJsLCB0eXBlLCAoZXJyb3IsIGl0ZW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInByZWxvYWRCdW5kbGVEaXIg5aSx6LSlISBidW5kbGVOYW1lIDogXCIsIGJ1bmRsZU5hbWUsIFwiIHVybCA6IFwiLCB1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpdGVtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnByZWxvYWREaXIodXJsLCAoZXJyb3IsIGl0ZW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInByZWxvYWRCdW5kbGVEaXIg5aSx6LSlISBidW5kbGVOYW1lIDogXCIsIGJ1bmRsZU5hbWUsIFwiIHVybCA6IFwiLCB1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpdGVtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6aKE5Yqg6L296LWE5rqQ5pWw57uEICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHByZWxvYWRBc3NldHMocHJlbG9hZFJlczogQnVuZGxlRGF0YVtdLCBhc3NldHNUeXBlOiB0eXBlb2YgY2MuQXNzZXQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBwcm9taXNlQXJyID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVsb2FkUmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBidW5kbGVEYXRhID0gcHJlbG9hZFJlc1tpXTtcclxuICAgICAgICAgICAgbGV0IHByZUxvYWRQcm9taXNlID0gdGhpcy5wcmVsb2FkQnVuZGxlUmVzKGJ1bmRsZURhdGEuYnVuZGxlLCBidW5kbGVEYXRhLnVybCwgYXNzZXRzVHlwZSk7XHJcbiAgICAgICAgICAgIHByb21pc2VBcnIucHVzaChwcmVMb2FkUHJvbWlzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlQXJyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirpooTliqDovb3otYTmupAs5aKe5Yqg5Y2V5Liq6LWE5rqQ5pyA5bCP5Yqg6L296Ze06ZqUXHJcbiAgICAgKiBpbnRlcnZhbDrmnIDlsI/liqDovb3pl7TpmpQg5q+r56eSXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcHJlbG9hZEFzc2V0c0FkZEludGVydmFsKHByZWxvYWRSZXM6IHsgYnVuZGxlTmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZyB9W10sIGFzc2V0c1R5cGU6IHR5cGVvZiBjYy5Bc3NldCwgaW50ZXJ2YWw6IG51bWJlciA9IDUwMCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAgICAgbGV0IHRpbWVyID0gMDtcclxuICAgICAgICAgICAgbGV0IGNhbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aW1lciA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnVuZGxlRGF0YSA9IHByZWxvYWRSZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZUxvYWRQcm9taXNlID0gdGhpcy5wcmVsb2FkQnVuZGxlUmVzKGJ1bmRsZURhdGEuYnVuZGxlTmFtZSwgYnVuZGxlRGF0YS51cmwsIGFzc2V0c1R5cGUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlbGF5UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoW3ByZUxvYWRQcm9taXNlLCBkZWxheVByb21pc2VdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInByZWxvYWRQcmVBZGRJbnRlcnZhbCDliqDovb3ogJfml7YgXCIsIGJ1bmRsZURhdGEudXJsLCBEYXRlLm5vdygpIC0gdGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgcHJlbG9hZFJlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKirliqDovb3ov5znqIvotYTmupAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFJlbW90ZShyZW1vdGVVcmw6IHN0cmluZywgYXNzZXRzVHlwZT86IHR5cGVvZiBjYy5Bc3NldCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oXHJcbiAgICAgICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHJlbW90ZVVybCwgYXNzZXRzVHlwZSwgKGVycm9yLCBhc3NldHM6IGNjLkFzc2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJsb2FkUmVtb3RlIOWksei0pSEgcmVtb3RlVXJsIDogXCIsIHJlbW90ZVVybCwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShhc3NldHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRCdW5kbGVSZXNBcnJheShyZXNJbmZvOiB7IGJ1bmRsZU5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcsIGFzc2V0c1R5cGU6IHR5cGVvZiBjYy5Bc3NldCwgaXNBZGRSZWY6IGJvb2xlYW4gfVtdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgbG9hZEFyciA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGRhdGEgb2YgcmVzSW5mbykge1xyXG4gICAgICAgICAgICBsb2FkQXJyLnB1c2godGhpcy5sb2FkQnVuZGxlUmVzKGRhdGEuYnVuZGxlTmFtZSwgZGF0YS51cmwsIGRhdGEuYXNzZXRzVHlwZSwgZGF0YS5pc0FkZFJlZikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwobG9hZEFycik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6YeK5pS+YnVuZGxl5YaF5omA5pyJ6LWE5rqQ77yM56e76ZmkYnVuZGxlICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHJlbGVhc2VCdW5kbGUoYnVuZGxlTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGJ1bmRsZTogY2MuQXNzZXRNYW5hZ2VyLkJ1bmRsZSA9IGF3YWl0IHRoaXMuZ2V0QnVuZGxlKGJ1bmRsZU5hbWUpO1xyXG4gICAgICAgIGlmICghYnVuZGxlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJjYW4gbm90IGdldCB0YXJnZXQgYnVuZGxlIGluIGxvYWRCdW5kbGVEaXJcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVuZGxlLnJlbGVhc2VBbGwoKTtcclxuICAgICAgICBjYy5hc3NldE1hbmFnZXIucmVtb3ZlQnVuZGxlKGJ1bmRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Zue5pS26LWE5rqQ5pe25YeP5bCR5byV55So6K6h5pWwICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlY1JlZih1dWlkOiBzdHJpbmcsIGRlY0NvdW50OiBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQXV0b1JlbGVhc2VBc3NldCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBhc3NldCA9IHRoaXMucmVzVXVpZE1hcC5nZXQodXVpZCk7XHJcbiAgICAgICAgaWYgKCFhc3NldCkgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVjQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBhc3NldC5kZWNSZWYoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFzc2V0LnJlZkNvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNVdWlkTWFwLmRlbGV0ZSh1dWlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8293cMtK0BOHK0WIff1ivwF', 'UIManager');
// homePage/script/manager/UIManager.ts

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
exports.UiOperationType = exports.UiType = exports.StackData = exports.UIManager = void 0;
var AbRef_1 = require("../common/AbRef");
var AnimationCol_1 = require("../common/AnimationCol");
var Global_1 = require("../common/Global");
var MyPool_1 = require("../common/MyPool");
var UiBase_1 = require("../common/UiBase");
var Util_1 = require("../common/Util");
var AbManager_1 = require("../manager/AbManager");
var EventManager_1 = require("../manager/EventManager");
var SceneEventManager_1 = require("../manager/SceneEventManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boardNode = null;
        _this.dialogNode = null;
        _this.uiBlockNode = null;
        _this.sceneBlockNode = null;
        _this.touchPre = null;
        _this.maskNode = null;
        _this._isUiBlockInput = true;
        /**全屏遮罩 */
        _this._isSceneBlockInput = false;
        /**ui缩放 适配ipad等超宽屏幕时使用 */
        _this.adapScale = 1;
        /**是否是长屏手机 */
        _this.isLongScene = false;
        /**等待操作的界面队列 */
        _this.operationViewQueue = [];
        /**当前打开的界面栈 */
        _this.viewStack = [];
        /**当前正在执行的任务 */
        _this.curTask = Promise.resolve();
        _this.isOnMaskAnim = false;
        _this._curTopBundleData = null;
        _this.limmitTime = 0;
        return _this;
    }
    UIManager_1 = UIManager;
    Object.defineProperty(UIManager.prototype, "isUiBlockInput", {
        get: function () {
            return this._isUiBlockInput;
        },
        set: function (value) {
            this._isUiBlockInput = value;
            this.uiBlockNode.active = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UIManager.prototype, "isSceneBlockInput", {
        get: function () {
            return this._isSceneBlockInput;
        },
        set: function (value) {
            this._isSceneBlockInput = value;
            this.sceneBlockNode.active = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UIManager.prototype, "curTopBundleData", {
        get: function () {
            return this._curTopBundleData;
        },
        set: function (value) {
            this._curTopBundleData = value;
            // console.log("this._curTopBundleData = ", this._curTopBundleData)
            SceneEventManager_1.default.ins.checkSceneEvent(value);
            EventManager_1.EventManager.triggerEvent(Global_1.EventEnum.TopUIChange, value);
        },
        enumerable: false,
        configurable: true
    });
    UIManager.prototype.onLoad = function () {
        UIManager_1.ins = this;
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this, true);
        this.isUiBlockInput = false;
        this.isSceneBlockInput = false;
        this.isOnMaskAnim = false;
        this.adapScale = Util_1.Util.sceneAdaptation();
        this.viewStack = [];
        this.isLongScene = cc.winSize.height / cc.winSize.width > 2;
    };
    UIManager.prototype.touchStart = function (event) {
        if (!this.touchPre || cc.sys.now() - this.limmitTime < 150) {
            return;
        }
        this.limmitTime = cc.sys.now();
        var touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
        var touchEffect = MyPool_1.default.getObj(this.touchPre);
        touchEffect.setParent(this.node);
        touchEffect.setPosition(touchPos.x, touchPos.y);
        var animScr = touchEffect.getComponent(AnimationCol_1.default);
        if (animScr) {
            animScr.play();
        }
    };
    /**更新当前栈顶界面 */
    UIManager.prototype.refreshCurTopBundleData = function () {
        if (this.viewStack.length <= 0) {
            this.curTopBundleData = null;
        }
        else {
            var lastStack = this.viewStack[this.viewStack.length - 1];
            this.curTopBundleData = { data: lastStack.bundleData, uiBase: lastStack.uiBase };
        }
    };
    /**
     * 打开ui界面
     * @param uiData ui数据
     * @param isNewLayer 是否在新的层级打开，如果传false会隐藏栈顶界面再打开该界面，该界面关闭时会重新显示之前被隐藏的界面
     * @param paNode 指定ui界面的父节点，可能会导致curTopBundleData出错
     * * @param isImmediately 是否立刻打开（不播放动画）
     * @returns
     */
    UIManager.prototype.openView = function (uiData, isNewLayer, isImmediately, paNode, pos) {
        var _this = this;
        if (isNewLayer === void 0) { isNewLayer = true; }
        if (isImmediately === void 0) { isImmediately = false; }
        if (paNode === void 0) { paNode = this.boardNode; }
        if (pos === void 0) { pos = cc.Vec2.ZERO; }
        return new Promise(function (resolve, reject) {
            var task = function () { return _this.refreshOperationQueue({ promise: resolve, bundleData: uiData, operationType: UiOperationType.Open, isNewLayer: isNewLayer, paNode: paNode, pos: pos, isImmediately: isImmediately }); };
            _this.curTask = _this.curTask.then(task);
        });
    };
    /**关闭栈顶界面
     * @param isImmediately 是否立刻关闭（不播放动画）
     */
    UIManager.prototype.closeView = function (isImmediately) {
        var _this = this;
        if (isImmediately === void 0) { isImmediately = false; }
        return new Promise(function (resolve, reject) {
            if (_this.viewStack.length <= 0) {
                resolve && resolve(null);
                return;
            }
            var task = function () { return _this.refreshOperationQueue({ promise: resolve, bundleData: _this.viewStack[_this.viewStack.length - 1].bundleData, operationType: UiOperationType.Close, isNewLayer: null, paNode: null, pos: null, isImmediately: isImmediately }); };
            _this.curTask = _this.curTask.then(task);
        });
    };
    /**关闭指定界面 如果界面存在，会先将界面移动到栈顶，然后移除 */
    UIManager.prototype.closeViewByBundleData = function (bundleData, isImmediately) {
        var _this = this;
        if (isImmediately === void 0) { isImmediately = true; }
        return new Promise(function (resolve, reject) {
            if (_this.viewStack.length <= 0) {
                resolve && resolve(null);
                return;
            }
            var index = _this.viewStack.findIndex(function (v) { return v.bundleData.url == bundleData.url; });
            if (index < 0) {
                console.warn("未找到界面 ", bundleData);
                resolve && resolve(null);
                return;
            }
            var stackData = _this.viewStack.splice(index, 1);
            _this.viewStack.push(stackData[0]);
            var task = function () { return _this.refreshOperationQueue({ promise: resolve, bundleData: _this.viewStack[_this.viewStack.length - 1].bundleData, operationType: UiOperationType.Close, isNewLayer: null, paNode: null, pos: null, isImmediately: isImmediately }); };
            _this.curTask = _this.curTask.then(task);
        });
    };
    UIManager.prototype.refreshOperationQueue = function (info) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.viewStack.length > 0) {
                if (info.operationType == UiOperationType.Open) {
                    var view = _this.viewStack.find(function (v) { return v.bundleData.url == info.bundleData.url; });
                    if (view) {
                        //当前要打开的界面已经打开
                        info.promise && info.promise(view.uiBase);
                        console.warn("界面已经打开 ", info.bundleData);
                        resolve();
                        return;
                    }
                }
                else if (info.operationType == UiOperationType.Close) {
                    var stackData = _this.viewStack[_this.viewStack.length - 1];
                    if (stackData.bundleData.url != info.bundleData.url) {
                        //无法关闭
                        info.promise && info.promise(null);
                        console.warn("当前要关闭的界面不是最上层无法关闭 ", info.bundleData);
                        resolve();
                        return;
                    }
                }
            }
            _this.operationViewQueue.push(info);
            _this.checkSceneStack().then(resolve);
        });
    };
    UIManager.prototype.checkSceneStack = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var obj = _this.operationViewQueue.shift();
            if (!obj) {
                return;
            }
            _this.isUiBlockInput = true;
            var uiData = obj.bundleData;
            var uiResolve = obj.promise;
            if (obj.operationType == UiOperationType.Open) {
                _this.getUi(uiData).then(function (node) {
                    var uiBase = node.getComponent(UiBase_1.UiBase);
                    if (!uiBase) {
                        console.warn("没有获取到baseUi--- ", uiData);
                        uiResolve && uiResolve(null);
                        resolve && resolve(null);
                        _this.isUiBlockInput = false;
                        return;
                    }
                    node.setParent(obj.paNode);
                    node.setPosition(obj.pos);
                    node.setScale(1);
                    if (_this.viewStack.length > 0) {
                        if (!obj.isNewLayer) {
                            _this.viewStack[_this.viewStack.length - 1].uiNode.active = false;
                            _this.viewStack[_this.viewStack.length - 1].uiBase.onClose();
                        }
                        else {
                            _this.viewStack[_this.viewStack.length - 1].uiBase.onCover();
                        }
                    }
                    uiBase.onOpen();
                    _this.curTopBundleData = { data: uiData, uiBase: uiBase };
                    _this.viewStack.forEach(function (v) {
                        if (v.uiBase.bgMaskNode)
                            v.uiBase.bgMaskNode.active = false;
                    });
                    if (uiBase.bgMaskNode)
                        uiBase.bgMaskNode.active = true;
                    var stackData = new StackData(uiData, uiBase, node, obj.isNewLayer);
                    _this.viewStack.push(stackData);
                    obj.promise && obj.promise(uiBase);
                    uiBase.openAnimNode && uiBase.openAnimNode.setScale(0);
                    uiBase.openPrepare().then(function () {
                        _this.uiOpenAnim(stackData, obj.isImmediately).then(function () {
                            uiBase.onOpenFinish();
                            resolve && resolve(null);
                            _this.isUiBlockInput = false;
                        });
                    });
                }).catch(function () {
                    console.warn("界面加载失败 ", uiData);
                    obj.promise && obj.promise(null);
                    resolve && resolve(null);
                    _this.isUiBlockInput = false;
                });
            }
            else if (obj.operationType == UiOperationType.Close) {
                if (_this.viewStack.length <= 0) {
                    obj.promise && obj.promise();
                    resolve && resolve(null);
                    _this.isUiBlockInput = false;
                    return;
                }
                var view_1 = _this.viewStack[_this.viewStack.length - 1];
                view_1.uiBase.onClose();
                view_1.uiBase.closeCb();
                var stackData = new StackData(view_1.bundleData, view_1.uiBase, view_1.uiNode, view_1.isNewLayer);
                _this.uiCloseAnim(stackData, obj.isImmediately).then(function () {
                    view_1.uiBase.onCloseFinish();
                    _this.viewStack.pop();
                    _this.decUi(view_1.uiNode);
                    if (_this.viewStack.length > 0) {
                        var lastStack = _this.viewStack[_this.viewStack.length - 1];
                        _this.curTopBundleData = { data: lastStack.bundleData, uiBase: lastStack.uiBase };
                        if (!view_1.isNewLayer) {
                            lastStack.uiNode.active = true;
                            lastStack.uiBase.onOpen();
                        }
                        else {
                            lastStack.uiBase.onUncover();
                        }
                        if (lastStack.uiBase.bgMaskNode) {
                            lastStack.uiBase.bgMaskNode.active = true;
                        }
                    }
                    else {
                        _this.curTopBundleData = null;
                    }
                    obj.promise && obj.promise(view_1.uiBase);
                    resolve && resolve(null);
                    _this.isUiBlockInput = false;
                });
            }
        });
    };
    UIManager.prototype.uiOpenAnim = function (stackData, isImmediately) {
        var _this = this;
        if (!stackData || !stackData.uiBase) {
            return Promise.resolve(null);
        }
        if (isImmediately) {
            if (stackData.uiBase.openAnimNode) {
                stackData.uiBase.openAnimNode.stopAllActions();
                stackData.uiBase.openAnimNode.setScale(1);
            }
            return Promise.resolve(null);
        }
        if (!stackData.uiBase.openAnimNode) {
            return Promise.resolve(stackData);
        }
        else {
            return new Promise(function (resolve, reject) {
                stackData.uiBase.openAnimNode.stopAllActions();
                stackData.uiBase.openAnimNode.setScale(0);
                _this.isUiBlockInput = true;
                cc.tween(stackData.uiBase.openAnimNode)
                    .to(0.5, { scale: 1 }, { easing: "backOut" })
                    .call(function () {
                    _this.isUiBlockInput = false;
                    resolve(stackData);
                })
                    .start();
            });
        }
    };
    UIManager.prototype.uiCloseAnim = function (stackData, isImmediately) {
        var _this = this;
        if (!stackData || !stackData.uiBase) {
            return Promise.resolve(null);
        }
        if (isImmediately) {
            return Promise.resolve(null);
        }
        if (!stackData.uiBase.openAnimNode) {
            return Promise.resolve(stackData);
        }
        else {
            stackData.uiBase.openAnimNode.stopAllActions();
            return new Promise(function (resolve, reject) {
                stackData.uiBase.openAnimNode.setScale(1);
                _this.isUiBlockInput = true;
                cc.tween(stackData.uiBase.openAnimNode)
                    .to(0.5, { scale: 0 }, { easing: "backIn" })
                    .call(function () {
                    _this.isUiBlockInput = false;
                    resolve(stackData);
                })
                    .start();
            });
        }
    };
    /**加载ui界面 */
    UIManager.prototype.getUi = function (bundleData) {
        return new Promise(function (resolve, reject) {
            AbManager_1.AbManager.loadBundleResWitchTimeout(bundleData.bundle, bundleData.url, cc.Prefab).then(function (pre) {
                console.warn("pre ", pre);
                resolve(cc.instantiate(pre));
            }).catch(function () {
                console.warn("reject");
                reject();
            });
        });
    };
    /**回收ui界面 */
    UIManager.prototype.decUi = function (uiNode) {
        uiNode.walk(function (cNode) {
            var abRef = cNode.getComponent(AbRef_1.default);
            if (abRef)
                abRef.decRef();
        }, null);
        AbManager_1.AbManager.decRef(uiNode._prefab.asset._uuid);
        uiNode.removeFromParent(false);
        uiNode.destroy();
    };
    /**
     * 全屏黑色遮罩动画 渐显->渐隐
     * @param time 动画时间
     * @param midCb 屏幕完全变黑时的回调
     * @param endCb 动画结束的回调
     * @returns
     */
    UIManager.prototype.showMaskAnim = function (time, midCb, endCb) {
        var _this = this;
        if (midCb === void 0) { midCb = null; }
        if (endCb === void 0) { endCb = null; }
        if (this.isOnMaskAnim)
            return;
        this.isOnMaskAnim = true;
        this.isUiBlockInput = true;
        cc.tween(this.maskNode)
            .to(time, { opacity: 255 })
            .call(function () {
            midCb && midCb();
        })
            .to(time, { opacity: 0 })
            .call(function () {
            endCb && endCb();
            _this.isUiBlockInput = false;
            _this.isOnMaskAnim = false;
        })
            .start();
    };
    /**
     * 全屏渐显动画
     * @param cb 动画完成回调
     * @param duration 动画时长
     * @returns
     */
    UIManager.prototype.showMask = function (cb, duration) {
        var _this = this;
        if (duration === void 0) { duration = 0.5; }
        if (this.isOnMaskAnim)
            return;
        this.isOnMaskAnim = true;
        this.isUiBlockInput = true;
        this.maskNode.stopAllActions();
        cc.tween(this.maskNode)
            .to(duration, { opacity: 255 })
            .call(function () {
            _this.isOnMaskAnim = false;
            cb && cb();
        })
            .start();
    };
    /**
     * 全屏渐隐动画
     * @param cb 动画完成回调
     * @param duration 动画时长
     * @returns
     */
    UIManager.prototype.hideMask = function (cb, duration) {
        var _this = this;
        if (duration === void 0) { duration = 0.5; }
        if (this.isOnMaskAnim)
            return;
        this.isOnMaskAnim = true;
        this.maskNode.stopAllActions();
        cc.tween(this.maskNode)
            .to(duration, { opacity: 0 })
            .call(function () {
            _this.isUiBlockInput = false;
            _this.isOnMaskAnim = false;
            cb && cb();
        })
            .start();
    };
    var UIManager_1;
    UIManager.ins = null;
    __decorate([
        property(cc.Node)
    ], UIManager.prototype, "boardNode", void 0);
    __decorate([
        property(cc.Node)
    ], UIManager.prototype, "dialogNode", void 0);
    __decorate([
        property(cc.Node)
    ], UIManager.prototype, "uiBlockNode", void 0);
    __decorate([
        property(cc.Node)
    ], UIManager.prototype, "sceneBlockNode", void 0);
    __decorate([
        property(cc.Prefab)
    ], UIManager.prototype, "touchPre", void 0);
    __decorate([
        property(cc.Node)
    ], UIManager.prototype, "maskNode", void 0);
    UIManager = UIManager_1 = __decorate([
        ccclass
    ], UIManager);
    return UIManager;
}(cc.Component));
exports.UIManager = UIManager;
var StackData = /** @class */ (function () {
    function StackData(bundleData, uiBase, uiNode, isNewLayer) {
        this.bundleData = null;
        this.uiBase = null;
        this.uiNode = null;
        this.isNewLayer = true;
        this.bundleData = bundleData;
        this.uiBase = uiBase;
        this.uiNode = uiNode;
        this.isNewLayer = isNewLayer;
    }
    return StackData;
}());
exports.StackData = StackData;
var UiType;
(function (UiType) {
    UiType[UiType["BOARD"] = 0] = "BOARD";
    UiType[UiType["DIALOG"] = 1] = "DIALOG";
    UiType[UiType["POPUP"] = 2] = "POPUP";
    UiType[UiType["SCENE"] = 3] = "SCENE";
})(UiType = exports.UiType || (exports.UiType = {}));
var UiOperationType;
(function (UiOperationType) {
    UiOperationType[UiOperationType["Open"] = 0] = "Open";
    UiOperationType[UiOperationType["Close"] = 1] = "Close";
})(UiOperationType = exports.UiOperationType || (exports.UiOperationType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsdURBQWtEO0FBR2xELDJDQUE2QztBQUM3QywyQ0FBc0M7QUFDdEMsMkNBQTBDO0FBQzFDLHVDQUFzQztBQUN0QyxrREFBaUQ7QUFDakQsd0RBQXVEO0FBQ3ZELGtFQUE2RDtBQUl2RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQiw2QkFBWTtJQUEzQztRQUFBLHFFQTRaQztRQXpaVSxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRy9CLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHbkMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUVqQixxQkFBZSxHQUFZLElBQUksQ0FBQztRQVN4QyxVQUFVO1FBQ0Ysd0JBQWtCLEdBQVksS0FBSyxDQUFDO1FBVzVDLHlCQUF5QjtRQUNsQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLGFBQWE7UUFDTixpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUVwQyxlQUFlO1FBQ1Asd0JBQWtCLEdBQTJKLEVBQUUsQ0FBQztRQUN4TCxjQUFjO1FBQ04sZUFBUyxHQUFnQixFQUFFLENBQUM7UUFDcEMsZUFBZTtRQUNQLGFBQU8sR0FBa0IsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTVDLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzdCLHVCQUFpQixHQUF5QyxJQUFJLENBQUM7UUFzQi9ELGdCQUFVLEdBQUcsQ0FBQyxDQUFDOztJQWdWM0IsQ0FBQztrQkE1WlksU0FBUztJQXFCbEIs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QUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFLakI7QUFFRCxJQUFZLGVBR1g7QUFIRCxXQUFZLGVBQWU7SUFDdkIscURBQUksQ0FBQTtJQUNKLHVEQUFLLENBQUE7QUFDVCxDQUFDLEVBSFcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFHMUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJSZWYgZnJvbSBcIi4uL2NvbW1vbi9BYlJlZlwiO1xyXG5pbXBvcnQgQW5pbWF0aW9uQ29sIGZyb20gXCIuLi9jb21tb24vQW5pbWF0aW9uQ29sXCI7XHJcbmltcG9ydCB7IEJ1bmRsZURhdGEgfSBmcm9tIFwiLi4vY29tbW9uL0J1bmRsZURhdGFcIjtcclxuaW1wb3J0IHsgQnVuZGxlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vQnVuZGxlTmFtZVwiO1xyXG5pbXBvcnQgeyBFdmVudEVudW0gfSBmcm9tIFwiLi4vY29tbW9uL0dsb2JhbFwiO1xyXG5pbXBvcnQgTXlQb29sIGZyb20gXCIuLi9jb21tb24vTXlQb29sXCI7XHJcbmltcG9ydCB7IFVpQmFzZSB9IGZyb20gXCIuLi9jb21tb24vVWlCYXNlXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vY29tbW9uL1V0aWxcIjtcclxuaW1wb3J0IHsgQWJNYW5hZ2VyIH0gZnJvbSBcIi4uL21hbmFnZXIvQWJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2VyL0V2ZW50TWFuYWdlclwiO1xyXG5pbXBvcnQgU2NlbmVFdmVudE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvU2NlbmVFdmVudE1hbmFnZXJcIjtcclxuXHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBVSU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHVibGljIGJvYXJkTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwdWJsaWMgZGlhbG9nTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHVpQmxvY2tOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgc2NlbmVCbG9ja05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIHRvdWNoUHJlOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWFza05vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX2lzVWlCbG9ja0lucHV0OiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBnZXQgaXNVaUJsb2NrSW5wdXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVWlCbG9ja0lucHV0O1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXQgaXNVaUJsb2NrSW5wdXQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9pc1VpQmxvY2tJbnB1dCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudWlCbG9ja05vZGUuYWN0aXZlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5YWo5bGP6YGu572pICovXHJcbiAgICBwcml2YXRlIF9pc1NjZW5lQmxvY2tJbnB1dDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGdldCBpc1NjZW5lQmxvY2tJbnB1dCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNTY2VuZUJsb2NrSW5wdXQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGlzU2NlbmVCbG9ja0lucHV0KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5faXNTY2VuZUJsb2NrSW5wdXQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNjZW5lQmxvY2tOb2RlLmFjdGl2ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zOiBVSU1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIC8qKnVp57yp5pS+IOmAgumFjWlwYWTnrYnotoXlrr3lsY/luZXml7bkvb/nlKggKi9cclxuICAgIHB1YmxpYyBhZGFwU2NhbGU6IG51bWJlciA9IDE7XHJcbiAgICAvKirmmK/lkKbmmK/plb/lsY/miYvmnLogKi9cclxuICAgIHB1YmxpYyBpc0xvbmdTY2VuZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKuetieW+heaTjeS9nOeahOeVjOmdoumYn+WIlyAqL1xyXG4gICAgcHJpdmF0ZSBvcGVyYXRpb25WaWV3UXVldWU6IHsgcHJvbWlzZTogYW55LCBidW5kbGVEYXRhOiBCdW5kbGVEYXRhLCBvcGVyYXRpb25UeXBlOiBVaU9wZXJhdGlvblR5cGUsIGlzTmV3TGF5ZXI6IGJvb2xlYW4sIHBhTm9kZTogY2MuTm9kZSwgcG9zOiBjYy5WZWMyLCBpc0ltbWVkaWF0ZWx5OiBib29sZWFuIH1bXSA9IFtdO1xyXG4gICAgLyoq5b2T5YmN5omT5byA55qE55WM6Z2i5qCIICovXHJcbiAgICBwcml2YXRlIHZpZXdTdGFjazogU3RhY2tEYXRhW10gPSBbXTtcclxuICAgIC8qKuW9k+WJjeato+WcqOaJp+ihjOeahOS7u+WKoSAqL1xyXG4gICAgcHJpdmF0ZSBjdXJUYXNrOiBQcm9taXNlPHZvaWQ+ID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcblxyXG4gICAgcHVibGljIGlzT25NYXNrQW5pbTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfY3VyVG9wQnVuZGxlRGF0YTogeyBkYXRhOiBCdW5kbGVEYXRhOyB1aUJhc2U6IFVpQmFzZSB9ID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgY3VyVG9wQnVuZGxlRGF0YSgpOiB7IGRhdGE6IEJ1bmRsZURhdGE7IHVpQmFzZTogVWlCYXNlIH0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJUb3BCdW5kbGVEYXRhO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXQgY3VyVG9wQnVuZGxlRGF0YSh2YWx1ZTogeyBkYXRhOiBCdW5kbGVEYXRhOyB1aUJhc2U6IFVpQmFzZSB9KSB7XHJcbiAgICAgICAgdGhpcy5fY3VyVG9wQnVuZGxlRGF0YSA9IHZhbHVlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5fY3VyVG9wQnVuZGxlRGF0YSA9IFwiLCB0aGlzLl9jdXJUb3BCdW5kbGVEYXRhKVxyXG4gICAgICAgIFNjZW5lRXZlbnRNYW5hZ2VyLmlucy5jaGVja1NjZW5lRXZlbnQodmFsdWUpO1xyXG4gICAgICAgIEV2ZW50TWFuYWdlci50cmlnZ2VyRXZlbnQoRXZlbnRFbnVtLlRvcFVJQ2hhbmdlLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBVSU1hbmFnZXIuaW5zID0gdGhpcztcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5pc1VpQmxvY2tJbnB1dCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNTY2VuZUJsb2NrSW5wdXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzT25NYXNrQW5pbSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWRhcFNjYWxlID0gVXRpbC5zY2VuZUFkYXB0YXRpb24oKTtcclxuICAgICAgICB0aGlzLnZpZXdTdGFjayA9IFtdO1xyXG4gICAgICAgIHRoaXMuaXNMb25nU2NlbmUgPSBjYy53aW5TaXplLmhlaWdodCAvIGNjLndpblNpemUud2lkdGggPiAyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbGltbWl0VGltZSA9IDA7XHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMudG91Y2hQcmUgfHwgY2Muc3lzLm5vdygpIC0gdGhpcy5saW1taXRUaW1lIDwgMTUwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saW1taXRUaW1lID0gY2Muc3lzLm5vdygpO1xyXG4gICAgICAgIGxldCB0b3VjaFBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICBsZXQgdG91Y2hFZmZlY3QgPSBNeVBvb2wuZ2V0T2JqKHRoaXMudG91Y2hQcmUpO1xyXG4gICAgICAgIHRvdWNoRWZmZWN0LnNldFBhcmVudCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRvdWNoRWZmZWN0LnNldFBvc2l0aW9uKHRvdWNoUG9zLngsIHRvdWNoUG9zLnkpO1xyXG4gICAgICAgIGxldCBhbmltU2NyID0gdG91Y2hFZmZlY3QuZ2V0Q29tcG9uZW50KEFuaW1hdGlvbkNvbCk7XHJcbiAgICAgICAgaWYgKGFuaW1TY3IpIHtcclxuICAgICAgICAgICAgYW5pbVNjci5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuabtOaWsOW9k+WJjeagiOmhtueVjOmdoiAqL1xyXG4gICAgcHVibGljIHJlZnJlc2hDdXJUb3BCdW5kbGVEYXRhKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZpZXdTdGFjay5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1clRvcEJ1bmRsZURhdGEgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBsYXN0U3RhY2sgPSB0aGlzLnZpZXdTdGFja1t0aGlzLnZpZXdTdGFjay5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgdGhpcy5jdXJUb3BCdW5kbGVEYXRhID0geyBkYXRhOiBsYXN0U3RhY2suYnVuZGxlRGF0YSwgdWlCYXNlOiBsYXN0U3RhY2sudWlCYXNlIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5omT5byAdWnnlYzpnaJcclxuICAgICAqIEBwYXJhbSB1aURhdGEgdWnmlbDmja5cclxuICAgICAqIEBwYXJhbSBpc05ld0xheWVyIOaYr+WQpuWcqOaWsOeahOWxgue6p+aJk+W8gO+8jOWmguaenOS8oGZhbHNl5Lya6ZqQ6JeP5qCI6aG255WM6Z2i5YaN5omT5byA6K+l55WM6Z2i77yM6K+l55WM6Z2i5YWz6Zet5pe25Lya6YeN5paw5pi+56S65LmL5YmN6KKr6ZqQ6JeP55qE55WM6Z2iXHJcbiAgICAgKiBAcGFyYW0gcGFOb2RlIOaMh+WumnVp55WM6Z2i55qE54i26IqC54K577yM5Y+v6IO95Lya5a+86Ie0Y3VyVG9wQnVuZGxlRGF0YeWHuumUmVxyXG4gICAgICogKiBAcGFyYW0gaXNJbW1lZGlhdGVseSDmmK/lkKbnq4vliLvmiZPlvIDvvIjkuI3mkq3mlL7liqjnlLvvvIlcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb3BlblZpZXcodWlEYXRhOiBCdW5kbGVEYXRhLCBpc05ld0xheWVyOiBib29sZWFuID0gdHJ1ZSwgaXNJbW1lZGlhdGVseTogYm9vbGVhbiA9IGZhbHNlLCBwYU5vZGU6IGNjLk5vZGUgPSB0aGlzLmJvYXJkTm9kZSwgcG9zOiBjYy5WZWMyID0gY2MuVmVjMi5aRVJPKTogUHJvbWlzZTxVaUJhc2U+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdGFzayA9ICgpID0+IHRoaXMucmVmcmVzaE9wZXJhdGlvblF1ZXVlKHsgcHJvbWlzZTogcmVzb2x2ZSwgYnVuZGxlRGF0YTogdWlEYXRhLCBvcGVyYXRpb25UeXBlOiBVaU9wZXJhdGlvblR5cGUuT3BlbiwgaXNOZXdMYXllcjogaXNOZXdMYXllciwgcGFOb2RlOiBwYU5vZGUsIHBvczogcG9zLCBpc0ltbWVkaWF0ZWx5OiBpc0ltbWVkaWF0ZWx5IH0pO1xyXG4gICAgICAgICAgICB0aGlzLmN1clRhc2sgPSB0aGlzLmN1clRhc2sudGhlbih0YXNrKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuWFs+mXreagiOmhtueVjOmdolxyXG4gICAgICogQHBhcmFtIGlzSW1tZWRpYXRlbHkg5piv5ZCm56uL5Yi75YWz6Zet77yI5LiN5pKt5pS+5Yqo55S777yJXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbG9zZVZpZXcoaXNJbW1lZGlhdGVseTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmlld1N0YWNrLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlICYmIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHRhc2sgPSAoKSA9PiB0aGlzLnJlZnJlc2hPcGVyYXRpb25RdWV1ZSh7IHByb21pc2U6IHJlc29sdmUsIGJ1bmRsZURhdGE6IHRoaXMudmlld1N0YWNrW3RoaXMudmlld1N0YWNrLmxlbmd0aCAtIDFdLmJ1bmRsZURhdGEsIG9wZXJhdGlvblR5cGU6IFVpT3BlcmF0aW9uVHlwZS5DbG9zZSwgaXNOZXdMYXllcjogbnVsbCwgcGFOb2RlOiBudWxsLCBwb3M6IG51bGwsIGlzSW1tZWRpYXRlbHk6IGlzSW1tZWRpYXRlbHkgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyVGFzayA9IHRoaXMuY3VyVGFzay50aGVuKHRhc2spO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5YWz6Zet5oyH5a6a55WM6Z2iIOWmguaenOeVjOmdouWtmOWcqO+8jOS8muWFiOWwhueVjOmdouenu+WKqOWIsOagiOmhtu+8jOeEtuWQjuenu+mZpCAqL1xyXG4gICAgcHVibGljIGNsb3NlVmlld0J5QnVuZGxlRGF0YShidW5kbGVEYXRhOiBCdW5kbGVEYXRhLCBpc0ltbWVkaWF0ZWx5OiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZXdTdGFjay5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSAmJiByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMudmlld1N0YWNrLmZpbmRJbmRleCh2ID0+IHYuYnVuZGxlRGF0YS51cmwgPT0gYnVuZGxlRGF0YS51cmwpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLmnKrmib7liLDnlYzpnaIgXCIsIGJ1bmRsZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSAmJiByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBzdGFja0RhdGEgPSB0aGlzLnZpZXdTdGFjay5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXdTdGFjay5wdXNoKHN0YWNrRGF0YVswXSk7XHJcbiAgICAgICAgICAgIGxldCB0YXNrID0gKCkgPT4gdGhpcy5yZWZyZXNoT3BlcmF0aW9uUXVldWUoeyBwcm9taXNlOiByZXNvbHZlLCBidW5kbGVEYXRhOiB0aGlzLnZpZXdTdGFja1t0aGlzLnZpZXdTdGFjay5sZW5ndGggLSAxXS5idW5kbGVEYXRhLCBvcGVyYXRpb25UeXBlOiBVaU9wZXJhdGlvblR5cGUuQ2xvc2UsIGlzTmV3TGF5ZXI6IG51bGwsIHBhTm9kZTogbnVsbCwgcG9zOiBudWxsLCBpc0ltbWVkaWF0ZWx5OiBpc0ltbWVkaWF0ZWx5IH0pO1xyXG4gICAgICAgICAgICB0aGlzLmN1clRhc2sgPSB0aGlzLmN1clRhc2sudGhlbih0YXNrKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hPcGVyYXRpb25RdWV1ZShpbmZvOiB7IHByb21pc2U6IGFueSwgYnVuZGxlRGF0YTogQnVuZGxlRGF0YSwgb3BlcmF0aW9uVHlwZTogVWlPcGVyYXRpb25UeXBlLCBpc05ld0xheWVyOiBib29sZWFuLCBwYU5vZGU6IGNjLk5vZGUsIHBvczogY2MuVmVjMiwgaXNJbW1lZGlhdGVseTogYm9vbGVhbiB9KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmlld1N0YWNrLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmZvLm9wZXJhdGlvblR5cGUgPT0gVWlPcGVyYXRpb25UeXBlLk9wZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmlldyA9IHRoaXMudmlld1N0YWNrLmZpbmQodiA9PiB2LmJ1bmRsZURhdGEudXJsID09IGluZm8uYnVuZGxlRGF0YS51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5b2T5YmN6KaB5omT5byA55qE55WM6Z2i5bey57uP5omT5byAXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm8ucHJvbWlzZSAmJiBpbmZvLnByb21pc2Uodmlldy51aUJhc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLnlYzpnaLlt7Lnu4/miZPlvIAgXCIsIGluZm8uYnVuZGxlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5mby5vcGVyYXRpb25UeXBlID09IFVpT3BlcmF0aW9uVHlwZS5DbG9zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFja0RhdGEgPSB0aGlzLnZpZXdTdGFja1t0aGlzLnZpZXdTdGFjay5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2tEYXRhLmJ1bmRsZURhdGEudXJsICE9IGluZm8uYnVuZGxlRGF0YS51cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/ml6Dms5XlhbPpl61cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mby5wcm9taXNlICYmIGluZm8ucHJvbWlzZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi5b2T5YmN6KaB5YWz6Zet55qE55WM6Z2i5LiN5piv5pyA5LiK5bGC5peg5rOV5YWz6ZetIFwiLCBpbmZvLmJ1bmRsZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vcGVyYXRpb25WaWV3UXVldWUucHVzaChpbmZvKTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1NjZW5lU3RhY2soKS50aGVuKHJlc29sdmUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1NjZW5lU3RhY2soKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IG9iaiA9IHRoaXMub3BlcmF0aW9uVmlld1F1ZXVlLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIGlmICghb2JqKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc1VpQmxvY2tJbnB1dCA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCB1aURhdGEgPSBvYmouYnVuZGxlRGF0YTtcclxuICAgICAgICAgICAgbGV0IHVpUmVzb2x2ZSA9IG9iai5wcm9taXNlO1xyXG4gICAgICAgICAgICBpZiAob2JqLm9wZXJhdGlvblR5cGUgPT0gVWlPcGVyYXRpb25UeXBlLk9wZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VWkodWlEYXRhKS50aGVuKChub2RlOiBjYy5Ob2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVpQmFzZSA9IG5vZGUuZ2V0Q29tcG9uZW50KFVpQmFzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF1aUJhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi5rKh5pyJ6I635Y+W5YiwYmFzZVVpLS0tIFwiLCB1aURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1aVJlc29sdmUgJiYgdWlSZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlICYmIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNVaUJsb2NrSW5wdXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBhcmVudChvYmoucGFOb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKG9iai5wb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0U2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmlld1N0YWNrLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvYmouaXNOZXdMYXllcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3U3RhY2tbdGhpcy52aWV3U3RhY2subGVuZ3RoIC0gMV0udWlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3U3RhY2tbdGhpcy52aWV3U3RhY2subGVuZ3RoIC0gMV0udWlCYXNlLm9uQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlld1N0YWNrW3RoaXMudmlld1N0YWNrLmxlbmd0aCAtIDFdLnVpQmFzZS5vbkNvdmVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdWlCYXNlLm9uT3BlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyVG9wQnVuZGxlRGF0YSA9IHsgZGF0YTogdWlEYXRhLCB1aUJhc2U6IHVpQmFzZSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld1N0YWNrLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2LnVpQmFzZS5iZ01hc2tOb2RlKSB2LnVpQmFzZS5iZ01hc2tOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVpQmFzZS5iZ01hc2tOb2RlKSB1aUJhc2UuYmdNYXNrTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGFja0RhdGEgPSBuZXcgU3RhY2tEYXRhKHVpRGF0YSwgdWlCYXNlLCBub2RlLCBvYmouaXNOZXdMYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3U3RhY2sucHVzaChzdGFja0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5wcm9taXNlICYmIG9iai5wcm9taXNlKHVpQmFzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdWlCYXNlLm9wZW5BbmltTm9kZSAmJiB1aUJhc2Uub3BlbkFuaW1Ob2RlLnNldFNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHVpQmFzZS5vcGVuUHJlcGFyZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpT3BlbkFuaW0oc3RhY2tEYXRhLCBvYmouaXNJbW1lZGlhdGVseSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aUJhc2Uub25PcGVuRmluaXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlICYmIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVWlCbG9ja0lucHV0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIueVjOmdouWKoOi9veWksei0pSBcIiwgdWlEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBvYmoucHJvbWlzZSAmJiBvYmoucHJvbWlzZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlICYmIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1VpQmxvY2tJbnB1dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChvYmoub3BlcmF0aW9uVHlwZSA9PSBVaU9wZXJhdGlvblR5cGUuQ2xvc2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpZXdTdGFjay5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5wcm9taXNlICYmIG9iai5wcm9taXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSAmJiByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNVaUJsb2NrSW5wdXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgdmlldyA9IHRoaXMudmlld1N0YWNrW3RoaXMudmlld1N0YWNrLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgdmlldy51aUJhc2Uub25DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdmlldy51aUJhc2UuY2xvc2VDYigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YWNrRGF0YSA9IG5ldyBTdGFja0RhdGEodmlldy5idW5kbGVEYXRhLCB2aWV3LnVpQmFzZSwgdmlldy51aU5vZGUsIHZpZXcuaXNOZXdMYXllcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpQ2xvc2VBbmltKHN0YWNrRGF0YSwgb2JqLmlzSW1tZWRpYXRlbHkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXcudWlCYXNlLm9uQ2xvc2VGaW5pc2goKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdTdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlY1VpKHZpZXcudWlOb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3U3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdFN0YWNrID0gdGhpcy52aWV3U3RhY2tbdGhpcy52aWV3U3RhY2subGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyVG9wQnVuZGxlRGF0YSA9IHsgZGF0YTogbGFzdFN0YWNrLmJ1bmRsZURhdGEsIHVpQmFzZTogbGFzdFN0YWNrLnVpQmFzZSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZpZXcuaXNOZXdMYXllcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFN0YWNrLnVpTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFN0YWNrLnVpQmFzZS5vbk9wZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RTdGFjay51aUJhc2Uub25VbmNvdmVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RTdGFjay51aUJhc2UuYmdNYXNrTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFN0YWNrLnVpQmFzZS5iZ01hc2tOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1clRvcEJ1bmRsZURhdGEgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvYmoucHJvbWlzZSAmJiBvYmoucHJvbWlzZSh2aWV3LnVpQmFzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSAmJiByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNVaUJsb2NrSW5wdXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdWlPcGVuQW5pbShzdGFja0RhdGE6IFN0YWNrRGF0YSwgaXNJbW1lZGlhdGVseTogYm9vbGVhbik6IFByb21pc2U8U3RhY2tEYXRhPiB7XHJcbiAgICAgICAgaWYgKCFzdGFja0RhdGEgfHwgIXN0YWNrRGF0YS51aUJhc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzSW1tZWRpYXRlbHkpIHtcclxuICAgICAgICAgICAgaWYgKHN0YWNrRGF0YS51aUJhc2Uub3BlbkFuaW1Ob2RlKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFja0RhdGEudWlCYXNlLm9wZW5BbmltTm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgc3RhY2tEYXRhLnVpQmFzZS5vcGVuQW5pbU5vZGUuc2V0U2NhbGUoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzdGFja0RhdGEudWlCYXNlLm9wZW5BbmltTm9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHN0YWNrRGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YWNrRGF0YS51aUJhc2Uub3BlbkFuaW1Ob2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICBzdGFja0RhdGEudWlCYXNlLm9wZW5BbmltTm9kZS5zZXRTY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNVaUJsb2NrSW5wdXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oc3RhY2tEYXRhLnVpQmFzZS5vcGVuQW5pbU5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMSB9LCB7IGVhc2luZzogXCJiYWNrT3V0XCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNVaUJsb2NrSW5wdXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzdGFja0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVpQ2xvc2VBbmltKHN0YWNrRGF0YTogU3RhY2tEYXRhLCBpc0ltbWVkaWF0ZWx5OiBib29sZWFuKTogUHJvbWlzZTxTdGFja0RhdGE+IHtcclxuICAgICAgICBpZiAoIXN0YWNrRGF0YSB8fCAhc3RhY2tEYXRhLnVpQmFzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNJbW1lZGlhdGVseSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXN0YWNrRGF0YS51aUJhc2Uub3BlbkFuaW1Ob2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc3RhY2tEYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGFja0RhdGEudWlCYXNlLm9wZW5BbmltTm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhY2tEYXRhLnVpQmFzZS5vcGVuQW5pbU5vZGUuc2V0U2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVWlCbG9ja0lucHV0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHN0YWNrRGF0YS51aUJhc2Uub3BlbkFuaW1Ob2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDAgfSwgeyBlYXNpbmc6IFwiYmFja0luXCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNVaUJsb2NrSW5wdXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzdGFja0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yqg6L29dWnnlYzpnaIgKi9cclxuICAgIHByaXZhdGUgZ2V0VWkoYnVuZGxlRGF0YTogQnVuZGxlRGF0YSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIEFiTWFuYWdlci5sb2FkQnVuZGxlUmVzV2l0Y2hUaW1lb3V0KGJ1bmRsZURhdGEuYnVuZGxlLCBidW5kbGVEYXRhLnVybCwgY2MuUHJlZmFiKS50aGVuKChwcmUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcInByZSBcIiwgcHJlKVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShjYy5pbnN0YW50aWF0ZShwcmUpKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwicmVqZWN0XCIpXHJcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKirlm57mlLZ1aeeVjOmdoiAqL1xyXG4gICAgcHJpdmF0ZSBkZWNVaSh1aU5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICB1aU5vZGUud2FsaygoY05vZGU6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGFiUmVmID0gY05vZGUuZ2V0Q29tcG9uZW50KEFiUmVmKTtcclxuICAgICAgICAgICAgaWYgKGFiUmVmKSBhYlJlZi5kZWNSZWYoKTtcclxuICAgICAgICB9LCBudWxsKVxyXG4gICAgICAgIEFiTWFuYWdlci5kZWNSZWYodWlOb2RlLl9wcmVmYWIuYXNzZXQuX3V1aWQpO1xyXG4gICAgICAgIHVpTm9kZS5yZW1vdmVGcm9tUGFyZW50KGZhbHNlKTtcclxuICAgICAgICB1aU5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWo5bGP6buR6Imy6YGu572p5Yqo55S7IOa4kOaYvi0+5riQ6ZqQXHJcbiAgICAgKiBAcGFyYW0gdGltZSDliqjnlLvml7bpl7RcclxuICAgICAqIEBwYXJhbSBtaWRDYiDlsY/luZXlrozlhajlj5jpu5Hml7bnmoTlm57osINcclxuICAgICAqIEBwYXJhbSBlbmRDYiDliqjnlLvnu5PmnZ/nmoTlm57osINcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd01hc2tBbmltKHRpbWU6IG51bWJlciwgbWlkQ2I6ICgpID0+IHZvaWQgPSBudWxsLCBlbmRDYjogKCkgPT4gdm9pZCA9IG51bGwpIHtcclxuICAgICAgICBpZiAodGhpcy5pc09uTWFza0FuaW0pIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzT25NYXNrQW5pbSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc1VpQmxvY2tJbnB1dCA9IHRydWU7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5tYXNrTm9kZSlcclxuICAgICAgICAgICAgLnRvKHRpbWUsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG1pZENiICYmIG1pZENiKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50byh0aW1lLCB7IG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZW5kQ2IgJiYgZW5kQ2IoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1VpQmxvY2tJbnB1dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc09uTWFza0FuaW0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFqOWxj+a4kOaYvuWKqOeUu1xyXG4gICAgICogQHBhcmFtIGNiIOWKqOeUu+WujOaIkOWbnuiwg1xyXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIOWKqOeUu+aXtumVv1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93TWFzayhjYj86ICgpID0+IHZvaWQsIGR1cmF0aW9uID0gMC41KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPbk1hc2tBbmltKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc09uTWFza0FuaW0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNVaUJsb2NrSW5wdXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWFza05vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm1hc2tOb2RlKVxyXG4gICAgICAgICAgICAudG8oZHVyYXRpb24sIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNPbk1hc2tBbmltID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFqOWxj+a4kOmakOWKqOeUu1xyXG4gICAgICogQHBhcmFtIGNiIOWKqOeUu+WujOaIkOWbnuiwg1xyXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIOWKqOeUu+aXtumVv1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoaWRlTWFzayhjYj86ICgpID0+IHZvaWQsIGR1cmF0aW9uID0gMC41KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPbk1hc2tBbmltKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc09uTWFza0FuaW0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWFza05vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm1hc2tOb2RlKVxyXG4gICAgICAgICAgICAudG8oZHVyYXRpb24sIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVWlCbG9ja0lucHV0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzT25NYXNrQW5pbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFja0RhdGEge1xyXG5cclxuICAgIHB1YmxpYyBidW5kbGVEYXRhOiBCdW5kbGVEYXRhID0gbnVsbDtcclxuICAgIHB1YmxpYyB1aUJhc2U6IFVpQmFzZSA9IG51bGw7XHJcbiAgICBwdWJsaWMgdWlOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBpc05ld0xheWVyOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihidW5kbGVEYXRhOiBCdW5kbGVEYXRhLCB1aUJhc2U6IFVpQmFzZSwgdWlOb2RlOiBjYy5Ob2RlLCBpc05ld0xheWVyOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5idW5kbGVEYXRhID0gYnVuZGxlRGF0YTtcclxuICAgICAgICB0aGlzLnVpQmFzZSA9IHVpQmFzZTtcclxuICAgICAgICB0aGlzLnVpTm9kZSA9IHVpTm9kZTtcclxuICAgICAgICB0aGlzLmlzTmV3TGF5ZXIgPSBpc05ld0xheWVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBVaVR5cGUge1xyXG4gICAgQk9BUkQsXHJcbiAgICBESUFMT0csXHJcbiAgICBQT1BVUCxcclxuICAgIFNDRU5FXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFVpT3BlcmF0aW9uVHlwZSB7XHJcbiAgICBPcGVuLFxyXG4gICAgQ2xvc2VcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/tool/OpacityAnim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd2a3dOk2w5ATK7c3rQFN8me', 'OpacityAnim');
// homePage/script/tool/OpacityAnim.ts

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
var OpacityAnim = /** @class */ (function (_super) {
    __extends(OpacityAnim, _super);
    function OpacityAnim() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animTime = 1;
        _this.delayTime = 1;
        _this.tarNum = 120;
        _this.initNum = 255;
        _this.playOnEnable = false;
        return _this;
    }
    OpacityAnim.prototype.onEnable = function () {
        if (this.playOnEnable) {
            this.init();
        }
    };
    OpacityAnim.prototype.init = function () {
        this.node.stopAllActions();
        this.node.opacity = this.initNum;
        cc.tween(this.node)
            .repeatForever(cc.tween()
            .to(this.animTime, { opacity: this.tarNum })
            .delay(this.delayTime)
            .to(this.animTime, { opacity: this.initNum }))
            .start();
    };
    __decorate([
        property({ displayName: "动画时长" })
    ], OpacityAnim.prototype, "animTime", void 0);
    __decorate([
        property({ displayName: "等待时长" })
    ], OpacityAnim.prototype, "delayTime", void 0);
    __decorate([
        property({ displayName: "目标值" })
    ], OpacityAnim.prototype, "tarNum", void 0);
    __decorate([
        property({ displayName: "初始值" })
    ], OpacityAnim.prototype, "initNum", void 0);
    __decorate([
        property
    ], OpacityAnim.prototype, "playOnEnable", void 0);
    OpacityAnim = __decorate([
        ccclass
    ], OpacityAnim);
    return OpacityAnim;
}(cc.Component));
exports.default = OpacityAnim;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcdG9vbFxcT3BhY2l0eUFuaW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFtQ0M7UUFoQ0csY0FBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBR3RCLFlBQU0sR0FBVyxHQUFHLENBQUM7UUFHckIsYUFBTyxHQUFXLEdBQUcsQ0FBQztRQUd0QixrQkFBWSxHQUFZLEtBQUssQ0FBQzs7SUFvQmxDLENBQUM7SUFsQmEsOEJBQVEsR0FBbEI7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBRU0sMEJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxhQUFhLENBQ1YsRUFBRSxDQUFDLEtBQUssRUFBRTthQUNMLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUMzQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUNyQixFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FDcEQ7YUFDQSxLQUFLLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBL0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDO2lEQUNiO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDO2tEQUNaO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDOytDQUNaO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDO2dEQUNYO0lBR3RCO1FBREMsUUFBUTtxREFDcUI7SUFmYixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBbUMvQjtJQUFELGtCQUFDO0NBbkNELEFBbUNDLENBbkN3QyxFQUFFLENBQUMsU0FBUyxHQW1DcEQ7a0JBbkNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcGFjaXR5QW5pbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5Yqo55S75pe26ZW/XCIgfSlcclxuICAgIGFuaW1UaW1lOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuetieW+heaXtumVv1wiIH0pXHJcbiAgICBkZWxheVRpbWU6IG51bWJlciA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi55uu5qCH5YC8XCIgfSlcclxuICAgIHRhck51bTogbnVtYmVyID0gMTIwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuWIneWni+WAvFwiIH0pXHJcbiAgICBpbml0TnVtOiBudW1iZXIgPSAyNTU7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwbGF5T25FbmFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheU9uRW5hYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IHRoaXMuaW5pdE51bTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIC50byh0aGlzLmFuaW1UaW1lLCB7IG9wYWNpdHk6IHRoaXMudGFyTnVtIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KHRoaXMuZGVsYXlUaW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIC50byh0aGlzLmFuaW1UaW1lLCB7IG9wYWNpdHk6IHRoaXMuaW5pdE51bSB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/tool/FloatAnim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcdG9vbFxcRmxvYXRBbmltLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBOEJDO1FBM0JHLFVBQUksR0FBVyxDQUFDLENBQUM7UUFHakIsU0FBRyxHQUFXLEVBQUUsQ0FBQztRQUVULFlBQU0sR0FBWSxJQUFJLENBQUM7O0lBc0JuQyxDQUFDO0lBcEJHLDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVTLDRCQUFRLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxhQUFhLENBQ1YsRUFBRSxDQUFDLEtBQUssRUFBRTthQUNMLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7YUFDOUQsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDNUQsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7YUFDN0QsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUNyRTthQUNBLEtBQUssRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFFUyw2QkFBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBMUJEO1FBREMsUUFBUTsyQ0FDUTtJQUdqQjtRQURDLFFBQVE7MENBQ1E7SUFOQSxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBOEI3QjtJQUFELGdCQUFDO0NBOUJELEFBOEJDLENBOUJzQyxFQUFFLENBQUMsU0FBUyxHQThCbEQ7a0JBOUJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdEFuaW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGltZTogbnVtYmVyID0gMjtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGRpczogbnVtYmVyID0gMTA7XHJcblxyXG4gICAgcHJpdmF0ZSBvcmlQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm9yaVBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIC5ieSh0aGlzLnRpbWUgLyA0LCB7IHk6IC10aGlzLmRpcyAvIDIgfSwgeyBlYXNpbmc6IFwic2luZU91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ5KHRoaXMudGltZSAvIDQsIHsgeTogdGhpcy5kaXMgLyAyIH0sIHsgZWFzaW5nOiBcInNpbmVJblwiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ5KHRoaXMudGltZSAvIDQsIHsgeTogdGhpcy5kaXMgLyAyIH0sIHsgZWFzaW5nOiBcInNpbmVPdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5ieSh0aGlzLnRpbWUgLyA0LCB7IHk6IC10aGlzLmRpcyAvIDIgfSwgeyBlYXNpbmc6IFwic2luZUluXCIgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMub3JpUG9zKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/tool/ScaleAnim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d525NX9bpNw6tZCOz5YlUX', 'ScaleAnim');
// homePage/script/tool/ScaleAnim.ts

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
var ScaleAnim = /** @class */ (function (_super) {
    __extends(ScaleAnim, _super);
    function ScaleAnim() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animTime = 1;
        _this.delayTime = 1;
        _this.scaleNum = 1;
        _this.initScaleNum = 1;
        _this.playOnEnable = false;
        return _this;
    }
    ScaleAnim.prototype.onEnable = function () {
        if (this.playOnEnable) {
            this.init();
        }
    };
    ScaleAnim.prototype.init = function () {
        this.node.stopAllActions();
        this.node.scale = this.initScaleNum;
        cc.tween(this.node)
            .repeatForever(cc.tween()
            .to(this.animTime, { scale: this.scaleNum * this.initScaleNum })
            .delay(this.delayTime)
            .to(this.animTime, { scale: this.initScaleNum }))
            .start();
    };
    __decorate([
        property({ displayName: "动画时长" })
    ], ScaleAnim.prototype, "animTime", void 0);
    __decorate([
        property({ displayName: "等待时长" })
    ], ScaleAnim.prototype, "delayTime", void 0);
    __decorate([
        property({ displayName: "缩放值" })
    ], ScaleAnim.prototype, "scaleNum", void 0);
    __decorate([
        property({ displayName: "初始缩放值" })
    ], ScaleAnim.prototype, "initScaleNum", void 0);
    __decorate([
        property
    ], ScaleAnim.prototype, "playOnEnable", void 0);
    ScaleAnim = __decorate([
        ccclass
    ], ScaleAnim);
    return ScaleAnim;
}(cc.Component));
exports.default = ScaleAnim;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcdG9vbFxcU2NhbGVBbmltLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBbUNDO1FBaENHLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUd0QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBR3pCLGtCQUFZLEdBQVksS0FBSyxDQUFDOztJQW9CbEMsQ0FBQztJQWxCYSw0QkFBUSxHQUFsQjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjtJQUNMLENBQUM7SUFFTSx3QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3BDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLGFBQWEsQ0FDVixFQUFFLENBQUMsS0FBSyxFQUFFO2FBQ0wsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDL0QsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDckIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQ3ZEO2FBQ0EsS0FBSyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQS9CRDtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQzsrQ0FDYjtJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztnREFDWjtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQzsrQ0FDWjtJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQzttREFDVjtJQUd6QjtRQURDLFFBQVE7bURBQ3FCO0lBZmIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQW1DN0I7SUFBRCxnQkFBQztDQW5DRCxBQW1DQyxDQW5Dc0MsRUFBRSxDQUFDLFNBQVMsR0FtQ2xEO2tCQW5Db0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhbGVBbmltIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLliqjnlLvml7bplb9cIiB9KVxyXG4gICAgYW5pbVRpbWU6IG51bWJlciA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi562J5b6F5pe26ZW/XCIgfSlcclxuICAgIGRlbGF5VGltZTogbnVtYmVyID0gMTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLnvKnmlL7lgLxcIiB9KVxyXG4gICAgc2NhbGVOdW06IG51bWJlciA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5Yid5aeL57yp5pS+5YC8XCIgfSlcclxuICAgIGluaXRTY2FsZU51bTogbnVtYmVyID0gMTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHBsYXlPbkVuYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5T25FbmFibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IHRoaXMuaW5pdFNjYWxlTnVtO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKHRoaXMuYW5pbVRpbWUsIHsgc2NhbGU6IHRoaXMuc2NhbGVOdW0gKiB0aGlzLmluaXRTY2FsZU51bSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSh0aGlzLmRlbGF5VGltZSlcclxuICAgICAgICAgICAgICAgICAgICAudG8odGhpcy5hbmltVGltZSwgeyBzY2FsZTogdGhpcy5pbml0U2NhbGVOdW0gfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/AnimCol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxBbmltQ29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBdURDO1FBcERHLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBRzFCLFlBQU0sR0FBZ0MsSUFBSSxDQUFDOztJQWlEL0MsQ0FBQztJQS9DYSx3QkFBTSxHQUFoQjtRQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0wsQ0FBQztJQUVELHNCQUFXLDhCQUFTO2FBQXBCO1lBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxDQUFBO1FBQzdHLENBQUM7OztPQUFBO0lBRU0sc0JBQUksR0FBWCxVQUFZLFFBQXVCLEVBQUUsU0FBYSxFQUFFLFNBQXFCLEVBQUUsS0FBd0I7UUFBbkcsaUJBNkJDO1FBN0JXLHlCQUFBLEVBQUEsZUFBdUI7UUFBRSwwQkFBQSxFQUFBLGFBQWE7UUFBRSwwQkFBQSxFQUFBLGFBQXFCO1FBQUUsc0JBQUEsRUFBQSxZQUF3QjtRQUMvRixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsSUFBSSxTQUFTLEdBQVcsQ0FBQyxDQUFDO1lBQzFCLElBQUksWUFBWSxHQUFHO2dCQUNmLFNBQVMsRUFBRSxDQUFDO2dCQUNaLElBQUksU0FBUyxJQUFJLFNBQVMsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFO29CQUMxQyxLQUFJLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLEtBQUksQ0FBQyxDQUFDO29CQUNyRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2pCO3FCQUFNO29CQUNILEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztvQkFDakMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7b0JBQzdELEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUNwRDtZQUNMLENBQUMsQ0FBQTtZQUNELElBQUksS0FBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixLQUFLLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzdDLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztnQkFDakMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzdELEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO2lCQUFNLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRTtnQkFDcEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO2dCQUNsQyxLQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFJLENBQUMsQ0FBQztnQkFDbkYsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO2dCQUMzRCxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDOUM7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBbkREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7MENBQ0k7SUFHMUI7UUFEQyxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQzsyQ0FDSztJQU4xQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBdUQzQjtJQUFELGNBQUM7Q0F2REQsQUF1REMsQ0F2RG9DLEVBQUUsQ0FBQyxTQUFTLEdBdURoRDtrQkF2RG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbUNvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgc3BpbmU6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KVxyXG4gICAgZHJhZ29uOiBkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkgPSBudWxsO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ29uLnByZW11bHRpcGxpZWRBbHBoYSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdvbi5lbmFibGVCYXRjaCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5zcGluZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwaW5lID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5kcmFnb24pIHtcclxuICAgICAgICAgICAgdGhpcy5kcmFnb24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaXNQbGF5aW5nKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5zcGluZSAmJiB0aGlzLnNwaW5lLmFuaW1hdGlvbiAhPSBudWxsKSB8fCAodGhpcy5kcmFnb24gJiYgdGhpcy5kcmFnb24uYW5pbWF0aW9uTmFtZSAhPSBudWxsKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5KGFuaW1OYW1lOiBzdHJpbmcgPSBudWxsLCB0aW1lU2NhbGUgPSAxLCBsb29wVGltZXM6IG51bWJlciA9IDAsIGVuZENiOiAoKSA9PiB2b2lkID0gbnVsbCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsb29wVGltZXI6IG51bWJlciA9IDA7XHJcbiAgICAgICAgICAgIGxldCBjb21wbGV0ZUNhbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb29wVGltZXIrKztcclxuICAgICAgICAgICAgICAgIGlmIChsb29wVGltZXIgPj0gbG9vcFRpbWVzIHx8IGxvb3BUaW1lcyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnb24gJiYgdGhpcy5kcmFnb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5DT01QTEVURSwgY29tcGxldGVDYWxsLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5lLnRpbWVTY2FsZSA9IHRpbWVTY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IGFuaW1OYW1lID8gYW5pbU5hbWUgOiB0aGlzLnNwaW5lLmRlZmF1bHRBbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgbmFtZSwgbG9vcFRpbWVzID09IDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwaW5lKSB7XHJcbiAgICAgICAgICAgICAgICBlbmRDYiAmJiB0aGlzLnNwaW5lLnNldEVuZExpc3RlbmVyKGVuZENiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BpbmUuc2V0Q29tcGxldGVMaXN0ZW5lcihjb21wbGV0ZUNhbGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGluZS50aW1lU2NhbGUgPSB0aW1lU2NhbGU7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IGFuaW1OYW1lID8gYW5pbU5hbWUgOiB0aGlzLnNwaW5lLmRlZmF1bHRBbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCBuYW1lLCBsb29wVGltZXMgPT0gMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kcmFnb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ29uLnRpbWVTY2FsZSA9IHRpbWVTY2FsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ29uLmFkZEV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUsIGNvbXBsZXRlQ2FsbCwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IGFuaW1OYW1lID8gYW5pbU5hbWUgOiB0aGlzLmRyYWdvbi5hbmltYXRpb25OYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnb24ucGxheUFuaW1hdGlvbihuYW1lLCBsb29wVGltZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/tool/AwayAnim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6300ddpvHdD/4tdrmKl+p2H', 'AwayAnim');
// homePage/script/tool/AwayAnim.ts

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
var AwayAnim = /** @class */ (function (_super) {
    __extends(AwayAnim, _super);
    function AwayAnim() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwayAnim.prototype.start = function () {
        this.node.stopAllActions();
        cc.tween(this.node)
            .repeatForever(cc.tween()
            .repeat(2, cc.tween()
            .to(0.2, { angle: 10 })
            .to(0.2, { angle: -10 })
            .to(0.1, { angle: 0 }))
            .delay(1))
            .start();
    };
    AwayAnim = __decorate([
        ccclass
    ], AwayAnim);
    return AwayAnim;
}(cc.Component));
exports.default = AwayAnim;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcdG9vbFxcQXdheUFuaW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBaUJBLENBQUM7SUFmYSx3QkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxhQUFhLENBQ1YsRUFBRSxDQUFDLEtBQUssRUFBRTthQUNMLE1BQU0sQ0FBQyxDQUFDLEVBQ0wsRUFBRSxDQUFDLEtBQUssRUFBRTthQUNMLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDdEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ3ZCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FDN0I7YUFDQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ2hCO2FBQ0EsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQWhCZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlCNUI7SUFBRCxlQUFDO0NBakJELEFBaUJDLENBakJxQyxFQUFFLENBQUMsU0FBUyxHQWlCakQ7a0JBakJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBd2F5QW5pbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGVhdCgyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IGFuZ2xlOiAxMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBhbmdsZTogLTEwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IGFuZ2xlOiAwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSgxKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
