"use strict";
cc._RF.push(module, '062c5DWyr1Lv5JWdKhjAZ9y', 'RedPointManager');
// homePage/script/manager/RedPointManager.ts

// import GamingData from "../common/GamingData";
// import { BoothType, EventEnum, RedPointType } from "../common/Global";
// import { PlayerData } from "../common/PlayerData";
// import { Util } from "../common/Util";
// import { Gs_foodMgr } from "../config/Gs_food";
// import { RedPointConfigMgr } from "../config/RedPointConfig";
// import DataManager from "./DataManager";
// import { EventManager } from "./EventManager";
// const { ccclass, property } = cc._decorator;
// @ccclass
// export default class RedPointManager extends cc.Component {
//     public static ins: RedPointManager = null;
//     protected onLoad(): void {
//         RedPointManager.ins = this;
//         this.allShowRedPoints = [];
//         EventManager.triggerEvent(EventEnum.RedPointRefresh);
//     }
//     /**所有需要显示的红点 */
//     public allShowRedPoints: number[] = [];
//     private showRedPoint(keys: number[]) {
//         keys.forEach(v => {
//             if (this.allShowRedPoints.includes(v)) return;
//             this.allShowRedPoints.push(v);
//         })
//         EventManager.triggerEvent(EventEnum.RedPointRefresh);
//     }
//     checkRedPoint() {
//         this.allShowRedPoints = [];
//         let datas = DataManager.ins.get(RedPointConfigMgr).datas;
//         datas.forEach(v => {
//             switch (v.Id) {
//                 case RedPointType.Recipes:
//                     let isShow: boolean = false;
//                     let enumArr = Util.getAllEnumNums(BoothType)
//                     for (let i = 0; i < enumArr.length; i++) {
//                         let type = enumArr[i];
//                         let info = PlayerData.ins.unlockBoothInfos.find(v => v.type == type);
//                         if (!info) break;
//                         let datas = DataManager.ins.get(Gs_foodMgr).getDatasByType(type);
//                         for (let i = 0; i < datas.length; i++) {
//                             let data = datas[i];
//                             let dishInfo = info.unlockDishs.find(v => v.id == data.Id);
//                             if (!dishInfo) {
//                                 let num = PlayerData.ins.getItemNum(data.Ulockgrade.id);
//                                 if (num >= data.Ulockgrade.num) {
//                                     this.showRedPoint(v.keys);
//                                     isShow = true;
//                                     break;
//                                 }
//                             }
//                         }
//                         if (isShow) break;
//                     }
//                     break;
//                 case RedPointType.Task:
//                     let taskList = PlayerData.ins.curTaskList;
//                     for (let i = 0; i < taskList.length; i++) {
//                         let task = taskList[i];
//                         if (task.progress >= task.task.Param.value) {
//                             this.showRedPoint(v.keys);
//                             break;
//                         }
//                     }
//                     break;
//                 case RedPointType.Game:
//                     if (PlayerData.ins.gameStep >= 1) {
//                         this.showRedPoint(v.keys);
//                     }
//                     break;
//                 case RedPointType.New_skin:
//                     if (PlayerData.ins.newSkins.length > 0) {
//                         this.showRedPoint(v.keys);
//                     }
//                     break;
//                 case RedPointType.Dish_finish:
//                     break;
//             }
//         })
//         EventManager.triggerEvent(EventEnum.RedPointRefresh);
//     }
// }

cc._RF.pop();