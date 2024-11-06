import StartView from "../../../start/script/StartView";
import { BundleData } from "../common/BundleData";
import { BundleName } from "../common/BundleName";
import LoadingProgressCol from "../common/LoadingProgressCol";
import { PlayerData } from "../common/PlayerData";
import { UiPath } from "../common/UiPath";
import { AbManager } from "./AbManager";
import { AudioManager } from "./AudioManager";
import DataManager from "./DataManager";
import StoryManager from "./StoryManager";
import { UIManager } from "./UIManager";


const { ccclass, property } = cc._decorator;

declare global {
    interface Window {
        appContext: AppContext;
    }
    export let appContext: AppContext;
}

@ccclass
export default class AppContext extends cc.Component {

    @property({ displayName: "版本号" })
    version: string = "0.0.1";

    @property(LoadingProgressCol)
    loadingCol: LoadingProgressCol = null;

    @property(cc.Node)
    flyCameraNode: cc.Node = null;

    private loadList1: string[] = [BundleName.Font, BundleName.Config, BundleName.Assets, BundleName.Start, BundleName.Common];

    private preloadlist1: BundleData[] = [];

    private loadTimer: number = 0;

    protected onLoad(): void {
        window.appContext = this;
        cc.game.addPersistRootNode(this.node);

        // var manager = cc.director.getCollisionManager();
        // manager.enabled = true;
        // manager.enabledDebugDraw = true;

        this.initShiftEvent();

        console.log("操作系统:", cc.sys.os);
        console.log("DEBUG:", CC_DEBUG);
        if (!CC_DEBUG) {//不是Debug包不用输出log
            // console.log = () => { };
        }

        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.onMemoryWarning(function () {
                // console.error('内存告警! onMemoryWarningReceive');
                wx.triggerGC();
            })
        }
        this.gameInit();
        this.loadingCol.node.active = true;
    }

    triggerGc() {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.triggerGC();
        }
    }

    public gameInit() {
        setInterval(() => {
            this.triggerGc();
            PlayerData.ins.saveData();
        }, 60000)
        this.loadingCol.startProgressAnim();
        this.flyCameraNode.active = false;
        this.onLoadRes();
    }

    initShiftEvent() {
        if (cc.sys.isBrowser) {
            cc.game.off(cc.game.EVENT_SHOW);
            cc.game.on(cc.game.EVENT_SHOW, () => {
                cc.game.canvas.focus();
                this.gameShowEvent();
            });
            cc.game.off(cc.game.EVENT_HIDE);
            cc.game.on(cc.game.EVENT_HIDE, this.gameHideEvent.bind(this));
        } else if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.offShow(this.gameShowEvent.bind(this));
            wx.offHide(this.gameHideEvent.bind(this));
            wx.onShow(this.gameShowEvent.bind(this));
            wx.onHide(this.gameHideEvent.bind(this));
        }
    }

    private gameHideEvent() {
        console.log('cc.game.EVENT_HIDE');
        AudioManager.ins.pauseAllSound();
    }

    private gameShowEvent() {
        console.log('cc.game.EVENT_SHOW')
        AudioManager.ins.resumeAllSound();
    }

    /**
     * 加载资源
     */
    async onLoadRes(): Promise<any> {
        this.loadTimer = Date.now();
        await AbManager.loadSubPackage(this.loadList1);
        await DataManager.ins.init();
        PlayerData.ins.initData();
        // await AbManager.preloadAssets(this.preloadlist1, cc.Prefab);
        console.log("第一步耗时 ： ", Date.now() - this.loadTimer);
        this.loadTimer = Date.now();
        UIManager.ins.openView(UiPath.StartView).then((main: StartView) => {
            main.init().then(() => {
                this.toStartBoard();
            });
            AbManager.preloadAssets(this.preloadlist1, cc.Prefab);
        })
    }

    toStartBoard() {
        this.loadingCol.finishProgress().then(() => {
            this.loadingCol.node.active = false;
        })
    }

    preloadAssets() {
        AbManager.preloadBundleDir(BundleName.Assets, "audios");
    }

    /**
     * 退出游戏
     */
    public exitGame() {
        PlayerData.ins.saveData();
        if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            wx.exitMiniProgram({});
        } else {
            cc.game.end();
        }
    }

    clearDataClick() {
        cc.sys.localStorage.clear();
    }

    private lastObj = {};
    contrastAssetsMap() {
        console.warn("cc.assetManager.assets = ", cc.assetManager.assets)
        if (Object.keys(this.lastObj).length <= 0) {
            let obj = cc.assetManager.assets._map;
            for (const key in obj) {
                this.lastObj[key] = obj[key];
            }
            console.warn("this.lastObj = ", this.lastObj)
        } else {
            let arr = [];
            let newObj = cc.assetManager.assets._map;
            for (const key in newObj) {
                let has = key in this.lastObj;
                if (!has) {
                    // console.log(newObj[key]);
                    arr.push(newObj[key])
                }
            }
            this.lastObj = {};
            console.warn("newObj[key] = ", arr)
        }
    }
}
