
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/RedPointTag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxSZWRQb2ludFRhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBdUQ7QUFDdkQsOERBQXlEO0FBQ3pELG1DQUFxQztBQUNyQywrQkFBOEI7QUFFeEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFpQ0M7UUE5QkcsVUFBSSxHQUFhLEVBQUUsQ0FBQztRQUdwQixXQUFLLEdBQVksSUFBSSxDQUFDOztJQTJCMUIsQ0FBQztJQXpCYSw0QkFBTSxHQUFoQjtRQUNJLDJCQUFZLENBQUMsV0FBVyxDQUFDLGtCQUFTLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM1QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDZixhQUFhLENBQ1YsRUFBRSxDQUFDLEtBQUssRUFBRTthQUNMLE1BQU0sQ0FBQyxDQUFDLEVBQ0wsRUFBRSxDQUFDLEtBQUssRUFBRTthQUNMLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDdEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ3ZCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FDN0I7YUFDQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ2hCO2FBQ0EsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVTLDhCQUFRLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxxQ0FBZSxHQUFmO1FBQ0ksSUFBSSxPQUFPLEdBQUcsV0FBSSxDQUFDLGlCQUFpQixDQUFDLHlCQUFlLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBN0JEO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzZDQUNIO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0k7SUFOTCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBaUMvQjtJQUFELGtCQUFDO0NBakNELEFBaUNDLENBakN3QyxFQUFFLENBQUMsU0FBUyxHQWlDcEQ7a0JBakNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRNYW5hZ2VyIH0gZnJvbSBcIi4uL21hbmFnZXIvRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCBSZWRQb2ludE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvUmVkUG9pbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEV2ZW50RW51bSB9IGZyb20gXCIuL0dsb2JhbFwiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4vVXRpbFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZFBvaW50VGFnIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoW2NjLkludGVnZXJdKVxyXG4gICAga2V5czogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBvaW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50TWFuYWdlci5hZGRMaXN0ZW5lcihFdmVudEVudW0uUmVkUG9pbnRSZWZyZXNoLCB0aGlzLnJlZnJlc2hSZWRQb2ludCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wb2ludC5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMucG9pbnQpXHJcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBlYXQoMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBhbmdsZTogMTAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHsgYW5nbGU6IC0xMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMSwgeyBhbmdsZTogMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoUmVkUG9pbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoUmVkUG9pbnQoKSB7XHJcbiAgICAgICAgbGV0IHNhbWVBcnIgPSBVdGlsLmdldENvbW1vbkVsZW1lbnRzKFJlZFBvaW50TWFuYWdlci5pbnMuYWxsU2hvd1JlZFBvaW50cywgdGhpcy5rZXlzKTtcclxuICAgICAgICB0aGlzLnBvaW50LmFjdGl2ZSA9IHNhbWVBcnIubGVuZ3RoID4gMDtcclxuICAgIH1cclxufVxyXG4iXX0=