"use strict";
cc._RF.push(module, '10eabNB0O1E572N1t0Usz9S', 'UiPath');
// homePage/script/common/UiPath.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiPath = void 0;
var BundleData_1 = require("./BundleData");
var BundleName_1 = require("./BundleName");
exports.UiPath = {
    StartView: new BundleData_1.BundleData(BundleName_1.BundleName.Start, "prefab/StartView"),
    AdUnlockView: new BundleData_1.BundleData(BundleName_1.BundleName.Common, "prefab/adUnlock/AdUnlockView"),
    EndView: new BundleData_1.BundleData(BundleName_1.BundleName.Common, "prefab/end/EndView"),
    HotView: new BundleData_1.BundleData(BundleName_1.BundleName.Common, "prefab/hot/HotView"),
    NumView: new BundleData_1.BundleData(BundleName_1.BundleName.Common, "prefab/num/NumView"),
    SetView: new BundleData_1.BundleData(BundleName_1.BundleName.Common, "prefab/set/SetView"),
    TipView: new BundleData_1.BundleData(BundleName_1.BundleName.Common, "prefab/tip/TipView"),
    WxtsView: new BundleData_1.BundleData(BundleName_1.BundleName.Common, "prefab/wxts/WxtsView"),
    ZytsView: new BundleData_1.BundleData(BundleName_1.BundleName.Common, "prefab/zyts/ZytsView"),
    LevelView: new BundleData_1.BundleData(BundleName_1.BundleName.Common, "prefab/level/LevelView"),
    LoadView: new BundleData_1.BundleData(BundleName_1.BundleName.Common, "prefab/load/LoadView"),
};

cc._RF.pop();