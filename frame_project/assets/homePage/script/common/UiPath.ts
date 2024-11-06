
import { BundleData } from "./BundleData";
import { BundleName } from "./BundleName";

export const UiPath = {

    StartView: new BundleData(BundleName.Start, "prefab/StartView"),
    AdUnlockView: new BundleData(BundleName.Common, "prefab/adUnlock/AdUnlockView"),
    EndView: new BundleData(BundleName.Common, "prefab/end/EndView"),
    HotView: new BundleData(BundleName.Common, "prefab/hot/HotView"),
    NumView: new BundleData(BundleName.Common, "prefab/num/NumView"),
    SetView: new BundleData(BundleName.Common, "prefab/set/SetView"),
    TipView: new BundleData(BundleName.Common, "prefab/tip/TipView"),
    WxtsView: new BundleData(BundleName.Common, "prefab/wxts/WxtsView"),
    ZytsView: new BundleData(BundleName.Common, "prefab/zyts/ZytsView"),
    LevelView: new BundleData(BundleName.Common, "prefab/level/LevelView"),
    LoadView: new BundleData(BundleName.Common, "prefab/load/LoadView"),
}