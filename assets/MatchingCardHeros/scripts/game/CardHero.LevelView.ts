// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameManager from "../CardHero.GameManager";
import { Global } from "../CardHero.Global";
import GameView from "./CardHero.GameView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Level extends cc.Component {

   
    // LIFE-CYCLE CALLBACKS:

    @property(cc.Prefab)
    prfShopView: cc.Prefab = null;
    @property(cc.Label)
    lbGold: cc.Label = null;
    onLoad () {
        this.updateGold();
    }

    onClickPlay() {
        GameManager.instance.onClickPlay();
    }

    onClickShopView() {
        let shopView = cc.instantiate(this.prfShopView)
        this.node.addChild(shopView);
    }
    
    updateGold() {
        this.lbGold.string = '$' +  Global.totalGold + ' ';
    }
    start () {

    }

    // update (dt) {}
}
