
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MatchingCardHeros/scripts/game/CardHero.Monster.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97818ABoAtAvIFaaw7xkDg8', 'CardHero.Monster');
// MatchingCardHeros/scripts/game/CardHero.Monster.ts

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
var CardHero_GameView_1 = require("./CardHero.GameView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    function Monster() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nMonster = null;
        _this.dame = 1;
        _this.monsterId = 0;
        // LIFE-CYCLE CALLBACKS:
        _this.jumpTween = null;
        return _this;
        // update (dt) {}
    }
    Monster.prototype.onLoad = function () {
        this.setMonsterJump();
    };
    Monster.prototype.setMonster = function (id, hp, dame) {
        this.monsterId = id;
        this.node.getComponent(cc.Sprite).spriteFrame = CardHero_GameView_1.default.instance.listSpfMonster[id];
        CardHero_Global_1.Global.hpMonster = hp;
        this.dame = dame;
        CardHero_GameView_1.default.instance.updateHpBagGuy();
    };
    Monster.prototype.receiveDamage = function (dame) {
        CardHero_Global_1.Global.hpMonster -= dame;
        CardHero_GameView_1.default.instance.effectDameBagGuy(CardHero_GameView_1.default.instance.lbDameChar, dame);
        CardHero_GameView_1.default.instance.updateHpBagGuy();
        if (CardHero_Global_1.Global.hpMonster <= 0) {
            CardHero_Global_1.Global.hpMonster = 0;
            CardHero_GameView_1.default.instance.updateHpBagGuy();
            this.onDeath();
        }
    };
    Monster.prototype.onDeath = function () {
        var _this = this;
        // Dừng mọi hành động trên node của quái
        // this.node.destroy();
        this.node.stopAllActions();
        this.scheduleOnce(function () {
            _this.node.destroy();
            var newHp = CardHero_Global_1.Global.hpMonster + 15; // Tăng HP mới
            var newDame = _this.dame + 1; // Tăng dame mới
            CardHero_GameView_1.default.instance.createMonster(_this.monsterId + 1, newHp, newDame);
            console.log("mau", CardHero_Global_1.Global.hpMonster);
        }, 2);
        // Delay of 2 seconds
    };
    Monster.prototype.setMonsterJump = function () {
        var jumpUp = cc.tween().to(0.5, { y: 100 }, { easing: 'sineOut' });
        var jumpDown = cc.tween().to(0.3, { y: 0 }, { easing: 'sineIn' });
        var jumpSequence = cc.tween().sequence(jumpUp, jumpDown);
        var repeatJump = cc.tween().repeatForever(jumpSequence);
        cc.tween(this.node).then(repeatJump).start();
    };
    Monster.prototype.start = function () {
    };
    __decorate([
        property(cc.Node)
    ], Monster.prototype, "nMonster", void 0);
    Monster = __decorate([
        ccclass
    ], Monster);
    return Monster;
}(cc.Component));
exports.default = Monster;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF0Y2hpbmdDYXJkSGVyb3NcXHNjcmlwdHNcXGdhbWVcXENhcmRIZXJvLk1vbnN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsc0RBQTRDO0FBQzVDLHlEQUEyQztBQUVyQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTREQztRQXpERyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2Qsd0JBQXdCO1FBQ3hCLGVBQVMsR0FBYSxJQUFJLENBQUM7O1FBb0QzQixpQkFBaUI7SUFDckIsQ0FBQztJQXBERyx3QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCw0QkFBVSxHQUFWLFVBQVcsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsMkJBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JGLHdCQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQiwyQkFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsK0JBQWEsR0FBYixVQUFjLElBQUk7UUFDZCx3QkFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUM7UUFDekIsMkJBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsMkJBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLDJCQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLElBQUksd0JBQU0sQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLHdCQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNyQiwyQkFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBRUQseUJBQU8sR0FBUDtRQUFBLGlCQWNDO1FBYkcsd0NBQXdDO1FBQ3hDLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLElBQUksS0FBSyxHQUFHLHdCQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLGNBQWM7WUFDakQsSUFBSSxPQUFPLEdBQUcsS0FBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7WUFDN0MsMkJBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSx3QkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtRQUVKLHFCQUFxQjtJQUV6QixDQUFDO0lBQ0QsZ0NBQWMsR0FBZDtRQUNJLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDckUsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNuRSxJQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMzRCxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTFELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBR0QsdUJBQUssR0FBTDtJQUVBLENBQUM7SUF0REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTztJQUhSLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0E0RDNCO0lBQUQsY0FBQztDQTVERCxBQTREQyxDQTVEb0MsRUFBRSxDQUFDLFNBQVMsR0E0RGhEO2tCQTVEb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9DYXJkSGVyby5HbG9iYWxcIjtcclxuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL0NhcmRIZXJvLkdhbWVWaWV3XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9uc3RlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuTW9uc3RlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBkYW1lID0gMTtcclxuICAgIG1vbnN0ZXJJZCA9IDA7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIGp1bXBUd2VlbjogY2MuVHdlZW4gPSBudWxsO1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuc2V0TW9uc3Rlckp1bXAoKTtcclxuICAgIH1cclxuICAgIHNldE1vbnN0ZXIoaWQsIGhwLCBkYW1lKSB7XHJcbiAgICAgICAgdGhpcy5tb25zdGVySWQgPSBpZDtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBHYW1lVmlldy5pbnN0YW5jZS5saXN0U3BmTW9uc3RlcltpZF07XHJcbiAgICAgICAgR2xvYmFsLmhwTW9uc3RlciA9IGhwO1xyXG4gICAgICAgIHRoaXMuZGFtZSA9IGRhbWU7XHJcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UudXBkYXRlSHBCYWdHdXkoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWNlaXZlRGFtYWdlKGRhbWUpIHtcclxuICAgICAgICBHbG9iYWwuaHBNb25zdGVyIC09IGRhbWU7XHJcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UuZWZmZWN0RGFtZUJhZ0d1eShHYW1lVmlldy5pbnN0YW5jZS5sYkRhbWVDaGFyLGRhbWUpO1xyXG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLnVwZGF0ZUhwQmFnR3V5KCk7XHJcbiAgICAgICAgaWYgKEdsb2JhbC5ocE1vbnN0ZXIgPD0gMCkge1xyXG4gICAgICAgICAgICBHbG9iYWwuaHBNb25zdGVyID0gMDtcclxuICAgICAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UudXBkYXRlSHBCYWdHdXkoKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRlYXRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVhdGgoKSB7XHJcbiAgICAgICAgLy8gROG7q25nIG3hu41pIGjDoG5oIMSR4buZbmcgdHLDqm4gbm9kZSBj4bunYSBxdcOhaVxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBsZXQgbmV3SHAgPSBHbG9iYWwuaHBNb25zdGVyICsgMTU7IC8vIFTEg25nIEhQIG3hu5tpXHJcbiAgICAgICAgICAgIGxldCBuZXdEYW1lID0gdGhpcy5kYW1lICsgMTsgLy8gVMSDbmcgZGFtZSBt4bubaVxyXG4gICAgICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS5jcmVhdGVNb25zdGVyKHRoaXMubW9uc3RlcklkICsgMSwgbmV3SHAsIG5ld0RhbWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1hdVwiLCBHbG9iYWwuaHBNb25zdGVyKTtcclxuICAgICAgICB9LDIpXHJcbiAgICAgIFxyXG4gICAgICAgIC8vIERlbGF5IG9mIDIgc2Vjb25kc1xyXG5cclxuICAgIH1cclxuICAgIHNldE1vbnN0ZXJKdW1wKCkge1xyXG4gICAgICAgIGNvbnN0IGp1bXBVcCA9IGNjLnR3ZWVuKCkudG8oMC41LCB7IHk6IDEwMCB9LCB7IGVhc2luZzogJ3NpbmVPdXQnIH0pO1xyXG4gICAgICAgIGNvbnN0IGp1bXBEb3duID0gY2MudHdlZW4oKS50bygwLjMsIHsgeTogMCB9LHsgZWFzaW5nOiAnc2luZUluJyB9KTtcclxuICAgICAgICBjb25zdCBqdW1wU2VxdWVuY2UgPSBjYy50d2VlbigpLnNlcXVlbmNlKGp1bXBVcCwganVtcERvd24pO1xyXG4gICAgICAgIGNvbnN0IHJlcGVhdEp1bXAgPSBjYy50d2VlbigpLnJlcGVhdEZvcmV2ZXIoanVtcFNlcXVlbmNlKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50aGVuKHJlcGVhdEp1bXApLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==