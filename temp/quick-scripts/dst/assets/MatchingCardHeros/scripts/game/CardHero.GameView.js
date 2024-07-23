
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uR2FtZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsc0RBQTRDO0FBQzVDLGlEQUFtQztBQUU3QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTJEQztRQXhERSxhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGtCQUFZLEdBQXFCLEVBQUUsQ0FBQztRQUVwQyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQzs7UUE0Q3JFLGlCQUFpQjtJQUNyQixDQUFDO2lCQTNEb0IsUUFBUTtJQWV6Qix3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkcsVUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtRQUVKLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUdELDRCQUFTLEdBQVQ7UUFDSSxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyx1QkFBSSxDQUFDLENBQUE7WUFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO0lBQ0wsQ0FBQztJQUVELCtCQUFZLEdBQVosVUFBYSxLQUFlOztRQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxLQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBMUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFBLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFBLENBQXlCO1NBQy9DO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLHdCQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUMvQyxDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLHdCQUFNLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUNuRCxDQUFDOztJQXREWSxpQkFBUSxHQUFhLElBQUksQ0FBQztJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNNO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7a0RBQ1c7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNPO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ1M7SUFaVixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMkQ1QjtJQUFELGVBQUM7Q0EzREQsQUEyREMsQ0EzRHFDLEVBQUUsQ0FBQyxTQUFTLEdBMkRqRDtrQkEzRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uL0NhcmRIZXJvLkdsb2JhbFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZEhlcm8uQ2FyZFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IEdhbWVWaWV3ID0gbnVsbDtcbiAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICBwcmZDYXJkOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgbGlzdFNwZkNhcmRzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgIG5UYWJsZUNhcmRzOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgbGJIcENoYXI6IGNjLkxhYmVsID0gbnVsbDtcbiAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgIGxiSHBCYWdHdXk6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgbGlzdElkQ2FyZCA9IFswLDAsMSwxLDIsMiwzLDMsNCw0LDUsNSw2LDYsNyw3LDgsOCw5LDksMTAsMTAsMTEsMTEsMTJdO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB0aGlzLmxpc3RJZENhcmQgPSB0aGlzLnNodWZmbGVBcnJheSh0aGlzLmxpc3RJZENhcmQpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRDYXJkcygpO1xuICAgICAgICB9LDEpXG4gICAgICAgXG4gICAgICAgIHRoaXMudXBkYXRlSHBDaGFyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlSHBCYWdHdXkoKTtcbiAgICB9XG5cblxuICAgIGxvYWRDYXJkcygpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDI1OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjYXJkID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZDYXJkKS5nZXRDb21wb25lbnQoQ2FyZClcbiAgICAgICAgICAgIGNhcmQuc2V0RGF0YSh0aGlzLmxpc3RJZENhcmRbaV0pXG4gICAgICAgICAgICB0aGlzLm5UYWJsZUNhcmRzLmFkZENoaWxkKGNhcmQubm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaHVmZmxlQXJyYXkoYXJyYXk6IG51bWJlcltdKTogbnVtYmVyW10ge1xuICAgICAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoLTE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgICAgIFthcnJheVtpXSwgYXJyYXlbal1dID0gW2FycmF5W2pdLCBhcnJheVtpXV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHVwZGF0ZUhwQ2hhcigpIHtcbiAgICAgICAgdGhpcy5sYkhwQ2hhci5zdHJpbmcgPSBHbG9iYWwuaHBDaGFyICsgJyAnO1xuICAgIH1cblxuICAgIHVwZGF0ZUhwQmFnR3V5KCkge1xuICAgICAgICB0aGlzLmxiSHBCYWdHdXkuc3RyaW5nID0gR2xvYmFsLmhwQmFnR3V5ICsgJyAnO1xuICAgIH1cblxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==