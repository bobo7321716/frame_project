
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f1c9fxqw1Ha574i8X2BSX0', 'AudioManager');
// homePage/script/manager/AudioManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioManager = void 0;
var PlayerData_1 = require("../common/PlayerData");
var SoundPath_1 = require("../common/SoundPath");
var Util_1 = require("../common/Util");
var AbManager_1 = require("./AbManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audioSource = null;
        _this.curEffectId = null;
        _this.curAudioId = null;
        _this.curBgmArg = { path: null, clip: null };
        _this.commonAudioPath = ["res/audios/click", "res/audios/open", "res/audios/close"];
        _this.soundIds = new Map();
        return _this;
    }
    AudioManager_1 = AudioManager;
    AudioManager.prototype.onLoad = function () {
        AudioManager_1.ins = this;
    };
    AudioManager.prototype.playClickAudio = function () {
        this.playEffect(SoundPath_1.SoundPath.button_click);
    };
    /**
     * 播放背景音乐
     * @returns
     */
    AudioManager.prototype.playBgm = function (audioData, isloop, cb) {
        var _this = this;
        if (isloop === void 0) { isloop = true; }
        if (cb === void 0) { cb = null; }
        if (!PlayerData_1.PlayerData.ins.isPlayMusic) {
            return;
        }
        var bundleName = audioData.bundle;
        var path = audioData.url;
        if (cc.audioEngine.isMusicPlaying() && this.curBgmArg.path && this.curBgmArg.path == path) {
        }
        else {
            this.stopBgm();
            AbManager_1.AbManager.loadBundleRes(bundleName, path, cc.AudioClip).then(function (clip) {
                if (!Util_1.Util.isValid(_this.node))
                    return;
                if (clip) {
                    var bgmId = cc.audioEngine.playMusic(clip, isloop);
                    if (cb) {
                        cc.audioEngine.setFinishCallback(bgmId, cb);
                    }
                    _this.curBgmArg.path = path;
                    _this.curBgmArg.clip = clip;
                }
            });
        }
    };
    /**
     * 停止bgm
     */
    AudioManager.prototype.stopBgm = function () {
        cc.audioEngine.stopMusic();
        AbManager_1.AbManager.isAutoReleaseAsset && this.curBgmArg.clip && this.curBgmArg.clip.decRef();
        this.curBgmArg = { path: null, clip: null };
    };
    //暂停bgm
    AudioManager.prototype.pauseBgm = function () {
        cc.audioEngine.pauseMusic();
    };
    //恢复bgm
    AudioManager.prototype.resumeBgm = function () {
        if (!PlayerData_1.PlayerData.ins.isPlayMusic) {
            return;
        }
        cc.audioEngine.resumeMusic();
    };
    /**
     * 播放音效
     */
    AudioManager.prototype.playEffect = function (audioData, isloop, cb) {
        var _this = this;
        if (isloop === void 0) { isloop = false; }
        if (cb === void 0) { cb = null; }
        if (!PlayerData_1.PlayerData.ins.isPlayAudio) {
            cb && cb();
            return;
        }
        // console.warn("playEffect ", audioData);
        var bundleName = audioData.bundle;
        var path = audioData.url;
        AbManager_1.AbManager.loadBundleRes(bundleName, path, cc.AudioClip).then(function (clip) {
            if (!Util_1.Util.isValid(_this.node))
                return;
            if (clip) {
                var audioID = void 0;
                if (_this.commonAudioPath.indexOf(path) > 0) {
                    audioID = cc.audioEngine.playEffect(clip, isloop);
                }
                else {
                    audioID = cc.audioEngine.playEffect(clip, isloop);
                    _this.curEffectId = audioID;
                }
                _this.stopEffectByBundleData(audioData);
                _this.addSoundId(audioData, audioID);
                cc.audioEngine.setFinishCallback(audioID, function () {
                    AbManager_1.AbManager.isAutoReleaseAsset && clip.decRef();
                    cb && cb();
                    _this.delSoundId(audioData);
                });
            }
            else {
                cb && cb();
            }
        });
    };
    /**
     * 停止播放音效
     */
    AudioManager.prototype.stopEffect = function () {
        if (this.curEffectId == null) {
            return;
        }
        cc.audioEngine.stopEffect(this.curEffectId);
        this.curEffectId = null;
        this.delSoundIdById(this.curEffectId);
    };
    AudioManager.prototype.stopEffectByBundleData = function (audioData) {
        var audioID = this.getSoundId(audioData);
        if (audioID != null) {
            cc.audioEngine.stopEffect(audioID);
            this.delSoundId(audioData);
        }
    };
    /**
     * 停止所有音效
     */
    AudioManager.prototype.stopAllEffect = function () {
        cc.audioEngine.stopAllEffects();
        this.curEffectId = null;
        this.soundIds.clear();
    };
    /**
     * 暂停音效
     */
    AudioManager.prototype.pauseEffect = function () {
        if (this.curEffectId == null) {
            return;
        }
        cc.audioEngine.pauseEffect(this.curEffectId);
    };
    AudioManager.prototype.pauseEffectByBundleData = function (audioData) {
        var audioID = this.getSoundId(audioData);
        if (audioID != null) {
            cc.audioEngine.pauseEffect(audioID);
        }
    };
    /**恢复音效 */
    AudioManager.prototype.resumeEffect = function () {
        if (!PlayerData_1.PlayerData.ins.isPlayAudio) {
            return;
        }
        if (this.curEffectId == null) {
            return;
        }
        cc.audioEngine.resumeEffect(this.curEffectId);
    };
    AudioManager.prototype.resumeEffectByBundleData = function (audioData) {
        if (!PlayerData_1.PlayerData.ins.isPlayAudio) {
            return;
        }
        var audioID = this.getSoundId(audioData);
        if (audioID != null) {
            cc.audioEngine.resumeEffect(audioID);
        }
    };
    /**播放音频，设置开始比例 */
    AudioManager.prototype.playEffectPro = function (audioData, isloop, cb, startPro) {
        var _this = this;
        if (isloop === void 0) { isloop = false; }
        if (cb === void 0) { cb = null; }
        if (startPro === void 0) { startPro = 0; }
        if (!PlayerData_1.PlayerData.ins.isPlayAudio) {
            cb && cb();
            return;
        }
        var bundleName = audioData.bundle;
        var path = audioData.url;
        AbManager_1.AbManager.loadBundleRes(bundleName, path, cc.AudioClip).then(function (clip) {
            if (!Util_1.Util.isValid(_this.node))
                return;
            var audioID = cc.audioEngine.playEffect(clip, isloop);
            var dur = cc.audioEngine.getDuration(audioID);
            cc.audioEngine.setCurrentTime(audioID, startPro * dur);
            _this.curEffectId = audioID;
            _this.stopEffectByBundleData(audioData);
            _this.addSoundId(audioData, audioID);
            cc.audioEngine.setFinishCallback(audioID, function () {
                cb && cb();
                _this.delSoundId(audioData);
            });
        }).catch(function (err) {
            console.log("err");
            cb && cb();
        });
    };
    /**
     * 播放音频
     */
    AudioManager.prototype.playAudio = function (audioData, isloop, cb) {
        var _this = this;
        if (isloop === void 0) { isloop = false; }
        if (cb === void 0) { cb = null; }
        if (!PlayerData_1.PlayerData.ins.isPlayAudio) {
            cb && cb();
            return;
        }
        // console.warn("playAudio ", audioData);
        var bundleName = audioData.bundle;
        var path = audioData.url;
        AbManager_1.AbManager.loadBundleRes(bundleName, path, cc.AudioClip).then(function (clip) {
            if (!Util_1.Util.isValid(_this.node))
                return;
            if (clip) {
                var audioID = cc.audioEngine.play(clip, isloop, 1);
                _this.curAudioId = audioID;
                _this.stopAudioByBundleData(audioData);
                _this.addSoundId(audioData, audioID);
                cc.audioEngine.setFinishCallback(audioID, function () {
                    cb && cb();
                    _this.delSoundId(audioData);
                });
            }
            else {
                cb && cb();
            }
        });
    };
    /**
     * 停止播放音频
     */
    AudioManager.prototype.stopAudio = function () {
        if (this.curAudioId == null) {
            return;
        }
        cc.audioEngine.stop(this.curAudioId);
        this.curAudioId = null;
        this.delSoundIdById(this.curAudioId);
    };
    AudioManager.prototype.stopAudioByBundleData = function (audioData) {
        var audioID = this.getSoundId(audioData);
        if (audioID != null) {
            cc.audioEngine.stop(audioID);
            this.delSoundId(audioData);
        }
    };
    AudioManager.prototype.pauseAudio = function () {
        if (this.curAudioId == null) {
            return;
        }
        cc.audioEngine.pause(this.curAudioId);
    };
    AudioManager.prototype.pauseAudioByBundleData = function (audioData) {
        var audioID = this.getSoundId(audioData);
        if (audioID != null) {
            cc.audioEngine.pause(audioID);
        }
    };
    AudioManager.prototype.resumeAudio = function () {
        if (this.curAudioId == null) {
            return;
        }
        cc.audioEngine.resume(this.curAudioId);
    };
    AudioManager.prototype.resumeAudioByBundleData = function (audioData) {
        var audioID = this.getSoundId(audioData);
        if (audioID != null) {
            cc.audioEngine.resume(audioID);
        }
    };
    /**
     * 通过audioSource播放音频
     */
    AudioManager.prototype.playAudioBySource = function (audioData, isloop) {
        var _this = this;
        if (isloop === void 0) { isloop = false; }
        if (!this.audioSource) {
            console.warn("audioSource is empty");
            return;
        }
        if (!PlayerData_1.PlayerData.ins.isPlayAudio) {
            return;
        }
        var bundleName = audioData.bundle;
        var path = audioData.url;
        AbManager_1.AbManager.loadBundleRes(bundleName, path, cc.AudioClip).then(function (clip) {
            if (!Util_1.Util.isValid(_this.node))
                return;
            if (clip) {
                _this.stopAudioSource();
                _this.audioSource.clip = clip;
                _this.audioSource.loop = isloop;
                _this.audioSource.play();
            }
        });
    };
    AudioManager.prototype.stopAudioSource = function () {
        if (!this.audioSource) {
            return;
        }
        if (this.audioSource.isPlaying) {
            this.audioSource.stop();
        }
    };
    AudioManager.prototype.pauseAudioSource = function () {
        if (!this.audioSource) {
            return;
        }
        if (this.audioSource.isPlaying) {
            this.audioSource.pause();
        }
    };
    AudioManager.prototype.resumeAudioSource = function () {
        if (!this.audioSource) {
            return;
        }
        this.audioSource.resume();
    };
    AudioManager.prototype.stopAllSound = function () {
        this.stopAllEffect();
        this.stopAudio();
        this.stopAudioSource();
        this.stopBgm();
    };
    AudioManager.prototype.pauseAllSound = function () {
        this.pauseEffect();
        this.pauseAudio();
        this.pauseBgm();
        this.pauseAudioSource();
    };
    AudioManager.prototype.resumeAllSound = function () {
        this.resumeEffect();
        this.resumeAudio();
        this.resumeBgm();
        this.resumeAudioSource();
    };
    AudioManager.prototype.addSoundId = function (audioData, audioId) {
        var key = audioData.bundle + audioData.url;
        this.soundIds.set(key, audioId);
    };
    AudioManager.prototype.hasSoundId = function (audioData) {
        var key = audioData.bundle + audioData.url;
        return this.soundIds.has(key);
    };
    AudioManager.prototype.delSoundId = function (audioData) {
        var key = audioData.bundle + audioData.url;
        this.soundIds.delete(key);
    };
    AudioManager.prototype.getSoundId = function (audioData) {
        var key = audioData.bundle + audioData.url;
        return this.soundIds.get(key);
    };
    AudioManager.prototype.delSoundIdById = function (audioID) {
        var _this = this;
        this.soundIds.forEach(function (value, key) {
            if (audioID == value) {
                _this.soundIds.delete(key);
            }
        });
    };
    var AudioManager_1;
    AudioManager.ins = null;
    __decorate([
        property(cc.AudioSource)
    ], AudioManager.prototype, "audioSource", void 0);
    AudioManager = AudioManager_1 = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.AudioManager = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcQXVkaW9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtREFBa0Q7QUFDbEQsaURBQWdEO0FBQ2hELHVDQUFzQztBQUN0Qyx5Q0FBd0M7QUFHbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0MsZ0NBQVk7SUFBOUM7UUFBQSxxRUF5WEM7UUF0WEcsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBRTNCLGlCQUFXLEdBQVcsSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQVcsSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBeUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUU3RSxxQkFBZSxHQUFhLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUl4RixjQUFRLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7O0lBMFdqRCxDQUFDO3FCQXpYWSxZQUFZO0lBaUJYLDZCQUFNLEdBQWhCO1FBQ0ksY0FBWSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7T0FHRztJQUNILDhCQUFPLEdBQVAsVUFBUSxTQUFxQixFQUFFLE1BQXNCLEVBQUUsRUFBcUI7UUFBNUUsaUJBc0JDO1FBdEI4Qix1QkFBQSxFQUFBLGFBQXNCO1FBQUUsbUJBQUEsRUFBQSxTQUFxQjtRQUN4RSxJQUFJLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO1lBQzdCLE9BQU87U0FDVjtRQUNELElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDbEMsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUN6QixJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO1NBRTFGO2FBQU07WUFDSCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixxQkFBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO2dCQUM5RCxJQUFJLENBQUMsV0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDO29CQUFFLE9BQU87Z0JBQ3JDLElBQUksSUFBSSxFQUFFO29CQUNOLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDbkQsSUFBSSxFQUFFLEVBQUU7d0JBQ0osRUFBRSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7cUJBQy9DO29CQUNELEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDM0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2lCQUM5QjtZQUNMLENBQUMsQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCw4QkFBTyxHQUFQO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMzQixxQkFBUyxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BGLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsT0FBTztJQUNQLCtCQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxPQUFPO0lBQ1AsZ0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7WUFDN0IsT0FBTztTQUNWO1FBQ0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQ0FBVSxHQUFWLFVBQVcsU0FBcUIsRUFBRSxNQUF1QixFQUFFLEVBQXFCO1FBQWhGLGlCQThCQztRQTlCaUMsdUJBQUEsRUFBQSxjQUF1QjtRQUFFLG1CQUFBLEVBQUEsU0FBcUI7UUFDNUUsSUFBSSxDQUFDLHVCQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUM3QixFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7WUFDWCxPQUFPO1NBQ1Y7UUFDRCwwQ0FBMEM7UUFDMUMsSUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUNsQyxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDO1FBQ3pCLHFCQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDOUQsSUFBSSxDQUFDLFdBQUksQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQztnQkFBRSxPQUFPO1lBQ3JDLElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksT0FBTyxTQUFBLENBQUM7Z0JBQ1osSUFBSSxLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3hDLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQ3JEO3FCQUFNO29CQUNILE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ2xELEtBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO2lCQUM5QjtnQkFFRCxLQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNwQyxFQUFFLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtvQkFDdEMscUJBQVMsQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzlDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztvQkFDWCxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMvQixDQUFDLENBQUMsQ0FBQzthQUNOO2lCQUFNO2dCQUNILEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQzthQUNkO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQ0FBVSxHQUFqQjtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLEVBQUU7WUFDMUIsT0FBTztTQUNWO1FBQ0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSw2Q0FBc0IsR0FBN0IsVUFBOEIsU0FBcUI7UUFFL0MsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDakIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLG9DQUFhLEdBQXBCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7T0FFRztJQUVJLGtDQUFXLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksRUFBRTtZQUMxQixPQUFPO1NBQ1Y7UUFDRCxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLDhDQUF1QixHQUE5QixVQUErQixTQUFxQjtRQUNoRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtZQUNqQixFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFFRCxVQUFVO0lBQ0gsbUNBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO1lBQzdCLE9BQU87U0FDVjtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLEVBQUU7WUFDMUIsT0FBTztTQUNWO1FBQ0QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSwrQ0FBd0IsR0FBL0IsVUFBZ0MsU0FBcUI7UUFDakQsSUFBSSxDQUFDLHVCQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUM3QixPQUFPO1NBQ1Y7UUFDRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtZQUNqQixFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QztJQUNMLENBQUM7SUFFRCxpQkFBaUI7SUFDakIsb0NBQWEsR0FBYixVQUFjLFNBQXFCLEVBQUUsTUFBdUIsRUFBRSxFQUFxQixFQUFFLFFBQW9CO1FBQXpHLGlCQXVCQztRQXZCb0MsdUJBQUEsRUFBQSxjQUF1QjtRQUFFLG1CQUFBLEVBQUEsU0FBcUI7UUFBRSx5QkFBQSxFQUFBLFlBQW9CO1FBQ3JHLElBQUksQ0FBQyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7WUFDN0IsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQ1gsT0FBTztTQUNWO1FBQ0QsSUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUNsQyxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFBO1FBQ3hCLHFCQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDOUQsSUFBSSxDQUFDLFdBQUksQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQztnQkFBRSxPQUFPO1lBQ3JDLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN4RCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QyxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZELEtBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNwQyxFQUFFLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtnQkFDdEMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO2dCQUNYLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRDs7T0FFRztJQUNILGdDQUFTLEdBQVQsVUFBVSxTQUFxQixFQUFFLE1BQXVCLEVBQUUsRUFBcUI7UUFBL0UsaUJBdUJDO1FBdkJnQyx1QkFBQSxFQUFBLGNBQXVCO1FBQUUsbUJBQUEsRUFBQSxTQUFxQjtRQUMzRSxJQUFJLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO1lBQzdCLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUNYLE9BQU87U0FDVjtRQUNELHlDQUF5QztRQUN6QyxJQUFJLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ2xDLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDekIscUJBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUM5RCxJQUFJLENBQUMsV0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQU87WUFDckMsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDckQsS0FBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdEMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3BDLEVBQUUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFO29CQUN0QyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7b0JBQ1gsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLENBQUM7YUFDTjtpQkFBTTtnQkFDSCxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7YUFDZDtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVEOztPQUVHO0lBQ0ksZ0NBQVMsR0FBaEI7UUFDSSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO1lBQ3pCLE9BQU87U0FDVjtRQUNELEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBRU0sNENBQXFCLEdBQTVCLFVBQTZCLFNBQXFCO1FBQzlDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ2pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBRU0saUNBQVUsR0FBakI7UUFDSSxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO1lBQ3pCLE9BQU87U0FDVjtRQUNELEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sNkNBQXNCLEdBQTdCLFVBQThCLFNBQXFCO1FBQy9DLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0MsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ2pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUVNLGtDQUFXLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtZQUN6QixPQUFPO1NBQ1Y7UUFDRCxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLDhDQUF1QixHQUE5QixVQUErQixTQUFxQjtRQUNoRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtZQUNqQixFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLHdDQUFpQixHQUF4QixVQUF5QixTQUFxQixFQUFFLE1BQXVCO1FBQXZFLGlCQW9CQztRQXBCK0MsdUJBQUEsRUFBQSxjQUF1QjtRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDckMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLHVCQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtZQUM3QixPQUFPO1NBQ1Y7UUFDRCxJQUFJLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ2xDLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFFekIscUJBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUM5RCxJQUFJLENBQUMsV0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQU87WUFDckMsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN2QixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztnQkFDL0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMzQjtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLHNDQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkIsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUVNLHVDQUFnQixHQUF2QjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25CLE9BQU87U0FDVjtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFFTSx3Q0FBaUIsR0FBeEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNuQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSxtQ0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU0sb0NBQWEsR0FBcEI7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0scUNBQWMsR0FBckI7UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU8saUNBQVUsR0FBbEIsVUFBbUIsU0FBcUIsRUFBRSxPQUFPO1FBQzdDLElBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNPLGlDQUFVLEdBQWxCLFVBQW1CLFNBQXFCO1FBQ3BDLElBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUM3QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDTyxpQ0FBVSxHQUFsQixVQUFtQixTQUFxQjtRQUNwQyxJQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNPLGlDQUFVLEdBQWxCLFVBQW1CLFNBQXFCO1FBQ3BDLElBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUM3QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDTyxxQ0FBYyxHQUF0QixVQUF1QixPQUFPO1FBQTlCLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUUsR0FBRztZQUM3QixJQUFJLE9BQU8sSUFBSSxLQUFLLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDOztJQTNXYSxnQkFBRyxHQUFpQixJQUFJLENBQUM7SUFWdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztxREFDVTtJQUgxQixZQUFZO1FBRHhCLE9BQU87T0FDSyxZQUFZLENBeVh4QjtJQUFELG1CQUFDO0NBelhELEFBeVhDLENBelhpQyxFQUFFLENBQUMsU0FBUyxHQXlYN0M7QUF6WFksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdW5kbGVEYXRhIH0gZnJvbSBcIi4uL2NvbW1vbi9CdW5kbGVEYXRhXCI7XHJcbmltcG9ydCB7IFBsYXllckRhdGEgfSBmcm9tIFwiLi4vY29tbW9uL1BsYXllckRhdGFcIjtcclxuaW1wb3J0IHsgU291bmRQYXRoIH0gZnJvbSBcIi4uL2NvbW1vbi9Tb3VuZFBhdGhcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi9jb21tb24vVXRpbFwiO1xyXG5pbXBvcnQgeyBBYk1hbmFnZXIgfSBmcm9tIFwiLi9BYk1hbmFnZXJcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxyXG4gICAgYXVkaW9Tb3VyY2U6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGN1ckVmZmVjdElkOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY3VyQXVkaW9JZDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGN1ckJnbUFyZzogeyBwYXRoOiBzdHJpbmcsIGNsaXA6IGNjLkF1ZGlvQ2xpcCB9ID0geyBwYXRoOiBudWxsLCBjbGlwOiBudWxsIH07XHJcblxyXG4gICAgcHJpdmF0ZSBjb21tb25BdWRpb1BhdGg6IHN0cmluZ1tdID0gW1wicmVzL2F1ZGlvcy9jbGlja1wiLCBcInJlcy9hdWRpb3Mvb3BlblwiLCBcInJlcy9hdWRpb3MvY2xvc2VcIl07XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbnM6IEF1ZGlvTWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzb3VuZElkcyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwbGF5Q2xpY2tBdWRpbygpIHtcclxuICAgICAgICB0aGlzLnBsYXlFZmZlY3QoU291bmRQYXRoLmJ1dHRvbl9jbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7og4zmma/pn7PkuZBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwbGF5QmdtKGF1ZGlvRGF0YTogQnVuZGxlRGF0YSwgaXNsb29wOiBib29sZWFuID0gdHJ1ZSwgY2I6ICgpID0+IHZvaWQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCFQbGF5ZXJEYXRhLmlucy5pc1BsYXlNdXNpYykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidW5kbGVOYW1lID0gYXVkaW9EYXRhLmJ1bmRsZTtcclxuICAgICAgICBsZXQgcGF0aCA9IGF1ZGlvRGF0YS51cmw7XHJcbiAgICAgICAgaWYgKGNjLmF1ZGlvRW5naW5lLmlzTXVzaWNQbGF5aW5nKCkgJiYgdGhpcy5jdXJCZ21BcmcucGF0aCAmJiB0aGlzLmN1ckJnbUFyZy5wYXRoID09IHBhdGgpIHtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wQmdtKCk7XHJcbiAgICAgICAgICAgIEFiTWFuYWdlci5sb2FkQnVuZGxlUmVzKGJ1bmRsZU5hbWUsIHBhdGgsIGNjLkF1ZGlvQ2xpcCkudGhlbigoY2xpcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFVdGlsLmlzVmFsaWQodGhpcy5ub2RlKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsaXApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYmdtSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoY2xpcCwgaXNsb29wKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYmdtSWQsIGNiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJCZ21BcmcucGF0aCA9IHBhdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJCZ21BcmcuY2xpcCA9IGNsaXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YGc5q2iYmdtXHJcbiAgICAgKi9cclxuICAgIHN0b3BCZ20oKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgQWJNYW5hZ2VyLmlzQXV0b1JlbGVhc2VBc3NldCAmJiB0aGlzLmN1ckJnbUFyZy5jbGlwICYmIHRoaXMuY3VyQmdtQXJnLmNsaXAuZGVjUmVmKCk7XHJcbiAgICAgICAgdGhpcy5jdXJCZ21BcmcgPSB7IHBhdGg6IG51bGwsIGNsaXA6IG51bGwgfTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aaguWBnGJnbVxyXG4gICAgcGF1c2VCZ20oKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5oGi5aSNYmdtXHJcbiAgICByZXN1bWVCZ20oKSB7XHJcbiAgICAgICAgaWYgKCFQbGF5ZXJEYXRhLmlucy5pc1BsYXlNdXNpYykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZU11c2ljKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7pn7PmlYhcclxuICAgICAqL1xyXG4gICAgcGxheUVmZmVjdChhdWRpb0RhdGE6IEJ1bmRsZURhdGEsIGlzbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBjYjogKCkgPT4gdm9pZCA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIVBsYXllckRhdGEuaW5zLmlzUGxheUF1ZGlvKSB7XHJcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS53YXJuKFwicGxheUVmZmVjdCBcIiwgYXVkaW9EYXRhKTtcclxuICAgICAgICBsZXQgYnVuZGxlTmFtZSA9IGF1ZGlvRGF0YS5idW5kbGU7XHJcbiAgICAgICAgbGV0IHBhdGggPSBhdWRpb0RhdGEudXJsO1xyXG4gICAgICAgIEFiTWFuYWdlci5sb2FkQnVuZGxlUmVzKGJ1bmRsZU5hbWUsIHBhdGgsIGNjLkF1ZGlvQ2xpcCkudGhlbigoY2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIVV0aWwuaXNWYWxpZCh0aGlzLm5vZGUpKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChjbGlwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXVkaW9JRDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbW1vbkF1ZGlvUGF0aC5pbmRleE9mKHBhdGgpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGlzbG9vcCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGlzbG9vcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJFZmZlY3RJZCA9IGF1ZGlvSUQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wRWZmZWN0QnlCdW5kbGVEYXRhKGF1ZGlvRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFNvdW5kSWQoYXVkaW9EYXRhLCBhdWRpb0lEKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEZpbmlzaENhbGxiYWNrKGF1ZGlvSUQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBBYk1hbmFnZXIuaXNBdXRvUmVsZWFzZUFzc2V0ICYmIGNsaXAuZGVjUmVmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbFNvdW5kSWQoYXVkaW9EYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLmkq3mlL7pn7PmlYhcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0b3BFZmZlY3QoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyRWZmZWN0SWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QodGhpcy5jdXJFZmZlY3RJZCk7XHJcbiAgICAgICAgdGhpcy5jdXJFZmZlY3RJZCA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuZGVsU291bmRJZEJ5SWQodGhpcy5jdXJFZmZlY3RJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BFZmZlY3RCeUJ1bmRsZURhdGEoYXVkaW9EYXRhOiBCdW5kbGVEYXRhKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnN0IGF1ZGlvSUQgPSB0aGlzLmdldFNvdW5kSWQoYXVkaW9EYXRhKTtcclxuICAgICAgICBpZiAoYXVkaW9JRCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QoYXVkaW9JRCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsU291bmRJZChhdWRpb0RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWBnOatouaJgOaciemfs+aViFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RvcEFsbEVmZmVjdCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgICAgIHRoaXMuY3VyRWZmZWN0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc291bmRJZHMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaaguWBnOmfs+aViFxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHBhdXNlRWZmZWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1ckVmZmVjdElkID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZUVmZmVjdCh0aGlzLmN1ckVmZmVjdElkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGF1c2VFZmZlY3RCeUJ1bmRsZURhdGEoYXVkaW9EYXRhOiBCdW5kbGVEYXRhKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYXVkaW9JRCA9IHRoaXMuZ2V0U291bmRJZChhdWRpb0RhdGEpO1xyXG4gICAgICAgIGlmIChhdWRpb0lEICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VFZmZlY3QoYXVkaW9JRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuaBouWkjemfs+aViCAqL1xyXG4gICAgcHVibGljIHJlc3VtZUVmZmVjdCgpIHtcclxuICAgICAgICBpZiAoIVBsYXllckRhdGEuaW5zLmlzUGxheUF1ZGlvKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyRWZmZWN0SWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUVmZmVjdCh0aGlzLmN1ckVmZmVjdElkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzdW1lRWZmZWN0QnlCdW5kbGVEYXRhKGF1ZGlvRGF0YTogQnVuZGxlRGF0YSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghUGxheWVyRGF0YS5pbnMuaXNQbGF5QXVkaW8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhdWRpb0lEID0gdGhpcy5nZXRTb3VuZElkKGF1ZGlvRGF0YSk7XHJcbiAgICAgICAgaWYgKGF1ZGlvSUQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWVFZmZlY3QoYXVkaW9JRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuaSreaUvumfs+mike+8jOiuvue9ruW8gOWni+avlOS+iyAqL1xyXG4gICAgcGxheUVmZmVjdFBybyhhdWRpb0RhdGE6IEJ1bmRsZURhdGEsIGlzbG9vcDogYm9vbGVhbiA9IGZhbHNlLCBjYjogKCkgPT4gdm9pZCA9IG51bGwsIHN0YXJ0UHJvOiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgaWYgKCFQbGF5ZXJEYXRhLmlucy5pc1BsYXlBdWRpbykge1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidW5kbGVOYW1lID0gYXVkaW9EYXRhLmJ1bmRsZTtcclxuICAgICAgICBsZXQgcGF0aCA9IGF1ZGlvRGF0YS51cmxcclxuICAgICAgICBBYk1hbmFnZXIubG9hZEJ1bmRsZVJlcyhidW5kbGVOYW1lLCBwYXRoLCBjYy5BdWRpb0NsaXApLnRoZW4oKGNsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKCFVdGlsLmlzVmFsaWQodGhpcy5ub2RlKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCBhdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBpc2xvb3ApO1xyXG4gICAgICAgICAgICBsZXQgZHVyID0gY2MuYXVkaW9FbmdpbmUuZ2V0RHVyYXRpb24oYXVkaW9JRCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEN1cnJlbnRUaW1lKGF1ZGlvSUQsIHN0YXJ0UHJvICogZHVyKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJFZmZlY3RJZCA9IGF1ZGlvSUQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEVmZmVjdEJ5QnVuZGxlRGF0YShhdWRpb0RhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZFNvdW5kSWQoYXVkaW9EYXRhLCBhdWRpb0lEKTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soYXVkaW9JRCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsU291bmRJZChhdWRpb0RhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIpO1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7pn7PpopFcclxuICAgICAqL1xyXG4gICAgcGxheUF1ZGlvKGF1ZGlvRGF0YTogQnVuZGxlRGF0YSwgaXNsb29wOiBib29sZWFuID0gZmFsc2UsIGNiOiAoKSA9PiB2b2lkID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghUGxheWVyRGF0YS5pbnMuaXNQbGF5QXVkaW8pIHtcclxuICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLndhcm4oXCJwbGF5QXVkaW8gXCIsIGF1ZGlvRGF0YSk7XHJcbiAgICAgICAgbGV0IGJ1bmRsZU5hbWUgPSBhdWRpb0RhdGEuYnVuZGxlO1xyXG4gICAgICAgIGxldCBwYXRoID0gYXVkaW9EYXRhLnVybDtcclxuICAgICAgICBBYk1hbmFnZXIubG9hZEJ1bmRsZVJlcyhidW5kbGVOYW1lLCBwYXRoLCBjYy5BdWRpb0NsaXApLnRoZW4oKGNsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKCFVdGlsLmlzVmFsaWQodGhpcy5ub2RlKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAoY2xpcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoY2xpcCwgaXNsb29wLCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyQXVkaW9JZCA9IGF1ZGlvSUQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BBdWRpb0J5QnVuZGxlRGF0YShhdWRpb0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTb3VuZElkKGF1ZGlvRGF0YSwgYXVkaW9JRCk7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayhhdWRpb0lELCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbFNvdW5kSWQoYXVkaW9EYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLmkq3mlL7pn7PpopFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0b3BBdWRpbygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJBdWRpb0lkID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuY3VyQXVkaW9JZCk7XHJcbiAgICAgICAgdGhpcy5jdXJBdWRpb0lkID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5kZWxTb3VuZElkQnlJZCh0aGlzLmN1ckF1ZGlvSWQpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BBdWRpb0J5QnVuZGxlRGF0YShhdWRpb0RhdGE6IEJ1bmRsZURhdGEpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBhdWRpb0lEID0gdGhpcy5nZXRTb3VuZElkKGF1ZGlvRGF0YSk7XHJcbiAgICAgICAgaWYgKGF1ZGlvSUQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKGF1ZGlvSUQpO1xyXG4gICAgICAgICAgICB0aGlzLmRlbFNvdW5kSWQoYXVkaW9EYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhdXNlQXVkaW8oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VyQXVkaW9JZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UodGhpcy5jdXJBdWRpb0lkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGF1c2VBdWRpb0J5QnVuZGxlRGF0YShhdWRpb0RhdGE6IEJ1bmRsZURhdGEpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBhdWRpb0lEID0gdGhpcy5nZXRTb3VuZElkKGF1ZGlvRGF0YSk7XHJcbiAgICAgICAgaWYgKGF1ZGlvSUQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZShhdWRpb0lEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc3VtZUF1ZGlvKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1ckF1ZGlvSWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZSh0aGlzLmN1ckF1ZGlvSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXN1bWVBdWRpb0J5QnVuZGxlRGF0YShhdWRpb0RhdGE6IEJ1bmRsZURhdGEpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBhdWRpb0lEID0gdGhpcy5nZXRTb3VuZElkKGF1ZGlvRGF0YSk7XHJcbiAgICAgICAgaWYgKGF1ZGlvSUQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUoYXVkaW9JRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCa6L+HYXVkaW9Tb3VyY2Xmkq3mlL7pn7PpopFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBsYXlBdWRpb0J5U291cmNlKGF1ZGlvRGF0YTogQnVuZGxlRGF0YSwgaXNsb29wOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYXVkaW9Tb3VyY2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiYXVkaW9Tb3VyY2UgaXMgZW1wdHlcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFQbGF5ZXJEYXRhLmlucy5pc1BsYXlBdWRpbykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidW5kbGVOYW1lID0gYXVkaW9EYXRhLmJ1bmRsZTtcclxuICAgICAgICBsZXQgcGF0aCA9IGF1ZGlvRGF0YS51cmw7XHJcblxyXG4gICAgICAgIEFiTWFuYWdlci5sb2FkQnVuZGxlUmVzKGJ1bmRsZU5hbWUsIHBhdGgsIGNjLkF1ZGlvQ2xpcCkudGhlbigoY2xpcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIVV0aWwuaXNWYWxpZCh0aGlzLm5vZGUpKSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChjbGlwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BBdWRpb1NvdXJjZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5jbGlwID0gY2xpcDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UubG9vcCA9IGlzbG9vcDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcEF1ZGlvU291cmNlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hdWRpb1NvdXJjZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmF1ZGlvU291cmNlLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvU291cmNlLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhdXNlQXVkaW9Tb3VyY2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmF1ZGlvU291cmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYXVkaW9Tb3VyY2UuaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc3VtZUF1ZGlvU291cmNlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hdWRpb1NvdXJjZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UucmVzdW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BBbGxTb3VuZCgpIHtcclxuICAgICAgICB0aGlzLnN0b3BBbGxFZmZlY3QoKTtcclxuICAgICAgICB0aGlzLnN0b3BBdWRpbygpO1xyXG4gICAgICAgIHRoaXMuc3RvcEF1ZGlvU291cmNlKCk7XHJcbiAgICAgICAgdGhpcy5zdG9wQmdtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhdXNlQWxsU291bmQoKSB7XHJcbiAgICAgICAgdGhpcy5wYXVzZUVmZmVjdCgpO1xyXG4gICAgICAgIHRoaXMucGF1c2VBdWRpbygpO1xyXG4gICAgICAgIHRoaXMucGF1c2VCZ20oKTtcclxuICAgICAgICB0aGlzLnBhdXNlQXVkaW9Tb3VyY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzdW1lQWxsU291bmQoKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bWVFZmZlY3QoKTtcclxuICAgICAgICB0aGlzLnJlc3VtZUF1ZGlvKCk7XHJcbiAgICAgICAgdGhpcy5yZXN1bWVCZ20oKTtcclxuICAgICAgICB0aGlzLnJlc3VtZUF1ZGlvU291cmNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRTb3VuZElkKGF1ZGlvRGF0YTogQnVuZGxlRGF0YSwgYXVkaW9JZCkge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGF1ZGlvRGF0YS5idW5kbGUgKyBhdWRpb0RhdGEudXJsO1xyXG4gICAgICAgIHRoaXMuc291bmRJZHMuc2V0KGtleSwgYXVkaW9JZCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGhhc1NvdW5kSWQoYXVkaW9EYXRhOiBCdW5kbGVEYXRhKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gYXVkaW9EYXRhLmJ1bmRsZSArIGF1ZGlvRGF0YS51cmw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291bmRJZHMuaGFzKGtleSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRlbFNvdW5kSWQoYXVkaW9EYXRhOiBCdW5kbGVEYXRhKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gYXVkaW9EYXRhLmJ1bmRsZSArIGF1ZGlvRGF0YS51cmw7XHJcbiAgICAgICAgdGhpcy5zb3VuZElkcy5kZWxldGUoa2V5KTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0U291bmRJZChhdWRpb0RhdGE6IEJ1bmRsZURhdGEpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBhdWRpb0RhdGEuYnVuZGxlICsgYXVkaW9EYXRhLnVybDtcclxuICAgICAgICByZXR1cm4gdGhpcy5zb3VuZElkcy5nZXQoa2V5KTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZGVsU291bmRJZEJ5SWQoYXVkaW9JRCkge1xyXG4gICAgICAgIHRoaXMuc291bmRJZHMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYXVkaW9JRCA9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VuZElkcy5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIl19