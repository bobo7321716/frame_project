
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/SoundPath.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxTb3VuZFBhdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBDO0FBQzFDLDJDQUEwQztBQUU3QixRQUFBLFNBQVMsR0FBRztJQUVyQixZQUFZLEVBQUUsSUFBSSx1QkFBVSxDQUFDLHVCQUFVLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQztJQUMvRCxJQUFJO0lBQ0osS0FBSztJQUNMLFFBQVEsRUFBRSxJQUFJLHVCQUFVLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQztJQUNqRCxRQUFRLEVBQUUsSUFBSSx1QkFBVSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUM7SUFDakQsUUFBUSxFQUFFLElBQUksdUJBQVUsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDO0lBQ2pELFFBQVEsRUFBRSxJQUFJLHVCQUFVLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQztJQUNqRCxRQUFRLEVBQUUsSUFBSSx1QkFBVSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUM7SUFDakQsUUFBUSxFQUFFLElBQUksdUJBQVUsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDO0lBQ2pELFFBQVEsRUFBRSxJQUFJLHVCQUFVLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQztJQUNqRCxRQUFRLEVBQUUsSUFBSSx1QkFBVSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUM7SUFDakQsUUFBUSxFQUFFLElBQUksdUJBQVUsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDO0lBQ2pELFFBQVEsRUFBRSxJQUFJLHVCQUFVLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQztJQUNqRCxPQUFPLEVBQUUsSUFBSSx1QkFBVSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUM7SUFDbEQsT0FBTyxFQUFFLElBQUksdUJBQVUsQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDO0lBRWxELEtBQUs7SUFDTCxHQUFHLEVBQUUsSUFBSSx1QkFBVSxDQUFDLHVCQUFVLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQztJQUNuRCxLQUFLO0lBQ0wsTUFBTSxFQUFFLElBQUksdUJBQVUsQ0FBQyx1QkFBVSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUM7SUFDekQsTUFBTTtJQUNOLE9BQU8sRUFBRSxJQUFJLHVCQUFVLENBQUMsdUJBQVUsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDO0NBQzlELENBQUE7QUFFRCxJQUFZLFNBR1g7QUFIRCxXQUFZLFNBQVM7SUFDakIseURBQWdCLENBQUE7QUFFcEIsQ0FBQyxFQUhXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBR3BCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVuZGxlRGF0YSB9IGZyb20gXCIuL0J1bmRsZURhdGFcIjtcclxuaW1wb3J0IHsgQnVuZGxlTmFtZSB9IGZyb20gXCIuL0J1bmRsZU5hbWVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTb3VuZFBhdGggPSB7XHJcblxyXG4gICAgYnV0dG9uX2NsaWNrOiBuZXcgQnVuZGxlRGF0YShCdW5kbGVOYW1lLkFzc2V0cywgXCJhdWRpby9kaWFuamlcIiksXHJcbiAgICAvL+WJp+aDhVxyXG4gICAgLy9sdjFcclxuICAgIGx2XzFfMV8wOiBuZXcgQnVuZGxlRGF0YShcImxldmVsMVwiLCBcImF1ZGlvLzFfMV8wXCIpLFxyXG4gICAgbHZfMV8xXzE6IG5ldyBCdW5kbGVEYXRhKFwibGV2ZWwxXCIsIFwiYXVkaW8vMV8xXzFcIiksXHJcbiAgICBsdl8xXzFfMjogbmV3IEJ1bmRsZURhdGEoXCJsZXZlbDFcIiwgXCJhdWRpby8xXzFfMlwiKSxcclxuICAgIGx2XzFfMl8wOiBuZXcgQnVuZGxlRGF0YShcImxldmVsMVwiLCBcImF1ZGlvLzFfMl8wXCIpLFxyXG4gICAgbHZfMV8zXzA6IG5ldyBCdW5kbGVEYXRhKFwibGV2ZWwxXCIsIFwiYXVkaW8vMV8zXzBcIiksXHJcbiAgICBsdl8xXzRfMDogbmV3IEJ1bmRsZURhdGEoXCJsZXZlbDFcIiwgXCJhdWRpby8xXzRfMFwiKSxcclxuICAgIGx2XzFfNV8wOiBuZXcgQnVuZGxlRGF0YShcImxldmVsMVwiLCBcImF1ZGlvLzFfNV8wXCIpLFxyXG4gICAgbHZfMV82XzA6IG5ldyBCdW5kbGVEYXRhKFwibGV2ZWwxXCIsIFwiYXVkaW8vMV82XzBcIiksXHJcbiAgICBsdl8xXzZfMTogbmV3IEJ1bmRsZURhdGEoXCJsZXZlbDFcIiwgXCJhdWRpby8xXzZfMVwiKSxcclxuICAgIGx2XzFfNl8yOiBuZXcgQnVuZGxlRGF0YShcImxldmVsMVwiLCBcImF1ZGlvLzFfNl8yXCIpLFxyXG4gICAgamlhbmRhbzogbmV3IEJ1bmRsZURhdGEoXCJsZXZlbDFcIiwgXCJhdWRpby9qaWFuZGFvXCIpLFxyXG4gICAgcGluZ2d1bzogbmV3IEJ1bmRsZURhdGEoXCJsZXZlbDFcIiwgXCJhdWRpby9waW5nZ3VvXCIpLFxyXG5cclxuICAgIC8vYmdtXHJcbiAgICBiZ206IG5ldyBCdW5kbGVEYXRhKEJ1bmRsZU5hbWUuQXNzZXRzLCBcImF1ZGlvL2JnbVwiKSxcclxuICAgIC8v6KOB57q45YiAXHJcbiAgICBjYWl6aGk6IG5ldyBCdW5kbGVEYXRhKEJ1bmRsZU5hbWUuQXNzZXRzLCBcImF1ZGlvL2NhaXpoaVwiKSxcclxuICAgIC8v5YiH5o2i5YWz5Y2hXHJcbiAgICBndWFucWlhOiBuZXcgQnVuZGxlRGF0YShCdW5kbGVOYW1lLkFzc2V0cywgXCJhdWRpby9ndWFucWlhXCIpLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBTb3VuZEVudW0ge1xyXG4gICAgYnV0dG9uX2NsaWNrID0gMCxcclxuXHJcbn1cclxuIl19