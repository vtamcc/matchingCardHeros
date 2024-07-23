
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
        _this.nMaskClick = null;
        _this.nMaskLoadGame = null;
        _this.isClick = false;
        _this.countClick = 0;
        _this.listIdCard = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12];
        _this.selectedCards = [];
        return _this;
        // update (dt) {}
    }
    GameView_1 = GameView;
    // LIFE-CYCLE CALLBACKS:
    GameView.prototype.onLoad = function () {
        var _this = this;
        GameView_1.instance = this;
        this.listIdCard = this.shuffleArray(this.listIdCard);
        this.maskLoadGame();
        this.scheduleOnce(function () {
            _this.loadCards();
        }, 1);
        this.updateHpChar();
        this.updateHpBagGuy();
    };
    GameView.prototype.maskLoadGame = function () {
        var _this = this;
        this.nMaskLoadGame.active = true;
        this.scheduleOnce(function () {
            _this.nMaskLoadGame.active = false;
        }, 5);
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
    GameView.prototype.addSelectedCard = function (card) {
        if (this.selectedCards.length < 2) {
            this.selectedCards.push(card);
            if (this.selectedCards.length === 2) {
                this.scheduleOnce(this.checkMatch.bind(this), 1); // Delay to show the cards
            }
        }
    };
    GameView.prototype.checkMatch = function () {
        var _a = this.selectedCards, firstCard = _a[0], secondCard = _a[1];
        console.log("Mang ", this.selectedCards);
        if (firstCard.idCard === secondCard.idCard) {
            this.selectAttack(firstCard.idCard);
            firstCard.node.destroy();
            secondCard.node.destroy();
        }
        else {
            // firstCard.flipCard();
            // secondCard.flipCard();
            console.log("sai me roi");
        }
        this.selectedCards = [];
    };
    GameView.prototype.selectAttack = function (id) {
        switch (id) {
            case 0:
                console.log("Giap ne ");
                break;
            case 1:
                console.log("Mau ne ");
                break;
            case 2:
                console.log("Cung nho ban ");
                break;
            case 3:
                console.log("Cung Tb bắn ");
                break;
            case 4:
                console.log("Giap ne ");
                break;
            case 5:
                console.log("Giap ne ");
                break;
            case 6:
                console.log("Giap ne ");
                break;
            case 7:
                console.log("Giap ne ");
                break;
            case 8:
                console.log("Giap ne ");
                break;
            default:
                break;
        }
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
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nMaskClick", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "nMaskLoadGame", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF0Y2hpbmdDYXJkSGVyb3NcXHNjcmlwdHNcXGdhbWVcXENhcmRIZXJvLkdhbWVWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHNEQUE0QztBQUM1QyxpREFBbUM7QUFFN0IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFnSUM7UUE3SEUsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixrQkFBWSxHQUFxQixFQUFFLENBQUM7UUFFcEMsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZ0JBQVUsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLG1CQUFhLEdBQUcsRUFBRSxDQUFD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TUFBTTtTQUNiO0lBQ04sQ0FBQztJQUNBLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLHdCQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUMvQyxDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLHdCQUFNLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUNuRCxDQUFDOztJQTNIWSxpQkFBUSxHQUFhLElBQUksQ0FBQztJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNNO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7a0RBQ1c7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNPO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ1M7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNZO0lBZlosUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdJNUI7SUFBRCxlQUFDO0NBaElELEFBZ0lDLENBaElxQyxFQUFFLENBQUMsU0FBUyxHQWdJakQ7a0JBaElvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uL0NhcmRIZXJvLkdsb2JhbFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkSGVyby5DYXJkXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogR2FtZVZpZXcgPSBudWxsO1xyXG4gICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICBwcmZDYXJkOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgIGxpc3RTcGZDYXJkczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG4gICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgblRhYmxlQ2FyZHM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgIGxiSHBDaGFyOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgbGJIcEJhZ0d1eTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgbk1hc2tDbGljazogY2MuTm9kZSA9IG51bGw7XHJcbiAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICBuTWFza0xvYWRHYW1lOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgaXNDbGljayA9IGZhbHNlO1xyXG4gICBjb3VudENsaWNrID0gMDtcclxuICAgbGlzdElkQ2FyZCA9IFswLDAsMSwxLDIsMiwzLDMsNCw0LDUsNSw2LDYsNyw3LDgsOCw5LDksMTAsMTAsMTEsMTEsMTJdO1xyXG4gICBzZWxlY3RlZENhcmRzID0gW107XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICB0aGlzLmxpc3RJZENhcmQgPSB0aGlzLnNodWZmbGVBcnJheSh0aGlzLmxpc3RJZENhcmQpO1xyXG4gICAgICAgIHRoaXMubWFza0xvYWRHYW1lKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRDYXJkcygpO1xyXG4gICAgICAgIH0sMSlcclxuICAgICAgICB0aGlzLnVwZGF0ZUhwQ2hhcigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSHBCYWdHdXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXNrTG9hZEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5uTWFza0xvYWRHYW1lLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5NYXNrTG9hZEdhbWUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSw1KVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRDYXJkcygpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMjU7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2FyZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJmQ2FyZCkuZ2V0Q29tcG9uZW50KENhcmQpXHJcbiAgICAgICAgICAgIGNhcmQuc2V0RGF0YSh0aGlzLmxpc3RJZENhcmRbaV0pXHJcbiAgICAgICAgICAgIHRoaXMublRhYmxlQ2FyZHMuYWRkQ2hpbGQoY2FyZC5ub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2h1ZmZsZUFycmF5KGFycmF5OiBudW1iZXJbXSk6IG51bWJlcltdIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoLTE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgICAgICAgICBbYXJyYXlbaV0sIGFycmF5W2pdXSA9IFthcnJheVtqXSwgYXJyYXlbaV1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU2VsZWN0ZWRDYXJkKGNhcmQ6IENhcmQpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENhcmRzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRzLnB1c2goY2FyZCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ2FyZHMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmNoZWNrTWF0Y2guYmluZCh0aGlzKSwgMSk7IC8vIERlbGF5IHRvIHNob3cgdGhlIGNhcmRzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIGNoZWNrTWF0Y2goKSB7XHJcbiAgICAgICAgbGV0IFtmaXJzdENhcmQsIHNlY29uZENhcmRdID0gdGhpcy5zZWxlY3RlZENhcmRzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFuZyBcIix0aGlzLnNlbGVjdGVkQ2FyZHMpO1xyXG4gICAgICAgIGlmIChmaXJzdENhcmQuaWRDYXJkID09PSBzZWNvbmRDYXJkLmlkQ2FyZCkge1xyXG4gICAgICAgICAgIHRoaXMuc2VsZWN0QXR0YWNrKGZpcnN0Q2FyZC5pZENhcmQpO1xyXG4gICAgICAgICAgIGZpcnN0Q2FyZC5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICBzZWNvbmRDYXJkLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0Q2FyZC5mbGlwQ2FyZCgpO1xyXG4gICAgICAgICAgICAvLyBzZWNvbmRDYXJkLmZsaXBDYXJkKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2FpIG1lIHJvaVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhcmRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICBzZWxlY3RBdHRhY2soaWQpIHtcclxuICAgICAgICBzd2l0Y2ggKGlkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2lhcCBuZSBcIik7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1hdSBuZSBcIik7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1bmcgbmhvIGJhbiBcIik7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1bmcgVGIgYuG6r24gXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHaWFwIG5lIFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2lhcCBuZSBcIik7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdpYXAgbmUgXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHaWFwIG5lIFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2lhcCBuZSBcIik7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICB9XHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUhwQ2hhcigpIHtcclxuICAgICAgICB0aGlzLmxiSHBDaGFyLnN0cmluZyA9IEdsb2JhbC5ocENoYXIgKyAnICc7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSHBCYWdHdXkoKSB7XHJcbiAgICAgICAgdGhpcy5sYkhwQmFnR3V5LnN0cmluZyA9IEdsb2JhbC5ocEJhZ0d1eSArICcgJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=