
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MatchingCardHeros/scripts/game/CardHero.GameView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8fd3cLAkYdOj7WjRM40JxNH', 'CardHero.GameView');
// MatchingCardHeros/scripts/game/CardHero.GameView.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var CardHero_Global_1 = require("../CardHero.Global");
var CardHero_Card_1 = require("./CardHero.Card");
var CardHero_Char_1 = require("./CardHero.Char");
var CardHero_LevelView_1 = require("./CardHero.LevelView");
var CardHero_Monster_1 = require("./CardHero.Monster");
var CardHero_GameOver_1 = require("./popup/CardHero.GameOver");
var CardHero_Pause_1 = require("./popup/CardHero.Pause");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prfCard = null;
        _this.prfMonster = null;
        _this.listSpfCards = [];
        _this.nMonters = null;
        _this.nTableCards = null;
        _this.lbHpChar = null;
        _this.lbHpMonster = null;
        _this.nMaskClick = null;
        _this.nMaskLoadGame = null;
        _this.lbDameMonster = null;
        _this.listSpfMonster = [];
        _this.isClick = false;
        _this.countClick = 0;
        _this.listIdCard = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12];
        _this.selectedCards = [];
        _this.dataCard = [];
        _this.charArchers = null;
        _this.charFighter = null;
        _this.charMagic = null;
        _this.lbDameChar = null;
        _this.prfGameOver = null;
        _this.prfPause = null;
        _this.nShield = null;
        _this.lbShield = null;
        _this.nDameMonsterMiss = null;
        _this.lbLevel = null;
        _this.listMonsters = [];
        _this.idMonster = 0;
        _this.rows = 5;
        _this.cols = 5;
        _this.spacing = 10;
        _this.startX = -337;
        _this.startY = 210;
        _this.tileWidth = 135;
        _this.selectedLevel = 0;
        _this.monstersDefeated = 0;
        _this.isCheck = false;
        _this.countMonsterDie = 0;
        _this.currentMonsterIndex = -1;
        return _this;
        // update (dt) {}
    }
    GameView_1 = GameView;
    // LIFE-CYCLE CALLBACKS:
    GameView.prototype.onLoad = function () {
        var _this = this;
        this.selectedLevel = parseInt(cc.sys.localStorage.getItem('selectedLevel')) || 0;
        CardHero_Global_1.Global.dameCharSmall = parseInt(cc.sys.localStorage.getItem("dameCharSmall")) || CardHero_Global_1.Global.dameCharSmall;
        CardHero_Global_1.Global.dameCharNormal = parseInt(cc.sys.localStorage.getItem("dameCharNormal")) || CardHero_Global_1.Global.dameCharNormal;
        CardHero_Global_1.Global.dameCharBig = parseInt(cc.sys.localStorage.getItem("dameCharBig")) || CardHero_Global_1.Global.dameCharBig;
        CardHero_Global_1.Global.hpChar = parseInt(cc.sys.localStorage.getItem("hpChar")) || CardHero_Global_1.Global.hpChar;
        if (parseInt(cc.sys.localStorage.getItem("hpChar"))) {
            CardHero_Global_1.Global.hpChar = parseInt(cc.sys.localStorage.getItem("hpChar")) || CardHero_Global_1.Global.hpChar;
            console.log("vao if");
            this.updateHpChar();
        }
        else {
            CardHero_Global_1.Global.hpChar = 10;
            this.updateHpChar();
            console.log("vao else");
        }
        GameView_1.instance = this;
        this.listIdCard = this.shuffleArray(this.listIdCard);
        this.maskLoadGame();
        this.scheduleOnce(function () {
            _this.loadCards();
        }, 1);
        this.spawnMonster();
        this.updateHpBagGuy();
        this.updateLevelLb();
    };
    GameView.prototype.updateLevelLb = function () {
        this.lbLevel.string = "LV " + (this.selectedLevel + 1);
    };
    GameView.prototype.onDestroy = function () {
        GameView_1.instance = null;
    };
    GameView.prototype.maskLoadGame = function () {
        var _this = this;
        this.nMaskLoadGame.active = true;
        this.scheduleOnce(function () {
            _this.nMaskLoadGame.active = false;
        }, 7);
    };
    GameView.prototype.loadCards = function () {
        var idIndex = 0;
        for (var i = 0; i < this.rows; i++) {
            this.dataCard[i] = [];
            for (var j = 0; j < this.cols; j++) {
                if (idIndex >= this.listIdCard.length)
                    break;
                var card = cc.instantiate(this.prfCard).getComponent(CardHero_Card_1.default);
                card.setData(this.listIdCard[idIndex]);
                this.nTableCards.addChild(card.node);
                card.node.x = this.startX + j * this.tileWidth + this.tileWidth / 2;
                card.node.y = this.startY - i * this.tileWidth + this.tileWidth / 2;
                this.dataCard[i][j] = card;
                idIndex++;
            }
        }
    };
    GameView.prototype.spawnMonster = function () {
        var levelInfo = CardHero_Global_1.Global.levelData[this.selectedLevel];
        console.log("level ", this.selectedLevel);
        if (this.currentMonsterIndex < levelInfo.monsters) {
            this.currentMonsterIndex++;
            var id = this.currentMonsterIndex;
            this.createMonster(id, levelInfo.hp, levelInfo.dame);
            console.log("Quai vat dau tien ", this.currentMonsterIndex);
        }
        else {
            this.completeLevel();
        }
    };
    GameView.prototype.createMonster = function (id, hp, dame) {
        var monster = cc.instantiate(this.prfMonster).getComponent(CardHero_Monster_1.default);
        var spriteIdList = CardHero_Global_1.Global.levelMonsterSprites[this.selectedLevel];
        var spriteId = spriteIdList[id];
        monster.setMonster(spriteId, hp, dame);
        this.nMonters.addChild(monster.node);
        this.listMonsters.push(monster);
    };
    GameView.prototype.attackMonster = function (dame) {
        var _this = this;
        if (this.listMonsters.length > 0) {
            var monster_1 = this.listMonsters[0];
            if (monster_1 && monster_1.node) {
                monster_1.receiveDamage(dame);
                if (CardHero_Global_1.Global.hpMonster <= 0) {
                    this.listMonsters = this.listMonsters.filter(function (m) { return m !== monster_1; });
                    this.monstersDefeated++;
                    this.countMonsterDie++;
                    console.log("Montes die ", this.countMonsterDie);
                    this.scheduleOnce(function () {
                        _this.spawnMonster();
                    }, 0.8);
                    console.log("Monster ", this.listMonsters);
                }
            }
        }
    };
    GameView.prototype.completeLevel = function () {
        var wasCompleted = cc.sys.localStorage.getItem("level_" + this.selectedLevel + "_completed") === 'true';
        if (!wasCompleted) {
            CardHero_Global_1.Global.totalGold += 1;
            CardHero_LevelView_1.default.instance.updateGold();
        }
        cc.sys.localStorage.setItem("level_" + this.selectedLevel + "_completed", 'true');
        console.log("Level " + this.selectedLevel + " \u0111\u00E3 ho\u00E0n th\u00E0nh");
        // Mở khóa level tiếp theo
        var nextLevel = this.selectedLevel + 1;
        if (nextLevel < CardHero_Global_1.Global.levelData.length) {
            cc.sys.localStorage.setItem("level_" + nextLevel + "_unlocked", 'true');
            CardHero_LevelView_1.default.instance.updateLevelStatus(nextLevel);
        }
        console.log("level tiep theo la ", nextLevel);
        if (nextLevel == 5 || nextLevel == 14) {
            cc.sys.localStorage.setItem("level_" + nextLevel + "_isBoss", 'true');
            CardHero_LevelView_1.default.instance.updateLevelStatus(nextLevel);
        }
        if (this.selectedLevel == 5 || this.selectedLevel == 14) {
            cc.sys.localStorage.setItem("level_" + this.selectedLevel + "_flagBoss", 'true');
            console.log('co bosss', this.selectedLevel);
            CardHero_LevelView_1.default.instance.updateLevelStatus(this.selectedLevel);
        }
        // Lưu trạng thái lá cờ
        cc.sys.localStorage.setItem("level_" + this.selectedLevel + "_flag", 'true');
        CardHero_LevelView_1.default.instance.updateLevelStatus(this.selectedLevel);
        var lastLevel = CardHero_Global_1.Global.levelData.length - 1;
        if (this.selectedLevel >= lastLevel) {
            console.log("Đã hoàn thành tất cả các level, không thể chơi tiếp.");
        }
        this.gameOver(true);
    };
    GameView.prototype.loadNextLevel = function () {
        // Thiết lập lại trạng thái cần thiết cho level mới
        if (parseInt(cc.sys.localStorage.getItem("hpChar"))) {
            CardHero_Global_1.Global.hpChar = parseInt(cc.sys.localStorage.getItem("hpChar")) || CardHero_Global_1.Global.hpChar;
            console.log("vao if");
            this.updateHpChar();
        }
        else {
            CardHero_Global_1.Global.hpChar = 10;
            this.updateHpChar();
            console.log("vao else");
        }
        CardHero_Global_1.Global.shield = 0;
        this.monstersDefeated = 0;
        this.currentMonsterIndex = -1;
        this.countMonsterDie = 0;
        this.nShield.active = false;
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
        console.log("Loaded Level " + this.selectedLevel);
        this.updateLevelLb();
    };
    GameView.prototype.gameOver = function (isWin) {
        // let prfGameOver = cc.instantiate(this.prfGameOver).getComponent(GameOver);
        var _this = this;
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
        var prfGameOver = cc.instantiate(this.prfGameOver).getComponent(CardHero_GameOver_1.default);
        if (isWin) {
            prfGameOver.nStarWin_1.active = true;
            prfGameOver.nStarWin_2.active = true;
            prfGameOver.nStarWin_3.active = true;
            var lastLevel = CardHero_Global_1.Global.levelData.length - 1;
            if (this.selectedLevel >= lastLevel) {
                prfGameOver.nBtnNext.getComponent(cc.Button).interactable = false;
                prfGameOver.nBtnNext.getComponent(cc.Button).enableAutoGrayEffect = true;
                console.log("Đã hoàn thành tất cả các level, không thể chơi tiếp.");
            }
            else {
                prfGameOver.nBtnNext.getComponent(cc.Button).interactable = true;
                prfGameOver.nBtnNext.getComponent(cc.Button).enableAutoGrayEffect = false;
                prfGameOver.nBtnNext.on('click', function () {
                    _this.selectedLevel++;
                    cc.sys.localStorage.setItem('selectedLevel', _this.selectedLevel.toString());
                    _this.loadNextLevel();
                }, this);
            }
            prfGameOver.winGame(true);
            console.log("Level hoàn thành", this.selectedLevel);
        }
        else {
            prfGameOver.winGame(false);
            prfGameOver.nBtnNext.getComponent(cc.Button).interactable = false;
            prfGameOver.nBtnNext.getComponent(cc.Button).enableAutoGrayEffect = true;
        }
        this.node.addChild(prfGameOver.node);
        console.log("Số quái vật trong level: ", CardHero_Global_1.Global.levelData[this.selectedLevel].monsters);
        console.log("Số quái vật đã chết: ", this.countMonsterDie);
    };
    GameView.prototype.onClickPause = function () {
        var prfPause = cc.instantiate(this.prfPause).getComponent(CardHero_Pause_1.default);
        this.node.addChild(prfPause.node);
        this.nTableCards.children.forEach(function (element) {
            element.active = false;
        });
    };
    GameView.prototype.onClickResume = function () {
        this.nTableCards.children.forEach(function (element) {
            element.active = true;
        });
    };
    GameView.prototype.shuffleArray = function (array) {
        var _a;
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
        return array;
    };
    GameView.prototype.addSelectedCard = function (card) {
        if (this.selectedCards.length < 2) {
            this.selectedCards.push(card);
            if (this.selectedCards.length === 2) {
                this.scheduleOnce(this.checkMatch.bind(this), 0.6);
            }
        }
    };
    GameView.prototype.checkMatch = function () {
        var _a = this.selectedCards, firstCard = _a[0], secondCard = _a[1];
        if (firstCard.idCard === 0 && secondCard.idCard === 0) {
            CardHero_Global_1.Global.shield = 3;
            this.nShield.active = true;
            console.log("Shield Activated: ", CardHero_Global_1.Global.shield);
            this.updateShield();
            firstCard.node.destroy();
            secondCard.node.destroy();
        }
        else if (firstCard.idCard === 12 || secondCard.idCard === 12) {
            var doubleDame = true;
            var multiplierCard = firstCard.idCard === 12 ? secondCard : firstCard;
            this.selectAttack(multiplierCard.idCard, doubleDame);
            firstCard.node.destroy();
            secondCard.node.destroy();
        }
        else if (firstCard.idCard === secondCard.idCard) {
            this.selectAttack(firstCard.idCard, false);
            firstCard.node.destroy();
            secondCard.node.destroy();
        }
        else {
            if (CardHero_Global_1.Global.shield > 0) {
                CardHero_Global_1.Global.shield--;
                this.updateShield();
                this.effectDameBagGuyMiss(this.nDameMonsterMiss);
                console.log("Shield: ", CardHero_Global_1.Global.shield);
            }
            if (CardHero_Global_1.Global.shield == 0) {
                this.nShield.active = false;
                CardHero_Global_1.Global.hpChar -= CardHero_Global_1.Global.dameMonster;
                this.effectDameBagGuy(this.lbDameMonster, CardHero_Global_1.Global.dameMonster);
                this.updateHpChar();
                if (CardHero_Global_1.Global.hpChar <= 0) {
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
    };
    GameView.prototype.selectAttack = function (id, isDoubleDame) {
        switch (id) {
            case 0:
                console.log("Giap ne ");
                if (CardHero_Global_1.Global.shield === 0) {
                    CardHero_Global_1.Global.shield = 3;
                }
                CardHero_Global_1.Global.shield *= isDoubleDame ? 2 : 1;
                this.nShield.active = true;
                this.updateShield();
                break;
            case 1:
                console.log("Mau ne ");
                // if (Global.hpChar >= 10) return;
                // else {
                if (isDoubleDame) {
                    CardHero_Global_1.Global.hpChar *= 2;
                }
                else {
                    CardHero_Global_1.Global.hpChar += 5;
                }
                this.updateHpChar();
                //}
                break;
            case 2:
                console.log("Cung nho ban ");
                CardHero_Global_1.Global.dameCharSmall *= (isDoubleDame) ? 2 : 1;
                this.charArchers.charAttack();
                this.attackMonster(CardHero_Global_1.Global.dameCharSmall);
                break;
            case 3:
                console.log("Cung Tb ban ");
                CardHero_Global_1.Global.dameCharNormal *= (isDoubleDame) ? 2 : 1;
                this.attackMonster(CardHero_Global_1.Global.dameCharNormal);
                this.charArchers.charAttack();
                break;
            case 4:
                this.charArchers.charAttack();
                CardHero_Global_1.Global.dameCharBig *= (isDoubleDame) ? 2 : 1;
                this.attackMonster(CardHero_Global_1.Global.dameCharBig);
                break;
            case 5:
                CardHero_Global_1.Global.dameCharSmall *= (isDoubleDame) ? 2 : 1;
                CardHero_Global_1.Global.hpMonster -= CardHero_Global_1.Global.dameCharSmall;
                this.charFighter.charAttack();
                break;
            case 6:
                CardHero_Global_1.Global.dameCharNormal *= (isDoubleDame) ? 2 : 1;
                this.charFighter.charAttack();
                this.attackMonster(CardHero_Global_1.Global.dameCharNormal);
                break;
            case 7:
                console.log("KIem danh ");
                CardHero_Global_1.Global.dameCharBig *= (isDoubleDame) ? 2 : 1;
                this.charFighter.charAttack();
                this.attackMonster(CardHero_Global_1.Global.dameCharBig);
                break;
            case 8:
                CardHero_Global_1.Global.dameCharSmall *= (isDoubleDame) ? 2 : 1;
                this.attackMonster(CardHero_Global_1.Global.dameCharSmall);
                this.charMagic.charAttack();
                break;
            case 9:
                CardHero_Global_1.Global.dameCharNormal *= (isDoubleDame) ? 2 : 1;
                this.attackMonster(CardHero_Global_1.Global.dameCharNormal);
                this.charMagic.charAttack();
                break;
            case 10:
                CardHero_Global_1.Global.dameCharBig *= (isDoubleDame) ? 2 : 1;
                this.charMagic.charAttack();
                this.attackMonster(CardHero_Global_1.Global.dameCharBig);
                break;
            case 11:
                var totalDame = CardHero_Global_1.Global.dameCharSmall + CardHero_Global_1.Global.dameCharNormal + CardHero_Global_1.Global.dameCharBig;
                totalDame *= (isDoubleDame) ? 2 : 1;
                this.charMagic.charAttack();
                this.charFighter.charAttack();
                this.charArchers.charAttack();
                this.attackMonster(totalDame);
            default:
                break;
        }
    };
    GameView.prototype.start = function () {
    };
    GameView.prototype.effectDameBagGuy = function (node, dame) {
        node.active = true;
        node.getComponent(cc.Label).string = "-" + dame;
        cc.tween(node)
            .to(1, { y: 200 })
            .call(function () {
            node.active = false;
            node.y = -70;
        }).start();
    };
    GameView.prototype.effectDameBagGuyMiss = function (node) {
        if (CardHero_Global_1.Global.shield > 0) {
            node.active = true;
            //node.getComponent(cc.Label).string = "-" + dame;
            cc.tween(node)
                .to(1, { y: 200 })
                .call(function () {
                node.active = false;
                node.y = -70;
            }).start();
        }
        if (CardHero_Global_1.Global.shield == 0) {
            node.active = false;
        }
    };
    GameView.prototype.updateHpChar = function () {
        this.lbHpChar.string = CardHero_Global_1.Global.hpChar + ' ';
    };
    GameView.prototype.updateHpBagGuy = function () {
        this.lbHpMonster.string = CardHero_Global_1.Global.hpMonster + ' ';
    };
    GameView.prototype.updateShield = function () {
        this.lbShield.string = CardHero_Global_1.Global.shield + ' ';
    };
    GameView.prototype.onClickRestart = function () {
        if (parseInt(cc.sys.localStorage.getItem("hpChar"))) {
            CardHero_Global_1.Global.hpChar = parseInt(cc.sys.localStorage.getItem("hpChar")) || CardHero_Global_1.Global.hpChar;
            console.log("vao if");
            this.updateHpChar();
        }
        else {
            CardHero_Global_1.Global.hpChar = 10;
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
        this.createMonster(0, CardHero_Global_1.Global.levelData[this.selectedLevel].hp, 1);
        CardHero_Global_1.Global.shield = 0;
        this.nShield.active = false;
        this.updateShield();
        console.log("Game restarted");
    };
    GameView.prototype.destroyGame = function () {
        console.log("destroyyy ");
        this.node.destroy();
    };
    var GameView_1;
    GameView.instance = null;
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "prfCard", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "prfMonster", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameView.prototype, "listSpfCards", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nMonters", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nTableCards", void 0);
    __decorate([
        property(cc.Label)
    ], GameView.prototype, "lbHpChar", void 0);
    __decorate([
        property(cc.Label)
    ], GameView.prototype, "lbHpMonster", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nMaskClick", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nMaskLoadGame", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "lbDameMonster", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameView.prototype, "listSpfMonster", void 0);
    __decorate([
        property(CardHero_Char_1.default)
    ], GameView.prototype, "charArchers", void 0);
    __decorate([
        property(CardHero_Char_1.default)
    ], GameView.prototype, "charFighter", void 0);
    __decorate([
        property(CardHero_Char_1.default)
    ], GameView.prototype, "charMagic", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "lbDameChar", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "prfGameOver", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "prfPause", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nShield", void 0);
    __decorate([
        property(cc.Label)
    ], GameView.prototype, "lbShield", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nDameMonsterMiss", void 0);
    __decorate([
        property(cc.Label)
    ], GameView.prototype, "lbLevel", void 0);
    GameView = GameView_1 = __decorate([
        ccclass
    ], GameView);
    return GameView;
}(cc.Component));
exports.default = GameView;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uR2FtZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsc0RBQTRDO0FBQzVDLGlEQUFtQztBQUNuQyxpREFBbUM7QUFDbkMsMkRBQXlDO0FBQ3pDLHVEQUF5QztBQUN6QywrREFBaUQ7QUFDakQseURBQTJDO0FBRXJDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBd2lCQztRQXJpQkcsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFxQixFQUFFLENBQUM7UUFFcEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLG9CQUFjLEdBQXFCLEVBQUUsQ0FBQztRQUN0QyxhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZ0JBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUs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R0F3aUJqRDtrQkF4aUJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9DYXJkSGVyby5HbG9iYWxcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRIZXJvLkNhcmRcIjtcbmltcG9ydCBDaGFyIGZyb20gXCIuL0NhcmRIZXJvLkNoYXJcIjtcbmltcG9ydCBMZXZlbCBmcm9tIFwiLi9DYXJkSGVyby5MZXZlbFZpZXdcIjtcbmltcG9ydCBNb25zdGVyIGZyb20gXCIuL0NhcmRIZXJvLk1vbnN0ZXJcIjtcbmltcG9ydCBHYW1lT3ZlciBmcm9tIFwiLi9wb3B1cC9DYXJkSGVyby5HYW1lT3ZlclwiO1xuaW1wb3J0IFBhdXNlIGZyb20gXCIuL3BvcHVwL0NhcmRIZXJvLlBhdXNlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogR2FtZVZpZXcgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmQ2FyZDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZk1vbnN0ZXI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGxpc3RTcGZDYXJkczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Nb250ZXJzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuVGFibGVDYXJkczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiSHBDaGFyOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiSHBNb25zdGVyOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbk1hc2tDbGljazogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbk1hc2tMb2FkR2FtZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGJEYW1lTW9uc3RlcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGxpc3RTcGZNb25zdGVyOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgaXNDbGljayA9IGZhbHNlO1xuICAgIGNvdW50Q2xpY2sgPSAwO1xuICAgIGxpc3RJZENhcmQgPSBbMCwgMCwgMSwgMSwgMiwgMiwgMywgMywgNCwgNCwgNSwgNSwgNiwgNiwgNywgNywgOCwgOCwgOSwgOSwgMTAsIDEwLCAxMSwgMTEsIDEyXTtcbiAgICBzZWxlY3RlZENhcmRzID0gW107XG4gICAgZGF0YUNhcmQgPSBbXTtcbiAgICBAcHJvcGVydHkoQ2hhcilcbiAgICBjaGFyQXJjaGVyczogQ2hhciA9IG51bGw7XG4gICAgQHByb3BlcnR5KENoYXIpXG4gICAgY2hhckZpZ2h0ZXI6IENoYXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShDaGFyKVxuICAgIGNoYXJNYWdpYzogQ2hhciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYkRhbWVDaGFyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmR2FtZU92ZXI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZlBhdXNlOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblNoaWVsZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiU2hpZWxkOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkRhbWVNb25zdGVyTWlzczogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJMZXZlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIGxpc3RNb25zdGVycyA9IFtdO1xuICAgIGlkTW9uc3RlciA9IDA7XG4gICAgcm93cyA9IDU7XG4gICAgY29scyA9IDU7XG4gICAgc3BhY2luZyA9IDEwO1xuICAgIHByaXZhdGUgc3RhcnRYOiBudW1iZXIgPSAtMzM3O1xuICAgIHByaXZhdGUgc3RhcnRZOiBudW1iZXIgPSAyMTA7XG4gICAgcHJpdmF0ZSB0aWxlV2lkdGg6IG51bWJlciA9IDEzNTtcbiAgICBzZWxlY3RlZExldmVsOiBudW1iZXIgPSAwO1xuICAgIG1vbnN0ZXJzRGVmZWF0ZWQgPSAwO1xuXG4gICAgaXNDaGVjayA9IGZhbHNlO1xuICAgIGNvdW50TW9uc3RlckRpZSA9IDA7XG4gICAgcHJpdmF0ZSBjdXJyZW50TW9uc3RlckluZGV4OiBudW1iZXIgPSAtMTtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZExldmVsID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZWxlY3RlZExldmVsJykpIHx8IDA7XG4gICAgICAgIEdsb2JhbC5kYW1lQ2hhclNtYWxsID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGFtZUNoYXJTbWFsbFwiKSkgfHwgR2xvYmFsLmRhbWVDaGFyU21hbGw7XG4gICAgICAgIEdsb2JhbC5kYW1lQ2hhck5vcm1hbCA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhbWVDaGFyTm9ybWFsXCIpKSB8fCBHbG9iYWwuZGFtZUNoYXJOb3JtYWw7XG4gICAgICAgIEdsb2JhbC5kYW1lQ2hhckJpZyA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhbWVDaGFyQmlnXCIpKSB8fCBHbG9iYWwuZGFtZUNoYXJCaWc7XG4gICAgICAgIEdsb2JhbC5ocENoYXIgPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJocENoYXJcIikpIHx8IEdsb2JhbC5ocENoYXI7XG4gICAgICAgIGlmKHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhwQ2hhclwiKSkpIHtcbiAgICAgICAgICAgIEdsb2JhbC5ocENoYXIgPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJocENoYXJcIikpIHx8IEdsb2JhbC5ocENoYXI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbyBpZlwiKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgR2xvYmFsLmhwQ2hhciA9IDEwO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFvIGVsc2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB0aGlzLmxpc3RJZENhcmQgPSB0aGlzLnNodWZmbGVBcnJheSh0aGlzLmxpc3RJZENhcmQpO1xuICAgICAgICB0aGlzLm1hc2tMb2FkR2FtZSgpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRDYXJkcygpO1xuXG4gICAgICAgIH0sIDEpXG4gICAgICAgIHRoaXMuc3Bhd25Nb25zdGVyKCk7IFxuICAgICAgICB0aGlzLnVwZGF0ZUhwQmFnR3V5KCk7XG4gICAgICAgIHRoaXMudXBkYXRlTGV2ZWxMYigpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlTGV2ZWxMYigpIHtcbiAgICAgICAgdGhpcy5sYkxldmVsLnN0cmluZyA9IGBMViAke3RoaXMuc2VsZWN0ZWRMZXZlbCArIDF9YDtcbiAgICB9XG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBHYW1lVmlldy5pbnN0YW5jZSA9IG51bGxcbiAgICB9XG5cbiAgICBtYXNrTG9hZEdhbWUoKSB7XG4gICAgICAgIHRoaXMubk1hc2tMb2FkR2FtZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5NYXNrTG9hZEdhbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDcpXG4gICAgfVxuXG4gICAgbG9hZENhcmRzKCkge1xuICAgICAgICBsZXQgaWRJbmRleCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kYXRhQ2FyZFtpXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHM7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChpZEluZGV4ID49IHRoaXMubGlzdElkQ2FyZC5sZW5ndGgpIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNhcmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkNhcmQpLmdldENvbXBvbmVudChDYXJkKTtcbiAgICAgICAgICAgICAgICBjYXJkLnNldERhdGEodGhpcy5saXN0SWRDYXJkW2lkSW5kZXhdKTtcblxuICAgICAgICAgICAgICAgIHRoaXMublRhYmxlQ2FyZHMuYWRkQ2hpbGQoY2FyZC5ub2RlKTtcbiAgICAgICAgICAgICAgICBjYXJkLm5vZGUueCA9IHRoaXMuc3RhcnRYICsgaiAqIHRoaXMudGlsZVdpZHRoICsgdGhpcy50aWxlV2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIGNhcmQubm9kZS55ID0gdGhpcy5zdGFydFkgLSBpICogdGhpcy50aWxlV2lkdGggKyB0aGlzLnRpbGVXaWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhQ2FyZFtpXVtqXSA9IGNhcmQ7XG4gICAgICAgICAgICAgICAgaWRJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgc3Bhd25Nb25zdGVyKCkge1xuICAgICAgICBjb25zdCBsZXZlbEluZm8gPSBHbG9iYWwubGV2ZWxEYXRhW3RoaXMuc2VsZWN0ZWRMZXZlbF07XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWwgXCIsdGhpcy5zZWxlY3RlZExldmVsKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vbnN0ZXJJbmRleCA8IGxldmVsSW5mby5tb25zdGVycykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uc3RlckluZGV4Kys7XG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLmN1cnJlbnRNb25zdGVySW5kZXhcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9uc3RlcihpZCwgbGV2ZWxJbmZvLmhwLCBsZXZlbEluZm8uZGFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlF1YWkgdmF0IGRhdSB0aWVuIFwiLCB0aGlzLmN1cnJlbnRNb25zdGVySW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUxldmVsKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNyZWF0ZU1vbnN0ZXIoaWQ6IG51bWJlciwgaHA6IG51bWJlciwgZGFtZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBtb25zdGVyID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZNb25zdGVyKS5nZXRDb21wb25lbnQoTW9uc3Rlcik7XG4gICAgICAgIGxldCBzcHJpdGVJZExpc3QgPSBHbG9iYWwubGV2ZWxNb25zdGVyU3ByaXRlc1t0aGlzLnNlbGVjdGVkTGV2ZWxdO1xuICAgICAgICBsZXQgc3ByaXRlSWQgPSBzcHJpdGVJZExpc3RbaWRdO1xuICAgICAgICBtb25zdGVyLnNldE1vbnN0ZXIoc3ByaXRlSWQsIGhwLCBkYW1lKTtcbiAgICAgICAgdGhpcy5uTW9udGVycy5hZGRDaGlsZChtb25zdGVyLm5vZGUpO1xuICAgICAgICB0aGlzLmxpc3RNb25zdGVycy5wdXNoKG1vbnN0ZXIpO1xuICAgIH1cblxuXG4gICAgYXR0YWNrTW9uc3RlcihkYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3RNb25zdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgW21vbnN0ZXJdID0gdGhpcy5saXN0TW9uc3RlcnM7XG4gICAgICAgICAgICBpZiAobW9uc3RlciAmJiBtb25zdGVyLm5vZGUpIHtcbiAgICAgICAgICAgICAgICBtb25zdGVyLnJlY2VpdmVEYW1hZ2UoZGFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKEdsb2JhbC5ocE1vbnN0ZXIgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RNb25zdGVycyA9IHRoaXMubGlzdE1vbnN0ZXJzLmZpbHRlcihtID0+IG0gIT09IG1vbnN0ZXIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnN0ZXJzRGVmZWF0ZWQrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudE1vbnN0ZXJEaWUrKztcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNb250ZXMgZGllIFwiLCB0aGlzLmNvdW50TW9uc3RlckRpZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25Nb25zdGVyKCk7IFxuICAgICAgICAgICAgICAgICAgICB9LDAuOClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTW9uc3RlciBcIiwgdGhpcy5saXN0TW9uc3RlcnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBsZXRlTGV2ZWwoKSB7XG4gICAgICAgIGxldCB3YXNDb21wbGV0ZWQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oYGxldmVsXyR7dGhpcy5zZWxlY3RlZExldmVsfV9jb21wbGV0ZWRgKSA9PT0gJ3RydWUnO1xuICAgICAgICBpZiAoIXdhc0NvbXBsZXRlZCkge1xuICAgICAgICAgICAgR2xvYmFsLnRvdGFsR29sZCArPSAxO1xuICAgICAgICAgICAgTGV2ZWwuaW5zdGFuY2UudXBkYXRlR29sZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgbGV2ZWxfJHt0aGlzLnNlbGVjdGVkTGV2ZWx9X2NvbXBsZXRlZGAsICd0cnVlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBMZXZlbCAke3RoaXMuc2VsZWN0ZWRMZXZlbH0gxJHDoyBob8OgbiB0aMOgbmhgKTtcbiAgICBcbiAgICAgICAgLy8gTeG7nyBraMOzYSBsZXZlbCB0aeG6v3AgdGhlb1xuICAgICAgICBsZXQgbmV4dExldmVsID0gdGhpcy5zZWxlY3RlZExldmVsICsgMTtcbiAgICAgICAgaWYgKG5leHRMZXZlbCA8IEdsb2JhbC5sZXZlbERhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oYGxldmVsXyR7bmV4dExldmVsfV91bmxvY2tlZGAsICd0cnVlJyk7XG4gICAgICAgICAgICBMZXZlbC5pbnN0YW5jZS51cGRhdGVMZXZlbFN0YXR1cyhuZXh0TGV2ZWwpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWwgdGllcCB0aGVvIGxhIFwiLCBuZXh0TGV2ZWwpO1xuXG4gICAgICAgIGlmKG5leHRMZXZlbCA9PSA1IHx8IG5leHRMZXZlbCA9PSAxNCkge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGBsZXZlbF8ke25leHRMZXZlbH1faXNCb3NzYCwgJ3RydWUnKTtcbiAgICAgICAgICAgIExldmVsLmluc3RhbmNlLnVwZGF0ZUxldmVsU3RhdHVzKG5leHRMZXZlbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnNlbGVjdGVkTGV2ZWwgPT0gNSB8fCB0aGlzLnNlbGVjdGVkTGV2ZWwgPT0gMTQpIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgbGV2ZWxfJHt0aGlzLnNlbGVjdGVkTGV2ZWx9X2ZsYWdCb3NzYCwgJ3RydWUnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbyBib3NzcycsIHRoaXMuc2VsZWN0ZWRMZXZlbCk7XG4gICAgICAgICAgICBMZXZlbC5pbnN0YW5jZS51cGRhdGVMZXZlbFN0YXR1cyh0aGlzLnNlbGVjdGVkTGV2ZWwpO1xuICAgIFxuICAgICAgICB9XG4gICAgICAgIC8vIEzGsHUgdHLhuqFuZyB0aMOhaSBsw6EgY+G7nVxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oYGxldmVsXyR7dGhpcy5zZWxlY3RlZExldmVsfV9mbGFnYCwgJ3RydWUnKTtcbiAgICAgICAgTGV2ZWwuaW5zdGFuY2UudXBkYXRlTGV2ZWxTdGF0dXModGhpcy5zZWxlY3RlZExldmVsKTtcbiAgICBcbiAgICAgICAgY29uc3QgbGFzdExldmVsID0gR2xvYmFsLmxldmVsRGF0YS5sZW5ndGggLSAxO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZExldmVsID49IGxhc3RMZXZlbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLEkMOjIGhvw6BuIHRow6BuaCB04bqldCBj4bqjIGPDoWMgbGV2ZWwsIGtow7RuZyB0aOG7gyBjaMahaSB0aeG6v3AuXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmdhbWVPdmVyKHRydWUpO1xuICAgIFxuICAgIH1cblxuXG4gICAgbG9hZE5leHRMZXZlbCgpIHtcbiAgICAgICAgLy8gVGhp4bq/dCBs4bqtcCBs4bqhaSB0cuG6oW5nIHRow6FpIGPhuqduIHRoaeG6v3QgY2hvIGxldmVsIG3hu5tpXG4gICAgICAgIGlmKHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhwQ2hhclwiKSkpIHtcbiAgICAgICAgICAgIEdsb2JhbC5ocENoYXIgPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJocENoYXJcIikpIHx8IEdsb2JhbC5ocENoYXI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbyBpZlwiKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgR2xvYmFsLmhwQ2hhciA9IDEwO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFvIGVsc2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgR2xvYmFsLnNoaWVsZCA9IDA7XG4gICAgICAgIHRoaXMubW9uc3RlcnNEZWZlYXRlZCA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudE1vbnN0ZXJJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLmNvdW50TW9uc3RlckRpZSA9IDA7XG4gICAgICAgIHRoaXMublNoaWVsZC5hY3RpdmUgPWZhbHNlO1xuICAgICAgICB0aGlzLm5UYWJsZUNhcmRzLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMubk1vbnRlcnMucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRzID0gW107XG4gICAgICAgIHRoaXMubGlzdE1vbnN0ZXJzID0gW107XG5cbiAgICAgICAgdGhpcy5saXN0SWRDYXJkID0gdGhpcy5zaHVmZmxlQXJyYXkodGhpcy5saXN0SWRDYXJkKTtcbiAgICAgICAgdGhpcy5sb2FkQ2FyZHMoKTtcbiAgICAgICAgdGhpcy5zcGF3bk1vbnN0ZXIoKTsgXG4gICAgICAgIHRoaXMudXBkYXRlSHBDaGFyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlSHBCYWdHdXkoKTtcbiAgICAgICAgdGhpcy5tYXNrTG9hZEdhbWUoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhgTG9hZGVkIExldmVsICR7dGhpcy5zZWxlY3RlZExldmVsfWApO1xuICAgICAgICB0aGlzLnVwZGF0ZUxldmVsTGIoKTtcbiAgICB9XG5cblxuICAgIGdhbWVPdmVyKGlzV2luOiBib29sZWFuKSB7XG4gICAgICAgIC8vIGxldCBwcmZHYW1lT3ZlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmR2FtZU92ZXIpLmdldENvbXBvbmVudChHYW1lT3Zlcik7XG4gICAgICAgIFxuICAgICAgICAvLyBpZiAoaXNXaW4pIHtcbiAgICAgICAgLy8gICAgIHByZkdhbWVPdmVyLm5TdGFyV2luXzEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgIHByZkdhbWVPdmVyLm5TdGFyV2luXzIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgIHByZkdhbWVPdmVyLm5TdGFyV2luXzMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgIHByZkdhbWVPdmVyLm5CdG5OZXh0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgIC8vICAgICBwcmZHYW1lT3Zlci5uQnRuTmV4dC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgcHJmR2FtZU92ZXIud2luR2FtZSh0cnVlKTtcbiAgICAgICAgLy8gICAgIHByZkdhbWVPdmVyLm5CdG5OZXh0Lm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNlbGVjdGVkTGV2ZWwrKztcbiAgICAgICAgLy8gICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlbGVjdGVkTGV2ZWwnLCB0aGlzLnNlbGVjdGVkTGV2ZWwudG9TdHJpbmcoKSk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5sb2FkTmV4dExldmVsKCk7XG4gICAgICAgIC8vICAgICB9LCB0aGlzKTtcbiAgICBcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiTGV2ZWwgaG/DoG4gdGjDoG5oXCIsIHRoaXMuc2VsZWN0ZWRMZXZlbCk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBwcmZHYW1lT3Zlci53aW5HYW1lKGZhbHNlKTtcbiAgICAgICAgLy8gICAgIHByZkdhbWVPdmVyLm5CdG5OZXh0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgcHJmR2FtZU92ZXIubkJ0bk5leHQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLm5vZGUuYWRkQ2hpbGQocHJmR2FtZU92ZXIubm9kZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU+G7kSBxdcOhaSB24bqtdCB0cm9uZyBsZXZlbDogXCIsIEdsb2JhbC5sZXZlbERhdGFbdGhpcy5zZWxlY3RlZExldmVsXS5tb25zdGVycyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU+G7kSBxdcOhaSB24bqtdCDEkcOjIGNo4bq/dDogXCIsIHRoaXMuY291bnRNb25zdGVyRGllKTtcblxuICAgICAgICBsZXQgcHJmR2FtZU92ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkdhbWVPdmVyKS5nZXRDb21wb25lbnQoR2FtZU92ZXIpO1xuICAgIFxuICAgICAgICBpZiAoaXNXaW4pIHtcbiAgICAgICAgICAgIHByZkdhbWVPdmVyLm5TdGFyV2luXzEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByZkdhbWVPdmVyLm5TdGFyV2luXzIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByZkdhbWVPdmVyLm5TdGFyV2luXzMuYWN0aXZlID0gdHJ1ZTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGxhc3RMZXZlbCA9IEdsb2JhbC5sZXZlbERhdGEubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTGV2ZWwgPj0gbGFzdExldmVsKSB7XG4gICAgICAgICAgICAgICAgcHJmR2FtZU92ZXIubkJ0bk5leHQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcHJmR2FtZU92ZXIubkJ0bk5leHQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwixJDDoyBob8OgbiB0aMOgbmggdOG6pXQgY+G6oyBjw6FjIGxldmVsLCBraMO0bmcgdGjhu4MgY2jGoWkgdGnhur9wLlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJmR2FtZU92ZXIubkJ0bk5leHQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwcmZHYW1lT3Zlci5uQnRuTmV4dC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHByZkdhbWVPdmVyLm5CdG5OZXh0Lm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZExldmVsKys7XG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VsZWN0ZWRMZXZlbCcsIHRoaXMuc2VsZWN0ZWRMZXZlbC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkTmV4dExldmVsKCk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBwcmZHYW1lT3Zlci53aW5HYW1lKHRydWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZXZlbCBob8OgbiB0aMOgbmhcIiwgdGhpcy5zZWxlY3RlZExldmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByZkdhbWVPdmVyLndpbkdhbWUoZmFsc2UpO1xuICAgICAgICAgICAgcHJmR2FtZU92ZXIubkJ0bk5leHQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBwcmZHYW1lT3Zlci5uQnRuTmV4dC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwcmZHYW1lT3Zlci5ub2RlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJT4buRIHF1w6FpIHbhuq10IHRyb25nIGxldmVsOiBcIiwgR2xvYmFsLmxldmVsRGF0YVt0aGlzLnNlbGVjdGVkTGV2ZWxdLm1vbnN0ZXJzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJT4buRIHF1w6FpIHbhuq10IMSRw6MgY2jhur90OiBcIiwgdGhpcy5jb3VudE1vbnN0ZXJEaWUpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tQYXVzZSgpIHtcbiAgICAgICAgbGV0IHByZlBhdXNlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZQYXVzZSkuZ2V0Q29tcG9uZW50KFBhdXNlKVxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocHJmUGF1c2Uubm9kZSk7XG4gICAgICAgIHRoaXMublRhYmxlQ2FyZHMuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xpY2tSZXN1bWUoKSB7XG4gICAgICAgIHRoaXMublRhYmxlQ2FyZHMuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNodWZmbGVBcnJheShhcnJheTogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICBbYXJyYXlbaV0sIGFycmF5W2pdXSA9IFthcnJheVtqXSwgYXJyYXlbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG5cbiAgICBhZGRTZWxlY3RlZENhcmQoY2FyZDogQ2FyZCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENhcmRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkcy5wdXNoKGNhcmQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDYXJkcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmNoZWNrTWF0Y2guYmluZCh0aGlzKSwgMC42KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY2hlY2tNYXRjaCgpIHtcbiAgICAgICAgbGV0IFtmaXJzdENhcmQsIHNlY29uZENhcmRdID0gdGhpcy5zZWxlY3RlZENhcmRzO1xuXG4gICAgICAgIGlmIChmaXJzdENhcmQuaWRDYXJkID09PSAwICYmIHNlY29uZENhcmQuaWRDYXJkID09PSAwKSB7XG4gICAgICAgICAgICBHbG9iYWwuc2hpZWxkID0gMztcbiAgICAgICAgICAgIHRoaXMublNoaWVsZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTaGllbGQgQWN0aXZhdGVkOiBcIiwgR2xvYmFsLnNoaWVsZCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNoaWVsZCgpO1xuICAgICAgICAgICAgZmlyc3RDYXJkLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgc2Vjb25kQ2FyZC5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaXJzdENhcmQuaWRDYXJkID09PSAxMiB8fCBzZWNvbmRDYXJkLmlkQ2FyZCA9PT0gMTIpIHtcbiAgICAgICAgICAgIGxldCBkb3VibGVEYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBtdWx0aXBsaWVyQ2FyZCA9IGZpcnN0Q2FyZC5pZENhcmQgPT09IDEyID8gc2Vjb25kQ2FyZCA6IGZpcnN0Q2FyZDtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QXR0YWNrKG11bHRpcGxpZXJDYXJkLmlkQ2FyZCwgZG91YmxlRGFtZSk7XG4gICAgICAgICAgICBmaXJzdENhcmQubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBzZWNvbmRDYXJkLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpcnN0Q2FyZC5pZENhcmQgPT09IHNlY29uZENhcmQuaWRDYXJkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEF0dGFjayhmaXJzdENhcmQuaWRDYXJkLCBmYWxzZSk7XG4gICAgICAgICAgICBmaXJzdENhcmQubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBzZWNvbmRDYXJkLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoR2xvYmFsLnNoaWVsZCA+IDApIHtcbiAgICAgICAgICAgICAgICBHbG9iYWwuc2hpZWxkLS07XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTaGllbGQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdERhbWVCYWdHdXlNaXNzKHRoaXMubkRhbWVNb25zdGVyTWlzcyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTaGllbGQ6IFwiLCBHbG9iYWwuc2hpZWxkKTtcbiAgICAgICAgICAgIH0gaWYgKEdsb2JhbC5zaGllbGQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMublNoaWVsZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuaHBDaGFyIC09IEdsb2JhbC5kYW1lTW9uc3RlcjtcbiAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdERhbWVCYWdHdXkodGhpcy5sYkRhbWVNb25zdGVyLCBHbG9iYWwuZGFtZU1vbnN0ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSHBDaGFyKCk7XG4gICAgICAgICAgICAgICAgaWYgKEdsb2JhbC5ocENoYXIgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyKGZhbHNlKTsgLy8gR+G7jWkgaMOgbSBnYW1lT3ZlciB24bubaSDEkWnhu4F1IGtp4buHbiB0aHVhXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpcnN0Q2FyZC5mbGlwQ2FyZCgpO1xuICAgICAgICAgICAgc2Vjb25kQ2FyZC5mbGlwQ2FyZCgpO1xuICAgICAgICAgICAgZmlyc3RDYXJkLmlzQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2Vjb25kQ2FyZC5pc0NsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkcyA9IFtdO1xuICAgIH1cblxuXG4gICAgc2VsZWN0QXR0YWNrKGlkLCBpc0RvdWJsZURhbWU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3dpdGNoIChpZCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2lhcCBuZSBcIik7XG4gICAgICAgICAgICAgICAgaWYgKEdsb2JhbC5zaGllbGQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLnNoaWVsZCA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdsb2JhbC5zaGllbGQgKj0gaXNEb3VibGVEYW1lID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5uU2hpZWxkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTaGllbGQoKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWF1IG5lIFwiKTtcbiAgICAgICAgICAgICAgICAvLyBpZiAoR2xvYmFsLmhwQ2hhciA+PSAxMCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc0RvdWJsZURhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLmhwQ2hhciAqPSAyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbC5ocENoYXIgKz0gNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgICAgICAgICAvL31cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3VuZyBuaG8gYmFuIFwiKTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJTbWFsbCAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhckFyY2hlcnMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrTW9uc3RlcihHbG9iYWwuZGFtZUNoYXJTbWFsbCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1bmcgVGIgYmFuIFwiKTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJOb3JtYWwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyTm9ybWFsKVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhckFyY2hlcnMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyQXJjaGVycy5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhbWVDaGFyQmlnICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tNb25zdGVyKEdsb2JhbC5kYW1lQ2hhckJpZyk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJTbWFsbCAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5ocE1vbnN0ZXIgLT0gR2xvYmFsLmRhbWVDaGFyU21hbGw7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRmlnaHRlci5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJOb3JtYWwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJGaWdodGVyLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyTm9ybWFsKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiS0llbSBkYW5oIFwiKTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJCaWcgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJGaWdodGVyLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyQmlnKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhbWVDaGFyU21hbGwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyU21hbGwpXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyTWFnaWMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhck5vcm1hbCAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrTW9uc3RlcihHbG9iYWwuZGFtZUNoYXJOb3JtYWwpXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyTWFnaWMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhckJpZyAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhck1hZ2ljLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyQmlnKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgIGxldCB0b3RhbERhbWUgPSBHbG9iYWwuZGFtZUNoYXJTbWFsbCArIEdsb2JhbC5kYW1lQ2hhck5vcm1hbCAgKyBHbG9iYWwuZGFtZUNoYXJCaWc7XG4gICAgICAgICAgICAgICAgdG90YWxEYW1lICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyTWFnaWMuY2hhckF0dGFjaygpXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRmlnaHRlci5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyQXJjaGVycy5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tNb25zdGVyKHRvdGFsRGFtZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgZWZmZWN0RGFtZUJhZ0d1eShub2RlOiBjYy5Ob2RlLCBkYW1lOiBudW1iZXIpIHtcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCItXCIgKyBkYW1lO1xuICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgLnRvKDEsIHsgeTogMjAwIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBub2RlLnkgPSAtNzA7XG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIGVmZmVjdERhbWVCYWdHdXlNaXNzKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgaWYgKEdsb2JhbC5zaGllbGQgPiAwKSB7XG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvL25vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIi1cIiArIGRhbWU7XG4gICAgICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgICAgIC50bygxLCB7IHk6IDIwMCB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS55ID0gLTcwO1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIH0gaWYgKEdsb2JhbC5zaGllbGQgPT0gMCkge1xuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHVwZGF0ZUhwQ2hhcigpIHtcbiAgICAgICAgdGhpcy5sYkhwQ2hhci5zdHJpbmcgPSBHbG9iYWwuaHBDaGFyICsgJyAnO1xuICAgIH1cblxuICAgIHVwZGF0ZUhwQmFnR3V5KCkge1xuICAgICAgICB0aGlzLmxiSHBNb25zdGVyLnN0cmluZyA9IEdsb2JhbC5ocE1vbnN0ZXIgKyAnICc7XG4gICAgfVxuXG4gICAgdXBkYXRlU2hpZWxkKCkge1xuICAgICAgICB0aGlzLmxiU2hpZWxkLnN0cmluZyA9IEdsb2JhbC5zaGllbGQgKyAnICc7XG4gICAgfVxuICAgIG9uQ2xpY2tSZXN0YXJ0KCkge1xuICAgICAgICBpZihwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJocENoYXJcIikpKSB7XG4gICAgICAgICAgICBHbG9iYWwuaHBDaGFyID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaHBDaGFyXCIpKSB8fCBHbG9iYWwuaHBDaGFyO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YW8gaWZcIilcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSHBDaGFyKCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIEdsb2JhbC5ocENoYXIgPSAxMDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSHBDaGFyKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbyBlbHNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9uc3RlcnNEZWZlYXRlZCA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudE1vbnN0ZXJJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuY291bnRNb25zdGVyRGllID0gMDtcbiAgICAgICAgY29uc29sZS5sb2coXCJxdWFpIGNoZXQgcmVzYXJ0XCIsIHRoaXMuY291bnRNb25zdGVyRGllKTtcbiAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgLy90aGlzLnVwZGF0ZUhwQmFnR3V5KCk7XG4gICAgICAgIHRoaXMubWFza0xvYWRHYW1lKCk7XG4gICAgICAgIHRoaXMublRhYmxlQ2FyZHMucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5uTW9udGVycy5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZHMgPSBbXTtcbiAgICAgICAgdGhpcy5saXN0TW9uc3RlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5saXN0SWRDYXJkID0gdGhpcy5zaHVmZmxlQXJyYXkodGhpcy5saXN0SWRDYXJkKTtcbiAgICAgICAgdGhpcy5sb2FkQ2FyZHMoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVNb25zdGVyKDAsIEdsb2JhbC5sZXZlbERhdGFbdGhpcy5zZWxlY3RlZExldmVsXS5ocCwgMSk7XG4gICAgICAgIEdsb2JhbC5zaGllbGQgPSAwO1xuICAgICAgICB0aGlzLm5TaGllbGQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlU2hpZWxkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSByZXN0YXJ0ZWRcIik7XG4gICAgfVxuXG4gICAgZGVzdHJveUdhbWUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVzdHJveXl5IFwiKVxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19