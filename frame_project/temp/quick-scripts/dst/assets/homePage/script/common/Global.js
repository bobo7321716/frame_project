
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0940WNzhNHMZAvBww3XrkN', 'Global');
// homePage/script/common/Global.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LvInfo = exports.AssetPath = exports.EventEnum = void 0;
var EventEnum;
(function (EventEnum) {
    EventEnum["TopUIChange"] = "TopUIChange";
    EventEnum["RefreshPlayerInfo"] = "RefreshPlayerInfo";
})(EventEnum = exports.EventEnum || (exports.EventEnum = {}));
var AssetPath;
(function (AssetPath) {
    /**关卡icon */
    AssetPath["lv_icon"] = "texture/levelIcon/";
    /**关卡icon */
    AssetPath["lv_title"] = "texture/levelTitle/";
    /**道具 */
    AssetPath["prop"] = "texture/prop/";
})(AssetPath = exports.AssetPath || (exports.AssetPath = {}));
var LvInfo = /** @class */ (function () {
    function LvInfo() {
    }
    return LvInfo;
}());
exports.LvInfo = LvInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxHbG9iYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBWSxTQUdYO0FBSEQsV0FBWSxTQUFTO0lBQ2pCLHdDQUEyQixDQUFBO0lBQzNCLG9EQUF1QyxDQUFBO0FBQzNDLENBQUMsRUFIVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUdwQjtBQUVELElBQVksU0FPWDtBQVBELFdBQVksU0FBUztJQUNqQixZQUFZO0lBQ1osMkNBQThCLENBQUE7SUFDOUIsWUFBWTtJQUNaLDZDQUFnQyxDQUFBO0lBQ2hDLFFBQVE7SUFDUixtQ0FBc0IsQ0FBQTtBQUMxQixDQUFDLEVBUFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFPcEI7QUFFRDtJQUFBO0lBT0EsQ0FBQztJQUFELGFBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBlbnVtIEV2ZW50RW51bSB7XHJcbiAgICBUb3BVSUNoYW5nZSA9IFwiVG9wVUlDaGFuZ2VcIixcclxuICAgIFJlZnJlc2hQbGF5ZXJJbmZvID0gXCJSZWZyZXNoUGxheWVySW5mb1wiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFzc2V0UGF0aCB7XHJcbiAgICAvKirlhbPljaFpY29uICovXHJcbiAgICBsdl9pY29uID0gXCJ0ZXh0dXJlL2xldmVsSWNvbi9cIixcclxuICAgIC8qKuWFs+WNoWljb24gKi9cclxuICAgIGx2X3RpdGxlID0gXCJ0ZXh0dXJlL2xldmVsVGl0bGUvXCIsXHJcbiAgICAvKirpgZPlhbcgKi9cclxuICAgIHByb3AgPSBcInRleHR1cmUvcHJvcC9cIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTHZJbmZvIHtcclxuICAgIGx2OiBudW1iZXI7XHJcbiAgICBpc1VubG9jazogYm9vbGVhbjtcclxuICAgIC8v5bey6Kej6ZSB55qE57uT5bGAXHJcbiAgICB1bmxvY2tFbmRpbmdzOiBudW1iZXJbXTtcclxuICAgIC8v5bey6Kej6ZSB55qE5o+Q56S6XHJcbiAgICB1bmxvY2tUaXBzOiBudW1iZXJbXTtcclxufVxyXG4iXX0=