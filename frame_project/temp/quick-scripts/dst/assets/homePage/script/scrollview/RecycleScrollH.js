
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