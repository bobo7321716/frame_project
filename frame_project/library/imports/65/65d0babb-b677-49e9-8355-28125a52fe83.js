"use strict";
cc._RF.push(module, '65d0bq7tndJ6YNVKBJaUv6D', 'AppContext');
// homePage/script/manager/AppContext.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var BundleName_1 = require("../common/BundleName");
var LoadingProgressCol_1 = require("../common/LoadingProgressCol");
var PlayerData_1 = require("../common/PlayerData");
var UiPath_1 = require("../common/UiPath");
var AbManager_1 = require("./AbManager");
var AudioManager_1 = require("./AudioManager");
var DataManager_1 = require("./DataManager");
var UIManager_1 = require("./UIManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AppContext = /** @class */ (function (_super) {
    __extends(AppContext, _super);
    function AppContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.version = "0.0.1";
        _this.loadingCol = null;
        _this.flyCameraNode = null;
        _this.loadList1 = [BundleName_1.BundleName.Font, BundleName_1.BundleName.Config, BundleName_1.BundleName.Assets, BundleName_1.BundleName.Start, BundleName_1.BundleName.Common];
        _this.preloadlist1 = [];
        _this.loadTimer = 0;
        _this.lastObj = {};
        return _this;
    }
    AppContext.prototype.onLoad = function () {
        window.appContext = this;
        cc.game.addPersistRootNode(this.node);
        // var manager = cc.director.getCollisionManager();
        // manager.enabled = true;
        // manager.enabledDebugDraw = true;
        this.initShiftEvent();
        console.log("操作系统:", cc.sys.os);
        console.log("DEBUG:", CC_DEBUG);
        if (!CC_DEBUG) { //不是Debug包不用输出log
            // console.log = () => { };
        }
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.onMemoryWarning(function () {
                // console.error('内存告警! onMemoryWarningReceive');
                wx.triggerGC();
            });
        }
        this.gameInit();
        this.loadingCol.node.active = true;
    };
    AppContext.prototype.triggerGc = function () {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.triggerGC();
        }
    };
    AppContext.prototype.gameInit = function () {
        var _this = this;
        setInterval(function () {
            _this.triggerGc();
            PlayerData_1.PlayerData.ins.saveData();
        }, 60000);
        this.loadingCol.startProgressAnim();
        this.flyCameraNode.active = false;
        this.onLoadRes();
    };
    AppContext.prototype.initShiftEvent = function () {
        var _this = this;
        if (cc.sys.isBrowser) {
            cc.game.off(cc.game.EVENT_SHOW);
            cc.game.on(cc.game.EVENT_SHOW, function () {
                cc.game.canvas.focus();
                _this.gameShowEvent();
            });
            cc.game.off(cc.game.EVENT_HIDE);
            cc.game.on(cc.game.EVENT_HIDE, this.gameHideEvent.bind(this));
        }
        else if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.offShow(this.gameShowEvent.bind(this));
            wx.offHide(this.gameHideEvent.bind(this));
            wx.onShow(this.gameShowEvent.bind(this));
            wx.onHide(this.gameHideEvent.bind(this));
        }
    };
    AppContext.prototype.gameHideEvent = function () {
        console.log('cc.game.EVENT_HIDE');
        AudioManager_1.AudioManager.ins.pauseAllSound();
    };
    AppContext.prototype.gameShowEvent = function () {
        console.log('cc.game.EVENT_SHOW');
        AudioManager_1.AudioManager.ins.resumeAllSound();
    };
    /**
     * 加载资源
     */
    AppContext.prototype.onLoadRes = function () {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadTimer = Date.now();
                        return [4 /*yield*/, AbManager_1.AbManager.loadSubPackage(this.loadList1)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, DataManager_1.default.ins.init()];
                    case 2:
                        _a.sent();
                        PlayerData_1.PlayerData.ins.initData();
                        // await AbManager.preloadAssets(this.preloadlist1, cc.Prefab);
                        console.log("第一步耗时 ： ", Date.now() - this.loadTimer);
                        this.loadTimer = Date.now();
                        UIManager_1.UIManager.ins.openView(UiPath_1.UiPath.StartView).then(function (main) {
                            main.init().then(function () {
                                _this.toStartBoard();
                            });
                            AbManager_1.AbManager.preloadAssets(_this.preloadlist1, cc.Prefab);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AppContext.prototype.toStartBoard = function () {
        var _this = this;
        this.loadingCol.finishProgress().then(function () {
            _this.loadingCol.node.active = false;
        });
    };
    AppContext.prototype.preloadAssets = function () {
        AbManager_1.AbManager.preloadBundleDir(BundleName_1.BundleName.Assets, "audios");
    };
    /**
     * 退出游戏
     */
    AppContext.prototype.exitGame = function () {
        PlayerData_1.PlayerData.ins.saveData();
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.exitMiniProgram({});
        }
        else {
            cc.game.end();
        }
    };
    AppContext.prototype.clearDataClick = function () {
        cc.sys.localStorage.clear();
    };
    AppContext.prototype.contrastAssetsMap = function () {
        console.warn("cc.assetManager.assets = ", cc.assetManager.assets);
        if (Object.keys(this.lastObj).length <= 0) {
            var obj = cc.assetManager.assets._map;
            for (var key in obj) {
                this.lastObj[key] = obj[key];
            }
            console.warn("this.lastObj = ", this.lastObj);
        }
        else {
            var arr = [];
            var newObj = cc.assetManager.assets._map;
            for (var key in newObj) {
                var has = key in this.lastObj;
                if (!has) {
                    // console.log(newObj[key]);
                    arr.push(newObj[key]);
                }
            }
            this.lastObj = {};
            console.warn("newObj[key] = ", arr);
        }
    };
    __decorate([
        property({ displayName: "版本号" })
    ], AppContext.prototype, "version", void 0);
    __decorate([
        property(LoadingProgressCol_1.default)
    ], AppContext.prototype, "loadingCol", void 0);
    __decorate([
        property(cc.Node)
    ], AppContext.prototype, "flyCameraNode", void 0);
    AppContext = __decorate([
        ccclass
    ], AppContext);
    return AppContext;
}(cc.Component));
exports.default = AppContext;

cc._RF.pop();