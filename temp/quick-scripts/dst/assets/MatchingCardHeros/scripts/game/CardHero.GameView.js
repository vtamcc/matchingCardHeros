
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
            this.createMonster(this.currentMonsterIndex, levelInfo.hp, levelInfo.dame);
            console.log("Quai vat dau tien ", this.currentMonsterIndex);
        }
        else {
            this.completeLevel();
        }
    };
    GameView.prototype.createMonster = function (id, hp, dame) {
        var monster = cc.instantiate(this.prfMonster).getComponent(CardHero_Monster_1.default);
        monster.setMonster(id, hp, dame);
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
                    this.scheduleOnce(function () {
                        _this.spawnMonster();
                    }, 0.8);
                    console.log("Monster ", this.listMonsters);
                }
            }
        }
    };
    GameView.prototype.completeLevel = function () {
        cc.sys.localStorage.setItem("level_" + this.selectedLevel + "_completed", 'true');
        console.log("Level " + this.selectedLevel + " marked as completed");
        // Tăng level và chuyển sang level tiếp theo
        CardHero_Global_1.Global.levelCount++;
        cc.sys.localStorage.setItem('levelCount', CardHero_Global_1.Global.levelCount.toString());
        this.selectedLevel++;
        if (this.selectedLevel > 14) { // Giả sử có 15 level
            this.selectedLevel = 14; // Giữ nguyên ở level cuối nếu đã hoàn thành tất cả các level
        }
        cc.sys.localStorage.setItem('selectedLevel', this.selectedLevel.toString());
        // Tải lại trò chơi với level mới
        this.loadNextLevel();
    };
    GameView.prototype.loadNextLevel = function () {
        // Thiết lập lại trạng thái cần thiết cho level mới
        this.monstersDefeated = 0;
        this.currentMonsterIndex = -1;
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
    GameView.prototype.gameOver = function () {
        if (CardHero_Global_1.Global.hpChar == 0) {
            var prfGameOver = cc.instantiate(this.prfGameOver).getComponent(CardHero_GameOver_1.default);
            this.node.addChild(prfGameOver.node);
        }
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
                this.gameOver();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uR2FtZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsc0RBQTRDO0FBQzVDLGlEQUFtQztBQUNuQyxpREFBbUM7QUFDbkMsdURBQXlDO0FBQ3pDLCtEQUFpRDtBQUNqRCx5REFBMkM7QUFFckMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwWkM7UUF2WkcsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFxQixFQUFFLENBQUM7UUFFcEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLG9CQUFjLEdBQXFCLEVBQUUsQ0FBQztRQUN0QyxhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZ0JBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMs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QyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNVO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ087SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNPO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ2U7SUFsRGhCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwWjVCO0lBQUQsZUFBQztDQTFaRCxBQTBaQyxDQTFacUMsRUFBRSxDQUFDLFNBQVMsR0EwWmpEO2tCQTFab0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vQ2FyZEhlcm8uR2xvYmFsXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkSGVyby5DYXJkXCI7XG5pbXBvcnQgQ2hhciBmcm9tIFwiLi9DYXJkSGVyby5DaGFyXCI7XG5pbXBvcnQgTW9uc3RlciBmcm9tIFwiLi9DYXJkSGVyby5Nb25zdGVyXCI7XG5pbXBvcnQgR2FtZU92ZXIgZnJvbSBcIi4vcG9wdXAvQ2FyZEhlcm8uR2FtZU92ZXJcIjtcbmltcG9ydCBQYXVzZSBmcm9tIFwiLi9wb3B1cC9DYXJkSGVyby5QYXVzZVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IEdhbWVWaWV3ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkNhcmQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZNb25zdGVyOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBsaXN0U3BmQ2FyZHM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuTW9udGVyczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblRhYmxlQ2FyZHM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkhwQ2hhcjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkhwTW9uc3RlcjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5NYXNrQ2xpY2s6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5NYXNrTG9hZEdhbWU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxiRGFtZU1vbnN0ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBsaXN0U3BmTW9uc3RlcjogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIGlzQ2xpY2sgPSBmYWxzZTtcbiAgICBjb3VudENsaWNrID0gMDtcbiAgICBsaXN0SWRDYXJkID0gWzAsIDAsIDEsIDEsIDIsIDIsIDMsIDMsIDQsIDQsIDUsIDUsIDYsIDYsIDcsIDcsIDgsIDgsIDksIDksIDEwLCAxMCwgMTEsIDExLCAxMl07XG4gICAgc2VsZWN0ZWRDYXJkcyA9IFtdO1xuICAgIGRhdGFDYXJkID0gW107XG4gICAgQHByb3BlcnR5KENoYXIpXG4gICAgY2hhckFyY2hlcnM6IENoYXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShDaGFyKVxuICAgIGNoYXJGaWdodGVyOiBDaGFyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoQ2hhcilcbiAgICBjaGFyTWFnaWM6IENoYXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGJEYW1lQ2hhcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZkdhbWVPdmVyOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZQYXVzZTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5TaGllbGQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlNoaWVsZDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5EYW1lTW9uc3Rlck1pc3M6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgbGlzdE1vbnN0ZXJzID0gW107XG4gICAgaWRNb25zdGVyID0gMDtcbiAgICByb3dzID0gNTtcbiAgICBjb2xzID0gNTtcbiAgICBzcGFjaW5nID0gMTA7XG4gICAgcHJpdmF0ZSBzdGFydFg6IG51bWJlciA9IC0zMzc7XG4gICAgcHJpdmF0ZSBzdGFydFk6IG51bWJlciA9IDIxMDtcbiAgICBwcml2YXRlIHRpbGVXaWR0aDogbnVtYmVyID0gMTM1O1xuICAgIHNlbGVjdGVkTGV2ZWw6IG51bWJlciA9IDA7XG4gICAgbW9uc3RlcnNEZWZlYXRlZCA9IDA7XG4gICAgcHJpdmF0ZSBjdXJyZW50TW9uc3RlckluZGV4OiBudW1iZXIgPSAtMTtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZExldmVsID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZWxlY3RlZExldmVsJykpIHx8IDA7XG4gICAgICAgIEdsb2JhbC5kYW1lQ2hhclNtYWxsID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGFtZUNoYXJTbWFsbFwiKSkgfHwgR2xvYmFsLmRhbWVDaGFyU21hbGw7XG4gICAgICAgIEdsb2JhbC5kYW1lQ2hhck5vcm1hbCA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhbWVDaGFyTm9ybWFsXCIpKSB8fCBHbG9iYWwuZGFtZUNoYXJOb3JtYWw7XG4gICAgICAgIEdsb2JhbC5kYW1lQ2hhckJpZyA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhbWVDaGFyQmlnXCIpKSB8fCBHbG9iYWwuZGFtZUNoYXJCaWc7XG4gICAgICAgIEdsb2JhbC5ocENoYXIgPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJocENoYXJcIikpIHx8IEdsb2JhbC5ocENoYXI7XG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdGhpcy5saXN0SWRDYXJkID0gdGhpcy5zaHVmZmxlQXJyYXkodGhpcy5saXN0SWRDYXJkKTtcbiAgICAgICAgdGhpcy5tYXNrTG9hZEdhbWUoKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkQ2FyZHMoKTtcblxuICAgICAgICB9LCAxKVxuICAgICAgICB0aGlzLnNwYXduTW9uc3RlcigpOyBcbiAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgdGhpcy51cGRhdGVIcEJhZ0d1eSgpO1xuXG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBHYW1lVmlldy5pbnN0YW5jZSA9IG51bGxcbiAgICB9XG5cbiAgICBtYXNrTG9hZEdhbWUoKSB7XG4gICAgICAgIHRoaXMubk1hc2tMb2FkR2FtZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5NYXNrTG9hZEdhbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDcpXG4gICAgfVxuXG4gICAgbG9hZENhcmRzKCkge1xuICAgICAgICBsZXQgaWRJbmRleCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kYXRhQ2FyZFtpXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHM7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChpZEluZGV4ID49IHRoaXMubGlzdElkQ2FyZC5sZW5ndGgpIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNhcmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkNhcmQpLmdldENvbXBvbmVudChDYXJkKTtcbiAgICAgICAgICAgICAgICBjYXJkLnNldERhdGEodGhpcy5saXN0SWRDYXJkW2lkSW5kZXhdKTtcblxuICAgICAgICAgICAgICAgIHRoaXMublRhYmxlQ2FyZHMuYWRkQ2hpbGQoY2FyZC5ub2RlKTtcbiAgICAgICAgICAgICAgICBjYXJkLm5vZGUueCA9IHRoaXMuc3RhcnRYICsgaiAqIHRoaXMudGlsZVdpZHRoICsgdGhpcy50aWxlV2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIGNhcmQubm9kZS55ID0gdGhpcy5zdGFydFkgLSBpICogdGhpcy50aWxlV2lkdGggKyB0aGlzLnRpbGVXaWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhQ2FyZFtpXVtqXSA9IGNhcmQ7XG4gICAgICAgICAgICAgICAgaWRJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgc3Bhd25Nb25zdGVyKCkge1xuICAgICAgICBjb25zdCBsZXZlbEluZm8gPSBHbG9iYWwubGV2ZWxEYXRhW3RoaXMuc2VsZWN0ZWRMZXZlbF07XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGV2ZWwgXCIsbGV2ZWxJbmZvKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vbnN0ZXJJbmRleCA8IGxldmVsSW5mby5tb25zdGVycykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uc3RlckluZGV4Kys7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1vbnN0ZXIodGhpcy5jdXJyZW50TW9uc3RlckluZGV4LCBsZXZlbEluZm8uaHAsIGxldmVsSW5mby5kYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXVhaSB2YXQgZGF1IHRpZW4gXCIsIHRoaXMuY3VycmVudE1vbnN0ZXJJbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlTGV2ZWwoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY3JlYXRlTW9uc3RlcihpZDogbnVtYmVyLCBocDogbnVtYmVyLCBkYW1lOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IG1vbnN0ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZk1vbnN0ZXIpLmdldENvbXBvbmVudChNb25zdGVyKTtcbiAgICAgICAgbW9uc3Rlci5zZXRNb25zdGVyKGlkLCBocCwgZGFtZSk7XG4gICAgICAgIHRoaXMubk1vbnRlcnMuYWRkQ2hpbGQobW9uc3Rlci5ub2RlKTtcbiAgICAgICAgdGhpcy5saXN0TW9uc3RlcnMucHVzaChtb25zdGVyKTtcbiAgICB9XG5cblxuICAgIGF0dGFja01vbnN0ZXIoZGFtZSkge1xuICAgICAgICBpZiAodGhpcy5saXN0TW9uc3RlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IFttb25zdGVyXSA9IHRoaXMubGlzdE1vbnN0ZXJzO1xuICAgICAgICAgICAgaWYgKG1vbnN0ZXIgJiYgbW9uc3Rlci5ub2RlKSB7XG4gICAgICAgICAgICAgICAgbW9uc3Rlci5yZWNlaXZlRGFtYWdlKGRhbWUpO1xuICAgICAgICAgICAgICAgIGlmIChHbG9iYWwuaHBNb25zdGVyIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0TW9uc3RlcnMgPSB0aGlzLmxpc3RNb25zdGVycy5maWx0ZXIobSA9PiBtICE9PSBtb25zdGVyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb25zdGVyc0RlZmVhdGVkKys7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3Bhd25Nb25zdGVyKCk7IFxuICAgICAgICAgICAgICAgICAgICB9LDAuOClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTW9uc3RlciBcIiwgdGhpcy5saXN0TW9uc3RlcnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBsZXRlTGV2ZWwoKSB7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgbGV2ZWxfJHt0aGlzLnNlbGVjdGVkTGV2ZWx9X2NvbXBsZXRlZGAsICd0cnVlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBMZXZlbCAke3RoaXMuc2VsZWN0ZWRMZXZlbH0gbWFya2VkIGFzIGNvbXBsZXRlZGApO1xuICAgICAgICBcbiAgICAgICAgLy8gVMSDbmcgbGV2ZWwgdsOgIGNodXnhu4NuIHNhbmcgbGV2ZWwgdGnhur9wIHRoZW9cbiAgICAgICAgR2xvYmFsLmxldmVsQ291bnQrKztcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsZXZlbENvdW50JywgR2xvYmFsLmxldmVsQ291bnQudG9TdHJpbmcoKSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMZXZlbCsrO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZExldmVsID4gMTQpIHsgLy8gR2nhuqMgc+G7rSBjw7MgMTUgbGV2ZWxcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRMZXZlbCA9IDE0OyAvLyBHaeG7ryBuZ3V5w6puIOG7nyBsZXZlbCBjdeG7kWkgbuG6v3UgxJHDoyBob8OgbiB0aMOgbmggdOG6pXQgY+G6oyBjw6FjIGxldmVsXG4gICAgICAgIH1cbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWxlY3RlZExldmVsJywgdGhpcy5zZWxlY3RlZExldmVsLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgIC8vIFThuqNpIGzhuqFpIHRyw7IgY2jGoWkgduG7m2kgbGV2ZWwgbeG7m2lcbiAgICAgICAgdGhpcy5sb2FkTmV4dExldmVsKCk7XG4gICAgfVxuXG4gICAgbG9hZE5leHRMZXZlbCgpIHtcbiAgICAgICAgLy8gVGhp4bq/dCBs4bqtcCBs4bqhaSB0cuG6oW5nIHRow6FpIGPhuqduIHRoaeG6v3QgY2hvIGxldmVsIG3hu5tpXG4gICAgICAgIHRoaXMubW9uc3RlcnNEZWZlYXRlZCA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudE1vbnN0ZXJJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLm5UYWJsZUNhcmRzLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMubk1vbnRlcnMucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRzID0gW107XG4gICAgICAgIHRoaXMubGlzdE1vbnN0ZXJzID0gW107XG5cbiAgICAgICAgdGhpcy5saXN0SWRDYXJkID0gdGhpcy5zaHVmZmxlQXJyYXkodGhpcy5saXN0SWRDYXJkKTtcbiAgICAgICAgdGhpcy5sb2FkQ2FyZHMoKTtcbiAgICAgICAgdGhpcy5zcGF3bk1vbnN0ZXIoKTsgXG4gICAgICAgIHRoaXMudXBkYXRlSHBDaGFyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlSHBCYWdHdXkoKTtcbiAgICAgICAgdGhpcy5tYXNrTG9hZEdhbWUoKTtcbiAgICAgICAgY29uc29sZS5sb2coYExvYWRlZCBMZXZlbCAke3RoaXMuc2VsZWN0ZWRMZXZlbH1gKTtcbiAgICB9XG5cblxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICBpZiAoR2xvYmFsLmhwQ2hhciA9PSAwKSB7XG4gICAgICAgICAgICBsZXQgcHJmR2FtZU92ZXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkdhbWVPdmVyKS5nZXRDb21wb25lbnQoR2FtZU92ZXIpXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocHJmR2FtZU92ZXIubm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrUGF1c2UoKSB7XG4gICAgICAgIGxldCBwcmZQYXVzZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmUGF1c2UpLmdldENvbXBvbmVudChQYXVzZSlcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHByZlBhdXNlLm5vZGUpO1xuICAgICAgICB0aGlzLm5UYWJsZUNhcmRzLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsaWNrUmVzdW1lKCkge1xuICAgICAgICB0aGlzLm5UYWJsZUNhcmRzLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaHVmZmxlQXJyYXkoYXJyYXk6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICAgICAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgW2FycmF5W2ldLCBhcnJheVtqXV0gPSBbYXJyYXlbal0sIGFycmF5W2ldXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuXG4gICAgYWRkU2VsZWN0ZWRDYXJkKGNhcmQ6IENhcmQpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDYXJkcy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZHMucHVzaChjYXJkKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ2FyZHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5jaGVja01hdGNoLmJpbmQodGhpcyksIDAuNik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNoZWNrTWF0Y2goKSB7XG4gICAgICAgIGxldCBbZmlyc3RDYXJkLCBzZWNvbmRDYXJkXSA9IHRoaXMuc2VsZWN0ZWRDYXJkcztcblxuICAgICAgICBpZiAoZmlyc3RDYXJkLmlkQ2FyZCA9PT0gMCAmJiBzZWNvbmRDYXJkLmlkQ2FyZCA9PT0gMCkge1xuICAgICAgICAgICAgR2xvYmFsLnNoaWVsZCA9IDM7XG4gICAgICAgICAgICB0aGlzLm5TaGllbGQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2hpZWxkIEFjdGl2YXRlZDogXCIsIEdsb2JhbC5zaGllbGQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaGllbGQoKTtcbiAgICAgICAgICAgIGZpcnN0Q2FyZC5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHNlY29uZENhcmQubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmlyc3RDYXJkLmlkQ2FyZCA9PT0gMTIgfHwgc2Vjb25kQ2FyZC5pZENhcmQgPT09IDEyKSB7XG4gICAgICAgICAgICBsZXQgZG91YmxlRGFtZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgbXVsdGlwbGllckNhcmQgPSBmaXJzdENhcmQuaWRDYXJkID09PSAxMiA/IHNlY29uZENhcmQgOiBmaXJzdENhcmQ7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEF0dGFjayhtdWx0aXBsaWVyQ2FyZC5pZENhcmQsIGRvdWJsZURhbWUpO1xuICAgICAgICAgICAgZmlyc3RDYXJkLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgc2Vjb25kQ2FyZC5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaXJzdENhcmQuaWRDYXJkID09PSBzZWNvbmRDYXJkLmlkQ2FyZCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBdHRhY2soZmlyc3RDYXJkLmlkQ2FyZCwgZmFsc2UpO1xuICAgICAgICAgICAgZmlyc3RDYXJkLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgc2Vjb25kQ2FyZC5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKEdsb2JhbC5zaGllbGQgPiAwKSB7XG4gICAgICAgICAgICAgICAgR2xvYmFsLnNoaWVsZC0tO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2hpZWxkKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lZmZlY3REYW1lQmFnR3V5TWlzcyh0aGlzLm5EYW1lTW9uc3Rlck1pc3MpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2hpZWxkOiBcIiwgR2xvYmFsLnNoaWVsZCk7XG4gICAgICAgICAgICB9IGlmIChHbG9iYWwuc2hpZWxkID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5TaGllbGQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmhwQ2hhci0tO1xuICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0RGFtZUJhZ0d1eSh0aGlzLmxiRGFtZU1vbnN0ZXIsIEdsb2JhbC5kYW1lTW9uc3Rlcik7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpcnN0Q2FyZC5mbGlwQ2FyZCgpO1xuICAgICAgICAgICAgc2Vjb25kQ2FyZC5mbGlwQ2FyZCgpO1xuICAgICAgICAgICAgZmlyc3RDYXJkLmlzQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2Vjb25kQ2FyZC5pc0NsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkcyA9IFtdO1xuICAgIH1cblxuXG4gICAgc2VsZWN0QXR0YWNrKGlkLCBpc0RvdWJsZURhbWU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3dpdGNoIChpZCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2lhcCBuZSBcIik7XG4gICAgICAgICAgICAgICAgaWYgKEdsb2JhbC5zaGllbGQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLnNoaWVsZCA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEdsb2JhbC5zaGllbGQgKj0gaXNEb3VibGVEYW1lID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5uU2hpZWxkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTaGllbGQoKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWF1IG5lIFwiKTtcbiAgICAgICAgICAgICAgICAvLyBpZiAoR2xvYmFsLmhwQ2hhciA+PSAxMCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc0RvdWJsZURhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLmhwQ2hhciAqPSAyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEdsb2JhbC5ocENoYXIgKz0gNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcbiAgICAgICAgICAgICAgICAvL31cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3VuZyBuaG8gYmFuIFwiKTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJTbWFsbCAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhckFyY2hlcnMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrTW9uc3RlcihHbG9iYWwuZGFtZUNoYXJTbWFsbCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1bmcgVGIgYmFuIFwiKTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJOb3JtYWwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyTm9ybWFsKVxuICAgICAgICAgICAgICAgIHRoaXMuY2hhckFyY2hlcnMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyQXJjaGVycy5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhbWVDaGFyQmlnICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tNb25zdGVyKEdsb2JhbC5kYW1lQ2hhckJpZyk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJTbWFsbCAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIEdsb2JhbC5ocE1vbnN0ZXIgLT0gR2xvYmFsLmRhbWVDaGFyU21hbGw7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRmlnaHRlci5jaGFyQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJOb3JtYWwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJGaWdodGVyLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyTm9ybWFsKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiS0llbSBkYW5oIFwiKTtcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJCaWcgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJGaWdodGVyLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyQmlnKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhbWVDaGFyU21hbGwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyU21hbGwpXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyTWFnaWMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhck5vcm1hbCAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrTW9uc3RlcihHbG9iYWwuZGFtZUNoYXJOb3JtYWwpXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyTWFnaWMuY2hhckF0dGFjaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhckJpZyAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhck1hZ2ljLmNoYXJBdHRhY2soKTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyQmlnKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgZWZmZWN0RGFtZUJhZ0d1eShub2RlOiBjYy5Ob2RlLCBkYW1lOiBudW1iZXIpIHtcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCItXCIgKyBkYW1lO1xuICAgICAgICBjYy50d2Vlbihub2RlKVxuICAgICAgICAgICAgLnRvKDAuOCwgeyB5OiAyMDAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG5vZGUueSA9IC03MDtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgZWZmZWN0RGFtZUJhZ0d1eU1pc3Mobm9kZTogY2MuTm9kZSkge1xuICAgICAgICBpZiAoR2xvYmFsLnNoaWVsZCA+IDApIHtcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiLVwiICsgZGFtZTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXG4gICAgICAgICAgICAgICAgLnRvKDAuOCwgeyB5OiAyMDAgfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUueSA9IC03MDtcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB9IGlmIChHbG9iYWwuc2hpZWxkID09IDApIHtcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICB1cGRhdGVIcENoYXIoKSB7XG4gICAgICAgIHRoaXMubGJIcENoYXIuc3RyaW5nID0gR2xvYmFsLmhwQ2hhciArICcgJztcbiAgICB9XG5cbiAgICB1cGRhdGVIcEJhZ0d1eSgpIHtcbiAgICAgICAgdGhpcy5sYkhwTW9uc3Rlci5zdHJpbmcgPSBHbG9iYWwuaHBNb25zdGVyICsgJyAnO1xuICAgIH1cblxuICAgIHVwZGF0ZVNoaWVsZCgpIHtcbiAgICAgICAgdGhpcy5sYlNoaWVsZC5zdHJpbmcgPSBHbG9iYWwuc2hpZWxkICsgJyAnO1xuICAgIH1cbiAgICBvbkNsaWNrUmVzdGFydCgpIHtcbiAgICAgICAgR2xvYmFsLmhwQ2hhciA9IDEwO1xuICAgICAgICBHbG9iYWwuaHBNb25zdGVyID0gMTA7XG4gICAgICAgIHRoaXMudXBkYXRlSHBDaGFyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlSHBCYWdHdXkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTaGllbGQoKTtcbiAgICAgICAgdGhpcy5uVGFibGVDYXJkcy5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLm5Nb250ZXJzLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkcyA9IFtdO1xuICAgICAgICB0aGlzLmxpc3RNb25zdGVycyA9IFtdO1xuICAgICAgICB0aGlzLmxpc3RJZENhcmQgPSB0aGlzLnNodWZmbGVBcnJheSh0aGlzLmxpc3RJZENhcmQpO1xuICAgICAgICB0aGlzLmxvYWRDYXJkcygpO1xuICAgICAgICB0aGlzLmNyZWF0ZU1vbnN0ZXIoMCwgMTAsIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWUgcmVzdGFydGVkXCIpO1xuICAgIH1cblxuICAgIGRlc3Ryb3lHYW1lKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRlc3Ryb3l5eSBcIilcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==