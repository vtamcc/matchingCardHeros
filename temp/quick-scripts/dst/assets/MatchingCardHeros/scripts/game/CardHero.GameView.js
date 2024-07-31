
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
        GameView_1.instance = this;
        this.listIdCard = this.shuffleArray(this.listIdCard);
        this.maskLoadGame();
        this.scheduleOnce(function () {
            _this.loadCards();
        }, 1);
        this.spawnMonster();
        this.updateHpChar();
        this.updateHpBagGuy();
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
        console.log("level ", levelInfo);
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
        if (nextLevel == 5) {
            cc.sys.localStorage.setItem("level_" + nextLevel + "_isBoss", 'true');
        }
        // Lưu trạng thái lá cờ
        cc.sys.localStorage.setItem("level_" + this.selectedLevel + "_flag", 'true');
        CardHero_LevelView_1.default.instance.updateLevelStatus(this.selectedLevel);
        // Gọi hàm gameOver với điều kiện chiến thắng
        this.gameOver(true);
        // Tải lại trò chơi với level mới
        //this.loadNextLevel();
    };
    GameView.prototype.loadNextLevel = function () {
        // Thiết lập lại trạng thái cần thiết cho level mới
        this.monstersDefeated = 0;
        this.currentMonsterIndex = -1;
        this.countMonsterDie = 0;
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
                CardHero_Global_1.Global.hpChar--;
                this.effectDameBagGuy(this.lbDameMonster, CardHero_Global_1.Global.dameMonster);
                this.updateHpChar();
                if (CardHero_Global_1.Global.hpChar == 0) {
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
            .to(0.8, { y: 200 })
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
                .to(0.8, { y: 200 })
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
        CardHero_Global_1.Global.hpChar = 10;
        CardHero_Global_1.Global.hpMonster = 10;
        this.countMonsterDie = 0;
        this.updateHpChar();
        this.updateHpBagGuy();
        this.updateShield();
        this.nTableCards.removeAllChildren();
        this.nMonters.removeAllChildren();
        this.selectedCards = [];
        this.listMonsters = [];
        this.listIdCard = this.shuffleArray(this.listIdCard);
        this.loadCards();
        this.createMonster(0, 10, 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uR2FtZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsc0RBQTRDO0FBQzVDLGlEQUFtQztBQUNuQyxpREFBbUM7QUFDbkMsMkRBQXlDO0FBQ3pDLHVEQUF5QztBQUN6QywrREFBaUQ7QUFDakQseURBQTJDO0FBRXJDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBZ2RDO1FBN2NHLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0Isa0JBQVksR0FBcUIsRUFBRSxDQUFDO1FBRXBDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixvQkFBYyxHQUFxQixFQUFFLENBQUM7UUFDdEMsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGdCQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENB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QUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNPO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNZO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1k7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztvREFDYTtJQU90QztRQURDLFFBQVEsQ0FBQyx1QkFBSSxDQUFDO2lEQUNVO0lBRXpCO1FBREMsUUFBUSxDQUFDLHVCQUFJLENBQUM7aURBQ1U7SUFFekI7UUFEQyxRQUFRLENBQUMsdUJBQUksQ0FBQzsrQ0FDUTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ1U7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDTztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDZTtJQWxEaEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdkNUI7SUFBRCxlQUFDO0NBaGRELEFBZ2RDLENBaGRxQyxFQUFFLENBQUMsU0FBUyxHQWdkakQ7a0JBaGRvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9DYXJkSGVyby5HbG9iYWxcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRIZXJvLkNhcmRcIjtcbmltcG9ydCBDaGFyIGZyb20gXCIuL0NhcmRIZXJvLkNoYXJcIjtcbmltcG9ydCBMZXZlbCBmcm9tIFwiLi9DYXJkSGVyby5MZXZlbFZpZXdcIjtcbmltcG9ydCBNb25zdGVyIGZyb20gXCIuL0NhcmRIZXJvLk1vbnN0ZXJcIjtcbmltcG9ydCBHYW1lT3ZlciBmcm9tIFwiLi9wb3B1cC9DYXJkSGVyby5HYW1lT3ZlclwiO1xuaW1wb3J0IFBhdXNlIGZyb20gXCIuL3BvcHVwL0NhcmRIZXJvLlBhdXNlXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogR2FtZVZpZXcgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmQ2FyZDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZk1vbnN0ZXI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGxpc3RTcGZDYXJkczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Nb250ZXJzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuVGFibGVDYXJkczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiSHBDaGFyOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiSHBNb25zdGVyOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbk1hc2tDbGljazogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbk1hc2tMb2FkR2FtZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGJEYW1lTW9uc3RlcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGxpc3RTcGZNb25zdGVyOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgaXNDbGljayA9IGZhbHNlO1xuICAgIGNvdW50Q2xpY2sgPSAwO1xuICAgIGxpc3RJZENhcmQgPSBbMCwgMCwgMSwgMSwgMiwgMiwgMywgMywgNCwgNCwgNSwgNSwgNiwgNiwgNywgNywgOCwgOCwgOSwgOSwgMTAsIDEwLCAxMSwgMTEsIDEyXTtcbiAgICBzZWxlY3RlZENhcmRzID0gW107XG4gICAgZGF0YUNhcmQgPSBbXTtcbiAgICBAcHJvcGVydHkoQ2hhcilcbiAgICBjaGFyQXJjaGVyczogQ2hhciA9IG51bGw7XG4gICAgQHByb3BlcnR5KENoYXIpXG4gICAgY2hhckZpZ2h0ZXI6IENoYXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShDaGFyKVxuICAgIGNoYXJNYWdpYzogQ2hhciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYkRhbWVDaGFyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmR2FtZU92ZXI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZlBhdXNlOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblNoaWVsZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiU2hpZWxkOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkRhbWVNb25zdGVyTWlzczogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBsaXN0TW9uc3RlcnMgPSBbXTtcbiAgICBpZE1vbnN0ZXIgPSAwO1xuICAgIHJvd3MgPSA1O1xuICAgIGNvbHMgPSA1O1xuICAgIHNwYWNpbmcgPSAxMDtcbiAgICBwcml2YXRlIHN0YXJ0WDogbnVtYmVyID0gLTMzNztcbiAgICBwcml2YXRlIHN0YXJ0WTogbnVtYmVyID0gMjEwO1xuICAgIHByaXZhdGUgdGlsZVdpZHRoOiBudW1iZXIgPSAxMzU7XG4gICAgc2VsZWN0ZWRMZXZlbDogbnVtYmVyID0gMDtcbiAgICBtb25zdGVyc0RlZmVhdGVkID0gMDtcblxuICAgIGlzQ2hlY2sgPSBmYWxzZTtcbiAgICBjb3VudE1vbnN0ZXJEaWUgPSAwO1xuICAgIHByaXZhdGUgY3VycmVudE1vbnN0ZXJJbmRleDogbnVtYmVyID0gLTE7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMZXZlbCA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VsZWN0ZWRMZXZlbCcpKSB8fCAwO1xuICAgICAgICBHbG9iYWwuZGFtZUNoYXJTbWFsbCA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhbWVDaGFyU21hbGxcIikpIHx8IEdsb2JhbC5kYW1lQ2hhclNtYWxsO1xuICAgICAgICBHbG9iYWwuZGFtZUNoYXJOb3JtYWwgPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYW1lQ2hhck5vcm1hbFwiKSkgfHwgR2xvYmFsLmRhbWVDaGFyTm9ybWFsO1xuICAgICAgICBHbG9iYWwuZGFtZUNoYXJCaWcgPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYW1lQ2hhckJpZ1wiKSkgfHwgR2xvYmFsLmRhbWVDaGFyQmlnO1xuICAgICAgICBHbG9iYWwuaHBDaGFyID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaHBDaGFyXCIpKSB8fCBHbG9iYWwuaHBDaGFyO1xuICAgICAgICBHYW1lVmlldy5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIHRoaXMubGlzdElkQ2FyZCA9IHRoaXMuc2h1ZmZsZUFycmF5KHRoaXMubGlzdElkQ2FyZCk7XG4gICAgICAgIHRoaXMubWFza0xvYWRHYW1lKCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZENhcmRzKCk7XG5cbiAgICAgICAgfSwgMSlcbiAgICAgICAgdGhpcy5zcGF3bk1vbnN0ZXIoKTsgXG4gICAgICAgIHRoaXMudXBkYXRlSHBDaGFyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlSHBCYWdHdXkoKTtcblxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UgPSBudWxsXG4gICAgfVxuXG4gICAgbWFza0xvYWRHYW1lKCkge1xuICAgICAgICB0aGlzLm5NYXNrTG9hZEdhbWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uTWFza0xvYWRHYW1lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9LCA3KVxuICAgIH1cblxuICAgIGxvYWRDYXJkcygpIHtcbiAgICAgICAgbGV0IGlkSW5kZXggPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YUNhcmRbaV0gPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2xzOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaWRJbmRleCA+PSB0aGlzLmxpc3RJZENhcmQubGVuZ3RoKSBicmVhaztcblxuICAgICAgICAgICAgICAgIGxldCBjYXJkID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZDYXJkKS5nZXRDb21wb25lbnQoQ2FyZCk7XG4gICAgICAgICAgICAgICAgY2FyZC5zZXREYXRhKHRoaXMubGlzdElkQ2FyZFtpZEluZGV4XSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm5UYWJsZUNhcmRzLmFkZENoaWxkKGNhcmQubm9kZSk7XG4gICAgICAgICAgICAgICAgY2FyZC5ub2RlLnggPSB0aGlzLnN0YXJ0WCArIGogKiB0aGlzLnRpbGVXaWR0aCArIHRoaXMudGlsZVdpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICBjYXJkLm5vZGUueSA9IHRoaXMuc3RhcnRZIC0gaSAqIHRoaXMudGlsZVdpZHRoICsgdGhpcy50aWxlV2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YUNhcmRbaV1bal0gPSBjYXJkO1xuICAgICAgICAgICAgICAgIGlkSW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHNwYXduTW9uc3RlcigpIHtcbiAgICAgICAgY29uc3QgbGV2ZWxJbmZvID0gR2xvYmFsLmxldmVsRGF0YVt0aGlzLnNlbGVjdGVkTGV2ZWxdO1xuICAgICAgICBjb25zb2xlLmxvZyhcImxldmVsIFwiLGxldmVsSW5mbyk7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb25zdGVySW5kZXggPCBsZXZlbEluZm8ubW9uc3RlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbnN0ZXJJbmRleCsrO1xuICAgICAgICAgICAgbGV0IGlkID0gdGhpcy5jdXJyZW50TW9uc3RlckluZGV4XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1vbnN0ZXIoaWQsIGxldmVsSW5mby5ocCwgbGV2ZWxJbmZvLmRhbWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJRdWFpIHZhdCBkYXUgdGllbiBcIiwgdGhpcy5jdXJyZW50TW9uc3RlckluZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVMZXZlbCgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjcmVhdGVNb25zdGVyKGlkOiBudW1iZXIsIGhwOiBudW1iZXIsIGRhbWU6IG51bWJlcikge1xuICAgICAgICBsZXQgbW9uc3RlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmTW9uc3RlcikuZ2V0Q29tcG9uZW50KE1vbnN0ZXIpO1xuICAgICAgICBsZXQgc3ByaXRlSWRMaXN0ID0gR2xvYmFsLmxldmVsTW9uc3RlclNwcml0ZXNbdGhpcy5zZWxlY3RlZExldmVsXTtcbiAgICAgICAgbGV0IHNwcml0ZUlkID0gc3ByaXRlSWRMaXN0W2lkXTtcbiAgICAgICAgbW9uc3Rlci5zZXRNb25zdGVyKHNwcml0ZUlkLCBocCwgZGFtZSk7XG4gICAgICAgIHRoaXMubk1vbnRlcnMuYWRkQ2hpbGQobW9uc3Rlci5ub2RlKTtcbiAgICAgICAgdGhpcy5saXN0TW9uc3RlcnMucHVzaChtb25zdGVyKTtcbiAgICB9XG5cblxuICAgIGF0dGFja01vbnN0ZXIoZGFtZSkge1xuICAgICAgICBpZiAodGhpcy5saXN0TW9uc3RlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IFttb25zdGVyXSA9IHRoaXMubGlzdE1vbnN0ZXJzO1xuICAgICAgICAgICAgaWYgKG1vbnN0ZXIgJiYgbW9uc3Rlci5ub2RlKSB7XG4gICAgICAgICAgICAgICAgbW9uc3Rlci5yZWNlaXZlRGFtYWdlKGRhbWUpO1xuICAgICAgICAgICAgICAgIGlmIChHbG9iYWwuaHBNb25zdGVyIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0TW9uc3RlcnMgPSB0aGlzLmxpc3RNb25zdGVycy5maWx0ZXIobSA9PiBtICE9PSBtb25zdGVyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb25zdGVyc0RlZmVhdGVkKys7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRNb25zdGVyRGllKys7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTW9udGVzIGRpZSBcIiwgdGhpcy5jb3VudE1vbnN0ZXJEaWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwYXduTW9uc3RlcigpOyBcbiAgICAgICAgICAgICAgICAgICAgfSwwLjgpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1vbnN0ZXIgXCIsIHRoaXMubGlzdE1vbnN0ZXJzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wbGV0ZUxldmVsKCkge1xuICAgICAgICBsZXQgd2FzQ29tcGxldGVkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGBsZXZlbF8ke3RoaXMuc2VsZWN0ZWRMZXZlbH1fY29tcGxldGVkYCkgPT09ICd0cnVlJztcbiAgICAgICAgaWYgKCF3YXNDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIEdsb2JhbC50b3RhbEdvbGQgKz0gMTtcbiAgICAgICAgICAgIExldmVsLmluc3RhbmNlLnVwZGF0ZUdvbGQoKTtcbiAgICAgICAgfVxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oYGxldmVsXyR7dGhpcy5zZWxlY3RlZExldmVsfV9jb21wbGV0ZWRgLCAndHJ1ZScpO1xuICAgICAgICBjb25zb2xlLmxvZyhgTGV2ZWwgJHt0aGlzLnNlbGVjdGVkTGV2ZWx9IMSRw6MgaG/DoG4gdGjDoG5oYCk7XG4gICAgXG4gICAgICAgIC8vIE3hu58ga2jDs2EgbGV2ZWwgdGnhur9wIHRoZW9cbiAgICAgICAgbGV0IG5leHRMZXZlbCA9IHRoaXMuc2VsZWN0ZWRMZXZlbCArIDE7XG4gICAgICAgIGlmIChuZXh0TGV2ZWwgPCBHbG9iYWwubGV2ZWxEYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGBsZXZlbF8ke25leHRMZXZlbH1fdW5sb2NrZWRgLCAndHJ1ZScpO1xuICAgICAgICAgICAgTGV2ZWwuaW5zdGFuY2UudXBkYXRlTGV2ZWxTdGF0dXMobmV4dExldmVsKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImxldmVsIHRpZXAgdGhlbyBsYSBcIiwgbmV4dExldmVsKTtcblxuICAgICAgICBpZihuZXh0TGV2ZWwgPT0gNSkge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGBsZXZlbF8ke25leHRMZXZlbH1faXNCb3NzYCwgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMxrB1IHRy4bqhbmcgdGjDoWkgbMOhIGPhu51cbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGBsZXZlbF8ke3RoaXMuc2VsZWN0ZWRMZXZlbH1fZmxhZ2AsICd0cnVlJyk7XG4gICAgICAgIExldmVsLmluc3RhbmNlLnVwZGF0ZUxldmVsU3RhdHVzKHRoaXMuc2VsZWN0ZWRMZXZlbCk7XG4gICAgXG4gICAgICAgIC8vIEfhu41pIGjDoG0gZ2FtZU92ZXIgduG7m2kgxJFp4buBdSBraeG7h24gY2hp4bq/biB0aOG6r25nXG4gICAgICAgIHRoaXMuZ2FtZU92ZXIodHJ1ZSk7XG4gICAgICAgIC8vIFThuqNpIGzhuqFpIHRyw7IgY2jGoWkgduG7m2kgbGV2ZWwgbeG7m2lcbiAgICAgICAgLy90aGlzLmxvYWROZXh0TGV2ZWwoKTtcbiAgICB9XG5cbiAgICBsb2FkTmV4dExldmVsKCkge1xuICAgICAgICAvLyBUaGnhur90IGzhuq1wIGzhuqFpIHRy4bqhbmcgdGjDoWkgY+G6p24gdGhp4bq/dCBjaG8gbGV2ZWwgbeG7m2lcbiAgICAgICAgdGhpcy5tb25zdGVyc0RlZmVhdGVkID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50TW9uc3RlckluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuY291bnRNb25zdGVyRGllID0gMDtcbiAgICAgICAgdGhpcy5uVGFibGVDYXJkcy5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLm5Nb250ZXJzLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkcyA9IFtdO1xuICAgICAgICB0aGlzLmxpc3RNb25zdGVycyA9IFtdO1xuXG4gICAgICAgIHRoaXMubGlzdElkQ2FyZCA9IHRoaXMuc2h1ZmZsZUFycmF5KHRoaXMubGlzdElkQ2FyZCk7XG4gICAgICAgIHRoaXMubG9hZENhcmRzKCk7XG4gICAgICAgIHRoaXMuc3Bhd25Nb25zdGVyKCk7IFxuICAgICAgICB0aGlzLnVwZGF0ZUhwQ2hhcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZUhwQmFnR3V5KCk7XG4gICAgICAgIHRoaXMubWFza0xvYWRHYW1lKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBMb2FkZWQgTGV2ZWwgJHt0aGlzLnNlbGVjdGVkTGV2ZWx9YCk7XG4gICAgfVxuXG5cbiAgICBnYW1lT3Zlcihpc1dpbjogYm9vbGVhbikge1xuICAgICAgICBsZXQgcHJmR2FtZU92ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkdhbWVPdmVyKS5nZXRDb21wb25lbnQoR2FtZU92ZXIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGlzV2luKSB7XG4gICAgICAgICAgICBwcmZHYW1lT3Zlci5uU3Rhcldpbl8xLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBwcmZHYW1lT3Zlci5uU3Rhcldpbl8yLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBwcmZHYW1lT3Zlci5uU3Rhcldpbl8zLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBwcmZHYW1lT3Zlci5uQnRuTmV4dC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgcHJmR2FtZU92ZXIubkJ0bk5leHQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHByZkdhbWVPdmVyLndpbkdhbWUodHJ1ZSk7XG4gICAgICAgICAgICBwcmZHYW1lT3Zlci5uQnRuTmV4dC5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZExldmVsKys7XG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWxlY3RlZExldmVsJywgdGhpcy5zZWxlY3RlZExldmVsLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZE5leHRMZXZlbCgpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxldmVsIGhvw6BuIHRow6BuaFwiLCB0aGlzLnNlbGVjdGVkTGV2ZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJmR2FtZU92ZXIud2luR2FtZShmYWxzZSk7XG4gICAgICAgICAgICBwcmZHYW1lT3Zlci5uQnRuTmV4dC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHByZkdhbWVPdmVyLm5CdG5OZXh0LmdldENvbXBvbmVudChjYy5CdXR0b24pLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHByZkdhbWVPdmVyLm5vZGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlPhu5EgcXXDoWkgduG6rXQgdHJvbmcgbGV2ZWw6IFwiLCBHbG9iYWwubGV2ZWxEYXRhW3RoaXMuc2VsZWN0ZWRMZXZlbF0ubW9uc3RlcnMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlPhu5EgcXXDoWkgduG6rXQgxJHDoyBjaOG6v3Q6IFwiLCB0aGlzLmNvdW50TW9uc3RlckRpZSk7XG4gICAgfVxuXG4gICAgb25DbGlja1BhdXNlKCkge1xuICAgICAgICBsZXQgcHJmUGF1c2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZlBhdXNlKS5nZXRDb21wb25lbnQoUGF1c2UpXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwcmZQYXVzZS5ub2RlKTtcbiAgICAgICAgdGhpcy5uVGFibGVDYXJkcy5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbGlja1Jlc3VtZSgpIHtcbiAgICAgICAgdGhpcy5uVGFibGVDYXJkcy5jaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2h1ZmZsZUFycmF5KGFycmF5OiBudW1iZXJbXSk6IG51bWJlcltdIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgICAgIFthcnJheVtpXSwgYXJyYXlbal1dID0gW2FycmF5W2pdLCBhcnJheVtpXV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIGFkZFNlbGVjdGVkQ2FyZChjYXJkOiBDYXJkKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ2FyZHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRzLnB1c2goY2FyZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENhcmRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuY2hlY2tNYXRjaC5iaW5kKHRoaXMpLCAwLjYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjaGVja01hdGNoKCkge1xuICAgICAgICBsZXQgW2ZpcnN0Q2FyZCwgc2Vjb25kQ2FyZF0gPSB0aGlzLnNlbGVjdGVkQ2FyZHM7XG5cbiAgICAgICAgaWYgKGZpcnN0Q2FyZC5pZENhcmQgPT09IDAgJiYgc2Vjb25kQ2FyZC5pZENhcmQgPT09IDApIHtcbiAgICAgICAgICAgIEdsb2JhbC5zaGllbGQgPSAzO1xuICAgICAgICAgICAgdGhpcy5uU2hpZWxkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNoaWVsZCBBY3RpdmF0ZWQ6IFwiLCBHbG9iYWwuc2hpZWxkKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2hpZWxkKCk7XG4gICAgICAgICAgICBmaXJzdENhcmQubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICBzZWNvbmRDYXJkLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpcnN0Q2FyZC5pZENhcmQgPT09IDEyIHx8IHNlY29uZENhcmQuaWRDYXJkID09PSAxMikge1xuICAgICAgICAgICAgbGV0IGRvdWJsZURhbWUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IG11bHRpcGxpZXJDYXJkID0gZmlyc3RDYXJkLmlkQ2FyZCA9PT0gMTIgPyBzZWNvbmRDYXJkIDogZmlyc3RDYXJkO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBdHRhY2sobXVsdGlwbGllckNhcmQuaWRDYXJkLCBkb3VibGVEYW1lKTtcbiAgICAgICAgICAgIGZpcnN0Q2FyZC5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHNlY29uZENhcmQubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmlyc3RDYXJkLmlkQ2FyZCA9PT0gc2Vjb25kQ2FyZC5pZENhcmQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QXR0YWNrKGZpcnN0Q2FyZC5pZENhcmQsIGZhbHNlKTtcbiAgICAgICAgICAgIGZpcnN0Q2FyZC5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHNlY29uZENhcmQubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChHbG9iYWwuc2hpZWxkID4gMCkge1xuICAgICAgICAgICAgICAgIEdsb2JhbC5zaGllbGQtLTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNoaWVsZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0RGFtZUJhZ0d1eU1pc3ModGhpcy5uRGFtZU1vbnN0ZXJNaXNzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNoaWVsZDogXCIsIEdsb2JhbC5zaGllbGQpO1xuICAgICAgICAgICAgfSBpZiAoR2xvYmFsLnNoaWVsZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uU2hpZWxkLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5ocENoYXItLTtcbiAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdERhbWVCYWdHdXkodGhpcy5sYkRhbWVNb25zdGVyLCBHbG9iYWwuZGFtZU1vbnN0ZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSHBDaGFyKCk7XG4gICAgICAgICAgICAgICAgaWYgKEdsb2JhbC5ocENoYXIgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyKGZhbHNlKTsgLy8gR+G7jWkgaMOgbSBnYW1lT3ZlciB24bubaSDEkWnhu4F1IGtp4buHbiB0aHVhXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpcnN0Q2FyZC5mbGlwQ2FyZCgpO1xuICAgICAgICAgICAgc2Vjb25kQ2FyZC5mbGlwQ2FyZCgpO1xuICAgICAgICAgICAgZmlyc3RDYXJkLmlzQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2Vjb25kQ2FyZC5pc0NsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkcyA9IFtdO1xuICAgIH1cblxuXG4gICAgc2VsZWN0QXR0YWNrKGlkLCBpc0RvdWJsZURhbWU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3dpdGNoIChpZCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2lhcCBuZSBcIik7XG4gICAgICAgICAgICAgICAgaWYgKEdsb2JhbC5zaGllbGQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLnNoaWVsZCA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdsb2JhbC5zaGllbGQgKj0gaXNEb3VibGVEYW1lID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5uU2hpZWxkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTaGllbGQoKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWF1IG5lIFwiKTtcbiAgICAgICAgICAgICAgICAvLyBpZiAoR2xvYmFsLmhwQ2hhciA+PSAxMCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc0RvdWJsZURhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLmhwQ2hhciAqPSAyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbC5ocENoYXIgKz0gNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgICAgICAgICAvL31cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3VuZyBuaG8gYmFuIFwiKTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJTbWFsbCAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhckFyY2hlcnMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrTW9uc3RlcihHbG9iYWwuZGFtZUNoYXJTbWFsbCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1bmcgVGIgYmFuIFwiKTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJOb3JtYWwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyTm9ybWFsKVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhckFyY2hlcnMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyQXJjaGVycy5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhbWVDaGFyQmlnICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tNb25zdGVyKEdsb2JhbC5kYW1lQ2hhckJpZyk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJTbWFsbCAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5ocE1vbnN0ZXIgLT0gR2xvYmFsLmRhbWVDaGFyU21hbGw7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRmlnaHRlci5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJOb3JtYWwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJGaWdodGVyLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyTm9ybWFsKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiS0llbSBkYW5oIFwiKTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJCaWcgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJGaWdodGVyLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyQmlnKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhbWVDaGFyU21hbGwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyU21hbGwpXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyTWFnaWMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhck5vcm1hbCAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrTW9uc3RlcihHbG9iYWwuZGFtZUNoYXJOb3JtYWwpXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyTWFnaWMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhckJpZyAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhck1hZ2ljLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyQmlnKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgIGxldCB0b3RhbERhbWUgPSBHbG9iYWwuZGFtZUNoYXJTbWFsbCArIEdsb2JhbC5kYW1lQ2hhck5vcm1hbCAgKyBHbG9iYWwuZGFtZUNoYXJCaWc7XG4gICAgICAgICAgICAgICAgdG90YWxEYW1lICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyTWFnaWMuY2hhckF0dGFjaygpXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRmlnaHRlci5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyQXJjaGVycy5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tNb25zdGVyKHRvdGFsRGFtZSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgZWZmZWN0RGFtZUJhZ0d1eShub2RlOiBjYy5Ob2RlLCBkYW1lOiBudW1iZXIpIHtcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCItXCIgKyBkYW1lO1xuICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgLnRvKDAuOCwgeyB5OiAyMDAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG5vZGUueSA9IC03MDtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgZWZmZWN0RGFtZUJhZ0d1eU1pc3Mobm9kZTogY2MuTm9kZSkge1xuICAgICAgICBpZiAoR2xvYmFsLnNoaWVsZCA+IDApIHtcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiLVwiICsgZGFtZTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4gICAgICAgICAgICAgICAgLnRvKDAuOCwgeyB5OiAyMDAgfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUueSA9IC03MDtcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB9IGlmIChHbG9iYWwuc2hpZWxkID09IDApIHtcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICB1cGRhdGVIcENoYXIoKSB7XG4gICAgICAgIHRoaXMubGJIcENoYXIuc3RyaW5nID0gR2xvYmFsLmhwQ2hhciArICcgJztcbiAgICB9XG5cbiAgICB1cGRhdGVIcEJhZ0d1eSgpIHtcbiAgICAgICAgdGhpcy5sYkhwTW9uc3Rlci5zdHJpbmcgPSBHbG9iYWwuaHBNb25zdGVyICsgJyAnO1xuICAgIH1cblxuICAgIHVwZGF0ZVNoaWVsZCgpIHtcbiAgICAgICAgdGhpcy5sYlNoaWVsZC5zdHJpbmcgPSBHbG9iYWwuc2hpZWxkICsgJyAnO1xuICAgIH1cbiAgICBvbkNsaWNrUmVzdGFydCgpIHtcbiAgICAgICAgR2xvYmFsLmhwQ2hhciA9IDEwO1xuICAgICAgICBHbG9iYWwuaHBNb25zdGVyID0gMTA7XG4gICAgICAgIHRoaXMuY291bnRNb25zdGVyRGllID0gMDtcbiAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVIcEJhZ0d1eSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNoaWVsZCgpO1xuICAgICAgICB0aGlzLm5UYWJsZUNhcmRzLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMubk1vbnRlcnMucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRzID0gW107XG4gICAgICAgIHRoaXMubGlzdE1vbnN0ZXJzID0gW107XG4gICAgICAgIHRoaXMubGlzdElkQ2FyZCA9IHRoaXMuc2h1ZmZsZUFycmF5KHRoaXMubGlzdElkQ2FyZCk7XG4gICAgICAgIHRoaXMubG9hZENhcmRzKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlTW9uc3RlcigwLCAxMCwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSByZXN0YXJ0ZWRcIik7XG4gICAgfVxuXG4gICAgZGVzdHJveUdhbWUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVzdHJveXl5IFwiKVxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19