
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MatchingCardHeros/scripts/game/CardHero.Card.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59e726PBpdNqJTecm3LWYt9', 'CardHero.Card');
// MatchingCardHeros/scripts/game/CardHero.Card.ts

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
var CardHero_GameView_1 = require("./CardHero.GameView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nCardBack = null;
        _this.nCardFront = null;
        _this.nCardSpf = null;
        _this.isClicked = false;
        _this.idCard = 0;
        return _this;
        // start() {
        // }
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    Card.prototype.onLoad = function () {
        this.flipToBack();
        this.scheduleOnce(this.flipTofront, 5);
    };
    Card.prototype.setData = function (id) {
        this.idCard = id;
        this.nCardSpf.getComponent(cc.Sprite).spriteFrame = CardHero_GameView_1.default.instance.listSpfCards[id];
    };
    Card.prototype.onClickCards = function () {
        if (this.isClicked)
            return;
        this.isClicked = true;
        this.flipCard();
        CardHero_GameView_1.default.instance.addSelectedCard(this);
        CardHero_GameView_1.default.instance.countClick++;
        if (CardHero_GameView_1.default.instance.countClick == 2) {
            CardHero_GameView_1.default.instance.nMaskClick.active = true;
            console.log("bat ne ");
            this.scheduleOnce(function () {
                CardHero_GameView_1.default.instance.nMaskClick.active = false;
                console.log("Tat ne ");
            }, 0.58);
            CardHero_GameView_1.default.instance.countClick = 0;
        }
    };
    Card.prototype.setCards = function (active) {
        this.nCardBack.active = active;
        this.nCardFront.active = !active;
    };
    Card.prototype.flipToBack = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        cc.tween(this.node)
            .to(0.3, { scaleX: 0.1 })
            .call(function () {
            _this.setCards(true);
            if (callback)
                callback();
        })
            .to(0.3, { scaleX: 1 }).start();
    };
    Card.prototype.flipTofront = function () {
        var _this = this;
        if (!this.nCardFront.active) {
            cc.tween(this.node)
                .to(0.3, { scaleX: 0 })
                .call(function () {
                _this.setCards(false);
            })
                .to(0.3, { scaleX: 1 })
                .start();
        }
    };
    Card.prototype.flipCard = function () {
        var _this = this;
        cc.tween(this.node)
            .to(0.3, { scaleX: 0 })
            .call(function () {
            if (!_this.nCardBack.active) {
                _this.setCards(true);
            }
            else {
                _this.setCards(false);
            }
        }).to(0.3, { scaleX: 1 }).start();
    };
    __decorate([
        property(cc.Node)
    ], Card.prototype, "nCardBack", void 0);
    __decorate([
        property(cc.Node)
    ], Card.prototype, "nCardFront", void 0);
    __decorate([
        property(cc.Node)
    ], Card.prototype, "nCardSpf", void 0);
    Card = __decorate([
        ccclass
    ], Card);
    return Card;
}(cc.Component));
exports.default = Card;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uQ2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix5REFBMkM7QUFFckMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFpRkM7UUE5RUUsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsWUFBTSxHQUFHLENBQUMsQ0FBQzs7UUFvRVYsWUFBWTtRQUNaLElBQUk7UUFFSixpQkFBaUI7SUFDckIsQ0FBQztJQXZFRyx3QkFBd0I7SUFFeEIscUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELHNCQUFPLEdBQVAsVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRywyQkFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELDJCQUFZLEdBQVo7UUFDSSxJQUFHLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMs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Q0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ087SUFQUCxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBaUZ4QjtJQUFELFdBQUM7Q0FqRkQsQUFpRkMsQ0FqRmlDLEVBQUUsQ0FBQyxTQUFTLEdBaUY3QztrQkFqRm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL0NhcmRIZXJvLkdhbWVWaWV3XCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgbkNhcmRCYWNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgbkNhcmRGcm9udDogY2MuTm9kZSA9IG51bGw7XG4gICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgIG5DYXJkU3BmOiBjYy5Ob2RlID0gbnVsbDtcbiAgIGlzQ2xpY2tlZCA9IGZhbHNlO1xuICAgaWRDYXJkID0gMDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuZmxpcFRvQmFjaygpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmZsaXBUb2Zyb250LDUpO1xuICAgIH1cbiAgICBzZXREYXRhKGlkKSB7XG4gICAgICAgIHRoaXMuaWRDYXJkID0gaWQ7XG4gICAgICAgIHRoaXMubkNhcmRTcGYuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBHYW1lVmlldy5pbnN0YW5jZS5saXN0U3BmQ2FyZHNbaWRdO1xuICAgIH1cblxuICAgIG9uQ2xpY2tDYXJkcygpIHtcbiAgICAgICAgaWYodGhpcy5pc0NsaWNrZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5pc0NsaWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmZsaXBDYXJkKCk7XG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLmFkZFNlbGVjdGVkQ2FyZCh0aGlzKTtcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UuY291bnRDbGljaysrO1xuICAgICAgICBpZihHYW1lVmlldy5pbnN0YW5jZS5jb3VudENsaWNrID09IDIpIHtcbiAgICAgICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLm5NYXNrQ2xpY2suYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmF0IG5lIFwiKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS5uTWFza0NsaWNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGF0IG5lIFwiKTtcbiAgICAgICAgICAgIH0sMC41OClcbiAgICAgICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLmNvdW50Q2xpY2sgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q2FyZHMoYWN0aXZlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubkNhcmRCYWNrLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgICAgdGhpcy5uQ2FyZEZyb250LmFjdGl2ZSA9ICFhY3RpdmU7XG4gICAgfVxuXG4gICAgZmxpcFRvQmFjayhjYWxsYmFjazogRnVuY3Rpb24gPSBudWxsKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGVYOiAwLjEgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhcmRzKHRydWUpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudG8oMC4zLCB7IHNjYWxlWDogMSB9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIGZsaXBUb2Zyb250KCkge1xuICAgICAgICBpZighdGhpcy5uQ2FyZEZyb250LmFjdGl2ZSkge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLnRvKDAuMyx7c2NhbGVYOjB9KVxuICAgICAgICAgICAgLmNhbGwoKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYXJkcyhmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRvKDAuMywge3NjYWxlWDoxfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmxpcENhcmQoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgLnRvKDAuMyx7c2NhbGVYOiAwfSlcbiAgICAgICAgLmNhbGwoKCkgPT57XG4gICAgICAgICAgICBpZighdGhpcy5uQ2FyZEJhY2suYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYXJkcyh0cnVlKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhcmRzKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudG8oMC4zLCB7c2NhbGVYOjF9KS5zdGFydCgpO1xuICAgIH1cbiAgIFxuICAgIC8vIHN0YXJ0KCkge1xuICAgIC8vIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=