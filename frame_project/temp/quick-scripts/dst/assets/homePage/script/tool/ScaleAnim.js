
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/tool/ScaleAnim.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d525NX9bpNw6tZCOz5YlUX', 'ScaleAnim');
// homePage/script/tool/ScaleAnim.ts

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
var ScaleAnim = /** @class */ (function (_super) {
    __extends(ScaleAnim, _super);
    function ScaleAnim() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animTime = 1;
        _this.delayTime = 1;
        _this.scaleNum = 1;
        _this.initScaleNum = 1;
        _this.playOnEnable = false;
        return _this;
    }
    ScaleAnim.prototype.onEnable = function () {
        if (this.playOnEnable) {
            this.init();
        }
    };
    ScaleAnim.prototype.init = function () {
        this.node.stopAllActions();
        this.node.scale = this.initScaleNum;
        cc.tween(this.node)
            .repeatForever(cc.tween()
            .to(this.animTime, { scale: this.scaleNum * this.initScaleNum })
            .delay(this.delayTime)
            .to(this.animTime, { scale: this.initScaleNum }))
            .start();
    };
    __decorate([
        property({ displayName: "动画时长" })
    ], ScaleAnim.prototype, "animTime", void 0);
    __decorate([
        property({ displayName: "等待时长" })
    ], ScaleAnim.prototype, "delayTime", void 0);
    __decorate([
        property({ displayName: "缩放值" })
    ], ScaleAnim.prototype, "scaleNum", void 0);
    __decorate([
        property({ displayName: "初始缩放值" })
    ], ScaleAnim.prototype, "initScaleNum", void 0);
    __decorate([
        property
    ], ScaleAnim.prototype, "playOnEnable", void 0);
    ScaleAnim = __decorate([
        ccclass
    ], ScaleAnim);
    return ScaleAnim;
}(cc.Component));
exports.default = ScaleAnim;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcdG9vbFxcU2NhbGVBbmltLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBbUNDO1FBaENHLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUd0QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBR3pCLGtCQUFZLEdBQVksS0FBSyxDQUFDOztJQW9CbEMsQ0FBQztJQWxCYSw0QkFBUSxHQUFsQjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjtJQUNMLENBQUM7SUFFTSx3QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3BDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLGFBQWEsQ0FDVixFQUFFLENBQUMsS0FBSyxFQUFFO2FBQ0wsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDL0QsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDckIsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQ3ZEO2FBQ0EsS0FBSyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQS9CRDtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQzsrQ0FDYjtJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztnREFDWjtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQzsrQ0FDWjtJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQzttREFDVjtJQUd6QjtRQURDLFFBQVE7bURBQ3FCO0lBZmIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQW1DN0I7SUFBRCxnQkFBQztDQW5DRCxBQW1DQyxDQW5Dc0MsRUFBRSxDQUFDLFNBQVMsR0FtQ2xEO2tCQW5Db0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhbGVBbmltIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLliqjnlLvml7bplb9cIiB9KVxyXG4gICAgYW5pbVRpbWU6IG51bWJlciA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi562J5b6F5pe26ZW/XCIgfSlcclxuICAgIGRlbGF5VGltZTogbnVtYmVyID0gMTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLnvKnmlL7lgLxcIiB9KVxyXG4gICAgc2NhbGVOdW06IG51bWJlciA9IDE7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5Yid5aeL57yp5pS+5YC8XCIgfSlcclxuICAgIGluaXRTY2FsZU51bTogbnVtYmVyID0gMTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHBsYXlPbkVuYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5T25FbmFibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IHRoaXMuaW5pdFNjYWxlTnVtO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKHRoaXMuYW5pbVRpbWUsIHsgc2NhbGU6IHRoaXMuc2NhbGVOdW0gKiB0aGlzLmluaXRTY2FsZU51bSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSh0aGlzLmRlbGF5VGltZSlcclxuICAgICAgICAgICAgICAgICAgICAudG8odGhpcy5hbmltVGltZSwgeyBzY2FsZTogdGhpcy5pbml0U2NhbGVOdW0gfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==