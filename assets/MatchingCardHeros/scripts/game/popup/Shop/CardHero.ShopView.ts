// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShopView extends cc.Component {

   @property(cc.Prefab)
   prfItem: cc.Prefab = null;
   @property(cc.Node)
   nLayout: cc.Node = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.loadItem();
    }
    onClickClose() {
        this.node.destroy();
    }

    loadItem() {
        for(let i = 0; i < 2; i++) {
            let item = cc.instantiate(this.prfItem)
            this.nLayout.addChild(item);
        }
    }
    start () {

    }

    // update (dt) {}
}
