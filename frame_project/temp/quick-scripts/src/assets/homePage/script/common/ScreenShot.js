"use strict";
cc._RF.push(module, 'e58dbFhbDtCQo4IqBQxtwEa', 'ScreenShot');
// homePage/script/common/ScreenShot.ts

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
var ScreenShot = /** @class */ (function (_super) {
    __extends(ScreenShot, _super);
    function ScreenShot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.shotNode = null;
        _this.shotTexture2D = null;
        return _this;
    }
    ScreenShot.prototype.shot = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var texture = new cc.RenderTexture();
            texture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc["gfx"].RB_FMT_D24S8); //RB_FMT_D24S8 RB_FMT_S8
            _this.camera.targetTexture = texture;
            _this.camera.enabled = true;
            _this.scheduleOnce(function () {
                var data = texture.readPixels();
                var picData = _this.filpYImage(data, texture.width, texture.height);
                var shotTexture2D = new cc.Texture2D();
                shotTexture2D.initWithData(picData, 32, texture.width, texture.height);
                _this.camera.enabled = false;
                resolve(shotTexture2D);
            }, 0);
        });
    };
    ScreenShot.prototype.filpYImage = function (data, width, height) {
        // create the data array
        var picData = new Uint8Array(width * height * 4);
        var rowBytes = width * 4;
        for (var row = 0; row < height; row++) {
            var srow = height - 1 - row;
            var start = srow * width * 4;
            var reStart = row * width * 4;
            // save the piexls data
            for (var i = 0; i < rowBytes; i++) {
                // 透明度修正
                if (i % 4 == 3) {
                    data[start + i] = Math.round(Math.sqrt(data[start + i] / 255) * 255);
                    if (data[start + i] > 220) {
                        data[start + i] = 255;
                    }
                }
                picData[reStart + i] = data[start + i];
            }
        }
        return picData;
    };
    ScreenShot.prototype.shot2 = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var texture = new cc.RenderTexture();
            texture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc["gfx"].RB_FMT_D24S8);
            _this.camera.targetTexture = texture;
            _this.camera.enabled = true;
            _this.scheduleOnce(function () {
                _this.camera.enabled = false;
                resolve(texture);
            }, 0);
        });
    };
    __decorate([
        property(cc.Camera)
    ], ScreenShot.prototype, "camera", void 0);
    ScreenShot = __decorate([
        ccclass
    ], ScreenShot);
    return ScreenShot;
}(cc.Component));
exports.default = ScreenShot;

cc._RF.pop();