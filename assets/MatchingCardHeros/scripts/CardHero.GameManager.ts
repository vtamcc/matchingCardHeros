// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    prfGameView: cc.Prefab = null;
    onLoad () {}

    start () {

    }

    onClickPlay() {
        let gamView = cc.instantiate(this.prfGameView)
        this.node.addChild(gamView);
    }

    // update (dt) {}
}
