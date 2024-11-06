
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/ProgressCol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '22bbf185KRKXZrVxKewslaP', 'ProgressCol');
// homePage/script/common/ProgressCol.ts

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
var ProgressCol = /** @class */ (function (_super) {
    __extends(ProgressCol, _super);
    function ProgressCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progress = null;
        _this.bar = null;
        _this.proLab = null;
        _this.numLab = null;
        _this.isCeil = false;
        _this.total = 0;
        _this.curNum = 0;
        _this.isOnAnim = false;
        _this.speed = 10;
        _this.tarNum = 0;
        _this.cb = null;
        _this.dir = 1;
        return _this;
    }
    ProgressCol.prototype.init = function (total) {
        this.curNum = this.total = total;
        this.refreshBar();
    };
    ProgressCol.prototype.change = function (changeNum, isAnim, cb) {
        if (isAnim === void 0) { isAnim = false; }
        if (cb === void 0) { cb = null; }
        if (isAnim) {
            this.dir = changeNum > 0 ? 1 : -1;
            this.cb = cb;
            this.tarNum = cc.misc.clampf(this.curNum += changeNum, 0, this.total);
            this.isOnAnim = true;
        }
        else {
            this.curNum = cc.misc.clampf(this.curNum += changeNum, 0, this.total);
            this.refreshBar();
        }
    };
    ProgressCol.prototype.setCurNum = function (num, isAnim, cb) {
        if (isAnim === void 0) { isAnim = false; }
        if (cb === void 0) { cb = null; }
        if (isAnim) {
            this.dir = num > this.curNum ? 1 : -1;
            this.cb = cb;
            this.tarNum = cc.misc.clampf(num, 0, this.total);
            this.isOnAnim = true;
        }
        else {
            this.curNum = cc.misc.clampf(num, 0, this.total);
            this.refreshBar();
        }
    };
    ProgressCol.prototype.refreshBar = function () {
        this.bar.fillRange = this.curNum / this.total;
        if (this.proLab)
            this.proLab.string = (this.isCeil ? Math.ceil(this.curNum / this.total * 100) : Math.floor(this.curNum / this.total * 100)) + "%";
        if (this.numLab)
            this.numLab.string = (this.isCeil ? Math.ceil(this.curNum) : Math.floor(this.curNum)) + "";
    };
    ProgressCol.prototype.update = function (dt) {
        if (!this.isOnAnim)
            return;
        this.curNum += dt * this.speed * this.dir;
        if (this.dir == 1 && this.curNum >= this.tarNum || this.dir == -1 && this.curNum <= this.tarNum) {
            this.curNum = this.tarNum;
            this.isOnAnim = false;
            this.cb && this.cb();
        }
        this.refreshBar();
    };
    __decorate([
        property(cc.ProgressBar)
    ], ProgressCol.prototype, "progress", void 0);
    __decorate([
        property(cc.Sprite)
    ], ProgressCol.prototype, "bar", void 0);
    __decorate([
        property(cc.Label)
    ], ProgressCol.prototype, "proLab", void 0);
    __decorate([
        property(cc.Label)
    ], ProgressCol.prototype, "numLab", void 0);
    __decorate([
        property({ displayName: "是否向上取整" })
    ], ProgressCol.prototype, "isCeil", void 0);
    ProgressCol = __decorate([
        ccclass
    ], ProgressCol);
    return ProgressCol;
}(cc.Component));
exports.default = ProgressCol;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxQcm9ncmVzc0NvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXNFQztRQW5FRyxjQUFRLEdBQW1CLElBQUksQ0FBQztRQUdoQyxTQUFHLEdBQWMsSUFBSSxDQUFDO1FBR3RCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUd4QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBRWhCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFdBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixRQUFFLEdBQWUsSUFBSSxDQUFDO1FBQ3RCLFNBQUcsR0FBVyxDQUFDLENBQUM7O0lBK0M1QixDQUFDO0lBN0NHLDBCQUFJLEdBQUosVUFBSyxLQUFhO1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxTQUFpQixFQUFFLE1BQXVCLEVBQUUsRUFBcUI7UUFBOUMsdUJBQUEsRUFBQSxjQUF1QjtRQUFFLG1CQUFBLEVBQUEsU0FBcUI7UUFDcEUsSUFBSSxNQUFNLEVBQUU7WUFDUixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMs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SUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFsRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpREFDTztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNFO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0s7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDSztJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsQ0FBQzsrQ0FDWjtJQWZQLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FzRS9CO0lBQUQsa0JBQUM7Q0F0RUQsQUFzRUMsQ0F0RXdDLEVBQUUsQ0FBQyxTQUFTLEdBc0VwRDtrQkF0RW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzQ29sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXHJcbiAgICBwcm9ncmVzczogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBiYXI6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJvTGFiOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbnVtTGFiOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5piv5ZCm5ZCR5LiK5Y+W5pW0XCIgfSlcclxuICAgIGlzQ2VpbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgdG90YWw6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGN1ck51bTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgaXNPbkFuaW06IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc3BlZWQ6IG51bWJlciA9IDEwO1xyXG4gICAgcHJpdmF0ZSB0YXJOdW06IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNiOiAoKSA9PiB2b2lkID0gbnVsbDtcclxuICAgIHByaXZhdGUgZGlyOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIGluaXQodG90YWw6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY3VyTnVtID0gdGhpcy50b3RhbCA9IHRvdGFsO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaEJhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZShjaGFuZ2VOdW06IG51bWJlciwgaXNBbmltOiBib29sZWFuID0gZmFsc2UsIGNiOiAoKSA9PiB2b2lkID0gbnVsbCkge1xyXG4gICAgICAgIGlmIChpc0FuaW0pIHtcclxuICAgICAgICAgICAgdGhpcy5kaXIgPSBjaGFuZ2VOdW0gPiAwID8gMSA6IC0xO1xyXG4gICAgICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICAgICAgICAgIHRoaXMudGFyTnVtID0gY2MubWlzYy5jbGFtcGYodGhpcy5jdXJOdW0gKz0gY2hhbmdlTnVtLCAwLCB0aGlzLnRvdGFsKTtcclxuICAgICAgICAgICAgdGhpcy5pc09uQW5pbSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJOdW0gPSBjYy5taXNjLmNsYW1wZih0aGlzLmN1ck51bSArPSBjaGFuZ2VOdW0sIDAsIHRoaXMudG90YWwpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCYXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VyTnVtKG51bTogbnVtYmVyLCBpc0FuaW06IGJvb2xlYW4gPSBmYWxzZSwgY2I6ICgpID0+IHZvaWQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKGlzQW5pbSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpciA9IG51bSA+IHRoaXMuY3VyTnVtID8gMSA6IC0xO1xyXG4gICAgICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICAgICAgICAgIHRoaXMudGFyTnVtID0gY2MubWlzYy5jbGFtcGYobnVtLCAwLCB0aGlzLnRvdGFsKTtcclxuICAgICAgICAgICAgdGhpcy5pc09uQW5pbSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJOdW0gPSBjYy5taXNjLmNsYW1wZihudW0sIDAsIHRoaXMudG90YWwpO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hCYXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWZyZXNoQmFyKCkge1xyXG4gICAgICAgIHRoaXMuYmFyLmZpbGxSYW5nZSA9IHRoaXMuY3VyTnVtIC8gdGhpcy50b3RhbDtcclxuICAgICAgICBpZiAodGhpcy5wcm9MYWIpIHRoaXMucHJvTGFiLnN0cmluZyA9ICh0aGlzLmlzQ2VpbCA/IE1hdGguY2VpbCh0aGlzLmN1ck51bSAvIHRoaXMudG90YWwgKiAxMDApIDogTWF0aC5mbG9vcih0aGlzLmN1ck51bSAvIHRoaXMudG90YWwgKiAxMDApKSArIFwiJVwiO1xyXG4gICAgICAgIGlmICh0aGlzLm51bUxhYikgdGhpcy5udW1MYWIuc3RyaW5nID0gKHRoaXMuaXNDZWlsID8gTWF0aC5jZWlsKHRoaXMuY3VyTnVtKSA6IE1hdGguZmxvb3IodGhpcy5jdXJOdW0pKSArIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzT25BbmltKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jdXJOdW0gKz0gZHQgKiB0aGlzLnNwZWVkICogdGhpcy5kaXI7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyID09IDEgJiYgdGhpcy5jdXJOdW0gPj0gdGhpcy50YXJOdW0gfHwgdGhpcy5kaXIgPT0gLTEgJiYgdGhpcy5jdXJOdW0gPD0gdGhpcy50YXJOdW0pIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJOdW0gPSB0aGlzLnRhck51bTtcclxuICAgICAgICAgICAgdGhpcy5pc09uQW5pbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNiICYmIHRoaXMuY2IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQmFyKCk7XHJcbiAgICB9XHJcbn1cclxuIl19