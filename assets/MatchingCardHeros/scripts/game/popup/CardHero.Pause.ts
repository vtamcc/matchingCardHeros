// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameView from "../CardHero.GameView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Pause extends cc.Component {

   
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    clickRestart() {
        GameView.instance.onClickRestart();
        this.node.destroy();
        cc.director.resume();
    }

    clickResume() {
        GameView.instance.onClickResume();
        this.node.destroy();
    }

    clickHome() {
        // this.node.destroy();
        GameView.instance.destroyGame();
    }

    start () {

    }

    // update (dt) {}
}
