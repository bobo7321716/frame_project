"use strict";
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