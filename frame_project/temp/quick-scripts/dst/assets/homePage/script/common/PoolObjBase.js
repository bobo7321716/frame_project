
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/PoolObjBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37f1c9DXDJApIwGD9dBlcfr', 'PoolObjBase');
// homePage/script/common/PoolObjBase.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var MyPool_1 = require("./MyPool");
var PoolObjBase = /** @class */ (function (_super) {
    __extends(PoolObjBase, _super);
    function PoolObjBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PoolObjBase.prototype.destroySelf = function () {
        MyPool_1.default.putObj(this.node);
    };
    return PoolObjBase;
}(cc.Component));
exports.default = PoolObjBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxQb29sT2JqQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFFOUI7SUFBeUMsK0JBQVk7SUFBckQ7O0lBS0EsQ0FBQztJQUhHLGlDQUFXLEdBQVg7UUFDSSxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FMQSxBQUtDLENBTHdDLEVBQUUsQ0FBQyxTQUFTLEdBS3BEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE15UG9vbCBmcm9tIFwiLi9NeVBvb2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9vbE9iakJhc2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgZGVzdHJveVNlbGYoKSB7XG4gICAgICAgIE15UG9vbC5wdXRPYmoodGhpcy5ub2RlKTtcbiAgICB9XG59XG4iXX0=