// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Global } from "../CardHero.Global";
import Card from "./CardHero.Card";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameView extends cc.Component {
   public static instance: GameView = null;
   @property(cc.Prefab)
   prfCard: cc.Prefab = null;
   @property(cc.SpriteFrame)
   listSpfCards: cc.SpriteFrame[] = [];
   @property(cc.Node)
   nTableCards: cc.Node = null;

   @property(cc.Label)
   lbHpChar: cc.Label = null;
   @property(cc.Label)
   lbHpBagGuy: cc.Label = null;

   listIdCard = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12];
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        GameView.instance = this;
        this.listIdCard = this.shuffleArray(this.listIdCard);
        this.scheduleOnce(() => {
            this.loadCards();
        },1)
       
        this.updateHpChar();
        this.updateHpBagGuy();
    }


    loadCards() {
        for(let i = 0; i < 25; i++) {
            let card = cc.instantiate(this.prfCard).getComponent(Card)
            card.setData(this.listIdCard[i])
            this.nTableCards.addChild(card.node);
        }
    }

    shuffleArray(array: number[]): number[] {
        for (let i = array.length-1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    start () {

    }

    updateHpChar() {
        this.lbHpChar.string = Global.hpChar + ' ';
    }

    updateHpBagGuy() {
        this.lbHpBagGuy.string = Global.hpBagGuy + ' ';
    }


    // update (dt) {}
}
