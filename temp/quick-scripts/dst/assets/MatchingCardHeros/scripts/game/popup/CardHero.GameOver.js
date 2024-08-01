
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MatchingCardHeros/scripts/game/popup/CardHero.GameOver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'de8d4/7tgJF0LWGiu41K2vT', 'CardHero.GameOver');
// MatchingCardHeros/scripts/game/popup/CardHero.GameOver.ts

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
var CardHero_GameView_1 = require("../CardHero.GameView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameOver = /** @class */ (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.nYouWin = null;
        _this.nYouLose = null;
        _this.nStarWin_1 = null;
        _this.nStarWin_2 = null;
        _this.nStarWin_3 = null;
        _this.nStarLose_1 = null;
        _this.nStarLose_2 = null;
        _this.nStarLose_3 = null;
        _this.nBtnNext = null;
        return _this;
        // update (dt) {}
    }
    GameOver.prototype.start = function () {
    };
    GameOver.prototype.clickRestart = function () {
        CardHero_GameView_1.default.instance.onClickRestart();
        this.node.destroy();
    };
    GameOver.prototype.winGame = function (win) {
        this.nYouWin.active = win;
        this.nYouLose.active = !win;
    };
    GameOver.prototype.nextLevel = function () {
        CardHero_GameView_1.default.instance.loadNextLevel();
        this.node.destroy();
    };
    GameOver.prototype.clickHome = function () {
        this.node.destroy();
        CardHero_GameView_1.default.instance.destroyGame();
    };
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "nYouWin", void 0);
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "nYouLose", void 0);
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "nStarWin_1", void 0);
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "nStarWin_2", void 0);
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "nStarWin_3", void 0);
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "nStarLose_1", void 0);
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "nStarLose_2", void 0);
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "nStarLose_3", void 0);
    __decorate([
        property(cc.Node)
    ], GameOver.prototype, "nBtnNext", void 0);
    GameOver = __decorate([
        ccclass
    ], GameOver);
    return GameOver;
}(cc.Component));
exports.default = GameOver;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvcG9wdXAvQ2FyZEhlcm8uR2FtZU92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsMERBQTRDO0FBRXRDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBRUksd0JBQXdCO1FBRjVCLHFFQXNEQztRQWxERyxlQUFlO1FBR2YsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGNBQVEsR0FBWSxJQUFJLENBQUM7O1FBeUJ6QixpQkFBaUI7SUFDckIsQ0FBQztJQXpCRyx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFDSSwyQkFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsR0FBWTtRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUM7SUFFaEMsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSwyQkFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwQiwyQkFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBN0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBNUJSLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FzRDVCO0lBQUQsZUFBQztDQXRERCxBQXNEQyxDQXREcUMsRUFBRSxDQUFDLFNBQVMsR0FzRGpEO2tCQXREb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4uL0NhcmRIZXJvLkdhbWVWaWV3XCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Zb3VXaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Zb3VMb3NlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5TdGFyV2luXzE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5TdGFyV2luXzI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5TdGFyV2luXzM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblN0YXJMb3NlXzE6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblN0YXJMb3NlXzI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgblN0YXJMb3NlXzM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkJ0bk5leHQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIGNsaWNrUmVzdGFydCgpe1xuICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS5vbkNsaWNrUmVzdGFydCgpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHdpbkdhbWUod2luOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubllvdVdpbi5hY3RpdmUgPSB3aW47XG4gICAgICAgIHRoaXMubllvdUxvc2UuYWN0aXZlID0gIXdpbjtcblxuICAgIH1cblxuICAgIG5leHRMZXZlbCgpIHtcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UubG9hZE5leHRMZXZlbCgpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGNsaWNrSG9tZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UuZGVzdHJveUdhbWUoKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==