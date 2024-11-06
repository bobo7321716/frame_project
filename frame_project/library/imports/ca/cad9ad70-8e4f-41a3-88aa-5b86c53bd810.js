"use strict";
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