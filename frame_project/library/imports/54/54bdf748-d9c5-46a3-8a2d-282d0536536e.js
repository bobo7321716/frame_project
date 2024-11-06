"use strict";
cc._RF.push(module, '54bdfdI2cVGo4otKC0FNlNu', 'BtnClickAudio');
// homePage/script/common/BtnClickAudio.ts

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
var AudioManager_1 = require("../manager/AudioManager");
var SoundPath_1 = require("./SoundPath");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BtnClickAudio = /** @class */ (function (_super) {
    __extends(BtnClickAudio, _super);
    function BtnClickAudio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.soundPath = SoundPath_1.SoundEnum.button_click;
        return _this;
    }
    BtnClickAudio.prototype.onEnable = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    };
    BtnClickAudio.prototype.onDisable = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
    };
    BtnClickAudio.prototype.onTouchStart = function () {
        var key = Object.keys(SoundPath_1.SoundEnum)[this.soundPath];
        AudioManager_1.AudioManager.ins.playEffect(SoundPath_1.SoundPath[key]);
    };
    __decorate([
        property({ type: cc.Enum(SoundPath_1.SoundEnum) })
    ], BtnClickAudio.prototype, "soundPath", void 0);
    BtnClickAudio = __decorate([
        ccclass
    ], BtnClickAudio);
    return BtnClickAudio;
}(cc.Component));
exports.default = BtnClickAudio;

cc._RF.pop();