
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/ScreenShot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxTY3JlZW5TaG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBK0RDO1FBNURHLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFbEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixtQkFBYSxHQUFpQixJQUFJLENBQUM7O0lBeUQ5QyxDQUFDO0lBdkRVLHlCQUFJLEdBQVg7UUFBQSxpQkFlQztRQWRHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixJQUFJLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBLHdCQUF3QjtZQUNsSCxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7WUFDcEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNoQyxJQUFJLE9BQU8sR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkUsSUFBSSxhQUFhLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFF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QkEvRG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlblNob3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBjYW1lcmE6IGNjLkNhbWVyYSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHNob3ROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBzaG90VGV4dHVyZTJEOiBjYy5UZXh0dXJlMkQgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzaG90KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcclxuICAgICAgICAgICAgdGV4dHVyZS5pbml0V2l0aFNpemUoY2MudmlzaWJsZVJlY3Qud2lkdGgsIGNjLnZpc2libGVSZWN0LmhlaWdodCwgY2NbXCJnZnhcIl0uUkJfRk1UX0QyNFM4KTsvL1JCX0ZNVF9EMjRTOCBSQl9GTVRfUzhcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEudGFyZ2V0VGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRleHR1cmUucmVhZFBpeGVscygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBpY0RhdGEgPSB0aGlzLmZpbHBZSW1hZ2UoZGF0YSwgdGV4dHVyZS53aWR0aCwgdGV4dHVyZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNob3RUZXh0dXJlMkQgPSBuZXcgY2MuVGV4dHVyZTJEKCk7XHJcbiAgICAgICAgICAgICAgICBzaG90VGV4dHVyZTJELmluaXRXaXRoRGF0YShwaWNEYXRhLCAzMiwgdGV4dHVyZS53aWR0aCwgdGV4dHVyZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShzaG90VGV4dHVyZTJEKTtcclxuICAgICAgICAgICAgfSwgMClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZpbHBZSW1hZ2UoZGF0YSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgZGF0YSBhcnJheVxyXG4gICAgICAgIGxldCBwaWNEYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KTtcclxuICAgICAgICBsZXQgcm93Qnl0ZXMgPSB3aWR0aCAqIDQ7XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgaGVpZ2h0OyByb3crKykge1xyXG4gICAgICAgICAgICBsZXQgc3JvdyA9IGhlaWdodCAtIDEgLSByb3c7XHJcbiAgICAgICAgICAgIGxldCBzdGFydCA9IHNyb3cgKiB3aWR0aCAqIDQ7XHJcbiAgICAgICAgICAgIGxldCByZVN0YXJ0ID0gcm93ICogd2lkdGggKiA0O1xyXG4gICAgICAgICAgICAvLyBzYXZlIHRoZSBwaWV4bHMgZGF0YVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0J5dGVzOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDpgI/mmI7luqbkv67mraNcclxuICAgICAgICAgICAgICAgIGlmIChpICUgNCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtzdGFydCArIGldID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoZGF0YVtzdGFydCArIGldIC8gMjU1KSAqIDI1NSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtzdGFydCArIGldID4gMjIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbc3RhcnQgKyBpXSA9IDI1NTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcGljRGF0YVtyZVN0YXJ0ICsgaV0gPSBkYXRhW3N0YXJ0ICsgaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBpY0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3QyKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcclxuXHJcbiAgICAgICAgICAgIHRleHR1cmUuaW5pdFdpdGhTaXplKGNjLnZpc2libGVSZWN0LndpZHRoLCBjYy52aXNpYmxlUmVjdC5oZWlnaHQsIGNjW1wiZ2Z4XCJdLlJCX0ZNVF9EMjRTOCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnRhcmdldFRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmEuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgfSwgMClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==