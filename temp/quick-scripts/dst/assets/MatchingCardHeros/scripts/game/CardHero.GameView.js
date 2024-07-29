
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
        return _this;
        // update (dt) {}
    }
    GameView_1 = GameView;
    // LIFE-CYCLE CALLBACKS:
    GameView.prototype.onLoad = function () {
        var _this = this;
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
        this.createMonster(0, 10, 1);
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
        // for(let i = 0; i < 25; i++) {
        //     let card = cc.instantiate(this.prfCard).getComponent(Card)
        //     card.setData(this.listIdCard[i])
        //     this.nTableCards.addChild(card.node);
        // }
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
    GameView.prototype.createMonster = function (id, hp, dame) {
        var monter = cc.instantiate(this.prfMonster).getComponent(CardHero_Monster_1.default);
        monter.setMonster(id, hp, dame);
        this.nMonters.addChild(monter.node);
        this.listMonsters.push(monter);
        //   this.idMonster++;
    };
    GameView.prototype.attackMonster = function (dame) {
        if (this.listMonsters.length > 0) {
            var monster_1 = this.listMonsters[0];
            if (monster_1 && monster_1.node) {
                monster_1.receiveDamage(dame);
                if (CardHero_Global_1.Global.hpMonster <= 0) {
                    this.listMonsters = this.listMonsters.filter(function (m) { return m !== monster_1; });
                    console.log("Monster ", this.listMonsters);
                }
            }
        }
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
        cc.director.pause();
    };
    GameView.prototype.onClickResume = function () {
        cc.director.resume();
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
        // Shuffle and reload cards
        this.listIdCard = this.shuffleArray(this.listIdCard);
        this.loadCards();
        // Create a new monster
        this.createMonster(0, 10, 1);
        console.log("Game restarted");
    };
    GameView.prototype.destroyGame = function () {
        console.log("destroyyy ");
        this.node.stopAllActions();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF0Y2hpbmdDYXJkSGVyb3NcXHNjcmlwdHNcXGdhbWVcXENhcmRIZXJvLkdhbWVWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHNEQUE0QztBQUM1QyxpREFBbUM7QUFDbkMsaURBQW1DO0FBQ25DLHVEQUF5QztBQUN6QywrREFBaUQ7QUFDakQseURBQTJDO0FBRXJDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBOFdDO1FBM1dHLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0Isa0JBQVksR0FBcUIsRUFBRSxDQUFDO1FBRXBDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixvQkFBYyxHQUFxQixFQUFFLENBQUM7UUFDdEMsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGdCQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxD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QyxRQUFRLENBQUMsdUJBQUksQ0FBQztpREFDVTtJQUV6QjtRQURDLFFBQVEsQ0FBQyx1QkFBSSxDQUFDOytDQUNRO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNPO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNlO0lBbERoQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBOFc1QjtJQUFELGVBQUM7Q0E5V0QsQUE4V0MsQ0E5V3FDLEVBQUUsQ0FBQyxTQUFTLEdBOFdqRDtrQkE5V29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vQ2FyZEhlcm8uR2xvYmFsXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRIZXJvLkNhcmRcIjtcclxuaW1wb3J0IENoYXIgZnJvbSBcIi4vQ2FyZEhlcm8uQ2hhclwiO1xyXG5pbXBvcnQgTW9uc3RlciBmcm9tIFwiLi9DYXJkSGVyby5Nb25zdGVyXCI7XHJcbmltcG9ydCBHYW1lT3ZlciBmcm9tIFwiLi9wb3B1cC9DYXJkSGVyby5HYW1lT3ZlclwiO1xyXG5pbXBvcnQgUGF1c2UgZnJvbSBcIi4vcG9wdXAvQ2FyZEhlcm8uUGF1c2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBHYW1lVmlldyA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJmQ2FyZDogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmZNb25zdGVyOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgbGlzdFNwZkNhcmRzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5Nb250ZXJzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgblRhYmxlQ2FyZHM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJIcENoYXI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiSHBNb25zdGVyOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5NYXNrQ2xpY2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuTWFza0xvYWRHYW1lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGJEYW1lTW9uc3RlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBsaXN0U3BmTW9uc3RlcjogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG4gICAgaXNDbGljayA9IGZhbHNlO1xyXG4gICAgY291bnRDbGljayA9IDA7XHJcbiAgICBsaXN0SWRDYXJkID0gWzAsIDAsIDEsIDEsIDIsIDIsIDMsIDMsIDQsIDQsIDUsIDUsIDYsIDYsIDcsIDcsIDgsIDgsIDksIDksIDEwLCAxMCwgMTEsIDExLCAxMl07XHJcbiAgICBzZWxlY3RlZENhcmRzID0gW107XHJcbiAgICBkYXRhQ2FyZCA9IFtdO1xyXG4gICAgQHByb3BlcnR5KENoYXIpXHJcbiAgICBjaGFyQXJjaGVyczogQ2hhciA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoQ2hhcilcclxuICAgIGNoYXJGaWdodGVyOiBDaGFyID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShDaGFyKVxyXG4gICAgY2hhck1hZ2ljOiBDaGFyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxiRGFtZUNoYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmZHYW1lT3ZlcjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJmUGF1c2U6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuU2hpZWxkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiU2hpZWxkOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5EYW1lTW9uc3Rlck1pc3M6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgbGlzdE1vbnN0ZXJzID0gW107XHJcbiAgICBpZE1vbnN0ZXIgPSAwO1xyXG4gICAgcm93cyA9IDU7XHJcbiAgICBjb2xzID0gNTtcclxuICAgIHNwYWNpbmcgPSAxMDtcclxuICAgIHByaXZhdGUgc3RhcnRYOiBudW1iZXIgPSAtMzM3O1xyXG4gICAgcHJpdmF0ZSBzdGFydFk6IG51bWJlciA9IDIxMDtcclxuICAgIHByaXZhdGUgdGlsZVdpZHRoOiBudW1iZXIgPSAxMzU7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgICAgIEdsb2JhbC5kYW1lQ2hhclNtYWxsID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGFtZUNoYXJTbWFsbFwiKSkgfHwgR2xvYmFsLmRhbWVDaGFyU21hbGw7XHJcbiAgICAgICAgR2xvYmFsLmRhbWVDaGFyTm9ybWFsID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGFtZUNoYXJOb3JtYWxcIikpIHx8IEdsb2JhbC5kYW1lQ2hhck5vcm1hbDtcclxuICAgICAgICBHbG9iYWwuZGFtZUNoYXJCaWcgPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkYW1lQ2hhckJpZ1wiKSkgfHwgR2xvYmFsLmRhbWVDaGFyQmlnO1xyXG4gICAgICAgIEdsb2JhbC5ocENoYXIgPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJocENoYXJcIikpIHx8IEdsb2JhbC5ocENoYXI7XHJcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubGlzdElkQ2FyZCA9IHRoaXMuc2h1ZmZsZUFycmF5KHRoaXMubGlzdElkQ2FyZCk7XHJcbiAgICAgICAgdGhpcy5tYXNrTG9hZEdhbWUoKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZENhcmRzKCk7XHJcblxyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgdGhpcy5jcmVhdGVNb25zdGVyKDAsIDEwLCAxKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUhwQ2hhcigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSHBCYWdHdXkoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlID0gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIG1hc2tMb2FkR2FtZSgpIHtcclxuICAgICAgICB0aGlzLm5NYXNrTG9hZEdhbWUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubk1hc2tMb2FkR2FtZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9LCA3KVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRDYXJkcygpIHtcclxuICAgICAgICAvLyBmb3IobGV0IGkgPSAwOyBpIDwgMjU7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBsZXQgY2FyZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmQ2FyZCkuZ2V0Q29tcG9uZW50KENhcmQpXHJcbiAgICAgICAgLy8gICAgIGNhcmQuc2V0RGF0YSh0aGlzLmxpc3RJZENhcmRbaV0pXHJcbiAgICAgICAgLy8gICAgIHRoaXMublRhYmxlQ2FyZHMuYWRkQ2hpbGQoY2FyZC5ub2RlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbGV0IGlkSW5kZXggPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUNhcmRbaV0gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkSW5kZXggPj0gdGhpcy5saXN0SWRDYXJkLmxlbmd0aCkgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNhcmQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZkNhcmQpLmdldENvbXBvbmVudChDYXJkKTtcclxuICAgICAgICAgICAgICAgIGNhcmQuc2V0RGF0YSh0aGlzLmxpc3RJZENhcmRbaWRJbmRleF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMublRhYmxlQ2FyZHMuYWRkQ2hpbGQoY2FyZC5ub2RlKTtcclxuICAgICAgICAgICAgICAgIGNhcmQubm9kZS54ID0gdGhpcy5zdGFydFggKyBqICogdGhpcy50aWxlV2lkdGggKyB0aGlzLnRpbGVXaWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICBjYXJkLm5vZGUueSA9IHRoaXMuc3RhcnRZIC0gaSAqIHRoaXMudGlsZVdpZHRoICsgdGhpcy50aWxlV2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhQ2FyZFtpXVtqXSA9IGNhcmQ7XHJcbiAgICAgICAgICAgICAgICBpZEluZGV4Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1vbnN0ZXIoaWQ6IG51bWJlciwgaHA6IG51bWJlciwgZGFtZTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG1vbnRlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmTW9uc3RlcikuZ2V0Q29tcG9uZW50KE1vbnN0ZXIpXHJcbiAgICAgICAgbW9udGVyLnNldE1vbnN0ZXIoaWQsIGhwLCBkYW1lKTtcclxuICAgICAgICB0aGlzLm5Nb250ZXJzLmFkZENoaWxkKG1vbnRlci5ub2RlKTtcclxuICAgICAgICB0aGlzLmxpc3RNb25zdGVycy5wdXNoKG1vbnRlcik7XHJcbiAgICAgICAgLy8gICB0aGlzLmlkTW9uc3RlcisrO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhdHRhY2tNb25zdGVyKGRhbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5saXN0TW9uc3RlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgW21vbnN0ZXJdID0gdGhpcy5saXN0TW9uc3RlcnM7XHJcbiAgICAgICAgICAgIGlmIChtb25zdGVyICYmIG1vbnN0ZXIubm9kZSkge1xyXG4gICAgICAgICAgICAgICAgbW9uc3Rlci5yZWNlaXZlRGFtYWdlKGRhbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKEdsb2JhbC5ocE1vbnN0ZXIgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdE1vbnN0ZXJzID0gdGhpcy5saXN0TW9uc3RlcnMuZmlsdGVyKG0gPT4gbSAhPT0gbW9uc3Rlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNb25zdGVyIFwiLCB0aGlzLmxpc3RNb25zdGVycyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnYW1lT3ZlcigpIHtcclxuICAgICAgICBpZiAoR2xvYmFsLmhwQ2hhciA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBwcmZHYW1lT3ZlciA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmR2FtZU92ZXIpLmdldENvbXBvbmVudChHYW1lT3ZlcilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHByZkdhbWVPdmVyLm5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrUGF1c2UoKSB7XHJcbiAgICAgICAgbGV0IHByZlBhdXNlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZQYXVzZSkuZ2V0Q29tcG9uZW50KFBhdXNlKVxyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwcmZQYXVzZS5ub2RlKTtcclxuICAgICAgICB0aGlzLm5UYWJsZUNhcmRzLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucGF1c2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrUmVzdW1lKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgIHRoaXMublRhYmxlQ2FyZHMuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2h1ZmZsZUFycmF5KGFycmF5OiBudW1iZXJbXSk6IG51bWJlcltdIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgICAgICAgIFthcnJheVtpXSwgYXJyYXlbal1dID0gW2FycmF5W2pdLCBhcnJheVtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTZWxlY3RlZENhcmQoY2FyZDogQ2FyZCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ2FyZHMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2FyZHMucHVzaChjYXJkKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDYXJkcy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuY2hlY2tNYXRjaC5iaW5kKHRoaXMpLCAwLjYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjaGVja01hdGNoKCkge1xyXG4gICAgICAgIGxldCBbZmlyc3RDYXJkLCBzZWNvbmRDYXJkXSA9IHRoaXMuc2VsZWN0ZWRDYXJkcztcclxuXHJcbiAgICAgICAgaWYgKGZpcnN0Q2FyZC5pZENhcmQgPT09IDAgJiYgc2Vjb25kQ2FyZC5pZENhcmQgPT09IDApIHtcclxuICAgICAgICAgICAgR2xvYmFsLnNoaWVsZCA9IDM7XHJcbiAgICAgICAgICAgIHRoaXMublNoaWVsZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNoaWVsZCBBY3RpdmF0ZWQ6IFwiLCBHbG9iYWwuc2hpZWxkKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTaGllbGQoKTtcclxuICAgICAgICAgICAgZmlyc3RDYXJkLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBzZWNvbmRDYXJkLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmlyc3RDYXJkLmlkQ2FyZCA9PT0gMTIgfHwgc2Vjb25kQ2FyZC5pZENhcmQgPT09IDEyKSB7XHJcbiAgICAgICAgICAgIGxldCBkb3VibGVEYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IG11bHRpcGxpZXJDYXJkID0gZmlyc3RDYXJkLmlkQ2FyZCA9PT0gMTIgPyBzZWNvbmRDYXJkIDogZmlyc3RDYXJkO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEF0dGFjayhtdWx0aXBsaWVyQ2FyZC5pZENhcmQsIGRvdWJsZURhbWUpO1xyXG4gICAgICAgICAgICBmaXJzdENhcmQubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHNlY29uZENhcmQubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaXJzdENhcmQuaWRDYXJkID09PSBzZWNvbmRDYXJkLmlkQ2FyZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEF0dGFjayhmaXJzdENhcmQuaWRDYXJkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGZpcnN0Q2FyZC5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgc2Vjb25kQ2FyZC5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKEdsb2JhbC5zaGllbGQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuc2hpZWxkLS07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNoaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZmZlY3REYW1lQmFnR3V5TWlzcyh0aGlzLm5EYW1lTW9uc3Rlck1pc3MpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTaGllbGQ6IFwiLCBHbG9iYWwuc2hpZWxkKTtcclxuICAgICAgICAgICAgfSBpZiAoR2xvYmFsLnNoaWVsZCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5TaGllbGQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuaHBDaGFyLS07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdERhbWVCYWdHdXkodGhpcy5sYkRhbWVNb25zdGVyLCBHbG9iYWwuZGFtZU1vbnN0ZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmlyc3RDYXJkLmZsaXBDYXJkKCk7XHJcbiAgICAgICAgICAgIHNlY29uZENhcmQuZmxpcENhcmQoKTtcclxuICAgICAgICAgICAgZmlyc3RDYXJkLmlzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzZWNvbmRDYXJkLmlzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRzID0gW107XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNlbGVjdEF0dGFjayhpZCwgaXNEb3VibGVEYW1lOiBib29sZWFuKSB7XHJcbiAgICAgICAgc3dpdGNoIChpZCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdpYXAgbmUgXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKEdsb2JhbC5zaGllbGQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBHbG9iYWwuc2hpZWxkID0gMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEdsb2JhbC5zaGllbGQgKj0gaXNEb3VibGVEYW1lID8gMiA6IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5TaGllbGQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2hpZWxkKCk7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1hdSBuZSBcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoR2xvYmFsLmhwQ2hhciA+PSAxMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNEb3VibGVEYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsLmhwQ2hhciAqPSAyO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBHbG9iYWwuaHBDaGFyICs9IDU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUhwQ2hhcigpO1xyXG4gICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1bmcgbmhvIGJhbiBcIik7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJTbWFsbCAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyQXJjaGVycy5jaGFyQXR0YWNrKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyU21hbGwpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdW5nIFRiIGJhbiBcIik7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJOb3JtYWwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrTW9uc3RlcihHbG9iYWwuZGFtZUNoYXJOb3JtYWwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJBcmNoZXJzLmNoYXJBdHRhY2soKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhckFyY2hlcnMuY2hhckF0dGFjaygpO1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhbWVDaGFyQmlnICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyQmlnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhclNtYWxsICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuaHBNb25zdGVyIC09IEdsb2JhbC5kYW1lQ2hhclNtYWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRmlnaHRlci5jaGFyQXR0YWNrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJOb3JtYWwgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhckZpZ2h0ZXIuY2hhckF0dGFjaygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tNb25zdGVyKEdsb2JhbC5kYW1lQ2hhck5vcm1hbCk7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIktJZW0gZGFuaCBcIik7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuZGFtZUNoYXJCaWcgKj0gKGlzRG91YmxlRGFtZSkgPyAyIDogMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhckZpZ2h0ZXIuY2hhckF0dGFjaygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tNb25zdGVyKEdsb2JhbC5kYW1lQ2hhckJpZylcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhclNtYWxsICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyU21hbGwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJNYWdpYy5jaGFyQXR0YWNrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgR2xvYmFsLmRhbWVDaGFyTm9ybWFsICo9IChpc0RvdWJsZURhbWUpID8gMiA6IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja01vbnN0ZXIoR2xvYmFsLmRhbWVDaGFyTm9ybWFsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyTWFnaWMuY2hhckF0dGFjaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICAgIEdsb2JhbC5kYW1lQ2hhckJpZyAqPSAoaXNEb3VibGVEYW1lKSA/IDIgOiAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyTWFnaWMuY2hhckF0dGFjaygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tNb25zdGVyKEdsb2JhbC5kYW1lQ2hhckJpZylcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZWZmZWN0RGFtZUJhZ0d1eShub2RlOiBjYy5Ob2RlLCBkYW1lOiBudW1iZXIpIHtcclxuICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiLVwiICsgZGFtZTtcclxuICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAudG8oMC44LCB7IHk6IDIwMCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbm9kZS55ID0gLTcwO1xyXG4gICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVmZmVjdERhbWVCYWdHdXlNaXNzKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAoR2xvYmFsLnNoaWVsZCA+IDApIHtcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvL25vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIi1cIiArIGRhbWU7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMC44LCB7IHk6IDIwMCB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS55ID0gLTcwO1xyXG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICB9IGlmIChHbG9iYWwuc2hpZWxkID09IDApIHtcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgdXBkYXRlSHBDaGFyKCkge1xyXG4gICAgICAgIHRoaXMubGJIcENoYXIuc3RyaW5nID0gR2xvYmFsLmhwQ2hhciArICcgJztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVIcEJhZ0d1eSgpIHtcclxuICAgICAgICB0aGlzLmxiSHBNb25zdGVyLnN0cmluZyA9IEdsb2JhbC5ocE1vbnN0ZXIgKyAnICc7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2hpZWxkKCkge1xyXG4gICAgICAgIHRoaXMubGJTaGllbGQuc3RyaW5nID0gR2xvYmFsLnNoaWVsZCArICcgJztcclxuICAgIH1cclxuICAgIG9uQ2xpY2tSZXN0YXJ0KCkge1xyXG4gICAgICAgIEdsb2JhbC5ocENoYXIgPSAxMDtcclxuICAgICAgICBHbG9iYWwuaHBNb25zdGVyID0gMTA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVIcENoYXIoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUhwQmFnR3V5KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaGllbGQoKTtcclxuICAgICAgICB0aGlzLm5UYWJsZUNhcmRzLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5uTW9udGVycy5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXJkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMubGlzdE1vbnN0ZXJzID0gW107XHJcblxyXG4gICAgICAgIC8vIFNodWZmbGUgYW5kIHJlbG9hZCBjYXJkc1xyXG4gICAgICAgIHRoaXMubGlzdElkQ2FyZCA9IHRoaXMuc2h1ZmZsZUFycmF5KHRoaXMubGlzdElkQ2FyZCk7XHJcbiAgICAgICAgdGhpcy5sb2FkQ2FyZHMoKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IG1vbnN0ZXJcclxuICAgICAgICB0aGlzLmNyZWF0ZU1vbnN0ZXIoMCwgMTAsIDEpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWUgcmVzdGFydGVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3lHYW1lKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVzdHJveXl5IFwiKVxyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpXHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19