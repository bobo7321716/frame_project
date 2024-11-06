"use strict";
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