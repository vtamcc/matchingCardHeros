// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameView from "./game/CardHero.GameView";
import Level from "./game/CardHero.LevelView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {
    public static instance: GameManager = null;
    @property(cc.Prefab)
    prfGameView: cc.Prefab = null;
    @property(cc.Prefab)
    prfGameLevel: cc.Prefab = null;
    onLoad () {
        GameManager.instance = this;
    }

    start () {

    }

    onClickPlay() {
        // if(GameView.instance != null)
        //     GameView.instance = null
        
        let gameView = cc.instantiate(this.prfGameView).getComponent(GameView)
        this.node.addChild(gameView.node);
    }

    onClickLevel() {
        let levelView = cc.instantiate(this.prfGameLevel).getComponent(Level);
        this.node.addChild(levelView.node);
    }

    // update (dt) {}
}
