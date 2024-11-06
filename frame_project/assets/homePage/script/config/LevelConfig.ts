
import BaseDataManager, { BaseData } from "../manager/BaseData";


export default class LevelConfig implements BaseData {
    id: number;
    title: string;
    icon: string;
    terror_lv: number;
    diff_lv: number;
    desc: string;
    tips: string[];
    failStr: string[];
    sucStr: string[];
    prop: number[]
}

export class LevelConfigMgr extends BaseDataManager<LevelConfig> {

    getMaxLvConfig() {
        return this._datas[this._datas.length - 1];
    }
}