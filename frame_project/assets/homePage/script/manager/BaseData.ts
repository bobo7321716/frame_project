export type BaseData = {
    id?: number;
}

export default class BaseDataManager<T extends BaseData> {
    constructor(datas: T[]) { this.parse(datas) };
    protected _datas: T[] = [];

    public get datas() {
        return this._datas;
    }

    parse(datas: T[]) {
        this._datas = datas;
    }

    getDataById(id: number) {
        return this._datas.find(data => data.id == id);
    }

    //数组转对象
    arrToObj(arr: any[], keys: string[] = ["id", "num"]) {
        let obj: any = {};
        let call = (arr1) => {
            arr1.forEach((v, k) => {
                if (Array.isArray(v)) {
                    call(v);
                } else {
                    obj[keys[k]] = v;
                }
            })
        }
        call(arr);
        return obj;
    }
}