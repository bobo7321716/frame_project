
(function () {
var scripts = [{"deps":{"./assets/loading/Loading":2,"./assets/start/script/StartView":1,"./assets/homePage/script/common/BgCol":3,"./assets/homePage/script/common/BoundingBox":9,"./assets/homePage/script/common/BtnClickAudio":8,"./assets/homePage/script/common/BtnCol":10,"./assets/homePage/script/common/BundleData":11,"./assets/homePage/script/common/BundleName":13,"./assets/homePage/script/common/CommonTip":12,"./assets/homePage/script/common/GamingData":15,"./assets/homePage/script/common/Global":14,"./assets/homePage/script/common/HttpManager":16,"./assets/homePage/script/common/LoadingProgressCol":17,"./assets/homePage/script/common/MyPool":18,"./assets/homePage/script/common/MyToggle":19,"./assets/homePage/script/common/MyToggleBtn":20,"./assets/homePage/script/common/MyToggleItem":22,"./assets/homePage/script/common/ParticleSystem":21,"./assets/homePage/script/common/PlayerData":23,"./assets/homePage/script/common/PoolObjBase":26,"./assets/homePage/script/common/ProgressAnimCol":24,"./assets/homePage/script/common/ProgressCol":28,"./assets/homePage/script/common/PromptView":27,"./assets/homePage/script/common/RedPointTag":30,"./assets/homePage/script/common/ScreenShot":25,"./assets/homePage/script/common/SeqFrameCol":29,"./assets/homePage/script/common/SoundPath":33,"./assets/homePage/script/common/UiBase":34,"./assets/homePage/script/common/UiPath":32,"./assets/homePage/script/common/Util":37,"./assets/homePage/script/common/AbRef":35,"./assets/homePage/script/config/LevelConfig":4,"./assets/homePage/script/config/Config":31,"./assets/homePage/script/manager/AppContext":5,"./assets/homePage/script/manager/AudioManager":41,"./assets/homePage/script/manager/BaseData":36,"./assets/homePage/script/manager/DataManager":40,"./assets/homePage/script/manager/EventManager":43,"./assets/homePage/script/manager/RedPointManager":38,"./assets/homePage/script/manager/SceneEventManager":39,"./assets/homePage/script/manager/StoryManager":42,"./assets/homePage/script/manager/TaskManager":44,"./assets/homePage/script/manager/TimeManager":47,"./assets/homePage/script/manager/TipManager":45,"./assets/homePage/script/manager/UIManager":50,"./assets/homePage/script/manager/AbManager":49,"./assets/homePage/script/scrollview/RecycleScrollV":48,"./assets/homePage/script/scrollview/RecycleScrollH":7,"./assets/homePage/script/tool/Bezier":6,"./assets/homePage/script/tool/CheckTouchMoveDir":46,"./assets/homePage/script/tool/FloatAnim":52,"./assets/homePage/script/tool/OpacityAnim":51,"./assets/homePage/script/tool/ScaleAnim":54,"./assets/homePage/script/tool/AwayAnim":56,"./assets/homePage/script/common/AnimCol":55,"./assets/homePage/script/common/AnimationCol":53},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../homePage/script/common/UiBase":34},"path":"preview-scripts/assets/start/script/StartView.js"},{"deps":{},"path":"preview-scripts/assets/loading/Loading.js"},{"deps":{"./Util":37},"path":"preview-scripts/assets/homePage/script/common/BgCol.js"},{"deps":{"../manager/BaseData":36},"path":"preview-scripts/assets/homePage/script/config/LevelConfig.js"},{"deps":{"./AbManager":49,"./AudioManager":41,"./DataManager":40,"./UIManager":50,"../common/LoadingProgressCol":17,"../common/PlayerData":23,"../common/UiPath":32,"../common/BundleName":13},"path":"preview-scripts/assets/homePage/script/manager/AppContext.js"},{"deps":{"../common/GamingData":15,"../common/Util":37},"path":"preview-scripts/assets/homePage/script/tool/Bezier.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/scrollview/RecycleScrollH.js"},{"deps":{"../manager/AudioManager":41,"./SoundPath":33},"path":"preview-scripts/assets/homePage/script/common/BtnClickAudio.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/common/BoundingBox.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/common/BtnCol.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/common/BundleData.js"},{"deps":{"../manager/AbManager":49,"./BundleName":13,"./MyPool":18,"./Util":37},"path":"preview-scripts/assets/homePage/script/common/CommonTip.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/common/BundleName.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/common/Global.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/common/GamingData.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/common/HttpManager.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/common/LoadingProgressCol.js"},{"deps":{"../manager/AbManager":49,"./AbRef":35},"path":"preview-scripts/assets/homePage/script/common/MyPool.js"},{"deps":{"./MyPool":18,"./MyToggleBtn":20},"path":"preview-scripts/assets/homePage/script/common/MyToggle.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/common/MyToggleBtn.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/common/ParticleSystem.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/common/MyToggleItem.js"},{"deps":{"../config/LevelConfig":4,"../manager/DataManager":40,"../manager/EventManager":43,"./GamingData":15,"./Global":14,"./Util":37},"path":"preview-scripts/assets/homePage/script/common/PlayerData.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/common/ProgressAnimCol.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/common/ScreenShot.js"},{"deps":{"./MyPool":18},"path":"preview-scripts/assets/homePage/script/common/PoolObjBase.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/common/PromptView.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/common/ProgressCol.js"},{"deps":{"./MyPool":18,"./Util":37},"path":"preview-scripts/assets/homePage/script/common/SeqFrameCol.js"},{"deps":{"../manager/EventManager":43,"../manager/RedPointManager":38,"./Global":14,"./Util":37},"path":"preview-scripts/assets/homePage/script/common/RedPointTag.js"},{"deps":{"./LevelConfig":4},"path":"preview-scripts/assets/homePage/script/config/Config.js"},{"deps":{"./BundleData":11,"./BundleName":13},"path":"preview-scripts/assets/homePage/script/common/UiPath.js"},{"deps":{"./BundleData":11,"./BundleName":13},"path":"preview-scripts/assets/homePage/script/common/SoundPath.js"},{"deps":{"../manager/UIManager":50},"path":"preview-scripts/assets/homePage/script/common/UiBase.js"},{"deps":{"../manager/AbManager":49},"path":"preview-scripts/assets/homePage/script/common/AbRef.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/manager/BaseData.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/common/Util.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/manager/RedPointManager.js"},{"deps":{"./UIManager":50},"path":"preview-scripts/assets/homePage/script/manager/SceneEventManager.js"},{"deps":{"../common/BundleName":13,"../config/Config":31,"./AbManager":49},"path":"preview-scripts/assets/homePage/script/manager/DataManager.js"},{"deps":{"../common/PlayerData":23,"../common/SoundPath":33,"../common/Util":37,"./AbManager":49},"path":"preview-scripts/assets/homePage/script/manager/AudioManager.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/manager/StoryManager.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/manager/EventManager.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/manager/TaskManager.js"},{"deps":{"../common/CommonTip":12,"../common/MyPool":18},"path":"preview-scripts/assets/homePage/script/manager/TipManager.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/tool/CheckTouchMoveDir.js"},{"deps":{"../common/PlayerData":23},"path":"preview-scripts/assets/homePage/script/manager/TimeManager.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/scrollview/RecycleScrollV.js"},{"deps":{"./TipManager":45},"path":"preview-scripts/assets/homePage/script/manager/AbManager.js"},{"deps":{"../common/AbRef":35,"../common/AnimationCol":53,"../common/Global":14,"../common/MyPool":18,"../common/UiBase":34,"../common/Util":37,"../manager/AbManager":49,"../manager/EventManager":43,"../manager/SceneEventManager":39},"path":"preview-scripts/assets/homePage/script/manager/UIManager.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/tool/OpacityAnim.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/tool/FloatAnim.js"},{"deps":{"./MyPool":18},"path":"preview-scripts/assets/homePage/script/common/AnimationCol.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/tool/ScaleAnim.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/common/AnimCol.js"},{"deps":{},"path":"preview-scripts/assets/homePage/script/tool/AwayAnim.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    