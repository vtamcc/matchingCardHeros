
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
        // flipCard() {
        //     cc.tween(this.node)
        //     .to(0.3,{scaleX: 0})
        //     .call(() =>{
        //         if(!this.nCardBack.active) {
        //             this.setCards(true);
        //             console.log("vao if")
        //         }else {
        //             this.setCards(false);
        //             console.log("vao else")
        //         }
        //     }).to(0.3, {scaleX:1}).start();
        // }
        // start() {
        // }
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    Card.prototype.onLoad = function () {
        this.flipToback();
        //this.scheduleOnce(this.flipTofront,3);
    };
    Card.prototype.setData = function (id) {
        this.idCard = id;
        this.nCardSpf.getComponent(cc.Sprite).spriteFrame = CardHero_GameView_1.default.instance.listSpfCards[id];
    };
    Card.prototype.onClickCards = function () {
        if (this.isClicked)
            return;
        this.isClicked = true;
        console.log("id ", this.idCard);
        //this.flipCard();
        CardHero_GameView_1.default.instance.addSelectedCard(this);
        CardHero_GameView_1.default.instance.countClick++;
        if (CardHero_GameView_1.default.instance.countClick == 2) {
            CardHero_GameView_1.default.instance.nMaskClick.active = true;
            this.scheduleOnce(function () {
                CardHero_GameView_1.default.instance.nMaskClick.active = false;
            }, 0.6);
            CardHero_GameView_1.default.instance.countClick = 0;
        }
    };
    Card.prototype.setCards = function (active) {
        this.nCardBack.active = active;
        this.nCardFront.active = !active;
    };
    Card.prototype.flipToback = function () {
        var _this = this;
        cc.tween(this.node)
            .to(0.3, { scaleX: 0.1 })
            .call(function () {
            _this.setCards(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF0Y2hpbmdDYXJkSGVyb3NcXHNjcmlwdHNcXGdhbWVcXENhcmRIZXJvLkNhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseURBQTJDO0FBRXJDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBbUZDO1FBaEZFLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFlBQU0sR0FBRyxDQUFDLENBQUM7O1FBd0RWLGVBQWU7UUFDZiwwQkFBMEI7UUFDMUIsMkJBQTJCO1FBQzNCLG1CQUFtQjtRQUNuQix1Q0FBdUM7UUFDdkMsbUNBQW1DO1FBQ25DLG9DQUFvQztRQUNwQyxrQkFBa0I7UUFDbEIsb0NBQW9DO1FBQ3BDLHNDQUFzQztRQUN0QyxZQUFZO1FBQ1osc0NBQXNDO1FBQ3RDLElBQUk7UUFFSixZQUFZO1FBQ1osSUFBSTtRQUVKLGlCQUFpQjtJQUNyQixDQUFDO0lBekVHLHdCQUF3QjtJQUV4QixxQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLHdDQUF3QztJQUM1QyxDQUFDO0lBQ0Qsc0JBQU8sR0FBUCxVQUFRLEVBQUU7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLDJCQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQsMkJBQVksR0FBWjtRQUNJLElBQUcsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxrQkFBa0I7UUFDbEIsMkJBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLDJCQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9CLElBQUcsMkJBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtZQUNsQywyQkFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLDJCQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2hELENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQTtZQUNOLDJCQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBRUQsdUJBQVEsR0FBUixVQUFTLE1BQWU7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3JDLENBQUM7SUFFRCx5QkFBVSxHQUFWO1FBQUEsaUJBU0M7UUFQRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEIsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQzthQUNyQixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQzthQUNELEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVoQyxDQUFDO0lBRUQsMEJBQVcsR0FBWDtRQUFBLGlCQVVDO1FBVEcsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDbEIsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsQ0FBQztpQkFDbEIsSUFBSSxDQUFDO2dCQUNGLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFDO2lCQUNELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLENBQUM7aUJBQ25CLEtBQUssRUFBRSxDQUFDO1NBQ1o7SUFDTCxDQUFDO0lBNURGO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNPO0lBUFAsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQW1GeEI7SUFBRCxXQUFDO0NBbkZELEFBbUZDLENBbkZpQyxFQUFFLENBQUMsU0FBUyxHQW1GN0M7a0JBbkZvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL0NhcmRIZXJvLkdhbWVWaWV3XCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgIG5DYXJkQmFjazogY2MuTm9kZSA9IG51bGw7XHJcbiAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICBuQ2FyZEZyb250OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgIG5DYXJkU3BmOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgaXNDbGlja2VkID0gZmFsc2U7XHJcbiAgIGlkQ2FyZCA9IDA7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuZmxpcFRvYmFjaygpO1xyXG4gICAgICAgIC8vdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5mbGlwVG9mcm9udCwzKTtcclxuICAgIH1cclxuICAgIHNldERhdGEoaWQpIHtcclxuICAgICAgICB0aGlzLmlkQ2FyZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubkNhcmRTcGYuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBHYW1lVmlldy5pbnN0YW5jZS5saXN0U3BmQ2FyZHNbaWRdO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tDYXJkcygpIHtcclxuICAgICAgICBpZih0aGlzLmlzQ2xpY2tlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNDbGlja2VkID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImlkIFwiLCB0aGlzLmlkQ2FyZCk7XHJcbiAgICAgICAgLy90aGlzLmZsaXBDYXJkKCk7XHJcbiAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UuYWRkU2VsZWN0ZWRDYXJkKHRoaXMpO1xyXG4gICAgICAgIEdhbWVWaWV3Lmluc3RhbmNlLmNvdW50Q2xpY2srKztcclxuICAgICAgICBpZihHYW1lVmlldy5pbnN0YW5jZS5jb3VudENsaWNrID09IDIpIHtcclxuICAgICAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2Uubk1hc2tDbGljay5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBHYW1lVmlldy5pbnN0YW5jZS5uTWFza0NsaWNrLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LDAuNilcclxuICAgICAgICAgICAgR2FtZVZpZXcuaW5zdGFuY2UuY291bnRDbGljayA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldENhcmRzKGFjdGl2ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMubkNhcmRCYWNrLmFjdGl2ZSA9IGFjdGl2ZTtcclxuICAgICAgICB0aGlzLm5DYXJkRnJvbnQuYWN0aXZlID0gIWFjdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICBmbGlwVG9iYWNrKCkge1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgLnRvKDAuMyx7c2NhbGVYOiAwLjF9KVxyXG4gICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDYXJkcyh0cnVlKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50bygwLjMse3NjYWxlWDoxfSkuc3RhcnQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmbGlwVG9mcm9udCgpIHtcclxuICAgICAgICBpZighdGhpcy5uQ2FyZEZyb250LmFjdGl2ZSkge1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjMse3NjYWxlWDowfSlcclxuICAgICAgICAgICAgLmNhbGwoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhcmRzKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRvKDAuMywge3NjYWxlWDoxfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGZsaXBDYXJkKCkge1xyXG4gICAgLy8gICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgIC8vICAgICAudG8oMC4zLHtzY2FsZVg6IDB9KVxyXG4gICAgLy8gICAgIC5jYWxsKCgpID0+e1xyXG4gICAgLy8gICAgICAgICBpZighdGhpcy5uQ2FyZEJhY2suYWN0aXZlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNldENhcmRzKHRydWUpO1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YW8gaWZcIilcclxuICAgIC8vICAgICAgICAgfWVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zZXRDYXJkcyhmYWxzZSk7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbyBlbHNlXCIpXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KS50bygwLjMsIHtzY2FsZVg6MX0pLnN0YXJ0KCk7XHJcbiAgICAvLyB9XHJcbiAgIFxyXG4gICAgLy8gc3RhcnQoKSB7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=