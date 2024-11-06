import { BundleData } from "./BundleData";
import { BundleName } from "./BundleName";

export const SoundPath = {

    button_click: new BundleData(BundleName.Assets, "audio/dianji"),
    //剧情
    //lv1
    lv_1_1_0: new BundleData("level1", "audio/1_1_0"),
    lv_1_1_1: new BundleData("level1", "audio/1_1_1"),
    lv_1_1_2: new BundleData("level1", "audio/1_1_2"),
    lv_1_2_0: new BundleData("level1", "audio/1_2_0"),
    lv_1_3_0: new BundleData("level1", "audio/1_3_0"),
    lv_1_4_0: new BundleData("level1", "audio/1_4_0"),
    lv_1_5_0: new BundleData("level1", "audio/1_5_0"),
    lv_1_6_0: new BundleData("level1", "audio/1_6_0"),
    lv_1_6_1: new BundleData("level1", "audio/1_6_1"),
    lv_1_6_2: new BundleData("level1", "audio/1_6_2"),
    jiandao: new BundleData("level1", "audio/jiandao"),
    pingguo: new BundleData("level1", "audio/pingguo"),

    //bgm
    bgm: new BundleData(BundleName.Assets, "audio/bgm"),
    //裁纸刀
    caizhi: new BundleData(BundleName.Assets, "audio/caizhi"),
    //切换关卡
    guanqia: new BundleData(BundleName.Assets, "audio/guanqia"),
}

export enum SoundEnum {
    button_click = 0,

}
