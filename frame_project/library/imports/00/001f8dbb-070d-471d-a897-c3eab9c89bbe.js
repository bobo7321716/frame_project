"use strict";
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