
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/AbRef.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxBYlJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBaUQ7QUFFakQsV0FBVztBQUNMLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBNkJDO1FBM0JHLGNBQVEsR0FBeUMsRUFBRSxDQUFDO1FBRTVDLGtCQUFZLEdBQW1CLElBQUksQ0FBQzs7SUF5QmhELENBQUM7SUF4Qkcsc0JBQVcsOEJBQVc7YUFBdEI7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQUNELFVBQXVCLEtBQXFCO1lBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsR0FBRztnQkFBRSxPQUFPO1lBQ2pCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksS0FBSyxFQUFFO2dCQUNQLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFyQixDQUFxQixDQUFDLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQ04sR0FBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDM0I7Z0JBQ0QsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ2xCO1FBQ0wsQ0FBQzs7O09BZEE7SUFnQkQsc0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUNuQixxQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUE1QmdCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0E2QnpCO0lBQUQsWUFBQztDQTdCRCxBQTZCQyxDQTdCa0MsRUFBRSxDQUFDLFNBQVMsR0E2QjlDO2tCQTdCb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFiTWFuYWdlciB9IGZyb20gXCIuLi9tYW5hZ2VyL0FiTWFuYWdlclwiO1xyXG5cclxuLy/orrDlvZXpnIDopoHph4rmlL7nmoTotYTmupBcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFiUmVmIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBhc3NldEFycjogeyB1dWlkOiBzdHJpbmcsIHJlZkNvdW50OiBudW1iZXIgfVtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIHB1YmxpYyBnZXQgc3ByaXRlRnJhbWUoKTogY2MuU3ByaXRlRnJhbWUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVGcmFtZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgc3ByaXRlRnJhbWUodmFsdWU6IGNjLlNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlRnJhbWUgPSB2YWx1ZTtcclxuICAgICAgICBsZXQgc3ByID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIGlmICghc3ByKSByZXR1cm47XHJcbiAgICAgICAgc3ByLnNwcml0ZUZyYW1lID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxldCBvYmogPSB0aGlzLmFzc2V0QXJyLmZpbmQodiA9PiB2LnV1aWQgPT0gdmFsdWUuX3V1aWQpO1xyXG4gICAgICAgICAgICBpZiAoIW9iaikge1xyXG4gICAgICAgICAgICAgICAgb2JqID0geyB1dWlkOiB2YWx1ZS5fdXVpZCwgcmVmQ291bnQ6IDAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRBcnIucHVzaChvYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9iai5yZWZDb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWNSZWYoKSB7XHJcbiAgICAgICAgdGhpcy5hc3NldEFyci5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICBBYk1hbmFnZXIuZGVjUmVmKHYudXVpZCwgdi5yZWZDb3VudCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmFzc2V0QXJyID0gW107XHJcbiAgICB9XHJcbn1cclxuIl19