"use strict";
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