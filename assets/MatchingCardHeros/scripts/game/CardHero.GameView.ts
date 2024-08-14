// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Global } from "../CardHero.Global";
import Card from "./CardHero.Card";
import Char from "./CardHero.Char";
import Level from "./CardHero.LevelView";
import Monster from "./CardHero.Monster";
import GameOver from "./popup/CardHero.GameOver";
import Pause from "./popup/CardHero.Pause";

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

    @property(cc.Node)
    nShield: cc.Node = null;
    @property(cc.Label)
    lbShield: cc.Label = null;
    @property(cc.Node)
    nDameMonsterMiss: cc.Node = null;

    @property(cc.Label)
    lbLevel: cc.Label = null;
    listMonsters = [];
    idMonster = 0;
    rows = 5;
    cols = 5;
    spacing = 10;
    private startX: number = -337;
    private startY: number = 210;
    private tileWidth: number = 135;
    selectedLevel: number = 0;
    monstersDefeated = 0;

    isCheck = false;
    countMonsterDie = 0;
    private currentMonsterIndex: number = -1;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.selectedLevel = parseInt(cc.sys.localStorage.getItem('selectedLevel')) || 0;
        Global.dameCharSmall = parseInt(cc.sys.localStorage.getItem("dameCharSmall")) || Global.dameCharSmall;
        Global.dameCharNormal = parseInt(cc.sys.localStorage.getItem("dameCharNormal")) || Global.dameCharNormal;
        Global.dameCharBig = parseInt(cc.sys.localStorage.getItem("dameCharBig")) || Global.dameCharBig;
        Global.hpChar = parseInt(cc.sys.localStorage.getItem("hpChar")) || Global.hpChar;
        if(parseInt(cc.sys.localStorage.getItem("hpChar"))) {
            Global.hpChar = parseInt(cc.sys.localStorage.getItem("hpChar")) || Global.hpChar;
            console.log("vao if")
            this.updateHpChar();
        }else {
            Global.hpChar = 10;
            this.updateHpChar();
            console.log("vao else");
        }
        GameView.instance = this;
        this.listIdCard = this.shuffleArray(this.listIdCard);
        this.maskLoadGame();
        this.scheduleOnce(() => {
            this.loadCards();

        }, 1)
        this.spawnMonster(); 
        this.updateHpBagGuy();
        this.updateLevelLb();

    }

    updateLevelLb() {
        this.lbLevel.string = `LV ${this.selectedLevel + 1}`;
    }
    onDestroy() {
        GameView.instance = null
    }

    maskLoadGame() {
        this.nMaskLoadGame.active = true;
        this.scheduleOnce(() => {
            this.nMaskLoadGame.active = false;
        }, 7)
    }

    loadCards() {
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
    spawnMonster() {
        const levelInfo = Global.levelData[this.selectedLevel];
        console.log("level ",this.selectedLevel);
        if (this.currentMonsterIndex < levelInfo.monsters) {
            this.currentMonsterIndex++;
            let id = this.currentMonsterIndex
            this.createMonster(id, levelInfo.hp, levelInfo.dame);
            console.log("Quai vat dau tien ", this.currentMonsterIndex);
        } else {
            this.completeLevel();
        }

    }

    createMonster(id: number, hp: number, dame: number) {
        let monster = cc.instantiate(this.prfMonster).getComponent(Monster);
        let spriteIdList = Global.levelMonsterSprites[this.selectedLevel];
        let spriteId = spriteIdList[id];
        monster.setMonster(spriteId, hp, dame);
        this.nMonters.addChild(monster.node);
        this.listMonsters.push(monster);
    }


    attackMonster(dame) {
        if (this.listMonsters.length > 0) {
            let [monster] = this.listMonsters;
            if (monster && monster.node) {
                monster.receiveDamage(dame);
                if (Global.hpMonster <= 0) {
                    this.listMonsters = this.listMonsters.filter(m => m !== monster);
                    this.monstersDefeated++;
                    this.countMonsterDie++;
                    console.log("Montes die ", this.countMonsterDie);
                    this.scheduleOnce(() => {
                        this.spawnMonster(); 
                    },0.8)
                    
                    console.log("Monster ", this.listMonsters);
                }
            }
        }
    }

    completeLevel() {
        let wasCompleted = cc.sys.localStorage.getItem(`level_${this.selectedLevel}_completed`) === 'true';
        if (!wasCompleted) {
            Global.totalGold += 1;
            Level.instance.updateGold();
        }

        
        cc.sys.localStorage.setItem(`level_${this.selectedLevel}_completed`, 'true');
        console.log(`Level ${this.selectedLevel} đã hoàn thành`);
    
        // Mở khóa level tiếp theo
        let nextLevel = this.selectedLevel + 1;
        if (nextLevel < Global.levelData.length) {
            cc.sys.localStorage.setItem(`level_${nextLevel}_unlocked`, 'true');
            Level.instance.updateLevelStatus(nextLevel);
        }
        console.log("level tiep theo la ", nextLevel);

        if(nextLevel == 5 || nextLevel == 14) {
            cc.sys.localStorage.setItem(`level_${nextLevel}_isBoss`, 'true');
            Level.instance.updateLevelStatus(nextLevel);
        }

        if(this.selectedLevel == 5 || this.selectedLevel == 14) {
            cc.sys.localStorage.setItem(`level_${this.selectedLevel}_flagBoss`, 'true');
            console.log('co bosss', this.selectedLevel);
            Level.instance.updateLevelStatus(this.selectedLevel);
    
        }
        // Lưu trạng thái lá cờ
        cc.sys.localStorage.setItem(`level_${this.selectedLevel}_flag`, 'true');
        Level.instance.updateLevelStatus(this.selectedLevel);
    
        const lastLevel = Global.levelData.length - 1;
        if (this.selectedLevel >= lastLevel) {
            console.log("Đã hoàn thành tất cả các level, không thể chơi tiếp.");
        }
        
        this.gameOver(true);
    
    }


    loadNextLevel() {
        // Thiết lập lại trạng thái cần thiết cho level mới
        if(parseInt(cc.sys.localStorage.getItem("hpChar"))) {
            Global.hpChar = parseInt(cc.sys.localStorage.getItem("hpChar")) || Global.hpChar;
            console.log("vao if")
            this.updateHpChar();
        }else {
            Global.hpChar = 10;
            this.updateHpChar();
            console.log("vao else");
        }
        Global.shield = 0;
        this.monstersDefeated = 0;
        this.currentMonsterIndex = -1;
        this.countMonsterDie = 0;
        this.nShield.active =false;
        this.nTableCards.removeAllChildren();
        this.nMonters.removeAllChildren();
        this.selectedCards = [];
        this.listMonsters = [];

        this.listIdCard = this.shuffleArray(this.listIdCard);
        this.loadCards();
        this.spawnMonster(); 
        this.updateHpChar();
        this.updateHpBagGuy();
        this.maskLoadGame();

        console.log(`Loaded Level ${this.selectedLevel}`);
        this.updateLevelLb();
    }


    gameOver(isWin: boolean) {
        // let prfGameOver = cc.instantiate(this.prfGameOver).getComponent(GameOver);
        
        // if (isWin) {
        //     prfGameOver.nStarWin_1.active = true;
        //     prfGameOver.nStarWin_2.active = true;
        //     prfGameOver.nStarWin_3.active = true;
        //     prfGameOver.nBtnNext.getComponent(cc.Button).interactable = true;
        //     prfGameOver.nBtnNext.getComponent(cc.Button).enableAutoGrayEffect = false;
        //     prfGameOver.winGame(true);
        //     prfGameOver.nBtnNext.on('click', () => {
        //         this.selectedLevel++;
        //         cc.sys.localStorage.setItem('selectedLevel', this.selectedLevel.toString());
        //         this.loadNextLevel();
        //     }, this);
    
        //     console.log("Level hoàn thành", this.selectedLevel);
        // } else {
        //     prfGameOver.winGame(false);
        //     prfGameOver.nBtnNext.getComponent(cc.Button).interactable = false;
        //     prfGameOver.nBtnNext.getComponent(cc.Button).enableAutoGrayEffect = true;
        // }
        
        // this.node.addChild(prfGameOver.node);
        // console.log("Số quái vật trong level: ", Global.levelData[this.selectedLevel].monsters);
        // console.log("Số quái vật đã chết: ", this.countMonsterDie);

        let prfGameOver = cc.instantiate(this.prfGameOver).getComponent(GameOver);
    
        if (isWin) {
            prfGameOver.nStarWin_1.active = true;
            prfGameOver.nStarWin_2.active = true;
            prfGameOver.nStarWin_3.active = true;
    
            const lastLevel = Global.levelData.length - 1;
            if (this.selectedLevel >= lastLevel) {
                prfGameOver.nBtnNext.getComponent(cc.Button).interactable = false;
                prfGameOver.nBtnNext.getComponent(cc.Button).enableAutoGrayEffect = true;
                console.log("Đã hoàn thành tất cả các level, không thể chơi tiếp.");
            } else {
                prfGameOver.nBtnNext.getComponent(cc.Button).interactable = true;
                prfGameOver.nBtnNext.getComponent(cc.Button).enableAutoGrayEffect = false;
                prfGameOver.nBtnNext.on('click', () => {
                    this.selectedLevel++;
                    cc.sys.localStorage.setItem('selectedLevel', this.selectedLevel.toString());
                    this.loadNextLevel();
                }, this);
            }
    
            prfGameOver.winGame(true);
            console.log("Level hoàn thành", this.selectedLevel);
        } else {
            prfGameOver.winGame(false);
            prfGameOver.nBtnNext.getComponent(cc.Button).interactable = false;
            prfGameOver.nBtnNext.getComponent(cc.Button).enableAutoGrayEffect = true;
        }
        
        this.node.addChild(prfGameOver.node);
        console.log("Số quái vật trong level: ", Global.levelData[this.selectedLevel].monsters);
        console.log("Số quái vật đã chết: ", this.countMonsterDie);
    }

    onClickPause() {
        let prfPause = cc.instantiate(this.prfPause).getComponent(Pause)
        this.node.addChild(prfPause.node);
        this.nTableCards.children.forEach(element => {
            element.active = false;
        });
    }

    onClickResume() {
        this.nTableCards.children.forEach(element => {
            element.active = true;
        });
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
                this.scheduleOnce(this.checkMatch.bind(this), 0.6);
            }
        }
    }


    checkMatch() {
        let [firstCard, secondCard] = this.selectedCards;

        if (firstCard.idCard === 0 && secondCard.idCard === 0) {
            Global.shield = 3;
            this.nShield.active = true;
            console.log("Shield Activated: ", Global.shield);
            this.updateShield();
            firstCard.node.destroy();
            secondCard.node.destroy();
        } else if (firstCard.idCard === 12 || secondCard.idCard === 12) {
            let doubleDame = true;
            let multiplierCard = firstCard.idCard === 12 ? secondCard : firstCard;
            this.selectAttack(multiplierCard.idCard, doubleDame);
            firstCard.node.destroy();
            secondCard.node.destroy();
        } else if (firstCard.idCard === secondCard.idCard) {
            this.selectAttack(firstCard.idCard, false);
            firstCard.node.destroy();
            secondCard.node.destroy();
        } else {

            if (Global.shield > 0) {
                Global.shield--;
                this.updateShield();
                this.effectDameBagGuyMiss(this.nDameMonsterMiss);
                console.log("Shield: ", Global.shield);
            } if (Global.shield == 0) {
                this.nShield.active = false;
                Global.hpChar -= Global.dameMonster;
                this.effectDameBagGuy(this.lbDameMonster, Global.dameMonster);
                this.updateHpChar();
                if (Global.hpChar <= 0) {
                    this.gameOver(false); // Gọi hàm gameOver với điều kiện thua
                    return;
                }
            }

            firstCard.flipCard();
            secondCard.flipCard();
            firstCard.isClicked = false;
            secondCard.isClicked = false;
        }

        this.selectedCards = [];
    }


    selectAttack(id, isDoubleDame: boolean) {
        switch (id) {
            case 0:
                console.log("Giap ne ");
                if (Global.shield === 0) {
                    Global.shield = 3;
                }
                Global.shield *= isDoubleDame ? 2 : 1;
                this.nShield.active = true;
                this.updateShield();
                break
            case 1:
                console.log("Mau ne ");
                // if (Global.hpChar >= 10) return;
                // else {
                if (isDoubleDame) {
                    Global.hpChar *= 2;
                } else {
                    Global.hpChar += 5;
                }
                this.updateHpChar();
                //}
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
            case 11:
                let totalDame = Global.dameCharSmall + Global.dameCharNormal  + Global.dameCharBig;
                totalDame *= (isDoubleDame) ? 2 : 1;
                this.charMagic.charAttack()
                this.charFighter.charAttack();
                this.charArchers.charAttack();
                this.attackMonster(totalDame);
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
            .to(1, { y: 200 })
            .call(() => {
                node.active = false;
                node.y = -70;
            }).start();
    }

    effectDameBagGuyMiss(node: cc.Node) {
        if (Global.shield > 0) {
            node.active = true;
            //node.getComponent(cc.Label).string = "-" + dame;
            cc.tween(node)
                .to(1, { y: 200 })
                .call(() => {
                    node.active = false;
                    node.y = -70;
                }).start();
        } if (Global.shield == 0) {
            node.active = false;
        }

    }
    updateHpChar() {
        this.lbHpChar.string = Global.hpChar + ' ';
    }

    updateHpBagGuy() {
        this.lbHpMonster.string = Global.hpMonster + ' ';
    }

    updateShield() {
        this.lbShield.string = Global.shield + ' ';
    }
    onClickRestart() {
        if(parseInt(cc.sys.localStorage.getItem("hpChar"))) {
            Global.hpChar = parseInt(cc.sys.localStorage.getItem("hpChar")) || Global.hpChar;
            console.log("vao if")
            this.updateHpChar();
        }else {
            Global.hpChar = 10;
            this.updateHpChar();
            console.log("vao else");
        }
        this.monstersDefeated = 0;
        this.currentMonsterIndex = 0;
        this.countMonsterDie = 0;
        console.log("quai chet resart", this.countMonsterDie);
        this.updateHpChar();
        //this.updateHpBagGuy();
        this.maskLoadGame();
        this.nTableCards.removeAllChildren();
        this.nMonters.removeAllChildren();
        this.selectedCards = [];
        this.listMonsters = [];
        this.listIdCard = this.shuffleArray(this.listIdCard);
        this.loadCards();
        this.createMonster(0, Global.levelData[this.selectedLevel].hp, 1);
        Global.shield = 0;
        this.nShield.active = false;
        this.updateShield();
        console.log("Game restarted");
    }

    destroyGame() {
        console.log("destroyyy ")
        this.node.destroy();
    }
    // update (dt) {}
}
