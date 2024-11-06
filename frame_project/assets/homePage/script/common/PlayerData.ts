import LevelConfig, { LevelConfigMgr } from "../config/LevelConfig";
import DataManager from "../manager/DataManager";
import { EventManager } from "../manager/EventManager";
import GamingData from "./GamingData";
import { EventEnum, LvInfo } from "./Global";
import { Util } from "./Util";



//玩家数据类
export class PlayerData {

    private static _ins: PlayerData = null;
    public static gameName: string = "GWYS";

    public static get ins(): PlayerData {
        if (!this._ins) {
            this._ins = new PlayerData();
        }
        return this._ins;
    }

    public static data = {};

    /**
     * 获取指定键名的值。
     * @param key 键名。
     */
    setLoaclStorageItem(key: string, value: any) {
        PlayerData.data[key] = value;
        this.saveData();
    }

    saveData() {
        for (let key in PlayerData.ins) {
            if (PlayerData.ins[key] instanceof Function) {
            } else {
                PlayerData.data[key] = PlayerData.ins[key];
            }
        }
        cc.sys.localStorage.setItem(PlayerData.gameName, JSON.stringify(PlayerData.data));
    }

    /**是否是新玩家 */
    public isNewUser: boolean = true;
    /**上次登录时间 */
    public lastLoginTime: number = 0;
    /**上次在线时长 */
    public lastOnLineDur: number = 0;
    /**本次离线时长 */
    public logOutDuration: number = 0;
    /**今日累计在线时长 */
    public todayOnlineDuration: number = 0;
    /**是否播放音效 */
    public isPlayAudio: boolean = true;
    /**是否播放bgm */
    public isPlayMusic: boolean = true;
    /**玩家等级 */
    public playerLevel: number = 1;
    /**累计登录天数 */
    public totalLoginDays: number = 0;
    /**签到天数 */
    public signDay: number = 0;
    /**玩家背包数据 */
    public packageInfo: { id: number, num: number }[] = [];
    /**关卡数据 */
    public levelInfos: LvInfo[] = [];
    /**观看广告次数 */
    public finishAdTimes: number = 0;
    /**限时解锁全部关卡的开始时间 */
    public unlockAlllvTime: number = -1;

    public initData() {
        let localStorage = cc.sys.localStorage.getItem(PlayerData.gameName);
        let data = {};
        if (localStorage != null && localStorage != "") {
            data = JSON.parse(localStorage);
        }
        PlayerData.data = data;
        for (let key in PlayerData.ins) {
            if (PlayerData.ins[key] instanceof Function) {
            } else {
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
    }

    private initNewUserData() {
        if (!this.isNewUser) return;
        this.isNewUser = false;
        this.lastLoginTime = Date.now();
        this.lastOnLineDur = 0;
        let levelConfigs = DataManager.ins.get(LevelConfigMgr).datas;
        levelConfigs.forEach(v => {
            let info = new LvInfo();
            info.lv = v.id;
            info.isUnlock = false;
            info.unlockTips = [];
            info.unlockEndings = [];
            this.levelInfos.push(info);
        })
        this.saveData();
    }

    checkIsNextDay() {
        if (Util.isNextDay(this.lastLoginTime, Date.now())) {
            this.totalLoginDays++;
            if (this.signDay > 7) {
                this.signDay = 0;
                this.totalLoginDays = 0;
            }
            this.todayOnlineDuration = 0;
            // if (Util.isNextWeek(this.lastLoginTime, TimeManager.ins.curTime)) {
            // }
        }
    }

    intervalCheck() {
        GamingData.isOnUnlockAllLv = this.unlockAlllvTime > 0 && (Date.now() - this.unlockAlllvTime) / 1000 / 60 / 60 < 24;
        setInterval(() => {
            GamingData.isOnUnlockAllLv = this.unlockAlllvTime > 0 && (Date.now() - this.unlockAlllvTime) / 1000 / 60 / 60 < 24;
        }, 1000)
    }

    /**更新道具数量 */
    changeItemNum(id: number, num: number, isRefresh: boolean = true, isSave: boolean = true) {
        if (num == 0) return;
        num = Math.floor(num);
        let info = this.packageInfo.find(v => v.id == id);
        if (!info) {
            info = { id: id, num: num };
            this.packageInfo.push(info);
        } else {
            info.num = Math.max(0, info.num + num);
        }
        isSave && this.saveData();
        isRefresh && EventManager.triggerEvent(EventEnum.RefreshPlayerInfo, id);
    }

    /**获得道具数量 */
    getItemNum(id: number) {
        let info = this.packageInfo.find(v => v.id == id);
        if (!info) return 0;
        return info.num;
    }

    /**检查消耗是否充足 */
    checkCostIsEnough(costs: { id: number, num: number }[], isLog: boolean = false, isCost: boolean = false, isPop: boolean = false) {
        let isEnought = true;
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
    }

    getLvInfo(lv: number) {
        return this.levelInfos.find(v => v.lv == lv);
    }

    passLv(lv: number, resultId: number) {
        let info = this.levelInfos.find(v => v.lv == lv);
        if (info) {
            info.isUnlock = true;
            info.unlockEndings.push(resultId);
            let maxLvConfig = DataManager.ins.get(LevelConfigMgr).getMaxLvConfig();
            GamingData.curLv = Math.min(GamingData.curLv + 1, maxLvConfig.id);
        } else {
            console.warn("关卡数据为空")
        }
        this.saveData();
    }

    /**增加一次看广告次数 */
    addFinishAd(sucCb: () => void) {
        if (this.unlockAlllvTime > 0) return;
        this.finishAdTimes++;
        if (this.finishAdTimes >= 3) {
            this.unlockAlllvTime = Date.now();
            this.finishAdTimes = 0;
            sucCb && sucCb();
            this.saveData();
        }
    }

    /**解锁关卡提示 */
    unlockLvTip(lvConfig: LevelConfig, index: number = null) {
        let lvInfo = this.getLvInfo(lvConfig.id);
        if (!lvInfo) {
            console.log("关卡未解锁");
            return;
        }
        if (index != null) {
            let isUnlock = lvInfo.unlockTips.includes(index);
            if (!isUnlock) {
                lvInfo.unlockTips.push(index);
                lvInfo.unlockTips.sort();
                this.saveData();
            }
        } else {
            lvInfo.unlockTips.sort();
            for (let i = 0; i < lvConfig.tips.length; i++) {
                if (!lvInfo.unlockTips.includes(i)) {
                    lvInfo.unlockTips.push(i);
                    lvInfo.unlockTips.sort();
                    this.saveData();
                    break;
                }
            }
        }
    }
}
window["PlayerData"] = PlayerData;