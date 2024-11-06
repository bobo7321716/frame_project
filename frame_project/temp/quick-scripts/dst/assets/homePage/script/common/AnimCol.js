
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/AnimCol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6dd4xhsutDoazXOUM5FhB3', 'AnimCol');
// homePage/script/common/AnimCol.ts

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
var AnimCol = /** @class */ (function (_super) {
    __extends(AnimCol, _super);
    function AnimCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spine = null;
        _this.dragon = null;
        return _this;
    }
    AnimCol.prototype.onLoad = function () {
        if (this.dragon) {
            this.dragon.premultipliedAlpha = false;
            this.dragon.enableBatch = true;
        }
        if (!this.spine) {
            this.spine = this.node.getComponent(sp.Skeleton);
        }
        if (!this.dragon) {
            this.dragon = this.node.getComponent(dragonBones.ArmatureDisplay);
        }
    };
    Object.defineProperty(AnimCol.prototype, "isPlaying", {
        get: function () {
            return (this.spine && this.spine.animation != null) || (this.dragon && this.dragon.animationName != null);
        },
        enumerable: false,
        configurable: true
    });
    AnimCol.prototype.play = function (animName, timeScale, loopTimes, endCb) {
        var _this = this;
        if (animName === void 0) { animName = null; }
        if (timeScale === void 0) { timeScale = 1; }
        if (loopTimes === void 0) { loopTimes = 0; }
        if (endCb === void 0) { endCb = null; }
        return new Promise(function (resolve, reject) {
            var loopTimer = 0;
            var completeCall = function () {
                loopTimer++;
                if (loopTimer >= loopTimes || loopTimes == 0) {
                    _this.dragon && _this.dragon.removeEventListener(dragonBones.EventObject.COMPLETE, completeCall, _this);
                    resolve(null);
                }
                else {
                    _this.spine.timeScale = timeScale;
                    var name = animName ? animName : _this.spine.defaultAnimation;
                    _this.spine.setAnimation(0, name, loopTimes == 0);
                }
            };
            if (_this.spine) {
                endCb && _this.spine.setEndListener(endCb);
                _this.spine.setCompleteListener(completeCall);
                _this.spine.timeScale = timeScale;
                var name = animName ? animName : _this.spine.defaultAnimation;
                _this.spine.setAnimation(0, name, loopTimes == 0);
            }
            else if (_this.dragon) {
                _this.dragon.timeScale = timeScale;
                _this.dragon.addEventListener(dragonBones.EventObject.COMPLETE, completeCall, _this);
                var name = animName ? animName : _this.dragon.animationName;
                _this.dragon.playAnimation(name, loopTimes);
            }
            else {
                resolve(null);
            }
        });
    };
    __decorate([
        property(sp.Skeleton)
    ], AnimCol.prototype, "spine", void 0);
    __decorate([
        property(dragonBones.ArmatureDisplay)
    ], AnimCol.prototype, "dragon", void 0);
    AnimCol = __decorate([
        ccclass
    ], AnimCol);
    return AnimCol;
}(cc.Component));
exports.default = AnimCol;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxBbmltQ29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBdURDO1FBcERHLFdBQUssR0FBZ0IsSUFBSSxDQUFDO1FBRzFCLFlBQU0sR0FBZ0MsSUFBSSxDQUFDOztJQWlEL0MsQ0FBQztJQS9DYSx3QkFBTSxHQUFoQjtRQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0wsQ0FBQztJQUVELHNCQUFXLDhCQUFTO2FBQXBCO1lBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxDQUFBO1FBQzdHLENBQUM7OztPQUFBO0lBRU0sc0JBQUksR0FBWCxVQUFZLFFBQXVCLEVBQUUsU0FBYSxFQUFFLFNBQXFCLEVBQUUsS0FBd0I7UUFBbkcsaUJBNkJDO1FBN0JXLHlCQUFBLEVBQUEsZUFBdUI7UUFBRSwwQkFBQSxFQUFBLGFBQWE7UUFBRSwwQkFBQSxFQUFBLGFBQXFCO1FBQUUsc0JBQUEsRUFBQSxZQUF3QjtRQUMvRixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsSUFBSSxTQUFTLEdBQVcsQ0FBQyxDQUFDO1lBQzFCLElBQUksWUFBWSxHQUFHO2dCQUNmLFNBQVMsRUFBRSxDQUFDO2dCQUNaLElBQUksU0FBUyxJQUFJLFNBQVMsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFO29CQUMxQyxLQUFJLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLEtBQUksQ0FBQyxDQUFDO29CQUNyRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2pCO3FCQUFNO29CQUNILEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztvQkFDakMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7b0JBQzdELEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUNwRDtZQUNMLENBQUMsQ0FBQTtZQUNELElBQUksS0FBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixLQUFLLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzdDLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztnQkFDakMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzdELEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO2lCQUFNLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRTtnQkFDcEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO2dCQUNsQyxLQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFJLENBQUMsQ0FBQztnQkFDbkYsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO2dCQUMzRCxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDOUM7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBbkREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7MENBQ0k7SUFHMUI7UUFEQyxRQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQzsyQ0FDSztJQU4xQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBdUQzQjtJQUFELGNBQUM7Q0F2REQsQUF1REMsQ0F2RG9DLEVBQUUsQ0FBQyxTQUFTLEdBdURoRDtrQkF2RG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbUNvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgc3BpbmU6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KVxyXG4gICAgZHJhZ29uOiBkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkgPSBudWxsO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZHJhZ29uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ29uLnByZW11bHRpcGxpZWRBbHBoYSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdvbi5lbmFibGVCYXRjaCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5zcGluZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwaW5lID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5kcmFnb24pIHtcclxuICAgICAgICAgICAgdGhpcy5kcmFnb24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaXNQbGF5aW5nKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5zcGluZSAmJiB0aGlzLnNwaW5lLmFuaW1hdGlvbiAhPSBudWxsKSB8fCAodGhpcy5kcmFnb24gJiYgdGhpcy5kcmFnb24uYW5pbWF0aW9uTmFtZSAhPSBudWxsKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGF5KGFuaW1OYW1lOiBzdHJpbmcgPSBudWxsLCB0aW1lU2NhbGUgPSAxLCBsb29wVGltZXM6IG51bWJlciA9IDAsIGVuZENiOiAoKSA9PiB2b2lkID0gbnVsbCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsb29wVGltZXI6IG51bWJlciA9IDA7XHJcbiAgICAgICAgICAgIGxldCBjb21wbGV0ZUNhbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb29wVGltZXIrKztcclxuICAgICAgICAgICAgICAgIGlmIChsb29wVGltZXIgPj0gbG9vcFRpbWVzIHx8IGxvb3BUaW1lcyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnb24gJiYgdGhpcy5kcmFnb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5DT01QTEVURSwgY29tcGxldGVDYWxsLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5lLnRpbWVTY2FsZSA9IHRpbWVTY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IGFuaW1OYW1lID8gYW5pbU5hbWUgOiB0aGlzLnNwaW5lLmRlZmF1bHRBbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluZS5zZXRBbmltYXRpb24oMCwgbmFtZSwgbG9vcFRpbWVzID09IDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwaW5lKSB7XHJcbiAgICAgICAgICAgICAgICBlbmRDYiAmJiB0aGlzLnNwaW5lLnNldEVuZExpc3RlbmVyKGVuZENiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BpbmUuc2V0Q29tcGxldGVMaXN0ZW5lcihjb21wbGV0ZUNhbGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGluZS50aW1lU2NhbGUgPSB0aW1lU2NhbGU7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IGFuaW1OYW1lID8gYW5pbU5hbWUgOiB0aGlzLnNwaW5lLmRlZmF1bHRBbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5lLnNldEFuaW1hdGlvbigwLCBuYW1lLCBsb29wVGltZXMgPT0gMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kcmFnb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ29uLnRpbWVTY2FsZSA9IHRpbWVTY2FsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ29uLmFkZEV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUsIGNvbXBsZXRlQ2FsbCwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IGFuaW1OYW1lID8gYW5pbU5hbWUgOiB0aGlzLmRyYWdvbi5hbmltYXRpb25OYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnb24ucGxheUFuaW1hdGlvbihuYW1lLCBsb29wVGltZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIl19