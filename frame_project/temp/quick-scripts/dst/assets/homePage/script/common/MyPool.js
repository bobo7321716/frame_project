
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/MyPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38885jjaV9AGrXyfh9I2It/', 'MyPool');
// homePage/script/common/MyPool.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbManager_1 = require("../manager/AbManager");
var AbRef_1 = require("./AbRef");
var MyPool = /** @class */ (function () {
    function MyPool() {
    }
    MyPool.getObj = function (pre) {
        if (!pre)
            return null;
        var pool = this.poolMap.get(pre._uuid);
        if (pool) {
            var node = pool.get();
            if (node && cc.isValid(node)) {
                return node;
            }
            else {
                return cc.instantiate(pre);
            }
        }
        else {
            this.poolMap.set(pre._uuid, new cc.NodePool());
            return cc.instantiate(pre);
        }
    };
    MyPool.putObj = function (node) {
        if (!node || !cc.isValid(node, true))
            return;
        if (node._prefab) {
            var uuid = node._prefab.asset._uuid;
            var pool = this.poolMap.get(uuid);
            if (pool) {
                if (node._prefab.asset.refCount <= 1) {
                    node._prefab.asset.addRef();
                }
                node.removeFromParent(false);
                pool.put(node);
            }
            else {
                node.walk(function (cNode) {
                    var abRef = cNode.getComponent(AbRef_1.default);
                    if (abRef)
                        abRef.decRef();
                }, null);
                AbManager_1.AbManager.decRef(uuid);
                node.removeFromParent(false);
                node.destroy();
            }
        }
        else {
            node.removeFromParent(false);
            node.destroy();
        }
    };
    MyPool.poolMap = new Map();
    return MyPool;
}());
exports.default = MyPool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxNeVBvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBaUQ7QUFDakQsaUNBQTRCO0FBRTVCO0lBQUE7SUE2Q0EsQ0FBQztJQXpDaUIsYUFBTSxHQUFwQixVQUFxQixHQUFjO1FBQy9CLElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0gsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUMvQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBRWEsYUFBTSxHQUFwQixVQUFxQixJQUFhO1FBQzlCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7WUFBRSxPQUFPO1FBQzdDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNwQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxJQUFJLElBQUksRUFBRTtnQkFDTixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO2lCQUMvQjtnQkFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQWM7b0JBQ3JCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsZUFBSyxDQUFDLENBQUM7b0JBQ3RDLElBQUksS0FBSzt3QkFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzlCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFDUixxQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEI7U0FDSjthQUFNO1lBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQjtJQUNMLENBQUM7SUExQ2MsY0FBTyxHQUE2QixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBMkNqRSxhQUFDO0NBN0NELEFBNkNDLElBQUE7a0JBN0NvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJNYW5hZ2VyIH0gZnJvbSBcIi4uL21hbmFnZXIvQWJNYW5hZ2VyXCI7XHJcbmltcG9ydCBBYlJlZiBmcm9tIFwiLi9BYlJlZlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlQb29sIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBwb29sTWFwOiBNYXA8c3RyaW5nLCBjYy5Ob2RlUG9vbD4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRPYmoocHJlOiBjYy5QcmVmYWIpOiBjYy5Ob2RlIHtcclxuICAgICAgICBpZiAoIXByZSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgbGV0IHBvb2wgPSB0aGlzLnBvb2xNYXAuZ2V0KHByZS5fdXVpZCk7XHJcbiAgICAgICAgaWYgKHBvb2wpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBwb29sLmdldCgpO1xyXG4gICAgICAgICAgICBpZiAobm9kZSAmJiBjYy5pc1ZhbGlkKG5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjYy5pbnN0YW50aWF0ZShwcmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wb29sTWFwLnNldChwcmUuX3V1aWQsIG5ldyBjYy5Ob2RlUG9vbCgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNjLmluc3RhbnRpYXRlKHByZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcHV0T2JqKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoIW5vZGUgfHwgIWNjLmlzVmFsaWQobm9kZSwgdHJ1ZSkpIHJldHVybjtcclxuICAgICAgICBpZiAobm9kZS5fcHJlZmFiKSB7XHJcbiAgICAgICAgICAgIGxldCB1dWlkID0gbm9kZS5fcHJlZmFiLmFzc2V0Ll91dWlkO1xyXG4gICAgICAgICAgICBsZXQgcG9vbCA9IHRoaXMucG9vbE1hcC5nZXQodXVpZCk7XHJcbiAgICAgICAgICAgIGlmIChwb29sKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5fcHJlZmFiLmFzc2V0LnJlZkNvdW50IDw9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLl9wcmVmYWIuYXNzZXQuYWRkUmVmKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUZyb21QYXJlbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcG9vbC5wdXQobm9kZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLndhbGsoKGNOb2RlOiBjYy5Ob2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFiUmVmID0gY05vZGUuZ2V0Q29tcG9uZW50KEFiUmVmKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWJSZWYpIGFiUmVmLmRlY1JlZigpO1xyXG4gICAgICAgICAgICAgICAgfSwgbnVsbClcclxuICAgICAgICAgICAgICAgIEFiTWFuYWdlci5kZWNSZWYodXVpZCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUZyb21QYXJlbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBub2RlLnJlbW92ZUZyb21QYXJlbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19