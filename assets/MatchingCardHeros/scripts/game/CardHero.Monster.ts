// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Global } from "../CardHero.Global";
import GameView from "./CardHero.GameView";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Monster extends cc.Component {

    @property(cc.Node)
    nMonster: cc.Node = null;
    dame = 1;
    monsterId = 0;
    // LIFE-CYCLE CALLBACKS:
    test: cc.Tween;
    onLoad () {
        this.setMonsterJump();
    }
    setMonster(id) {
        this.nMonster.getComponent(cc.Sprite).spriteFrame = GameView.instance.listMonster[id];
    }

    receiveDamage(dame) {
        Global.hpMonster -= dame;
        GameView.instance.updateHpBagGuy();
        if(Global.hpMonster <=0) {
          
           this.onDeath();
           console.log("destroy"); 
        }    
    }

    onDeath() {
        this.node.destroy();
        //GameView.instance.createMonster();
    }

    setMonsterJump() {
        const jumpUp = cc.tween().to(0.5, { y: 100 }, { easing: 'sineOut' });
        const jumpDown = cc.tween().to(0.5, { y: 0 }, { easing: 'sineIn' });
        const jumpSequence = cc.tween().sequence(jumpUp, jumpDown);
        const repeatJump = cc.tween().repeatForever(jumpSequence);
        
        cc.tween(this.node).then(repeatJump).start();
    }
    start () {

    }

    // update (dt) {}
}
