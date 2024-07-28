// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameView from "../CardHero.GameView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameOver extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    clickRestart(){
        GameView.instance.onClickRestart();
        this.node.destroy();
    }
    // update (dt) {}
}
