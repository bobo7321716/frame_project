
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/homePage/script/common/AbRef');
require('./assets/homePage/script/common/AnimCol');
require('./assets/homePage/script/common/AnimationCol');
require('./assets/homePage/script/common/BgCol');
require('./assets/homePage/script/common/BoundingBox');
require('./assets/homePage/script/common/BtnClickAudio');
require('./assets/homePage/script/common/BtnCol');
require('./assets/homePage/script/common/BundleData');
require('./assets/homePage/script/common/BundleName');
require('./assets/homePage/script/common/CommonTip');
require('./assets/homePage/script/common/GamingData');
require('./assets/homePage/script/common/Global');
require('./assets/homePage/script/common/HttpManager');
require('./assets/homePage/script/common/LoadingProgressCol');
require('./assets/homePage/script/common/MyPool');
require('./assets/homePage/script/common/MyToggle');
require('./assets/homePage/script/common/MyToggleBtn');
require('./assets/homePage/script/common/MyToggleItem');
require('./assets/homePage/script/common/ParticleSystem');
require('./assets/homePage/script/common/PlayerData');
require('./assets/homePage/script/common/PoolObjBase');
require('./assets/homePage/script/common/ProgressAnimCol');
require('./assets/homePage/script/common/ProgressCol');
require('./assets/homePage/script/common/PromptView');
require('./assets/homePage/script/common/RedPointTag');
require('./assets/homePage/script/common/ScreenShot');
require('./assets/homePage/script/common/SeqFrameCol');
require('./assets/homePage/script/common/SoundPath');
require('./assets/homePage/script/common/UiBase');
require('./assets/homePage/script/common/UiPath');
require('./assets/homePage/script/common/Util');
require('./assets/homePage/script/config/Config');
require('./assets/homePage/script/config/LevelConfig');
require('./assets/homePage/script/manager/AbManager');
require('./assets/homePage/script/manager/AppContext');
require('./assets/homePage/script/manager/AudioManager');
require('./assets/homePage/script/manager/BaseData');
require('./assets/homePage/script/manager/DataManager');
require('./assets/homePage/script/manager/EventManager');
require('./assets/homePage/script/manager/RedPointManager');
require('./assets/homePage/script/manager/SceneEventManager');
require('./assets/homePage/script/manager/StoryManager');
require('./assets/homePage/script/manager/TaskManager');
require('./assets/homePage/script/manager/TimeManager');
require('./assets/homePage/script/manager/TipManager');
require('./assets/homePage/script/manager/UIManager');
require('./assets/homePage/script/scrollview/RecycleScrollH');
require('./assets/homePage/script/scrollview/RecycleScrollV');
require('./assets/homePage/script/tool/AwayAnim');
require('./assets/homePage/script/tool/Bezier');
require('./assets/homePage/script/tool/CheckTouchMoveDir');
require('./assets/homePage/script/tool/FloatAnim');
require('./assets/homePage/script/tool/OpacityAnim');
require('./assets/homePage/script/tool/ScaleAnim');
require('./assets/loading/Loading');
require('./assets/start/script/StartView');

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