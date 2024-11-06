

const { ccclass, property, menu } = cc._decorator;

export enum MoveType {
    ONLY_X = 0,
    ONLY_Y = 1,
    X_AND_Y = 2,
}

export enum CheckDir {
    LEFT_DOWN = 0,
    RIGHT_UP = 1,
    NONE
}

@ccclass
export class CheckTouchMoveDir extends cc.Component {

    @property({
        tooltip: '触摸板节点',
        type: cc.Node
    })
    private touchNode: cc.Node = null;

    @property({
        displayName: '移动方式',
        type: cc.Enum(MoveType)
    })
    private moveType: MoveType = MoveType.ONLY_X;

    @property({ displayName: "监测方向", type: cc.Enum(CheckDir) })
    private checkDir: CheckDir = CheckDir.NONE;

    @property({ displayName: "监测滑动距离" })
    private isMonitorDis: boolean = true;

    @property({ visible() { return this.isMonitorDis } })
    private triggerDis: number = 5;

    @property({ displayName: "监测点击" })
    private isCheckClick: boolean = false;

    @property
    useCapture: boolean = true;

    @property
    id: number = 0;

    @property({ displayName: "触发事件", type: cc.Component.EventHandler })
    touchEvents: cc.Component.EventHandler[] = [];

    public onEnable(): void {
        if (!this.touchNode) {
            this.touchNode = this.node;
        }
        this.touchNode.on(cc.Node.EventType.TOUCH_START, this.touchStart, this, this.useCapture);
        this.touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this, this.useCapture);
        this.touchNode.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this, this.useCapture);
        this.touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this, this.useCapture);
        this.currentTouchId = -1;
        this.startTouch = false;
    }

    public onDisable(): void {
        this.touchNode.off(cc.Node.EventType.TOUCH_START, this.touchStart, this, this.useCapture);
        this.touchNode.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this, this.useCapture);
        this.touchNode.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this, this.useCapture);
        this.touchNode.off(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this, this.useCapture);
    }

    private _startTouch: boolean = false;
    public get startTouch(): boolean {
        return this._startTouch;
    }
    public set startTouch(value: boolean) {
        this._startTouch = value;
    }
    private currentTouchId: number = -1;
    private startPos: cc.Vec2 = cc.Vec2.ZERO;
    private endPos: cc.Vec2 = cc.Vec2.ZERO;
    private lastPos: cc.Vec2 = cc.Vec2.ZERO;
    private isCanCheck: boolean = true;
    private isMove: boolean = false;
    private totalMoveDis: number = 0;

    private touchStart(event): void {
        if (this.startTouch) {
            return;
        }
        this.startTouch = true;
        this.currentTouchId = event.getID();

        let worldPos = event.getLocation();
        worldPos.x = Math.floor(worldPos.x);
        worldPos.y = Math.floor(worldPos.y);

        this.lastPos = worldPos;
        this.startPos = worldPos;
        this.endPos = worldPos;
        this.isMove = !this.isMonitorDis;
        this.totalMoveDis = 0;
    }

    private touchMove(event): void {
        if (event.getID() !== this.currentTouchId) {
            return;
        }
        let worldPos = event.getLocation();
        worldPos.x = Math.floor(worldPos.x);
        worldPos.y = Math.floor(worldPos.y);
        if (worldPos.x == this.lastPos.x && worldPos.y == this.lastPos.y) {
            return;
        }
        let moveDis = this.endPos.sub(worldPos).mag();
        this.totalMoveDis += moveDis;
        if (this.isMonitorDis && this.totalMoveDis >= this.triggerDis && !this.isMove) {
            this.isMove = true;
        }
        this.endPos = worldPos;
    }

    private touchEnd(event): void {
        if (event.getID() !== this.currentTouchId) {
            return;
        }
        this.startTouch = false;
        this.currentTouchId = -1;

        if (!this.isMove) {
            this.isCheckClick && this.touchEvents.forEach((value: cc.Component.EventHandler, index: number, array: cc.Component.EventHandler[]) => {
                value.emit([this.id]);
            });
        } else {
            if (this.moveType == MoveType.X_AND_Y) {
                // let moveDis = this.startPos.sub(this.endPos).mag();
                // console.log("touchEnd _moveDis = ",moveDis);
                // if(moveDis >= this.triggerDis){
                //     WorldEventManager.triggerEvent(EventEnum.TouchMove,moveDis);
                // }
                let xMoveDis = this.endPos.x - this.startPos.x;
                let yMoveDis = this.endPos.y - this.startPos.y;
                this.isCanCheck && this.touchEvents.forEach((value: cc.Component.EventHandler, index: number, array: cc.Component.EventHandler[]) => {
                    value.emit([this.id, xMoveDis, yMoveDis]);
                });
            } else {
                if (this.moveType == MoveType.ONLY_X) {
                    let call = () => {
                        if (!this.isCanCheck) {
                            return;
                        }
                        if (this.checkDir == CheckDir.NONE) {
                            this.touchEvents.forEach((value: cc.Component.EventHandler, index: number, array: cc.Component.EventHandler[]) => {
                                value.emit([this.id, moveDis, dir]);
                            });
                        } else if (this.checkDir == CheckDir.LEFT_DOWN) {
                            if (this.endPos.x < this.startPos.x) {
                                this.touchEvents.forEach((value: cc.Component.EventHandler, index: number, array: cc.Component.EventHandler[]) => {
                                    value.emit([this.id, moveDis]);
                                });
                            }
                        } else if (this.checkDir == CheckDir.RIGHT_UP) {
                            if (this.endPos.x > this.startPos.x) {
                                this.touchEvents.forEach((value: cc.Component.EventHandler, index: number, array: cc.Component.EventHandler[]) => {
                                    value.emit([this.id, moveDis]);
                                });
                            }
                        }
                    }
                    let dir = this.endPos.x - this.startPos.x > 0 ? 1 : -1;
                    let moveDis = Math.abs(this.endPos.x - this.startPos.x);
                    if (this.isMonitorDis) {
                        // console.log("this._moveDis = ", moveDis)
                        if (moveDis >= this.triggerDis) {
                            call();
                        }
                    } else {
                        call();
                    }
                } else if (this.moveType == MoveType.ONLY_Y) {
                    let call = () => {
                        if (!this.isCanCheck) {
                            return;
                        }
                        if (this.checkDir == CheckDir.NONE) {
                            this.touchEvents.forEach((value: cc.Component.EventHandler, index: number, array: cc.Component.EventHandler[]) => {
                                value.emit([this.id, moveDis]);
                            });
                        } else if (this.checkDir == CheckDir.LEFT_DOWN) {
                            if (this.endPos.y < this.startPos.y) {
                                this.touchEvents.forEach((value: cc.Component.EventHandler, index: number, array: cc.Component.EventHandler[]) => {
                                    value.emit([this.id, moveDis]);
                                });
                            }
                        } else if (this.checkDir == CheckDir.RIGHT_UP) {
                            if (this.endPos.y > this.startPos.y) {
                                this.touchEvents.forEach((value: cc.Component.EventHandler, index: number, array: cc.Component.EventHandler[]) => {
                                    value.emit([this.id, moveDis]);
                                });
                            }
                        }
                    }
                    let moveDis = Math.abs(this.endPos.y - this.startPos.y);
                    if (this.isMonitorDis) {
                        // console.log("moveDis = ", moveDis)
                        if (moveDis >= this.triggerDis) {
                            call();
                        }
                    } else {
                        call();
                    }
                }
            }
        }

        this.isMove = false;
        this.startPos = cc.Vec2.ZERO;
        this.endPos = cc.Vec2.ZERO;
        this.lastPos = cc.Vec2.ZERO;
    }

    public setCheckDir(dir: CheckDir) {
        this.checkDir = dir;
    }

    public setIsCanCheck(isCheck: boolean) {
        this.isCanCheck = isCheck;
    }
}