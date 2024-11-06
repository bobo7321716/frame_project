"use strict";
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