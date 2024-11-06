"use strict";
cc._RF.push(module, '0ecd3rtbupN/YOfBJZUHsXD', 'EventManager');
// homePage/script/manager/EventManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventManager = void 0;
var EventManager = /** @class */ (function () {
    function EventManager() {
    }
    /**
     * 添加全局事件监听
     * @param type 事件类型，string
     * @param listener 事件触发后的回调方法
     * @param target 指定回调方法中的this
     */
    EventManager.addListener = function (type, listener, target) {
        cc.systemEvent.on(type, listener, target, false);
    };
    /**
     * 移除全局事件监听
     * @param type 事件类型，string
     * @param listener 事件触发后的回调方法
     * @param target 指定回调方法中的this
     */
    EventManager.removeListener = function (type, listener, target) {
        cc.systemEvent.off(type, listener, target);
    };
    /**
     * 触发事件
     * @param type 事件类型，string
     * @param msg 需要传入的参数，传入后在回调listener中可以获取到参数
     */
    EventManager.triggerEvent = function (type, msg) {
        if (msg === void 0) { msg = null; }
        cc.systemEvent.emit(type, msg);
    };
    return EventManager;
}());
exports.EventManager = EventManager;

cc._RF.pop();