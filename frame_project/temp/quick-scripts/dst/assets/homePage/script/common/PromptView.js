
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/PromptView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cad9a1wjk9Bo4iqW4bFO9gQ', 'PromptView');
// homePage/script/common/PromptView.ts

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
var PromptView = /** @class */ (function (_super) {
    __extends(PromptView, _super);
    function PromptView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = null;
        _this.curAnim = null;
        _this.isShowing = false;
        return _this;
    }
    PromptView.prototype.init = function (Tiptext) {
        this.text.string = Tiptext;
        this.show();
    };
    PromptView.prototype.show = function () {
        var _a;
        if (!cc.isValid(this))
            return;
        (_a = this.curAnim) === null || _a === void 0 ? void 0 : _a.stop();
        if (!this.isShowing) {
            this.node.active = true;
            this.isShowing = true;
            this.curAnim = cc.tween(this.node)
                .set({ opacity: 0 })
                .to(0.2, { opacity: 255 })
                .delay(2)
                .call(this.hide.bind(this))
                .start();
        }
        else {
            this.curAnim = cc.tween(this.node)
                .set({ opacity: 255 })
                .delay(2)
                .call(this.hide.bind(this))
                .start();
        }
    };
    PromptView.prototype.hide = function () {
        var _this = this;
        var _a;
        if (!cc.isValid(this))
            return;
        (_a = this.curAnim) === null || _a === void 0 ? void 0 : _a.stop();
        this.isShowing = false;
        this.curAnim = cc.tween(this.node)
            .to(0.2, { opacity: 0 })
            .call(function () {
            _this.node.active = false;
            _this.curAnim = null;
        })
            .start();
    };
    __decorate([
        property(cc.Label)
    ], PromptView.prototype, "text", void 0);
    PromptView = __decorate([
        ccclass
    ], PromptView);
    return PromptView;
}(cc.Component));
exports.default = PromptView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxQcm9tcHRWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBOENDO1FBNUNHLFVBQUksR0FBYSxJQUFJLENBQUM7UUFFZCxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBRyxLQUFLLENBQUM7O0lBd0M5QixDQUFDO0lBdENHLHlCQUFJLEdBQUosVUFBSyxPQUFlO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELHlCQUFJLEdBQUo7O1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTztRQUM5QixNQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLElBQUksR0FBRztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQzdCLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDbkIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztpQkFDekIsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDUixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzFCLEtBQUssRUFBRSxDQUFDO1NBQ2hCO2FBQU07WUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDN0IsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDO2lCQUNyQixLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUIsS0FBSyxFQUFFLENBQUM7U0FDaEI7SUFDTCxDQUFDO0lBRUQseUJBQUksR0FBSjtRQUFBLGlCQVdDOztRQVZHLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU87UUFDOUIsTUFBQSxJQUFJLENBQUMsT0FBTywwQ0FBRSxJQUFJLEdBQUc7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDN0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUN2QixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDekIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQTNDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNHO0lBRkwsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQThDOUI7SUFBRCxpQkFBQztDQTlDRCxBQThDQyxDQTlDdUMsRUFBRSxDQUFDLFNBQVMsR0E4Q25EO2tCQTlDb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvbXB0VmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0ZXh0OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJBbmltOiBjYy5Ud2VlbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBpc1Nob3dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBpbml0KFRpcHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGV4dC5zdHJpbmcgPSBUaXB0ZXh0O1xyXG4gICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKHRoaXMpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jdXJBbmltPy5zdG9wKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU2hvd2luZykge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1Nob3dpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmN1ckFuaW0gPSBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAuc2V0KHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgICAgICAgICAgIC5kZWxheSgyKVxyXG4gICAgICAgICAgICAgICAgLmNhbGwodGhpcy5oaWRlLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1ckFuaW0gPSBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAuc2V0KHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgICAgICAuZGVsYXkoMilcclxuICAgICAgICAgICAgICAgIC5jYWxsKHRoaXMuaGlkZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKHRoaXMpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jdXJBbmltPy5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5pc1Nob3dpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1ckFuaW0gPSBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckFuaW0gPSBudWxsO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=