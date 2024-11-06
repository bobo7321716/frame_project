"use strict";
cc._RF.push(module, '96dc97PUK9CdIgARcV+U07y', 'LevelConfig');
// homePage/script/config/LevelConfig.ts

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
exports.LevelConfigMgr = void 0;
var BaseData_1 = require("../manager/BaseData");
var LevelConfig = /** @class */ (function () {
    function LevelConfig() {
    }
    return LevelConfig;
}());
exports.default = LevelConfig;
var LevelConfigMgr = /** @class */ (function (_super) {
    __extends(LevelConfigMgr, _super);
    function LevelConfigMgr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelConfigMgr.prototype.getMaxLvConfig = function () {
        return this._datas[this._datas.length - 1];
    };
    return LevelConfigMgr;
}(BaseData_1.default));
exports.LevelConfigMgr = LevelConfigMgr;

cc._RF.pop();