
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/ProgressAnimCol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '306552pUgBKuonrUjN6FyVL', 'ProgressAnimCol');
// homePage/script/common/ProgressAnimCol.ts

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
var ProgressAnimCol = /** @class */ (function (_super) {
    __extends(ProgressAnimCol, _super);
    function ProgressAnimCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.proLab = null;
        _this.proBar = null;
        _this.barSpr = null;
        _this.pendant = null;
        _this.initPro = 0;
        _this.speed = 0.01;
        _this.isOnAnim = false;
        _this.target = 0;
        _this.upgradeNum = 0;
        _this.timer = 0;
        _this.upgrageCb = null;
        _this.endCb = null;
        _this.progressCb = null;
        _this._curProgress = 0;
        return _this;
    }
    Object.defineProperty(ProgressAnimCol.prototype, "curProgress", {
        get: function () {
            return this._curProgress;
        },
        set: function (value) {
            this._curProgress = value;
            this.proBar.progress = value;
            this.barSpr.fillRange = value;
            if (this.proLab) {
                // this.proLab.string = (value * 100).toFixed(0) + "%";
                this.proLab.string = Math.floor(value * 100) + "%";
            }
            if (this.pendant) {
                var fixWidth = this.barSpr.node.width - 40;
                this.pendant.x = -fixWidth / 2 + value * fixWidth;
            }
            this.progressCb && this.progressCb(value);
        },
        enumerable: false,
        configurable: true
    });
    ProgressAnimCol.prototype.init = function () {
        this.curProgress = this.initPro;
        this.isOnAnim = false;
        this.target = null;
    };
    ProgressAnimCol.prototype.setProgress = function (value) {
        this.isOnAnim = false;
        this.curProgress = value;
    };
    ProgressAnimCol.prototype.progressAnim = function (targetPro, upgradeNum, upgrageCb, endCb, progressCb) {
        if (upgradeNum === void 0) { upgradeNum = 0; }
        if (upgrageCb === void 0) { upgrageCb = null; }
        if (endCb === void 0) { endCb = null; }
        if (progressCb === void 0) { progressCb = null; }
        this.upgradeNum = upgradeNum;
        this.upgrageCb = upgrageCb;
        this.endCb = endCb;
        this.progressCb = progressCb;
        if (this.curProgress >= targetPro && upgradeNum == 0) {
            this.endCb && this.endCb();
            this.endCb = null;
            return;
        }
        this.timer = 0;
        this.isOnAnim = true;
        this.target = targetPro;
    };
    ProgressAnimCol.prototype.update = function (dt) {
        if (!this.isOnAnim)
            return;
        this.curProgress += dt * this.speed;
        if (this.upgradeNum > 0 && this.timer < this.upgradeNum) {
            if (this.curProgress >= 1) {
                this.timer++;
                this.curProgress = 0;
                this.upgrageCb && this.upgrageCb();
            }
        }
        else {
            if (this.curProgress >= this.target) {
                this.isOnAnim = false;
                this.curProgress = this.target;
                this.target = null;
                this.endCb && this.endCb();
                this.endCb = null;
                this.upgrageCb = null;
                this.progressCb = null;
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], ProgressAnimCol.prototype, "proLab", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], ProgressAnimCol.prototype, "proBar", void 0);
    __decorate([
        property(cc.Sprite)
    ], ProgressAnimCol.prototype, "barSpr", void 0);
    __decorate([
        property(cc.Node)
    ], ProgressAnimCol.prototype, "pendant", void 0);
    __decorate([
        property
    ], ProgressAnimCol.prototype, "initPro", void 0);
    __decorate([
        property
    ], ProgressAnimCol.prototype, "speed", void 0);
    ProgressAnimCol = __decorate([
        ccclass
    ], ProgressAnimCol);
    return ProgressAnimCol;
}(cc.Component));
exports.default = ProgressAnimCol;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxQcm9ncmVzc0FuaW1Db2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUErRkM7UUE1RkcsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixZQUFNLEdBQW1CLElBQUksQ0FBQztRQUc5QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBR3pCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUdwQixXQUFLLEdBQVcsSUFBSSxDQUFDO1FBRWIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsZUFBUyxHQUFlLElBQUksQ0FBQztRQUM3QixXQUFLLEdBQWUsSUFBSSxDQUFDO1FBQ3pCLGdCQUFVLEdBQTRCLElBQUksQ0FBQztRQUUzQyxrQkFBWSxHQUFXLENBQUMsQ0FBQzs7SUFtRXJDLENBQUM7SUFsRUcsc0JBQVcsd0NBQVc7YUFBdEI7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQUNELFVBQXVCLEtBQWE7WUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsdURBQXVEO2dCQUN2RCxJQUFJLENBQUMsTUFBTSxD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SUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUMxQjtTQUNKO0lBQ0wsQ0FBQztJQTNGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNLO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7bURBQ0s7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNNO0lBR3hCO1FBREMsUUFBUTtvREFDVztJQUdwQjtRQURDLFFBQVE7a0RBQ1k7SUFsQkosZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQStGbkM7SUFBRCxzQkFBQztDQS9GRCxBQStGQyxDQS9GNEMsRUFBRSxDQUFDLFNBQVMsR0ErRnhEO2tCQS9Gb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3NBbmltQ29sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcm9MYWI6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwcm9CYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgYmFyU3ByOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGVuZGFudDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpbml0UHJvOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgc3BlZWQ6IG51bWJlciA9IDAuMDE7XHJcblxyXG4gICAgcHJpdmF0ZSBpc09uQW5pbTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB0YXJnZXQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHVwZ3JhZGVOdW06IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB1cGdyYWdlQ2I6ICgpID0+IHZvaWQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBlbmRDYjogKCkgPT4gdm9pZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHByb2dyZXNzQ2I6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9jdXJQcm9ncmVzczogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBnZXQgY3VyUHJvZ3Jlc3MoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VyUHJvZ3Jlc3M7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGN1clByb2dyZXNzKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9jdXJQcm9ncmVzcyA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMucHJvQmFyLnByb2dyZXNzID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5iYXJTcHIuZmlsbFJhbmdlID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvTGFiKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucHJvTGFiLnN0cmluZyA9ICh2YWx1ZSAqIDEwMCkudG9GaXhlZCgwKSArIFwiJVwiO1xyXG4gICAgICAgICAgICB0aGlzLnByb0xhYi5zdHJpbmcgPSBNYXRoLmZsb29yKHZhbHVlICogMTAwKSArIFwiJVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wZW5kYW50KSB7XHJcbiAgICAgICAgICAgIGxldCBmaXhXaWR0aCA9IHRoaXMuYmFyU3ByLm5vZGUud2lkdGggLSA0MDtcclxuICAgICAgICAgICAgdGhpcy5wZW5kYW50LnggPSAtZml4V2lkdGggLyAyICsgdmFsdWUgKiBmaXhXaWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0NiICYmIHRoaXMucHJvZ3Jlc3NDYih2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJQcm9ncmVzcyA9IHRoaXMuaW5pdFBybztcclxuICAgICAgICB0aGlzLmlzT25BbmltID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRQcm9ncmVzcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pc09uQW5pbSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VyUHJvZ3Jlc3MgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJvZ3Jlc3NBbmltKHRhcmdldFBybzogbnVtYmVyLCB1cGdyYWRlTnVtOiBudW1iZXIgPSAwLCB1cGdyYWdlQ2I6ICgpID0+IHZvaWQgPSBudWxsLCBlbmRDYjogKCkgPT4gdm9pZCA9IG51bGwsIHByb2dyZXNzQ2I6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMudXBncmFkZU51bSA9IHVwZ3JhZGVOdW07XHJcbiAgICAgICAgdGhpcy51cGdyYWdlQ2IgPSB1cGdyYWdlQ2I7XHJcbiAgICAgICAgdGhpcy5lbmRDYiA9IGVuZENiO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NDYiA9IHByb2dyZXNzQ2I7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1clByb2dyZXNzID49IHRhcmdldFBybyAmJiB1cGdyYWRlTnVtID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRDYiAmJiB0aGlzLmVuZENiKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kQ2IgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuaXNPbkFuaW0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0UHJvO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5pc09uQW5pbSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3VyUHJvZ3Jlc3MgKz0gZHQgKiB0aGlzLnNwZWVkO1xyXG4gICAgICAgIGlmICh0aGlzLnVwZ3JhZGVOdW0gPiAwICYmIHRoaXMudGltZXIgPCB0aGlzLnVwZ3JhZGVOdW0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyUHJvZ3Jlc3MgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lcisrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJQcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZ3JhZ2VDYiAmJiB0aGlzLnVwZ3JhZ2VDYigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VyUHJvZ3Jlc3MgPj0gdGhpcy50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNPbkFuaW0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyUHJvZ3Jlc3MgPSB0aGlzLnRhcmdldDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kQ2IgJiYgdGhpcy5lbmRDYigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRDYiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZ3JhZ2VDYiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQ2IgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==