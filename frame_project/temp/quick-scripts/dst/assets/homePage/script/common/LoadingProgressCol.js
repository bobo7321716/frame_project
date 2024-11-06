
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/LoadingProgressCol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ccc7VSeQVDLLnuqZDLJb+T', 'LoadingProgressCol');
// homePage/script/common/LoadingProgressCol.ts

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
/**加载进度条 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingProgressCol = /** @class */ (function (_super) {
    __extends(LoadingProgressCol, _super);
    function LoadingProgressCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progressLabel = null;
        _this.progressBar = null;
        _this.barSpr = null;
        _this.initProgress = 0;
        _this.isStart = false;
        _this.isFinish = false;
        _this.resolve = null;
        _this.curProgress = 0;
        return _this;
    }
    LoadingProgressCol.prototype.startProgressAnim = function () {
        this.node.active = true;
        this.isStart = true;
        this.curProgress = this.initProgress;
        this.progressBar.progress = this.curProgress;
        this.barSpr.fillRange = this.curProgress;
    };
    LoadingProgressCol.prototype.finishProgress = function () {
        var _this = this;
        this.isFinish = true;
        return new Promise(function (resolve, reject) {
            _this.resolve = resolve;
        });
    };
    LoadingProgressCol.prototype.update = function (dt) {
        if (!this.isStart) {
            return;
        }
        if (this.isFinish) {
            this.curProgress += 0.1;
        }
        else {
            if (this.curProgress <= 0.99) {
                this.curProgress += ((1 - this.curProgress) / 500);
            }
        }
        if (this.curProgress > 1) {
            console.log("LoadingCol.ts=>update:进度条已满");
            this.curProgress = 1;
        }
        var proLabel = this.curProgress * 100;
        var pre = Number(proLabel.toFixed(0));
        this.progressLabel.string = Math.min(99, pre) + "%";
        this.progressBar.progress = this.curProgress;
        this.barSpr.fillRange = this.curProgress;
        if (this.curProgress >= 1 && this.isStart) {
            console.log("进度条结束");
            this.isStart = false;
            this.isFinish = false;
            this.resolve();
        }
    };
    LoadingProgressCol.prototype.hideLoadNode = function () {
        this.node.active = false;
    };
    __decorate([
        property(cc.Label)
    ], LoadingProgressCol.prototype, "progressLabel", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], LoadingProgressCol.prototype, "progressBar", void 0);
    __decorate([
        property(cc.Sprite)
    ], LoadingProgressCol.prototype, "barSpr", void 0);
    __decorate([
        property
    ], LoadingProgressCol.prototype, "initProgress", void 0);
    LoadingProgressCol = __decorate([
        ccclass
    ], LoadingProgressCol);
    return LoadingProgressCol;
}(cc.Component));
exports.default = LoadingProgressCol;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxMb2FkaW5nUHJvZ3Jlc3NDb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsV0FBVztBQUNMLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBcUVDO1FBbEVXLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBR3ZDLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUduQyxZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR2pCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRXpCLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixhQUFPLEdBQVEsSUFBSSxDQUFDO1FBQ3BCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDOztJQW9EcEMsQ0FBQztJQWxEVSw4Q0FBaUIsR0FBeEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM3QyxDQUFDO0lBRU0sMkNBQWMsR0FBckI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxtQ0FBTSxHQUFiLFVBQWMsRUFBVTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLE9BQU87U0FDVjtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDO1NBQzNCO2FBQU07WUFDSCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFO2dCQUMxQixJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQ3REO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztTQUN4QjtRQUVELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3RDLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUV6QyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBRU0seUNBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQWhFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZEQUNvQjtJQUd2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzJEQUNVO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ0s7SUFHekI7UUFEQyxRQUFROzREQUN3QjtJQVpoQixrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQXFFdEM7SUFBRCx5QkFBQztDQXJFRCxBQXFFQyxDQXJFK0MsRUFBRSxDQUFDLFNBQVMsR0FxRTNEO2tCQXJFb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKuWKoOi9vei/m+W6puadoSAqL1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ1Byb2dyZXNzQ29sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHByb2dyZXNzTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwcm9ncmVzc0JhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBiYXJTcHI6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcml2YXRlIGluaXRQcm9ncmVzczogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGlzU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgaXNGaW5pc2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgcmVzb2x2ZTogYW55ID0gbnVsbDtcclxuICAgIHByaXZhdGUgY3VyUHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIHN0YXJ0UHJvZ3Jlc3NBbmltKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNTdGFydCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jdXJQcm9ncmVzcyA9IHRoaXMuaW5pdFByb2dyZXNzO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSB0aGlzLmN1clByb2dyZXNzO1xyXG4gICAgICAgIHRoaXMuYmFyU3ByLmZpbGxSYW5nZSA9IHRoaXMuY3VyUHJvZ3Jlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmlzaFByb2dyZXNzKCkge1xyXG4gICAgICAgIHRoaXMuaXNGaW5pc2ggPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNTdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0ZpbmlzaCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1clByb2dyZXNzICs9IDAuMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJQcm9ncmVzcyA8PSAwLjk5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1clByb2dyZXNzICs9ICgoMSAtIHRoaXMuY3VyUHJvZ3Jlc3MpIC8gNTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jdXJQcm9ncmVzcyA+IDEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nQ29sLnRzPT51cGRhdGU66L+b5bqm5p2h5bey5ruhXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmN1clByb2dyZXNzID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwcm9MYWJlbCA9IHRoaXMuY3VyUHJvZ3Jlc3MgKiAxMDA7XHJcbiAgICAgICAgbGV0IHByZSA9IE51bWJlcihwcm9MYWJlbC50b0ZpeGVkKDApKTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzTGFiZWwuc3RyaW5nID0gTWF0aC5taW4oOTksIHByZSkgKyBcIiVcIjtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID0gdGhpcy5jdXJQcm9ncmVzcztcclxuICAgICAgICB0aGlzLmJhclNwci5maWxsUmFuZ2UgPSB0aGlzLmN1clByb2dyZXNzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJQcm9ncmVzcyA+PSAxICYmIHRoaXMuaXNTdGFydCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIui/m+W6puadoee7k+adn1wiKVxyXG4gICAgICAgICAgICB0aGlzLmlzU3RhcnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpbmlzaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGVMb2FkTm9kZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==