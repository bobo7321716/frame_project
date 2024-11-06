
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/tool/FloatAnim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2fbfdb9I09OybjGLE2zftWf', 'FloatAnim');
// homePage/script/tool/FloatAnim.ts

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
var FloatAnim = /** @class */ (function (_super) {
    __extends(FloatAnim, _super);
    function FloatAnim() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.time = 2;
        _this.dis = 10;
        _this.oriPos = null;
        return _this;
    }
    FloatAnim.prototype.onLoad = function () {
        this.oriPos = this.node.getPosition();
    };
    FloatAnim.prototype.onEnable = function () {
        this.node.stopAllActions();
        cc.tween(this.node)
            .repeatForever(cc.tween()
            .by(this.time / 4, { y: -this.dis / 2 }, { easing: "sineOut" })
            .by(this.time / 4, { y: this.dis / 2 }, { easing: "sineIn" })
            .by(this.time / 4, { y: this.dis / 2 }, { easing: "sineOut" })
            .by(this.time / 4, { y: -this.dis / 2 }, { easing: "sineIn" }))
            .start();
    };
    FloatAnim.prototype.onDisable = function () {
        this.node.setPosition(this.oriPos);
    };
    __decorate([
        property
    ], FloatAnim.prototype, "time", void 0);
    __decorate([
        property
    ], FloatAnim.prototype, "dis", void 0);
    FloatAnim = __decorate([
        ccclass
    ], FloatAnim);
    return FloatAnim;
}(cc.Component));
exports.default = FloatAnim;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcdG9vbFxcRmxvYXRBbmltLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBOEJDO1FBM0JHLFVBQUksR0FBVyxDQUFDLENBQUM7UUFHakIsU0FBRyxHQUFXLEVBQUUsQ0FBQztRQUVULFlBQU0sR0FBWSxJQUFJLENBQUM7O0lBc0JuQyxDQUFDO0lBcEJHLDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVTLDRCQUFRLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxhQUFhLENBQ1YsRUFBRSxDQUFDLEtBQUssRUFBRTthQUNMLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7YUFDOUQsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDNUQsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7YUFDN0QsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUNyRTthQUNBLEtBQUssRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUFFUyw2QkFBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBMUJEO1FBREMsUUFBUTsyQ0FDUTtJQUdqQjtRQURDLFFBQVE7MENBQ1E7SUFOQSxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBOEI3QjtJQUFELGdCQUFDO0NBOUJELEFBOEJDLENBOUJzQyxFQUFFLENBQUMsU0FBUyxHQThCbEQ7a0JBOUJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG9hdEFuaW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGltZTogbnVtYmVyID0gMjtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIGRpczogbnVtYmVyID0gMTA7XHJcblxyXG4gICAgcHJpdmF0ZSBvcmlQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm9yaVBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIC5ieSh0aGlzLnRpbWUgLyA0LCB7IHk6IC10aGlzLmRpcyAvIDIgfSwgeyBlYXNpbmc6IFwic2luZU91dFwiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ5KHRoaXMudGltZSAvIDQsIHsgeTogdGhpcy5kaXMgLyAyIH0sIHsgZWFzaW5nOiBcInNpbmVJblwiIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ5KHRoaXMudGltZSAvIDQsIHsgeTogdGhpcy5kaXMgLyAyIH0sIHsgZWFzaW5nOiBcInNpbmVPdXRcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5ieSh0aGlzLnRpbWUgLyA0LCB7IHk6IC10aGlzLmRpcyAvIDIgfSwgeyBlYXNpbmc6IFwic2luZUluXCIgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMub3JpUG9zKTtcclxuICAgIH1cclxufVxyXG4iXX0=