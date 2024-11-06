
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/UiPath.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxVaVBhdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkNBQTBDO0FBQzFDLDJDQUEwQztBQUU3QixRQUFBLE1BQU0sR0FBRztJQUVsQixTQUFTLEVBQUUsSUFBSSx1QkFBVSxDQUFDLHVCQUFVLENBQUMsS0FBSyxFQUFFLGtCQUFrQixDQUFDO0lBQy9ELFlBQVksRUFBRSxJQUFJLHVCQUFVLENBQUMsdUJBQVUsQ0FBQyxNQUFNLEVBQUUsOEJBQThCLENBQUM7SUFDL0UsT0FBTyxFQUFFLElBQUksdUJBQVUsQ0FBQyx1QkFBVSxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQztJQUNoRSxPQUFPLEVBQUUsSUFBSSx1QkFBVSxDQUFDLHVCQUFVLENBQUMsTUFBTSxFQUFFLG9CQUFvQixDQUFDO0lBQ2hFLE9BQU8sRUFBRSxJQUFJLHVCQUFVLENBQUMsdUJBQVUsQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLENBQUM7SUFDaEUsT0FBTyxFQUFFLElBQUksdUJBQVUsQ0FBQyx1QkFBVSxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQztJQUNoRSxPQUFPLEVBQUUsSUFBSSx1QkFBVSxDQUFDLHVCQUFVLENBQUMsTUFBTSxFQUFFLG9CQUFvQixDQUFDO0lBQ2hFLFFBQVEsRUFBRSxJQUFJLHVCQUFVLENBQUMsdUJBQVUsQ0FBQyxNQUFNLEVBQUUsc0JBQXNCLENBQUM7SUFDbkUsUUFBUSxFQUFFLElBQUksdUJBQVUsQ0FBQyx1QkFBVSxDQUFDLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQztJQUNuRSxTQUFTLEVBQUUsSUFBSSx1QkFBVSxDQUFDLHVCQUFVLENBQUMsTUFBTSxFQUFFLHdCQUF3QixDQUFDO0lBQ3RFLFFBQVEsRUFBRSxJQUFJLHVCQUFVLENBQUMsdUJBQVUsQ0FBQyxNQUFNLEVBQUUsc0JBQXNCLENBQUM7Q0FDdEUsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBCdW5kbGVEYXRhIH0gZnJvbSBcIi4vQnVuZGxlRGF0YVwiO1xyXG5pbXBvcnQgeyBCdW5kbGVOYW1lIH0gZnJvbSBcIi4vQnVuZGxlTmFtZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVpUGF0aCA9IHtcclxuXHJcbiAgICBTdGFydFZpZXc6IG5ldyBCdW5kbGVEYXRhKEJ1bmRsZU5hbWUuU3RhcnQsIFwicHJlZmFiL1N0YXJ0Vmlld1wiKSxcclxuICAgIEFkVW5sb2NrVmlldzogbmV3IEJ1bmRsZURhdGEoQnVuZGxlTmFtZS5Db21tb24sIFwicHJlZmFiL2FkVW5sb2NrL0FkVW5sb2NrVmlld1wiKSxcclxuICAgIEVuZFZpZXc6IG5ldyBCdW5kbGVEYXRhKEJ1bmRsZU5hbWUuQ29tbW9uLCBcInByZWZhYi9lbmQvRW5kVmlld1wiKSxcclxuICAgIEhvdFZpZXc6IG5ldyBCdW5kbGVEYXRhKEJ1bmRsZU5hbWUuQ29tbW9uLCBcInByZWZhYi9ob3QvSG90Vmlld1wiKSxcclxuICAgIE51bVZpZXc6IG5ldyBCdW5kbGVEYXRhKEJ1bmRsZU5hbWUuQ29tbW9uLCBcInByZWZhYi9udW0vTnVtVmlld1wiKSxcclxuICAgIFNldFZpZXc6IG5ldyBCdW5kbGVEYXRhKEJ1bmRsZU5hbWUuQ29tbW9uLCBcInByZWZhYi9zZXQvU2V0Vmlld1wiKSxcclxuICAgIFRpcFZpZXc6IG5ldyBCdW5kbGVEYXRhKEJ1bmRsZU5hbWUuQ29tbW9uLCBcInByZWZhYi90aXAvVGlwVmlld1wiKSxcclxuICAgIFd4dHNWaWV3OiBuZXcgQnVuZGxlRGF0YShCdW5kbGVOYW1lLkNvbW1vbiwgXCJwcmVmYWIvd3h0cy9XeHRzVmlld1wiKSxcclxuICAgIFp5dHNWaWV3OiBuZXcgQnVuZGxlRGF0YShCdW5kbGVOYW1lLkNvbW1vbiwgXCJwcmVmYWIvenl0cy9aeXRzVmlld1wiKSxcclxuICAgIExldmVsVmlldzogbmV3IEJ1bmRsZURhdGEoQnVuZGxlTmFtZS5Db21tb24sIFwicHJlZmFiL2xldmVsL0xldmVsVmlld1wiKSxcclxuICAgIExvYWRWaWV3OiBuZXcgQnVuZGxlRGF0YShCdW5kbGVOYW1lLkNvbW1vbiwgXCJwcmVmYWIvbG9hZC9Mb2FkVmlld1wiKSxcclxufSJdfQ==