
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