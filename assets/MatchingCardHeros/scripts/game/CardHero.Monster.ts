// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Global } from "../CardHero.Global";
import GameView from "./CardHero.GameView";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Monster extends cc.Component {

    @property(cc.Node)
    nMonster: cc.Node = null;
    dame = 1;
    monsterId = 0;
    // LIFE-CYCLE CALLBACKS:
    jumpTween: cc.Tween = null;
    onLoad() {
        this.setMonsterJump();
    }
    setMonster(id, hp, dame) {
        this.monsterId = id;
        this.node.getComponent(cc.Sprite).spriteFrame = GameView.instance.listSpfMonster[id];
        Global.hpMonster = hp;
        Global.dameMonster = dame;
        GameView.instance.updateHpBagGuy();
    }

    receiveDamage(dame) {
        Global.hpMonster -= dame;
        GameView.instance.effectDameBagGuy(GameView.instance.lbDameChar,dame);
        GameView.instance.updateHpBagGuy();
        if (Global.hpMonster <= 0) {
            Global.hpMonster = 0;
            GameView.instance.updateHpBagGuy();
            this.onDeath();
        }
    }

    onDeath() {
        this.node.stopAllActions();
        this.scheduleOnce(() => {
            this.node.destroy();
            GameView.instance.monstersDefeated++;
            console.log("mau", Global.hpMonster);
        },0.3)
      
        // Delay of 2 seconds

    }
    setMonsterJump() {
        const jumpUp = cc.tween().to(0.5, { y: 100 }, { easing: 'sineOut' });
        const jumpDown = cc.tween().to(0.3, { y: 0 },{ easing: 'sineIn' });
        const jumpSequence = cc.tween().sequence(jumpUp, jumpDown);
        const repeatJump = cc.tween().repeatForever(jumpSequence);

        cc.tween(this.node).then(repeatJump).start();
    }

    start() {

    }

    // update (dt) {}
}
