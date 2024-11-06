import MyPool from "./MyPool";

export default class PoolObjBase extends cc.Component {

    destroySelf() {
        MyPool.putObj(this.node);
    }
}
