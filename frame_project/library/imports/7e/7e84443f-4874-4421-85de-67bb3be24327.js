"use strict";
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