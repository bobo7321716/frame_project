"use strict";
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