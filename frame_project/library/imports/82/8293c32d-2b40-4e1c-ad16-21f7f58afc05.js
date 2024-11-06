"use strict";
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