
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
        this.lbLevel.string = "LVL " + (this.selectedLevel + 1);
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
        var _this = this;
        var prfGameOver = cc.instantiate(this.prfGameOver).getComponent(CardHero_GameOver_1.default);
        if (isWin) {
            prfGameOver.nStarWin_1.active = true;
            prfGameOver.nStarWin_2.active = true;
            prfGameOver.nStarWin_3.active = true;
            prfGameOver.nBtnNext.getComponent(cc.Button).interactable = true;
            prfGameOver.nBtnNext.getComponent(cc.Button).enableAutoGrayEffect = false;
            prfGameOver.winGame(true);
            prfGameOver.nBtnNext.on('click', function () {
                _this.selectedLevel++;
                cc.sys.localStorage.setItem('selectedLevel', _this.selectedLevel.toString());
                _this.loadNextLevel();
            }, this);
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
        this.updateShield();
        this.maskLoadGame();
        this.nTableCards.removeAllChildren();
        this.nMonters.removeAllChildren();
        this.selectedCards = [];
        this.listMonsters = [];
        this.listIdCard = this.shuffleArray(this.listIdCard);
        this.loadCards();
        this.createMonster(0, 10, 1);
        CardHero_Global_1.Global.shield = 0;
        this.nShield.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uR2FtZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsc0RBQTRDO0FBQzVDLGlEQUFtQztBQUNuQyxpREFBbUM7QUFDbkMsMkRBQXlDO0FBQ3pDLHVEQUF5QztBQUN6QywrREFBaUQ7QUFDakQseURBQTJDO0FBRXJDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ2dCQztRQTdmRyxhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGtCQUFZLEdBQXFCLEVBQUUsQ0FBQztRQUVwQyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsb0JBQWMsR0FBcUIsRUFBRSxDQUFDO1FBQ3RDLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixnQkFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxD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QUNNO0lBckRSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnZ0I1QjtJQUFELGVBQUM7Q0FoZ0JELEFBZ2dCQyxDQWhnQnFDLEVBQUUsQ0FBQyxTQUFTLEdBZ2dCakQ7a0JBaGdCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vQ2FyZEhlcm8uR2xvYmFsXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkSGVyby5DYXJkXCI7XG5pbXBvcnQgQ2hhciBmcm9tIFwiLi9DYXJkSGVyby5DaGFyXCI7XG5pbXBvcnQgTGV2ZWwgZnJvbSBcIi4vQ2FyZEhlcm8uTGV2ZWxWaWV3XCI7XG5pbXBvcnQgTW9uc3RlciBmcm9tIFwiLi9DYXJkSGVyby5Nb25zdGVyXCI7XG5pbXBvcnQgR2FtZU92ZXIgZnJvbSBcIi4vcG9wdXAvQ2FyZEhlcm8uR2FtZU92ZXJcIjtcbmltcG9ydCBQYXVzZSBmcm9tIFwiLi9wb3B1cC9DYXJkSGVyby5QYXVzZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IEdhbWVWaWV3ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkNhcmQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZNb25zdGVyOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBsaXN0U3BmQ2FyZHM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuTW9udGVyczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblRhYmxlQ2FyZHM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkhwQ2hhcjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkhwTW9uc3RlcjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5NYXNrQ2xpY2s6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5NYXNrTG9hZEdhbWU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxiRGFtZU1vbnN0ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBsaXN0U3BmTW9uc3RlcjogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIGlzQ2xpY2sgPSBmYWxzZTtcbiAgICBjb3VudENsaWNrID0gMDtcbiAgICBsaXN0SWRDYXJkID0gWzAsIDAsIDEsIDEsIDIsIDIsIDMsIDMsIDQsIDQsIDUsIDUsIDYsIDYsIDcsIDcsIDgsIDgsIDksIDksIDEwLCAxMCwgMTEsIDExLCAxMl07XG4gICAgc2VsZWN0ZWRDYXJkcyA9IFtdO1xuICAgIGRhdGFDYXJkID0gW107XG4gICAgQHByb3BlcnR5KENoYXIpXG4gICAgY2hhckFyY2hlcnM6IENoYXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShDaGFyKVxuICAgIGNoYXJGaWdodGVyOiBDaGFyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoQ2hhcilcbiAgICBjaGFyTWFnaWM6IENoYXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGJEYW1lQ2hhcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkdhbWVPdmVyOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZQYXVzZTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5TaGllbGQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlNoaWVsZDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5EYW1lTW9uc3Rlck1pc3M6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiTGV2ZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBsaXN0TW9uc3RlcnMgPSBbXTtcbiAgICBpZE1vbnN0ZXIgPSAwO1xuICAgIHJvd3MgPSA1O1xuICAgIGNvbHMgPSA1O1xuICAgIHNwYWNpbmcgPSAxMDtcbiAgICBwcml2YXRlIHN0YXJ0WDogbnVtYmVyID0gLTMzNztcbiAgICBwcml2YXRlIHN0YXJ0WTogbnVtYmVyID0gMjEwO1xuICAgIHByaXZhdGUgdGlsZVdpZHRoOiBudW1iZXIgPSAxMzU7XG4gICAgc2VsZWN0ZWRMZXZlbDogbnVtYmVyID0gMDtcbiAgICBtb25zdGVyc0RlZmVhdGVkID0gMDtcblxuICAgIGlzQ2hlY2sgPSBmYWxzZTtcbiAgICBjb3VudE1vbnN0ZXJEaWUgPSAwO1xuICAgIHByaXZhdGUgY3VycmVudE1vbnN0ZXJJbmRleDogbnVtYmVyID0gLTE7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMZXZlbCA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VsZWN0ZWRMZXZlbCcpKSB8fCAwO1xuICAgICAgICBHbG9iYWwuZGFtZUNoYXJTbWFsbCA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhbWVDaGFyU21hbGxcIikpIHx8IEdsb2JhbC5kYW1lQ2hhclNtYWxsO1xuICAgICAgICBHbG9iYWwuZGFtZUNoYXJOb3JtYWwgPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYW1lQ2hhck5vcm1hbFwiKSkgfHwgR2xvYmFsLmRhbWVDaGFyTm9ybWFsO1xuICAgICAgICBHbG9iYWwuZGFtZUNoYXJCaWcgPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYW1lQ2hhckJpZ1wiKSkgfHwgR2xvYmFsLmRhbWVDaGFyQmlnO1xuICAgICAgICBHbG9iYWwuaHBDaGFyID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaHBDaGFyXCIpKSB8fCBHbG9iYWwuaHBDaGFyO1xuICAgICAgICBpZihwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJocENoYXJcIikpKSB7XG4gICAgICAgICAgICBHbG9iYWwuaHBDaGFyID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaHBDaGFyXCIpKSB8fCBHbG9iYWwuaHBDaGFyO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YW8gaWZcIilcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSHBDaGFyKCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIEdsb2JhbC5ocENoYXIgPSAxMDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSHBDaGFyKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbyBlbHNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdGhpcy5saXN0SWRDYXJkID0gdGhpcy5zaHVmZmxlQXJyYXkodGhpcy5saXN0SWRDYXJkKTtcbiAgICAgICAgdGhpcy5tYXNrTG9hZEdhbWUoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkQ2FyZHMoKTtcblxuICAgICAgICB9LCAxKVxuICAgICAgICB0aGlzLnNwYXduTW9uc3RlcigpOyBcbiAgICAgICAgdGhpcy51cGRhdGVIcEJhZ0d1eSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUxldmVsTGIoKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZUxldmVsTGIoKSB7XG4gICAgICAgIHRoaXMubGJMZXZlbC5zdHJpbmcgPSBgTFZMICR7dGhpcy5zZWxlY3RlZExldmVsICsgMX1gO1xuICAgIH1cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlID0gbnVsbFxuICAgIH1cblxuICAgIG1hc2tMb2FkR2FtZSgpIHtcbiAgICAgICAgdGhpcy5uTWFza0xvYWRHYW1lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubk1hc2tMb2FkR2FtZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgNylcbiAgICB9XG5cbiAgICBsb2FkQ2FyZHMoKSB7XG4gICAgICAgIGxldCBpZEluZGV4ID0gMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFDYXJkW2ldID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sczsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlkSW5kZXggPj0gdGhpcy5saXN0SWRDYXJkLmxlbmd0aCkgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2FyZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmQ2FyZCkuZ2V0Q29tcG9uZW50KENhcmQpO1xuICAgICAgICAgICAgICAgIGNhcmQuc2V0RGF0YSh0aGlzLmxpc3RJZENhcmRbaWRJbmRleF0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5uVGFibGVDYXJkcy5hZGRDaGlsZChjYXJkLm5vZGUpO1xuICAgICAgICAgICAgICAgIGNhcmQubm9kZS54ID0gdGhpcy5zdGFydFggKyBqICogdGhpcy50aWxlV2lkdGggKyB0aGlzLnRpbGVXaWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgY2FyZC5ub2RlLnkgPSB0aGlzLnN0YXJ0WSAtIGkgKiB0aGlzLnRpbGVXaWR0aCArIHRoaXMudGlsZVdpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFDYXJkW2ldW2pdID0gY2FyZDtcbiAgICAgICAgICAgICAgICBpZEluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBzcGF3bk1vbnN0ZXIoKSB7XG4gICAgICAgIGNvbnN0IGxldmVsSW5mbyA9IEdsb2JhbC5sZXZlbERhdGFbdGhpcy5zZWxlY3RlZExldmVsXTtcbiAgICAgICAgY29uc29sZS5sb2coXCJsZXZlbCBcIix0aGlzLnNlbGVjdGVkTGV2ZWwpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50TW9uc3RlckluZGV4IDwgbGV2ZWxJbmZvLm1vbnN0ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb25zdGVySW5kZXgrKztcbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMuY3VycmVudE1vbnN0ZXJJbmRleFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVNb25zdGVyKGlkLCBsZXZlbEluZm8uaHAsIGxldmVsSW5mby5kYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXVhaSB2YXQgZGF1IHRpZW4gXCIsIHRoaXMuY3VycmVudE1vbnN0ZXJJbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlTGV2ZWwoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY3JlYXRlTW9uc3RlcihpZDogbnVtYmVyLCBocDogbnVtYmVyLCBkYW1lOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IG1vbnN0ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZk1vbnN0ZXIpLmdldENvbXBvbmVudChNb25zdGVyKTtcbiAgICAgICAgbGV0IHNwcml0ZUlkTGlzdCA9IEdsb2JhbC5sZXZlbE1vbnN0ZXJTcHJpdGVzW3RoaXMuc2VsZWN0ZWRMZXZlbF07XG4gICAgICAgIGxldCBzcHJpdGVJZCA9IHNwcml0ZUlkTGlzdFtpZF07XG4gICAgICAgIG1vbnN0ZXIuc2V0TW9uc3RlcihzcHJpdGVJZCwgaHAsIGRhbWUpO1xuICAgICAgICB0aGlzLm5Nb250ZXJzLmFkZENoaWxkKG1vbnN0ZXIubm9kZSk7XG4gICAgICAgIHRoaXMubGlzdE1vbnN0ZXJzLnB1c2gobW9uc3Rlcik7XG4gICAgfVxuXG5cbiAgICBhdHRhY2tNb25zdGVyKGRhbWUpIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdE1vbnN0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBbbW9uc3Rlcl0gPSB0aGlzLmxpc3RNb25zdGVycztcbiAgICAgICAgICAgIGlmIChtb25zdGVyICYmIG1vbnN0ZXIubm9kZSkge1xuICAgICAgICAgICAgICAgIG1vbnN0ZXIucmVjZWl2ZURhbWFnZShkYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoR2xvYmFsLmhwTW9uc3RlciA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdE1vbnN0ZXJzID0gdGhpcy5saXN0TW9uc3RlcnMuZmlsdGVyKG0gPT4gbSAhPT0gbW9uc3Rlcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9uc3RlcnNEZWZlYXRlZCsrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50TW9uc3RlckRpZSsrO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1vbnRlcyBkaWUgXCIsIHRoaXMuY291bnRNb25zdGVyRGllKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGF3bk1vbnN0ZXIoKTsgXG4gICAgICAgICAgICAgICAgICAgIH0sMC44KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNb25zdGVyIFwiLCB0aGlzLmxpc3RNb25zdGVycyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGxldGVMZXZlbCgpIHtcbiAgICAgICAgbGV0IHdhc0NvbXBsZXRlZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgbGV2ZWxfJHt0aGlzLnNlbGVjdGVkTGV2ZWx9X2NvbXBsZXRlZGApID09PSAndHJ1ZSc7XG4gICAgICAgIGlmICghd2FzQ29tcGxldGVkKSB7XG4gICAgICAgICAgICBHbG9iYWwudG90YWxHb2xkICs9IDE7XG4gICAgICAgICAgICBMZXZlbC5pbnN0YW5jZS51cGRhdGVHb2xkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGBsZXZlbF8ke3RoaXMuc2VsZWN0ZWRMZXZlbH1fY29tcGxldGVkYCwgJ3RydWUnKTtcbiAgICAgICAgY29uc29sZS5sb2coYExldmVsICR7dGhpcy5zZWxlY3RlZExldmVsfSDEkcOjIGhvw6BuIHRow6BuaGApO1xuICAgIFxuICAgICAgICAvLyBN4bufIGtow7NhIGxldmVsIHRp4bq/cCB0aGVvXG4gICAgICAgIGxldCBuZXh0TGV2ZWwgPSB0aGlzLnNlbGVjdGVkTGV2ZWwgKyAxO1xuICAgICAgICBpZiAobmV4dExldmVsIDwgR2xvYmFsLmxldmVsRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgbGV2ZWxfJHtuZXh0TGV2ZWx9X3VubG9ja2VkYCwgJ3RydWUnKTtcbiAgICAgICAgICAgIExldmVsLmluc3RhbmNlLnVwZGF0ZUxldmVsU3RhdHVzKG5leHRMZXZlbCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJsZXZlbCB0aWVwIHRoZW8gbGEgXCIsIG5leHRMZXZlbCk7XG5cbiAgICAgICAgaWYobmV4dExldmVsID09IDUgfHwgbmV4dExldmVsID09IDE0KSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oYGxldmVsXyR7bmV4dExldmVsfV9pc0Jvc3NgLCAndHJ1ZScpO1xuICAgICAgICAgICAgTGV2ZWwuaW5zdGFuY2UudXBkYXRlTGV2ZWxTdGF0dXMobmV4dExldmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRMZXZlbCA9PSA1IHx8IHRoaXMuc2VsZWN0ZWRMZXZlbCA9PSAxNCkge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGBsZXZlbF8ke3RoaXMuc2VsZWN0ZWRMZXZlbH1fZmxhZ0Jvc3NgLCAndHJ1ZScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvIGJvc3NzJywgdGhpcy5zZWxlY3RlZExldmVsKTtcbiAgICAgICAgICAgIExldmVsLmluc3RhbmNlLnVwZGF0ZUxldmVsU3RhdHVzKHRoaXMuc2VsZWN0ZWRMZXZlbCk7XG4gICAgXG4gICAgICAgIH1cbiAgICAgICAgLy8gTMawdSB0cuG6oW5nIHRow6FpIGzDoSBj4budXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgbGV2ZWxfJHt0aGlzLnNlbGVjdGVkTGV2ZWx9X2ZsYWdgLCAndHJ1ZScpO1xuICAgICAgICBMZXZlbC5pbnN0YW5jZS51cGRhdGVMZXZlbFN0YXR1cyh0aGlzLnNlbGVjdGVkTGV2ZWwpO1xuICAgIFxuICAgICAgICB0aGlzLmdhbWVPdmVyKHRydWUpO1xuICAgIFxuICAgIH1cblxuICAgIGxvYWROZXh0TGV2ZWwoKSB7XG4gICAgICAgIC8vIFRoaeG6v3QgbOG6rXAgbOG6oWkgdHLhuqFuZyB0aMOhaSBj4bqnbiB0aGnhur90IGNobyBsZXZlbCBt4bubaVxuICAgICAgICBpZihwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJocENoYXJcIikpKSB7XG4gICAgICAgICAgICBHbG9iYWwuaHBDaGFyID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaHBDaGFyXCIpKSB8fCBHbG9iYWwuaHBDaGFyO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YW8gaWZcIilcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSHBDaGFyKCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIEdsb2JhbC5ocENoYXIgPSAxMDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSHBDaGFyKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbyBlbHNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIEdsb2JhbC5zaGllbGQgPSAwO1xuICAgICAgICB0aGlzLm1vbnN0ZXJzRGVmZWF0ZWQgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRNb25zdGVySW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5jb3VudE1vbnN0ZXJEaWUgPSAwO1xuICAgICAgICB0aGlzLm5TaGllbGQuYWN0aXZlID1mYWxzZTtcbiAgICAgICAgdGhpcy5uVGFibGVDYXJkcy5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLm5Nb250ZXJzLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkcyA9IFtdO1xuICAgICAgICB0aGlzLmxpc3RNb25zdGVycyA9IFtdO1xuXG4gICAgICAgIHRoaXMubGlzdElkQ2FyZCA9IHRoaXMuc2h1ZmZsZUFycmF5KHRoaXMubGlzdElkQ2FyZCk7XG4gICAgICAgIHRoaXMubG9hZENhcmRzKCk7XG4gICAgICAgIHRoaXMuc3Bhd25Nb25zdGVyKCk7IFxuICAgICAgICB0aGlzLnVwZGF0ZUhwQ2hhcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZUhwQmFnR3V5KCk7XG4gICAgICAgIHRoaXMubWFza0xvYWRHYW1lKCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coYExvYWRlZCBMZXZlbCAke3RoaXMuc2VsZWN0ZWRMZXZlbH1gKTtcbiAgICAgICAgdGhpcy51cGRhdGVMZXZlbExiKCk7XG4gICAgfVxuXG5cbiAgICBnYW1lT3Zlcihpc1dpbjogYm9vbGVhbikge1xuICAgICAgICBsZXQgcHJmR2FtZU92ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkdhbWVPdmVyKS5nZXRDb21wb25lbnQoR2FtZU92ZXIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGlzV2luKSB7XG4gICAgICAgICAgICBwcmZHYW1lT3Zlci5uU3Rhcldpbl8xLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBwcmZHYW1lT3Zlci5uU3Rhcldpbl8yLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBwcmZHYW1lT3Zlci5uU3Rhcldpbl8zLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBwcmZHYW1lT3Zlci5uQnRuTmV4dC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgcHJmR2FtZU92ZXIubkJ0bk5leHQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHByZkdhbWVPdmVyLndpbkdhbWUodHJ1ZSk7XG4gICAgICAgICAgICBwcmZHYW1lT3Zlci5uQnRuTmV4dC5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZExldmVsKys7XG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWxlY3RlZExldmVsJywgdGhpcy5zZWxlY3RlZExldmVsLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZE5leHRMZXZlbCgpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxldmVsIGhvw6BuIHRow6BuaFwiLCB0aGlzLnNlbGVjdGVkTGV2ZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJmR2FtZU92ZXIud2luR2FtZShmYWxzZSk7XG4gICAgICAgICAgICBwcmZHYW1lT3Zlci5uQnRuTmV4dC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHByZkdhbWVPdmVyLm5CdG5OZXh0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHByZkdhbWVPdmVyLm5vZGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlPhu5EgcXXDoWkgduG6rXQgdHJvbmcgbGV2ZWw6IFwiLCBHbG9iYWwubGV2ZWxEYXRhW3RoaXMuc2VsZWN0ZWRMZXZlbF0ubW9uc3RlcnMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlPhu5EgcXXDoWkgduG6rXQgxJHDoyBjaOG6v3Q6IFwiLCB0aGlzLmNvdW50TW9uc3RlckRpZSk7XG4gICAgfVxuXG4gICAgb25DbGlja1BhdXNlKCkge1xuICAgICAgICBsZXQgcHJmUGF1c2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZlBhdXNlKS5nZXRDb21wb25lbnQoUGF1c2UpXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwcmZQYXVzZS5ub2RlKTtcbiAgICAgICAgdGhpcy5uVGFibGVDYXJkcy5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbGlja1Jlc3VtZSgpIHtcbiAgICAgICAgdGhpcy5uVGFibGVDYXJkcy5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2h1ZmZsZUFycmF5KGFycmF5OiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgICAgIFthcnJheVtpXSwgYXJyYXlbal1dID0gW2FycmF5W2pdLCBhcnJheVtpXV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIGFkZFNlbGVjdGVkQ2FyZChjYXJkOiBDYXJkKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ2FyZHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRzLnB1c2goY2FyZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENhcmRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuY2hlY2tNYXRjaC5iaW5kKHRoaXMpLCAwLjYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjaGVja01hdGNoKCkge1xuICAgICAgICBsZXQgW2ZpcnN0Q2FyZCwgc2Vjb25kQ2FyZF0gPSB0aGlzLnNlbGVjdGVkQ2FyZHM7XG5cbiAgICAgICAgaWYgKGZpcnN0Q2FyZC5pZENhcmQgPT09IDAgJiYgc2Vjb25kQ2FyZC5pZENhcmQgPT09IDApIHtcbiAgICAgICAgICAgIEdsb2JhbC5zaGllbGQgPSAzO1xuICAgICAgICAgICAgdGhpcy5uU2hpZWxkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNoaWVsZCBBY3RpdmF0ZWQ6IFwiLCBHbG9iYWwuc2hpZWxkKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2hpZWxkKCk7XG4gICAgICAgICAgICBmaXJzdENhcmQubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBzZWNvbmRDYXJkLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpcnN0Q2FyZC5pZENhcmQgPT09IDEyIHx8IHNlY29uZENhcmQuaWRDYXJkID09PSAxMikge1xuICAgICAgICAgICAgbGV0IGRvdWJsZURhbWUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IG11bHRpcGxpZXJDYXJkID0gZmlyc3RDYXJkLmlkQ2FyZCA9PT0gMTIgPyBzZWNvbmRDYXJkIDogZmlyc3RDYXJkO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBdHRhY2sobXVsdGlwbGllckNhcmQuaWRDYXJkLCBkb3VibGVEYW1lKTtcbiAgICAgICAgICAgIGZpcnN0Q2FyZC5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHNlY29uZENhcmQubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmlyc3RDYXJkLmlkQ2FyZCA9PT0gc2Vjb25kQ2FyZC5pZENhcmQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QXR0YWNrKGZpcnN0Q2FyZC5pZENhcmQsIGZhbHNlKTtcbiAgICAgICAgICAgIGZpcnN0Q2FyZC5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHNlY29uZENhcmQubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChHbG9iYWwuc2hpZWxkID4gMCkge1xuICAgICAgICAgICAgICAgIEdsb2JhbC5zaGllbGQtLTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNoaWVsZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0RGFtZUJhZ0d1eU1pc3ModGhpcy5uRGFtZU1vbnN0ZXJNaXNzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNoaWVsZDogXCIsIEdsb2JhbC5zaGllbGQpO1xuICAgICAgICAgICAgfSBpZiAoR2xvYmFsLnNoaWVsZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uU2hpZWxkLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5ocENoYXIgLT0gR2xvYmFsLmRhbWVNb25zdGVyO1xuICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0RGFtZUJhZ0d1eSh0aGlzLmxiRGFtZU1vbnN0ZXIsIEdsb2JhbC5kYW1lTW9uc3Rlcik7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgICAgICAgICBpZiAoR2xvYmFsLmhwQ2hhciA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoZmFsc2UpOyAvLyBH4buNaSBow6BtIGdhbWVPdmVyIHbhu5tpIMSRaeG7gXUga2nhu4duIHRodWFcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmlyc3RDYXJkLmZsaXBDYXJkKCk7XG4gICAgICAgICAgICBzZWNvbmRDYXJkLmZsaXBDYXJkKCk7XG4gICAgICAgICAgICBmaXJzdENhcmQuaXNDbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBzZWNvbmRDYXJkLmlzQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRzID0gW107XG4gICAgfVxuXG5cbiAgICBzZWxlY3RBdHRhY2soaWQsIGlzRG91YmxlRGFtZTogYm9vbGVhbikge1xuICAgICAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHaWFwIG5lIFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoR2xvYmFsLnNoaWVsZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBHbG9iYWwuc2hpZWxkID0gMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR2xvYmFsLnNoaWVsZCAqPSBpc0RvdWJsZURhbWUgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLm5TaGllbGQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNoaWVsZCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNYXUgbmUgXCIpO1xuICAgICAgICAgICAgICAgIC8vIGlmIChHbG9iYWwuaHBDaGFyID49IDEwKSByZXR1cm47XG4gICAgICAgICAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRG91YmxlRGFtZSkge1xuICAgICAgICAgICAgICAgICAgICBHbG9iYWwuaHBDaGFyICo9IDI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLmhwQ2hhciArPSA1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUhwQ2hhcigpO1xuICAgICAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdW5nIG5obyBiYW4gXCIpO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhclNtYWxsICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyQXJjaGVycy5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tNb25zdGVyKEdsb2JhbC5kYW1lQ2hhclNtYWxsKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3VuZyBUYiBiYW4gXCIpO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhck5vcm1hbCAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrTW9uc3RlcihHbG9iYWwuZGFtZUNoYXJOb3JtYWwpXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyQXJjaGVycy5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJBcmNoZXJzLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJCaWcgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyQmlnKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhclNtYWxsICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmhwTW9uc3RlciAtPSBHbG9iYWwuZGFtZUNoYXJTbWFsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJGaWdodGVyLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhck5vcm1hbCAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhckZpZ2h0ZXIuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrTW9uc3RlcihHbG9iYWwuZGFtZUNoYXJOb3JtYWwpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJLSWVtIGRhbmggXCIpO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhckJpZyAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhckZpZ2h0ZXIuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrTW9uc3RlcihHbG9iYWwuZGFtZUNoYXJCaWcpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJTbWFsbCAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrTW9uc3RlcihHbG9iYWwuZGFtZUNoYXJTbWFsbClcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJNYWdpYy5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhbWVDaGFyTm9ybWFsICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tNb25zdGVyKEdsb2JhbC5kYW1lQ2hhck5vcm1hbClcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJNYWdpYy5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhbWVDaGFyQmlnICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyTWFnaWMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrTW9uc3RlcihHbG9iYWwuZGFtZUNoYXJCaWcpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsRGFtZSA9IEdsb2JhbC5kYW1lQ2hhclNtYWxsICsgR2xvYmFsLmRhbWVDaGFyTm9ybWFsICArIEdsb2JhbC5kYW1lQ2hhckJpZztcbiAgICAgICAgICAgICAgICB0b3RhbERhbWUgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJNYWdpYy5jaGFyQXR0YWNrKClcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJGaWdodGVyLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJBcmNoZXJzLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIodG90YWxEYW1lKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBlZmZlY3REYW1lQmFnR3V5KG5vZGU6IGNjLk5vZGUsIGRhbWU6IG51bWJlcikge1xuICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIi1cIiArIGRhbWU7XG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4gICAgICAgICAgICAudG8oMSwgeyB5OiAyMDAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG5vZGUueSA9IC03MDtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgZWZmZWN0RGFtZUJhZ0d1eU1pc3Mobm9kZTogY2MuTm9kZSkge1xuICAgICAgICBpZiAoR2xvYmFsLnNoaWVsZCA+IDApIHtcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiLVwiICsgZGFtZTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgeTogMjAwIH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnkgPSAtNzA7XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgfSBpZiAoR2xvYmFsLnNoaWVsZCA9PSAwKSB7XG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgdXBkYXRlSHBDaGFyKCkge1xuICAgICAgICB0aGlzLmxiSHBDaGFyLnN0cmluZyA9IEdsb2JhbC5ocENoYXIgKyAnICc7XG4gICAgfVxuXG4gICAgdXBkYXRlSHBCYWdHdXkoKSB7XG4gICAgICAgIHRoaXMubGJIcE1vbnN0ZXIuc3RyaW5nID0gR2xvYmFsLmhwTW9uc3RlciArICcgJztcbiAgICB9XG5cbiAgICB1cGRhdGVTaGllbGQoKSB7XG4gICAgICAgIHRoaXMubGJTaGllbGQuc3RyaW5nID0gR2xvYmFsLnNoaWVsZCArICcgJztcbiAgICB9XG4gICAgb25DbGlja1Jlc3RhcnQoKSB7XG4gICAgICAgIGlmKHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhwQ2hhclwiKSkpIHtcbiAgICAgICAgICAgIEdsb2JhbC5ocENoYXIgPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJocENoYXJcIikpIHx8IEdsb2JhbC5ocENoYXI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbyBpZlwiKVxuICAgICAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgR2xvYmFsLmhwQ2hhciA9IDEwO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFvIGVsc2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb25zdGVyc0RlZmVhdGVkID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50TW9uc3RlckluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5jb3VudE1vbnN0ZXJEaWUgPSAwO1xuICAgICAgICBjb25zb2xlLmxvZyhcInF1YWkgY2hldCByZXNhcnRcIiwgdGhpcy5jb3VudE1vbnN0ZXJEaWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZUhwQ2hhcigpO1xuICAgICAgICAvL3RoaXMudXBkYXRlSHBCYWdHdXkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaGllbGQoKTtcbiAgICAgICAgdGhpcy5tYXNrTG9hZEdhbWUoKTtcbiAgICAgICAgdGhpcy5uVGFibGVDYXJkcy5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLm5Nb250ZXJzLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkcyA9IFtdO1xuICAgICAgICB0aGlzLmxpc3RNb25zdGVycyA9IFtdO1xuICAgICAgICB0aGlzLmxpc3RJZENhcmQgPSB0aGlzLnNodWZmbGVBcnJheSh0aGlzLmxpc3RJZENhcmQpO1xuICAgICAgICB0aGlzLmxvYWRDYXJkcygpO1xuICAgICAgICB0aGlzLmNyZWF0ZU1vbnN0ZXIoMCwgMTAsIDEpO1xuICAgICAgICBHbG9iYWwuc2hpZWxkID0gMDtcbiAgICAgICAgdGhpcy5uU2hpZWxkLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWUgcmVzdGFydGVkXCIpO1xuICAgIH1cblxuICAgIGRlc3Ryb3lHYW1lKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRlc3Ryb3l5eSBcIilcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==