
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/MyToggleBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '952eaNP4uRF0Yoi/iJgUjaK', 'MyToggleBtn');
// homePage/script/common/MyToggleBtn.ts

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
var MyToggleBtn = /** @class */ (function (_super) {
    __extends(MyToggleBtn, _super);
    function MyToggleBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nameLabs = [];
        return _this;
    }
    MyToggleBtn.prototype.init = function (name) {
        if (this.nameLabs.length > 0) {
            this.nameLabs.forEach(function (v) {
                v.string = name;
            });
        }
    };
    __decorate([
        property(cc.Label)
    ], MyToggleBtn.prototype, "nameLabs", void 0);
    MyToggleBtn = __decorate([
        ccclass
    ], MyToggleBtn);
    return MyToggleBtn;
}(cc.Component));
exports.default = MyToggleBtn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxNeVRvZ2dsZUJ0bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQVlDO1FBVEcsY0FBUSxHQUFlLEVBQUUsQ0FBQzs7SUFTOUIsQ0FBQztJQVBHLDBCQUFJLEdBQUosVUFBSyxJQUFZO1FBQ2IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUNuQixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQTtTQUNMO0lBQ0wsQ0FBQztJQVJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ087SUFIVCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBWS9CO0lBQUQsa0JBQUM7Q0FaRCxBQVlDLENBWndDLEVBQUUsQ0FBQyxTQUFTLEdBWXBEO2tCQVpvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVRvZ2dsZUJ0biBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbmFtZUxhYnM6IGNjLkxhYmVsW10gPSBbXTtcclxuXHJcbiAgICBpbml0KG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLm5hbWVMYWJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lTGFicy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgdi5zdHJpbmcgPSBuYW1lO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=