
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/AppContext.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcQXBwQ29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxtREFBa0Q7QUFDbEQsbUVBQThEO0FBQzlELG1EQUFrRDtBQUNsRCwyQ0FBMEM7QUFDMUMseUNBQXdDO0FBQ3hDLCtDQUE4QztBQUM5Qyw2Q0FBd0M7QUFFeEMseUNBQXdDO0FBR2xDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBVTVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBMEpDO1FBdkpHLGFBQU8sR0FBVyxPQUFPLENBQUM7UUFHMUIsZ0JBQVUsR0FBdUIsSUFBSSxDQUFDO1FBR3RDLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRXRCLGVBQVMsR0FBYSxDQUFDLHVCQUFVLENBQUMsSUFBSSxFQUFFLHVCQUFVLENBQUMsTUFBTSxFQUFFLHVCQUFVLENBQUMsTUFBTSxFQUFFLHVCQUFVLENBQUMsS0FBSyxFQUFFLHVCQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkgsa0JBQVksR0FBaUIsRUFBRSxDQUFDO1FBRWhDLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFvSHRCLGFBQU8sR0FBRyxFQUFFLENBQUM7O0lBdUJ6QixDQUFDO0lBeklhLDJCQUFNLEdBQWhCO1FBQ0ksTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEMsbURBQW1EO1FBQ25ELDBCQUEwQjtRQUMxQixtQ0FBbUM7UUFFbkMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FB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QixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUNoRDthQUFNO1lBQ0gsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2IsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3pDLEtBQUssSUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO2dCQUN0QixJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDOUIsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDTiw0QkFBNEI7b0JBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7aUJBQ3hCO2FBQ0o7WUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBQ3RDO0lBQ0wsQ0FBQztJQXRKRDtRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQzsrQ0FDUDtJQUcxQjtRQURDLFFBQVEsQ0FBQyw0QkFBa0IsQ0FBQztrREFDUztJQUd0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNZO0lBVGIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQTBKOUI7SUFBRCxpQkFBQztDQTFKRCxBQTBKQyxDQTFKdUMsRUFBRSxDQUFDLFNBQVMsR0EwSm5EO2tCQTFKb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGFydFZpZXcgZnJvbSBcIi4uLy4uLy4uL3N0YXJ0L3NjcmlwdC9TdGFydFZpZXdcIjtcclxuaW1wb3J0IHsgQnVuZGxlRGF0YSB9IGZyb20gXCIuLi9jb21tb24vQnVuZGxlRGF0YVwiO1xyXG5pbXBvcnQgeyBCdW5kbGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9CdW5kbGVOYW1lXCI7XHJcbmltcG9ydCBMb2FkaW5nUHJvZ3Jlc3NDb2wgZnJvbSBcIi4uL2NvbW1vbi9Mb2FkaW5nUHJvZ3Jlc3NDb2xcIjtcclxuaW1wb3J0IHsgUGxheWVyRGF0YSB9IGZyb20gXCIuLi9jb21tb24vUGxheWVyRGF0YVwiO1xyXG5pbXBvcnQgeyBVaVBhdGggfSBmcm9tIFwiLi4vY29tbW9uL1VpUGF0aFwiO1xyXG5pbXBvcnQgeyBBYk1hbmFnZXIgfSBmcm9tIFwiLi9BYk1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgU3RvcnlNYW5hZ2VyIGZyb20gXCIuL1N0b3J5TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tIFwiLi9VSU1hbmFnZXJcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICAgICAgYXBwQ29udGV4dDogQXBwQ29udGV4dDtcclxuICAgIH1cclxuICAgIGV4cG9ydCBsZXQgYXBwQ29udGV4dDogQXBwQ29udGV4dDtcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQ29udGV4dCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi54mI5pys5Y+3XCIgfSlcclxuICAgIHZlcnNpb246IHN0cmluZyA9IFwiMC4wLjFcIjtcclxuXHJcbiAgICBAcHJvcGVydHkoTG9hZGluZ1Byb2dyZXNzQ29sKVxyXG4gICAgbG9hZGluZ0NvbDogTG9hZGluZ1Byb2dyZXNzQ29sID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGZseUNhbWVyYU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbG9hZExpc3QxOiBzdHJpbmdbXSA9IFtCdW5kbGVOYW1lLkZvbnQsIEJ1bmRsZU5hbWUuQ29uZmlnLCBCdW5kbGVOYW1lLkFzc2V0cywgQnVuZGxlTmFtZS5TdGFydCwgQnVuZGxlTmFtZS5Db21tb25dO1xyXG5cclxuICAgIHByaXZhdGUgcHJlbG9hZGxpc3QxOiBCdW5kbGVEYXRhW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGxvYWRUaW1lcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5hcHBDb250ZXh0ID0gdGhpcztcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICAvLyB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICAvLyBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIG1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdFNoaWZ0RXZlbnQoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLmk43kvZzns7vnu586XCIsIGNjLnN5cy5vcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJERUJVRzpcIiwgQ0NfREVCVUcpO1xyXG4gICAgICAgIGlmICghQ0NfREVCVUcpIHsvL+S4jeaYr0RlYnVn5YyF5LiN55So6L6T5Ye6bG9nXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nID0gKCkgPT4geyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd3gub25NZW1vcnlXYXJuaW5nKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ+WGheWtmOWRiuitpiEgb25NZW1vcnlXYXJuaW5nUmVjZWl2ZScpO1xyXG4gICAgICAgICAgICAgICAgd3gudHJpZ2dlckdDKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZUluaXQoKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdDb2wubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRyaWdnZXJHYygpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB3eC50cmlnZ2VyR0MoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdhbWVJbml0KCkge1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyR2MoKTtcclxuICAgICAgICAgICAgUGxheWVyRGF0YS5pbnMuc2F2ZURhdGEoKTtcclxuICAgICAgICB9LCA2MDAwMClcclxuICAgICAgICB0aGlzLmxvYWRpbmdDb2wuc3RhcnRQcm9ncmVzc0FuaW0oKTtcclxuICAgICAgICB0aGlzLmZseUNhbWVyYU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkxvYWRSZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0U2hpZnRFdmVudCgpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLmlzQnJvd3Nlcikge1xyXG4gICAgICAgICAgICBjYy5nYW1lLm9mZihjYy5nYW1lLkVWRU5UX1NIT1cpO1xyXG4gICAgICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfU0hPVywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5jYW52YXMuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVNob3dFdmVudCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2MuZ2FtZS5vZmYoY2MuZ2FtZS5FVkVOVF9ISURFKTtcclxuICAgICAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX0hJREUsIHRoaXMuZ2FtZUhpZGVFdmVudC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd3gub2ZmU2hvdyh0aGlzLmdhbWVTaG93RXZlbnQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHd4Lm9mZkhpZGUodGhpcy5nYW1lSGlkZUV2ZW50LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB3eC5vblNob3codGhpcy5nYW1lU2hvd0V2ZW50LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB3eC5vbkhpZGUodGhpcy5nYW1lSGlkZUV2ZW50LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdhbWVIaWRlRXZlbnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NjLmdhbWUuRVZFTlRfSElERScpO1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnMucGF1c2VBbGxTb3VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2FtZVNob3dFdmVudCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2MuZ2FtZS5FVkVOVF9TSE9XJylcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zLnJlc3VtZUFsbFNvdW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovb3otYTmupBcclxuICAgICAqL1xyXG4gICAgYXN5bmMgb25Mb2FkUmVzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkVGltZXIgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGF3YWl0IEFiTWFuYWdlci5sb2FkU3ViUGFja2FnZSh0aGlzLmxvYWRMaXN0MSk7XHJcbiAgICAgICAgYXdhaXQgRGF0YU1hbmFnZXIuaW5zLmluaXQoKTtcclxuICAgICAgICBQbGF5ZXJEYXRhLmlucy5pbml0RGF0YSgpO1xyXG4gICAgICAgIC8vIGF3YWl0IEFiTWFuYWdlci5wcmVsb2FkQXNzZXRzKHRoaXMucHJlbG9hZGxpc3QxLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi56ys5LiA5q2l6ICX5pe2IO+8miBcIiwgRGF0ZS5ub3coKSAtIHRoaXMubG9hZFRpbWVyKTtcclxuICAgICAgICB0aGlzLmxvYWRUaW1lciA9IERhdGUubm93KCk7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmlucy5vcGVuVmlldyhVaVBhdGguU3RhcnRWaWV3KS50aGVuKChtYWluOiBTdGFydFZpZXcpID0+IHtcclxuICAgICAgICAgICAgbWFpbi5pbml0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvU3RhcnRCb2FyZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgQWJNYW5hZ2VyLnByZWxvYWRBc3NldHModGhpcy5wcmVsb2FkbGlzdDEsIGNjLlByZWZhYik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0b1N0YXJ0Qm9hcmQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nQ29sLmZpbmlzaFByb2dyZXNzKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ0NvbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJlbG9hZEFzc2V0cygpIHtcclxuICAgICAgICBBYk1hbmFnZXIucHJlbG9hZEJ1bmRsZURpcihCdW5kbGVOYW1lLkFzc2V0cywgXCJhdWRpb3NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgIDlh7rmuLjmiI9cclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4aXRHYW1lKCkge1xyXG4gICAgICAgIFBsYXllckRhdGEuaW5zLnNhdmVEYXRhKCk7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd3guZXhpdE1pbmlQcm9ncmFtKHt9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5nYW1lLmVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhckRhdGFDbGljaygpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsYXN0T2JqID0ge307XHJcbiAgICBjb250cmFzdEFzc2V0c01hcCgpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJjYy5hc3NldE1hbmFnZXIuYXNzZXRzID0gXCIsIGNjLmFzc2V0TWFuYWdlci5hc3NldHMpXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMubGFzdE9iaikubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgbGV0IG9iaiA9IGNjLmFzc2V0TWFuYWdlci5hc3NldHMuX21hcDtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RPYmpba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcInRoaXMubGFzdE9iaiA9IFwiLCB0aGlzLmxhc3RPYmopXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgbmV3T2JqID0gY2MuYXNzZXRNYW5hZ2VyLmFzc2V0cy5fbWFwO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXdPYmopIHtcclxuICAgICAgICAgICAgICAgIGxldCBoYXMgPSBrZXkgaW4gdGhpcy5sYXN0T2JqO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoYXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdPYmpba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gobmV3T2JqW2tleV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXN0T2JqID0ge307XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIm5ld09ialtrZXldID0gXCIsIGFycilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19