"use strict";
cc._RF.push(module, '4ce1eQEhj5F+7e5M4UnDa5e', 'SoundPath');
// homePage/script/common/SoundPath.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundEnum = exports.SoundPath = void 0;
var BundleData_1 = require("./BundleData");
var BundleName_1 = require("./BundleName");
exports.SoundPath = {
    button_click: new BundleData_1.BundleData(BundleName_1.BundleName.Assets, "audio/dianji"),
    //剧情
    //lv1
    lv_1_1_0: new BundleData_1.BundleData("level1", "audio/1_1_0"),
    lv_1_1_1: new BundleData_1.BundleData("level1", "audio/1_1_1"),
    lv_1_1_2: new BundleData_1.BundleData("level1", "audio/1_1_2"),
    lv_1_2_0: new BundleData_1.BundleData("level1", "audio/1_2_0"),
    lv_1_3_0: new BundleData_1.BundleData("level1", "audio/1_3_0"),
    lv_1_4_0: new BundleData_1.BundleData("level1", "audio/1_4_0"),
    lv_1_5_0: new BundleData_1.BundleData("level1", "audio/1_5_0"),
    lv_1_6_0: new BundleData_1.BundleData("level1", "audio/1_6_0"),
    lv_1_6_1: new BundleData_1.BundleData("level1", "audio/1_6_1"),
    lv_1_6_2: new BundleData_1.BundleData("level1", "audio/1_6_2"),
    jiandao: new BundleData_1.BundleData("level1", "audio/jiandao"),
    pingguo: new BundleData_1.BundleData("level1", "audio/pingguo"),
    //bgm
    bgm: new BundleData_1.BundleData(BundleName_1.BundleName.Assets, "audio/bgm"),
    //裁纸刀
    caizhi: new BundleData_1.BundleData(BundleName_1.BundleName.Assets, "audio/caizhi"),
    //切换关卡
    guanqia: new BundleData_1.BundleData(BundleName_1.BundleName.Assets, "audio/guanqia"),
};
var SoundEnum;
(function (SoundEnum) {
    SoundEnum[SoundEnum["button_click"] = 0] = "button_click";
})(SoundEnum = exports.SoundEnum || (exports.SoundEnum = {}));

cc._RF.pop();