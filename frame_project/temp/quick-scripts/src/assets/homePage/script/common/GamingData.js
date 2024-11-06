"use strict";
cc._RF.push(module, 'f2050yMolBP7r2VEtSDZRKo', 'GamingData');
// homePage/script/common/GamingData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//存放游戏运行中的临时数据
var GamingData = /** @class */ (function () {
    function GamingData() {
    }
    GamingData.isFirstLogin = true;
    /**当前选择的关卡 */
    GamingData.curLv = 1;
    /**是否在限时解锁全部关卡中 */
    GamingData.isOnUnlockAllLv = false;
    return GamingData;
}());
exports.default = GamingData;

cc._RF.pop();