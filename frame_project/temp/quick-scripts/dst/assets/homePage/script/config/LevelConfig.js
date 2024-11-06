
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/config/LevelConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96dc97PUK9CdIgARcV+U07y', 'LevelConfig');
// homePage/script/config/LevelConfig.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelConfigMgr = void 0;
var BaseData_1 = require("../manager/BaseData");
var LevelConfig = /** @class */ (function () {
    function LevelConfig() {
    }
    return LevelConfig;
}());
exports.default = LevelConfig;
var LevelConfigMgr = /** @class */ (function (_super) {
    __extends(LevelConfigMgr, _super);
    function LevelConfigMgr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelConfigMgr.prototype.getMaxLvConfig = function () {
        return this._datas[this._datas.length - 1];
    };
    return LevelConfigMgr;
}(BaseData_1.default));
exports.LevelConfigMgr = LevelConfigMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29uZmlnXFxMZXZlbENvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0RBQWdFO0FBR2hFO0lBQUE7SUFXQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTs7QUFFRDtJQUFvQyxrQ0FBNEI7SUFBaEU7O0lBS0EsQ0FBQztJQUhHLHVDQUFjLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FMQSxBQUtDLENBTG1DLGtCQUFlLEdBS2xEO0FBTFksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEJhc2VEYXRhTWFuYWdlciwgeyBCYXNlRGF0YSB9IGZyb20gXCIuLi9tYW5hZ2VyL0Jhc2VEYXRhXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxDb25maWcgaW1wbGVtZW50cyBCYXNlRGF0YSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGljb246IHN0cmluZztcclxuICAgIHRlcnJvcl9sdjogbnVtYmVyO1xyXG4gICAgZGlmZl9sdjogbnVtYmVyO1xyXG4gICAgZGVzYzogc3RyaW5nO1xyXG4gICAgdGlwczogc3RyaW5nW107XHJcbiAgICBmYWlsU3RyOiBzdHJpbmdbXTtcclxuICAgIHN1Y1N0cjogc3RyaW5nW107XHJcbiAgICBwcm9wOiBudW1iZXJbXVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGV2ZWxDb25maWdNZ3IgZXh0ZW5kcyBCYXNlRGF0YU1hbmFnZXI8TGV2ZWxDb25maWc+IHtcclxuXHJcbiAgICBnZXRNYXhMdkNvbmZpZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YXNbdGhpcy5fZGF0YXMubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcbn0iXX0=