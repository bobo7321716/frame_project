import { UiBase } from "../../homePage/script/common/UiBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class StartView extends UiBase {

    init() {
        return Promise.resolve();
    }
}
