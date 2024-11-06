
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/CommonTip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f5b3ZAUeVMlZ2R53GCShZd', 'CommonTip');
// homePage/script/common/CommonTip.ts

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
exports.CommonTip = void 0;
var AbManager_1 = require("../manager/AbManager");
var BundleName_1 = require("./BundleName");
var MyPool_1 = require("./MyPool");
var Util_1 = require("./Util");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CommonTip = /** @class */ (function (_super) {
    __extends(CommonTip, _super);
    function CommonTip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tipText = null;
        _this.isOnAnim = false;
        return _this;
    }
    CommonTip.prototype.init = function () {
        var _this = this;
        return AbManager_1.AbManager.loadBundleRes(BundleName_1.BundleName.Font, "/方正隶二简体", cc.Font).then(function (font) {
            if (!Util_1.Util.isValid(_this.node))
                return;
            _this.tipText.font = font;
        });
    };
    /**
     * 显示提示框
     * @param tipInfo 需要显示的文字信息
     */
    CommonTip.prototype.show = function (tipInfo) {
        var _this = this;
        if (tipInfo == null) {
            return;
        }
        this.init().then(function () {
            _this.node.opacity = 255;
            _this.tipText.string = tipInfo;
            _this.isOnAnim = false;
            _this.tipText._forceUpdateRenderData();
            if (_this.tipText.node.width >= 500) {
                _this.tipText.node.width = 500;
                _this.tipText.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
                _this.tipText._forceUpdateRenderData();
            }
            var width = _this.tipText.node.width + 100;
            var height = _this.tipText.node.height + 30;
            _this.node.setContentSize(width, height);
            _this.scheduleOnce(function () {
                _this.destroySelf();
            }, 3);
        });
    };
    CommonTip.prototype.animEndCall = function () {
        this.isOnAnim = false;
    };
    CommonTip.prototype.hide = function () {
        var _this = this;
        var hideAnim = function () {
            cc.tween(_this.node)
                .by(0.5, { y: 200, opacity: -255 })
                .removeSelf()
                .start();
        };
        if (this.isOnAnim) {
            this.animEndCall = function () {
                hideAnim();
            };
        }
        else {
            this.isOnAnim = true;
            hideAnim();
        }
    };
    CommonTip.prototype.topMove = function () {
        if (this.isOnAnim) {
            return;
        }
        this.isOnAnim = true;
        cc.tween(this.node)
            .by(0.1, { y: this.node.height + 10 })
            .call(this.animEndCall.bind(this))
            .start();
    };
    CommonTip.prototype.destroySelf = function () {
        this.unscheduleAllCallbacks();
        this.tipText.string = "";
        this.node.stopAllActions();
        this.isOnAnim = false;
        MyPool_1.default.putObj(this.node);
    };
    __decorate([
        property({
            type: cc.Label
        })
    ], CommonTip.prototype, "tipText", void 0);
    CommonTip = __decorate([
        ccclass
    ], CommonTip);
    return CommonTip;
}(cc.Component));
exports.CommonTip = CommonTip;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxDb21tb25UaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUFpRDtBQUNqRCwyQ0FBMEM7QUFDMUMsbUNBQThCO0FBQzlCLCtCQUE4QjtBQUV4QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQiw2QkFBWTtJQUEzQztRQUFBLHFFQW9GQztRQS9FYSxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBWSxLQUFLLENBQUM7O0lBNkV0QyxDQUFDO0lBM0VHLHdCQUFJLEdBQUo7UUFBQSxpQkFLQztRQUpHLE9BQU8scUJBQVMsQ0FBQyxhQUFhLENBQUMsdUJBQVUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQzFFLElBQUksQ0FBQyxXQUFJLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsT0FBTztZQUNyQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsd0JBQUksR0FBSixVQUFLLE9BQWU7UUFBcEIsaUJBdUJDO1FBdEJHLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtZQUNqQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2IsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztZQUM5QixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZ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IjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYk1hbmFnZXIgfSBmcm9tIFwiLi4vbWFuYWdlci9BYk1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQnVuZGxlTmFtZSB9IGZyb20gXCIuL0J1bmRsZU5hbWVcIjtcclxuaW1wb3J0IE15UG9vbCBmcm9tIFwiLi9NeVBvb2xcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuL1V0aWxcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgQ29tbW9uVGlwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICB9KVxyXG4gICAgcHJvdGVjdGVkIHRpcFRleHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGlzT25BbmltOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICByZXR1cm4gQWJNYW5hZ2VyLmxvYWRCdW5kbGVSZXMoQnVuZGxlTmFtZS5Gb250LCBcIi/mlrnmraPpmrbkuoznroDkvZNcIiwgY2MuRm9udCkudGhlbigoZm9udCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIVV0aWwuaXNWYWxpZCh0aGlzLm5vZGUpKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMudGlwVGV4dC5mb250ID0gZm9udDtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S65o+Q56S65qGGXHJcbiAgICAgKiBAcGFyYW0gdGlwSW5mbyDpnIDopoHmmL7npLrnmoTmloflrZfkv6Hmga8gXHJcbiAgICAgKi9cclxuICAgIHNob3codGlwSW5mbzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRpcEluZm8gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgdGhpcy50aXBUZXh0LnN0cmluZyA9IHRpcEluZm87XHJcbiAgICAgICAgICAgIHRoaXMuaXNPbkFuaW0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICh0aGlzLnRpcFRleHQgYXMgYW55KS5fZm9yY2VVcGRhdGVSZW5kZXJEYXRhKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpcFRleHQubm9kZS53aWR0aCA+PSA1MDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlwVGV4dC5ub2RlLndpZHRoID0gNTAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXBUZXh0Lm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuUkVTSVpFX0hFSUdIVDtcclxuICAgICAgICAgICAgICAgICh0aGlzLnRpcFRleHQgYXMgYW55KS5fZm9yY2VVcGRhdGVSZW5kZXJEYXRhKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IHRoaXMudGlwVGV4dC5ub2RlLndpZHRoICsgMTAwO1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy50aXBUZXh0Lm5vZGUuaGVpZ2h0ICsgMzA7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95U2VsZigpO1xyXG4gICAgICAgICAgICB9LCAzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYW5pbUVuZENhbGwoKSB7XHJcbiAgICAgICAgdGhpcy5pc09uQW5pbSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgbGV0IGhpZGVBbmltID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAuYnkoMC41LCB7IHk6IDIwMCwgb3BhY2l0eTogLTI1NSB9KVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZVNlbGYoKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPbkFuaW0pIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltRW5kQ2FsbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGhpZGVBbmltKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzT25BbmltID0gdHJ1ZTtcclxuICAgICAgICAgICAgaGlkZUFuaW0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9wTW92ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc09uQW5pbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNPbkFuaW0gPSB0cnVlO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLmJ5KDAuMSwgeyB5OiB0aGlzLm5vZGUuaGVpZ2h0ICsgMTAgfSlcclxuICAgICAgICAgICAgLmNhbGwodGhpcy5hbmltRW5kQ2FsbC5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3lTZWxmKCkge1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgIHRoaXMudGlwVGV4dC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuaXNPbkFuaW0gPSBmYWxzZTtcclxuICAgICAgICBNeVBvb2wucHV0T2JqKHRoaXMubm9kZSk7XHJcbiAgICB9XHJcbn1cclxuIl19