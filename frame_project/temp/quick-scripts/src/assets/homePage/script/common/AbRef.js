"use strict";
cc._RF.push(module, 'd043349yzJHaajf8qhl+BcM', 'AbRef');
// homePage/script/common/AbRef.ts

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
var AbManager_1 = require("../manager/AbManager");
//记录需要释放的资源
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AbRef = /** @class */ (function (_super) {
    __extends(AbRef, _super);
    function AbRef() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.assetArr = [];
        _this._spriteFrame = null;
        return _this;
    }
    Object.defineProperty(AbRef.prototype, "spriteFrame", {
        get: function () {
            return this._spriteFrame;
        },
        set: function (value) {
            this._spriteFrame = value;
            var spr = this.node.getComponent(cc.Sprite);
            if (!spr)
                return;
            spr.spriteFrame = value;
            if (value) {
                var obj = this.assetArr.find(function (v) { return v.uuid == value._uuid; });
                if (!obj) {
                    obj = { uuid: value._uuid, refCount: 0 };
                    this.assetArr.push(obj);
                }
                obj.refCount++;
            }
        },
        enumerable: false,
        configurable: true
    });
    AbRef.prototype.decRef = function () {
        this.assetArr.forEach(function (v) {
            AbManager_1.AbManager.decRef(v.uuid, v.refCount);
        });
        this.assetArr = [];
    };
    AbRef = __decorate([
        ccclass
    ], AbRef);
    return AbRef;
}(cc.Component));
exports.default = AbRef;

cc._RF.pop();