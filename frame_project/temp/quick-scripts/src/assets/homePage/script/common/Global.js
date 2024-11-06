"use strict";
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