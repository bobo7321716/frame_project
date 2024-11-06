
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