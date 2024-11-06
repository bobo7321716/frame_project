
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/homePage/script/common/Util.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7aebcxrU6VEXoANiS4gJpR6', 'Util');
// homePage/script/common/Util.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
var Util = /** @class */ (function () {
    function Util() {
    }
    /**
 * 将字符串转换为一维数组
 * @param str 目标字符串
 * @param sep 分隔符 默认为","
 */
    Util.convertStrToArr = function (str, sep) {
        if (sep === void 0) { sep = ","; }
        if (!str)
            return [];
        var arr = [];
        var subStrArr = str.split(sep);
        subStrArr.forEach(function (subStr) {
            if (Number(subStr) !== undefined) {
                arr.push(subStr);
            }
            else {
                arr.push(subStr);
            }
        });
        return arr;
    };
    Util.getWorldPosition = function (node) {
        if (!node) {
            return;
        }
        var parent = node.getParent();
        if (!parent) {
            return node.getPosition();
        }
        return parent.convertToWorldSpaceAR(node.getPosition());
    };
    Util.getWorldSize = function (node) {
        var size = node.getContentSize();
        size.height *= node.scale;
        size.width *= node.scale;
        var parent = node.getParent();
        while (parent) {
            size.height *= parent.scale;
            size.width *= parent.scale;
            parent = parent.getParent();
        }
        return size;
    };
    Util.setWorldSize = function (node, size) {
        node.setContentSize(size);
        size.height /= node.scale;
        size.width /= node.scale;
        var parent = node.getParent();
        while (parent) {
            node.width /= parent.scale;
            node.height /= parent.scale;
            parent = parent.getParent();
        }
    };
    Util.getWorldScale = function (node) {
        var scale = node.scale;
        var parent = node.getParent();
        while (parent) {
            scale *= parent.scale;
            parent = parent.getParent();
        }
        return scale;
    };
    Util.setWorldPosition = function (node, worldPos) {
        if (!node) {
            return;
        }
        if (!worldPos) {
            return;
        }
        var parent = node.getParent();
        if (!parent) {
            node.setPosition(worldPos);
            return;
        }
        var localPos = parent.convertToNodeSpaceAR(worldPos);
        node.setPosition(localPos);
    };
    Util.getWorldRotation = function (node) {
        var rot = node.rotation;
        var parent = node.getParent();
        while (parent) {
            rot += parent.rotation;
            parent = parent.getParent();
        }
        return rot;
    };
    Util.getWorldRotationWithRot = function (parent, localRot) {
        var rot = localRot;
        while (parent) {
            rot += parent.rotation;
            parent = parent.getParent();
        }
        return rot;
    };
    Util.getLocalRotation = function (targetNode, worldRot) {
        var rot = worldRot;
        var parent = targetNode.getParent();
        while (parent) {
            rot -= parent.rotation;
            parent = parent.getParent();
        }
        return rot;
    };
    Util.setWorldRotation = function (node, worldRot) {
        node.rotation = worldRot;
        var parent = node.getParent();
        while (parent) {
            node.rotation -= parent.rotation;
            parent = parent.getParent();
        }
    };
    Util.distance = function (a, b) {
        if (!a || !b) {
            return;
        }
        var vec = new cc.Vec2(a.x - b.x, a.y - b.y);
        return vec.mag();
    };
    Util.vec = function (start, end) {
        if (!start || !end) {
            return;
        }
        var a = this.getWorldPosition(start);
        var b = this.getWorldPosition(end);
        return new cc.Vec2(b.x - a.x, b.y - a.y);
    };
    //角度转向量
    Util.degreesToVectors = function (degree) {
        var radian = cc.misc.degreesToRadians(degree);
        var comVec = cc.v2(0, 1);
        var dirVec = comVec.rotate(-radian);
        return dirVec;
    };
    //向量转角度
    Util.vectorsToDegress = function (dirVec) {
        var comVec = cc.v2(0, 1);
        var radian = dirVec.normalize().signAngle(comVec);
        var degree = cc.misc.radiansToDegrees(radian);
        return degree;
    };
    /**向量转弧度 */
    Util.vectorToRadian = function (dirVec) {
        return dirVec.normalize().signAngle(cc.v2(0, 1));
    };
    //求两向量夹角
    Util.getDegreeByVec = function (vec1, vec2) {
        var radian = vec1.normalize().signAngle(vec2.normalize());
        var degree = cc.misc.radiansToDegrees(radian);
        if (degree < -90) {
            degree = -90 - (90 + degree);
        }
        if (degree > 90) {
            degree = 180 - degree;
        }
        return degree;
    };
    /**
     *
     * @param a 起点
     * @param b 终点
     */
    Util.vector = function (a, b) {
        if (!a || !b) {
            return cc.Vec2.UP;
        }
        var vector = new cc.Vec2();
        vector.x = b.x - a.x;
        vector.y = b.y - a.y;
        return vector;
    };
    // public static clampPosition(position: cc.Vec2, radius: number): cc.Vec2 {
    //     let x = cc.misc.clampf(position.x, this.xMin + radius, this.xMax - radius);
    //     let y = cc.misc.clampf(position.y, this.yMin + radius, this.yMax - radius);
    //     return cc.v2(x, y);
    // }
    Util.caculateRadius = function (c, minRadius, maxRadius) {
        var r = c / (2 * Math.PI);
        return cc.misc.clampf(r, minRadius, maxRadius);
    };
    /**
     * 取得开始值和结束值之间的插值
     * @param num 0-1 表示从开始值到结束值之间的比例
     * @param startValue 开始值
     * @param endValue 结束值
     */
    Util.lerp = function (num, startValue, endValue) {
        num = cc.misc.clampf(num, 0, 1);
        if (typeof startValue == "number" && typeof endValue == "number") {
            var result = startValue + (endValue - startValue) * num;
            return result;
        }
        else if ((startValue instanceof cc.Vec2 || startValue instanceof cc.Vec3) && (endValue instanceof cc.Vec2 || endValue instanceof cc.Vec3)) {
            var start = startValue;
            var end = endValue;
            var x = this.lerp(num, start.x, end.x);
            var y = this.lerp(num, start.y, end.y);
            var result = cc.v2(x, y);
            return result;
        }
        else if (startValue instanceof cc.Color && endValue instanceof cc.Color) {
            var start = startValue;
            var end = endValue;
            var r = this.lerp(num, start.getR(), end.getR());
            var g = this.lerp(num, start.getG(), end.getG());
            var b = this.lerp(num, start.getB(), end.getB());
            var a = this.lerp(num, start.getA(), end.getA());
            var result = cc.color(r, g, b, a);
            return result;
        }
    };
    Util.getRandomInt = function (min, max) {
        if (min > max) {
            var temp = min;
            min = max;
            max = temp;
        }
        return Math.floor(Math.random() * (max - min) + min);
    };
    Util.getRandomFloat = function (min, max) {
        if (min > max) {
            var temp = min;
            min = max;
            max = temp;
        }
        return Math.random() * (max - min) + min;
    };
    /**
     * 超长字符用’...‘替代
     * @param str
     * @param maxLen
     */
    Util.subString = function (str, maxLen, suffix) {
        if (maxLen === void 0) { maxLen = 10; }
        if (suffix === void 0) { suffix = '...'; }
        var len = this.getLength(str);
        var l = 0, i = 0;
        var a = str.split("");
        for (i = 0; i < a.length; i++) {
            if (a[i].charCodeAt(0) < 299) {
                l++;
                if (l > maxLen) {
                    l = l - 1;
                    break;
                }
            }
            else {
                l += 2;
                if (l > maxLen) {
                    l = l - 2;
                    break;
                }
            }
        }
        return str.substr(0, i) + (len > maxLen ? suffix : '');
    };
    Util.getLength = function (str) {
        var n_str = new String(str);
        var bytesCount = 0;
        for (var i = 0, n = n_str.length; i < n; i++) {
            var c = n_str.charCodeAt(i);
            if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
                bytesCount += 1;
            }
            else {
                bytesCount += 2;
            }
        }
        return bytesCount;
    };
    /**
     * 分隔符分割字符串
     * @param str
     * @param sep
     * @param len
     */
    Util.formatString = function (str, sep, len) {
        if (sep === void 0) { sep = ','; }
        if (len === void 0) { len = 3; }
        str = str.toString();
        var strLen = str.length;
        var newStr = str;
        for (var i = strLen - len; i > 0; i -= len) {
            var left = str.substring(0, i);
            var right = str.substring(i);
            newStr = left + sep + right;
            strLen = str.length;
            str = newStr;
        }
        return newStr;
    };
    /**字符串分割为数组 */
    Util.stringToArray = function (str, sep) {
        if (sep === void 0) { sep = ';'; }
        if (!str)
            return [];
        var new_list = [];
        var list = str.replace(' ', '').split(sep);
        list.forEach(function (key) {
            if (key != null && key !== undefined && key != '') {
                if (!isNaN(Number(key))) {
                    key = Number(key);
                }
                new_list.push(key);
            }
        });
        return new_list;
    };
    /**删除字符串左右空格 */
    Util.trim = function (str) {
        if (typeof str !== 'string')
            return str;
        return str.replace(/(^\s*)|(\s*$)/g, "");
    };
    /**
     * 转换秒数时间为标准样式
     */
    Util.convertTimeToStandStyle = function (second) {
        var sec = second % 60;
        second -= sec;
        var min = second / 60;
        var minN = min % 60;
        min -= minN;
        var hour = min / 60;
        return (hour > 0 ? (hour + ":") : "") +
            (minN > 0 ? (minN >= 10 ? minN : "0" + minN) : "00") + ":" +
            (sec > 0 ? (sec >= 10 ? sec : "0" + sec) : "00");
    };
    /**将秒转为 [时，分,秒] */
    Util.convertTimeToStandStyle2 = function (second) {
        var hour = second >= 3600 ? Math.floor(second / 3600) : 0;
        second -= hour * 3600;
        var min = second >= 60 ? Math.floor(second / 60) : 0;
        second -= min * 60;
        var sec = second;
        return [hour, min, sec];
    };
    Util.formatData = function (time) {
        if (time === void 0) { time = null; }
        if (!time)
            time = Date.now();
        var date = new Date(time);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? "0" + String(m) : m;
        var d = date.getDate();
        d = d < 10 ? "0" + String(d) : d;
        var h = date.getHours();
        h = h < 10 ? "0" + String(h) : h;
        var minute = date.getMinutes();
        minute = minute < 10 ? "0" + String(minute) : minute;
        var second = date.getSeconds();
        second = second < 10 ? "0" + String(second) : second;
        // return `${String(y)}-${String(m)}-${String(d)}   ${String(h)}:${String(
        //     minute
        // )}:${String(second)}`
        return String(y) + "/" + String(m) + "/" + String(d) + " " + String(h) + ":" + String(minute);
    };
    /**检查数组中是否有相同vec */
    Util.checkSameVec = function (vecArr, vec) {
        if (vecArr.length <= 0) {
            return false;
        }
        for (var i = 0; i < vecArr.length; i++) {
            if (vecArr[i].x == vec.x && vecArr[i].y == vec.y) {
                return true;
            }
        }
        return false;
    };
    /**从数组中随机取值 */
    Util.getRandomValue = function (arr) {
        var index = Math.floor(Math.random() * arr.length);
        return { value: arr[index], key: index };
    };
    /**copy数组 */
    Util.copyArr = function (arr) {
        if (arr.length <= 0) {
            return [];
        }
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
        return newArr;
    };
    /**随机打乱数组顺序 */
    Util.randomArrOrder = function (arr) {
        var _a;
        var i = arr.length;
        while (i) {
            var j = Math.floor(Math.random() * i--);
            _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
        }
        return arr;
    };
    /**获取两数组的不同值 */
    Util.getArrDifference = function (arr1, arr2) {
        return arr1.concat(arr2).filter(function (v, i, arr) {
            return arr.indexOf(v) === arr.lastIndexOf(v);
        });
    };
    /**获取两数组相同值 */
    Util.getArrSame = function (arr1, arr2) {
        return arr1.filter(function (item) {
            var idList = arr2.map(function (val) { return val.name; });
            return idList.indexOf(item.name) != -1;
        });
    };
    /**获取两数组相同值 */
    Util.getCommonElements = function (arr1, arr2) {
        return arr1.filter(function (item) { return arr2.includes(item); });
    };
    /**限制取值范围 */
    Util.clampValue = function (val, min, max) {
        if (min == max) {
            return min;
        }
        if (min > max) {
            var temp = min;
            min = max;
            max = temp;
        }
        return val < min ? min : val > max ? max : val;
    };
    /**检查vec数组中是否有值与vec相等 不考虑顺序 */
    Util.checkSameVecNoOrder = function (vecArr, vec) {
        if (vecArr.length <= 0) {
            return false;
        }
        for (var i = 0; i < vecArr.length; i++) {
            if ((vecArr[i].x == vec.x && vecArr[i].y == vec.y) || (vecArr[i].x == vec.y && vecArr[i].y == vec.x)) {
                return true;
            }
        }
        return false;
    };
    /**检查两个向量是否相等 */
    Util.checkVecIsSame = function (vec1, vec2) {
        return vec1.x == vec2.x && vec1.y == vec2.y;
    };
    /**
     * !#en Test line and line
     * !#zh 测试线段与线段是否相交
     * @method lineLine
     * @param {Vec2} a1 - The start point of the first line
     * @param {Vec2} a2 - The end point of the first line
     * @param {Vec2} b1 - The start point of the second line
     * @param {Vec2} b2 - The end point of the second line
     * @return {boolean}
     */
    Util.checkLineIntersect = function (a1, a2, b1, b2) {
        var ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x);
        var ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x);
        var u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);
        if (u_b !== 0) {
            var ua = ua_t / u_b;
            var ub = ub_t / u_b;
            if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
                return true;
            }
        }
        return false;
    };
    /**将字符串数组转为number数组 */
    Util.changeStrArrToNumArr = function (strArr) {
        var numArr = [];
        for (var i = 0; i < strArr.length; i++) {
            numArr.push(Number(strArr[i]));
        }
        return numArr;
    };
    /**获取一个num数组中的最大值 */
    Util.getMaxNumInNumArr = function (arr) {
        return arr.sort().reverse()[0];
    };
    /**克隆一个字符串 */
    Util.copyStr = function (str) {
        var newStr = "";
        for (var i = 0; i < str.length; i++) {
            newStr += str[i];
        }
        return newStr;
    };
    /**
 * 遍历执行//遍历某个节点的所有子节点包括自己，并可执行设置的操作
 * @param tarNode 遍历的根结点
 * @param execute 每个节点执行的操作
 */
    Util.TraversalExecute = function (tarNode, execute) {
        var _this = this;
        execute(tarNode);
        tarNode.children.forEach(function (value) {
            _this.TraversalExecute(value, execute);
        });
    };
    /**检查当前值是否在目标值允许误差范围内 */
    Util.checkValueRandom = function (value, tarVal, error) {
        return value >= tarVal - error && value <= tarVal + error;
    };
    /**判断两个多边形碰撞器是否相交 */
    Util.polygonPolygonTest = function (polygon1, polygon2) {
        if (!polygon1 || !polygon2) {
            return false;
        }
        if (!polygon1.node.active || !polygon2.node.active) {
            return false;
        }
        var points1 = [];
        for (var i = 0; i < polygon1.points.length; i++) {
            var pos = polygon1.node.convertToWorldSpaceAR(polygon1.points[i]);
            points1.push(pos);
        }
        var points2 = [];
        for (var i = 0; i < polygon2.points.length; i++) {
            var pos = polygon2.node.convertToWorldSpaceAR(polygon2.points[i]);
            points2.push(pos);
        }
        return cc.Intersection.polygonPolygon(points1, points2);
    };
    /**判断两个多边形碰撞器是否有接触 部分相交返回true，完全包含，完全无接触返回false
     */
    Util.linePolygonTest = function (polygon1, polygon2) {
        if (!polygon1 || !polygon2) {
            return false;
        }
        if (!polygon1.node.active || !polygon2.node.active) {
            return false;
        }
        for (var i = 0; i < polygon2.points.length; i++) {
            var vec = polygon2.points[i];
            var a1 = polygon2.node.convertToWorldSpaceAR(vec);
            a1 = polygon1.node.convertToNodeSpaceAR(a1);
            var a2 = null;
            if (i < polygon2.points.length - 1) {
                a2 = polygon2.node.convertToWorldSpaceAR(polygon2.points[i + 1]);
            }
            else {
                a2 = polygon2.node.convertToWorldSpaceAR(polygon2.points[0]);
            }
            a2 = polygon1.node.convertToNodeSpaceAR(a2);
            var isCollider = cc.Intersection.linePolygon(a1, a2, polygon1.points);
            if (isCollider) {
                return true;
            }
        }
        return false;
    };
    /**测试一个世界坐标系的点是否在多边形碰撞器内 */
    Util.polygonHitTest = function (polyCol, touchPos) {
        touchPos = polyCol.node.convertToNodeSpaceAR(touchPos);
        return cc.Intersection.pointInPolygon(touchPos, polyCol.points);
    };
    /**判断两个线段是否相交，如果相交 返回两个线段的交点
     * @param {Vec2} a - The start point of the first line
     * @param {Vec2} b - The end point of the first line
     * @param {Vec2} c - The start point of the second line
     * @param {Vec2} d - The end point of the second line
     * @return {boolean}
     */
    Util.segmentsIntr = function (a, b, c, d) {
        /** 1 解线性方程组, 求线段交点. **/
        // 如果分母为0 则平行或共线, 不相交  
        var denominator = (b.y - a.y) * (d.x - c.x) - (a.x - b.x) * (c.y - d.y);
        if (denominator == 0) {
            return false;
        }
        // 线段所在直线的交点坐标 (x , y)      
        var x = ((b.x - a.x) * (d.x - c.x) * (c.y - a.y)
            + (b.y - a.y) * (d.x - c.x) * a.x
            - (d.y - c.y) * (b.x - a.x) * c.x) / denominator;
        var y = -((b.y - a.y) * (d.y - c.y) * (c.x - a.x)
            + (b.x - a.x) * (d.y - c.y) * a.y
            - (d.x - c.x) * (b.y - a.y) * c.y) / denominator;
        /** 2 判断交点是否在两条线段上 **/
        if (
        // 交点在线段1上  
        (x - a.x) * (x - b.x) <= 0 && (y - a.y) * (y - b.y) <= 0
            // 且交点也在线段2上  
            && (x - c.x) * (x - d.x) <= 0 && (y - c.y) * (y - d.y) <= 0) {
            // 返回交点p  
            return cc.v2(x, y);
        }
        //否则不相交  
        return false;
    };
    /**屏幕适配，返回界面缩放比例 */
    Util.sceneAdaptation = function () {
        var frameSize = cc.view.getVisibleSize();
        var canvasSize = cc.view.getDesignResolutionSize();
        console.log("frameSize = ", frameSize);
        console.log("canvasSize = ", canvasSize);
        console.log(cc.view.getCanvasSize());
        var aspectRatio = frameSize.width / frameSize.height;
        console.log("aspectRatio = ", aspectRatio);
        var adapScale = 1;
        var canvasAr = canvasSize.width / canvasSize.height;
        if (canvasAr < 1) {
            var scale = canvasSize.height / frameSize.height;
            adapScale = canvasSize.width / (frameSize.width * scale);
            adapScale = adapScale > 1 ? 1 : adapScale;
            // if (aspectRatio > 0.5625) {
            //     adapScale *= (aspectRatio / 0.5625);
            // }
            console.log("竖屏 ", adapScale);
        }
        else {
            canvasAr = canvasSize.height / canvasSize.width;
            var scale = canvasSize.width / frameSize.width;
            adapScale = canvasSize.height / (frameSize.height * scale);
            console.log("横屏 ", adapScale);
        }
        return adapScale;
    };
    /**
* 从数组中删除一个元素
* @param array 数组
* @param element 需要删除的元素
*/
    Util.deleteElement = function (array, element) {
        var index = array.indexOf(element);
        if (index >= 0) {
            array.splice(index, 1);
            // console.log("移除TimeManager 监听成功 ", element)
        }
        return array;
    };
    /**
* 从数组中删除一组元素
* @param array 数组
* @param element 需要删除的元素组
*/
    Util.deleteElements = function (array, deleteArray) {
        var _this = this;
        if (array == null || deleteArray == null) {
            return;
        }
        deleteArray.forEach(function (value) {
            _this.deleteElement(array, value);
        });
        return array;
    };
    Util.deleteElementByRule = function (array, targetOrder) {
        return Util.deleteElement(array, Util.find(array, targetOrder));
    };
    Util.deleteElementsByRule = function (array, targetOrder) {
        return Util.deleteElements(array, array.filter(function (a) { return targetOrder(a); }));
    };
    /**
    * 寻找数组中的第一个符合条件的元素
    * @param array
    * @param preciate
    */
    Util.find = function (array, preciate) {
        if (array == null || array.length == 0) {
            return null;
        }
        if (preciate == null) {
            return array[0];
        }
        var result = null;
        for (var i = 0; i < array.length; i++) {
            if (preciate(array[i])) {
                result = array[i];
                break;
            }
        }
        return result;
    };
    /**获取一组随机数 */
    Util.getRandomNum = function (numLength) {
        var num = "";
        for (var i = 0; i < numLength; i++) {
            num += this.getRandomInt(0, 9);
        }
        return Number(num);
    };
    /**
     * 是否是以后的天数
     * @param lastTime 上次时间
     * @param curTime 当前时间
     */
    Util.isNextDay = function (lastTime, curTime) {
        if (lastTime > curTime) {
            return false;
        }
        else if (curTime - lastTime >= 24 * 60 * 60 * 1000) {
            return true;
        }
        else {
            var lastDate = new Date(lastTime);
            var curDate = new Date(curTime);
            return lastDate.getDay() != curDate.getDay();
        }
    };
    /**
     * 是否是以后的周
     * @param lastTime 上次时间
     * @param curTime 当前时间
     */
    Util.isNextWeek = function (lastTime, curTime) {
        if (lastTime > curTime) {
            return false;
        }
        else if (curTime - lastTime >= 24 * 60 * 60 * 1000 * 7) {
            return true;
        }
        else {
            var lastDate = new Date(lastTime);
            var curDate = new Date(curTime);
            return curDate.getDay() < lastDate.getDay() || (curDate.getDay() == lastDate.getDay() && curTime - lastTime > 24 * 60 * 60 * 1000);
        }
    };
    Util.getAllEnumNums = function (enumType) {
        var objs = [];
        for (var de in enumType) {
            if (!isNaN(parseInt(de))) {
                objs.push(parseInt(de));
            }
        }
        return objs;
    };
    /**获取枚举的value数组 */
    Util.getAllEnumValues = function (enumType) {
        var objs = [];
        for (var key in enumType) {
            objs.push(enumType[key]);
        }
        return objs;
    };
    Util.getAllEnumKeys = function (enumType) {
        var objs = [];
        for (var key in enumType) {
            if (isNaN(Number(key))) {
                objs.push(key);
            }
        }
        return objs;
    };
    /**获取一个随机枚举 */
    Util.getRandomEnum = function (enumType) {
        var strs = [];
        for (var key in enumType) {
            strs.push(key);
        }
        this.randomArrOrder(strs);
        return enumType[strs[0]];
    };
    /**根据权重随机取值 */
    Util.getRandomEleInWeight = function (objs) {
        if (objs == null || objs.length == 0) {
            return null;
        }
        var allWeight = 0;
        var curWeight = 0;
        var objsProb = [];
        objs.forEach(function (value) {
            allWeight += value[1];
            objsProb.push([value[0], curWeight, curWeight + value[1]]);
            curWeight += value[1];
        });
        var rand = Math.random() * allWeight;
        for (var i = 0; i < objsProb.length; i++) {
            if (rand > objsProb[i][1] && rand <= objsProb[i][2]) {
                return objsProb[i][0];
            }
        }
        return null;
    };
    /**获取矩形范围内随机一点 */
    Util.getRandomPosInRect = function (rect) {
        return cc.v2(rect.x + Math.random() * rect.width, rect.y + Math.random() * rect.height);
    };
    /**添加一个子节点并添加脚本 */
    Util.addComponentNode = function (paNode, className) {
        var node = new cc.Node(className);
        node.parent = paNode;
        var classSrc = node.addComponent(className);
        return classSrc;
    };
    /**根据对象的value获取key */
    Util.getObjKeyByValue = function (record, value) {
        return Object.keys(record).find(function (k) {
            return record[k] === value;
        });
    };
    /**屏幕震动效果 */
    Util.shakeAnim = function (node, loopTimes) {
        if (loopTimes === void 0) { loopTimes = 1; }
        return new Promise(function (resolve, reject) {
            node.stopAllActions();
            cc.tween(node)
                .to(0.02, { position: cc.v3(5, 7) })
                .to(0.02, { position: cc.v3(-6, 7) })
                .to(0.02, { position: cc.v3(-13, 3) })
                .to(0.02, { position: cc.v3(3, -6) })
                .to(0.02, { position: cc.v3(-5, 5) })
                .to(0.02, { position: cc.v3(2, -8) })
                .to(0.02, { position: cc.v3(-8, 10) })
                .to(0.02, { position: cc.v3(3, 10) })
                .to(0.02, { position: cc.v3(0, 0) })
                .union()
                .repeat(loopTimes)
                .call(function () {
                resolve(null);
            })
                .start();
        });
    };
    /**将富文本替换成可使用打字机效果显示的文本数组2 */
    Util.richTextTypewrite = function (str) {
        var charArr = str.replace(/<.+?\/?>/g, '').split('');
        var tempStrArr = [str];
        for (var i = charArr.length; i > 1; i--) {
            var curStr = tempStrArr[charArr.length - i];
            var lastIdx = curStr.lastIndexOf(charArr[i - 1]);
            var prevStr = curStr.slice(0, lastIdx);
            var nextStr = curStr.slice(lastIdx + 1, curStr.length);
            tempStrArr.push(prevStr + nextStr);
        }
        tempStrArr = tempStrArr.reverse();
        // console.log(tempStrArr)
        return tempStrArr;
    };
    /**将富文本替换成可使用打字机效果显示的文本数组 性能较差*/
    Util.replaceRichText = function (str) {
        var regex = /<.+?\/?>/g; // 匹配尖括号标签
        var matchArr = str.match(regex);
        var specialChar = "│";
        var replaceStr = str.replace(regex, specialChar); // 标签数组
        var textArr = replaceStr.split(specialChar); // 文字数组
        var strArr = []; // 存放处理过的文字数组
        var paraNum = 0; // 待替换参数个数
        for (var _i = 0, textArr_1 = textArr; _i < textArr_1.length; _i++) {
            var text = textArr_1[_i];
            // 非空字符替换成类似 $[0-n] 参数
            if (text !== "") {
                text = "$[" + paraNum + "]";
                paraNum += 1;
            }
            strArr.push(text);
        }
        var templetStr = strArr.join(specialChar); // 数组转成待替换字符串
        for (var index = 0; index < textArr.length; index++) {
            // 转换代替换字符串之后, 删除文字数组多余空字符
            if (textArr[index] === "") {
                textArr.splice(index, 1);
                index = index - 1;
            }
        }
        while (templetStr.search(specialChar) !== -1) {
            // 数组转成的字符串原本 '特殊字符' 位置都是富文本标签的位置, 替换回标签
            if (matchArr[0]) {
                templetStr = templetStr.replace(specialChar, matchArr[0].toString());
                matchArr.splice(0, 1);
            }
            else {
                templetStr = templetStr.replace(specialChar, ""); // 空字符串替换,防止死循环
                console.warn("matchArr not enough");
            }
        }
        var lastStrArr = []; // 转换后富文本数组
        var arrayParm = new Array(paraNum).fill(""); // 替换参数数组
        for (var i = 0; i < textArr.length; i++) {
            for (var _a = 0, _b = textArr[i]; _a < _b.length; _a++) {
                var text = _b[_a];
                arrayParm[i] = arrayParm[i] + text;
                var replaceStr1 = templetStr;
                for (var index = 0; index < paraNum; index++) {
                    replaceStr1 = replaceStr1.replace("$[" + index + "]", arrayParm[index]);
                }
                lastStrArr.push(replaceStr1);
            }
        }
        return lastStrArr;
    };
    /**
     * 格式化时间戳
     * @param date Date
     * @param fmt 格式，默认 yyyy/MM/dd hh:mm:ss
     *
     * 【可用标志：y-年 | M-月 | d-日 | h-小时 | m-分 | s-秒 | q-季度 | S-毫秒】
     *
     * @returns String
     */
    Util.dateFormat = function (date, fmt) {
        if (fmt === void 0) { fmt = 'yyyy/MM/dd hh:mm:ss'; }
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds() //毫秒   
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    };
    /**
     * 获取某一位的值
     * @param flag
     * @param position
     * @returns
     */
    Util.getBitValue = function (flag, position) {
        return ((1 << (position - 1)) & flag) > 0 ? 1 : 0;
    };
    /**
   * 1为真0为假
   * @param flag
   * @param position
   */
    Util.checkBitValue = function (flag, position) {
        return this.getBitValue(flag, position) == 1 ? true : false;
    };
    /**
     * 设置富文本数字字体大小
     * @param richText 原富文本
     * @param num_size 数字字体大小
     * @returns 新文本
     */
    Util.setRichTextNumberSize = function (richText, num_size) {
        var reg = new RegExp("^(<.*?>)[0-9]+", "g");
        var results = richText.match(reg);
        if (!results || results.length <= 0)
            return richText;
        results.forEach(function (res) { return richText.replace(res, "<size=" + num_size + ">" + res + "</size>"); });
        return richText;
    };
    /**
    * 格式化时间到分
    * @param time 时间(单位：秒)
    * @returns (分:秒)
    */
    Util.formatTimeToMin = function (time, withZH) {
        if (withZH === void 0) { withZH = false; }
        var min = Math.floor(time / 60);
        var sec = Math.ceil(time % 60);
        return withZH ? this.keepIntUnits(min, 2) + "\u5206" + this.keepIntUnits(sec, 2) + "\u79D2" : this.keepIntUnits(min, 2) + ":" + this.keepIntUnits(sec, 2);
    };
    /**
     * 格式化时间
     * @param time 秒
     * @param fmt 显示格式
     * @param fix 后缀
     * @returns
     */
    Util.formatTime = function (time, fmt, fix) {
        if (fmt === void 0) { fmt = "dhms"; }
        if (fix === void 0) { fix = { d: "d", h: "h", m: "m", s: "s" }; }
        var day = this.keepIntUnits(Math.floor(time / (24 * 3600)), 2);
        var hour = this.keepIntUnits(Math.floor(time / 3600) % 24, 2);
        var min = this.keepIntUnits(Math.floor(time / 60) % 60, 2);
        var sec = this.keepIntUnits(Math.floor(time % 60), 2);
        var obj = { d: day, h: hour, m: min, s: sec };
        var str = "";
        for (var i = 0; i < fmt.length; i++) {
            var fixs = fix && fix[fmt[i]];
            str += obj[fmt[i]] + fixs;
            if (fixs == "" && i < fmt.length - 1) {
                str += ":";
            }
        }
        return str;
    };
    /**
    * 设置整形数字固定位数（不足的部分用0充填，超出设定长度或者不为整形则直接返回字符串形式）
    * @param int 要调整位数的数字
    * @param units 要调整的位数
    * @returns 调整后的字符串
    */
    Util.keepIntUnits = function (int, units) {
        if (!Number.isInteger(int) || int.toString().length >= units)
            return int.toString();
        var intStr = int.toString();
        var str = [];
        for (var i = 0; i < units; i++) {
            if (i < intStr.length) {
                str.push(intStr.charAt(i));
            }
            else {
                str.unshift("0");
            }
        }
        return str.join("");
    };
    /**获取节点相对自身的矩形范围 */
    Util.getSelfRect = function (node) {
        return cc.rect(-node.width * node.anchorX, -node.height * node.anchorY, node.width, node.height);
    };
    /**
     * 等比分割矩形
     * @param rect 原矩形
     * @param row 行数
     * @param col 列数
     * @returns 切割后的矩形
     */
    Util.splitRect = function (rect, row, col) {
        var splitRects = [];
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < col; j++) {
                splitRects.push(cc.rect(rect.x + j * rect.width / col, rect.y + i * rect.height / row, rect.width / col, rect.height / row));
            }
        }
        return splitRects;
    };
    Util.formatCountPerKilo = function (count, fractionDigits, kiloLimit, milloneLimit) {
        if (fractionDigits === void 0) { fractionDigits = 1; }
        if (kiloLimit === void 0) { kiloLimit = 10000; }
        if (milloneLimit === void 0) { milloneLimit = 100000000; }
        fractionDigits = Math.max(fractionDigits, 0);
        if (count >= milloneLimit) {
            return (Math.floor(count /= Math.pow(10, 8 - fractionDigits)) / Math.pow(10, fractionDigits)) + "亿";
        }
        else if (count >= kiloLimit) {
            return (Math.floor(count /= Math.pow(10, 4 - fractionDigits)) / Math.pow(10, fractionDigits)) + "万";
        }
        else {
            return count + "";
        }
    };
    Util.sum = function (arr) {
        var res = 0;
        arr.forEach(function (num) { return res += num; });
        return res;
    };
    Util.isValid = function (value) {
        return value != null && cc.isValid(value, true);
    };
    Util.convertStrToNumber = function (str) {
        var value = 0;
        if (str.includes("万")) {
            str = str.replace("万", "");
            value = Number(str) * 10000;
        }
        else if (str.includes("亿")) {
            str = str.replace("亿", "");
            value = Number(str) * 100000000;
        }
        else {
            value = Number(str);
        }
        return value || 0;
    };
    /**
     * 将一个值随机分成几份
     * @param total 值
     * @param parts 要分的份数
     * @param maxOffsetPer 最大差值百分比
     * @param isInt 是否整型
     * @returns
     */
    Util.splitIntoRandomShares = function (total, parts, maxOffsetPer, isInt) {
        if (maxOffsetPer === void 0) { maxOffsetPer = 0.2; }
        if (isInt === void 0) { isInt = true; }
        var shares = [];
        var partNum = total / parts;
        if (isInt) {
            if (!this.isInteger(partNum)) {
                partNum = Math.ceil(partNum);
            }
        }
        var maxOffset = partNum * maxOffsetPer / 2;
        if (isInt)
            maxOffset = Math.floor(maxOffset);
        var max = partNum + maxOffset;
        var min = partNum - maxOffset;
        for (var i = 0; i < parts - 1; i++) {
            var randomShare = isInt ? this.getRandomInt(min, max) : this.getRandomFloat(min, max);
            shares.push(randomShare);
            total -= randomShare;
        }
        shares.push(total);
        shares.sort(function () { return Math.random() - 0.5; });
        return shares;
    };
    /**动态构建枚举 */
    Util.createEnum = function (enumObj) {
        return Object.keys(enumObj).reduce(function (prev, key) {
            prev[key] = enumObj[key];
            return prev;
        }, {});
    };
    /**
     * 获得贝塞尔曲线的途径点坐标数组
     * @param posArr 三阶贝塞尔的四个点,数组对应为 0起点,1起点控制点,2终点控制点,3终点
     * @param interval 间隔 每次迭代步长,这个值越小越精细,但是效率越低
     * @returns
     */
    Util.getBezierPointArr = function (posArr, interval) {
        if (interval === void 0) { interval = 300; }
        var allBezierPos = [];
        var gap = 1 / interval;
        for (var i = 0; i <= 1; i += gap) {
            var pos = this._caculateBezierP(posArr, i);
            allBezierPos.push(pos);
        }
        return allBezierPos;
    };
    /**
     * 计算三阶贝塞尔在 t时刻 的位置
     * @param p 三阶贝塞尔的四个点,数组对应为 0起点,1起点控制点,2终点控制点,3终点
     * @param t 传入0-1的值,一个时间的迭代过程
     * @returns
     */
    Util._caculateBezierP = function (p, t) {
        // 三阶贝塞尔运算
        var bezierP = cc.v2();
        bezierP.x = Math.floor(Math.pow(1 - t, 3) * p[0].x + 3 * t * Math.pow(1 - t, 2) * p[1].x + 3 * Math.pow(t, 2) * (1 - t) * p[2].x + Math.pow(t, 3) * p[3].x);
        bezierP.y = Math.floor(Math.pow(1 - t, 3) * p[0].y + 3 * t * Math.pow(1 - t, 2) * p[1].y + 3 * Math.pow(t, 2) * (1 - t) * p[2].y + Math.pow(t, 3) * p[3].y);
        return bezierP;
    };
    /**
     * 获得以每万为单位的数值字符串
     * @param value 原数值
     * @param decimal 小数位
     * @returns
     */
    Util.getFormatValueStr = function (value, decimal) {
        if (decimal === void 0) { decimal = 1; }
        if (value >= Math.pow(10, 12)) { //京
            return Math.floor(value / Math.pow(10, 12 - decimal)) / Math.pow(10, decimal) + "t";
        }
        else if (value >= Math.pow(10, 9)) { //兆
            return Math.floor(value / Math.pow(10, 9 - decimal)) / Math.pow(10, decimal) + "g";
        }
        else if (value >= Math.pow(10, 6)) { //亿
            return Math.floor(value / Math.pow(10, 6 - decimal)) / Math.pow(10, decimal) + "m";
        }
        else if (value >= Math.pow(10, 3)) { //万
            return Math.floor(value / Math.pow(10, 3 - decimal)) / Math.pow(10, decimal) + "k";
        }
        else {
            return value.toString();
        }
    };
    /**判断值是否为整型 */
    Util.isInteger = function (value) {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
    };
    Util.xMin = 0;
    Util.yMin = 0;
    Util.xMax = 3120;
    Util.yMax = 3120;
    return Util;
}());
exports.Util = Util;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcaG9tZVBhZ2VcXHNjcmlwdFxcY29tbW9uXFxVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0lBQUE7SUF5c0NBLENBQUM7SUF2c0NHOzs7O0dBSUQ7SUFDUSxvQkFBZSxHQUF0QixVQUFnQyxHQUFXLEVBQUUsR0FBUztRQUFULG9CQUFBLEVBQUEsU0FBUztRQUNsRCxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ3BCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU07WUFDcEIsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBUyxFQUFFO2dCQUM5QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDcEI7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sR0FBVSxDQUFDO0lBQ3RCLENBQUM7SUFFYSxxQkFBZ0IsR0FBOUIsVUFBK0IsSUFBYTtRQUN4QyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsT0FBTztTQUNWO1FBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM3QjtRQUVELE9BQU8sTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFYSxpQkFBWSxHQUExQixVQUEyQixJQUFhO1FBQ3BDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNq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RSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4RSxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLElBQUksRUFBRSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7WUFFcEIsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUMxQyxPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsc0JBQXNCO0lBQ1IseUJBQW9CLEdBQWxDLFVBQW1DLE1BQWdCO1FBQy9DLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELG9CQUFvQjtJQUNOLHNCQUFpQixHQUEvQixVQUFnQyxHQUFhO1FBQ3pDLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxhQUFhO0lBQ0MsWUFBTyxHQUFyQixVQUFzQixHQUFXO1FBQzdCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7O0dBSUQ7SUFDZSxxQkFBZ0IsR0FBOUIsVUFBK0IsT0FBZ0IsRUFBRSxPQUFvQztRQUFyRixpQkFLQztRQUpHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQixPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7WUFDM0IsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx3QkFBd0I7SUFDVixxQkFBZ0IsR0FBOUIsVUFBK0IsS0FBYSxFQUFFLE1BQWMsRUFBRSxLQUFhO1FBQ3ZFLE9BQU8sS0FBSyxJQUFJLE1BQU0sR0FBRyxLQUFLLElBQUksS0FBSyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDOUQsQ0FBQztJQUVELG9CQUFvQjtJQUNOLHVCQUFrQixHQUFoQyxVQUFpQyxRQUE0QixFQUFFLFFBQTRCO1FBQ3ZGLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDeEIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoRCxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksT0FBTyxHQUFjLEVBQUUsQ0FBQztRQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQjtRQUNELElBQUksT0FBTyxHQUFjLEVBQUUsQ0FBQztRQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQjtRQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRDtPQUNHO0lBQ1csb0JBQWUsR0FBN0IsVUFBOEIsUUFBNEIsRUFBRSxRQUE0QjtRQUNwRixJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3hCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEQsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xELEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzVDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztZQUNkLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDaEMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRTtpQkFBTTtnQkFDSCxFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEU7WUFDRCxFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0RSxJQUFJLFVBQVUsRUFBRTtnQkFDWixPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsMkJBQTJCO0lBQ3BCLG1CQUFjLEdBQXJCLFVBQXNCLE9BQTJCLEVBQUUsUUFBaUI7UUFDaEUsUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkQsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxpQkFBWSxHQUFuQixVQUFvQixDQUFVLEVBQUUsQ0FBVSxFQUFFLENBQVUsRUFBRSxDQUFVO1FBRTlELHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLFdBQVcsSUFBSSxDQUFDLEVBQUU7WUFDbEIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDMUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2NBQy9CLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDM0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2NBQy9CLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBRXJELHNCQUFzQjtRQUN0QjtRQUNJLFlBQVk7UUFDWixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxD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QUFBLEVBQUEsUUFBZ0IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtRQUNsRyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUM5QyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lB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RSxDQUFDLEVBQUUsRUFBRSxDQUFBO1FBQzlCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1SixPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUosT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksc0JBQWlCLEdBQXhCLFVBQXlCLEtBQWEsRUFBRSxPQUFtQjtRQUFuQix3QkFBQSxFQUFBLFdBQW1CO1FBQ3ZELElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUMsR0FBRztZQUMvQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUN2RjthQUFNLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsR0FBRztZQUNyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUN0RjthQUFNLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsR0FBRztZQUNyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUN0RjthQUFNLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsR0FBRztZQUNyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUN0RjthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRUQsY0FBYztJQUNQLGNBQVMsR0FBaEIsVUFBaUIsS0FBVTtRQUN2QixPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUM7SUFDdkYsQ0FBQztJQXZnQ3NCLFNBQUksR0FBRyxDQUFDLENBQUM7SUFDVCxTQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ1QsU0FBSSxHQUFHLElBQUksQ0FBQztJQUNaLFNBQUksR0FBRyxJQUFJLENBQUM7SUFxZ0N2QyxXQUFDO0NBenNDRCxBQXlzQ0MsSUFBQTtBQXpzQ1ksb0JBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNsYXNzIFV0aWwge1xyXG5cclxuICAgIC8qKlxyXG4gKiDlsIblrZfnrKbkuLLovazmjaLkuLrkuIDnu7TmlbDnu4RcclxuICogQHBhcmFtIHN0ciDnm67moIflrZfnrKbkuLJcclxuICogQHBhcmFtIHNlcCDliIbpmpTnrKYg6buY6K6k5Li6XCIsXCJcclxuICovXHJcbiAgICBzdGF0aWMgY29udmVydFN0clRvQXJyPFQgPSBhbnk+KHN0cjogc3RyaW5nLCBzZXAgPSBcIixcIikge1xyXG4gICAgICAgIGlmICghc3RyKSByZXR1cm4gW107XHJcbiAgICAgICAgbGV0IGFyciA9IFtdO1xyXG4gICAgICAgIGxldCBzdWJTdHJBcnIgPSBzdHIuc3BsaXQoc2VwKTtcclxuICAgICAgICBzdWJTdHJBcnIuZm9yRWFjaChzdWJTdHIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoTnVtYmVyKHN1YlN0cikgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgYXJyLnB1c2goc3ViU3RyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKHN1YlN0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBhcnIgYXMgVFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0V29ybGRQb3NpdGlvbihub2RlOiBjYy5Ob2RlKTogY2MuVmVjMiB7XHJcbiAgICAgICAgaWYgKCFub2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwYXJlbnQgPSBub2RlLmdldFBhcmVudCgpO1xyXG4gICAgICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0V29ybGRTaXplKG5vZGU6IGNjLk5vZGUpOiBjYy5TaXplIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IG5vZGUuZ2V0Q29udGVudFNpemUoKTtcclxuICAgICAgICBzaXplLmhlaWdodCAqPSBub2RlLnNjYWxlO1xyXG4gICAgICAgIHNpemUud2lkdGggKj0gbm9kZS5zY2FsZTtcclxuICAgICAgICBsZXQgcGFyZW50ID0gbm9kZS5nZXRQYXJlbnQoKTtcclxuICAgICAgICB3aGlsZSAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHNpemUuaGVpZ2h0ICo9IHBhcmVudC5zY2FsZTtcclxuICAgICAgICAgICAgc2l6ZS53aWR0aCAqPSBwYXJlbnQuc2NhbGU7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRXb3JsZFNpemUobm9kZTogY2MuTm9kZSwgc2l6ZTogY2MuU2l6ZSk6IHZvaWQge1xyXG4gICAgICAgIG5vZGUuc2V0Q29udGVudFNpemUoc2l6ZSk7XHJcbiAgICAgICAgc2l6ZS5oZWlnaHQgLz0gbm9kZS5zY2FsZTtcclxuICAgICAgICBzaXplLndpZHRoIC89IG5vZGUuc2NhbGU7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IG5vZGUuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgd2hpbGUgKHBhcmVudCkge1xyXG4gICAgICAgICAgICBub2RlLndpZHRoIC89IHBhcmVudC5zY2FsZTtcclxuICAgICAgICAgICAgbm9kZS5oZWlnaHQgLz0gcGFyZW50LnNjYWxlO1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0V29ybGRTY2FsZShub2RlOiBjYy5Ob2RlKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgc2NhbGUgPSBub2RlLnNjYWxlO1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBub2RlLmdldFBhcmVudCgpO1xyXG4gICAgICAgIHdoaWxlIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgc2NhbGUgKj0gcGFyZW50LnNjYWxlO1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFdvcmxkUG9zaXRpb24obm9kZTogY2MuTm9kZSwgd29ybGRQb3M6IGNjLlZlYzIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIW5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF3b3JsZFBvcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGFyZW50ID0gbm9kZS5nZXRQYXJlbnQoKVxyXG4gICAgICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24od29ybGRQb3MpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsb2NhbFBvcyA9IHBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRXb3JsZFJvdGF0aW9uKG5vZGU6IGNjLk5vZGUpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCByb3QgPSBub2RlLnJvdGF0aW9uO1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBub2RlLmdldFBhcmVudCgpO1xyXG4gICAgICAgIHdoaWxlIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgcm90ICs9IHBhcmVudC5yb3RhdGlvbjtcclxuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm90O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0V29ybGRSb3RhdGlvbldpdGhSb3QocGFyZW50OiBjYy5Ob2RlLCBsb2NhbFJvdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgcm90ID0gbG9jYWxSb3Q7XHJcbiAgICAgICAgd2hpbGUgKHBhcmVudCkge1xyXG4gICAgICAgICAgICByb3QgKz0gcGFyZW50LnJvdGF0aW9uO1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRMb2NhbFJvdGF0aW9uKHRhcmdldE5vZGU6IGNjLk5vZGUsIHdvcmxkUm90OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCByb3QgPSB3b3JsZFJvdDtcclxuICAgICAgICBsZXQgcGFyZW50ID0gdGFyZ2V0Tm9kZS5nZXRQYXJlbnQoKTtcclxuICAgICAgICB3aGlsZSAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJvdCAtPSBwYXJlbnQucm90YXRpb247XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFdvcmxkUm90YXRpb24obm9kZTogY2MuTm9kZSwgd29ybGRSb3Q6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIG5vZGUucm90YXRpb24gPSB3b3JsZFJvdDtcclxuICAgICAgICBsZXQgcGFyZW50ID0gbm9kZS5nZXRQYXJlbnQoKTtcclxuICAgICAgICB3aGlsZSAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIG5vZGUucm90YXRpb24gLT0gcGFyZW50LnJvdGF0aW9uO1xyXG4gICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGlzdGFuY2UoYTogY2MuVmVjMiwgYjogY2MuVmVjMik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKCFhIHx8ICFiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZlYyA9IG5ldyBjYy5WZWMyKGEueCAtIGIueCwgYS55IC0gYi55KTtcclxuICAgICAgICByZXR1cm4gdmVjLm1hZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdmVjKHN0YXJ0OiBjYy5Ob2RlLCBlbmQ6IGNjLk5vZGUpOiBjYy5WZWMyIHtcclxuICAgICAgICBpZiAoIXN0YXJ0IHx8ICFlbmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYSA9IHRoaXMuZ2V0V29ybGRQb3NpdGlvbihzdGFydCk7XHJcbiAgICAgICAgbGV0IGIgPSB0aGlzLmdldFdvcmxkUG9zaXRpb24oZW5kKTtcclxuICAgICAgICByZXR1cm4gbmV3IGNjLlZlYzIoYi54IC0gYS54LCBiLnkgLSBhLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6KeS5bqm6L2s5ZCR6YePXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlZ3JlZXNUb1ZlY3RvcnMoZGVncmVlKSB7XHJcbiAgICAgICAgbGV0IHJhZGlhbiA9IGNjLm1pc2MuZGVncmVlc1RvUmFkaWFucyhkZWdyZWUpO1xyXG4gICAgICAgIGxldCBjb21WZWMgPSBjYy52MigwLCAxKTtcclxuICAgICAgICBsZXQgZGlyVmVjID0gY29tVmVjLnJvdGF0ZSgtcmFkaWFuKTtcclxuICAgICAgICByZXR1cm4gZGlyVmVjO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5ZCR6YeP6L2s6KeS5bqmXHJcbiAgICBwdWJsaWMgc3RhdGljIHZlY3RvcnNUb0RlZ3Jlc3MoZGlyVmVjOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgbGV0IGNvbVZlYyA9IGNjLnYyKDAsIDEpO1xyXG4gICAgICAgIGxldCByYWRpYW4gPSBkaXJWZWMubm9ybWFsaXplKCkuc2lnbkFuZ2xlKGNvbVZlYyk7XHJcbiAgICAgICAgbGV0IGRlZ3JlZSA9IGNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyhyYWRpYW4pO1xyXG4gICAgICAgIHJldHVybiBkZWdyZWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5ZCR6YeP6L2s5byn5bqmICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHZlY3RvclRvUmFkaWFuKGRpclZlYzogY2MuVmVjMikge1xyXG4gICAgICAgIHJldHVybiBkaXJWZWMubm9ybWFsaXplKCkuc2lnbkFuZ2xlKGNjLnYyKDAsIDEpKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+axguS4pOWQkemHj+WkueinklxyXG4gICAgcHVibGljIHN0YXRpYyBnZXREZWdyZWVCeVZlYyh2ZWMxOiBjYy5WZWMyLCB2ZWMyOiBjYy5WZWMyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgcmFkaWFuID0gdmVjMS5ub3JtYWxpemUoKS5zaWduQW5nbGUodmVjMi5ub3JtYWxpemUoKSk7XHJcbiAgICAgICAgbGV0IGRlZ3JlZSA9IGNjLm1pc2MucmFkaWFuc1RvRGVncmVlcyhyYWRpYW4pO1xyXG4gICAgICAgIGlmIChkZWdyZWUgPCAtOTApIHtcclxuICAgICAgICAgICAgZGVncmVlID0gLTkwIC0gKDkwICsgZGVncmVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRlZ3JlZSA+IDkwKSB7XHJcbiAgICAgICAgICAgIGRlZ3JlZSA9IDE4MCAtIGRlZ3JlZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlZ3JlZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGEg6LW354K5XHJcbiAgICAgKiBAcGFyYW0gYiDnu4jngrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB2ZWN0b3IoYTogY2MuVmVjMiwgYjogY2MuVmVjMik6IGNjLlZlYzIge1xyXG4gICAgICAgIGlmICghYSB8fCAhYikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2MuVmVjMi5VUDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZlY3RvciA9IG5ldyBjYy5WZWMyKCk7XHJcbiAgICAgICAgdmVjdG9yLnggPSBiLnggLSBhLng7XHJcbiAgICAgICAgdmVjdG9yLnkgPSBiLnkgLSBhLnk7XHJcblxyXG4gICAgICAgIHJldHVybiB2ZWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSB4TWluID0gMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgeU1pbiA9IDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHhNYXggPSAzMTIwO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSB5TWF4ID0gMzEyMDtcclxuXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIGNsYW1wUG9zaXRpb24ocG9zaXRpb246IGNjLlZlYzIsIHJhZGl1czogbnVtYmVyKTogY2MuVmVjMiB7XHJcbiAgICAvLyAgICAgbGV0IHggPSBjYy5taXNjLmNsYW1wZihwb3NpdGlvbi54LCB0aGlzLnhNaW4gKyByYWRpdXMsIHRoaXMueE1heCAtIHJhZGl1cyk7XHJcbiAgICAvLyAgICAgbGV0IHkgPSBjYy5taXNjLmNsYW1wZihwb3NpdGlvbi55LCB0aGlzLnlNaW4gKyByYWRpdXMsIHRoaXMueU1heCAtIHJhZGl1cyk7XHJcbiAgICAvLyAgICAgcmV0dXJuIGNjLnYyKHgsIHkpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2FjdWxhdGVSYWRpdXMoYzogbnVtYmVyLCBtaW5SYWRpdXM6IG51bWJlciwgbWF4UmFkaXVzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCByID0gYyAvICgyICogTWF0aC5QSSk7XHJcbiAgICAgICAgcmV0dXJuIGNjLm1pc2MuY2xhbXBmKHIsIG1pblJhZGl1cywgbWF4UmFkaXVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWPluW+l+W8gOWni+WAvOWSjOe7k+adn+WAvOS5i+mXtOeahOaPkuWAvFxyXG4gICAgICogQHBhcmFtIG51bSAwLTEg6KGo56S65LuO5byA5aeL5YC85Yiw57uT5p2f5YC85LmL6Ze055qE5q+U5L6LXHJcbiAgICAgKiBAcGFyYW0gc3RhcnRWYWx1ZSDlvIDlp4vlgLxcclxuICAgICAqIEBwYXJhbSBlbmRWYWx1ZSDnu5PmnZ/lgLxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBsZXJwKG51bTogbnVtYmVyLCBzdGFydFZhbHVlOiBudW1iZXIgfCBjYy5WZWMyIHwgY2MuQ29sb3IsIGVuZFZhbHVlOiBudW1iZXIgfCBjYy5WZWMyIHwgY2MuQ29sb3IpOiBudW1iZXIgfCBjYy5WZWMyIHwgY2MuQ29sb3Ige1xyXG4gICAgICAgIG51bSA9IGNjLm1pc2MuY2xhbXBmKG51bSwgMCwgMSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzdGFydFZhbHVlID09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGVuZFZhbHVlID09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHN0YXJ0VmFsdWUgKyAoZW5kVmFsdWUgLSBzdGFydFZhbHVlKSAqIG51bTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKHN0YXJ0VmFsdWUgaW5zdGFuY2VvZiBjYy5WZWMyIHx8IHN0YXJ0VmFsdWUgaW5zdGFuY2VvZiBjYy5WZWMzKSAmJiAoZW5kVmFsdWUgaW5zdGFuY2VvZiBjYy5WZWMyIHx8IGVuZFZhbHVlIGluc3RhbmNlb2YgY2MuVmVjMykpIHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gc3RhcnRWYWx1ZSBhcyBjYy5WZWMyO1xyXG4gICAgICAgICAgICBsZXQgZW5kID0gZW5kVmFsdWUgYXMgY2MuVmVjMjtcclxuICAgICAgICAgICAgbGV0IHggPSB0aGlzLmxlcnAobnVtLCBzdGFydC54LCBlbmQueCkgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgeSA9IHRoaXMubGVycChudW0sIHN0YXJ0LnksIGVuZC55KSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBjYy52Mih4LCB5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhcnRWYWx1ZSBpbnN0YW5jZW9mIGNjLkNvbG9yICYmIGVuZFZhbHVlIGluc3RhbmNlb2YgY2MuQ29sb3IpIHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gc3RhcnRWYWx1ZSBhcyBjYy5Db2xvcjtcclxuICAgICAgICAgICAgbGV0IGVuZCA9IGVuZFZhbHVlIGFzIGNjLkNvbG9yO1xyXG4gICAgICAgICAgICBsZXQgciA9IHRoaXMubGVycChudW0sIHN0YXJ0LmdldFIoKSwgZW5kLmdldFIoKSkgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgZyA9IHRoaXMubGVycChudW0sIHN0YXJ0LmdldEcoKSwgZW5kLmdldEcoKSkgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgYiA9IHRoaXMubGVycChudW0sIHN0YXJ0LmdldEIoKSwgZW5kLmdldEIoKSkgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgYSA9IHRoaXMubGVycChudW0sIHN0YXJ0LmdldEEoKSwgZW5kLmdldEEoKSkgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gY2MuY29sb3IociwgZywgYiwgYSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKG1pbiA+IG1heCkge1xyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IG1pbjtcclxuICAgICAgICAgICAgbWluID0gbWF4O1xyXG4gICAgICAgICAgICBtYXggPSB0ZW1wO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UmFuZG9tRmxvYXQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAobWluID4gbWF4KSB7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0gbWluO1xyXG4gICAgICAgICAgICBtaW4gPSBtYXg7XHJcbiAgICAgICAgICAgIG1heCA9IHRlbXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDotoXplb/lrZfnrKbnlKjigJkuLi7igJjmm7/ku6NcclxuICAgICAqIEBwYXJhbSBzdHIgXHJcbiAgICAgKiBAcGFyYW0gbWF4TGVuIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc3ViU3RyaW5nKHN0cjogc3RyaW5nLCBtYXhMZW46IG51bWJlciA9IDEwLCBzdWZmaXggPSAnLi4uJykge1xyXG4gICAgICAgIGxldCBsZW4gPSB0aGlzLmdldExlbmd0aChzdHIpO1xyXG5cclxuICAgICAgICBsZXQgbCA9IDAsIGkgPSAwO1xyXG4gICAgICAgIGxldCBhID0gc3RyLnNwbGl0KFwiXCIpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhW2ldLmNoYXJDb2RlQXQoMCkgPCAyOTkpIHtcclxuICAgICAgICAgICAgICAgIGwrKztcclxuICAgICAgICAgICAgICAgIGlmIChsID4gbWF4TGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbCA9IGwgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbCArPSAyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGwgPiBtYXhMZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBsID0gbCAtIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgaSkgKyAobGVuID4gbWF4TGVuID8gc3VmZml4IDogJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRMZW5ndGgoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgbl9zdHIgPSBuZXcgU3RyaW5nKHN0cik7XHJcbiAgICAgICAgbGV0IGJ5dGVzQ291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBuID0gbl9zdHIubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjID0gbl9zdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgaWYgKChjID49IDB4MDAwMSAmJiBjIDw9IDB4MDA3ZSkgfHwgKDB4ZmY2MCA8PSBjICYmIGMgPD0gMHhmZjlmKSkge1xyXG4gICAgICAgICAgICAgICAgYnl0ZXNDb3VudCArPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnl0ZXNDb3VudCArPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBieXRlc0NvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YiG6ZqU56ym5YiG5Ymy5a2X56ym5LiyXHJcbiAgICAgKiBAcGFyYW0gc3RyIFxyXG4gICAgICogQHBhcmFtIHNlcCBcclxuICAgICAqIEBwYXJhbSBsZW4gXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmb3JtYXRTdHJpbmcoc3RyOiBzdHJpbmcgfCBudW1iZXIsIHNlcDogc3RyaW5nID0gJywnLCBsZW46IG51bWJlciA9IDMpIHtcclxuICAgICAgICBzdHIgPSBzdHIudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgc3RyTGVuID0gc3RyLmxlbmd0aDtcclxuICAgICAgICBsZXQgbmV3U3RyID0gc3RyO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBzdHJMZW4gLSBsZW47IGkgPiAwOyBpIC09IGxlbikge1xyXG4gICAgICAgICAgICBsZXQgbGVmdCA9IHN0ci5zdWJzdHJpbmcoMCwgaSk7XHJcbiAgICAgICAgICAgIGxldCByaWdodCA9IHN0ci5zdWJzdHJpbmcoaSk7XHJcbiAgICAgICAgICAgIG5ld1N0ciA9IGxlZnQgKyBzZXAgKyByaWdodDtcclxuICAgICAgICAgICAgc3RyTGVuID0gc3RyLmxlbmd0aDtcclxuICAgICAgICAgICAgc3RyID0gbmV3U3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3U3RyXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5a2X56ym5Liy5YiG5Ymy5Li65pWw57uEICovXHJcbiAgICBzdGF0aWMgc3RyaW5nVG9BcnJheShzdHIsIHNlcCA9ICc7Jyk6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIGlmICghc3RyKSByZXR1cm4gW107XHJcbiAgICAgICAgbGV0IG5ld19saXN0ID0gW107XHJcbiAgICAgICAgbGV0IGxpc3QgPSBzdHIucmVwbGFjZSgnICcsICcnKS5zcGxpdChzZXApO1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoa2V5ICE9IG51bGwgJiYga2V5ICE9PSB1bmRlZmluZWQgJiYga2V5ICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKE51bWJlcihrZXkpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleSA9IE51bWJlcihrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV3X2xpc3QucHVzaChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld19saXN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWIoOmZpOWtl+espuS4suW3puWPs+epuuagvCAqL1xyXG4gICAgc3RhdGljIHRyaW0oc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHJldHVybiBzdHI7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXlxccyopfChcXHMqJCkvZywgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDovazmjaLnp5LmlbDml7bpl7TkuLrmoIflh4bmoLflvI9cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0VGltZVRvU3RhbmRTdHlsZShzZWNvbmQ6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHNlYyA9IHNlY29uZCAlIDYwO1xyXG4gICAgICAgIHNlY29uZCAtPSBzZWM7XHJcbiAgICAgICAgbGV0IG1pbiA9IHNlY29uZCAvIDYwO1xyXG4gICAgICAgIGxldCBtaW5OID0gbWluICUgNjA7XHJcbiAgICAgICAgbWluIC09IG1pbk47XHJcbiAgICAgICAgbGV0IGhvdXIgPSBtaW4gLyA2MDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChob3VyID4gMCA/IChob3VyICsgXCI6XCIpIDogXCJcIikgK1xyXG4gICAgICAgICAgICAobWluTiA+IDAgPyAobWluTiA+PSAxMCA/IG1pbk4gOiBcIjBcIiArIG1pbk4pIDogXCIwMFwiKSArIFwiOlwiICtcclxuICAgICAgICAgICAgKHNlYyA+IDAgPyAoc2VjID49IDEwID8gc2VjIDogXCIwXCIgKyBzZWMpIDogXCIwMFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlsIbnp5LovazkuLogW+aXtu+8jOWIhiznp5JdICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRUaW1lVG9TdGFuZFN0eWxlMihzZWNvbmQ6IG51bWJlcik6IG51bWJlcltdIHtcclxuICAgICAgICBsZXQgaG91ciA9IHNlY29uZCA+PSAzNjAwID8gTWF0aC5mbG9vcihzZWNvbmQgLyAzNjAwKSA6IDA7XHJcbiAgICAgICAgc2Vjb25kIC09IGhvdXIgKiAzNjAwO1xyXG4gICAgICAgIGxldCBtaW4gPSBzZWNvbmQgPj0gNjAgPyBNYXRoLmZsb29yKHNlY29uZCAvIDYwKSA6IDA7XHJcbiAgICAgICAgc2Vjb25kIC09IG1pbiAqIDYwO1xyXG4gICAgICAgIGxldCBzZWMgPSBzZWNvbmQ7XHJcbiAgICAgICAgcmV0dXJuIFtob3VyLCBtaW4sIHNlY107XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZm9ybWF0RGF0YSh0aW1lOiBzdHJpbmcgfCBudW1iZXIgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCF0aW1lKSB0aW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGltZSlcclxuICAgICAgICBjb25zdCB5ID0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICAgICAgbGV0IG06IHN0cmluZyB8IG51bWJlciA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICAgICAgICBtID0gbSA8IDEwID8gYDAke1N0cmluZyhtKX1gIDogbVxyXG4gICAgICAgIGxldCBkOiBzdHJpbmcgfCBudW1iZXIgPSBkYXRlLmdldERhdGUoKVxyXG4gICAgICAgIGQgPSBkIDwgMTAgPyBgMCR7U3RyaW5nKGQpfWAgOiBkXHJcbiAgICAgICAgbGV0IGg6IHN0cmluZyB8IG51bWJlciA9IGRhdGUuZ2V0SG91cnMoKVxyXG4gICAgICAgIGggPSBoIDwgMTAgPyBgMCR7U3RyaW5nKGgpfWAgOiBoXHJcbiAgICAgICAgbGV0IG1pbnV0ZTogc3RyaW5nIHwgbnVtYmVyID0gZGF0ZS5nZXRNaW51dGVzKClcclxuICAgICAgICBtaW51dGUgPSBtaW51dGUgPCAxMCA/IGAwJHtTdHJpbmcobWludXRlKX1gIDogbWludXRlXHJcbiAgICAgICAgbGV0IHNlY29uZDogc3RyaW5nIHwgbnVtYmVyID0gZGF0ZS5nZXRTZWNvbmRzKClcclxuICAgICAgICBzZWNvbmQgPSBzZWNvbmQgPCAxMCA/IGAwJHtTdHJpbmcoc2Vjb25kKX1gIDogc2Vjb25kXHJcbiAgICAgICAgLy8gcmV0dXJuIGAke1N0cmluZyh5KX0tJHtTdHJpbmcobSl9LSR7U3RyaW5nKGQpfSAgICR7U3RyaW5nKGgpfToke1N0cmluZyhcclxuICAgICAgICAvLyAgICAgbWludXRlXHJcbiAgICAgICAgLy8gKX06JHtTdHJpbmcoc2Vjb25kKX1gXHJcbiAgICAgICAgcmV0dXJuIGAke1N0cmluZyh5KX0vJHtTdHJpbmcobSl9LyR7U3RyaW5nKGQpfSAke1N0cmluZyhoKX06JHtTdHJpbmcoXHJcbiAgICAgICAgICAgIG1pbnV0ZVxyXG4gICAgICAgICl9YFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirmo4Dmn6XmlbDnu4TkuK3mmK/lkKbmnInnm7jlkIx2ZWMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tTYW1lVmVjKHZlY0FycjogY2MuVmVjMltdLCB2ZWM6IGNjLlZlYzIpIHtcclxuICAgICAgICBpZiAodmVjQXJyLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2ZWNBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHZlY0FycltpXS54ID09IHZlYy54ICYmIHZlY0FycltpXS55ID09IHZlYy55KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5LuO5pWw57uE5Lit6ZqP5py65Y+W5YC8ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFJhbmRvbVZhbHVlPFQ+KGFycjogVFtdKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGFycltpbmRleF0sIGtleTogaW5kZXggfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipjb3B55pWw57uEICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvcHlBcnI8VD4oYXJyOiBUW10pOiBUW10ge1xyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbmV3QXJyID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbmV3QXJyLnB1c2goYXJyW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld0FycjtcclxuICAgIH1cclxuXHJcbiAgICAvKirpmo/mnLrmiZPkubHmlbDnu4Tpobrluo8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmFuZG9tQXJyT3JkZXIoYXJyKSB7XHJcbiAgICAgICAgbGV0IGkgPSBhcnIubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChpKSB7XHJcbiAgICAgICAgICAgIGxldCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaS0tKTtcclxuICAgICAgICAgICAgW2FycltqXSwgYXJyW2ldXSA9IFthcnJbaV0sIGFycltqXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6I635Y+W5Lik5pWw57uE55qE5LiN5ZCM5YC8ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEFyckRpZmZlcmVuY2UoYXJyMSwgYXJyMik6IGFueVtdIHtcclxuICAgICAgICByZXR1cm4gYXJyMS5jb25jYXQoYXJyMikuZmlsdGVyKGZ1bmN0aW9uICh2LCBpLCBhcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFyci5pbmRleE9mKHYpID09PSBhcnIubGFzdEluZGV4T2Yodik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6I635Y+W5Lik5pWw57uE55u45ZCM5YC8ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEFyclNhbWUoYXJyMSwgYXJyMikge1xyXG4gICAgICAgIHJldHVybiBhcnIxLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgbGV0IGlkTGlzdCA9IGFycjIubWFwKHZhbCA9PiB2YWwubmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuIGlkTGlzdC5pbmRleE9mKGl0ZW0ubmFtZSkgIT0gLTFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPluS4pOaVsOe7hOebuOWQjOWAvCAqL1xyXG4gICAgc3RhdGljIGdldENvbW1vbkVsZW1lbnRzPFQ+KGFycjE6IFRbXSwgYXJyMjogVFtdKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gYXJyMS5maWx0ZXIoaXRlbSA9PiBhcnIyLmluY2x1ZGVzKGl0ZW0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirpmZDliLblj5blgLzojIPlm7QgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xhbXBWYWx1ZSh2YWw6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKG1pbiA9PSBtYXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1pbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1pbiA+IG1heCkge1xyXG4gICAgICAgICAgICBsZXQgdGVtcCA9IG1pbjtcclxuICAgICAgICAgICAgbWluID0gbWF4O1xyXG4gICAgICAgICAgICBtYXggPSB0ZW1wO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsIDwgbWluID8gbWluIDogdmFsID4gbWF4ID8gbWF4IDogdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuajgOafpXZlY+aVsOe7hOS4reaYr+WQpuacieWAvOS4jnZlY+ebuOetiSDkuI3ogIPomZHpobrluo8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tTYW1lVmVjTm9PcmRlcih2ZWNBcnI6IGNjLlZlYzJbXSwgdmVjOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgaWYgKHZlY0Fyci5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVjQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICgodmVjQXJyW2ldLnggPT0gdmVjLnggJiYgdmVjQXJyW2ldLnkgPT0gdmVjLnkpIHx8ICh2ZWNBcnJbaV0ueCA9PSB2ZWMueSAmJiB2ZWNBcnJbaV0ueSA9PSB2ZWMueCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmo4Dmn6XkuKTkuKrlkJHph4/mmK/lkKbnm7jnrYkgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tWZWNJc1NhbWUodmVjMTogY2MuVmVjMiwgdmVjMjogY2MuVmVjMikge1xyXG4gICAgICAgIHJldHVybiB2ZWMxLnggPT0gdmVjMi54ICYmIHZlYzEueSA9PSB2ZWMyLnk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAhI2VuIFRlc3QgbGluZSBhbmQgbGluZVxyXG4gICAgICogISN6aCDmtYvor5Xnur/mrrXkuI7nur/mrrXmmK/lkKbnm7jkuqRcclxuICAgICAqIEBtZXRob2QgbGluZUxpbmVcclxuICAgICAqIEBwYXJhbSB7VmVjMn0gYTEgLSBUaGUgc3RhcnQgcG9pbnQgb2YgdGhlIGZpcnN0IGxpbmVcclxuICAgICAqIEBwYXJhbSB7VmVjMn0gYTIgLSBUaGUgZW5kIHBvaW50IG9mIHRoZSBmaXJzdCBsaW5lXHJcbiAgICAgKiBAcGFyYW0ge1ZlYzJ9IGIxIC0gVGhlIHN0YXJ0IHBvaW50IG9mIHRoZSBzZWNvbmQgbGluZVxyXG4gICAgICogQHBhcmFtIHtWZWMyfSBiMiAtIFRoZSBlbmQgcG9pbnQgb2YgdGhlIHNlY29uZCBsaW5lXHJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNoZWNrTGluZUludGVyc2VjdChhMTogY2MuVmVjMiwgYTI6IGNjLlZlYzIsIGIxOiBjYy5WZWMyLCBiMjogY2MuVmVjMikge1xyXG5cclxuICAgICAgICB2YXIgdWFfdCA9IChiMi54IC0gYjEueCkgKiAoYTEueSAtIGIxLnkpIC0gKGIyLnkgLSBiMS55KSAqIChhMS54IC0gYjEueCk7XHJcbiAgICAgICAgdmFyIHViX3QgPSAoYTIueCAtIGExLngpICogKGExLnkgLSBiMS55KSAtIChhMi55IC0gYTEueSkgKiAoYTEueCAtIGIxLngpO1xyXG4gICAgICAgIHZhciB1X2IgPSAoYjIueSAtIGIxLnkpICogKGEyLnggLSBhMS54KSAtIChiMi54IC0gYjEueCkgKiAoYTIueSAtIGExLnkpO1xyXG5cclxuICAgICAgICBpZiAodV9iICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHZhciB1YSA9IHVhX3QgLyB1X2I7XHJcbiAgICAgICAgICAgIHZhciB1YiA9IHViX3QgLyB1X2I7XHJcblxyXG4gICAgICAgICAgICBpZiAoMCA8PSB1YSAmJiB1YSA8PSAxICYmIDAgPD0gdWIgJiYgdWIgPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlsIblrZfnrKbkuLLmlbDnu4TovazkuLpudW1iZXLmlbDnu4QgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hhbmdlU3RyQXJyVG9OdW1BcnIoc3RyQXJyOiBzdHJpbmdbXSk6IG51bWJlcltdIHtcclxuICAgICAgICBsZXQgbnVtQXJyID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbnVtQXJyLnB1c2goTnVtYmVyKHN0ckFycltpXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVtQXJyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPluS4gOS4qm51beaVsOe7hOS4reeahOacgOWkp+WAvCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRNYXhOdW1Jbk51bUFycihhcnI6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gYXJyLnNvcnQoKS5yZXZlcnNlKClbMF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5YWL6ZqG5LiA5Liq5a2X56ym5LiyICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvcHlTdHIoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBuZXdTdHIgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5ld1N0ciArPSBzdHJbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdTdHI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAqIOmBjeWOhuaJp+ihjC8v6YGN5Y6G5p+Q5Liq6IqC54K555qE5omA5pyJ5a2Q6IqC54K55YyF5ous6Ieq5bex77yM5bm25Y+v5omn6KGM6K6+572u55qE5pON5L2cXHJcbiAqIEBwYXJhbSB0YXJOb2RlIOmBjeWOhueahOaguee7k+eCuVxyXG4gKiBAcGFyYW0gZXhlY3V0ZSDmr4/kuKroioLngrnmiafooYznmoTmk43kvZxcclxuICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFRyYXZlcnNhbEV4ZWN1dGUodGFyTm9kZTogY2MuTm9kZSwgZXhlY3V0ZTogKHNlbGZOb2RlOiBjYy5Ob2RlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgZXhlY3V0ZSh0YXJOb2RlKTtcclxuICAgICAgICB0YXJOb2RlLmNoaWxkcmVuLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuVHJhdmVyc2FsRXhlY3V0ZSh2YWx1ZSwgZXhlY3V0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5qOA5p+l5b2T5YmN5YC85piv5ZCm5Zyo55uu5qCH5YC85YWB6K646K+v5beu6IyD5Zu05YaFICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNoZWNrVmFsdWVSYW5kb20odmFsdWU6IG51bWJlciwgdGFyVmFsOiBudW1iZXIsIGVycm9yOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPj0gdGFyVmFsIC0gZXJyb3IgJiYgdmFsdWUgPD0gdGFyVmFsICsgZXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yik5pat5Lik5Liq5aSa6L655b2i56Kw5pKe5Zmo5piv5ZCm55u45LqkICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHBvbHlnb25Qb2x5Z29uVGVzdChwb2x5Z29uMTogY2MuUG9seWdvbkNvbGxpZGVyLCBwb2x5Z29uMjogY2MuUG9seWdvbkNvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKCFwb2x5Z29uMSB8fCAhcG9seWdvbjIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXBvbHlnb24xLm5vZGUuYWN0aXZlIHx8ICFwb2x5Z29uMi5ub2RlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwb2ludHMxOiBjYy5WZWMyW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvbHlnb24xLnBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gcG9seWdvbjEubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9seWdvbjEucG9pbnRzW2ldKTtcclxuICAgICAgICAgICAgcG9pbnRzMS5wdXNoKHBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwb2ludHMyOiBjYy5WZWMyW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvbHlnb24yLnBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gcG9seWdvbjIubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9seWdvbjIucG9pbnRzW2ldKTtcclxuICAgICAgICAgICAgcG9pbnRzMi5wdXNoKHBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYy5JbnRlcnNlY3Rpb24ucG9seWdvblBvbHlnb24ocG9pbnRzMSwgcG9pbnRzMik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yik5pat5Lik5Liq5aSa6L655b2i56Kw5pKe5Zmo5piv5ZCm5pyJ5o6l6KemIOmDqOWIhuebuOS6pOi/lOWbnnRydWXvvIzlrozlhajljIXlkKvvvIzlrozlhajml6DmjqXop6bov5Tlm55mYWxzZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGxpbmVQb2x5Z29uVGVzdChwb2x5Z29uMTogY2MuUG9seWdvbkNvbGxpZGVyLCBwb2x5Z29uMjogY2MuUG9seWdvbkNvbGxpZGVyKSB7XHJcbiAgICAgICAgaWYgKCFwb2x5Z29uMSB8fCAhcG9seWdvbjIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXBvbHlnb24xLm5vZGUuYWN0aXZlIHx8ICFwb2x5Z29uMi5ub2RlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9seWdvbjIucG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB2ZWMgPSBwb2x5Z29uMi5wb2ludHNbaV07XHJcbiAgICAgICAgICAgIGxldCBhMSA9IHBvbHlnb24yLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHZlYyk7XHJcbiAgICAgICAgICAgIGExID0gcG9seWdvbjEubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihhMSk7XHJcbiAgICAgICAgICAgIGxldCBhMiA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChpIDwgcG9seWdvbjIucG9pbnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIGEyID0gcG9seWdvbjIubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9seWdvbjIucG9pbnRzW2kgKyAxXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhMiA9IHBvbHlnb24yLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHBvbHlnb24yLnBvaW50c1swXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYTIgPSBwb2x5Z29uMS5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGEyKTtcclxuICAgICAgICAgICAgbGV0IGlzQ29sbGlkZXIgPSBjYy5JbnRlcnNlY3Rpb24ubGluZVBvbHlnb24oYTEsIGEyLCBwb2x5Z29uMS5wb2ludHMpO1xyXG4gICAgICAgICAgICBpZiAoaXNDb2xsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKua1i+ivleS4gOS4quS4lueVjOWdkOagh+ezu+eahOeCueaYr+WQpuWcqOWkmui+ueW9oueisOaSnuWZqOWGhSAqL1xyXG4gICAgc3RhdGljIHBvbHlnb25IaXRUZXN0KHBvbHlDb2w6IGNjLlBvbHlnb25Db2xsaWRlciwgdG91Y2hQb3M6IGNjLlZlYzIpIHtcclxuICAgICAgICB0b3VjaFBvcyA9IHBvbHlDb2wubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0b3VjaFBvcyk7XHJcbiAgICAgICAgcmV0dXJuIGNjLkludGVyc2VjdGlvbi5wb2ludEluUG9seWdvbih0b3VjaFBvcywgcG9seUNvbC5wb2ludHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWIpOaWreS4pOS4que6v+auteaYr+WQpuebuOS6pO+8jOWmguaenOebuOS6pCDov5Tlm57kuKTkuKrnur/mrrXnmoTkuqTngrlcclxuICAgICAqIEBwYXJhbSB7VmVjMn0gYSAtIFRoZSBzdGFydCBwb2ludCBvZiB0aGUgZmlyc3QgbGluZVxyXG4gICAgICogQHBhcmFtIHtWZWMyfSBiIC0gVGhlIGVuZCBwb2ludCBvZiB0aGUgZmlyc3QgbGluZVxyXG4gICAgICogQHBhcmFtIHtWZWMyfSBjIC0gVGhlIHN0YXJ0IHBvaW50IG9mIHRoZSBzZWNvbmQgbGluZVxyXG4gICAgICogQHBhcmFtIHtWZWMyfSBkIC0gVGhlIGVuZCBwb2ludCBvZiB0aGUgc2Vjb25kIGxpbmVcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZWdtZW50c0ludHIoYTogY2MuVmVjMiwgYjogY2MuVmVjMiwgYzogY2MuVmVjMiwgZDogY2MuVmVjMikge1xyXG5cclxuICAgICAgICAvKiogMSDop6Pnur/mgKfmlrnnqIvnu4QsIOaxgue6v+auteS6pOeCuS4gKiovXHJcbiAgICAgICAgLy8g5aaC5p6c5YiG5q+N5Li6MCDliJnlubPooYzmiJblhbHnur8sIOS4jeebuOS6pCAgXHJcbiAgICAgICAgdmFyIGRlbm9taW5hdG9yID0gKGIueSAtIGEueSkgKiAoZC54IC0gYy54KSAtIChhLnggLSBiLngpICogKGMueSAtIGQueSk7XHJcbiAgICAgICAgaWYgKGRlbm9taW5hdG9yID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g57q/5q615omA5Zyo55u057q/55qE5Lqk54K55Z2Q5qCHICh4ICwgeSkgICAgICBcclxuICAgICAgICB2YXIgeCA9ICgoYi54IC0gYS54KSAqIChkLnggLSBjLngpICogKGMueSAtIGEueSlcclxuICAgICAgICAgICAgKyAoYi55IC0gYS55KSAqIChkLnggLSBjLngpICogYS54XHJcbiAgICAgICAgICAgIC0gKGQueSAtIGMueSkgKiAoYi54IC0gYS54KSAqIGMueCkgLyBkZW5vbWluYXRvcjtcclxuICAgICAgICB2YXIgeSA9IC0oKGIueSAtIGEueSkgKiAoZC55IC0gYy55KSAqIChjLnggLSBhLngpXHJcbiAgICAgICAgICAgICsgKGIueCAtIGEueCkgKiAoZC55IC0gYy55KSAqIGEueVxyXG4gICAgICAgICAgICAtIChkLnggLSBjLngpICogKGIueSAtIGEueSkgKiBjLnkpIC8gZGVub21pbmF0b3I7XHJcblxyXG4gICAgICAgIC8qKiAyIOWIpOaWreS6pOeCueaYr+WQpuWcqOS4pOadoee6v+auteS4iiAqKi9cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIC8vIOS6pOeCueWcqOe6v+autTHkuIogIFxyXG4gICAgICAgICAgICAoeCAtIGEueCkgKiAoeCAtIGIueCkgPD0gMCAmJiAoeSAtIGEueSkgKiAoeSAtIGIueSkgPD0gMFxyXG4gICAgICAgICAgICAvLyDkuJTkuqTngrnkuZ/lnKjnur/mrrUy5LiKICBcclxuICAgICAgICAgICAgJiYgKHggLSBjLngpICogKHggLSBkLngpIDw9IDAgJiYgKHkgLSBjLnkpICogKHkgLSBkLnkpIDw9IDBcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8g6L+U5Zue5Lqk54K5cCAgXHJcbiAgICAgICAgICAgIHJldHVybiBjYy52Mih4LCB5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lkKbliJnkuI3nm7jkuqQgIFxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlsY/luZXpgILphY3vvIzov5Tlm57nlYzpnaLnvKnmlL7mr5TkvosgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2NlbmVBZGFwdGF0aW9uKCkge1xyXG4gICAgICAgIGxldCBmcmFtZVNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XHJcbiAgICAgICAgbGV0IGNhbnZhc1NpemUgPSBjYy52aWV3LmdldERlc2lnblJlc29sdXRpb25TaXplKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmcmFtZVNpemUgPSBcIiwgZnJhbWVTaXplKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNhbnZhc1NpemUgPSBcIiwgY2FudmFzU2l6ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2Mudmlldy5nZXRDYW52YXNTaXplKCkpXHJcbiAgICAgICAgbGV0IGFzcGVjdFJhdGlvID0gZnJhbWVTaXplLndpZHRoIC8gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFzcGVjdFJhdGlvID0gXCIsIGFzcGVjdFJhdGlvKVxyXG4gICAgICAgIGxldCBhZGFwU2NhbGUgPSAxO1xyXG4gICAgICAgIGxldCBjYW52YXNBciA9IGNhbnZhc1NpemUud2lkdGggLyBjYW52YXNTaXplLmhlaWdodDtcclxuICAgICAgICBpZiAoY2FudmFzQXIgPCAxKSB7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IGNhbnZhc1NpemUuaGVpZ2h0IC8gZnJhbWVTaXplLmhlaWdodDtcclxuICAgICAgICAgICAgYWRhcFNjYWxlID0gY2FudmFzU2l6ZS53aWR0aCAvIChmcmFtZVNpemUud2lkdGggKiBzY2FsZSk7XHJcbiAgICAgICAgICAgIGFkYXBTY2FsZSA9IGFkYXBTY2FsZSA+IDEgPyAxIDogYWRhcFNjYWxlO1xyXG4gICAgICAgICAgICAvLyBpZiAoYXNwZWN0UmF0aW8gPiAwLjU2MjUpIHtcclxuICAgICAgICAgICAgLy8gICAgIGFkYXBTY2FsZSAqPSAoYXNwZWN0UmF0aW8gLyAwLjU2MjUpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi56uW5bGPIFwiLCBhZGFwU2NhbGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbnZhc0FyID0gY2FudmFzU2l6ZS5oZWlnaHQgLyBjYW52YXNTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBsZXQgc2NhbGUgPSBjYW52YXNTaXplLndpZHRoIC8gZnJhbWVTaXplLndpZHRoO1xyXG4gICAgICAgICAgICBhZGFwU2NhbGUgPSBjYW52YXNTaXplLmhlaWdodCAvIChmcmFtZVNpemUuaGVpZ2h0ICogc2NhbGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaoquWxjyBcIiwgYWRhcFNjYWxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFkYXBTY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuKiDku47mlbDnu4TkuK3liKDpmaTkuIDkuKrlhYPntKBcclxuKiBAcGFyYW0gYXJyYXkg5pWw57uEXHJcbiogQHBhcmFtIGVsZW1lbnQg6ZyA6KaB5Yig6Zmk55qE5YWD57SgXHJcbiovXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlbGV0ZUVsZW1lbnQ8VD4oYXJyYXk6IFRbXSwgZWxlbWVudDogVCk6IFRbXSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gYXJyYXkuaW5kZXhPZihlbGVtZW50KTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuenu+mZpFRpbWVNYW5hZ2VyIOebkeWQrOaIkOWKnyBcIiwgZWxlbWVudClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4qIOS7juaVsOe7hOS4reWIoOmZpOS4gOe7hOWFg+e0oFxyXG4qIEBwYXJhbSBhcnJheSDmlbDnu4RcclxuKiBAcGFyYW0gZWxlbWVudCDpnIDopoHliKDpmaTnmoTlhYPntKDnu4RcclxuKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVsZXRlRWxlbWVudHM8VD4oYXJyYXk6IFRbXSwgZGVsZXRlQXJyYXk6IFRbXSk6IFRbXSB7XHJcbiAgICAgICAgaWYgKGFycmF5ID09IG51bGwgfHwgZGVsZXRlQXJyYXkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZUFycmF5LmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlRWxlbWVudChhcnJheSwgdmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlbGV0ZUVsZW1lbnRCeVJ1bGU8VD4oYXJyYXk6IFRbXSwgdGFyZ2V0T3JkZXI6IChhOiBUKSA9PiBib29sZWFuKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gVXRpbC5kZWxldGVFbGVtZW50PFQ+KGFycmF5LCBVdGlsLmZpbmQ8VD4oYXJyYXksIHRhcmdldE9yZGVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkZWxldGVFbGVtZW50c0J5UnVsZTxUPihhcnJheTogVFtdLCB0YXJnZXRPcmRlcjogKGE6IFQpID0+IGJvb2xlYW4pOiBUW10ge1xyXG4gICAgICAgIHJldHVybiBVdGlsLmRlbGV0ZUVsZW1lbnRzPFQ+KGFycmF5LCBhcnJheS5maWx0ZXIoYSA9PiB0YXJnZXRPcmRlcihhKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDlr7vmib7mlbDnu4TkuK3nmoTnrKzkuIDkuKrnrKblkIjmnaHku7bnmoTlhYPntKBcclxuICAgICogQHBhcmFtIGFycmF5IFxyXG4gICAgKiBAcGFyYW0gcHJlY2lhdGUgXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBmaW5kPFQ+KGFycmF5OiBUW10sIHByZWNpYXRlOiAoYTogVCkgPT4gYm9vbGVhbik6IFQge1xyXG4gICAgICAgIGlmIChhcnJheSA9PSBudWxsIHx8IGFycmF5Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJlY2lhdGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXlbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHByZWNpYXRlKGFycmF5W2ldKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXJyYXlbaV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPluS4gOe7hOmaj+acuuaVsCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRSYW5kb21OdW0obnVtTGVuZ3RoOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBudW0gPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbnVtICs9IHRoaXMuZ2V0UmFuZG9tSW50KDAsIDkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTnVtYmVyKG51bSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbmmK/ku6XlkI7nmoTlpKnmlbBcclxuICAgICAqIEBwYXJhbSBsYXN0VGltZSDkuIrmrKHml7bpl7RcclxuICAgICAqIEBwYXJhbSBjdXJUaW1lIOW9k+WJjeaXtumXtFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzTmV4dERheShsYXN0VGltZTogbnVtYmVyLCBjdXJUaW1lOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAobGFzdFRpbWUgPiBjdXJUaW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjdXJUaW1lIC0gbGFzdFRpbWUgPj0gMjQgKiA2MCAqIDYwICogMTAwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbGFzdERhdGUgPSBuZXcgRGF0ZShsYXN0VGltZSk7XHJcbiAgICAgICAgICAgIGxldCBjdXJEYXRlID0gbmV3IERhdGUoY3VyVGltZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBsYXN0RGF0ZS5nZXREYXkoKSAhPSBjdXJEYXRlLmdldERheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuaYr+S7peWQjueahOWRqFxyXG4gICAgICogQHBhcmFtIGxhc3RUaW1lIOS4iuasoeaXtumXtFxyXG4gICAgICogQHBhcmFtIGN1clRpbWUg5b2T5YmN5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNOZXh0V2VlayhsYXN0VGltZTogbnVtYmVyLCBjdXJUaW1lOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAobGFzdFRpbWUgPiBjdXJUaW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjdXJUaW1lIC0gbGFzdFRpbWUgPj0gMjQgKiA2MCAqIDYwICogMTAwMCAqIDcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGxhc3REYXRlID0gbmV3IERhdGUobGFzdFRpbWUpO1xyXG4gICAgICAgICAgICBsZXQgY3VyRGF0ZSA9IG5ldyBEYXRlKGN1clRpbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gY3VyRGF0ZS5nZXREYXkoKSA8IGxhc3REYXRlLmdldERheSgpIHx8IChjdXJEYXRlLmdldERheSgpID09IGxhc3REYXRlLmdldERheSgpICYmIGN1clRpbWUgLSBsYXN0VGltZSA+IDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEFsbEVudW1OdW1zKGVudW1UeXBlOiBhbnkpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgbGV0IG9ianM6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgZGUgaW4gZW51bVR5cGUpIHtcclxuICAgICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChkZSkpKSB7XHJcbiAgICAgICAgICAgICAgICBvYmpzLnB1c2gocGFyc2VJbnQoZGUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqcztcclxuICAgIH1cclxuXHJcbiAgICAvKirojrflj5bmnprkuL7nmoR2YWx1ZeaVsOe7hCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRBbGxFbnVtVmFsdWVzKGVudW1UeXBlOiBhbnkpOiBhbnlbXSB7XHJcbiAgICAgICAgbGV0IG9ianM6IGFueVtdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZW51bVR5cGUpIHtcclxuICAgICAgICAgICAgb2Jqcy5wdXNoKGVudW1UeXBlW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEFsbEVudW1LZXlzKGVudW1UeXBlOiBhbnkpOiBhbnlbXSB7XHJcbiAgICAgICAgbGV0IG9ianM6IGFueVtdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZW51bVR5cGUpIHtcclxuICAgICAgICAgICAgaWYgKGlzTmFOKE51bWJlcihrZXkpKSkge1xyXG4gICAgICAgICAgICAgICAgb2Jqcy5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9ianM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6I635Y+W5LiA5Liq6ZqP5py65p6a5Li+ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFJhbmRvbUVudW08VD4oZW51bVR5cGU6IFQpIHtcclxuICAgICAgICBsZXQgc3Ryczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBlbnVtVHlwZSkge1xyXG4gICAgICAgICAgICBzdHJzLnB1c2goa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yYW5kb21BcnJPcmRlcihzdHJzKTtcclxuICAgICAgICByZXR1cm4gZW51bVR5cGVbc3Ryc1swXV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5qC55o2u5p2D6YeN6ZqP5py65Y+W5YC8ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFJhbmRvbUVsZUluV2VpZ2h0PFQ+KG9ianM6IFtULCBudW1iZXJdW10pOiBUIHtcclxuICAgICAgICBpZiAob2JqcyA9PSBudWxsIHx8IG9ianMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhbGxXZWlnaHQgPSAwO1xyXG4gICAgICAgIGxldCBjdXJXZWlnaHQgPSAwO1xyXG4gICAgICAgIGxldCBvYmpzUHJvYjogW1QsIG51bWJlciwgbnVtYmVyXVtdID0gW107XHJcbiAgICAgICAgb2Jqcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBhbGxXZWlnaHQgKz0gdmFsdWVbMV07XHJcbiAgICAgICAgICAgIG9ianNQcm9iLnB1c2goW3ZhbHVlWzBdLCBjdXJXZWlnaHQsIGN1cldlaWdodCArIHZhbHVlWzFdXSk7XHJcbiAgICAgICAgICAgIGN1cldlaWdodCArPSB2YWx1ZVsxXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgcmFuZCA9IE1hdGgucmFuZG9tKCkgKiBhbGxXZWlnaHQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmpzUHJvYi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocmFuZCA+IG9ianNQcm9iW2ldWzFdICYmIHJhbmQgPD0gb2Jqc1Byb2JbaV1bMl0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmpzUHJvYltpXVswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKirojrflj5bnn6nlvaLojIPlm7TlhoXpmo/mnLrkuIDngrkgKi9cclxuICAgIHN0YXRpYyBnZXRSYW5kb21Qb3NJblJlY3QocmVjdDogY2MuUmVjdCkge1xyXG4gICAgICAgIHJldHVybiBjYy52MihyZWN0LnggKyBNYXRoLnJhbmRvbSgpICogcmVjdC53aWR0aCwgcmVjdC55ICsgTWF0aC5yYW5kb20oKSAqIHJlY3QuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKirmt7vliqDkuIDkuKrlrZDoioLngrnlubbmt7vliqDohJrmnKwgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYWRkQ29tcG9uZW50Tm9kZShwYU5vZGU6IGNjLk5vZGUsIGNsYXNzTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZShjbGFzc05hbWUpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gcGFOb2RlO1xyXG4gICAgICAgIGxldCBjbGFzc1NyYyA9IG5vZGUuYWRkQ29tcG9uZW50KGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzU3JjO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuagueaNruWvueixoeeahHZhbHVl6I635Y+Wa2V5ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE9iaktleUJ5VmFsdWU8VCwgVSBleHRlbmRzIFRba2V5b2YgVF0+KFxyXG4gICAgICAgIHJlY29yZDogVCxcclxuICAgICAgICB2YWx1ZTogVVxyXG4gICAgKToga2V5b2YgVCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIChPYmplY3Qua2V5cyhyZWNvcmQpIGFzIEFycmF5PGtleW9mIFQ+KS5maW5kKGsgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVjb3JkW2tdID09PSB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWxj+W5lemch+WKqOaViOaenCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzaGFrZUFuaW0obm9kZTogY2MuTm9kZSwgbG9vcFRpbWVzOiBudW1iZXIgPSAxKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMC4wMiwgeyBwb3NpdGlvbjogY2MudjMoNSwgNykgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjAyLCB7IHBvc2l0aW9uOiBjYy52MygtNiwgNykgfSlcclxuICAgICAgICAgICAgICAgIC50bygwLjAyLCB7IHBvc2l0aW9uOiBjYy52MygtMTMsIDMpIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4wMiwgeyBwb3NpdGlvbjogY2MudjMoMywgLTYpIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4wMiwgeyBwb3NpdGlvbjogY2MudjMoLTUsIDUpIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4wMiwgeyBwb3NpdGlvbjogY2MudjMoMiwgLTgpIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC4wMiwgeyBwb3NpdGlvbjogY2MudjMoLTgsIDEwKSB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMDIsIHsgcG9zaXRpb246IGNjLnYzKDMsIDEwKSB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMDIsIHsgcG9zaXRpb246IGNjLnYzKDAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAudW5pb24oKVxyXG4gICAgICAgICAgICAgICAgLnJlcGVhdChsb29wVGltZXMpXHJcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoq5bCG5a+M5paH5pys5pu/5o2i5oiQ5Y+v5L2/55So5omT5a2X5py65pWI5p6c5pi+56S655qE5paH5pys5pWw57uEMiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByaWNoVGV4dFR5cGV3cml0ZShzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBjaGFyQXJyID0gc3RyLnJlcGxhY2UoLzwuKz9cXC8/Pi9nLCAnJykuc3BsaXQoJycpO1xyXG4gICAgICAgIGxldCB0ZW1wU3RyQXJyID0gW3N0cl07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSBjaGFyQXJyLmxlbmd0aDsgaSA+IDE7IGktLSkge1xyXG4gICAgICAgICAgICBsZXQgY3VyU3RyID0gdGVtcFN0ckFycltjaGFyQXJyLmxlbmd0aCAtIGldO1xyXG4gICAgICAgICAgICBsZXQgbGFzdElkeCA9IGN1clN0ci5sYXN0SW5kZXhPZihjaGFyQXJyW2kgLSAxXSk7XHJcbiAgICAgICAgICAgIGxldCBwcmV2U3RyID0gY3VyU3RyLnNsaWNlKDAsIGxhc3RJZHgpO1xyXG4gICAgICAgICAgICBsZXQgbmV4dFN0ciA9IGN1clN0ci5zbGljZShsYXN0SWR4ICsgMSwgY3VyU3RyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHRlbXBTdHJBcnIucHVzaChwcmV2U3RyICsgbmV4dFN0cik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRlbXBTdHJBcnIgPSB0ZW1wU3RyQXJyLnJldmVyc2UoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZW1wU3RyQXJyKVxyXG4gICAgICAgIHJldHVybiB0ZW1wU3RyQXJyO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirlsIblr4zmlofmnKzmm7/mjaLmiJDlj6/kvb/nlKjmiZPlrZfmnLrmlYjmnpzmmL7npLrnmoTmlofmnKzmlbDnu4Qg5oCn6IO96L6D5beuKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVwbGFjZVJpY2hUZXh0KHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgcmVnZXggPSAvPC4rP1xcLz8+L2c7IC8vIOWMuemFjeWwluaLrOWPt+agh+etvlxyXG4gICAgICAgIGNvbnN0IG1hdGNoQXJyID0gc3RyLm1hdGNoKHJlZ2V4KTtcclxuICAgICAgICBjb25zdCBzcGVjaWFsQ2hhciA9IFwi4pSCXCI7XHJcbiAgICAgICAgY29uc3QgcmVwbGFjZVN0ciA9IHN0ci5yZXBsYWNlKHJlZ2V4LCBzcGVjaWFsQ2hhcik7IC8vIOagh+etvuaVsOe7hFxyXG4gICAgICAgIGNvbnN0IHRleHRBcnI6IHN0cmluZ1tdID0gcmVwbGFjZVN0ci5zcGxpdChzcGVjaWFsQ2hhcik7IC8vIOaWh+Wtl+aVsOe7hFxyXG4gICAgICAgIGNvbnN0IHN0ckFycjogc3RyaW5nW10gPSBbXTsgLy8g5a2Y5pS+5aSE55CG6L+H55qE5paH5a2X5pWw57uEXHJcbiAgICAgICAgbGV0IHBhcmFOdW0gPSAwOyAvLyDlvoXmm7/mjaLlj4LmlbDkuKrmlbBcclxuICAgICAgICBmb3IgKGxldCB0ZXh0IG9mIHRleHRBcnIpIHtcclxuICAgICAgICAgICAgLy8g6Z2e56m65a2X56ym5pu/5o2i5oiQ57G75Ly8ICRbMC1uXSDlj4LmlbBcclxuICAgICAgICAgICAgaWYgKHRleHQgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRleHQgPSBgJFske3BhcmFOdW19XWA7XHJcbiAgICAgICAgICAgICAgICBwYXJhTnVtICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RyQXJyLnB1c2godGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0ZW1wbGV0U3RyOiBzdHJpbmcgPSBzdHJBcnIuam9pbihzcGVjaWFsQ2hhcik7IC8vIOaVsOe7hOi9rOaIkOW+heabv+aNouWtl+espuS4slxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0ZXh0QXJyLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAvLyDovazmjaLku6Pmm7/mjaLlrZfnrKbkuLLkuYvlkI4sIOWIoOmZpOaWh+Wtl+aVsOe7hOWkmuS9meepuuWtl+esplxyXG4gICAgICAgICAgICBpZiAodGV4dEFycltpbmRleF0gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRleHRBcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gaW5kZXggLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICh0ZW1wbGV0U3RyLnNlYXJjaChzcGVjaWFsQ2hhcikgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIOaVsOe7hOi9rOaIkOeahOWtl+espuS4suWOn+acrCAn54m55q6K5a2X56ymJyDkvY3nva7pg73mmK/lr4zmlofmnKzmoIfnrb7nmoTkvY3nva4sIOabv+aNouWbnuagh+etvlxyXG4gICAgICAgICAgICBpZiAobWF0Y2hBcnJbMF0pIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsZXRTdHIgPSB0ZW1wbGV0U3RyLnJlcGxhY2Uoc3BlY2lhbENoYXIsIG1hdGNoQXJyWzBdLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hBcnIuc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxldFN0ciA9IHRlbXBsZXRTdHIucmVwbGFjZShzcGVjaWFsQ2hhciwgXCJcIik7Ly8g56m65a2X56ym5Liy5pu/5o2iLOmYsuatouatu+W+queOr1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwibWF0Y2hBcnIgbm90IGVub3VnaFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsYXN0U3RyQXJyOiBzdHJpbmdbXSA9IFtdOyAvLyDovazmjaLlkI7lr4zmlofmnKzmlbDnu4RcclxuICAgICAgICBjb25zdCBhcnJheVBhcm06IHN0cmluZ1tdID0gbmV3IEFycmF5KHBhcmFOdW0pLmZpbGwoXCJcIik7IC8vIOabv+aNouWPguaVsOaVsOe7hFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGV4dEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRleHQgb2YgdGV4dEFycltpXSkge1xyXG4gICAgICAgICAgICAgICAgYXJyYXlQYXJtW2ldID0gYXJyYXlQYXJtW2ldICsgdGV4dDtcclxuICAgICAgICAgICAgICAgIGxldCByZXBsYWNlU3RyMSA9IHRlbXBsZXRTdHI7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFyYU51bTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VTdHIxID0gcmVwbGFjZVN0cjEucmVwbGFjZShgJFske2luZGV4fV1gLCBhcnJheVBhcm1baW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxhc3RTdHJBcnIucHVzaChyZXBsYWNlU3RyMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxhc3RTdHJBcnI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLzlvI/ljJbml7bpl7TmiLNcclxuICAgICAqIEBwYXJhbSBkYXRlIERhdGVcclxuICAgICAqIEBwYXJhbSBmbXQg5qC85byP77yM6buY6K6kIHl5eXkvTU0vZGQgaGg6bW06c3NcclxuICAgICAqIFxyXG4gICAgICog44CQ5Y+v55So5qCH5b+X77yaeS3lubQgfCBNLeaciCB8IGQt5pelIHwgaC3lsI/ml7YgfCBtLeWIhiB8IHMt56eSIHwgcS3lraPluqYgfCBTLeavq+enkuOAkVxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJucyBTdHJpbmdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBkYXRlRm9ybWF0KGRhdGU6IERhdGUsIGZtdCA9ICd5eXl5L01NL2RkIGhoOm1tOnNzJykge1xyXG4gICAgICAgIGxldCBvID0ge1xyXG4gICAgICAgICAgICBcIk0rXCI6IGRhdGUuZ2V0TW9udGgoKSArIDEsICAgICAgICAgICAgICAgICAvL+aciOS7vSAgIFxyXG4gICAgICAgICAgICBcImQrXCI6IGRhdGUuZ2V0RGF0ZSgpLCAgICAgICAgICAgICAgICAgICAgLy/ml6UgICBcclxuICAgICAgICAgICAgXCJoK1wiOiBkYXRlLmdldEhvdXJzKCksICAgICAgICAgICAgICAgICAgIC8v5bCP5pe2ICAgXHJcbiAgICAgICAgICAgIFwibStcIjogZGF0ZS5nZXRNaW51dGVzKCksICAgICAgICAgICAgICAgICAvL+WIhiAgIFxyXG4gICAgICAgICAgICBcInMrXCI6IGRhdGUuZ2V0U2Vjb25kcygpLCAgICAgICAgICAgICAgICAgLy/np5IgICBcclxuICAgICAgICAgICAgXCJxK1wiOiBNYXRoLmZsb29yKChkYXRlLmdldE1vbnRoKCkgKyAzKSAvIDMpLCAvL+Wto+W6piAgIFxyXG4gICAgICAgICAgICBcIlNcIjogZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAgICAgICAgICAgICAvL+avq+enkiAgIFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKC8oeSspLy50ZXN0KGZtdCkpIHtcclxuICAgICAgICAgICAgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoZGF0ZS5nZXRGdWxsWWVhcigpICsgXCJcIikuc3Vic3RyKDQgLSBSZWdFeHAuJDEubGVuZ3RoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGsgaW4gbykge1xyXG4gICAgICAgICAgICBpZiAobmV3IFJlZ0V4cChcIihcIiArIGsgKyBcIilcIikudGVzdChmbXQpKSB7XHJcbiAgICAgICAgICAgICAgICBmbXQgPSBmbXQucmVwbGFjZShSZWdFeHAuJDEsIChSZWdFeHAuJDEubGVuZ3RoID09IDEpID8gKG9ba10pIDogKChcIjAwXCIgKyBvW2tdKS5zdWJzdHIoKFwiXCIgKyBvW2tdKS5sZW5ndGgpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZtdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluafkOS4gOS9jeeahOWAvFxyXG4gICAgICogQHBhcmFtIGZsYWcgXHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRCaXRWYWx1ZShmbGFnOiBudW1iZXIsIHBvc2l0aW9uOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gKCgxIDw8IChwb3NpdGlvbiAtIDEpKSAmIGZsYWcpID4gMCA/IDEgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAqIDHkuLrnnJ8w5Li65YGHXHJcbiAgICogQHBhcmFtIGZsYWdcclxuICAgKiBAcGFyYW0gcG9zaXRpb25cclxuICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tCaXRWYWx1ZShmbGFnOiBudW1iZXIsIHBvc2l0aW9uOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCaXRWYWx1ZShmbGFnLCBwb3NpdGlvbikgPT0gMSA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWvjOaWh+acrOaVsOWtl+Wtl+S9k+Wkp+Wwj1xyXG4gICAgICogQHBhcmFtIHJpY2hUZXh0IOWOn+WvjOaWh+acrFxyXG4gICAgICogQHBhcmFtIG51bV9zaXplIOaVsOWtl+Wtl+S9k+Wkp+Wwj1xyXG4gICAgICogQHJldHVybnMg5paw5paH5pysXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0UmljaFRleHROdW1iZXJTaXplKHJpY2hUZXh0OiBzdHJpbmcsIG51bV9zaXplOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcmVnID0gbmV3IFJlZ0V4cChcIl4oPC4qPz4pWzAtOV0rXCIsIFwiZ1wiKTtcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IHJpY2hUZXh0Lm1hdGNoKHJlZyk7XHJcbiAgICAgICAgaWYgKCFyZXN1bHRzIHx8IHJlc3VsdHMubGVuZ3RoIDw9IDApIHJldHVybiByaWNoVGV4dDtcclxuICAgICAgICByZXN1bHRzLmZvckVhY2gocmVzID0+IHJpY2hUZXh0LnJlcGxhY2UocmVzLCBgPHNpemU9JHtudW1fc2l6ZX0+JHtyZXN9PC9zaXplPmApKTtcclxuICAgICAgICByZXR1cm4gcmljaFRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOagvOW8j+WMluaXtumXtOWIsOWIhlxyXG4gICAgKiBAcGFyYW0gdGltZSDml7bpl7Qo5Y2V5L2N77ya56eSKVxyXG4gICAgKiBAcmV0dXJucyAo5YiGOuenkilcclxuICAgICovXHJcbiAgICBzdGF0aWMgZm9ybWF0VGltZVRvTWluKHRpbWU6IG51bWJlciwgd2l0aFpIID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgbWluID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xyXG4gICAgICAgIGxldCBzZWMgPSBNYXRoLmNlaWwodGltZSAlIDYwKTtcclxuICAgICAgICByZXR1cm4gd2l0aFpIID8gYCR7dGhpcy5rZWVwSW50VW5pdHMobWluLCAyKX3liIYke3RoaXMua2VlcEludFVuaXRzKHNlYywgMil956eSYCA6IGAke3RoaXMua2VlcEludFVuaXRzKG1pbiwgMil9OiR7dGhpcy5rZWVwSW50VW5pdHMoc2VjLCAyKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcclxuICAgICAqIOagvOW8j+WMluaXtumXtCBcclxuICAgICAqIEBwYXJhbSB0aW1lIOenkiBcclxuICAgICAqIEBwYXJhbSBmbXQg5pi+56S65qC85byPIFxyXG4gICAgICogQHBhcmFtIGZpeCDlkI7nvIAgXHJcbiAgICAgKiBAcmV0dXJucyAgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmb3JtYXRUaW1lKHRpbWU6IG51bWJlciwgZm10OiBzdHJpbmcgPSBcImRobXNcIiwgZml4OiBPYmplY3QgPSB7IGQ6IFwiZFwiLCBoOiBcImhcIiwgbTogXCJtXCIsIHM6IFwic1wiIH0pIHtcclxuICAgICAgICBsZXQgZGF5ID0gdGhpcy5rZWVwSW50VW5pdHMoTWF0aC5mbG9vcih0aW1lIC8gKDI0ICogMzYwMCkpLCAyKTtcclxuICAgICAgICBsZXQgaG91ciA9IHRoaXMua2VlcEludFVuaXRzKE1hdGguZmxvb3IodGltZSAvIDM2MDApICUgMjQsIDIpO1xyXG4gICAgICAgIGxldCBtaW4gPSB0aGlzLmtlZXBJbnRVbml0cyhNYXRoLmZsb29yKHRpbWUgLyA2MCkgJSA2MCwgMik7XHJcbiAgICAgICAgbGV0IHNlYyA9IHRoaXMua2VlcEludFVuaXRzKE1hdGguZmxvb3IodGltZSAlIDYwKSwgMik7XHJcbiAgICAgICAgbGV0IG9iaiA9IHsgZDogZGF5LCBoOiBob3VyLCBtOiBtaW4sIHM6IHNlYyB9O1xyXG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm10Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBmaXhzID0gZml4ICYmIGZpeFtmbXRbaV1dO1xyXG4gICAgICAgICAgICBzdHIgKz0gb2JqW2ZtdFtpXV0gKyBmaXhzO1xyXG4gICAgICAgICAgICBpZiAoZml4cyA9PSBcIlwiICYmIGkgPCBmbXQubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgc3RyICs9IFwiOlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOiuvue9ruaVtOW9ouaVsOWtl+WbuuWumuS9jeaVsO+8iOS4jei2s+eahOmDqOWIhueUqDDlhYXloavvvIzotoXlh7rorr7lrprplb/luqbmiJbogIXkuI3kuLrmlbTlvaLliJnnm7TmjqXov5Tlm57lrZfnrKbkuLLlvaLlvI/vvIlcclxuICAgICogQHBhcmFtIGludCDopoHosIPmlbTkvY3mlbDnmoTmlbDlrZdcclxuICAgICogQHBhcmFtIHVuaXRzIOimgeiwg+aVtOeahOS9jeaVsFxyXG4gICAgKiBAcmV0dXJucyDosIPmlbTlkI7nmoTlrZfnrKbkuLJcclxuICAgICovXHJcbiAgICBzdGF0aWMga2VlcEludFVuaXRzKGludDogbnVtYmVyLCB1bml0czogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGludCkgfHwgaW50LnRvU3RyaW5nKCkubGVuZ3RoID49IHVuaXRzKSByZXR1cm4gaW50LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IGludFN0ciA9IGludC50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCBzdHI6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bml0czsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpIDwgaW50U3RyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3RyLnB1c2goaW50U3RyLmNoYXJBdChpKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdHIudW5zaGlmdChcIjBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0ci5qb2luKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuiOt+WPluiKgueCueebuOWvueiHqui6q+eahOefqeW9ouiMg+WbtCAqL1xyXG4gICAgc3RhdGljIGdldFNlbGZSZWN0KG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICByZXR1cm4gY2MucmVjdCgtbm9kZS53aWR0aCAqIG5vZGUuYW5jaG9yWCwgLW5vZGUuaGVpZ2h0ICogbm9kZS5hbmNob3JZLCBub2RlLndpZHRoLCBub2RlLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnrYnmr5TliIblibLnn6nlvaJcclxuICAgICAqIEBwYXJhbSByZWN0IOWOn+efqeW9olxyXG4gICAgICogQHBhcmFtIHJvdyDooYzmlbBcclxuICAgICAqIEBwYXJhbSBjb2wg5YiX5pWwXHJcbiAgICAgKiBAcmV0dXJucyDliIflibLlkI7nmoTnn6nlvaJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHNwbGl0UmVjdChyZWN0OiBjYy5SZWN0LCByb3c6IG51bWJlciwgY29sOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgc3BsaXRSZWN0czogY2MuUmVjdFtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3c7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBzcGxpdFJlY3RzLnB1c2goY2MucmVjdChyZWN0LnggKyBqICogcmVjdC53aWR0aCAvIGNvbCwgcmVjdC55ICsgaSAqIHJlY3QuaGVpZ2h0IC8gcm93LCByZWN0LndpZHRoIC8gY29sLCByZWN0LmhlaWdodCAvIHJvdykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzcGxpdFJlY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmb3JtYXRDb3VudFBlcktpbG8oY291bnQ6IG51bWJlciwgZnJhY3Rpb25EaWdpdHM6IG51bWJlciA9IDEsIGtpbG9MaW1pdCA9IDEwMDAwLCBtaWxsb25lTGltaXQgPSAxMDAwMDAwMDApIHtcclxuICAgICAgICBmcmFjdGlvbkRpZ2l0cyA9IE1hdGgubWF4KGZyYWN0aW9uRGlnaXRzLCAwKTtcclxuICAgICAgICBpZiAoY291bnQgPj0gbWlsbG9uZUxpbWl0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoTWF0aC5mbG9vcihjb3VudCAvPSBNYXRoLnBvdygxMCwgOCAtIGZyYWN0aW9uRGlnaXRzKSkgLyBNYXRoLnBvdygxMCwgZnJhY3Rpb25EaWdpdHMpKSArIFwi5Lq/XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb3VudCA+PSBraWxvTGltaXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChNYXRoLmZsb29yKGNvdW50IC89IE1hdGgucG93KDEwLCA0IC0gZnJhY3Rpb25EaWdpdHMpKSAvIE1hdGgucG93KDEwLCBmcmFjdGlvbkRpZ2l0cykpICsgXCLkuIdcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY291bnQgKyBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3VtKGFycjogbnVtYmVyW10pIHtcclxuICAgICAgICBsZXQgcmVzID0gMDtcclxuICAgICAgICBhcnIuZm9yRWFjaChudW0gPT4gcmVzICs9IG51bSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNWYWxpZCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGNjLmlzVmFsaWQodmFsdWUsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb252ZXJ0U3RyVG9OdW1iZXIoc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSAwO1xyXG4gICAgICAgIGlmIChzdHIuaW5jbHVkZXMoXCLkuIdcIikpIHtcclxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoXCLkuIdcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHN0cikgKiAxMDAwMDtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0ci5pbmNsdWRlcyhcIuS6v1wiKSkge1xyXG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShcIuS6v1wiLCBcIlwiKTtcclxuICAgICAgICAgICAgdmFsdWUgPSBOdW1iZXIoc3RyKSAqIDEwMDAwMDAwMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IE51bWJlcihzdHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWUgfHwgMFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bCG5LiA5Liq5YC86ZqP5py65YiG5oiQ5Yeg5Lu9XHJcbiAgICAgKiBAcGFyYW0gdG90YWwg5YC8XHJcbiAgICAgKiBAcGFyYW0gcGFydHMg6KaB5YiG55qE5Lu95pWwXHJcbiAgICAgKiBAcGFyYW0gbWF4T2Zmc2V0UGVyIOacgOWkp+W3ruWAvOeZvuWIhuavlFxyXG4gICAgICogQHBhcmFtIGlzSW50IOaYr+WQpuaVtOWei1xyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzcGxpdEludG9SYW5kb21TaGFyZXModG90YWw6IG51bWJlciwgcGFydHM6IG51bWJlciwgbWF4T2Zmc2V0UGVyOiBudW1iZXIgPSAwLjIsIGlzSW50OiBib29sZWFuID0gdHJ1ZSk6IG51bWJlcltdIHtcclxuICAgICAgICBjb25zdCBzaGFyZXMgPSBbXTtcclxuICAgICAgICBsZXQgcGFydE51bSA9IHRvdGFsIC8gcGFydHM7XHJcbiAgICAgICAgaWYgKGlzSW50KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ludGVnZXIocGFydE51bSkpIHtcclxuICAgICAgICAgICAgICAgIHBhcnROdW0gPSBNYXRoLmNlaWwocGFydE51bSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1heE9mZnNldCA9IHBhcnROdW0gKiBtYXhPZmZzZXRQZXIgLyAyO1xyXG4gICAgICAgIGlmIChpc0ludCkgbWF4T2Zmc2V0ID0gTWF0aC5mbG9vcihtYXhPZmZzZXQpO1xyXG4gICAgICAgIGxldCBtYXggPSBwYXJ0TnVtICsgbWF4T2Zmc2V0O1xyXG4gICAgICAgIGxldCBtaW4gPSBwYXJ0TnVtIC0gbWF4T2Zmc2V0O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByYW5kb21TaGFyZSA9IGlzSW50ID8gdGhpcy5nZXRSYW5kb21JbnQobWluLCBtYXgpIDogdGhpcy5nZXRSYW5kb21GbG9hdChtaW4sIG1heCk7XHJcbiAgICAgICAgICAgIHNoYXJlcy5wdXNoKHJhbmRvbVNoYXJlKTtcclxuICAgICAgICAgICAgdG90YWwgLT0gcmFuZG9tU2hhcmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzaGFyZXMucHVzaCh0b3RhbCk7XHJcblxyXG4gICAgICAgIHNoYXJlcy5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG5cclxuICAgICAgICByZXR1cm4gc2hhcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuWKqOaAgeaehOW7uuaemuS4viAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZUVudW0oZW51bU9iajogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGVudW1PYmopLnJlZHVjZSgocHJldiwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHByZXZba2V5XSA9IGVudW1PYmpba2V5XTtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X6LSd5aGe5bCU5puy57q/55qE6YCU5b6E54K55Z2Q5qCH5pWw57uEXHJcbiAgICAgKiBAcGFyYW0gcG9zQXJyIOS4iemYtui0neWhnuWwlOeahOWbm+S4queCuSzmlbDnu4Tlr7nlupTkuLogMOi1t+eCuSwx6LW354K55o6n5Yi254K5LDLnu4jngrnmjqfliLbngrksM+e7iOeCuVxyXG4gICAgICogQHBhcmFtIGludGVydmFsIOmXtOmalCDmr4/mrKHov63ku6PmraXplb8s6L+Z5Liq5YC86LaK5bCP6LaK57K+57uGLOS9huaYr+aViOeOh+i2iuS9jlxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRCZXppZXJQb2ludEFycihwb3NBcnI6IGNjLlZlYzJbXSwgaW50ZXJ2YWw6IG51bWJlciA9IDMwMCk6IGNjLlZlYzJbXSB7XHJcbiAgICAgICAgbGV0IGFsbEJlemllclBvcyA9IFtdXHJcbiAgICAgICAgbGV0IGdhcCA9IDEgLyBpbnRlcnZhbDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAxOyBpICs9IGdhcCkge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5fY2FjdWxhdGVCZXppZXJQKHBvc0FyciwgaSlcclxuICAgICAgICAgICAgYWxsQmV6aWVyUG9zLnB1c2gocG9zKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsQmV6aWVyUG9zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6h566X5LiJ6Zi26LSd5aGe5bCU5ZyoIHTml7bliLsg55qE5L2N572uXHJcbiAgICAgKiBAcGFyYW0gcCDkuInpmLbotJ3loZ7lsJTnmoTlm5vkuKrngrks5pWw57uE5a+55bqU5Li6IDDotbfngrksMei1t+eCueaOp+WItueCuSwy57uI54K55o6n5Yi254K5LDPnu4jngrlcclxuICAgICAqIEBwYXJhbSB0IOS8oOWFpTAtMeeahOWAvCzkuIDkuKrml7bpl7TnmoTov63ku6Pov4fnqItcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgX2NhY3VsYXRlQmV6aWVyUChwOiBjYy5WZWMyW10sIHQ6IG51bWJlcik6IGNjLlZlYzIge1xyXG4gICAgICAgIC8vIOS4iemYtui0neWhnuWwlOi/kOeul1xyXG4gICAgICAgIGxldCBiZXppZXJQOiBjYy5WZWMyID0gY2MudjIoKVxyXG4gICAgICAgIGJlemllclAueCA9IE1hdGguZmxvb3IoTWF0aC5wb3coMSAtIHQsIDMpICogcFswXS54ICsgMyAqIHQgKiBNYXRoLnBvdygxIC0gdCwgMikgKiBwWzFdLnggKyAzICogTWF0aC5wb3codCwgMikgKiAoMSAtIHQpICogcFsyXS54ICsgTWF0aC5wb3codCwgMykgKiBwWzNdLngpO1xyXG4gICAgICAgIGJlemllclAueSA9IE1hdGguZmxvb3IoTWF0aC5wb3coMSAtIHQsIDMpICogcFswXS55ICsgMyAqIHQgKiBNYXRoLnBvdygxIC0gdCwgMikgKiBwWzFdLnkgKyAzICogTWF0aC5wb3codCwgMikgKiAoMSAtIHQpICogcFsyXS55ICsgTWF0aC5wb3codCwgMykgKiBwWzNdLnkpO1xyXG4gICAgICAgIHJldHVybiBiZXppZXJQO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X5Lul5q+P5LiH5Li65Y2V5L2N55qE5pWw5YC85a2X56ym5LiyXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUg5Y6f5pWw5YC8XHJcbiAgICAgKiBAcGFyYW0gZGVjaW1hbCDlsI/mlbDkvY1cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0Rm9ybWF0VmFsdWVTdHIodmFsdWU6IG51bWJlciwgZGVjaW1hbDogbnVtYmVyID0gMSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA+PSBNYXRoLnBvdygxMCwgMTIpKSB7Ly/kuqxcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodmFsdWUgLyBNYXRoLnBvdygxMCwgMTIgLSBkZWNpbWFsKSkgLyBNYXRoLnBvdygxMCwgZGVjaW1hbCkgKyBcInRcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID49IE1hdGgucG93KDEwLCA5KSkgey8v5YWGXHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHZhbHVlIC8gTWF0aC5wb3coMTAsIDkgLSBkZWNpbWFsKSkgLyBNYXRoLnBvdygxMCwgZGVjaW1hbCkgKyBcImdcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID49IE1hdGgucG93KDEwLCA2KSkgey8v5Lq/XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHZhbHVlIC8gTWF0aC5wb3coMTAsIDYgLSBkZWNpbWFsKSkgLyBNYXRoLnBvdygxMCwgZGVjaW1hbCkgKyBcIm1cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID49IE1hdGgucG93KDEwLCAzKSkgey8v5LiHXHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHZhbHVlIC8gTWF0aC5wb3coMTAsIDMgLSBkZWNpbWFsKSkgLyBNYXRoLnBvdygxMCwgZGVjaW1hbCkgKyBcImtcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Yik5pat5YC85piv5ZCm5Li65pW05Z6LICovXHJcbiAgICBzdGF0aWMgaXNJbnRlZ2VyKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlKSAmJiBNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWU7XHJcbiAgICB9XHJcbn0iXX0=