// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Char extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    // @property
    // idChar: number = 0
    // dame = 0;

    start() {

    }

    onLoad() {

    }
    charAttack() {
        let pos = this.node.x;
        cc.tween(this.node)
            .to(0.5, { x: 200 })
            .call(() => {
                this.node.x = pos;
            }).start();
      
    }
}




// update (dt) {}

