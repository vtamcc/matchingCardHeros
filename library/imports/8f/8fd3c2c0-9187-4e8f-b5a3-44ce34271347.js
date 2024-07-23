"use strict";
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prfCard = null;
        _this.listSpfCards = [];
        _this.nTableCards = null;
        _this.lbHpChar = null;
        _this.lbHpBagGuy = null;
        _this.listIdCard = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12];
        return _this;
        // update (dt) {}
    }
    GameView_1 = GameView;
    // LIFE-CYCLE CALLBACKS:
    GameView.prototype.onLoad = function () {
        var _this = this;
        GameView_1.instance = this;
        this.listIdCard = this.shuffleArray(this.listIdCard);
        this.scheduleOnce(function () {
            _this.loadCards();
        }, 1);
        this.updateHpChar();
        this.updateHpBagGuy();
    };
    GameView.prototype.loadCards = function () {
        for (var i = 0; i < 25; i++) {
            var card = cc.instantiate(this.prfCard).getComponent(CardHero_Card_1.default);
            card.setData(this.listIdCard[i]);
            this.nTableCards.addChild(card.node);
        }
    };
    GameView.prototype.shuffleArray = function (array) {
        var _a;
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
        return array;
    };
    GameView.prototype.start = function () {
    };
    GameView.prototype.updateHpChar = function () {
        this.lbHpChar.string = CardHero_Global_1.Global.hpChar + ' ';
    };
    GameView.prototype.updateHpBagGuy = function () {
        this.lbHpBagGuy.string = CardHero_Global_1.Global.hpBagGuy + ' ';
    };
    var GameView_1;
    GameView.instance = null;
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "prfCard", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameView.prototype, "listSpfCards", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nTableCards", void 0);
    __decorate([
        property(cc.Label)
    ], GameView.prototype, "lbHpChar", void 0);
    __decorate([
        property(cc.Label)
    ], GameView.prototype, "lbHpBagGuy", void 0);
    GameView = GameView_1 = __decorate([
        ccclass
    ], GameView);
    return GameView;
}(cc.Component));
exports.default = GameView;

cc._RF.pop();