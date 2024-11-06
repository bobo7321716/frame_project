
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/PlayerData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b56b5ix1dBHIuwoPUhjrvi', 'PlayerData');
// homePage/script/common/PlayerData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerData = void 0;
var LevelConfig_1 = require("../config/LevelConfig");
var DataManager_1 = require("../manager/DataManager");
var EventManager_1 = require("../manager/EventManager");
var GamingData_1 = require("./GamingData");
var Global_1 = require("./Global");
var Util_1 = require("./Util");
//玩家数据类
var PlayerData = /** @class */ (function () {
    function PlayerData() {
        /**是否是新玩家 */
        this.isNewUser = true;
        /**上次登录时间 */
        this.lastLoginTime = 0;
        /**上次在线时长 */
        this.lastOnLineDur = 0;
        /**本次离线时长 */
        this.logOutDuration = 0;
        /**今日累计在线时长 */
        this.todayOnlineDuration = 0;
        /**是否播放音效 */
        this.isPlayAudio = true;
        /**是否播放bgm */
        this.isPlayMusic = true;
        /**玩家等级 */
        this.playerLevel = 1;
        /**累计登录天数 */
        this.totalLoginDays = 0;
        /**签到天数 */
        this.signDay = 0;
        /**玩家背包数据 */
        this.packageInfo = [];
        /**关卡数据 */
        this.levelInfos = [];
        /**观看广告次数 */
        this.finishAdTimes = 0;
        /**限时解锁全部关卡的开始时间 */
        this.unlockAlllvTime = -1;
    }
    Object.defineProperty(PlayerData, "ins", {
        get: function () {
            if (!this._ins) {
                this._ins = new PlayerData();
            }
            return this._ins;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 获取指定键名的值。
     * @param key 键名。
     */
    PlayerData.prototype.setLoaclStorageItem = function (key, value) {
        PlayerData.data[key] = value;
        this.saveData();
    };
    PlayerData.prototype.saveData = function () {
        for (var key in PlayerData.ins) {
            if (PlayerData.ins[key] instanceof Function) {
            }
            else {
                PlayerData.data[key] = PlayerData.ins[key];
            }
        }
        cc.sys.localStorage.setItem(PlayerData.gameName, JSON.stringify(PlayerData.data));
    };
    PlayerData.prototype.initData = function () {
        var localStorage = cc.sys.localStorage.getItem(PlayerData.gameName);
        var data = {};
        if (localStorage != null && localStorage != "") {
            data = JSON.parse(localStorage);
        }
        PlayerData.data = data;
        for (var key in PlayerData.ins) {
            if (PlayerData.ins[key] instanceof Function) {
            }
            else {
                PlayerData.ins[key] = PlayerData.data[key] == undefined ? PlayerData.ins[key] : PlayerData.data[key];
            }
        }
        this.initNewUserData();
        this.checkIsNextDay();
        this.logOutDuration = Date.now() - this.lastLoginTime - this.lastOnLineDur;
        this.lastLoginTime = Date.now();
        this.lastOnLineDur = 0;
        this.intervalCheck();
        this.saveData();
    };
    PlayerData.prototype.initNewUserData = function () {
        var _this = this;
        if (!this.isNewUser)
            return;
        this.isNewUser = false;
        this.lastLoginTime = Date.now();
        this.lastOnLineDur = 0;
        var levelConfigs = DataManager_1.default.ins.get(LevelConfig_1.LevelConfigMgr).datas;
        levelConfigs.forEach(function (v) {
            var info = new Global_1.LvInfo();
            info.lv = v.id;
            info.isUnlock = false;
            info.unlockTips = [];
            info.unlockEndings = [];
            _this.levelInfos.push(info);
        });
        this.saveData();
    };
    PlayerData.prototype.checkIsNextDay = function () {
        if (Util_1.Util.isNextDay(this.lastLoginTime, Date.now())) {
            this.totalLoginDays++;
            if (this.signDay > 7) {
                this.signDay = 0;
                this.totalLoginDays = 0;
            }
            this.todayOnlineDuration = 0;
            // if (Util.isNextWeek(this.lastLoginTime, TimeManager.ins.curTime)) {
            // }
        }
    };
    PlayerData.prototype.intervalCheck = function () {
        var _this = this;
        GamingData_1.default.isOnUnlockAllLv = this.unlockAlllvTime > 0 && (Date.now() - this.unlockAlllvTime) / 1000 / 60 / 60 < 24;
        setInterval(function () {
            GamingData_1.default.isOnUnlockAllLv = _this.unlockAlllvTime > 0 && (Date.now() - _this.unlockAlllvTime) / 1000 / 60 / 60 < 24;
        }, 1000);
    };
    /**更新道具数量 */
    PlayerData.prototype.changeItemNum = function (id, num, isRefresh, isSave) {
        if (isRefresh === void 0) { isRefresh = true; }
        if (isSave === void 0) { isSave = true; }
        if (num == 0)
            return;
        num = Math.floor(num);
        var info = this.packageInfo.find(function (v) { return v.id == id; });
        if (!info) {
            info = { id: id, num: num };
            this.packageInfo.push(info);
        }
        else {
            info.num = Math.max(0, info.num + num);
        }
        isSave && this.saveData();
        isRefresh && EventManager_1.EventManager.triggerEvent(Global_1.EventEnum.RefreshPlayerInfo, id);
    };
    /**获得道具数量 */
    PlayerData.prototype.getItemNum = function (id) {
        var info = this.packageInfo.find(function (v) { return v.id == id; });
        if (!info)
            return 0;
        return info.num;
    };
    /**检查消耗是否充足 */
    PlayerData.prototype.checkCostIsEnough = function (costs, isLog, isCost, isPop) {
        if (isLog === void 0) { isLog = false; }
        if (isCost === void 0) { isCost = false; }
        if (isPop === void 0) { isPop = false; }
        var isEnought = true;
        // let logStr = "";
        // costs.forEach((v, k) => {
        //     let config = DataManager.ins.get(Gs_itemMgr).getDataById(v.id);
        //     if (!config) return false;
        //     let isEnought2 = this.getItemNum(v.id) >= v.num;
        //     if (!isEnought2 && isEnought) isEnought = false;
        //     if (!isEnought2 && isLog) {
        //         logStr += config.Name + (k == costs.length - 1 ? "不足" : ",");
        //     }
        //     if (isCost && isEnought2) this.changeItemNum(v.id, -v.num);
        // })
        // if (!isEnought && isLog) {
        //     TipManager.ins.showTip(logStr);
        // }
        // if (isPop && !isEnought) {
        //     // UIManager.ins.openView(UiPath.AddAssetsView).then((view: AddAssetsView) => {
        //     //     view.init()
        //     // })
        // }
        return isEnought;
    };
    PlayerData.prototype.getLvInfo = function (lv) {
        return this.levelInfos.find(function (v) { return v.lv == lv; });
    };
    PlayerData.prototype.passLv = function (lv, resultId) {
        var info = this.levelInfos.find(function (v) { return v.lv == lv; });
        if (info) {
            info.isUnlock = true;
            info.unlockEndings.push(resultId);
            var maxLvConfig = DataManager_1.default.ins.get(LevelConfig_1.LevelConfigMgr).getMaxLvConfig();
            GamingData_1.default.curLv = Math.min(GamingData_1.default.curLv + 1, maxLvConfig.id);
        }
        else {
            console.warn("关卡数据为空");
        }
        this.saveData();
    };
    /**增加一次看广告次数 */
    PlayerData.prototype.addFinishAd = function (sucCb) {
        if (this.unlockAlllvTime > 0)
            return;
        this.finishAdTimes++;
        if (this.finishAdTimes >= 3) {
            this.unlockAlllvTime = Date.now();
            this.finishAdTimes = 0;
            sucCb && sucCb();
            this.saveData();
        }
    };
    /**解锁关卡提示 */
    PlayerData.prototype.unlockLvTip = function (lvConfig, index) {
        if (index === void 0) { index = null; }
        var lvInfo = this.getLvInfo(lvConfig.id);
        if (!lvInfo) {
            console.log("关卡未解锁");
            return;
        }
        if (index != null) {
            var isUnlock = lvInfo.unlockTips.includes(index);
            if (!isUnlock) {
                lvInfo.unlockTips.push(index);
                lvInfo.unlockTips.sort();
                this.saveData();
            }
        }
        else {
            lvInfo.unlockTips.sort();
            for (var i = 0; i < lvConfig.tips.length; i++) {
                if (!lvInfo.unlockTips.includes(i)) {
                    lvInfo.unlockTips.push(i);
                    lvInfo.unlockTips.sort();
                    this.saveData();
                    break;
                }
            }
        }
    };
    PlayerData._ins = null;
    PlayerData.gameName = "GWYS";
    PlayerData.data = {};
    return PlayerData;
}());
exports.PlayerData = PlayerData;
window["PlayerData"] = PlayerData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxQbGF5ZXJEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFvRTtBQUNwRSxzREFBaUQ7QUFDakQsd0RBQXVEO0FBQ3ZELDJDQUFzQztBQUN0QyxtQ0FBNkM7QUFDN0MsK0JBQThCO0FBSTlCLE9BQU87QUFDUDtJQUFBO1FBaUNJLFlBQVk7UUFDTCxjQUFTLEdBQVksSUFBSSxDQUFDO1FBQ2pDLFlBQVk7UUFDTCxrQkFBYSxHQUFXLENBQUMsQ0FBQztRQUNqQyxZQUFZO1FBQ0wsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDakMsWUFBWTtRQUNMLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQ2xDLGNBQWM7UUFDUCx3QkFBbUIsR0FBVyxDQUFDLENBQUM7UUFDdkMsWUFBWTtRQUNMLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQ25DLGFBQWE7UUFDTixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUNuQyxVQUFVO1FBQ0gsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDL0IsWUFBWTtRQUNMLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQ2xDLFVBQVU7UUFDSCxZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLFlBQVk7UUFDTCxnQkFBVyxHQUFrQyxFQUFFLENBQUM7UUFDdkQsVUFBVTtRQUNILGVBQVUsR0FBYSxFQUFFLENBQUM7UUFDakMsWUFBWTtRQUNMLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQ2pDLG1CQUFtQjtRQUNaLG9CQUFlLEdBQVcsQ0FBQyxDQUFDLENBQUM7SUFvS3hDLENBQUM7SUEzTkcsc0JBQWtCLGlCQUFHO2FBQXJCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO2FBQ2hDO1lBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENB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Q0FBQyxRQUFRLEVBQUU7Z0JBQ1gsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNuQjtTQUNKO2FBQU07WUFDSCxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNoQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDekIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNoQixNQUFNO2lCQUNUO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUE3TmMsZUFBSSxHQUFlLElBQUksQ0FBQztJQUN6QixtQkFBUSxHQUFXLE1BQU0sQ0FBQztJQVMxQixlQUFJLEdBQUcsRUFBRSxDQUFDO0lBb041QixpQkFBQztDQWhPRCxBQWdPQyxJQUFBO0FBaE9ZLGdDQUFVO0FBaU92QixNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsVUFBVSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExldmVsQ29uZmlnLCB7IExldmVsQ29uZmlnTWdyIH0gZnJvbSBcIi4uL2NvbmZpZy9MZXZlbENvbmZpZ1wiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyIH0gZnJvbSBcIi4uL21hbmFnZXIvRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCBHYW1pbmdEYXRhIGZyb20gXCIuL0dhbWluZ0RhdGFcIjtcclxuaW1wb3J0IHsgRXZlbnRFbnVtLCBMdkluZm8gfSBmcm9tIFwiLi9HbG9iYWxcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuL1V0aWxcIjtcclxuXHJcblxyXG5cclxuLy/njqnlrrbmlbDmja7nsbtcclxuZXhwb3J0IGNsYXNzIFBsYXllckRhdGEge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnM6IFBsYXllckRhdGEgPSBudWxsO1xyXG4gICAgcHVibGljIHN0YXRpYyBnYW1lTmFtZTogc3RyaW5nID0gXCJHV1lTXCI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zKCk6IFBsYXllckRhdGEge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lucyA9IG5ldyBQbGF5ZXJEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkYXRhID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bmjIflrprplK7lkI3nmoTlgLzjgIJcclxuICAgICAqIEBwYXJhbSBrZXkg6ZSu5ZCN44CCXHJcbiAgICAgKi9cclxuICAgIHNldExvYWNsU3RvcmFnZUl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBQbGF5ZXJEYXRhLmRhdGFba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2F2ZURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlRGF0YSgpIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gUGxheWVyRGF0YS5pbnMpIHtcclxuICAgICAgICAgICAgaWYgKFBsYXllckRhdGEuaW5zW2tleV0gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgUGxheWVyRGF0YS5kYXRhW2tleV0gPSBQbGF5ZXJEYXRhLmluc1trZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShQbGF5ZXJEYXRhLmdhbWVOYW1lLCBKU09OLnN0cmluZ2lmeShQbGF5ZXJEYXRhLmRhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmmK/lkKbmmK/mlrDnjqnlrrYgKi9cclxuICAgIHB1YmxpYyBpc05ld1VzZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgLyoq5LiK5qyh55m75b2V5pe26Ze0ICovXHJcbiAgICBwdWJsaWMgbGFzdExvZ2luVGltZTogbnVtYmVyID0gMDtcclxuICAgIC8qKuS4iuasoeWcqOe6v+aXtumVvyAqL1xyXG4gICAgcHVibGljIGxhc3RPbkxpbmVEdXI6IG51bWJlciA9IDA7XHJcbiAgICAvKirmnKzmrKHnprvnur/ml7bplb8gKi9cclxuICAgIHB1YmxpYyBsb2dPdXREdXJhdGlvbjogbnVtYmVyID0gMDtcclxuICAgIC8qKuS7iuaXpee0r+iuoeWcqOe6v+aXtumVvyAqL1xyXG4gICAgcHVibGljIHRvZGF5T25saW5lRHVyYXRpb246IG51bWJlciA9IDA7XHJcbiAgICAvKirmmK/lkKbmkq3mlL7pn7PmlYggKi9cclxuICAgIHB1YmxpYyBpc1BsYXlBdWRpbzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAvKirmmK/lkKbmkq3mlL5iZ20gKi9cclxuICAgIHB1YmxpYyBpc1BsYXlNdXNpYzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAvKirnjqnlrrbnrYnnuqcgKi9cclxuICAgIHB1YmxpYyBwbGF5ZXJMZXZlbDogbnVtYmVyID0gMTtcclxuICAgIC8qKue0r+iuoeeZu+W9leWkqeaVsCAqL1xyXG4gICAgcHVibGljIHRvdGFsTG9naW5EYXlzOiBudW1iZXIgPSAwO1xyXG4gICAgLyoq562+5Yiw5aSp5pWwICovXHJcbiAgICBwdWJsaWMgc2lnbkRheTogbnVtYmVyID0gMDtcclxuICAgIC8qKueOqeWutuiDjOWMheaVsOaNriAqL1xyXG4gICAgcHVibGljIHBhY2thZ2VJbmZvOiB7IGlkOiBudW1iZXIsIG51bTogbnVtYmVyIH1bXSA9IFtdO1xyXG4gICAgLyoq5YWz5Y2h5pWw5o2uICovXHJcbiAgICBwdWJsaWMgbGV2ZWxJbmZvczogTHZJbmZvW10gPSBbXTtcclxuICAgIC8qKuingueci+W5v+WRiuasoeaVsCAqL1xyXG4gICAgcHVibGljIGZpbmlzaEFkVGltZXM6IG51bWJlciA9IDA7XHJcbiAgICAvKirpmZDml7bop6PplIHlhajpg6jlhbPljaHnmoTlvIDlp4vml7bpl7QgKi9cclxuICAgIHB1YmxpYyB1bmxvY2tBbGxsdlRpbWU6IG51bWJlciA9IC0xO1xyXG5cclxuICAgIHB1YmxpYyBpbml0RGF0YSgpIHtcclxuICAgICAgICBsZXQgbG9jYWxTdG9yYWdlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFBsYXllckRhdGEuZ2FtZU5hbWUpO1xyXG4gICAgICAgIGxldCBkYXRhID0ge307XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZSAhPSBudWxsICYmIGxvY2FsU3RvcmFnZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFBsYXllckRhdGEuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIFBsYXllckRhdGEuaW5zKSB7XHJcbiAgICAgICAgICAgIGlmIChQbGF5ZXJEYXRhLmluc1trZXldIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFBsYXllckRhdGEuaW5zW2tleV0gPSBQbGF5ZXJEYXRhLmRhdGFba2V5XSA9PSB1bmRlZmluZWQgPyBQbGF5ZXJEYXRhLmluc1trZXldIDogUGxheWVyRGF0YS5kYXRhW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0TmV3VXNlckRhdGEoKTtcclxuICAgICAgICB0aGlzLmNoZWNrSXNOZXh0RGF5KCk7XHJcbiAgICAgICAgdGhpcy5sb2dPdXREdXJhdGlvbiA9IERhdGUubm93KCkgLSB0aGlzLmxhc3RMb2dpblRpbWUgLSB0aGlzLmxhc3RPbkxpbmVEdXI7XHJcbiAgICAgICAgdGhpcy5sYXN0TG9naW5UaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB0aGlzLmxhc3RPbkxpbmVEdXIgPSAwO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxDaGVjaygpO1xyXG4gICAgICAgIHRoaXMuc2F2ZURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXROZXdVc2VyRGF0YSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNOZXdVc2VyKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc05ld1VzZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxhc3RMb2dpblRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMubGFzdE9uTGluZUR1ciA9IDA7XHJcbiAgICAgICAgbGV0IGxldmVsQ29uZmlncyA9IERhdGFNYW5hZ2VyLmlucy5nZXQoTGV2ZWxDb25maWdNZ3IpLmRhdGFzO1xyXG4gICAgICAgIGxldmVsQ29uZmlncy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW5mbyA9IG5ldyBMdkluZm8oKTtcclxuICAgICAgICAgICAgaW5mby5sdiA9IHYuaWQ7XHJcbiAgICAgICAgICAgIGluZm8uaXNVbmxvY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgaW5mby51bmxvY2tUaXBzID0gW107XHJcbiAgICAgICAgICAgIGluZm8udW5sb2NrRW5kaW5ncyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsSW5mb3MucHVzaChpbmZvKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2F2ZURhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lzTmV4dERheSgpIHtcclxuICAgICAgICBpZiAoVXRpbC5pc05leHREYXkodGhpcy5sYXN0TG9naW5UaW1lLCBEYXRlLm5vdygpKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsTG9naW5EYXlzKys7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNpZ25EYXkgPiA3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpZ25EYXkgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbExvZ2luRGF5cyA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50b2RheU9ubGluZUR1cmF0aW9uID0gMDtcclxuICAgICAgICAgICAgLy8gaWYgKFV0aWwuaXNOZXh0V2Vlayh0aGlzLmxhc3RMb2dpblRpbWUsIFRpbWVNYW5hZ2VyLmlucy5jdXJUaW1lKSkge1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGludGVydmFsQ2hlY2soKSB7XHJcbiAgICAgICAgR2FtaW5nRGF0YS5pc09uVW5sb2NrQWxsTHYgPSB0aGlzLnVubG9ja0FsbGx2VGltZSA+IDAgJiYgKERhdGUubm93KCkgLSB0aGlzLnVubG9ja0FsbGx2VGltZSkgLyAxMDAwIC8gNjAgLyA2MCA8IDI0O1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgR2FtaW5nRGF0YS5pc09uVW5sb2NrQWxsTHYgPSB0aGlzLnVubG9ja0FsbGx2VGltZSA+IDAgJiYgKERhdGUubm93KCkgLSB0aGlzLnVubG9ja0FsbGx2VGltZSkgLyAxMDAwIC8gNjAgLyA2MCA8IDI0O1xyXG4gICAgICAgIH0sIDEwMDApXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5pu05paw6YGT5YW35pWw6YePICovXHJcbiAgICBjaGFuZ2VJdGVtTnVtKGlkOiBudW1iZXIsIG51bTogbnVtYmVyLCBpc1JlZnJlc2g6IGJvb2xlYW4gPSB0cnVlLCBpc1NhdmU6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKG51bSA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgbnVtID0gTWF0aC5mbG9vcihudW0pO1xyXG4gICAgICAgIGxldCBpbmZvID0gdGhpcy5wYWNrYWdlSW5mby5maW5kKHYgPT4gdi5pZCA9PSBpZCk7XHJcbiAgICAgICAgaWYgKCFpbmZvKSB7XHJcbiAgICAgICAgICAgIGluZm8gPSB7IGlkOiBpZCwgbnVtOiBudW0gfTtcclxuICAgICAgICAgICAgdGhpcy5wYWNrYWdlSW5mby5wdXNoKGluZm8pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGluZm8ubnVtID0gTWF0aC5tYXgoMCwgaW5mby5udW0gKyBudW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc1NhdmUgJiYgdGhpcy5zYXZlRGF0YSgpO1xyXG4gICAgICAgIGlzUmVmcmVzaCAmJiBFdmVudE1hbmFnZXIudHJpZ2dlckV2ZW50KEV2ZW50RW51bS5SZWZyZXNoUGxheWVySW5mbywgaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+W+l+mBk+WFt+aVsOmHjyAqL1xyXG4gICAgZ2V0SXRlbU51bShpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGluZm8gPSB0aGlzLnBhY2thZ2VJbmZvLmZpbmQodiA9PiB2LmlkID09IGlkKTtcclxuICAgICAgICBpZiAoIWluZm8pIHJldHVybiAwO1xyXG4gICAgICAgIHJldHVybiBpbmZvLm51bTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmo4Dmn6XmtojogJfmmK/lkKblhYXotrMgKi9cclxuICAgIGNoZWNrQ29zdElzRW5vdWdoKGNvc3RzOiB7IGlkOiBudW1iZXIsIG51bTogbnVtYmVyIH1bXSwgaXNMb2c6IGJvb2xlYW4gPSBmYWxzZSwgaXNDb3N0OiBib29sZWFuID0gZmFsc2UsIGlzUG9wOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgaXNFbm91Z2h0ID0gdHJ1ZTtcclxuICAgICAgICAvLyBsZXQgbG9nU3RyID0gXCJcIjtcclxuICAgICAgICAvLyBjb3N0cy5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGxldCBjb25maWcgPSBEYXRhTWFuYWdlci5pbnMuZ2V0KEdzX2l0ZW1NZ3IpLmdldERhdGFCeUlkKHYuaWQpO1xyXG4gICAgICAgIC8vICAgICBpZiAoIWNvbmZpZykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vICAgICBsZXQgaXNFbm91Z2h0MiA9IHRoaXMuZ2V0SXRlbU51bSh2LmlkKSA+PSB2Lm51bTtcclxuICAgICAgICAvLyAgICAgaWYgKCFpc0Vub3VnaHQyICYmIGlzRW5vdWdodCkgaXNFbm91Z2h0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIGlmICghaXNFbm91Z2h0MiAmJiBpc0xvZykge1xyXG4gICAgICAgIC8vICAgICAgICAgbG9nU3RyICs9IGNvbmZpZy5OYW1lICsgKGsgPT0gY29zdHMubGVuZ3RoIC0gMSA/IFwi5LiN6LazXCIgOiBcIixcIik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgaWYgKGlzQ29zdCAmJiBpc0Vub3VnaHQyKSB0aGlzLmNoYW5nZUl0ZW1OdW0odi5pZCwgLXYubnVtKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIGlmICghaXNFbm91Z2h0ICYmIGlzTG9nKSB7XHJcbiAgICAgICAgLy8gICAgIFRpcE1hbmFnZXIuaW5zLnNob3dUaXAobG9nU3RyKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKGlzUG9wICYmICFpc0Vub3VnaHQpIHtcclxuICAgICAgICAvLyAgICAgLy8gVUlNYW5hZ2VyLmlucy5vcGVuVmlldyhVaVBhdGguQWRkQXNzZXRzVmlldykudGhlbigodmlldzogQWRkQXNzZXRzVmlldykgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyAgICAgdmlldy5pbml0KClcclxuICAgICAgICAvLyAgICAgLy8gfSlcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHJldHVybiBpc0Vub3VnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0THZJbmZvKGx2OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sZXZlbEluZm9zLmZpbmQodiA9PiB2Lmx2ID09IGx2KTtcclxuICAgIH1cclxuXHJcbiAgICBwYXNzTHYobHY6IG51bWJlciwgcmVzdWx0SWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBpbmZvID0gdGhpcy5sZXZlbEluZm9zLmZpbmQodiA9PiB2Lmx2ID09IGx2KTtcclxuICAgICAgICBpZiAoaW5mbykge1xyXG4gICAgICAgICAgICBpbmZvLmlzVW5sb2NrID0gdHJ1ZTtcclxuICAgICAgICAgICAgaW5mby51bmxvY2tFbmRpbmdzLnB1c2gocmVzdWx0SWQpO1xyXG4gICAgICAgICAgICBsZXQgbWF4THZDb25maWcgPSBEYXRhTWFuYWdlci5pbnMuZ2V0KExldmVsQ29uZmlnTWdyKS5nZXRNYXhMdkNvbmZpZygpO1xyXG4gICAgICAgICAgICBHYW1pbmdEYXRhLmN1ckx2ID0gTWF0aC5taW4oR2FtaW5nRGF0YS5jdXJMdiArIDEsIG1heEx2Q29uZmlnLmlkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCLlhbPljaHmlbDmja7kuLrnqbpcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zYXZlRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWinuWKoOS4gOasoeeci+W5v+WRiuasoeaVsCAqL1xyXG4gICAgYWRkRmluaXNoQWQoc3VjQ2I6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy51bmxvY2tBbGxsdlRpbWUgPiAwKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5maW5pc2hBZFRpbWVzKys7XHJcbiAgICAgICAgaWYgKHRoaXMuZmluaXNoQWRUaW1lcyA+PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5sb2NrQWxsbHZUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hBZFRpbWVzID0gMDtcclxuICAgICAgICAgICAgc3VjQ2IgJiYgc3VjQ2IoKTtcclxuICAgICAgICAgICAgdGhpcy5zYXZlRGF0YSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKirop6PplIHlhbPljaHmj5DnpLogKi9cclxuICAgIHVubG9ja0x2VGlwKGx2Q29uZmlnOiBMZXZlbENvbmZpZywgaW5kZXg6IG51bWJlciA9IG51bGwpIHtcclxuICAgICAgICBsZXQgbHZJbmZvID0gdGhpcy5nZXRMdkluZm8obHZDb25maWcuaWQpO1xyXG4gICAgICAgIGlmICghbHZJbmZvKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YWz5Y2h5pyq6Kej6ZSBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbmRleCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBpc1VubG9jayA9IGx2SW5mby51bmxvY2tUaXBzLmluY2x1ZGVzKGluZGV4KTtcclxuICAgICAgICAgICAgaWYgKCFpc1VubG9jaykge1xyXG4gICAgICAgICAgICAgICAgbHZJbmZvLnVubG9ja1RpcHMucHVzaChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBsdkluZm8udW5sb2NrVGlwcy5zb3J0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVEYXRhKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsdkluZm8udW5sb2NrVGlwcy5zb3J0KCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbHZDb25maWcudGlwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsdkluZm8udW5sb2NrVGlwcy5pbmNsdWRlcyhpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGx2SW5mby51bmxvY2tUaXBzLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbHZJbmZvLnVubG9ja1RpcHMuc29ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG53aW5kb3dbXCJQbGF5ZXJEYXRhXCJdID0gUGxheWVyRGF0YTsiXX0=