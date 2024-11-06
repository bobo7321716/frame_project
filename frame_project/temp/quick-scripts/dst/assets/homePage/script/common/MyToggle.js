
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/MyToggle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e844Q/SHREIYXeZ7s74kMn', 'MyToggle');
// homePage/script/common/MyToggle.ts

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
var MyPool_1 = require("./MyPool");
var MyToggleBtn_1 = require("./MyToggleBtn");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MyToggle = /** @class */ (function (_super) {
    __extends(MyToggle, _super);
    function MyToggle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnNodes = [];
        _this.events = [];
        _this.isHandInit = false;
        _this.toggleBtnPre = null;
        _this.isLock = false;
        return _this;
    }
    MyToggle.prototype.onLoad = function () {
        if (!this.isHandInit) {
            this.btnInit();
        }
    };
    MyToggle.prototype.btnInit = function () {
        for (var i = 0; i < this.btnNodes.length; i++) {
            var btnNode = this.btnNodes[i];
            var handler = new cc.Component.EventHandler();
            handler.target = this.node;
            handler.component = "MyToggle";
            handler.handler = "btnClick";
            handler.customEventData = i + "";
            var btn = btnNode.getComponent(cc.Button);
            btn.clickEvents.push(handler);
        }
    };
    MyToggle.prototype.handInit = function (tagArr) {
        var _this = this;
        if (tagArr.length <= 0 || !this.toggleBtnPre)
            return;
        this.btnNodes.forEach(function (v) {
            MyPool_1.default.putObj(v);
        });
        this.btnNodes = [];
        tagArr.forEach(function (v, k) {
            var btn = MyPool_1.default.getObj(_this.toggleBtnPre);
            btn.parent = _this.node;
            var btnSrc = btn.getComponent(MyToggleBtn_1.default);
            if (btnSrc) {
                btnSrc.init(v);
            }
            _this.btnNodes.push(btn);
        });
        this.btnInit();
    };
    MyToggle.prototype.btnClick = function (event, data) {
        if (this.isLock)
            return;
        this.emit(Number(data));
    };
    MyToggle.prototype.selectEmpty = function () {
        for (var i = 0; i < this.btnNodes.length; i++) {
            var btn = this.btnNodes[i];
            btn.children[1].active = false;
        }
    };
    MyToggle.prototype.emit = function (btnIndex) {
        for (var i = 0; i < this.btnNodes.length; i++) {
            var btn = this.btnNodes[i];
            btn.children[1].active = i == btnIndex;
        }
        this.events.forEach(function (value, index, array) {
            value.emit([value, btnIndex]);
        });
    };
    __decorate([
        property(cc.Node)
    ], MyToggle.prototype, "btnNodes", void 0);
    __decorate([
        property({ displayName: "点击事件", type: cc.Component.EventHandler })
    ], MyToggle.prototype, "events", void 0);
    __decorate([
        property({ displayName: "是否手动初始化" })
    ], MyToggle.prototype, "isHandInit", void 0);
    __decorate([
        property({ type: cc.Prefab, visible: function () { return this.isHandInit; } })
    ], MyToggle.prototype, "toggleBtnPre", void 0);
    MyToggle = __decorate([
        ccclass
    ], MyToggle);
    return MyToggle;
}(cc.Component));
exports.default = MyToggle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxNeVRvZ2dsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFDOUIsNkNBQXdDO0FBRWxDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBMEVDO1FBdkVHLGNBQVEsR0FBYyxFQUFFLENBQUM7UUFHekIsWUFBTSxHQUFnQyxFQUFFLENBQUM7UUFHekMsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFHNUIsa0JBQVksR0FBYyxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFZLEtBQUssQ0FBQzs7SUE0RG5DLENBQUM7SUExRGEseUJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBRUQsMEJBQU8sR0FBUDtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7WUFDL0IsT0FBTyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7WUFDN0IsT0FBTyxDQUFDLGVBQWUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2pD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QUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxnQkFBSyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztrREFDckM7SUFaZCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEU1QjtJQUFELGVBQUM7Q0ExRUQsQUEwRUMsQ0ExRXFDLEVBQUUsQ0FBQyxTQUFTLEdBMEVqRDtrQkExRW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXlQb29sIGZyb20gXCIuL015UG9vbFwiO1xyXG5pbXBvcnQgTXlUb2dnbGVCdG4gZnJvbSBcIi4vTXlUb2dnbGVCdG5cIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeVRvZ2dsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5Ob2RlczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi54K55Ye75LqL5Lu2XCIsIHR5cGU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIgfSlcclxuICAgIGV2ZW50czogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5piv5ZCm5omL5Yqo5Yid5aeL5YyWXCIgfSlcclxuICAgIGlzSGFuZEluaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5QcmVmYWIsIHZpc2libGUoKSB7IHJldHVybiB0aGlzLmlzSGFuZEluaXQgfSB9KVxyXG4gICAgdG9nZ2xlQnRuUHJlOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBpc0xvY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0hhbmRJbml0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuSW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidG5Jbml0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idG5Ob2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYnRuTm9kZSA9IHRoaXMuYnRuTm9kZXNbaV07XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgaGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuY29tcG9uZW50ID0gXCJNeVRvZ2dsZVwiO1xyXG4gICAgICAgICAgICBoYW5kbGVyLmhhbmRsZXIgPSBcImJ0bkNsaWNrXCI7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gaSArIFwiXCI7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBidG5Ob2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICBidG4uY2xpY2tFdmVudHMucHVzaChoYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZEluaXQodGFnQXJyOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIGlmICh0YWdBcnIubGVuZ3RoIDw9IDAgfHwgIXRoaXMudG9nZ2xlQnRuUHJlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5idG5Ob2Rlcy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICBNeVBvb2wucHV0T2JqKHYpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5idG5Ob2RlcyA9IFtdO1xyXG4gICAgICAgIHRhZ0Fyci5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSBNeVBvb2wuZ2V0T2JqKHRoaXMudG9nZ2xlQnRuUHJlKTtcclxuICAgICAgICAgICAgYnRuLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgbGV0IGJ0blNyYyA9IGJ0bi5nZXRDb21wb25lbnQoTXlUb2dnbGVCdG4pO1xyXG4gICAgICAgICAgICBpZiAoYnRuU3JjKSB7XHJcbiAgICAgICAgICAgICAgICBidG5TcmMuaW5pdCh2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJ0bk5vZGVzLnB1c2goYnRuKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuYnRuSW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ0bkNsaWNrKGV2ZW50LCBkYXRhOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0xvY2spIHJldHVybjtcclxuICAgICAgICB0aGlzLmVtaXQoTnVtYmVyKGRhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RFbXB0eSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnRuTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMuYnRuTm9kZXNbaV07XHJcbiAgICAgICAgICAgIGJ0bi5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW1pdChidG5JbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ0bk5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLmJ0bk5vZGVzW2ldO1xyXG4gICAgICAgICAgICBidG4uY2hpbGRyZW5bMV0uYWN0aXZlID0gaSA9PSBidG5JbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaCgodmFsdWU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsIGluZGV4OiBudW1iZXIsIGFycmF5OiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10pID0+IHtcclxuICAgICAgICAgICAgdmFsdWUuZW1pdChbdmFsdWUsIGJ0bkluZGV4XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19