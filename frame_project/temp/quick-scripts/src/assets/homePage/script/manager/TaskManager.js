"use strict";
cc._RF.push(module, '7d5236S++lJp6gk/+KNSRnB', 'TaskManager');
// homePage/script/manager/TaskManager.ts

// import RewardView from "../../../part1/script/RewardView/RewardView";
// import { EventEnum } from "../common/Global";
// import { PlayerData } from "../common/PlayerData";
// import { UiPath } from "../common/UiPath";
// import Gs_task, { Gs_taskMgr } from "../config/Gs_task";
// import DataManager from "./DataManager";
// import { EventManager } from "./EventManager";
// import RedPointManager from "./RedPointManager";
// import { UIManager } from "./UIManager";
// const { ccclass, property } = cc._decorator;
// @ccclass
// export default class TaskManager extends cc.Component {
//     private taskDatas: Gs_task[] = [];
//     public static ins: TaskManager = null;
//     protected onLoad(): void {
//         TaskManager.ins = this;
//     }
//     /**获取新手任务 */
//     public getNewUserTaskList() {
//         PlayerData.ins.curTaskList = [];
//         this.taskDatas = DataManager.ins.get(Gs_taskMgr).datas;
//         this.taskDatas.forEach(v => {
//             if (v.Unlock_Condition) {
//                 switch (v.Unlock_Condition.id) {
//                     //角色等级
//                     case 1:
//                         if (PlayerData.ins.playerLevel >= v.Unlock_Condition.num) {
//                             PlayerData.ins.curTaskList.push({ task: v, progress: 0 });
//                         }
//                         break;
//                     case 2:
//                         let info = PlayerData.ins.unlockBoothInfos.find(vl => vl.type == v.Unlock_Condition.num);
//                         if (info && info.lv >= v.Unlock_Condition.value) {
//                             PlayerData.ins.curTaskList.push({ task: v, progress: 0 });
//                         }
//                         break;
//                 }
//             }
//         })
//         PlayerData.ins.saveData();
//     }
//     /**更新任务进度 */
//     refreshTaskList() {
//         if (PlayerData.ins.curTaskList.length <= 0) return;
//         PlayerData.ins.curTaskList.forEach(v => {
//             switch (v.task.Param.type) {
//                 case 1:
//                     let subInfo = PlayerData.ins.getSubBoothInfoBySubBuildId(v.task.Param.id, v.task.Param.value);
//                     v.progress = subInfo ? subInfo.lv : 0;
//                     break;
//                 case 2:
//                     let boothInfo = PlayerData.ins.getBoothInfoByBuildId(v.task.Param.id);
//                     v.progress = boothInfo ? boothInfo.lv : 0;
//                     break;
//             }
//         })
//         EventManager.triggerEvent(EventEnum.RefreshTask);
//     }
//     /**完成任务 */
//     finishTask(id: number) {
//         if (PlayerData.ins.curTaskList.length <= 0) return;
//         let index = PlayerData.ins.curTaskList.findIndex(v => v.task.Id == id);
//         if (index < 0) return;
//         let taskConfig = PlayerData.ins.curTaskList[index];
//         PlayerData.ins.curTaskList.splice(index, 1);
//         if (taskConfig.task.Next_Id) {
//             let nextConfig = DataManager.ins.get(Gs_taskMgr).getDataById(taskConfig.task.Next_Id);
//             if (nextConfig) {
//                 PlayerData.ins.curTaskList.splice(index, 0, { task: nextConfig, progress: 0 });
//             }
//         }
//     }
//     getAllFinishTask() {
//         let rewardArr: { id: number, num: number }[] = [];
//         PlayerData.ins.curTaskList.forEach(v => {
//             if (v.progress >= v.task.Param.value) {
//                 this.finishTask(v.task.Id);
//                 v.task.Raward.forEach(reward => {
//                     let obj = rewardArr.find(el => el.id == reward.id);
//                     if (obj) {
//                         obj.num += reward.num;
//                     } else {
//                         rewardArr.push(reward);
//                     }
//                 })
//             }
//         })
//         PlayerData.ins.saveData();
//         UIManager.ins.openView(UiPath.RewardView).then((view: RewardView) => {
//             view.init(rewardArr);
//         })
//         EventManager.triggerEvent(EventEnum.RefreshTask);
//         RedPointManager.ins.checkRedPoint();
//     }
// }

cc._RF.pop();