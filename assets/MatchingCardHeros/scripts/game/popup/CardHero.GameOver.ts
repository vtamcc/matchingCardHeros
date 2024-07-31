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

    @property(cc.Node)
    nYouWin: cc.Node = null;
    @property(cc.Node)
    nYouLose: cc.Node = null;

    @property(cc.Node)
    nStarWin_1: cc.Node = null;
    @property(cc.Node)
    nStarWin_2: cc.Node = null;
    @property(cc.Node)
    nStarWin_3: cc.Node = null;

    @property(cc.Node)
    nStarLose_1: cc.Node = null;

    @property(cc.Node)
    nStarLose_2: cc.Node = null;

    @property(cc.Node)
    nStarLose_3: cc.Node = null;

    @property(cc.Node)
    nBtnNext: cc.Node = null;
    start () {

    }

    clickRestart(){
        GameView.instance.onClickRestart();
        this.node.destroy();
    }

    winGame(win: boolean) {
        this.nYouWin.active = win;
        this.nYouLose.active = !win;

    }

    nextLevel() {
        GameView.instance.loadNextLevel();
        this.node.destroy();
    }
    // update (dt) {}
}
