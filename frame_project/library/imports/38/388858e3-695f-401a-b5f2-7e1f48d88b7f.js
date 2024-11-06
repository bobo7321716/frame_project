"use strict";
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