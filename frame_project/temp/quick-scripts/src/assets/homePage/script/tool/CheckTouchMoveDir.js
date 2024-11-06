"use strict";
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