"use strict";
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