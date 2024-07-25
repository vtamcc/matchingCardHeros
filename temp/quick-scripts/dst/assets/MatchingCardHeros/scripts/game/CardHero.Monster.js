
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
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    Monster.prototype.onLoad = function () {
        this.setMonsterJump();
    };
    Monster.prototype.setMonster = function (id) {
        this.nMonster.getComponent(cc.Sprite).spriteFrame = CardHero_GameView_1.default.instance.listMonster[id];
    };
    Monster.prototype.receiveDamage = function (dame) {
        CardHero_Global_1.Global.hpMonster -= dame;
        CardHero_GameView_1.default.instance.updateHpBagGuy();
        if (CardHero_Global_1.Global.hpMonster <= 0) {
            this.onDeath();
            console.log("destroy");
        }
    };
    Monster.prototype.onDeath = function () {
        this.node.destroy();
        //GameView.instance.createMonster();
    };
    Monster.prototype.setMonsterJump = function () {
        var jumpUp = cc.tween().to(0.5, { y: 100 }, { easing: 'sineOut' });
        var jumpDown = cc.tween().to(0.5, { y: 0 }, { easing: 'sineIn' });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF0Y2hpbmdDYXJkSGVyb3NcXHNjcmlwdHNcXGdhbWVcXENhcmRIZXJvLk1vbnN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsc0RBQTRDO0FBQzVDLHlEQUEyQztBQUVyQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTJDQztRQXhDRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxlQUFTLEdBQUcsQ0FBQyxDQUFDOztRQXFDZCxpQkFBaUI7SUFDckIsQ0FBQztJQXJDRyx3QkFBd0I7SUFFeEIsd0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0QsNEJBQVUsR0FBVixVQUFXLEVBQUU7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLDJCQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQsK0JBQWEsR0FBYixVQUFjLElBQUk7UUFDZCx3QkFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUM7UUFDekIsMkJBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBRyx3QkFBTSxDQUFDLFNBQVMsSUFBRyxDQUFDLEVBQUU7WUFFdEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFRCx5QkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQixvQ0FBb0M7SUFDeEMsQ0FBQztJQUVELGdDQUFjLEdBQWQ7UUFDSSxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDcEUsSUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDM0QsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUxRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUNELHVCQUFLLEdBQUw7SUFFQSxDQUFDO0lBckNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ087SUFIUixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBMkMzQjtJQUFELGNBQUM7Q0EzQ0QsQUEyQ0MsQ0EzQ29DLEVBQUUsQ0FBQyxTQUFTLEdBMkNoRDtrQkEzQ29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vQ2FyZEhlcm8uR2xvYmFsXCI7XHJcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9DYXJkSGVyby5HYW1lVmlld1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25zdGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5Nb25zdGVyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGRhbWUgPSAxO1xyXG4gICAgbW9uc3RlcklkID0gMDtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRNb25zdGVySnVtcCgpO1xyXG4gICAgfVxyXG4gICAgc2V0TW9uc3RlcihpZCkge1xyXG4gICAgICAgIHRoaXMubk1vbnN0ZXIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBHYW1lVmlldy5pbnN0YW5jZS5saXN0TW9uc3RlcltpZF07XHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZURhbWFnZShkYW1lKSB7XHJcbiAgICAgICAgR2xvYmFsLmhwTW9uc3RlciAtPSBkYW1lO1xyXG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLnVwZGF0ZUhwQmFnR3V5KCk7XHJcbiAgICAgICAgaWYoR2xvYmFsLmhwTW9uc3RlciA8PTApIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgIHRoaXMub25EZWF0aCgpO1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVzdHJveVwiKTsgXHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxuXHJcbiAgICBvbkRlYXRoKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy9HYW1lVmlldy5pbnN0YW5jZS5jcmVhdGVNb25zdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TW9uc3Rlckp1bXAoKSB7XHJcbiAgICAgICAgY29uc3QganVtcFVwID0gY2MudHdlZW4oKS50bygwLjUsIHsgeTogMTAwIH0sIHsgZWFzaW5nOiAnc2luZU91dCcgfSk7XHJcbiAgICAgICAgY29uc3QganVtcERvd24gPSBjYy50d2VlbigpLnRvKDAuNSwgeyB5OiAwIH0sIHsgZWFzaW5nOiAnc2luZUluJyB9KTtcclxuICAgICAgICBjb25zdCBqdW1wU2VxdWVuY2UgPSBjYy50d2VlbigpLnNlcXVlbmNlKGp1bXBVcCwganVtcERvd24pO1xyXG4gICAgICAgIGNvbnN0IHJlcGVhdEp1bXAgPSBjYy50d2VlbigpLnJlcGVhdEZvcmV2ZXIoanVtcFNlcXVlbmNlKTtcclxuICAgICAgICBcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRoZW4ocmVwZWF0SnVtcCkuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=