
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
        _this.idCard = 0;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Card.prototype.setData = function (id) {
        this.idCard = id;
        this.nCardSpf.getComponent(cc.Sprite).spriteFrame = CardHero_GameView_1.default.instance.listSpfCards[id];
    };
    Card.prototype.onClickCards = function () {
        console.log("id ", this.idCard);
        this.flipCard();
    };
    Card.prototype.flipCard = function () {
        var _this = this;
        cc.tween(this.node)
            .to(0.3, { scaleX: 0 })
            .call(function () {
            if (!_this.nCardFront.active) {
                _this.nCardFront.active = true;
                _this.nCardBack.active = false;
            }
            else {
                _this.nCardFront.active = false;
                _this.nCardBack.active = true;
            }
        })
            .to(0.3, { scaleX: 1 })
            .start();
    };
    Card.prototype.flipToFront = function () {
        var _this = this;
        // Đảm bảo thẻ hiện tại đang ở trạng thái mặt sau
        if (this.nCardFront.active) {
            cc.tween(this.node)
                .to(0.3, { scaleX: 0 })
                .call(function () {
                _this.nCardFront.active = false;
                _this.nCardBack.active = true;
            })
                .to(0.3, { scaleX: 1 })
                .start();
        }
    };
    Card.prototype.start = function () {
        // Khởi tạo trạng thái thẻ (mặt sau)
        this.nCardFront.active = true;
        this.nCardBack.active = false;
        // Lật thẻ trở lại mặt trước sau 3 giây
        this.scheduleOnce(this.flipToFront, 3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uQ2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix5REFBMkM7QUFFckMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFpRUM7UUE5REUsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBRyxDQUFDLENBQUM7O1FBcURWLGlCQUFpQjtJQUNyQixDQUFDO0lBckRHLHdCQUF3QjtJQUV4QixlQUFlO0lBQ2Ysc0JBQU8sR0FBUCxVQUFRLEVBQUU7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLDJCQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQsMkJBQVksR0FBWjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHVCQUFRLEdBQVI7UUFBQSxpQkFjQztRQWJHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDdEIsSUFBSSxDQUFDO1lBQ0YsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO2dCQUN6QixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNqQztpQkFBTTtnQkFDSCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNoQztRQUNMLENBQUMsQ0FBQzthQUNELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDdEIsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELDBCQUFXLEdBQVg7UUFBQSxpQkFZQztRQVhHLGlEQUFpRDtRQUNqRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDZCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUN0QixJQUFJLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDakMsQ0FBQyxDQUFDO2lCQUNELEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ3RCLEtBQUssRUFBRSxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQUVELG9CQUFLLEdBQUw7UUFDSSxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUU5Qix1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUEzREY7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ087SUFUUCxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBaUV4QjtJQUFELFdBQUM7Q0FqRUQsQUFpRUMsQ0FqRWlDLEVBQUUsQ0FBQyxTQUFTLEdBaUU3QztrQkFqRW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL0NhcmRIZXJvLkdhbWVWaWV3XCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgbkNhcmRCYWNrOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICBuQ2FyZEZyb250OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICBuQ2FyZFNwZjogY2MuTm9kZSA9IG51bGw7XG5cbiAgIGlkQ2FyZCA9IDA7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cbiAgICBzZXREYXRhKGlkKSB7XG4gICAgICAgIHRoaXMuaWRDYXJkID0gaWQ7XG4gICAgICAgIHRoaXMubkNhcmRTcGYuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBHYW1lVmlldy5pbnN0YW5jZS5saXN0U3BmQ2FyZHNbaWRdO1xuICAgIH1cblxuICAgIG9uQ2xpY2tDYXJkcygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpZCBcIiwgdGhpcy5pZENhcmQpO1xuICAgICAgICB0aGlzLmZsaXBDYXJkKCk7XG4gICAgfVxuXG4gICAgZmxpcENhcmQoKSB7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGVYOiAwIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm5DYXJkRnJvbnQuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubkNhcmRGcm9udC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5DYXJkQmFjay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5DYXJkRnJvbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubkNhcmRCYWNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGVYOiAxIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBmbGlwVG9Gcm9udCgpIHtcbiAgICAgICAgLy8gxJDhuqNtIGLhuqNvIHRo4bq7IGhp4buHbiB04bqhaSDEkWFuZyDhu58gdHLhuqFuZyB0aMOhaSBt4bq3dCBzYXVcbiAgICAgICAgaWYgKHRoaXMubkNhcmRGcm9udC5hY3RpdmUpIHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgICAgICAudG8oMC4zLCB7IHNjYWxlWDogMCB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uQ2FyZEZyb250LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5DYXJkQmFjay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuMywgeyBzY2FsZVg6IDEgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICAvLyBLaOG7n2kgdOG6oW8gdHLhuqFuZyB0aMOhaSB0aOG6uyAobeG6t3Qgc2F1KVxuICAgICAgICB0aGlzLm5DYXJkRnJvbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5uQ2FyZEJhY2suYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gTOG6rXQgdGjhursgdHLhu58gbOG6oWkgbeG6t3QgdHLGsOG7m2Mgc2F1IDMgZ2nDonlcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5mbGlwVG9Gcm9udCwgMyk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==