// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Global } from "../CardHero.Global";
import Card from "./CardHero.Card";
import Char from "./CardHero.Char";
import Monster from "./CardHero.Monster";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameView extends cc.Component {
    public static instance: GameView = null;
    @property(cc.Prefab)
    prfCard: cc.Prefab = null;
    @property(cc.Prefab)
    prfMonster: cc.Prefab = null;
    @property(cc.SpriteFrame)
    listSpfCards: cc.SpriteFrame[] = [];
    @property(cc.Node)
    nMonters: cc.Node = null;
    @property(cc.Node)
    nTableCards: cc.Node = null;
    @property(cc.Label)
    lbHpChar: cc.Label = null;
    @property(cc.Label)
    lbHpMonster: cc.Label = null;
    @property(cc.Node)
    nMaskClick: cc.Node = null;
    @property(cc.Node)
    nMaskLoadGame: cc.Node = null;
    @property(cc.Node)
    lbDameMonster: cc.Node = null;
    @property(cc.SpriteFrame)
    listSpfMonster: cc.SpriteFrame[] = [];
    isClick = false;
    countClick = 0;
    listIdCard = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12];
    selectedCards = [];
    dataCard = [];
    @property(Char)
    charArchers: Char = null;
    @property(Char)
    charFighter: Char = null;
    @property(Char)
    charMagic: Char = null;

    @property(cc.Node)
    lbDameChar: cc.Node = null;

    @property(cc.Prefab)
    prfGameOver: cc.Prefab = null;

    @property(cc.Prefab)
    prfPause: cc.Prefab = null;
    listMonsters = [];
    idMonster = 0;
    rows = 5;
    cols = 5;
    spacing = 10;
    private startX: number = -337;
    private startY: number = 210;
    private tileWidth: number = 135;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        GameView.instance = this;
        this.listIdCard = this.shuffleArray(this.listIdCard);
        this.maskLoadGame();
        this.scheduleOnce(() => {
            this.loadCards();

        }, 1)
        this.createMonster(0, 10, 1);
        this.updateHpChar();
        this.updateHpBagGuy();

    }

    maskLoadGame() {
        this.nMaskLoadGame.active = true;
        this.scheduleOnce(() => {
            this.nMaskLoadGame.active = false;
        }, 5)
    }

    loadCards() {
        // for(let i = 0; i < 25; i++) {
        //     let card = cc.instantiate(this.prfCard).getComponent(Card)
        //     card.setData(this.listIdCard[i])
        //     this.nTableCards.addChild(card.node);
        // }
        let idIndex = 0;

        for (let i = 0; i < this.rows; i++) {
            this.dataCard[i] = [];
            for (let j = 0; j < this.cols; j++) {
                if (idIndex >= this.listIdCard.length) break;

                let card = cc.instantiate(this.prfCard).getComponent(Card);
                card.setData(this.listIdCard[idIndex]);

                this.nTableCards.addChild(card.node);
                card.node.x = this.startX + j * this.tileWidth + this.tileWidth / 2;
                card.node.y = this.startY - i * this.tileWidth + this.tileWidth / 2;
                this.dataCard[i][j] = card;
                idIndex++;
            }
        }

    }

    createMonster(id: number, hp: number, dame: number) {
        let monter = cc.instantiate(this.prfMonster).getComponent(Monster)
        monter.setMonster(id, hp, dame);
        this.nMonters.addChild(monter.node);
        this.listMonsters.push(monter);
        //   this.idMonster++;
    }


    attackMonster(dame) {
        if (this.listMonsters.length > 0) {
            let [monster] = this.listMonsters;
            if (monster && monster.node) {
                monster.receiveDamage(dame);
                this.listMonsters = this.listMonsters.filter(m => m !== monster);
            }
        }
    }
    gameOver() {

        if (Global.hpChar == 0) {
            let prfGameOver = cc.instantiate(this.prfGameOver)
            this.node.addChild(prfGameOver);
        }
    }

    onClickPause() {
        let prfPause = cc.instantiate(this.prfPause)
        this.node.addChild(prfPause);
    }
    shuffleArray(array: number[]): number[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    addSelectedCard(card: Card) {
        if (this.selectedCards.length < 2) {
            this.selectedCards.push(card);
            if (this.selectedCards.length === 2) {
                this.scheduleOnce(this.checkMatch.bind(this), 0.8);
            }
        }
    }


    checkMatch() {
        let [firstCard, secondCard] = this.selectedCards;
        let doubleDame = false;
        if (firstCard.idCard === 12 || secondCard.idCard === 12) {
            doubleDame = true;
            let multiplierCard = (firstCard.idCard === 12) ? secondCard : firstCard;
            console.log("Id x2 ", multiplierCard.idCard);
            this.selectAttack(multiplierCard.idCard, true)
            firstCard.node.destroy();
            secondCard.node.destroy();
        } else if (firstCard.idCard === secondCard.idCard) {
            this.selectAttack(firstCard.idCard, false);
            firstCard.node.destroy();
            secondCard.node.destroy();
        } else {
            this.effectDameBagGuy(this.lbDameMonster, Global.dameMonster);
            Global.hpChar--;
            this.updateHpChar();
            firstCard.flipCard();
            secondCard.flipCard();
            firstCard.isClicked = false;
            secondCard.isClicked = false;
            this.gameOver();
        }


        this.selectedCards = [];
    }


    selectAttack(id, isDoubleDame: boolean) {
        switch (id) {
            case 0:
                console.log("Giap ne ");
                break
            case 1:
                console.log("Mau ne ");
                if (Global.hpChar >= 10) return;
                else {
                    Global.hpChar += 5;
                    this.updateHpChar();
                }
                break
            case 2:
                console.log("Cung nho ban ");
                Global.dameCharSmall *= (isDoubleDame) ? 2 : 1;
                this.charArchers.charAttack();
                this.attackMonster(Global.dameCharSmall);
                break
            case 3:
                console.log("Cung Tb ban ");
                Global.dameCharNormal *= (isDoubleDame) ? 2 : 1;
                this.attackMonster(Global.dameCharNormal)
                this.charArchers.charAttack();
                break
            case 4:
                this.charArchers.charAttack();
                Global.dameCharBig *= (isDoubleDame) ? 2 : 1;
                this.attackMonster(Global.dameCharBig);
                break
            case 5:
                Global.dameCharSmall *= (isDoubleDame) ? 2 : 1;
                Global.hpMonster -= Global.dameCharSmall;
                this.charFighter.charAttack();
                break
            case 6:
                Global.dameCharNormal *= (isDoubleDame) ? 2 : 1;
                this.charFighter.charAttack();
                this.attackMonster(Global.dameCharNormal);
                break
            case 7:
                console.log("KIem danh ");
                Global.dameCharBig *= (isDoubleDame) ? 2 : 1;
                this.charFighter.charAttack();
                this.attackMonster(Global.dameCharBig)
                break
            case 8:
                Global.dameCharSmall *= (isDoubleDame) ? 2 : 1;
                this.attackMonster(Global.dameCharSmall)
                this.charMagic.charAttack();
                break;
            case 9:
                Global.dameCharNormal *= (isDoubleDame) ? 2 : 1;
                this.attackMonster(Global.dameCharNormal)
                this.charMagic.charAttack();
                break
            case 10:
                Global.dameCharBig *= (isDoubleDame) ? 2 : 1;
                this.charMagic.charAttack();
                this.attackMonster(Global.dameCharBig)
                break
            default:
                break;
        }
    }
    start() {

    }

    effectDameBagGuy(node: cc.Node, dame: number) {
        node.active = true;
        node.getComponent(cc.Label).string = "-" + dame;
        cc.tween(node)
            .to(0.8, { y: 200 })
            .call(() => {
                node.active = false;
                node.y = -70;
            }).start();
    }
    updateHpChar() {
        this.lbHpChar.string = Global.hpChar + ' ';
    }

    updateHpBagGuy() {
        this.lbHpMonster.string = Global.hpMonster + ' ';
    }


    // update (dt) {}
}
