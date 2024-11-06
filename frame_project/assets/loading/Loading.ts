
const { ccclass, property } = cc._decorator;

@ccclass
export default class Loading extends cc.Component {

    protected start(): void {
        cc.director.loadScene("HomePage");
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.triggerGC();
        }
    }
}
