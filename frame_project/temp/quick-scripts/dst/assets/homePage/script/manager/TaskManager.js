
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/TaskManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcVGFza01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQXdFO0FBQ3hFLGdEQUFnRDtBQUNoRCxxREFBcUQ7QUFDckQsNkNBQTZDO0FBQzdDLDJEQUEyRDtBQUMzRCwyQ0FBMkM7QUFDM0MsaURBQWlEO0FBQ2pELG1EQUFtRDtBQUNuRCwyQ0FBMkM7QUFFM0MsK0NBQStDO0FBRS9DLFdBQVc7QUFDWCwwREFBMEQ7QUFFMUQseUNBQXlDO0FBRXpDLDZDQUE2QztBQUU3QyxpQ0FBaUM7QUFDakMsa0NBQWtDO0FBQ2xDLFFBQVE7QUFFUixtQkFBbUI7QUFDbkIsb0NBQW9DO0FBQ3BDLDJDQUEyQztBQUMzQyxrRUFBa0U7QUFDbEUsd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4QyxtREFBbUQ7QUFDbkQsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5QixzRkFBc0Y7QUFDdEYseUZBQXlGO0FBQ3pGLDRCQUE0QjtBQUM1QixpQ0FBaUM7QUFDakMsOEJBQThCO0FBQzlCLG9IQUFvSDtBQUNwSCw2RUFBNkU7QUFDN0UseUZBQXlGO0FBQ3pGLDRCQUE0QjtBQUM1QixpQ0FBaUM7QUFDakMsb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2IscUNBQXFDO0FBQ3JDLFFBQVE7QUFFUixtQkFBbUI7QUFDbkIsMEJBQTBCO0FBQzFCLDhEQUE4RDtBQUM5RCxvREFBb0Q7QUFDcEQsMkNBQTJDO0FBQzNDLDBCQUEwQjtBQUMxQixxSEFBcUg7QUFDckgsNkRBQTZEO0FBQzdELDZCQUE2QjtBQUM3QiwwQkFBMEI7QUFDMUIsNkZBQTZGO0FBQzdGLGlFQUFpRTtBQUNqRSw2QkFBNkI7QUFDN0IsZ0JBQWdCO0FBQ2hCLGFBQWE7QUFDYiw0REFBNEQ7QUFDNUQsUUFBUTtBQUVSLGlCQUFpQjtBQUNqQiwrQkFBK0I7QUFDL0IsOERBQThEO0FBQzlELGtGQUFrRjtBQUNsRixpQ0FBaUM7QUFDakMsOERBQThEO0FBQzlELHVEQUF1RDtBQUN2RCx5Q0FBeUM7QUFDekMscUdBQXFHO0FBQ3JHLGdDQUFnQztBQUNoQyxrR0FBa0c7QUFDbEcsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixRQUFRO0FBRVIsMkJBQTJCO0FBQzNCLDZEQUE2RDtBQUM3RCxvREFBb0Q7QUFDcEQsc0RBQXNEO0FBQ3RELDhDQUE4QztBQUM5QyxvREFBb0Q7QUFDcEQsMEVBQTBFO0FBQzFFLGlDQUFpQztBQUNqQyxpREFBaUQ7QUFDakQsK0JBQStCO0FBQy9CLGtEQUFrRDtBQUNsRCx3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2IscUNBQXFDO0FBQ3JDLGlGQUFpRjtBQUNqRixvQ0FBb0M7QUFDcEMsYUFBYTtBQUNiLDREQUE0RDtBQUM1RCwrQ0FBK0M7QUFDL0MsUUFBUTtBQUNSLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmV3YXJkVmlldyBmcm9tIFwiLi4vLi4vLi4vcGFydDEvc2NyaXB0L1Jld2FyZFZpZXcvUmV3YXJkVmlld1wiO1xuLy8gaW1wb3J0IHsgRXZlbnRFbnVtIH0gZnJvbSBcIi4uL2NvbW1vbi9HbG9iYWxcIjtcbi8vIGltcG9ydCB7IFBsYXllckRhdGEgfSBmcm9tIFwiLi4vY29tbW9uL1BsYXllckRhdGFcIjtcbi8vIGltcG9ydCB7IFVpUGF0aCB9IGZyb20gXCIuLi9jb21tb24vVWlQYXRoXCI7XG4vLyBpbXBvcnQgR3NfdGFzaywgeyBHc190YXNrTWdyIH0gZnJvbSBcIi4uL2NvbmZpZy9Hc190YXNrXCI7XG4vLyBpbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcbi8vIGltcG9ydCB7IEV2ZW50TWFuYWdlciB9IGZyb20gXCIuL0V2ZW50TWFuYWdlclwiO1xuLy8gaW1wb3J0IFJlZFBvaW50TWFuYWdlciBmcm9tIFwiLi9SZWRQb2ludE1hbmFnZXJcIjtcbi8vIGltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gXCIuL1VJTWFuYWdlclwiO1xuXG4vLyBjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vLyBAY2NjbGFzc1xuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza01hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4vLyAgICAgcHJpdmF0ZSB0YXNrRGF0YXM6IEdzX3Rhc2tbXSA9IFtdO1xuXG4vLyAgICAgcHVibGljIHN0YXRpYyBpbnM6IFRhc2tNYW5hZ2VyID0gbnVsbDtcblxuLy8gICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4vLyAgICAgICAgIFRhc2tNYW5hZ2VyLmlucyA9IHRoaXM7XG4vLyAgICAgfVxuXG4vLyAgICAgLyoq6I635Y+W5paw5omL5Lu75YqhICovXG4vLyAgICAgcHVibGljIGdldE5ld1VzZXJUYXNrTGlzdCgpIHtcbi8vICAgICAgICAgUGxheWVyRGF0YS5pbnMuY3VyVGFza0xpc3QgPSBbXTtcbi8vICAgICAgICAgdGhpcy50YXNrRGF0YXMgPSBEYXRhTWFuYWdlci5pbnMuZ2V0KEdzX3Rhc2tNZ3IpLmRhdGFzO1xuLy8gICAgICAgICB0aGlzLnRhc2tEYXRhcy5mb3JFYWNoKHYgPT4ge1xuLy8gICAgICAgICAgICAgaWYgKHYuVW5sb2NrX0NvbmRpdGlvbikge1xuLy8gICAgICAgICAgICAgICAgIHN3aXRjaCAodi5VbmxvY2tfQ29uZGl0aW9uLmlkKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIC8v6KeS6Imy562J57qnXG4vLyAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChQbGF5ZXJEYXRhLmlucy5wbGF5ZXJMZXZlbCA+PSB2LlVubG9ja19Db25kaXRpb24ubnVtKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxheWVyRGF0YS5pbnMuY3VyVGFza0xpc3QucHVzaCh7IHRhc2s6IHYsIHByb2dyZXNzOiAwIH0pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmZvID0gUGxheWVyRGF0YS5pbnMudW5sb2NrQm9vdGhJbmZvcy5maW5kKHZsID0+IHZsLnR5cGUgPT0gdi5VbmxvY2tfQ29uZGl0aW9uLm51bSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5mbyAmJiBpbmZvLmx2ID49IHYuVW5sb2NrX0NvbmRpdGlvbi52YWx1ZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXllckRhdGEuaW5zLmN1clRhc2tMaXN0LnB1c2goeyB0YXNrOiB2LCBwcm9ncmVzczogMCB9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgUGxheWVyRGF0YS5pbnMuc2F2ZURhdGEoKTtcbi8vICAgICB9XG5cbi8vICAgICAvKirmm7TmlrDku7vliqHov5vluqYgKi9cbi8vICAgICByZWZyZXNoVGFza0xpc3QoKSB7XG4vLyAgICAgICAgIGlmIChQbGF5ZXJEYXRhLmlucy5jdXJUYXNrTGlzdC5sZW5ndGggPD0gMCkgcmV0dXJuO1xuLy8gICAgICAgICBQbGF5ZXJEYXRhLmlucy5jdXJUYXNrTGlzdC5mb3JFYWNoKHYgPT4ge1xuLy8gICAgICAgICAgICAgc3dpdGNoICh2LnRhc2suUGFyYW0udHlwZSkge1xuLy8gICAgICAgICAgICAgICAgIGNhc2UgMTpcbi8vICAgICAgICAgICAgICAgICAgICAgbGV0IHN1YkluZm8gPSBQbGF5ZXJEYXRhLmlucy5nZXRTdWJCb290aEluZm9CeVN1YkJ1aWxkSWQodi50YXNrLlBhcmFtLmlkLCB2LnRhc2suUGFyYW0udmFsdWUpO1xuLy8gICAgICAgICAgICAgICAgICAgICB2LnByb2dyZXNzID0gc3ViSW5mbyA/IHN1YkluZm8ubHYgOiAwO1xuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgICAgICBjYXNlIDI6XG4vLyAgICAgICAgICAgICAgICAgICAgIGxldCBib290aEluZm8gPSBQbGF5ZXJEYXRhLmlucy5nZXRCb290aEluZm9CeUJ1aWxkSWQodi50YXNrLlBhcmFtLmlkKTtcbi8vICAgICAgICAgICAgICAgICAgICAgdi5wcm9ncmVzcyA9IGJvb3RoSW5mbyA/IGJvb3RoSW5mby5sdiA6IDA7XG4vLyAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICBFdmVudE1hbmFnZXIudHJpZ2dlckV2ZW50KEV2ZW50RW51bS5SZWZyZXNoVGFzayk7XG4vLyAgICAgfVxuXG4vLyAgICAgLyoq5a6M5oiQ5Lu75YqhICovXG4vLyAgICAgZmluaXNoVGFzayhpZDogbnVtYmVyKSB7XG4vLyAgICAgICAgIGlmIChQbGF5ZXJEYXRhLmlucy5jdXJUYXNrTGlzdC5sZW5ndGggPD0gMCkgcmV0dXJuO1xuLy8gICAgICAgICBsZXQgaW5kZXggPSBQbGF5ZXJEYXRhLmlucy5jdXJUYXNrTGlzdC5maW5kSW5kZXgodiA9PiB2LnRhc2suSWQgPT0gaWQpO1xuLy8gICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm47XG4vLyAgICAgICAgIGxldCB0YXNrQ29uZmlnID0gUGxheWVyRGF0YS5pbnMuY3VyVGFza0xpc3RbaW5kZXhdO1xuLy8gICAgICAgICBQbGF5ZXJEYXRhLmlucy5jdXJUYXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuLy8gICAgICAgICBpZiAodGFza0NvbmZpZy50YXNrLk5leHRfSWQpIHtcbi8vICAgICAgICAgICAgIGxldCBuZXh0Q29uZmlnID0gRGF0YU1hbmFnZXIuaW5zLmdldChHc190YXNrTWdyKS5nZXREYXRhQnlJZCh0YXNrQ29uZmlnLnRhc2suTmV4dF9JZCk7XG4vLyAgICAgICAgICAgICBpZiAobmV4dENvbmZpZykge1xuLy8gICAgICAgICAgICAgICAgIFBsYXllckRhdGEuaW5zLmN1clRhc2tMaXN0LnNwbGljZShpbmRleCwgMCwgeyB0YXNrOiBuZXh0Q29uZmlnLCBwcm9ncmVzczogMCB9KTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIGdldEFsbEZpbmlzaFRhc2soKSB7XG4vLyAgICAgICAgIGxldCByZXdhcmRBcnI6IHsgaWQ6IG51bWJlciwgbnVtOiBudW1iZXIgfVtdID0gW107XG4vLyAgICAgICAgIFBsYXllckRhdGEuaW5zLmN1clRhc2tMaXN0LmZvckVhY2godiA9PiB7XG4vLyAgICAgICAgICAgICBpZiAodi5wcm9ncmVzcyA+PSB2LnRhc2suUGFyYW0udmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaFRhc2sodi50YXNrLklkKTtcbi8vICAgICAgICAgICAgICAgICB2LnRhc2suUmF3YXJkLmZvckVhY2gocmV3YXJkID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHJld2FyZEFyci5maW5kKGVsID0+IGVsLmlkID09IHJld2FyZC5pZCk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGlmIChvYmopIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5udW0gKz0gcmV3YXJkLm51bTtcbi8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZEFyci5wdXNoKHJld2FyZCk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICBQbGF5ZXJEYXRhLmlucy5zYXZlRGF0YSgpO1xuLy8gICAgICAgICBVSU1hbmFnZXIuaW5zLm9wZW5WaWV3KFVpUGF0aC5SZXdhcmRWaWV3KS50aGVuKCh2aWV3OiBSZXdhcmRWaWV3KSA9PiB7XG4vLyAgICAgICAgICAgICB2aWV3LmluaXQocmV3YXJkQXJyKTtcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgRXZlbnRNYW5hZ2VyLnRyaWdnZXJFdmVudChFdmVudEVudW0uUmVmcmVzaFRhc2spO1xuLy8gICAgICAgICBSZWRQb2ludE1hbmFnZXIuaW5zLmNoZWNrUmVkUG9pbnQoKTtcbi8vICAgICB9XG4vLyB9XG4iXX0=