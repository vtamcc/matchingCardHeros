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
   @property(cc.Node)
   nMaskClick: cc.Node = null;
   @property(cc.Node)
   nMaskLoadGame: cc.Node = null;
   isClick = false;
   countClick = 0;
   listIdCard = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12];
   selectedCards = [];
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        GameView.instance = this;
        this.listIdCard = this.shuffleArray(this.listIdCard);
        this.maskLoadGame();
        this.scheduleOnce(() => {
            this.loadCards();
        },1)
        this.updateHpChar();
        this.updateHpBagGuy();
    }

    maskLoadGame() {
        this.nMaskLoadGame.active = true;
        this.scheduleOnce(() => {
            this.nMaskLoadGame.active = false;
        },5)
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

    addSelectedCard(card: Card) {
        if (this.selectedCards.length < 2) {
            this.selectedCards.push(card);
            if (this.selectedCards.length === 2) {
                this.scheduleOnce(this.checkMatch.bind(this), 1); // Delay to show the cards
            }
        }
    }

   
    checkMatch() {
        let [firstCard, secondCard] = this.selectedCards;
        console.log("Mang ",this.selectedCards);
        if (firstCard.idCard === secondCard.idCard) {
           this.selectAttack(firstCard.idCard);
           firstCard.node.destroy();
           secondCard.node.destroy();
        } else {
            // firstCard.flipCard();
            // secondCard.flipCard();
            console.log("sai me roi");
        }
        this.selectedCards = [];
    }

   selectAttack(id) {
        switch (id) {
            case 0:
                console.log("Giap ne ");
                break
            case 1:
                console.log("Mau ne ");
                break
            case 2:
                console.log("Cung nho ban ");
                break
            case 3:
                console.log("Cung Tb bắn ");
                break
            case 4:
                console.log("Giap ne ");
                break
            case 5:
                console.log("Giap ne ");
                break
            case 6:
                console.log("Giap ne ");
                break
            case 7:
                console.log("Giap ne ");
                break
            case 8:
                console.log("Giap ne ");
                break
            default:
                break;
        }
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
