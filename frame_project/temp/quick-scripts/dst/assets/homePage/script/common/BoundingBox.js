
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/BoundingBox.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53e92nXNnVD6IEIT7cAAplW', 'BoundingBox');
// homePage/script/common/BoundingBox.ts

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
var BoundingBox = /** @class */ (function (_super) {
    __extends(BoundingBox, _super);
    function BoundingBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boundingBox = null;
        return _this;
    }
    BoundingBox.prototype.onDisable = function () {
        this.boundingBox = null;
    };
    BoundingBox.prototype.getBoundingBoxToWorld = function () {
        if (!this.boundingBox) {
            this.boundingBox = this.node.getBoundingBoxToWorld();
        }
        return this.boundingBox;
    };
    BoundingBox = __decorate([
        ccclass
    ], BoundingBox);
    return BoundingBox;
}(cc.Component));
exports.default = BoundingBox;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxCb3VuZGluZ0JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQWNDO1FBWlcsaUJBQVcsR0FBWSxJQUFJLENBQUM7O0lBWXhDLENBQUM7SUFWYSwrQkFBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCwyQ0FBcUIsR0FBckI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUN4RDtRQUNELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBYmdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FjL0I7SUFBRCxrQkFBQztDQWRELEFBY0MsQ0Fkd0MsRUFBRSxDQUFDLFNBQVMsR0FjcEQ7a0JBZG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kaW5nQm94IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGJvdW5kaW5nQm94OiBjYy5SZWN0ID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYm91bmRpbmdCb3ggPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJvdW5kaW5nQm94VG9Xb3JsZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYm91bmRpbmdCb3gpIHtcclxuICAgICAgICAgICAgdGhpcy5ib3VuZGluZ0JveCA9IHRoaXMubm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm91bmRpbmdCb3g7XHJcbiAgICB9XHJcbn1cclxuIl19