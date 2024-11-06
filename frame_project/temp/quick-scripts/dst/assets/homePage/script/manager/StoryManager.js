
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/StoryManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43b10tVcGlO7KEHyVcioxVl', 'StoryManager');
// homePage/script/manager/StoryManager.ts

// import { BundleName } from "../common/BundleName";
// import { SoundPath } from "../common/SoundPath";
// import StoryConfig, { StoryConfigMgr } from "../config/StoryConfig";
// import { AbManager } from "./AbManager";
// import { AudioManager } from "./AudioManager";
// import DataManager from "./DataManager";
// const { ccclass, property } = cc._decorator;
// @ccclass
// export default class StoryManager extends cc.Component {
//     @property(cc.Node)
//     storyNode: cc.Node = null;
//     @property(cc.Label)
//     storyLab: cc.Label = null;
//     @property(cc.Node)
//     tipNode: cc.Node = null;
//     public static ins: StoryManager = null;
//     private storyConfig: StoryConfig = null;
//     private interval: number = 0;
//     private resolve: (value: unknown) => void = null;
//     protected readonly byteInterval: number = 100;
//     private isOnByteAnim: boolean = false;
//     private lv: number = 0;
//     private group: number = 0;
//     private step: number = 0;
//     protected onLoad(): void {
//         StoryManager.ins = this;
//         this.storyNode.active = false;
//     }
//     init() {
//         AbManager.loadBundleRes(BundleName.Font, "方正隶二简体", cc.Font).then(font => {
//             this.storyLab.font = font;
//         })
//     }
//     /**播放一组剧情 startCb/endCb:每句剧情 开始/结束 播放都会触发，返回当前storyConfig */
//     playByGroup(lv: number, group: number, startCb?: (config: StoryConfig) => void, endCb?: (config: StoryConfig) => void) {
//         return new Promise((resolve, reject) => {
//             let index = 0;
//             let storyArr = DataManager.ins.get(StoryConfigMgr).getStoryArrByLvGroup(lv, group);
//             let playCall = () => {
//                 let storyConfig = storyArr[index];
//                 startCb && startCb(storyConfig);
//                 this.playStory(lv, group, index, storyConfig).then(() => {
//                     endCb && endCb(storyConfig);
//                     index++;
//                     if (index >= storyArr.length) {
//                         resolve(null);
//                     } else {
//                         playCall();
//                     }
//                 })
//             }
//             playCall();
//         })
//     }
//     playStory(lv: number, group: number, step: number, storyConfig: StoryConfig) {
//         this.lv = lv;
//         this.group = group;
//         this.step = step;
//         return new Promise((resolve, reject) => {
//             this.storyConfig = storyConfig;
//             if (!this.storyConfig) return resolve(null);
//             this.storyAnim();
//             this.resolve = resolve;
//         })
//     }
//     storyAnim() {
//         if (this.isOnByteAnim) return;
//         let endCall = () => {
//             this.storyNode.active = false;
//             this.resolve && this.resolve(null);
//         }
//         this.storyNode.active = true;
//         // this.isOnByteAnim = true;
//         AudioManager.ins.stopAllEffect();
//         let soundPath = SoundPath["lv_" + this.lv + "_" + this.group + "_" + this.step];
//         console.log("soundPath ", soundPath)
//         if (soundPath) {
//             AudioManager.ins.playEffect(soundPath, false, () => {
//                 endCall();
//             });
//         } else {
//             setTimeout(() => {
//                 endCall();
//             }, 2000);
//         }
//         this.storyLab.string = this.storyConfig.desc
//         // let byteIndex = 0;
//         // this.interval = setInterval(() => {
//         //     if (byteIndex >= this.storyConfig.desc.length) {
//         //         clearInterval(this.interval);
//         //         this.isOnByteAnim = false;
//         //         !soundPath && this.storyEndCb && this.storyEndCb();
//         //         setTimeout(() => {
//         //             UIManager.ins.isSceneBlockInput = false;
//         //             this.storyNode.active = false;
//         //             this.resolve && this.resolve(null);
//         //         }, 2000);
//         //     } else {
//         //         byteIndex++;
//         //         this.storyLab.string = this.storyConfig.desc.slice(0, byteIndex);
//         //     }
//         // }, this.byteInterval);
//     }
//     reset() {
//         this.storyLab.string = "";
//         this.storyConfig = null;
//         clearInterval(this.interval);
//         this.interval = null;
//     }
//     jumpClick() {
//         AudioManager.ins.stopAllEffect();
//         this.storyNode.active = false;
//         this.resolve && this.resolve(null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcU3RvcnlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFxRDtBQUNyRCxtREFBbUQ7QUFDbkQsdUVBQXVFO0FBQ3ZFLDJDQUEyQztBQUMzQyxpREFBaUQ7QUFDakQsMkNBQTJDO0FBRTNDLCtDQUErQztBQUUvQyxXQUFXO0FBQ1gsMkRBQTJEO0FBRTNELHlCQUF5QjtBQUN6QixpQ0FBaUM7QUFFakMsMEJBQTBCO0FBQzFCLGlDQUFpQztBQUVqQyx5QkFBeUI7QUFDekIsK0JBQStCO0FBRS9CLDhDQUE4QztBQUU5QywrQ0FBK0M7QUFDL0Msb0NBQW9DO0FBQ3BDLHdEQUF3RDtBQUN4RCxxREFBcUQ7QUFDckQsNkNBQTZDO0FBQzdDLDhCQUE4QjtBQUM5QixpQ0FBaUM7QUFDakMsZ0NBQWdDO0FBRWhDLGlDQUFpQztBQUNqQyxtQ0FBbUM7QUFDbkMseUNBQXlDO0FBQ3pDLFFBQVE7QUFFUixlQUFlO0FBQ2YscUZBQXFGO0FBQ3JGLHlDQUF5QztBQUN6QyxhQUFhO0FBQ2IsUUFBUTtBQUVSLG1FQUFtRTtBQUNuRSwrSEFBK0g7QUFDL0gsb0RBQW9EO0FBQ3BELDZCQUE2QjtBQUM3QixrR0FBa0c7QUFDbEcscUNBQXFDO0FBQ3JDLHFEQUFxRDtBQUNyRCxtREFBbUQ7QUFDbkQsNkVBQTZFO0FBQzdFLG1EQUFtRDtBQUNuRCwrQkFBK0I7QUFDL0Isc0RBQXNEO0FBQ3RELHlDQUF5QztBQUN6QywrQkFBK0I7QUFDL0Isc0NBQXNDO0FBQ3RDLHdCQUF3QjtBQUN4QixxQkFBcUI7QUFDckIsZ0JBQWdCO0FBQ2hCLDBCQUEwQjtBQUMxQixhQUFhO0FBQ2IsUUFBUTtBQUVSLHFGQUFxRjtBQUNyRix3QkFBd0I7QUFDeEIsOEJBQThCO0FBQzlCLDRCQUE0QjtBQUM1QixvREFBb0Q7QUFDcEQsOENBQThDO0FBQzlDLDJEQUEyRDtBQUMzRCxnQ0FBZ0M7QUFDaEMsc0NBQXNDO0FBQ3RDLGFBQWE7QUFDYixRQUFRO0FBRVIsb0JBQW9CO0FBQ3BCLHlDQUF5QztBQUN6QyxnQ0FBZ0M7QUFDaEMsNkNBQTZDO0FBQzdDLGtEQUFrRDtBQUNsRCxZQUFZO0FBQ1osd0NBQXdDO0FBQ3hDLHVDQUF1QztBQUN2Qyw0Q0FBNEM7QUFDNUMsMkZBQTJGO0FBQzNGLCtDQUErQztBQUMvQywyQkFBMkI7QUFDM0Isb0VBQW9FO0FBQ3BFLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLGlDQUFpQztBQUNqQyw2QkFBNkI7QUFDN0Isd0JBQXdCO0FBQ3hCLFlBQVk7QUFDWix1REFBdUQ7QUFDdkQsZ0NBQWdDO0FBQ2hDLGlEQUFpRDtBQUNqRCxrRUFBa0U7QUFDbEUsbURBQW1EO0FBQ25ELGdEQUFnRDtBQUNoRCx5RUFBeUU7QUFDekUsd0NBQXdDO0FBQ3hDLGtFQUFrRTtBQUNsRSx3REFBd0Q7QUFDeEQsNkRBQTZEO0FBQzdELCtCQUErQjtBQUMvQiwwQkFBMEI7QUFDMUIsa0NBQWtDO0FBQ2xDLHVGQUF1RjtBQUN2RixtQkFBbUI7QUFDbkIsb0NBQW9DO0FBQ3BDLFFBQVE7QUFFUixnQkFBZ0I7QUFDaEIscUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQyx3Q0FBd0M7QUFDeEMsZ0NBQWdDO0FBQ2hDLFFBQVE7QUFFUixvQkFBb0I7QUFDcEIsNENBQTRDO0FBQzVDLHlDQUF5QztBQUN6Qyw4Q0FBOEM7QUFDOUMsUUFBUTtBQUNSLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBCdW5kbGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9CdW5kbGVOYW1lXCI7XG4vLyBpbXBvcnQgeyBTb3VuZFBhdGggfSBmcm9tIFwiLi4vY29tbW9uL1NvdW5kUGF0aFwiO1xuLy8gaW1wb3J0IFN0b3J5Q29uZmlnLCB7IFN0b3J5Q29uZmlnTWdyIH0gZnJvbSBcIi4uL2NvbmZpZy9TdG9yeUNvbmZpZ1wiO1xuLy8gaW1wb3J0IHsgQWJNYW5hZ2VyIH0gZnJvbSBcIi4vQWJNYW5hZ2VyXCI7XG4vLyBpbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tIFwiLi9BdWRpb01hbmFnZXJcIjtcbi8vIGltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xuXG4vLyBjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vLyBAY2NjbGFzc1xuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcnlNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuLy8gICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuLy8gICAgIHN0b3J5Tm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbi8vICAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4vLyAgICAgc3RvcnlMYWI6IGNjLkxhYmVsID0gbnVsbDtcblxuLy8gICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuLy8gICAgIHRpcE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4vLyAgICAgcHVibGljIHN0YXRpYyBpbnM6IFN0b3J5TWFuYWdlciA9IG51bGw7XG5cbi8vICAgICBwcml2YXRlIHN0b3J5Q29uZmlnOiBTdG9yeUNvbmZpZyA9IG51bGw7XG4vLyAgICAgcHJpdmF0ZSBpbnRlcnZhbDogbnVtYmVyID0gMDtcbi8vICAgICBwcml2YXRlIHJlc29sdmU6ICh2YWx1ZTogdW5rbm93bikgPT4gdm9pZCA9IG51bGw7XG4vLyAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGJ5dGVJbnRlcnZhbDogbnVtYmVyID0gMTAwO1xuLy8gICAgIHByaXZhdGUgaXNPbkJ5dGVBbmltOiBib29sZWFuID0gZmFsc2U7XG4vLyAgICAgcHJpdmF0ZSBsdjogbnVtYmVyID0gMDtcbi8vICAgICBwcml2YXRlIGdyb3VwOiBudW1iZXIgPSAwO1xuLy8gICAgIHByaXZhdGUgc3RlcDogbnVtYmVyID0gMDtcblxuLy8gICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4vLyAgICAgICAgIFN0b3J5TWFuYWdlci5pbnMgPSB0aGlzO1xuLy8gICAgICAgICB0aGlzLnN0b3J5Tm9kZS5hY3RpdmUgPSBmYWxzZTtcbi8vICAgICB9XG5cbi8vICAgICBpbml0KCkge1xuLy8gICAgICAgICBBYk1hbmFnZXIubG9hZEJ1bmRsZVJlcyhCdW5kbGVOYW1lLkZvbnQsIFwi5pa55q2j6Zq25LqM566A5L2TXCIsIGNjLkZvbnQpLnRoZW4oZm9udCA9PiB7XG4vLyAgICAgICAgICAgICB0aGlzLnN0b3J5TGFiLmZvbnQgPSBmb250O1xuLy8gICAgICAgICB9KVxuLy8gICAgIH1cblxuLy8gICAgIC8qKuaSreaUvuS4gOe7hOWJp+aDhSBzdGFydENiL2VuZENiOuavj+WPpeWJp+aDhSDlvIDlp4sv57uT5p2fIOaSreaUvumDveS8muinpuWPke+8jOi/lOWbnuW9k+WJjXN0b3J5Q29uZmlnICovXG4vLyAgICAgcGxheUJ5R3JvdXAobHY6IG51bWJlciwgZ3JvdXA6IG51bWJlciwgc3RhcnRDYj86IChjb25maWc6IFN0b3J5Q29uZmlnKSA9PiB2b2lkLCBlbmRDYj86IChjb25maWc6IFN0b3J5Q29uZmlnKSA9PiB2b2lkKSB7XG4vLyAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4vLyAgICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xuLy8gICAgICAgICAgICAgbGV0IHN0b3J5QXJyID0gRGF0YU1hbmFnZXIuaW5zLmdldChTdG9yeUNvbmZpZ01ncikuZ2V0U3RvcnlBcnJCeUx2R3JvdXAobHYsIGdyb3VwKTtcbi8vICAgICAgICAgICAgIGxldCBwbGF5Q2FsbCA9ICgpID0+IHtcbi8vICAgICAgICAgICAgICAgICBsZXQgc3RvcnlDb25maWcgPSBzdG9yeUFycltpbmRleF07XG4vLyAgICAgICAgICAgICAgICAgc3RhcnRDYiAmJiBzdGFydENiKHN0b3J5Q29uZmlnKTtcbi8vICAgICAgICAgICAgICAgICB0aGlzLnBsYXlTdG9yeShsdiwgZ3JvdXAsIGluZGV4LCBzdG9yeUNvbmZpZykudGhlbigoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGVuZENiICYmIGVuZENiKHN0b3J5Q29uZmlnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IHN0b3J5QXJyLmxlbmd0aCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlDYWxsKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgcGxheUNhbGwoKTtcbi8vICAgICAgICAgfSlcbi8vICAgICB9XG5cbi8vICAgICBwbGF5U3RvcnkobHY6IG51bWJlciwgZ3JvdXA6IG51bWJlciwgc3RlcDogbnVtYmVyLCBzdG9yeUNvbmZpZzogU3RvcnlDb25maWcpIHtcbi8vICAgICAgICAgdGhpcy5sdiA9IGx2O1xuLy8gICAgICAgICB0aGlzLmdyb3VwID0gZ3JvdXA7XG4vLyAgICAgICAgIHRoaXMuc3RlcCA9IHN0ZXA7XG4vLyAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4vLyAgICAgICAgICAgICB0aGlzLnN0b3J5Q29uZmlnID0gc3RvcnlDb25maWc7XG4vLyAgICAgICAgICAgICBpZiAoIXRoaXMuc3RvcnlDb25maWcpIHJldHVybiByZXNvbHZlKG51bGwpO1xuLy8gICAgICAgICAgICAgdGhpcy5zdG9yeUFuaW0oKTtcbi8vICAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuXG4vLyAgICAgc3RvcnlBbmltKCkge1xuLy8gICAgICAgICBpZiAodGhpcy5pc09uQnl0ZUFuaW0pIHJldHVybjtcbi8vICAgICAgICAgbGV0IGVuZENhbGwgPSAoKSA9PiB7XG4vLyAgICAgICAgICAgICB0aGlzLnN0b3J5Tm9kZS5hY3RpdmUgPSBmYWxzZTtcbi8vICAgICAgICAgICAgIHRoaXMucmVzb2x2ZSAmJiB0aGlzLnJlc29sdmUobnVsbCk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgdGhpcy5zdG9yeU5vZGUuYWN0aXZlID0gdHJ1ZTtcbi8vICAgICAgICAgLy8gdGhpcy5pc09uQnl0ZUFuaW0gPSB0cnVlO1xuLy8gICAgICAgICBBdWRpb01hbmFnZXIuaW5zLnN0b3BBbGxFZmZlY3QoKTtcbi8vICAgICAgICAgbGV0IHNvdW5kUGF0aCA9IFNvdW5kUGF0aFtcImx2X1wiICsgdGhpcy5sdiArIFwiX1wiICsgdGhpcy5ncm91cCArIFwiX1wiICsgdGhpcy5zdGVwXTtcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJzb3VuZFBhdGggXCIsIHNvdW5kUGF0aClcbi8vICAgICAgICAgaWYgKHNvdW5kUGF0aCkge1xuLy8gICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmlucy5wbGF5RWZmZWN0KHNvdW5kUGF0aCwgZmFsc2UsICgpID0+IHtcbi8vICAgICAgICAgICAgICAgICBlbmRDYWxsKCk7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGVuZENhbGwoKTtcbi8vICAgICAgICAgICAgIH0sIDIwMDApO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHRoaXMuc3RvcnlMYWIuc3RyaW5nID0gdGhpcy5zdG9yeUNvbmZpZy5kZXNjXG4vLyAgICAgICAgIC8vIGxldCBieXRlSW5kZXggPSAwO1xuLy8gICAgICAgICAvLyB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuLy8gICAgICAgICAvLyAgICAgaWYgKGJ5dGVJbmRleCA+PSB0aGlzLnN0b3J5Q29uZmlnLmRlc2MubGVuZ3RoKSB7XG4vLyAgICAgICAgIC8vICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbi8vICAgICAgICAgLy8gICAgICAgICB0aGlzLmlzT25CeXRlQW5pbSA9IGZhbHNlO1xuLy8gICAgICAgICAvLyAgICAgICAgICFzb3VuZFBhdGggJiYgdGhpcy5zdG9yeUVuZENiICYmIHRoaXMuc3RvcnlFbmRDYigpO1xuLy8gICAgICAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgICAvLyAgICAgICAgICAgICBVSU1hbmFnZXIuaW5zLmlzU2NlbmVCbG9ja0lucHV0ID0gZmFsc2U7XG4vLyAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc3RvcnlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuLy8gICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnJlc29sdmUgJiYgdGhpcy5yZXNvbHZlKG51bGwpO1xuLy8gICAgICAgICAvLyAgICAgICAgIH0sIDIwMDApO1xuLy8gICAgICAgICAvLyAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgLy8gICAgICAgICBieXRlSW5kZXgrKztcbi8vICAgICAgICAgLy8gICAgICAgICB0aGlzLnN0b3J5TGFiLnN0cmluZyA9IHRoaXMuc3RvcnlDb25maWcuZGVzYy5zbGljZSgwLCBieXRlSW5kZXgpO1xuLy8gICAgICAgICAvLyAgICAgfVxuLy8gICAgICAgICAvLyB9LCB0aGlzLmJ5dGVJbnRlcnZhbCk7XG4vLyAgICAgfVxuXG4vLyAgICAgcmVzZXQoKSB7XG4vLyAgICAgICAgIHRoaXMuc3RvcnlMYWIuc3RyaW5nID0gXCJcIjtcbi8vICAgICAgICAgdGhpcy5zdG9yeUNvbmZpZyA9IG51bGw7XG4vLyAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4vLyAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBudWxsO1xuLy8gICAgIH1cblxuLy8gICAgIGp1bXBDbGljaygpIHtcbi8vICAgICAgICAgQXVkaW9NYW5hZ2VyLmlucy5zdG9wQWxsRWZmZWN0KCk7XG4vLyAgICAgICAgIHRoaXMuc3RvcnlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuLy8gICAgICAgICB0aGlzLnJlc29sdmUgJiYgdGhpcy5yZXNvbHZlKG51bGwpO1xuLy8gICAgIH1cbi8vIH1cbiJdfQ==