"use strict";
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