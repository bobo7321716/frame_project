
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