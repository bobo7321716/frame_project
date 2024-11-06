"use strict";
cc._RF.push(module, 'e8a0fmayFFNO4UG6dYd2YpK', 'RedPointTag');
// homePage/script/common/RedPointTag.ts

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
var EventManager_1 = require("../manager/EventManager");
var RedPointManager_1 = require("../manager/RedPointManager");
var Global_1 = require("./Global");
var Util_1 = require("./Util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RedPointTag = /** @class */ (function (_super) {
    __extends(RedPointTag, _super);
    function RedPointTag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keys = [];
        _this.point = null;
        return _this;
    }
    RedPointTag.prototype.onLoad = function () {
        EventManager_1.EventManager.addListener(Global_1.EventEnum.RedPointRefresh, this.refreshRedPoint, this);
        this.point.stopAllActions();
        cc.tween(this.point)
            .repeatForever(cc.tween()
            .repeat(2, cc.tween()
            .to(0.2, { angle: 10 })
            .to(0.2, { angle: -10 })
            .to(0.1, { angle: 0 }))
            .delay(1))
            .start();
    };
    RedPointTag.prototype.onEnable = function () {
        this.refreshRedPoint();
    };
    RedPointTag.prototype.refreshRedPoint = function () {
        var sameArr = Util_1.Util.getCommonElements(RedPointManager_1.default.ins.allShowRedPoints, this.keys);
        this.point.active = sameArr.length > 0;
    };
    __decorate([
        property([cc.Integer])
    ], RedPointTag.prototype, "keys", void 0);
    __decorate([
        property(cc.Node)
    ], RedPointTag.prototype, "point", void 0);
    RedPointTag = __decorate([
        ccclass
    ], RedPointTag);
    return RedPointTag;
}(cc.Component));
exports.default = RedPointTag;

cc._RF.pop();