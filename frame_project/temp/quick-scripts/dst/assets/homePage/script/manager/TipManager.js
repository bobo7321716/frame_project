
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/TipManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcVGlwTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBZ0Q7QUFDaEQsMkNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBc0RDO1FBbkRhLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUEyQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQy9DLFlBQU0sR0FBZ0IsRUFBRSxDQUFDOztJQTRDckMsQ0FBQzttQkF0RG9CLFVBQVU7SUFZM0IsMkJBQU0sR0FBTjtRQUNJLFlBQVUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFTSw0QkFBTyxHQUFkLFVBQWUsTUFBYztRQUN6QixJQUFJLEdBQUcsR0FBRyxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLHFCQUFTLENBQUMsQ0FBQztRQUM1QyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELCtCQUFVLEdBQVYsVUFBVyxTQUFvQjtRQUMzQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN6QixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUE7U0FDTDtRQUNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDVCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMxQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUIsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3JCO1NBQ0o7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFUywyQkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQTNCLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDO1lBQUUsT0FBTztRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3pCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDakIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNaO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDOztJQTdDYSxjQUFHLEdBQWUsSUFBSSxDQUFDO0lBTHJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ2dCO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ2tCO0lBTnJCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FzRDlCO0lBQUQsaUJBQUM7Q0F0REQsQUFzREMsQ0F0RHVDLEVBQUUsQ0FBQyxTQUFTLEdBc0RuRDtrQkF0RG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25UaXAgfSBmcm9tIFwiLi4vY29tbW9uL0NvbW1vblRpcFwiO1xyXG5pbXBvcnQgTXlQb29sIGZyb20gXCIuLi9jb21tb24vTXlQb29sXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlwTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcm90ZWN0ZWQgdGlwTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByb3RlY3RlZCB0aXBQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbnM6IFRpcE1hbmFnZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB0aXBOb2RlTWFwOiBNYXA8Q29tbW9uVGlwLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xyXG4gICAgcHJpdmF0ZSB0aXBBcnI6IENvbW1vblRpcFtdID0gW107XHJcblxyXG4gICAgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIFRpcE1hbmFnZXIuaW5zID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1RpcCh0aXBTdHI6IHN0cmluZykge1xyXG4gICAgICAgIHZhciB0aXAgPSBNeVBvb2wuZ2V0T2JqKHRoaXMudGlwUHJlZmFiKTtcclxuICAgICAgICB0aXAuc2V0UGFyZW50KHRoaXMudGlwTm9kZSk7XHJcbiAgICAgICAgdGlwLnkgPSAwO1xyXG4gICAgICAgIHZhciBjb21tb25UaXAgPSB0aXAuZ2V0Q29tcG9uZW50KENvbW1vblRpcCk7XHJcbiAgICAgICAgY29tbW9uVGlwLnNob3codGlwU3RyKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hUaXAoY29tbW9uVGlwKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoVGlwKGNvbW1vblRpcDogQ29tbW9uVGlwKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGlwTm9kZU1hcC5zaXplID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpcE5vZGVNYXAuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgay50b3BNb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBnYXAgPSB0aGlzLnRpcEFyci5sZW5ndGggLSAyO1xyXG4gICAgICAgIGlmIChnYXAgPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB0aXAgPSB0aGlzLnRpcEFyci5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXBOb2RlTWFwLmRlbGV0ZSh0aXApO1xyXG4gICAgICAgICAgICAgICAgdGlwLmRlc3Ryb3lTZWxmKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aXBOb2RlTWFwLnNldChjb21tb25UaXAsIERhdGUubm93KCkgKyAxMDAwKTtcclxuICAgICAgICB0aGlzLnRpcEFyci5wdXNoKGNvbW1vblRpcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudGlwTm9kZU1hcC5zaXplIDw9IDApIHJldHVybjtcclxuICAgICAgICB0aGlzLnRpcE5vZGVNYXAuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSA+PSB2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpcE5vZGVNYXAuZGVsZXRlKGspO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50aXBBcnIuaW5kZXhPZihrKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlwQXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICBrLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0gXHJcbiJdfQ==