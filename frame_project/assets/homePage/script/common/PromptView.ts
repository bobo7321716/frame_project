
const { ccclass, property } = cc._decorator;

@ccclass
export default class PromptView extends cc.Component {
    @property(cc.Label)
    text: cc.Label = null;

    private curAnim: cc.Tween = null;

    private isShowing = false;

    init(Tiptext: string) {
        this.text.string = Tiptext;
        this.show();
    }

    show() {
        if (!cc.isValid(this)) return;
        this.curAnim?.stop();
        if (!this.isShowing) {
            this.node.active = true;
            this.isShowing = true;
            this.curAnim = cc.tween(this.node)
                .set({ opacity: 0 })
                .to(0.2, { opacity: 255 })
                .delay(2)
                .call(this.hide.bind(this))
                .start();
        } else {
            this.curAnim = cc.tween(this.node)
                .set({ opacity: 255 })
                .delay(2)
                .call(this.hide.bind(this))
                .start();
        }
    }

    hide() {
        if (!cc.isValid(this)) return;
        this.curAnim?.stop();
        this.isShowing = false;
        this.curAnim = cc.tween(this.node)
            .to(0.2, { opacity: 0 })
            .call(() => {
                this.node.active = false;
                this.curAnim = null;
            })
            .start();
    }
}
