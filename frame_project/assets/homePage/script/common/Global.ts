
export enum EventEnum {
    TopUIChange = "TopUIChange",
    RefreshPlayerInfo = "RefreshPlayerInfo"
}

export enum AssetPath {
    /**关卡icon */
    lv_icon = "texture/levelIcon/",
    /**关卡icon */
    lv_title = "texture/levelTitle/",
    /**道具 */
    prop = "texture/prop/"
}

export class LvInfo {
    lv: number;
    isUnlock: boolean;
    //已解锁的结局
    unlockEndings: number[];
    //已解锁的提示
    unlockTips: number[];
}
