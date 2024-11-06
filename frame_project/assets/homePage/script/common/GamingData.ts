
//存放游戏运行中的临时数据
export default class GamingData {

    static isFirstLogin: boolean = true;

    /**当前选择的关卡 */
    static curLv: number = 1;

    /**是否在限时解锁全部关卡中 */
    static isOnUnlockAllLv: boolean = false;
}
