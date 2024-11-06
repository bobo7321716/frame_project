
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/RedPointManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcUmVkUG9pbnRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFpRDtBQUNqRCx5RUFBeUU7QUFDekUscURBQXFEO0FBQ3JELHlDQUF5QztBQUN6QyxrREFBa0Q7QUFDbEQsZ0VBQWdFO0FBQ2hFLDJDQUEyQztBQUMzQyxpREFBaUQ7QUFFakQsK0NBQStDO0FBRS9DLFdBQVc7QUFDWCw4REFBOEQ7QUFFOUQsaURBQWlEO0FBRWpELGlDQUFpQztBQUNqQyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLGdFQUFnRTtBQUNoRSxRQUFRO0FBRVIsc0JBQXNCO0FBQ3RCLDhDQUE4QztBQUU5Qyw2Q0FBNkM7QUFDN0MsOEJBQThCO0FBQzlCLDZEQUE2RDtBQUM3RCw2Q0FBNkM7QUFDN0MsYUFBYTtBQUNiLGdFQUFnRTtBQUNoRSxRQUFRO0FBRVIsd0JBQXdCO0FBQ3hCLHNDQUFzQztBQUN0QyxvRUFBb0U7QUFDcEUsK0JBQStCO0FBQy9CLDhCQUE4QjtBQUM5Qiw2Q0FBNkM7QUFDN0MsbURBQW1EO0FBQ25ELG1FQUFtRTtBQUNuRSxpRUFBaUU7QUFDakUsaURBQWlEO0FBQ2pELGdHQUFnRztBQUNoRyw0Q0FBNEM7QUFDNUMsNEZBQTRGO0FBQzVGLG1FQUFtRTtBQUNuRSxtREFBbUQ7QUFDbkQsMEZBQTBGO0FBQzFGLCtDQUErQztBQUMvQywyRkFBMkY7QUFDM0Ysb0VBQW9FO0FBQ3BFLGlFQUFpRTtBQUNqRSxxREFBcUQ7QUFDckQsNkNBQTZDO0FBQzdDLG9DQUFvQztBQUNwQyxnQ0FBZ0M7QUFDaEMsNEJBQTRCO0FBQzVCLDZDQUE2QztBQUM3Qyx3QkFBd0I7QUFDeEIsNkJBQTZCO0FBQzdCLDBDQUEwQztBQUMxQyxpRUFBaUU7QUFDakUsa0VBQWtFO0FBQ2xFLGtEQUFrRDtBQUNsRCx3RUFBd0U7QUFDeEUseURBQXlEO0FBQ3pELHFDQUFxQztBQUNyQyw0QkFBNEI7QUFDNUIsd0JBQXdCO0FBQ3hCLDZCQUE2QjtBQUM3QiwwQ0FBMEM7QUFDMUMsMERBQTBEO0FBQzFELHFEQUFxRDtBQUNyRCx3QkFBd0I7QUFDeEIsNkJBQTZCO0FBQzdCLDhDQUE4QztBQUM5QyxnRUFBZ0U7QUFDaEUscURBQXFEO0FBQ3JELHdCQUF3QjtBQUN4Qiw2QkFBNkI7QUFDN0IsaURBQWlEO0FBRWpELDZCQUE2QjtBQUM3QixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLGdFQUFnRTtBQUNoRSxRQUFRO0FBQ1IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBHYW1pbmdEYXRhIGZyb20gXCIuLi9jb21tb24vR2FtaW5nRGF0YVwiO1xyXG4vLyBpbXBvcnQgeyBCb290aFR5cGUsIEV2ZW50RW51bSwgUmVkUG9pbnRUeXBlIH0gZnJvbSBcIi4uL2NvbW1vbi9HbG9iYWxcIjtcclxuLy8gaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gXCIuLi9jb21tb24vUGxheWVyRGF0YVwiO1xyXG4vLyBpbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uL2NvbW1vbi9VdGlsXCI7XHJcbi8vIGltcG9ydCB7IEdzX2Zvb2RNZ3IgfSBmcm9tIFwiLi4vY29uZmlnL0dzX2Zvb2RcIjtcclxuLy8gaW1wb3J0IHsgUmVkUG9pbnRDb25maWdNZ3IgfSBmcm9tIFwiLi4vY29uZmlnL1JlZFBvaW50Q29uZmlnXCI7XHJcbi8vIGltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xyXG4vLyBpbXBvcnQgeyBFdmVudE1hbmFnZXIgfSBmcm9tIFwiLi9FdmVudE1hbmFnZXJcIjtcclxuXHJcbi8vIGNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vLyBAY2NjbGFzc1xyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWRQb2ludE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuLy8gICAgIHB1YmxpYyBzdGF0aWMgaW5zOiBSZWRQb2ludE1hbmFnZXIgPSBudWxsO1xyXG5cclxuLy8gICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XHJcbi8vICAgICAgICAgUmVkUG9pbnRNYW5hZ2VyLmlucyA9IHRoaXM7XHJcbi8vICAgICAgICAgdGhpcy5hbGxTaG93UmVkUG9pbnRzID0gW107XHJcbi8vICAgICAgICAgRXZlbnRNYW5hZ2VyLnRyaWdnZXJFdmVudChFdmVudEVudW0uUmVkUG9pbnRSZWZyZXNoKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAvKirmiYDmnInpnIDopoHmmL7npLrnmoTnuqLngrkgKi9cclxuLy8gICAgIHB1YmxpYyBhbGxTaG93UmVkUG9pbnRzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuLy8gICAgIHByaXZhdGUgc2hvd1JlZFBvaW50KGtleXM6IG51bWJlcltdKSB7XHJcbi8vICAgICAgICAga2V5cy5mb3JFYWNoKHYgPT4ge1xyXG4vLyAgICAgICAgICAgICBpZiAodGhpcy5hbGxTaG93UmVkUG9pbnRzLmluY2x1ZGVzKHYpKSByZXR1cm47XHJcbi8vICAgICAgICAgICAgIHRoaXMuYWxsU2hvd1JlZFBvaW50cy5wdXNoKHYpO1xyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICAgICAgRXZlbnRNYW5hZ2VyLnRyaWdnZXJFdmVudChFdmVudEVudW0uUmVkUG9pbnRSZWZyZXNoKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBjaGVja1JlZFBvaW50KCkge1xyXG4vLyAgICAgICAgIHRoaXMuYWxsU2hvd1JlZFBvaW50cyA9IFtdO1xyXG4vLyAgICAgICAgIGxldCBkYXRhcyA9IERhdGFNYW5hZ2VyLmlucy5nZXQoUmVkUG9pbnRDb25maWdNZ3IpLmRhdGFzO1xyXG4vLyAgICAgICAgIGRhdGFzLmZvckVhY2godiA9PiB7XHJcbi8vICAgICAgICAgICAgIHN3aXRjaCAodi5JZCkge1xyXG4vLyAgICAgICAgICAgICAgICAgY2FzZSBSZWRQb2ludFR5cGUuUmVjaXBlczpcclxuLy8gICAgICAgICAgICAgICAgICAgICBsZXQgaXNTaG93OiBib29sZWFuID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbGV0IGVudW1BcnIgPSBVdGlsLmdldEFsbEVudW1OdW1zKEJvb3RoVHlwZSlcclxuLy8gICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudW1BcnIubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBlbnVtQXJyW2ldO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5mbyA9IFBsYXllckRhdGEuaW5zLnVubG9ja0Jvb3RoSW5mb3MuZmluZCh2ID0+IHYudHlwZSA9PSB0eXBlKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmZvKSBicmVhaztcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFzID0gRGF0YU1hbmFnZXIuaW5zLmdldChHc19mb29kTWdyKS5nZXREYXRhc0J5VHlwZSh0eXBlKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhcy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBkYXRhc1tpXTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXNoSW5mbyA9IGluZm8udW5sb2NrRGlzaHMuZmluZCh2ID0+IHYuaWQgPT0gZGF0YS5JZCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRpc2hJbmZvKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG51bSA9IFBsYXllckRhdGEuaW5zLmdldEl0ZW1OdW0oZGF0YS5VbG9ja2dyYWRlLmlkKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtID49IGRhdGEuVWxvY2tncmFkZS5udW0pIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVkUG9pbnQodi5rZXlzKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTaG93ID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1Nob3cpIGJyZWFrO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICAgICAgICAgIGNhc2UgUmVkUG9pbnRUeXBlLlRhc2s6XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tMaXN0ID0gUGxheWVyRGF0YS5pbnMuY3VyVGFza0xpc3Q7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFzayA9IHRhc2tMaXN0W2ldO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5wcm9ncmVzcyA+PSB0YXNrLnRhc2suUGFyYW0udmFsdWUpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1JlZFBvaW50KHYua2V5cyk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICAgICAgICAgIGNhc2UgUmVkUG9pbnRUeXBlLkdhbWU6XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKFBsYXllckRhdGEuaW5zLmdhbWVTdGVwID49IDEpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVkUG9pbnQodi5rZXlzKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgICAgICBjYXNlIFJlZFBvaW50VHlwZS5OZXdfc2tpbjpcclxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAoUGxheWVyRGF0YS5pbnMubmV3U2tpbnMubGVuZ3RoID4gMCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dSZWRQb2ludCh2LmtleXMpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICAgICAgICAgIGNhc2UgUmVkUG9pbnRUeXBlLkRpc2hfZmluaXNoOlxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0pXHJcbi8vICAgICAgICAgRXZlbnRNYW5hZ2VyLnRyaWdnZXJFdmVudChFdmVudEVudW0uUmVkUG9pbnRSZWZyZXNoKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4iXX0=