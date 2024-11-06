"use strict";
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