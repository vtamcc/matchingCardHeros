
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MatchingCardHeros/scripts/game/CardHero.LevelView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f2a0tW0utIa6pPN0DBS13j', 'CardHero.LevelView');
// MatchingCardHeros/scripts/game/CardHero.LevelView.ts

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
var CardHero_GameManager_1 = require("../CardHero.GameManager");
var CardHero_Global_1 = require("../CardHero.Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Level = /** @class */ (function (_super) {
    __extends(Level, _super);
    function Level() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prfShopView = null;
        _this.lbGold = null;
        return _this;
        // update (dt) {}
    }
    Level_1 = Level;
    Level.prototype.onLoad = function () {
        Level_1.instance = this;
        CardHero_Global_1.Global.totalGold = parseInt(cc.sys.localStorage.getItem("totalGold"), CardHero_Global_1.Global.totalGold) || CardHero_Global_1.Global.totalGold;
        this.updateGold();
        console.log("Tien ", CardHero_Global_1.Global.totalGold);
    };
    Level.prototype.onClickPlay = function () {
        CardHero_GameManager_1.default.instance.onClickPlay();
    };
    Level.prototype.onClickShopView = function () {
        var shopView = cc.instantiate(this.prfShopView);
        this.node.addChild(shopView);
    };
    Level.prototype.updateGold = function () {
        this.lbGold.string = '$' + CardHero_Global_1.Global.totalGold + ' ';
        cc.sys.localStorage.setItem("totalGold", CardHero_Global_1.Global.totalGold);
    };
    Level.prototype.clickRemoveCache = function () {
        cc.sys.localStorage.clear();
    };
    Level.prototype.start = function () {
    };
    var Level_1;
    // LIFE-CYCLE CALLBACKS:
    Level.instance = null;
    __decorate([
        property(cc.Prefab)
    ], Level.prototype, "prfShopView", void 0);
    __decorate([
        property(cc.Label)
    ], Level.prototype, "lbGold", void 0);
    Level = Level_1 = __decorate([
        ccclass
    ], Level);
    return Level;
}(cc.Component));
exports.default = Level;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NYXRjaGluZ0NhcmRIZXJvcy9zY3JpcHRzL2dhbWUvQ2FyZEhlcm8uTGV2ZWxWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLGdFQUFrRDtBQUNsRCxzREFBNEM7QUFHdEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUF1Q0M7UUFqQ0csaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsWUFBTSxHQUFhLElBQUksQ0FBQzs7UUE4QnhCLGlCQUFpQjtJQUNyQixDQUFDO2NBdkNvQixLQUFLO0lBU3RCLHNCQUFNLEdBQU47UUFDSSxPQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN0Qix3QkFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFDLHdCQUFNLENBQUMsU0FBUyxDQUFDLElBQUksd0JBQU0sQ0FBQyxTQUFTLENBQUM7UUFDM0csSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLHdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELDJCQUFXLEdBQVg7UUFDSSw4QkFBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsK0JBQWUsR0FBZjtRQUNJLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCwwQkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFJLHdCQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNuRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLHdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELGdDQUFnQixHQUFoQjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxxQkFBSyxHQUFMO0lBRUEsQ0FBQzs7SUFqQ0Qsd0JBQXdCO0lBQ1YsY0FBUSxHQUFVLElBQUksQ0FBQztJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eUNBQ0s7SUFSUCxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBdUN6QjtJQUFELFlBQUM7Q0F2Q0QsQUF1Q0MsQ0F2Q2tDLEVBQUUsQ0FBQyxTQUFTLEdBdUM5QztrQkF2Q29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gXCIuLi9DYXJkSGVyby5HYW1lTWFuYWdlclwiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uL0NhcmRIZXJvLkdsb2JhbFwiO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL0NhcmRIZXJvLkdhbWVWaWV3XCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICBcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBMZXZlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmZTaG9wVmlldzogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJHb2xkOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgTGV2ZWwuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBHbG9iYWwudG90YWxHb2xkID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG90YWxHb2xkXCIpLEdsb2JhbC50b3RhbEdvbGQpIHx8IEdsb2JhbC50b3RhbEdvbGQ7XG4gICAgICAgIHRoaXMudXBkYXRlR29sZCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRpZW4gXCIsIEdsb2JhbC50b3RhbEdvbGQpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tQbGF5KCkge1xuICAgICAgICBHYW1lTWFuYWdlci5pbnN0YW5jZS5vbkNsaWNrUGxheSgpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tTaG9wVmlldygpIHtcbiAgICAgICAgbGV0IHNob3BWaWV3ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZTaG9wVmlldylcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHNob3BWaWV3KTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlR29sZCgpIHtcbiAgICAgICAgdGhpcy5sYkdvbGQuc3RyaW5nID0gJyQnICsgIEdsb2JhbC50b3RhbEdvbGQgKyAnICc7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvdGFsR29sZFwiLCBHbG9iYWwudG90YWxHb2xkKTtcbiAgICB9XG4gICAgXG4gICAgY2xpY2tSZW1vdmVDYWNoZSgpIHtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=