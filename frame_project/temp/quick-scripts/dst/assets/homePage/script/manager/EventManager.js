
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/manager/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcbWFuYWdlclxcRXZlbnRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBQUE7SUErQkEsQ0FBQztJQTdCRzs7Ozs7T0FLRztJQUNXLHdCQUFXLEdBQXpCLFVBQTBCLElBQVksRUFBRSxRQUFhLEVBQUUsTUFBVztRQUM5RCxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVywyQkFBYyxHQUE1QixVQUE2QixJQUFZLEVBQUUsUUFBYyxFQUFFLE1BQVk7UUFDbkUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNXLHlCQUFZLEdBQTFCLFVBQTJCLElBQVksRUFBRSxHQUFlO1FBQWYsb0JBQUEsRUFBQSxVQUFlO1FBQ3BELEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBO0FBL0JZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBFdmVudE1hbmFnZXIge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5YWo5bGA5LqL5Lu255uR5ZCsXHJcbiAgICAgKiBAcGFyYW0gdHlwZSDkuovku7bnsbvlnovvvIxzdHJpbmdcclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciDkuovku7bop6blj5HlkI7nmoTlm57osIPmlrnms5VcclxuICAgICAqIEBwYXJhbSB0YXJnZXQg5oyH5a6a5Zue6LCD5pa55rOV5Lit55qEdGhpc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFkZExpc3RlbmVyKHR5cGU6IHN0cmluZywgbGlzdGVuZXI6IGFueSwgdGFyZ2V0OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbih0eXBlLCBsaXN0ZW5lciwgdGFyZ2V0LCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnp7vpmaTlhajlsYDkuovku7bnm5HlkKxcclxuICAgICAqIEBwYXJhbSB0eXBlIOS6i+S7tuexu+Wei++8jHN0cmluZ1xyXG4gICAgICogQHBhcmFtIGxpc3RlbmVyIOS6i+S7tuinpuWPkeWQjueahOWbnuiwg+aWueazlVxyXG4gICAgICogQHBhcmFtIHRhcmdldCDmjIflrprlm57osIPmlrnms5XkuK3nmoR0aGlzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVtb3ZlTGlzdGVuZXIodHlwZTogc3RyaW5nLCBsaXN0ZW5lcj86IGFueSwgdGFyZ2V0PzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKHR5cGUsIGxpc3RlbmVyLCB0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Kem5Y+R5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gdHlwZSDkuovku7bnsbvlnovvvIxzdHJpbmdcclxuICAgICAqIEBwYXJhbSBtc2cg6ZyA6KaB5Lyg5YWl55qE5Y+C5pWw77yM5Lyg5YWl5ZCO5Zyo5Zue6LCDbGlzdGVuZXLkuK3lj6/ku6Xojrflj5bliLDlj4LmlbBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB0cmlnZ2VyRXZlbnQodHlwZTogc3RyaW5nLCBtc2c6IGFueSA9IG51bGwpOiB2b2lkIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5lbWl0KHR5cGUsIG1zZyk7XHJcbiAgICB9XHJcblxyXG59Il19