
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/tool/CheckTouchMoveDir.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b56bnthrtIR5dsdSnmJ5Xe', 'CheckTouchMoveDir');
// homePage/script/tool/CheckTouchMoveDir.ts

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
exports.CheckTouchMoveDir = exports.CheckDir = exports.MoveType = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var MoveType;
(function (MoveType) {
    MoveType[MoveType["ONLY_X"] = 0] = "ONLY_X";
    MoveType[MoveType["ONLY_Y"] = 1] = "ONLY_Y";
    MoveType[MoveType["X_AND_Y"] = 2] = "X_AND_Y";
})(MoveType = exports.MoveType || (exports.MoveType = {}));
var CheckDir;
(function (CheckDir) {
    CheckDir[CheckDir["LEFT_DOWN"] = 0] = "LEFT_DOWN";
    CheckDir[CheckDir["RIGHT_UP"] = 1] = "RIGHT_UP";
    CheckDir[CheckDir["NONE"] = 2] = "NONE";
})(CheckDir = exports.CheckDir || (exports.CheckDir = {}));
var CheckTouchMoveDir = /** @class */ (function (_super) {
    __extends(CheckTouchMoveDir, _super);
    function CheckTouchMoveDir() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touchNode = null;
        _this.moveType = MoveType.ONLY_X;
        _this.checkDir = CheckDir.NONE;
        _this.isMonitorDis = true;
        _this.triggerDis = 5;
        _this.isCheckClick = false;
        _this.useCapture = true;
        _this.id = 0;
        _this.touchEvents = [];
        _this._startTouch = false;
        _this.currentTouchId = -1;
        _this.startPos = cc.Vec2.ZERO;
        _this.endPos = cc.Vec2.ZERO;
        _this.lastPos = cc.Vec2.ZERO;
        _this.isCanCheck = true;
        _this.isMove = false;
        _this.totalMoveDis = 0;
        return _this;
    }
    CheckTouchMoveDir.prototype.onEnable = function () {
        if (!this.touchNode) {
            this.touchNode = this.node;
        }
        this.touchNode.on(cc.Node.EventType.TOUCH_START, this.touchStart, this, this.useCapture);
        this.touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this, this.useCapture);
        this.touchNode.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this, this.useCapture);
        this.touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this, this.useCapture);
        this.currentTouchId = -1;
        this.startTouch = false;
    };
    CheckTouchMoveDir.prototype.onDisable = function () {
        this.touchNode.off(cc.Node.EventType.TOUCH_START, this.touchStart, this, this.useCapture);
        this.touchNode.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this, this.useCapture);
        this.touchNode.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this, this.useCapture);
        this.touchNode.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this, this.useCapture);
    };
    Object.defineProperty(CheckTouchMoveDir.prototype, "startTouch", {
        get: function () {
            return this._startTouch;
        },
        set: function (value) {
            this._startTouch = value;
        },
        enumerable: false,
        configurable: true
    });
    CheckTouchMoveDir.prototype.touchStart = function (event) {
        if (this.startTouch) {
            return;
        }
        this.startTouch = true;
        this.currentTouchId = event.getID();
        var worldPos = event.getLocation();
        worldPos.x = Math.floor(worldPos.x);
        worldPos.y = Math.floor(worldPos.y);
        this.lastPos = worldPos;
        this.startPos = worldPos;
        this.endPos = worldPos;
        this.isMove = !this.isMonitorDis;
        this.totalMoveDis = 0;
    };
    CheckTouchMoveDir.prototype.touchMove = function (event) {
        if (event.getID() !== this.currentTouchId) {
            return;
        }
        var worldPos = event.getLocation();
        worldPos.x = Math.floor(worldPos.x);
        worldPos.y = Math.floor(worldPos.y);
        if (worldPos.x == this.lastPos.x && worldPos.y == this.lastPos.y) {
            return;
        }
        var moveDis = this.endPos.sub(worldPos).mag();
        this.totalMoveDis += moveDis;
        if (this.isMonitorDis && this.totalMoveDis >= this.triggerDis && !this.isMove) {
            this.isMove = true;
        }
        this.endPos = worldPos;
    };
    CheckTouchMoveDir.prototype.touchEnd = function (event) {
        var _this = this;
        if (event.getID() !== this.currentTouchId) {
            return;
        }
        this.startTouch = false;
        this.currentTouchId = -1;
        if (!this.isMove) {
            this.isCheckClick && this.touchEvents.forEach(function (value, index, array) {
                value.emit([_this.id]);
            });
        }
        else {
            if (this.moveType == MoveType.X_AND_Y) {
                // let moveDis = this.startPos.sub(this.endPos).mag();
                // console.log("touchEnd _moveDis = ",moveDis);
                // if(moveDis >= this.triggerDis){
                //     WorldEventManager.triggerEvent(EventEnum.TouchMove,moveDis);
                // }
                var xMoveDis_1 = this.endPos.x - this.startPos.x;
                var yMoveDis_1 = this.endPos.y - this.startPos.y;
                this.isCanCheck && this.touchEvents.forEach(function (value, index, array) {
                    value.emit([_this.id, xMoveDis_1, yMoveDis_1]);
                });
            }
            else {
                if (this.moveType == MoveType.ONLY_X) {
                    var call = function () {
                        if (!_this.isCanCheck) {
                            return;
                        }
                        if (_this.checkDir == CheckDir.NONE) {
                            _this.touchEvents.forEach(function (value, index, array) {
                                value.emit([_this.id, moveDis_1, dir_1]);
                            });
                        }
                        else if (_this.checkDir == CheckDir.LEFT_DOWN) {
                            if (_this.endPos.x < _this.startPos.x) {
                                _this.touchEvents.forEach(function (value, index, array) {
                                    value.emit([_this.id, moveDis_1]);
                                });
                            }
                        }
                        else if (_this.checkDir == CheckDir.RIGHT_UP) {
                            if (_this.endPos.x > _this.startPos.x) {
                                _this.touchEvents.forEach(function (value, index, array) {
                                    value.emit([_this.id, moveDis_1]);
                                });
                            }
                        }
                    };
                    var dir_1 = this.endPos.x - this.startPos.x > 0 ? 1 : -1;
                    var moveDis_1 = Math.abs(this.endPos.x - this.startPos.x);
                    if (this.isMonitorDis) {
                        // console.log("this._moveDis = ", moveDis)
                        if (moveDis_1 >= this.triggerDis) {
                            call();
                        }
                    }
                    else {
                        call();
                    }
                }
                else if (this.moveType == MoveType.ONLY_Y) {
                    var call = function () {
                        if (!_this.isCanCheck) {
                            return;
                        }
                        if (_this.checkDir == CheckDir.NONE) {
                            _this.touchEvents.forEach(function (value, index, array) {
                                value.emit([_this.id, moveDis_2]);
                            });
                        }
                        else if (_this.checkDir == CheckDir.LEFT_DOWN) {
                            if (_this.endPos.y < _this.startPos.y) {
                                _this.touchEvents.forEach(function (value, index, array) {
                                    value.emit([_this.id, moveDis_2]);
                                });
                            }
                        }
                        else if (_this.checkDir == CheckDir.RIGHT_UP) {
                            if (_this.endPos.y > _this.startPos.y) {
                                _this.touchEvents.forEach(function (value, index, array) {
                                    value.emit([_this.id, moveDis_2]);
                                });
                            }
                        }
                    };
                    var moveDis_2 = Math.abs(this.endPos.y - this.startPos.y);
                    if (this.isMonitorDis) {
                        // console.log("moveDis = ", moveDis)
                        if (moveDis_2 >= this.triggerDis) {
                            call();
                        }
                    }
                    else {
                        call();
                    }
                }
            }
        }
        this.isMove = false;
        this.startPos = cc.Vec2.ZERO;
        this.endPos = cc.Vec2.ZERO;
        this.lastPos = cc.Vec2.ZERO;
    };
    CheckTouchMoveDir.prototype.setCheckDir = function (dir) {
        this.checkDir = dir;
    };
    CheckTouchMoveDir.prototype.setIsCanCheck = function (isCheck) {
        this.isCanCheck = isCheck;
    };
    __decorate([
        property({
            tooltip: '触摸板节点',
            type: cc.Node
        })
    ], CheckTouchMoveDir.prototype, "touchNode", void 0);
    __decorate([
        property({
            displayName: '移动方式',
            type: cc.Enum(MoveType)
        })
    ], CheckTouchMoveDir.prototype, "moveType", void 0);
    __decorate([
        property({ displayName: "监测方向", type: cc.Enum(CheckDir) })
    ], CheckTouchMoveDir.prototype, "checkDir", void 0);
    __decorate([
        property({ displayName: "监测滑动距离" })
    ], CheckTouchMoveDir.prototype, "isMonitorDis", void 0);
    __decorate([
        property({ visible: function () { return this.isMonitorDis; } })
    ], CheckTouchMoveDir.prototype, "triggerDis", void 0);
    __decorate([
        property({ displayName: "监测点击" })
    ], CheckTouchMoveDir.prototype, "isCheckClick", void 0);
    __decorate([
        property
    ], CheckTouchMoveDir.prototype, "useCapture", void 0);
    __decorate([
        property
    ], CheckTouchMoveDir.prototype, "id", void 0);
    __decorate([
        property({ displayName: "触发事件", type: cc.Component.EventHandler })
    ], CheckTouchMoveDir.prototype, "touchEvents", void 0);
    CheckTouchMoveDir = __decorate([
        ccclass
    ], CheckTouchMoveDir);
    return CheckTouchMoveDir;
}(cc.Component));
exports.CheckTouchMoveDir = CheckTouchMoveDir;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcdG9vbFxcQ2hlY2tUb3VjaE1vdmVEaXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBRWxELElBQVksUUFJWDtBQUpELFdBQVksUUFBUTtJQUNoQiwyQ0FBVSxDQUFBO0lBQ1YsMkNBQVUsQ0FBQTtJQUNWLDZDQUFXLENBQUE7QUFDZixDQUFDLEVBSlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFJbkI7QUFFRCxJQUFZLFFBSVg7QUFKRCxXQUFZLFFBQVE7SUFDaEIsaURBQWEsQ0FBQTtJQUNiLCtDQUFZLENBQUE7SUFDWix1Q0FBSSxDQUFBO0FBQ1IsQ0FBQyxFQUpXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBSW5CO0FBR0Q7SUFBdUMscUNBQVk7SUFBbkQ7UUFBQSxxRUFtTkM7UUE3TVcsZUFBUyxHQUFZLElBQUksQ0FBQztRQU0xQixjQUFRLEdBQWEsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUdyQyxjQUFRLEdBQWEsUUFBUSxDQUFDLElBQUksQ0FBQztRQUduQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUd2QixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUd0QyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixRQUFFLEdBQVcsQ0FBQyxDQUFDO1FBR2YsaUJBQVcsR0FBZ0MsRUFBRSxDQUFDO1FBcUJ0QyxpQkFBVyxHQUFZLEtBQUssQ0FBQztRQU83QixvQkFBYyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzVCLGNBQVEsR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNqQyxZQUFNLEdBQVksRUFBRSxD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dEM7UUFEQyxRQUFRO3lEQUNrQjtJQUczQjtRQURDLFFBQVE7aURBQ007SUFHZjtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7MERBQ3JCO0lBakNyQyxpQkFBaUI7UUFEN0IsT0FBTztPQUNLLGlCQUFpQixDQW1ON0I7SUFBRCx3QkFBQztDQW5ORCxBQW1OQyxDQW5Oc0MsRUFBRSxDQUFDLFNBQVMsR0FtTmxEO0FBbk5ZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBlbnVtIE1vdmVUeXBlIHtcclxuICAgIE9OTFlfWCA9IDAsXHJcbiAgICBPTkxZX1kgPSAxLFxyXG4gICAgWF9BTkRfWSA9IDIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENoZWNrRGlyIHtcclxuICAgIExFRlRfRE9XTiA9IDAsXHJcbiAgICBSSUdIVF9VUCA9IDEsXHJcbiAgICBOT05FXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBDaGVja1RvdWNoTW92ZURpciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiAn6Kem5pG45p2/6IqC54K5JyxcclxuICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICB9KVxyXG4gICAgcHJpdmF0ZSB0b3VjaE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICfnp7vliqjmlrnlvI8nLFxyXG4gICAgICAgIHR5cGU6IGNjLkVudW0oTW92ZVR5cGUpXHJcbiAgICB9KVxyXG4gICAgcHJpdmF0ZSBtb3ZlVHlwZTogTW92ZVR5cGUgPSBNb3ZlVHlwZS5PTkxZX1g7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi55uR5rWL5pa55ZCRXCIsIHR5cGU6IGNjLkVudW0oQ2hlY2tEaXIpIH0pXHJcbiAgICBwcml2YXRlIGNoZWNrRGlyOiBDaGVja0RpciA9IENoZWNrRGlyLk5PTkU7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi55uR5rWL5ruR5Yqo6Led56a7XCIgfSlcclxuICAgIHByaXZhdGUgaXNNb25pdG9yRGlzOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5pc01vbml0b3JEaXMgfSB9KVxyXG4gICAgcHJpdmF0ZSB0cmlnZ2VyRGlzOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuebkea1i+eCueWHu1wiIH0pXHJcbiAgICBwcml2YXRlIGlzQ2hlY2tDbGljazogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdXNlQ2FwdHVyZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBpZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLop6blj5Hkuovku7ZcIiwgdHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlciB9KVxyXG4gICAgdG91Y2hFdmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMudG91Y2hOb2RlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG91Y2hOb2RlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzLCB0aGlzLnVzZUNhcHR1cmUpO1xyXG4gICAgICAgIHRoaXMudG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzLCB0aGlzLnVzZUNhcHR1cmUpO1xyXG4gICAgICAgIHRoaXMudG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcywgdGhpcy51c2VDYXB0dXJlKTtcclxuICAgICAgICB0aGlzLnRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMsIHRoaXMudXNlQ2FwdHVyZSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VG91Y2hJZCA9IC0xO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUb3VjaCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMsIHRoaXMudXNlQ2FwdHVyZSk7XHJcbiAgICAgICAgdGhpcy50b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzLCB0aGlzLnVzZUNhcHR1cmUpO1xyXG4gICAgICAgIHRoaXMudG91Y2hOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMsIHRoaXMudXNlQ2FwdHVyZSk7XHJcbiAgICAgICAgdGhpcy50b3VjaE5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy50b3VjaEVuZCwgdGhpcywgdGhpcy51c2VDYXB0dXJlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zdGFydFRvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZ2V0IHN0YXJ0VG91Y2goKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0VG91Y2g7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IHN0YXJ0VG91Y2godmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zdGFydFRvdWNoID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUb3VjaElkOiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgc3RhcnRQb3M6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XHJcbiAgICBwcml2YXRlIGVuZFBvczogY2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcclxuICAgIHByaXZhdGUgbGFzdFBvczogY2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcclxuICAgIHByaXZhdGUgaXNDYW5DaGVjazogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGlzTW92ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB0b3RhbE1vdmVEaXM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0KGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRUb3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhcnRUb3VjaCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VG91Y2hJZCA9IGV2ZW50LmdldElEKCk7XHJcblxyXG4gICAgICAgIGxldCB3b3JsZFBvcyA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgd29ybGRQb3MueCA9IE1hdGguZmxvb3Iod29ybGRQb3MueCk7XHJcbiAgICAgICAgd29ybGRQb3MueSA9IE1hdGguZmxvb3Iod29ybGRQb3MueSk7XHJcblxyXG4gICAgICAgIHRoaXMubGFzdFBvcyA9IHdvcmxkUG9zO1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3MgPSB3b3JsZFBvcztcclxuICAgICAgICB0aGlzLmVuZFBvcyA9IHdvcmxkUG9zO1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gIXRoaXMuaXNNb25pdG9yRGlzO1xyXG4gICAgICAgIHRoaXMudG90YWxNb3ZlRGlzID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoTW92ZShldmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChldmVudC5nZXRJRCgpICE9PSB0aGlzLmN1cnJlbnRUb3VjaElkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB3b3JsZFBvcy54ID0gTWF0aC5mbG9vcih3b3JsZFBvcy54KTtcclxuICAgICAgICB3b3JsZFBvcy55ID0gTWF0aC5mbG9vcih3b3JsZFBvcy55KTtcclxuICAgICAgICBpZiAod29ybGRQb3MueCA9PSB0aGlzLmxhc3RQb3MueCAmJiB3b3JsZFBvcy55ID09IHRoaXMubGFzdFBvcy55KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1vdmVEaXMgPSB0aGlzLmVuZFBvcy5zdWIod29ybGRQb3MpLm1hZygpO1xyXG4gICAgICAgIHRoaXMudG90YWxNb3ZlRGlzICs9IG1vdmVEaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb25pdG9yRGlzICYmIHRoaXMudG90YWxNb3ZlRGlzID49IHRoaXMudHJpZ2dlckRpcyAmJiAhdGhpcy5pc01vdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVuZFBvcyA9IHdvcmxkUG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hFbmQoZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoZXZlbnQuZ2V0SUQoKSAhPT0gdGhpcy5jdXJyZW50VG91Y2hJZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhcnRUb3VjaCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRvdWNoSWQgPSAtMTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTW92ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2hlY2tDbGljayAmJiB0aGlzLnRvdWNoRXZlbnRzLmZvckVhY2goKHZhbHVlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLCBpbmRleDogbnVtYmVyLCBhcnJheTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5lbWl0KFt0aGlzLmlkXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vdmVUeXBlID09IE1vdmVUeXBlLlhfQU5EX1kpIHtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBtb3ZlRGlzID0gdGhpcy5zdGFydFBvcy5zdWIodGhpcy5lbmRQb3MpLm1hZygpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0b3VjaEVuZCBfbW92ZURpcyA9IFwiLG1vdmVEaXMpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYobW92ZURpcyA+PSB0aGlzLnRyaWdnZXJEaXMpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIFdvcmxkRXZlbnRNYW5hZ2VyLnRyaWdnZXJFdmVudChFdmVudEVudW0uVG91Y2hNb3ZlLG1vdmVEaXMpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgbGV0IHhNb3ZlRGlzID0gdGhpcy5lbmRQb3MueCAtIHRoaXMuc3RhcnRQb3MueDtcclxuICAgICAgICAgICAgICAgIGxldCB5TW92ZURpcyA9IHRoaXMuZW5kUG9zLnkgLSB0aGlzLnN0YXJ0UG9zLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2FuQ2hlY2sgJiYgdGhpcy50b3VjaEV2ZW50cy5mb3JFYWNoKCh2YWx1ZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlciwgaW5kZXg6IG51bWJlciwgYXJyYXk6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmVtaXQoW3RoaXMuaWQsIHhNb3ZlRGlzLCB5TW92ZURpc10pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb3ZlVHlwZSA9PSBNb3ZlVHlwZS5PTkxZX1gpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FsbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ2FuQ2hlY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja0RpciA9PSBDaGVja0Rpci5OT05FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRzLmZvckVhY2goKHZhbHVlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLCBpbmRleDogbnVtYmVyLCBhcnJheTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuZW1pdChbdGhpcy5pZCwgbW92ZURpcywgZGlyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrRGlyID09IENoZWNrRGlyLkxFRlRfRE9XTikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5kUG9zLnggPCB0aGlzLnN0YXJ0UG9zLngpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRzLmZvckVhY2goKHZhbHVlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLCBpbmRleDogbnVtYmVyLCBhcnJheTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmVtaXQoW3RoaXMuaWQsIG1vdmVEaXNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrRGlyID09IENoZWNrRGlyLlJJR0hUX1VQKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmRQb3MueCA+IHRoaXMuc3RhcnRQb3MueCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2hFdmVudHMuZm9yRWFjaCgodmFsdWU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsIGluZGV4OiBudW1iZXIsIGFycmF5OiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuZW1pdChbdGhpcy5pZCwgbW92ZURpc10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXIgPSB0aGlzLmVuZFBvcy54IC0gdGhpcy5zdGFydFBvcy54ID4gMCA/IDEgOiAtMTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZURpcyA9IE1hdGguYWJzKHRoaXMuZW5kUG9zLnggLSB0aGlzLnN0YXJ0UG9zLngpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTW9uaXRvckRpcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuX21vdmVEaXMgPSBcIiwgbW92ZURpcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmVEaXMgPj0gdGhpcy50cmlnZ2VyRGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmVUeXBlID09IE1vdmVUeXBlLk9OTFlfWSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYWxsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNDYW5DaGVjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrRGlyID09IENoZWNrRGlyLk5PTkUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2hFdmVudHMuZm9yRWFjaCgodmFsdWU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsIGluZGV4OiBudW1iZXIsIGFycmF5OiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5lbWl0KFt0aGlzLmlkLCBtb3ZlRGlzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrRGlyID09IENoZWNrRGlyLkxFRlRfRE9XTikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5kUG9zLnkgPCB0aGlzLnN0YXJ0UG9zLnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdWNoRXZlbnRzLmZvckVhY2goKHZhbHVlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLCBpbmRleDogbnVtYmVyLCBhcnJheTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmVtaXQoW3RoaXMuaWQsIG1vdmVEaXNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrRGlyID09IENoZWNrRGlyLlJJR0hUX1VQKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmRQb3MueSA+IHRoaXMuc3RhcnRQb3MueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2hFdmVudHMuZm9yRWFjaCgodmFsdWU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsIGluZGV4OiBudW1iZXIsIGFycmF5OiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuZW1pdChbdGhpcy5pZCwgbW92ZURpc10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb3ZlRGlzID0gTWF0aC5hYnModGhpcy5lbmRQb3MueSAtIHRoaXMuc3RhcnRQb3MueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb25pdG9yRGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW92ZURpcyA9IFwiLCBtb3ZlRGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW92ZURpcyA+PSB0aGlzLnRyaWdnZXJEaXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGFydFBvcyA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICB0aGlzLmVuZFBvcyA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICB0aGlzLmxhc3RQb3MgPSBjYy5WZWMyLlpFUk87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldENoZWNrRGlyKGRpcjogQ2hlY2tEaXIpIHtcclxuICAgICAgICB0aGlzLmNoZWNrRGlyID0gZGlyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJc0NhbkNoZWNrKGlzQ2hlY2s6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmlzQ2FuQ2hlY2sgPSBpc0NoZWNrO1xyXG4gICAgfVxyXG59Il19