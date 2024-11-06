import { Util } from "./Util";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BgCol extends cc.Component {

    @property
    initScale: number = 1;

    @property({ displayName: "最大缩放倍率" })
    scale: number = 1.5;

    private get sceneSize() {
        return cc.winSize;
    };
    private minScale: number = 1;
    private maxScale: number = 1;
    private startDis: number = 0;
    private curScale: number = 1;
    private touchOffset: cc.Vec2 = cc.Vec2.ZERO;
    private touchId: number = null;
    private changeTimes: number = 0;
    private startPos: cc.Vec2 = null;
    public isRegaler: boolean = false;
    public scaleCb: (scale: number) => void = null;
    public moveCb: (pos: cc.Vec2) => void = null;
    public startClickCb: () => void = null;

    private isBgAutoMoving = false;

    protected onLoad(): void {
        this.node.setScale(this.initScale);
        this.curScale = this.initScale;
        let wiget = this.node.parent.getComponent(cc.Widget);
        wiget.updateAlignment();
        let imgSize = this.node.getContentSize();
        let widthScale = cc.winSize.width / imgSize.width;
        let heightScale = cc.winSize.height / imgSize.height;
        this.minScale = Math.max(widthScale, heightScale);
        if (this.initScale == 1) {
            this.maxScale = this.minScale * this.scale;
        } else if (this.initScale < 1) {
            this.minScale = this.initScale > this.minScale ? this.initScale : this.minScale;
            this.maxScale = this.scale;
        }
        this.isRegaler = false;
    }

    protected start(): void {
        this.curScale = this.minScale;
        this.node.setScale(this.curScale);
    }

    protected onEnable(): void {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.changeTimes = 0;
    }

    protected onDisable(): void {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    init(pos: cc.Vec2, scale: number = this.minScale) {
        this.node.setScale(scale);
        this.node.setPosition(pos);
        this.curScale = scale;
        this.isRegaler = false;
        this.isBgAutoMoving = false;
        this.scaleCb && this.scaleCb(this.curScale);
        this.moveCb && this.moveCb(pos);
    }

    emitFunc() {
        this.scaleCb && this.scaleCb(this.curScale);
        this.moveCb && this.moveCb(this.node.getPosition());
    }

    changeScaleClick() {
        this.changeTimes++;
        if (this.changeTimes > 2) {
            this.changeTimes = 0;
        }
        this.curScale = this.changeTimes == 0 ? this.minScale : this.changeTimes == 1 ? (this.maxScale - this.minScale) / 2 + this.minScale : this.maxScale;
        this.node.scale = this.curScale;
        this.scaleCb && this.scaleCb(this.curScale);
    }

    protected onTouchStart(event: cc.Event.EventTouch) {
        if (this.isRegaler) return;
        if (this.isBgAutoMoving) return;
        let localPos = event.getLocation();
        let touchPos = this.node.parent.convertToNodeSpaceAR(localPos);
        let worldPos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        let nodePos = this.node.parent.convertToNodeSpaceAR(worldPos);
        this.touchOffset = touchPos.sub(nodePos);
        this.node.setPosition(touchPos.sub(this.touchOffset));
        this.startDis = 0;
        this.curScale = this.node.scale;
        this.startPos = localPos;
        this.touchId = event.getID();
        this.startClickCb && this.startClickCb();
    }

    protected onTouchMove(event: cc.Event.EventTouch) {
        if (this.isRegaler) return;
        if (this.isBgAutoMoving) return;
        let touchs = event.getTouches();

        /**缩放 */
        if (touchs.length == 2) {
            //缩放
            let touchPoint1 = touchs[0].getLocation();
            let touchPoint2 = touchs[1].getLocation();
            let curDis = touchPoint1.sub(touchPoint2).mag();
            if (curDis < 0) {
                curDis = 0;
            }
            if (!this.startDis || this.startDis <= 0) {
                this.startDis = curDis;
                this.curScale = this.node.scale;
            } else {
                let scale = curDis / this.startDis * this.curScale;
                if (scale >= this.maxScale) {
                    scale = this.maxScale;
                } else if (scale < this.minScale) {
                    scale = this.minScale;
                }
                this.node.scale = scale;
            }
            this.scaleCb && this.scaleCb(this.node.scale);
        }
        //移动
        let id = event.getID();
        if (id == this.touchId) {
            const nodePos = this.calcEndPoint(event.getDelta());
            this.node.setPosition(nodePos);
            this.moveCb && this.moveCb(nodePos);
        }
    }

    protected onTouchEnd(event: cc.Event.EventTouch) {
        // let id = event.getID();
        // if (id == this.touchId) {
        //     let pos = event.getLocation();
        //     let moveDis = this.startPos.sub(pos).mag();
        //     if (moveDis < 10) {
        //         console.log("点击");
        //     } else {
        //         console.log("拖动")
        //     }
        // }
    }

    calcEndPoint(offsetPoint) {
        let nodeWidth = this.node.width;
        let nodeHeight = this.node.height;
        let nodeScale = this.node.scale;
        let clampR = nodeWidth / 2 * nodeScale - this.sceneSize.width / 2;
        clampR = Math.max(0, clampR);
        let clampL = -nodeWidth / 2 * nodeScale + this.sceneSize.width / 2;
        clampL = Math.min(0, clampL);
        let clampT = nodeHeight / 2 * nodeScale - this.sceneSize.height / 2;
        clampT = Math.max(0, clampT);
        let clampB = -nodeHeight / 2 * nodeScale + this.sceneSize.height / 2;
        clampB = Math.min(0, clampB);

        let nodePos = this.node.getPosition();
        nodePos = nodePos.add(offsetPoint);
        nodePos.x = Util.clampValue(nodePos.x, clampL, clampR);
        nodePos.y = Util.clampValue(nodePos.y, clampB, clampT);

        return nodePos;
    }

    /**
     * 自动移动背景
     * @param point 终点，世界坐标
     * @returns 
     */
    autoMove(point: cc.Vec2) {
        return new Promise(resolve => {
            this.isBgAutoMoving = true;

            const winCenter = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2);
            const offsetPoint = winCenter.sub(point);

            const nodePos = this.calcEndPoint(offsetPoint);
            const time = nodePos.sub(this.node.getPosition()).len() / 1000;
            this.node.stopAllActions();
            cc.tween(this.node)
                .to(time, { x: nodePos.x, y: nodePos.y })
                .call(() => {
                    this.isBgAutoMoving = false;
                    resolve(null);
                })
                .start();
        })
    }

    protected update(dt: number): void {
        if (!this.isBgAutoMoving) return;
        this.moveCb && this.moveCb(this.node.getPosition());
    }
}
