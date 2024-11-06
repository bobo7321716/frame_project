import { EventManager } from "../manager/EventManager";
import RedPointManager from "../manager/RedPointManager";
import { EventEnum } from "./Global";
import { Util } from "./Util";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedPointTag extends cc.Component {

    @property([cc.Integer])
    keys: number[] = [];

    @property(cc.Node)
    point: cc.Node = null;

    protected onLoad(): void {
        EventManager.addListener(EventEnum.RedPointRefresh, this.refreshRedPoint, this);
        this.point.stopAllActions();
        cc.tween(this.point)
            .repeatForever(
                cc.tween()
                    .repeat(2,
                        cc.tween()
                            .to(0.2, { angle: 10 })
                            .to(0.2, { angle: -10 })
                            .to(0.1, { angle: 0 })
                    )
                    .delay(1)
            )
            .start();
    }

    protected onEnable(): void {
        this.refreshRedPoint();
    }

    refreshRedPoint() {
        let sameArr = Util.getCommonElements(RedPointManager.ins.allShowRedPoints, this.keys);
        this.point.active = sameArr.length > 0;
    }
}
