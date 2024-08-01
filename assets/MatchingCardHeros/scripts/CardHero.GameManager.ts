// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Global } from "./CardHero.Global";
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

    @property(cc.Node)
    nChar_1: cc.Node = null;
    @property(cc.Node)
    nChar_2: cc.Node = null;
    @property(cc.Node)
    nChar_3: cc.Node = null;

    @property(cc.Node)
    nPlay: cc.Node = null;
    onLoad () {
        GameManager.instance = this;
        this.effectChar(this.nChar_1);
        this.effectChar(this.nChar_2);
        this.effectChar(this.nChar_3);
        this.effectPlay();
    }

    start () {

    }

    onClickPlay(level: number) {
        // if(GameView.instance != null)
        //     GameView.instance = null
        
        // let gameView = cc.instantiate(this.prfGameView).getComponent(GameView)
        // this.node.addChild(gameView.node);
        Global.selectedLevel = level;
        cc.sys.localStorage.setItem('selectedLevel', level.toString());
        let gameView = cc.instantiate(this.prfGameView).getComponent(GameView);
        this.node.addChild(gameView.node);
        
    }

    onClickLevel() {
        let levelView = cc.instantiate(this.prfGameLevel).getComponent(Level);
        this.node.addChild(levelView.node);
    }

    effectChar(node: cc.Node) {
       cc.tween(node)
       .repeatForever(
        cc.tween()
        .to(0.9,{angle: -1})
        .to(0.8, {angle: 1})
        .start()
       ).start();
    }

    effectPlay() {
        cc.tween(this.nPlay)
        .repeatForever(
           cc.tween()
           .to(0.8,{scale:0.8})
           .to(0.8,{scale: 1})
           .start()
        ).start();
     }
    // update (dt) {}
}
